/// <reference path="../../types/sn_typings_server_scoped/dist/index.d.ts" />

namespace x_g_inte_site_17 {
    export interface IProfileFieldDefinition {
        /**
         * The table column name.
         *
         * @type {string}
         * @memberof IProfileFieldDefinition
         */
        name: string;

        /**
         * The label for the field.
         *
         * @type {string}
         * @memberof IProfileFieldDefinition
         */
        label: string;

        /**
         * Adjective used for the field for failure messages.
         *
         * @type {string}
         * @memberof IProfileFieldDefinition
         */
        failAdj: string;
    }

    export interface IUserLookupResult {
        /**
         * The profile compliance check result code: 0=Success; 1=User not found; 2=Unexpected exception trying to find user.
         *
         * @type {number}
         * @memberof IUserProfileComplianceResult
         */
        code: number;

        /**
         * The sys_id of the sys_user that was found or the sys_id that was used for the user lookup.
         *
         * @type {(string | undefined)}
         * @memberof IUserLookupResult
         */
        sys_id?: string;

        /**
         * The user_id of the sys_user that was found or the user_id that was used for the user lookup.
         *
         * @type {(string | undefined)}
         * @memberof IUserLookupResult
         */
        user_id?: string;

        /**
         * The sys_user that was found.
         *
         * @type {(GlideRecord | GlideElementReference | undefined)}
         * @memberof IUserLookupResult
         */
        user?: GlideRecord | GlideElementReference;

        /**
         * The user lookup failure message.
         *
         * @type {string}
         * @memberof IUserLookupResult
         */
        message?: string;

        /**
         * Describes the fatal error.
         *
         * @type {(any | undefined)}
         * @memberof IUserProfileComplianceInfo
         */
        fault?: any;
    }

    export interface IComplianceCheckResult {
        /**
         * The label for the field that was checked.
         *
         * @type {string}
         * @memberof IProfileFieldDefinition
         */
        label: string;

        /**
         * Indicates whether the compliance check passed.
         *
         * @type {boolean}
         * @memberof IComplianceCheckResult
         */
        passed: boolean;

        /**
         * The field access failure message.
         *
         * @type {string}
         * @memberof IUserLookupResult
         */
        message?: string;

        /**
         * Describes the fatal error.
         *
         * @type {(any | undefined)}
         * @memberof IUserProfileComplianceInfo
         */
        fault?: any;
    }

    /**
     * User compliance check information
     *
     * @interface IUserProfileComplianceInfo
     */
    export interface IUserProfileComplianceInfo {
        /**
         * The number of compliance checks not evaluated due to fatal exception.
         *
         * @type {number}
         * @memberof IUserProfileComplianceInfo
         */
        notChecked: number;
        
        /**
         * The number of evaluated compliance checks that passed.
         *
         * @type {number}
         * @memberof IUserProfileComplianceInfo
         */
        passed: number;
        
        /**
         * The number of evaluated compliance checks that failed.
         *
         * @type {number}
         * @memberof IUserProfileComplianceInfo
         */
        failed: number;

        /**
         * Compliance check results by name.
         *
         * @type {(Record<string, IComplianceCheckResult> | undefined)}
         * @memberof IUserProfileComplianceInfo
         */
        results?: Record<string, IComplianceCheckResult>

        /**
         * Compliance check result message.
         *
         * @type {string}
         * @memberof IUserProfileComplianceInfo
         */
        message: string;

        /**
         * Describes the fatal error.
         *
         * @type {(any | undefined)}
         * @memberof IUserProfileComplianceInfo
         */
        fault?: any;
    }

    export interface IUserProfileComplianceResult extends IUserProfileComplianceInfo {
        /**
         * The profile compliance check result code: 0=Success; 1=User not found; 2=Unexpected exception trying to find user.
         *
         * @type {number}
         * @memberof IUserProfileComplianceResult
         */
        code: number;

        /**
         * The sys_id of the sys_user that was found or the sys_id that was used for the user lookup.
         *
         * @type {(string | undefined)}
         * @memberof IUserLookupResult
         */
        sys_id?: string;

        /**
         * The user_id of the sys_user that was found or the user_id that was used for the user lookup.
         *
         * @type {(string | undefined)}
         * @memberof IUserLookupResult
         */
        user_id?: string;
    }

    export interface IUserNotificationsResult {
        /**
         * The profile compliance check result code: 0=Success; 1=User not found; 2=Unexpected exception trying to find user.
         *
         * @type {number}
         * @memberof IUserProfileComplianceResult
         */
        code: number;

        /**
         * The sys_id of the sys_user that was found or the sys_id that was used for the user lookup.
         *
         * @type {(string | undefined)}
         * @memberof IUserLookupResult
         */
        sys_id?: string;
        
        /**
         * The user_id of the sys_user that was found or the user_id that was used for the user lookup.
         *
         * @type {(string | undefined)}
         * @memberof IUserLookupResult
         */
        user_id?: string;

        /**
         * Profile compliance check information.
         *
         * @type {IUserProfileComplianceInfo}
         * @memberof IUserNotificationsResult
         */
        profileCompliance: IUserProfileComplianceInfo;
    }

    export interface IPhoneAndOrg {
        org: string;
        phone: string;
    }

    export interface IProfileValidator extends $$snClass.ICustomClassBase<IProfileValidator, "ProfileValidator"> {
        /**
         * Gets compliance check information for the user indicated by the 'sysparm_user_id' parameter.
         *
         * @returns {(string | undefined)} A JSON string containing an {@link IUserProfileComplianceResult} object that describes the result of the compliance check.
         * @memberof IProfileValidatorPrototype
         */
        getUserProfileCompliance(): string | undefined;

        /**
         * Gets compliance check notifications for the user indicated by the 'sysparm_user_id' parameter.
         *
         * @returns {(string | undefined)} A JSON string containing an {@link IUserNotificationsResult} object that contains the compliance notification information.
         * @memberof IProfileValidatorPrototype
         */
        getUserNotifications(): string | undefined;

        getUserPhoneAndOrg(): void;

        getUserPhone(): string;

        getUserOrg(): string;
    }

    export interface IProfileValidatorPrototype extends $$snClass.ICustomAjaxClassPrototype<IProfileValidator, IProfileValidatorPrototype, "ProfileValidator">, IProfileValidator {
    }

    export declare type ProfileValidator = Readonly<IProfileValidator>;

    export interface ProfileValidatorConstructor extends $$snClass.CustomAjaxClassConstructor<IProfileValidator, IProfileValidatorPrototype, ProfileValidator> {
        new(request?: GlideServletRequest, responseXML?: XMLDocument2, gc?: GlideController): ProfileValidator;
        (request?: GlideServletRequest, responseXML?: XMLDocument2, gc?: GlideController): ProfileValidator;
        /**
         * Indicates whether the user lookup result represents a fatal error.
         *
         * @param {IUserLookupResult} result The user lookup result object
         * @returns {boolean} true if the user lookup result indicates a fatal error; otherwise, false.
         * @memberof ProfileValidatorConstructor
         */
        isUserLookupFault(result: IUserLookupResult): boolean;

        /**
         * Attempts to get a related user or look up a user.
         *
         * @param {(GlideRecord | GlideElementReference | string)} user - The object referring to a user, a sys_id for a user or a user name (user_id).
         * @returns {IUserLookupResult} An object that represents the result of detecting the associated user or looking up the user.
         * @memberof ProfileValidatorConstructor
         */
        getUserLookupResult(user: GlideRecord | GlideElementReference | string): IUserLookupResult;

        /**
         * Does a compliance check for the specified sys_user.
         *
         * @param {(GlideRecord | GlideElementReference)} sys_user - The user to validate.
         * @returns {IUserProfileComplianceInfo} An object that describes the compliance check result.
         * @memberof ProfileValidatorConstructor
         */
        checkUserProfileCompliance(sys_user: GlideRecord | GlideElementReference): IUserProfileComplianceInfo;

        /**
         * Gets compliance check information for the specified user.
         *
         * @param {(GlideRecord | GlideElementReference | string)} user - The object referring to a user, a sys_id for a user or a user name (user_id).
         * @returns {IUserProfileComplianceResult} An object that describes the result of the compliance check.
         * @memberof ProfileValidatorConstructor
         */
        getUserProfileCompliance(user: GlideRecord | GlideElementReference | string): IUserProfileComplianceResult;

        /**
         * Gets compliance check notifications for the specified user.
         *
         * @param {(GlideRecord | GlideElementReference | string)} user - The object referring to a user, a sys_id for a user or a user name (user_id).
         * @returns {IUserNotificationsResult} An object that contains the compliance notification information.
         * @memberof ProfileValidatorConstructor
         */
        getUserNotifications(user: GlideRecord | GlideElementReference | string): IUserNotificationsResult;

        getProfilePhoneFields(): string[];

        getProfileComplianceCheckFields(): string[];

        getUserPhoneAndOrg(user?: string | sys_userGlideRecord | sys_userElement): IPhoneAndOrg | undefined;

        getUserPhone(user?: string | sys_userGlideRecord | sys_userElement): string | undefined;

        getUserOrg(user?: string | sys_userGlideRecord | sys_userElement): string | undefined;
    }

    export const ProfileValidator: ProfileValidatorConstructor = (function (): ProfileValidatorConstructor {
        var constructor: ProfileValidatorConstructor = Class.create();

        const SYSID_RE = /^[\da-f]{32}$/i;
        const XMLNAME_result = 'result';
        const XMLNAME_org = 'org';
        const XMLNAME_phone = 'phone';
        const XMLNAME_ = '';
        const PARAMNAME_user_id = 'sysparm_user_id';
        const PARAMNAME_ = '';
        const PROPERTY_NAME_profile_phone_fields = 'x_g_inte_site_17.profile_phone_fields';
        const PROPERTY_NAME_profile_compliance_check_fields = 'x_g_inte_site_17.profile_compliance_check_fields';

        function isNil(obj: any | undefined): obj is undefined | null | "" {
            switch (typeof obj) {
                case 'undefined':
                    return true;
                case 'number':
                    return isNaN(obj) || !isFinite(obj);
                case 'string':
                    return obj.trim().length == 0;
                case 'object':
                    if (obj === null) return true;
                    if (global.JSUtil.instance_of(obj, 'java.lang.String'))
                        return obj.length == 0 || ('' + obj).trim().length == 0;
                    if (obj instanceof GlideElement)
                        return obj.nil();
                    return false;
                default:
                    return false;
            }
        }

        function getProfileComplianceCheckFields(): string[] {
            var value = gs.getProperty(PROPERTY_NAME_profile_compliance_check_fields, '');
            if (isNil(value)) return [];
            return value.split(',').map(function(s: string) { return s.trim() }).filter(function(s: string) { return s.length > 0; });
        }

        function getProfilePhoneFields(): string[] {
            var value = gs.getProperty(PROPERTY_NAME_profile_phone_fields, '');
            if (isNil(value)) return [];
            return value.split(',').map(function(s: string) { return s.trim() }).filter(function(s: string) { return s.length > 0; });
        }

        function getUserPhone(gr: sys_userGlideRecord): string {
            var phoneFields = getProfilePhoneFields();
            if (phoneFields.length > 0) {
                for (var i = 0; i < phoneFields.length; i++) {
                    var e = <GlideElement | undefined | null>(<{[key: string]: any}><GlideRecord>gr)[phoneFields[i]];
                    if (!isNil(e))
                        return e.getDisplayValue();
                }
            }
            return '';
        }

        function getUserOrg(gr: sys_userGlideRecord): string {
            var org: string = (<GlideElement>gr.department).getDisplayValue();
            if (gs.nil(org)) {
                org = (<GlideElement>gr.company).getDisplayValue();
                if (gs.nil(org)) return '';
            }
            return org;
        }

        function asValidUserGlideRecord(user?: $$rhino.String | sys_userGlideRecord | sys_userElement): sys_userGlideRecord | undefined {
            var sys_id: string;
            if (typeof user === 'undefined')
                sys_id = gs.getUserID();
            else if (typeof user === 'object') {
                if (user === null)
                    sys_id = gs.getUserID();
                else if (global.JSUtil.instance_of(user, 'java.lang.String')) {
                    if ((sys_id = ('' + user).trim()).length == 0)
                        sys_id = gs.getUserID();
                } else {
                    if (user instanceof GlideRecord) {
                        if (user.isValid() && user.getTableName() == 'sys_user') return user;
                    } else if (user instanceof GlideElementReference && !user.nil() && user.getTableName() == 'sys_user')
                        return <sys_userGlideRecord>(<GlideElementReference>user).getRefRecord();
                    return;
                }
            }
            else if (typeof user === 'string') {
                if ((sys_id = user.trim()).length == 0)
                    sys_id = gs.getUserID();
            } else
                return;
            var gr: sys_userGlideRecord = <sys_userGlideRecord>new GlideRecord('sys_user');
            gr.addQuery('sys_id', sys_id);
            gr.query();
            if (gr.next()) return gr;
        }

        function getUserPhoneAndOrg(user?: string | sys_userGlideRecord | sys_userElement): IPhoneAndOrg | undefined {
            var gr: sys_userGlideRecord | undefined = asValidUserGlideRecord(user);
            if (typeof gr !== 'undefined') return { org: getUserOrg(gr), phone: getUserPhone(gr) };
        }

        function getUserIdFromParameter(this: IAbstractAjaxProcessor): string | undefined {
            var userId = this.getParameter(PARAMNAME_user_id);
            return isNil(userId) ? gs.getUserID() : (typeof userId === 'string') ? userId : '' + userId;
        }

        constructor.isUserLookupFault = function(result: IUserLookupResult): boolean {
            return typeof result === 'object' && null != result && result.code !== 0;
        };

        constructor.getUserLookupResult = function(user: GlideRecord | GlideElementReference | string): IUserLookupResult {
            var user_id, sys_id;
            if (typeof user === 'object') {
                if (user != null) {
                    if (user instanceof GlideRecord || user instanceof GlideElement) {
                        return { code: 0, sys_id: ('' + user.sys_id), user_id: ('' + (<{ [key: string]: any}>user).user_id), user: user };
                    }
                    if (user instanceof GlideUser)
                        sys_id = user_id = '' + user.getID();
                    else
                        user_id = ('' + user).trim();
                } else
                    sys_id = user_id = '' + gs.getUserID();
            } else if (typeof user === 'undefined' || (user_id = ('' + user).trim()).length == 0)
                sys_id = user_id = '' + gs.getUserID();
            try {
                var gr = new GlideRecord('sys_user');
                if (typeof sys_id === 'string') {
                    gr.addQuery('sys_id', sys_id);
                    gr.query();
                    if (gr.next())
                        return { code: 0, sys_id: sys_id, user_id: user_id, user: gr };
                } else {
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
            } catch (e) {
                return { code: 2, user_id: user_id, sys_id: sys_id, message: 'Unexpected exception while looking up user record', fault: e };
            }
            if (typeof sys_id === 'string')
                return { code: 1, user_id: user_id, sys_id: sys_id, message: 'User with sys_id "' + sys_id + '" not found' };
            if (SYSID_RE.test(user_id))
                return { code: 1, user_id: user_id, sys_id: user_id.toLowerCase(), message: 'User with sys_id or user_name "' + user_id + '" not found' };
            return { code: 1, user_id: user_id, message: 'User with user_name "' + user_id + '" not found' };
        };

        constructor.checkUserProfileCompliance = function(sys_user: GlideRecord | GlideElementReference): IUserProfileComplianceInfo {
            var profile_fields = getProfileComplianceCheckFields();
            if (sys_user instanceof GlideElementReference)
                sys_user = <GlideRecord>sys_user.getRefRecord();
            if (profile_fields.length == 0)
                return {
                    failed: 0,
                    notChecked: 0,
                    passed: 0,
                    message: 'No fields to check'
                };
            var result: IUserProfileComplianceInfo = <IUserProfileComplianceInfo>{
                notChecked: 0,
                results: {}
            };
            var labelMap: { [key: string]: string } = {};
            var failed = profile_fields.filter(function(fieldName: string): boolean {
                var e = (<{[key: string]: any}>sys_user)[fieldName];
                if (typeof e === 'undefined' || e === null) {
                    result.notChecked++;
                    labelMap[fieldName] = fieldName;
                    (<{[key: string]: any}>result.results)[fieldName] = {
                        label: fieldName,
                        message: 'Field does not exist',
                        fault: e,
                        passed: false
                    };
                } else {
                    labelMap[fieldName] = e.getLabel();
                    try {
                        var v = (<GlideRecord>sys_user).getValue(fieldName);
                        if (isNil(v)) {
                            (<{[key: string]: any}>result.results)[fieldName] = { label: labelMap[fieldName], passed: false };
                            return true;
                        }
                        (<{[key: string]: any}>result.results)[fieldName] = { label: labelMap[fieldName], passed: true };
                    } catch (e) {
                        result.notChecked++;
                        (<{[key: string]: any}>result.results)[fieldName] = {
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
            } else {
                var last = <string>failed.pop();
                if (result.notChecked == 0) {
                    if (failed.length == 0)
                        result.message = labelMap[last] + " was not provided.";
                    else
                        result.message = failed.map(function(value) { return labelMap[value]; }).join(", ") + " and " + labelMap[last] + " are empty.";
                } else if (result.notChecked == 1) {
                    if (failed.length == 0)
                        result.message = labelMap[last] + " was not provided; 1 check failed due to unexpected error.";
                    else
                        result.message = failed.map(function(value) { return labelMap[value]; }).join(", ") + " and " + labelMap[last] + " are empty; 1 check failed due to unexpected error.";
                } else if (failed.length == 0)
                    result.message = labelMap[last] + " was not provided; " + result.notChecked + " checks failed due to unexpected errors.";
                else
                    result.message = failed.map(function(value) { return labelMap[value]; }).join(", ") + " and " + labelMap[last] + " are empty; " + result.notChecked + " checks failed due to unexpected errors.";
            }
            return result;
        };

        constructor.getUserProfileCompliance = function(user: GlideRecord | GlideElementReference | string): IUserProfileComplianceResult {
            var getUserResponse: IUserLookupResult = constructor.getUserLookupResult(user);
            if (constructor.isUserLookupFault(getUserResponse))
                return {
                    code: getUserResponse.code,
                    user_id: getUserResponse.user_id,
                    sys_id: getUserResponse.sys_id,
                    message: <string>getUserResponse.message,
                    fault: getUserResponse.fault,
                    passed: 0,
                    failed: 0,
                    notChecked: getProfileComplianceCheckFields().length
                };
            var result = <IUserProfileComplianceResult>constructor.checkUserProfileCompliance(<GlideRecord>getUserResponse.user);
            result.code = 0;
            result.user_id = getUserResponse.user_id;
            result.sys_id = getUserResponse.sys_id;
            return result;
        };

        constructor.getUserNotifications = function(user: GlideRecord | GlideElementReference | string): IUserNotificationsResult {
            var getUserResponse: IUserLookupResult = constructor.getUserLookupResult(user);
            if (constructor.isUserLookupFault(getUserResponse))
                return {
                    code: getUserResponse.code,
                    user_id: getUserResponse.user_id,
                    sys_id: getUserResponse.sys_id,
                    profileCompliance: {
                        message: <string>getUserResponse.message,
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
                profileCompliance: constructor.checkUserProfileCompliance(<GlideRecord>getUserResponse.user)
            };
        };

        constructor.getUserPhoneAndOrg = getUserPhoneAndOrg;

        constructor.getUserPhone = function(user?: string | sys_userGlideRecord | sys_userElement): string | undefined {
            var gr: sys_userGlideRecord | undefined = asValidUserGlideRecord(user);
            if (typeof gr !== 'undefined') return getUserPhone(gr);
        };

        constructor.getUserOrg = function(user?: string | sys_userGlideRecord | sys_userElement): string | undefined {
            var gr: sys_userGlideRecord | undefined = asValidUserGlideRecord(user);
            if (typeof gr !== 'undefined') return getUserOrg(gr);
        };

        constructor.prototype = Object.extendsObject<IAbstractAjaxProcessor, IProfileValidatorPrototype>(global.AbstractAjaxProcessor, {
            getUserProfileCompliance: function(this: IProfileValidatorPrototype & IAbstractAjaxProcessor): string | undefined {
                var response = constructor.getUserProfileCompliance('' + this.getParameter(PARAMNAME_user_id));
                if (constructor.isUserLookupFault(response))
                    this.setError(response);
                else
                    return JSON.stringify(response);
            },
            
            getUserNotifications: function(this: IProfileValidatorPrototype & IAbstractAjaxProcessor): string | undefined {
                var response = constructor.getUserNotifications('' + this.getParameter(PARAMNAME_user_id));
                if (constructor.isUserLookupFault(response))
                    this.setError(response);
                else
                    return JSON.stringify(response);
            },

            getUserPhoneAndOrg: function(this: IProfileValidatorPrototype & IAbstractAjaxProcessor): void {
                var result = this.newItem(XMLNAME_result)
                var phoneAndOrg = getUserPhoneAndOrg(getUserIdFromParameter.call(this));
                if (typeof phoneAndOrg === 'undefined') {
                    result.setAttribute(XMLNAME_org, '');
                    result.setAttribute(XMLNAME_phone, '');
                } else {
                    result.setAttribute(XMLNAME_org, phoneAndOrg.org);
                    result.setAttribute(XMLNAME_phone, phoneAndOrg.phone);
                }
            },

            getUserPhone: function(this: IProfileValidatorPrototype & IAbstractAjaxProcessor): string {
                var gr: sys_userGlideRecord | undefined = asValidUserGlideRecord(getUserIdFromParameter.call(this));
                return (typeof gr !== 'undefined') ? getUserPhone(gr) : '';
            },

            getUserOrg: function(this: IProfileValidatorPrototype & IAbstractAjaxProcessor): string {
                var gr: sys_userGlideRecord | undefined = asValidUserGlideRecord(getUserIdFromParameter.call(this));
                return (typeof gr !== 'undefined') ? getUserOrg(gr) : '';
            },

            type: "ProfileValidator"
        });

        
        constructor.getProfileComplianceCheckFields = getProfileComplianceCheckFields;

        constructor.getProfilePhoneFields = getProfilePhoneFields;

        return constructor;
    })();
}