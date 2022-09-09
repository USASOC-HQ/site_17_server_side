"use strict";
/// <reference path="../../types/sn_typings_server_scoped/dist/index.d.ts" />
var x_g_inte_site_17;
(function (x_g_inte_site_17) {
    x_g_inte_site_17.ProfileValidator = (function () {
        var constructor = Class.create();
        var SYSID_RE = /^[\da-f]{32}$/i;
        var XMLNAME_result = 'result';
        var XMLNAME_org = 'org';
        var XMLNAME_phone = 'phone';
        var XMLNAME_ = '';
        var PARAMNAME_user_id = 'sysparm_user_id';
        var PARAMNAME_ = '';
        var PROPERTY_NAME_profile_phone_fields = 'x_g_inte_site_17.profile_phone_fields';
        var PROPERTY_NAME_profile_compliance_check_fields = 'x_g_inte_site_17.profile_compliance_check_fields';
        function isNil(obj) {
            switch (typeof obj) {
                case 'undefined':
                    return true;
                case 'number':
                    return isNaN(obj) || !isFinite(obj);
                case 'string':
                    return obj.trim().length == 0;
                case 'object':
                    if (obj === null)
                        return true;
                    if (global.JSUtil.instance_of(obj, 'java.lang.String'))
                        return obj.length == 0 || ('' + obj).trim().length == 0;
                    if (obj instanceof GlideElement)
                        return obj.nil();
                    return false;
                default:
                    return false;
            }
        }
        function getProfileComplianceCheckFields() {
            var value = gs.getProperty(PROPERTY_NAME_profile_compliance_check_fields, '');
            if (isNil(value))
                return [];
            return value.split(',').map(function (s) { return s.trim(); }).filter(function (s) { return s.length > 0; });
        }
        function getProfilePhoneFields() {
            var value = gs.getProperty(PROPERTY_NAME_profile_phone_fields, '');
            if (isNil(value))
                return [];
            return value.split(',').map(function (s) { return s.trim(); }).filter(function (s) { return s.length > 0; });
        }
        function getUserPhone(gr) {
            var phoneFields = getProfilePhoneFields();
            if (phoneFields.length > 0) {
                for (var i = 0; i < phoneFields.length; i++) {
                    var e = gr[phoneFields[i]];
                    if (!isNil(e))
                        return e.getDisplayValue();
                }
            }
            return '';
        }
        function getUserOrg(gr) {
            var org = gr.department.getDisplayValue();
            if (gs.nil(org)) {
                org = gr.company.getDisplayValue();
                if (gs.nil(org))
                    return '';
            }
            return org;
        }
        function asValidUserGlideRecord(user) {
            var sys_id;
            if (typeof user === 'undefined')
                sys_id = gs.getUserID();
            else if (typeof user === 'object') {
                if (user === null)
                    sys_id = gs.getUserID();
                else if (global.JSUtil.instance_of(user, 'java.lang.String')) {
                    if ((sys_id = ('' + user).trim()).length == 0)
                        sys_id = gs.getUserID();
                }
                else {
                    if (user instanceof GlideRecord) {
                        if (user.isValid() && user.getTableName() == 'sys_user')
                            return user;
                    }
                    else if (user instanceof GlideElementReference && !user.nil() && user.getTableName() == 'sys_user')
                        return user.getRefRecord();
                    return;
                }
            }
            else if (typeof user === 'string') {
                if ((sys_id = user.trim()).length == 0)
                    sys_id = gs.getUserID();
            }
            else
                return;
            var gr = new GlideRecord('sys_user');
            gr.addQuery('sys_id', sys_id);
            gr.query();
            if (gr.next())
                return gr;
        }
        function getUserPhoneAndOrg(user) {
            var gr = asValidUserGlideRecord(user);
            if (typeof gr !== 'undefined')
                return { org: getUserOrg(gr), phone: getUserPhone(gr) };
        }
        function getUserIdFromParameter() {
            var userId = this.getParameter(PARAMNAME_user_id);
            return isNil(userId) ? gs.getUserID() : (typeof userId === 'string') ? userId : '' + userId;
        }
        constructor.isUserLookupFault = function (result) {
            return typeof result === 'object' && null != result && result.code !== 0;
        };
        constructor.getUserLookupResult = function (user) {
            var user_id, sys_id;
            if (typeof user === 'object') {
                if (user != null) {
                    if (user instanceof GlideRecord || user instanceof GlideElement) {
                        return { code: 0, sys_id: ('' + user.sys_id), user_id: ('' + user.user_id), user: user };
                    }
                    if (user instanceof GlideUser)
                        sys_id = user_id = '' + user.getID();
                    else
                        user_id = ('' + user).trim();
                }
                else
                    sys_id = user_id = '' + gs.getUserID();
            }
            else if (typeof user === 'undefined' || (user_id = ('' + user).trim()).length == 0)
                sys_id = user_id = '' + gs.getUserID();
            try {
                var gr = new GlideRecord('sys_user');
                if (typeof sys_id === 'string') {
                    gr.addQuery('sys_id', sys_id);
                    gr.query();
                    if (gr.next())
                        return { code: 0, sys_id: sys_id, user_id: user_id, user: gr };
                }
                else {
                    if (SYSID_RE.test(user_id)) {
                        gr.addQuery('sys_id', user_id.toLowerCase());
                        gr.query();
                        if (gr.next())
                            return { code: 0, sys_id: sys_id, user_id: user_id, user: gr };
                        // In the off-chance that someone has a user_name that matches the pattern of a sys_id
                        gr = new GlideRecord('sys_user');
                    }
                    gr.addQuery('user_name', user_id);
                    gr.query();
                    if (gr.next())
                        return { code: 0, sys_id: '' + gr.sys_id, user_id: user_id, user: gr };
                }
            }
            catch (e) {
                return { code: 2, user_id: user_id, sys_id: sys_id, message: 'Unexpected exception while looking up user record', fault: e };
            }
            if (typeof sys_id === 'string')
                return { code: 1, user_id: user_id, sys_id: sys_id, message: 'User with sys_id "' + sys_id + '" not found' };
            if (SYSID_RE.test(user_id))
                return { code: 1, user_id: user_id, sys_id: user_id.toLowerCase(), message: 'User with sys_id or user_name "' + user_id + '" not found' };
            return { code: 1, user_id: user_id, message: 'User with user_name "' + user_id + '" not found' };
        };
        constructor.checkUserProfileCompliance = function (sys_user) {
            var profile_fields = getProfileComplianceCheckFields();
            if (sys_user instanceof GlideElementReference)
                sys_user = sys_user.getRefRecord();
            if (profile_fields.length == 0)
                return {
                    failed: 0,
                    notChecked: 0,
                    passed: 0,
                    message: 'No fields to check'
                };
            var result = {
                notChecked: 0,
                results: {}
            };
            var labelMap = {};
            var failed = profile_fields.filter(function (fieldName) {
                var e = sys_user[fieldName];
                if (typeof e === 'undefined' || e === null) {
                    result.notChecked++;
                    labelMap[fieldName] = fieldName;
                    result.results[fieldName] = {
                        label: fieldName,
                        message: 'Field does not exist',
                        fault: e,
                        passed: false
                    };
                }
                else {
                    labelMap[fieldName] = e.getLabel();
                    try {
                        var v = sys_user.getValue(fieldName);
                        if (isNil(v)) {
                            result.results[fieldName] = { label: labelMap[fieldName], passed: false };
                            return true;
                        }
                        result.results[fieldName] = { label: labelMap[fieldName], passed: true };
                    }
                    catch (e) {
                        result.notChecked++;
                        result.results[fieldName] = {
                            label: labelMap[fieldName],
                            message: 'Unexpected exception accessing field',
                            fault: e,
                            passed: false
                        };
                    }
                }
                return false;
            });
            result.passed = profile_fields.length - ((result.failed = failed.length) + result.notChecked);
            if (failed.length == 0) {
                if (result.notChecked == 0)
                    result.message = "All compliance checks passed";
                else if (result.passed > 0)
                    result.message = (result.notChecked == 1) ? "One compliance check was inconclusive due to unexpected error; all other compliance checks passed." :
                        result.notChecked + " compliance checks were inconclusive due to unexpected errors; all other compliance checks passed.";
                else
                    result.message = "All compliance checks were inconclusive due to unexpected errors.";
            }
            else {
                var last = failed.pop();
                if (result.notChecked == 0) {
                    if (failed.length == 0)
                        result.message = labelMap[last] + " was not provided.";
                    else
                        result.message = failed.map(function (value) { return labelMap[value]; }).join(", ") + " and " + labelMap[last] + " are empty.";
                }
                else if (result.notChecked == 1) {
                    if (failed.length == 0)
                        result.message = labelMap[last] + " was not provided; 1 check failed due to unexpected error.";
                    else
                        result.message = failed.map(function (value) { return labelMap[value]; }).join(", ") + " and " + labelMap[last] + " are empty; 1 check failed due to unexpected error.";
                }
                else if (failed.length == 0)
                    result.message = labelMap[last] + " was not provided; " + result.notChecked + " checks failed due to unexpected errors.";
                else
                    result.message = failed.map(function (value) { return labelMap[value]; }).join(", ") + " and " + labelMap[last] + " are empty; " + result.notChecked + " checks failed due to unexpected errors.";
            }
            return result;
        };
        constructor.getUserProfileCompliance = function (user) {
            var getUserResponse = constructor.getUserLookupResult(user);
            if (constructor.isUserLookupFault(getUserResponse))
                return {
                    code: getUserResponse.code,
                    user_id: getUserResponse.user_id,
                    sys_id: getUserResponse.sys_id,
                    message: getUserResponse.message,
                    fault: getUserResponse.fault,
                    passed: 0,
                    failed: 0,
                    notChecked: getProfileComplianceCheckFields().length
                };
            var result = constructor.checkUserProfileCompliance(getUserResponse.user);
            result.code = 0;
            result.user_id = getUserResponse.user_id;
            result.sys_id = getUserResponse.sys_id;
            return result;
        };
        constructor.getUserNotifications = function (user) {
            var getUserResponse = constructor.getUserLookupResult(user);
            if (constructor.isUserLookupFault(getUserResponse))
                return {
                    code: getUserResponse.code,
                    user_id: getUserResponse.user_id,
                    sys_id: getUserResponse.sys_id,
                    profileCompliance: {
                        message: getUserResponse.message,
                        passed: 0,
                        failed: 0,
                        notChecked: getProfileComplianceCheckFields().length,
                        fault: getUserResponse.fault
                    }
                };
            return {
                code: 0,
                user_id: getUserResponse.user_id,
                sys_id: getUserResponse.sys_id,
                profileCompliance: constructor.checkUserProfileCompliance(getUserResponse.user)
            };
        };
        constructor.getUserPhoneAndOrg = getUserPhoneAndOrg;
        constructor.getUserPhone = function (user) {
            var gr = asValidUserGlideRecord(user);
            if (typeof gr !== 'undefined')
                return getUserPhone(gr);
        };
        constructor.getUserOrg = function (user) {
            var gr = asValidUserGlideRecord(user);
            if (typeof gr !== 'undefined')
                return getUserOrg(gr);
        };
        constructor.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
            getUserProfileCompliance: function () {
                var response = constructor.getUserProfileCompliance('' + this.getParameter(PARAMNAME_user_id));
                if (constructor.isUserLookupFault(response))
                    this.setError(response);
                else
                    return JSON.stringify(response);
            },
            getUserNotifications: function () {
                var response = constructor.getUserNotifications('' + this.getParameter(PARAMNAME_user_id));
                if (constructor.isUserLookupFault(response))
                    this.setError(response);
                else
                    return JSON.stringify(response);
            },
            getUserPhoneAndOrg: function () {
                var result = this.newItem(XMLNAME_result);
                var phoneAndOrg = getUserPhoneAndOrg(getUserIdFromParameter.call(this));
                if (typeof phoneAndOrg === 'undefined') {
                    result.setAttribute(XMLNAME_org, '');
                    result.setAttribute(XMLNAME_phone, '');
                }
                else {
                    result.setAttribute(XMLNAME_org, phoneAndOrg.org);
                    result.setAttribute(XMLNAME_phone, phoneAndOrg.phone);
                }
            },
            getUserPhone: function () {
                var gr = asValidUserGlideRecord(getUserIdFromParameter.call(this));
                return (typeof gr !== 'undefined') ? getUserPhone(gr) : '';
            },
            getUserOrg: function () {
                var gr = asValidUserGlideRecord(getUserIdFromParameter.call(this));
                return (typeof gr !== 'undefined') ? getUserOrg(gr) : '';
            },
            type: "ProfileValidator"
        });
        constructor.getProfileComplianceCheckFields = getProfileComplianceCheckFields;
        constructor.getProfilePhoneFields = getProfilePhoneFields;
        return constructor;
    })();
})(x_g_inte_site_17 || (x_g_inte_site_17 = {}));
