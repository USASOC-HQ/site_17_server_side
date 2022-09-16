"use strict";
/// <reference path="../../types/sn_typings_server_scoped/dist/index.d.ts" />
var x_g_inte_site_17;
(function (x_g_inte_site_17) {
    ;
    x_g_inte_site_17.Site17Util = (function () {
        var constructor = Class.create();
        // #region Static members
        // #region Record object methods
        /**
         * Tests whether a given LDAP Distinguished Name is to be considered that of a Site 17 user.
         * @param {string} sourceDN - The LDAP Distinguished Name.
         * @return {boolean} True if the given DN is for a Site 17 user; otherwise, false.
         * @static
         * @memberof Site17Util
         */
        constructor.isUser = function (target) {
            return !gs.nil(target) && isUser(target);
        };
        /**
         * Tests whether the record or element represents a Group record (sys_user_group).
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {boolean} true if the target record or element is a Group record; otherwise, false.
         * @static
         * @memberof Site17Util
         */
        constructor.isGroup = function (target) {
            return !gs.nil(target) && isGroup(target);
        };
        /**
         * Tests whether the record or element is a VIP user or is associated with a VIP user.
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {boolean} true if the target record or element is a VIP user or if the user that is the target (ie. caller, requestor) of that record is a VIP user;
         * otherwise, false.
         * @static
         * @memberof Site17Util
         * @description If the target is not itself a sys_user record or element, this checks the properties of the following record types to determine the associated user:
         * Incident Caller (incident.caller_id, incident_task.incident.caller_id),
         * Requested For (sc_request.requested_for, sc_req_item.request.requested_for", "sc_task.request.requested_for),
         * Opened For (sm_order.opened_for, sn_si_incident.opened_for),
         * Move User (change_request_imac.move_user) and
         * Affected User (sm_order.affected_user, sn_si_incident.affected_user, sn_si_task.affected_user).
         */
        constructor.isVip = function (target) {
            return !gs.nil(target) && isVip(target);
        };
        /**
         * Gets the User record (sys_user) associated with the target glide record or element.
         * @param {(GlideRecord | GlideElementReference)} target - The target glide record or referenc element.
         * @return {(sys_userGlideRecord | undefined)} The Glide record of the associated user or undefined if the associated user was nil or could not be determined.
         * @static
         * @memberof Site17Util
         * @description If the target is not itself a sys_user record or element, this checks the properties of the following record types to determine the associated user:
         * Incident Caller (incident.caller_id, incident_task.incident.caller_id),
         * Requested For (sc_request.requested_for, sc_req_item.request.requested_for", "sc_task.request.requested_for),
         * Opened For (sm_order.opened_for, sn_si_incident.opened_for),
         * Move User (change_request_imac.move_user) and
         * Affected User (sm_order.affected_user, sn_si_incident.affected_user, sn_si_task.affected_user).
         */
        constructor.getCaller = function (target) {
            if (!gs.nil(target)) {
                var c = getCaller(target);
                if (typeof c !== 'undefined')
                    return c.getRefRecord();
            }
        };
        /**
         * Tests whether the record or element represents a Business Unit record (business_unit).
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {boolean} true if the target record or element is a Business Unit record; otherwise, false.
         * @static
         * @memberof Site17Util
         */
        constructor.isBusinessUnit = function (target) {
            return !gs.nil(target) && isBusinessUnit(target);
        };
        /**
         * Tests whether the record or element represents a Department record (cmn_department).
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {boolean} true if the target record or element is a Department record; otherwise, false.
         * @static
         * @memberof Site17Util
         */
        constructor.isDepartment = function (target) {
            return !gs.nil(target) && isDepartment(target);
        };
        /**
         * Tests whether the record or element represents a Company record (core_company).
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {boolean} true if the target record or element is Company Group record; otherwise, false.
         * @static
         * @memberof Site17Util
         */
        constructor.isCompany = function (target) {
            return !gs.nil(target) && isCompany(target);
        };
        /**
         * Tests whether the record or element represents a Location record (cmn_location).
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {boolean} true if the target record or element is a Location record; otherwise, false.
         * @static
         * @memberof Site17Util
         */
        constructor.isLocation = function (target) {
            return !gs.nil(target) && isLocation(target);
        };
        /**
         * Tests whether the record or element represents a Building record (cmn_building).
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {boolean} true if the target record or element is a Building record; otherwise, false.
         * @static
         * @memberof Site17Util
         */
        constructor.isBuilding = function (target) {
            return !gs.nil(target) && isBuilding(target);
        };
        /**
         * Gets the Business Unit record (business_unit) associated with the target glide record or element.
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {(business_unitGlideRecord | undefined)} The Glide record of the associated business unit or undefined if the associated business unit was nil or could not be determined.
         * @static
         * @memberof Site17Util
         * @description This will search the associated fields of many records to determine the associated business unit, if necessary.
         */
        constructor.getBusinessUnit = function (target) {
            if (!gs.nil(target)) {
                if (isBusinessUnit(target))
                    return (target instanceof GlideRecord) ? target : target.getRefRecord();
                var b = getBusinessUnit(target);
                if (typeof b !== 'undefined')
                    return b.getRefRecord();
            }
        };
        /**
         * Gets the Company record (core_company) associated with the target glide record or element.
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {(core_companyGlideRecord | undefined)} The Glide record of the associated company or undefined if the associated company was nil or could not be determined.
         * @static
         * @memberof Site17Util
         * @description This will search the associated fields of many records to determine the associated company, if necessary.
         */
        constructor.getCompany = function (target) {
            if (!gs.nil(target)) {
                if (isCompany(target))
                    return (target instanceof GlideRecord) ? target : target.getRefRecord();
                var c = getCompany(target);
                if (typeof c !== 'undefined')
                    return c.getRefRecord();
            }
        };
        /**
         * Gets the Location record (cmn_location) associated with the target glide record or element.
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {(cmn_locationGlideRecord | undefined)} The Glide record of the associated location or undefined if the associated location was nil or could not be determined.
         * @static
         * @memberof Site17Util
         * @description This will search the associated fields of many records to determine the associated location, if necessary.
         */
        constructor.getLocation = function (target) {
            if (!gs.nil(target)) {
                if (isLocation(target))
                    return (target instanceof GlideRecord) ? target : target.getRefRecord();
                var l = getLocation(target);
                if (typeof l !== 'undefined')
                    return l.getRefRecord();
            }
        };
        // #endregion
        // #region Active Directory-related methods
        /**
         * Determines whether a specified DistinguishedName is contained within another.
         * @param {($$rhino.String | null)} [sourceDN] - The DistinguishedName to check.
         * @param {($$rhino.String | null)} [containerDN] - The parent DistinguishedName.
         * @return {boolean} true if the source DN is contained within the container DN; otherwise, false.
         * @static
         * @memberof Site17Util
         */
        constructor.isDnContainedBy = function (sourceDN, containerDN) {
            var c;
            if (typeof sourceDN === 'string') {
                if (!testDistinguishedName(sourceDN))
                    return false;
                if (typeof containerDN === 'string')
                    return containerDN == sourceDN || (testDistinguishedName(containerDN) && isDnContainedBy(sourceDN, containerDN));
                return !gs.nil(containerDN) && ((c = '' + containerDN) == sourceDN || (testDistinguishedName(c) && isDnContainedBy(sourceDN, c)));
            }
            if (gs.nil(sourceDN))
                return false;
            var s = '' + sourceDN;
            if (!testDistinguishedName(s))
                return false;
            if (typeof containerDN === 'string')
                return containerDN == s || (testDistinguishedName(containerDN) && isDnContainedBy(s, containerDN));
            return (c = '' + containerDN) == s || (testDistinguishedName(c) && isDnContainedBy(s, c));
        };
        /**
         * Checks whether a string contains a valid LDAP Distinguished Name.
         * @param {($$rhino.String | null)} [value] - The target string value.
         * @return {boolean} True if the given string represents a valid LDAP distinguished name; otherwise, false.
         * @static
         * @memberof Site17Util
         */
        constructor.testDistinguishedName = function (value) {
            if (typeof value === 'string')
                return testDistinguishedName(value);
            return !gs.nil(value) && testDistinguishedName('' + value);
        };
        /**
         * Gets the LDAP Distinguished Name of the container for all Site 17 users.
         * @return {string} The value of the "x_g_inte_site_17.source_dn_users" system property or empty if the property is not defined.
         * @static
         * @memberof Site17Util
         */
        constructor.getUsersContainerDN = function () {
            return '' + gs.getProperty(PROPERTY_NAME_source_dn_users, '');
        };
        /**
         * Gets the LDAP Distinguished Name of the container for all Site 17 groups.
         * @return {string} The value of the "x_g_inte_site_17.source_dn_groups" system property or empty if the property is not defined.
         * @static
         * @memberof Site17Util
         */
        constructor.getGroupsContainerDN = function () {
            return '' + gs.getProperty(PROPERTY_NAME_source_dn_groups, '');
        };
        /**
         * Gets a value indicating whether the user records with an empty Source property are considered Site 17 users.
         * @return {boolean} True if the "x_g_inte_site_17.source_user_include_empty" system property is set to "true"; otherwise, false.
         * @static
         * @memberof Site17Util
         */
        constructor.includeEmptyUserSource = function () {
            return gs.getProperty(PROPERTY_NAME_source_user_include_empty) == 'true';
        };
        /**
         * Gets a value indicating whether the group records with an empty Source property are considered Site 17 groups.
         * @return {boolean} True if the "x_g_inte_site_17.source_group_include_empty" system property is set to "true"; otherwise, false.
         * @static
         * @memberof Site17Util
         */
        constructor.includeEmptyGroupSource = function () {
            return gs.getProperty(PROPERTY_NAME_source_group_include_empty) == 'true';
        };
        /**
         * Tests whether a given LDAP Distinguished Name is to be considered that of a Site 17 user.
         * @param {($$rhino.String | null)} [sourceDN] - The LDAP Distinguished Name.
         * @return {boolean} True if the given DN is for a Site 17 user; otherwise, false.
         * @static
         * @memberof Site17Util
         */
        constructor.isUserDN = function (sourceDN) {
            if (typeof sourceDN === 'string')
                return (sourceDN.length == 0 || testDistinguishedName(sourceDN)) && isUserDN(sourceDN);
            if (typeof sourceDN === 'undefined' || sourceDN === null)
                return false;
            var s = '' + sourceDN;
            return (s.length == 0 || testDistinguishedName(s)) && isUserDN(s);
        };
        /**
         * Tests whether a given LDAP Distinguished Name is to be considered that of a Site 17 group.
         * @param {($$rhino.String | null)} [sourceDN] - The LDAP Distinguished Name.
         * @return {boolean} True if the given DN is for a Site 17 group; otherwise, false.
         * @static
         * @memberof Site17Util
         */
        constructor.isGroupDN = function (sourceDN) {
            if (typeof sourceDN === 'string')
                return (sourceDN.length == 0 || testDistinguishedName(sourceDN)) && isGroupDN(sourceDN);
            if (typeof sourceDN === 'undefined' || sourceDN === null)
                return false;
            var s = '' + sourceDN;
            return (s.length == 0 || testDistinguishedName(s)) && isGroupDN(s);
        };
        /**
         * Tests whether the given glide record or element is to be considered a Site 17 user.
         * @param {(GlideRecord | GlideElementReference | $$rhino.String | null)} [source] - The glide record or reference element.
         * @return {boolean} True if the given glide record element is for a Site 17 user; otherwise, false.
         * @static
         * @memberof Site17Util
         */
        constructor.isSite17User = function (source) {
            if (gs.nil(source))
                return false;
            var gr;
            var s;
            if (source instanceof GlideRecord || source instanceof GlideElement) {
                if (('' + source.getTableName()) == 'sys_user')
                    return ((s = '' + source.source).length == 0 || testDistinguishedName(s)) && isUserDN(s);
                gr = getCaller(source);
                if (gs.nil(gr))
                    return false;
            }
            else {
                gr = new GlideRecord('sys_user');
                if (typeof source === 'string') {
                    if (source.trim().length == 0)
                        return false;
                    gr.addQuery('sys_id', source);
                }
                else {
                    if ((s = '' + source).trim().length == 0)
                        return false;
                    gr.addQuery('sys_id', s);
                }
                gr.query();
                if (!gr.next())
                    return false;
            }
            return ((s = gr.source).length == 0 || testDistinguishedName(s)) && isUserDN(s);
        };
        /**
         * Tests whether the given glide record or element is to be considered a Site 17 group.
         * @param {(GlideRecord | GlideElementReference | $$rhino.String | null)} [source] - The glide record or reference element.
         * @return {boolean} True if the given glide record element is for a Site 17 group; otherwise, false.
         * @static
         * @memberof Site17Util
         */
        constructor.isSite17Group = function (source) {
            if (gs.nil(source))
                return false;
            var gr;
            var s;
            if (source instanceof GlideRecord || source instanceof GlideElement) {
                if (('' + source.getTableName()) == 'sys_user_group')
                    return ((s = '' + source.source).length == 0 || testDistinguishedName(s)) && isGroupDN(s);
                gr = getCaller(source);
                if (gs.nil(gr))
                    return false;
            }
            else {
                gr = new GlideRecord('sys_user_group');
                if (typeof source === 'string') {
                    if (source.trim().length == 0)
                        return false;
                    gr.addQuery('sys_id', source);
                }
                else {
                    if ((s = '' + source).trim().length == 0)
                        return false;
                    gr.addQuery('sys_id', s);
                }
                gr.query();
                if (!gr.next())
                    return false;
            }
            return ((s = gr.source).length == 0 || testDistinguishedName(s)) && isGroupDN(s);
        };
        // #endregion
        // #region Iterator methods
        /**
         * Creates a new iterator which is a filtered result set of a given iterator.
         * @template TYield - The yielded result type for the iterator.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {IIterationPredicate<TYield, TNext>} predicate - Determines whether a value will be yielded in the result iterator.
         * @param {*} [thisArg] - An optional object to which the this keyword can refer in the predicate function.
         * @return {Iterator<TYield, TReturn, TNext>} The iterator yielding filtered results.
         * @static
         * @memberof Site17Util
         */
        constructor.filterIterator = function (source, predicate, thisArg) {
            var context = {};
            var arrayUtil = new global.ArrayUtil();
            if (typeof thisArg === 'undefined')
                return createRelayIterator(context, source, function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (typeof context["return"] !== 'undefined')
                        return context["return"];
                    var result = assertIteratorResult("next", source.next.apply(source, args));
                    if (result.done) {
                        context["return"] = result;
                        return result;
                    }
                    if (typeof args !== undefined && args.length > 0) {
                        while (!predicate.apply(undefined, arrayUtil.concat([result.value], args))) {
                            if ((result = source.next.apply(source, args)).done) {
                                context["return"] = result;
                                break;
                            }
                        }
                    }
                    else
                        while (!predicate(result.value)) {
                            if ((result = source.next.apply(source, args)).done) {
                                context["return"] = result;
                                break;
                            }
                        }
                    return result;
                });
            return createRelayIterator(context, source, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (typeof context["return"] !== 'undefined')
                    return context["return"];
                var result = source.next.apply(source, args);
                if (result.done) {
                    context["return"] = result;
                    return result;
                }
                if (typeof args !== undefined && args.length > 0)
                    while (!predicate.apply(thisArg, arrayUtil.concat([result.value], args))) {
                        if ((result = source.next.apply(source, args)).done) {
                            context["return"] = result;
                            break;
                        }
                    }
                else
                    while (!predicate.call(thisArg, result.value)) {
                        if ((result = source.next.apply(source, args)).done) {
                            context["return"] = result;
                            break;
                        }
                    }
                return result;
            });
        };
        /**
         * Creates a new iterator which applies a given function before each value is yielded.
         * @template TYield - The yielded result type for the iterator.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {IIteratorNextCallback<TYield, TNext>} callbackFn - The function that is applied to each value before it is yielded in the result iterator.
         * @param {*} [thisArg] - An optional object to which the this keyword can refer in the callback function.
         * @return {Iterator<TYield, TReturn, TNext>} A wrapper for the original iterator.
         * @static
         * @memberof Site17Util
         */
        constructor.reiterate = function (source, callbackFn, thisArg) {
            var context = {};
            var arrayUtil = new global.ArrayUtil();
            if (typeof thisArg === 'undefined')
                return createRelayIterator(context, source, function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (typeof context["return"] !== 'undefined')
                        return context["return"];
                    var result = source.next.apply(source, args);
                    if (result.done) {
                        context["return"] = result;
                        return result;
                    }
                    if (typeof args !== undefined && args.length > 0)
                        callbackFn.apply(undefined, arrayUtil.concat([result.value], args));
                    else
                        callbackFn(result.value);
                    return result;
                });
            return createRelayIterator(context, source, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (typeof context["return"] !== 'undefined')
                    return context["return"];
                var result = source.next.apply(source, args);
                if (result.done) {
                    context["return"] = result;
                    return result;
                }
                if (typeof args !== undefined && args.length > 0)
                    callbackFn.apply(thisArg, arrayUtil.concat([result.value], args));
                else
                    callbackFn.call(thisArg, result.value);
                return result;
            });
        };
        /**
         * Maps the yielded results of an iterator to another value or type.
         * @template TInput - The yielded result type for the source iterator.
         * @template TYield - The yielded result type for the mapped iterator.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @param {Iterator<TInput, TReturn, TNext>} source - The source iterator.
         * @param {IMapFunc<TInput, TYield, TNext>} mapper - A function that converts each value from the source iterator as it is yielded.
         * @param {*} [thisArg] - An optional object to which the this keyword can refer in the mapper function.
         * @return {Iterator<TYield, TReturn, TNext>} The iterator with mapped values.
         * @static
         * @memberof Site17Util
         */
        constructor.mapIterator = function (source, mapper, thisArg) {
            var context = {};
            var iterator;
            var arrayUtil = new global.ArrayUtil();
            if (typeof thisArg === 'undefined') {
                iterator = {
                    next: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        if (typeof context["return"] !== 'undefined')
                            return context["return"];
                        var result = source.next.apply(source, args);
                        if (result.done) {
                            context["return"] = result;
                            return result;
                        }
                        if (typeof args !== undefined && args.length > 0)
                            return { value: mapper.apply(undefined, arrayUtil.concat([result.value], args)) };
                        return { value: mapper(result.value) };
                    }
                };
                if (typeof source["return"] !== 'undefined')
                    iterator["return"] = function (value) {
                        if (typeof source["return"] === 'undefined')
                            context["return"] = { done: true, value: null };
                        else {
                            var result = assertIteratorResult("return", (arguments.length > 0) ? source["return"](value) : source["return"]());
                            if (result.done) {
                                context["return"] = result;
                                return result;
                            }
                            context["return"] = { done: true, value: null };
                            return { value: mapper(result.value) };
                        }
                        if (typeof value !== 'undefined')
                            context["return"].value = value;
                        return context["return"];
                    };
                if (typeof source["throw"] !== 'undefined')
                    iterator["throw"] = function (e) {
                        if (typeof source["throw"] === 'undefined')
                            context["return"] = { done: true, value: null };
                        else {
                            var result = assertIteratorResult("throw", (arguments.length > 0) ? source["throw"](e) : source["throw"]());
                            if (result.done) {
                                context["return"] = result;
                                return result;
                            }
                            context["return"] = { done: true, value: null };
                            return { value: mapper(result.value) };
                        }
                        return context["return"];
                    };
            }
            else {
                iterator = {
                    next: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        if (typeof context["return"] !== 'undefined')
                            return context["return"];
                        var result = source.next.apply(source, args);
                        if (result.done) {
                            context["return"] = result;
                            return result;
                        }
                        if (typeof args !== undefined && args.length > 0)
                            return { value: mapper.apply(thisArg, arrayUtil.concat([result.value], args)) };
                        return { value: mapper.call(thisArg, result.value) };
                    }
                };
                if (typeof source["return"] !== 'undefined')
                    iterator["return"] = function (value) {
                        if (typeof source["return"] === 'undefined')
                            context["return"] = { done: true, value: null };
                        else {
                            var result = source["return"](value);
                            if (result.done) {
                                context["return"] = result;
                                return result;
                            }
                            context["return"] = { done: true, value: null };
                            return { value: mapper.call(thisArg, result.value) };
                        }
                        if (typeof value !== 'undefined')
                            context["return"].value = value;
                        return context["return"];
                    };
                if (typeof source["throw"] !== 'undefined')
                    iterator["throw"] = function (e) {
                        if (typeof source["throw"] === 'undefined')
                            context["return"] = { done: true, value: null };
                        else {
                            var result = source["throw"](e);
                            if (result.done) {
                                context["return"] = result;
                                return result;
                            }
                            context["return"] = { done: true, value: null };
                            return { value: mapper.call(thisArg, result.value) };
                        }
                        return context["return"];
                    };
            }
            return iterator;
        };
        /**
         * Creates an aggregated value from all yielded values of an iterator.
         * @template TInput - The yielded result type for the source iterator.
         * @template TAcc - The type of aggregated value.
         * @param {Iterator<TInput>} source - The source iterator.
         * @param {TAcc} initialValue - The initial aggregated value.
         * @param {IReducerFunc<TAcc, TInput>} reducerFn - The function that calculates the aggregated value for each yielded iterator value.
         * @param {*} [thisArg] - An optional object to which the this keyword can refer in the reducer function.
         * @return {TAcc} The final aggregated value.
         * @static
         * @memberof Site17Util
         */
        constructor.reduceIterator = function (source, initialValue, reducerFn, thisArg) {
            var result = source.next();
            if (typeof thisArg === 'undefined')
                while (!result.done) {
                    initialValue = reducerFn(initialValue, result.value);
                    result = source.next();
                }
            else
                while (!result.done) {
                    initialValue = reducerFn.call(thisArg, initialValue, result.value);
                    result = source.next();
                }
            return initialValue;
        };
        /**
         * Gets the first yielded result from an iterator.
         * @template TYield - The yielded result type for the iterator.
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {IPredicate<TYield>} [predicate] - Optional predicate that determines whether to ignore a yielded value.
         * @param {*} [thisArg] - An optional object to which the this keyword can refer in the predicate function.
         * @return {(TYield | undefined)} The first yielded result that wasn't filered out by the predicate.
         * @static
         * @memberof Site17Util
         */
        constructor.firstIterated = function (source, predicate, thisArg) {
            var result = source.next();
            if (typeof predicate === 'undefined') {
                if (!result.done)
                    return result.value;
            }
            else if (typeof thisArg === 'undefined')
                while (!result.done) {
                    if (predicate(result.value))
                        return result.value;
                    result = source.next();
                }
            else
                while (!result.done) {
                    if (predicate.call(thisArg, result.value))
                        return result.value;
                    result = source.next();
                }
        };
        /**
         * Gets the first yielded or default result from an iterator.
         * @template TYield - The yielded result type for the iterator.
         * @param {Iterator<TYield>} source - The source iterator.
         * @param {(TYield | { (): TYield; })} ifEmpty - Default value or function that produces the default value if no value was yieled which was not filtered out.
         * @param {IPredicate<TYield>} [predicate] - Optional predicate that determines whether to ignore a yielded value.
         * @param {*} [thisArg] - An optional object to which the this keyword can refer in the predicate function.
         * @return {TYield} The first yeilded value that was not filtered out or the default value.
         * @static
         * @memberof Site17Util
         */
        constructor.firstIteratedOrDefault = function (source, ifEmpty, predicate, thisArg) {
            var result = source.next();
            if (typeof predicate === 'undefined') {
                if (!result.done)
                    return result.value;
            }
            else if (typeof thisArg === 'undefined')
                while (!result.done) {
                    if (predicate(result.value))
                        return result.value;
                    result = source.next();
                }
            else
                while (!result.done) {
                    if (predicate.call(thisArg, result.value))
                        return result.value;
                    result = source.next();
                }
            if (typeof ifEmpty === "function")
                return ifEmpty();
            return ifEmpty;
        };
        /**
         * Creates a wrapper iterator that limits the number of iterations from a source iterator.
         * @template TYield - The yielded result type for the mapped iterator.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {number} count - The maximum number of iterations.
         * @return {Iterator<TYield, TReturn, TNext>} - A wrapper iterator with a limited number of iterations.
         * @static
         * @memberof Site17Util
         */
        constructor.limitIterator = function (source, count) {
            if (isNaN(count))
                count = 0;
            var context = { iterations: 0 };
            return createRelayIterator(context, source, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (typeof context["return"] !== 'undefined')
                    return context["return"];
                context.iterations++;
                if (context.iterations > count) {
                    context["return"] = { done: true, value: null };
                    return context["return"];
                }
                var result = source.next.apply(source, args);
                if (result.done) {
                    context["return"] = result;
                    return result;
                }
                return result;
            });
        };
        /**
         * Converts the yielded values of an interator to an array.
         * @template TYield - The yielded result type for the iterator.
         * @param {Iterator<TYield>} source - The source iterator.
         * @param {number} [limit] - The optional maximum number of elements (iterations).
         * @return {TYield[]} The yielded values of the iterator.
         * @static
         * @memberof Site17Util
         */
        constructor.iteratorToArray = function (source, limit) {
            var result = [];
            var yielded = source.next();
            if (typeof limit === 'number' && !isNaN(limit))
                while (result.length < limit && !yielded.done) {
                    result.push(yielded.value);
                    yielded = source.next();
                }
            else
                while (!yielded.done) {
                    result.push(yielded.value);
                    yielded = source.next();
                }
            return result;
        };
        /**
         * Creates an interator from an array.
         * @template T - The element type.
         * @template TReturn - The optional return value type.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @param {T[]} arr - The source array.
         * @param {boolean} [supportsReturn] - If true, the iterator will implement the "return" method.
         * @param {TReturn} [finalReturnValue] - The value to return with the iteration result when all items have been iterated.
         * @param {IIteratorThrowHandler<TReturn>} [onThrow] - If defined, the iterator will implement the "throw" method, using this method to get the result value.
         * @return {Iterator<T, TReturn, TNext>} - The iterator created from the array.
         * @static
         * @memberof Site17Util
         */
        constructor.iteratorFromArray = function (arr, supportsReturn, finalReturnValue, onThrow) {
            var context = { index: 0 };
            var iterator = {
                next: function () {
                    if (context.index < 0) {
                        if (typeof context.returned === 'undefined' || context.returned === null)
                            return { done: true, value: null };
                        return { done: true, value: context.returned };
                    }
                    if (context.index < arr.length) {
                        var result = { value: arr[context.index] };
                        context.index++;
                        return result;
                    }
                    context.index = -1;
                    if (typeof finalReturnValue === "undefined" || finalReturnValue === null)
                        return { done: true, value: null };
                    context.returned = finalReturnValue;
                    return { done: true, value: finalReturnValue };
                }
            };
            if (supportsReturn)
                iterator["return"] = function (value) {
                    if (context.index < 0) {
                        if (typeof value === "undefined")
                            return { done: true, value: null };
                        return { done: true, value: value };
                    }
                    context.index = -1;
                    if (typeof value === "undefined" || value === null)
                        return { done: true, value: null };
                    context.returned = value;
                    return { done: true, value: value };
                };
            if (typeof onThrow !== 'undefined')
                iterator["throw"] = function (e) {
                    var result = onThrow(e);
                    if (context.index >= 0) {
                        context.index = -1;
                        if (typeof result !== 'undefined' && result !== null)
                            context.returned = result;
                    }
                    if (typeof result === 'undefined' || result === null)
                        return { done: true, value: null };
                    return { done: true, value: result };
                };
            return iterator;
        };
        // #endregion
        // #endregion
        constructor.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
            /**
             * Determines whether a specified DistinguishedName is contained within another.
             * @return {("true" | "false")} "true" if the source DN is contained within the container DN; otherwise, "false".
             * @memberof ISite17Util
             * @description This is intended to be invoked by a client script.
             * AJAX Parameter names: "sys_parm_target_dn"=The DistinguishedName to check;
             * "sys_parm_container_dn"=The parent DistinguishedName.
             */
            isDnContainedBy: function () {
                return JSON.stringify(constructor.isDnContainedBy(this.getParameter(PARAM_NAME.target_dn), this.getParameter(PARAM_NAME.container_dn)));
            },
            /**
             * Gets the LDAP Distinguished Name of the container for all Site 17 users.
             * @return {string} The value of the "x_g_inte_site_17.source_dn_users" system property or empty if the property is not defined.
             * @memberof ISite17Util
             */
            getUsersContainerDN: function () { return constructor.getUsersContainerDN(); },
            /**
             * Gets the LDAP Distinguished Name of the container for all Site 17 groups.
             * @return {string} The value of the "x_g_inte_site_17.source_dn_groups" system property or empty if the property is not defined.
             * @memberof ISite17Util
             */
            getGroupsContainerDN: function () { return constructor.getGroupsContainerDN(); },
            /**
             * Gets a value indicating whether the user records with an empty Source property are considered Site 17 users.
             * @return {("true" | "false")} "true" if the "x_g_inte_site_17.source_user_include_empty" system property is set to "true"; otherwise, "false".
             * @memberof ISite17Util
             */
            includeEmptyUserSource: function () { return JSON.stringify(constructor.includeEmptyUserSource()); },
            /**
             * Gets a value indicating whether the group records with an empty Source property are considered Site 17 groups.
             * @return {("true" | "false")} "true" if the "x_g_inte_site_17.source_group_include_empty" system property is set to "true"; otherwise, "false".
             * @memberof ISite17Util
             */
            includeEmptyGroupSource: function () { return JSON.stringify(constructor.includeEmptyGroupSource()); },
            /**
             * Tests whether a given LDAP Distinguished Name is to be considered that of a Site 17 user.
             * @return {("true" | "false")} "true" if the given DN is for a Site 17 user; otherwise, "false".
             * @memberof ISite17Util
             * @description This is intended to be invoked by a client script.
             * AJAX Parameter name: "sys_parm_target_dn"=The DistinguishedName to check.
             */
            isUserDN: function () {
                return JSON.stringify(isUserDN('' + this.getParameter(PARAM_NAME.target_dn)));
            },
            /**
             * Tests whether a given LDAP Distinguished Name is to be considered that of a Site 17 group.
             * @return {("true" | "false")} "true" if the given DN is for a Site 17 group; otherwise, "false".
             * @memberof ISite17Util
             * @description This is intended to be invoked by a client script.
             * AJAX Parameter name: "sys_parm_target_dn"=The DistinguishedName to check.
             */
            isGroupDN: function () {
                return JSON.stringify(isGroupDN('' + this.getParameter(PARAM_NAME.target_dn)));
            },
            /**
             * Tests whether the given glide record or element is to be considered a Site 17 user.
             * @return {("true" | "false")} "true" if the given glide record element is for a Site 17 user; otherwise, "false".
             * @memberof ISite17Util
             * @description This is intended to be invoked by a client script.
             * AJAX Parameter name: "sys_parm_user_id"=The SysID of a User (sys_user) record.
             */
            isSite17User: function () {
                var gr = new GlideRecord('sys_user');
                gr.addQuery('sys_id', '' + this.getParameter(PARAM_NAME.user_id));
                gr.query();
                return JSON.stringify(gr.next() && isUserDN('' + gr.source));
            },
            /**
             * Tests whether the given glide record or element is to be considered a Site 17 group.
             * @return {("true" | "false")} "true" if the given glide record element is for a Site 17 group; otherwise, "false".
             * @memberof ISite17Util
             * @description This is intended to be invoked by a client script.
             * AJAX Parameter name: "sys_parm_user_group_id"=The SysID of a Group (sys_user_group) record.
             */
            isSite17Group: function () {
                var gr = new GlideRecord('sys_user_group');
                gr.addQuery('sys_id', '' + this.getParameter(PARAM_NAME.group_id));
                gr.query();
                return JSON.stringify(gr.next() && isGroupDN('' + gr.source));
            },
            type: "Site17Util"
        });
        // #region Private members
        /**
         * Parameter names for GlideAjax calls.
         * @readonly
         * @enum {string}
         */
        var PARAM_NAME;
        (function (PARAM_NAME) {
            /** Required by {@link ISite17Util#isDnContainedBy}, {@link ISite17Util#isUserDN} and {@link ISite17Util#isGroupDN} to specify the target Distinguished Name. */
            PARAM_NAME["target_dn"] = "sys_parm_target_dn";
            /** Required by {@link ISite17Util#isDnContainedBy} to specify the container Distinguished Name. */
            PARAM_NAME["container_dn"] = "sys_parm_container_dn";
            /** Required by {@link ISite17Util#isSite17User} to specify the SysID of the user. */
            PARAM_NAME["user_id"] = "sys_parm_user_id";
            /** Required by {@link ISite17Util#isSite17Group} to specify the SysID of the group. */
            PARAM_NAME["group_id"] = "sys_parm_group_id";
        })(PARAM_NAME || (PARAM_NAME = {}));
        var PROPERTY_NAME_source_dn_users = 'x_g_inte_site_17.source_dn_users';
        var PROPERTY_NAME_source_dn_groups = 'x_g_inte_site_17.source_dn_groups';
        var PROPERTY_NAME_source_user_include_empty = 'x_g_inte_site_17.source_user_include_empty';
        var PROPERTY_NAME_source_group_include_empty = 'x_g_inte_site_17.source_group_include_empty';
        var dnRegex = /^([^=\s,\\]+|\\.)+=([^,\\]+|\\.)*(,([^=\s,\\]+|\\.)+=([^,\\]+|\\.)*)*$/;
        var TABLE_NAME_sys_user = 'sys_user';
        var TABLE_NAME_sys_user_group = 'sys_user_group';
        var TABLE_NAME_business_unit = 'business_unit';
        var TABLE_NAME_cmn_department = 'cmn_department';
        var TABLE_NAME_core_company = 'core_company';
        var TABLE_NAME_cmn_location = 'cmn_location';
        var TABLE_NAME_cmn_building = 'cmn_building';
        var TABLE_NAME_incident = 'incident';
        var TABLE_NAME_change_request_imac = 'change_request_imac';
        var TABLE_NAME_incident_task = 'incident_task';
        var TABLE_NAME_sm_order = 'sm_order';
        var TABLE_NAME_sn_si_incident = 'sn_si_incident';
        var TABLE_NAME_sn_si_task = 'sn_si_task';
        var TABLE_NAME_sc_request = 'sc_request';
        var TABLE_NAME_sc_req_item = 'sc_req_item';
        var TABLE_NAME_sc_task = 'sc_task';
        function isUser(target) {
            return target.getTableName() == TABLE_NAME_sys_user;
        }
        function isGroup(target) {
            return target.getTableName() == TABLE_NAME_sys_user_group;
        }
        function getCaller(target) {
            var caller;
            switch ('' + target.getTableName()) {
                case TABLE_NAME_incident:
                    caller = target.caller_id;
                    break;
                case TABLE_NAME_change_request_imac:
                    caller = target.move_user;
                    break;
                case TABLE_NAME_incident_task:
                    caller = target.incident.caller_id;
                    break;
                case TABLE_NAME_sm_order:
                case TABLE_NAME_sn_si_incident:
                    caller = ((gs.nil(target.opened_for)) ? target.caller : target.opened_for);
                    break;
                case TABLE_NAME_sn_si_task:
                    caller = target.affected_user;
                    break;
                case TABLE_NAME_sc_request:
                    caller = target.requested_for;
                    break;
                case TABLE_NAME_sc_req_item:
                case TABLE_NAME_sc_task:
                    caller = target.request.requested_for;
                    break;
                default:
                    return;
            }
            if (!caller.nil())
                return caller;
        }
        function isVip(target) {
            if (isUser(target))
                return ('' + target.vip) == 'true';
            var c = getCaller(target);
            return typeof c !== 'undefined' && ('' + c.vip) == 'true';
        }
        function isBusinessUnit(target) {
            return target.getTableName() == TABLE_NAME_business_unit;
        }
        function isDepartment(target) {
            return target.getTableName() == TABLE_NAME_cmn_department;
        }
        function isCompany(target) {
            return target.getTableName() == TABLE_NAME_core_company;
        }
        function isLocation(target) {
            return target.getTableName() == TABLE_NAME_cmn_location;
        }
        function isBuilding(target) {
            return target.getTableName() == TABLE_NAME_cmn_building;
        }
        function getBusinessUnitCompany(target) {
            var parent = target;
            do {
                if (!parent.company.nil())
                    return parent.company;
            } while (!(parent = parent.parent).nil());
            return target.company;
        }
        function getDepartmentCompany(target) {
            var parent = target;
            do {
                if (!parent.company.nil())
                    return parent.company;
            } while (!(parent = parent.parent).nil());
            var b = getDepartmentBusinessUnit(target);
            if (!b.nil()) {
                var c = getBusinessUnitCompany(b);
                if (!c.nil())
                    return c;
            }
            return target.company;
        }
        function getDepartmentBusinessUnit(target) {
            var parent = target;
            do {
                if (!parent.business_unit.nil())
                    return parent.business_unit;
            } while (!(parent = parent.parent).nil());
            return target.business_unit;
        }
        function getBusinessUnit(target) {
            switch ('' + target.getTableName()) {
                case TABLE_NAME_sys_user:
                    if ((target = target.department).nil())
                        return;
                    break;
                case TABLE_NAME_cmn_department:
                    break;
                default:
                    return;
            }
            var b = getDepartmentBusinessUnit(target);
            if (typeof b !== undefined)
                return b;
        }
        function getCompany(target) {
            var company;
            switch ('' + target.getTableName()) {
                case TABLE_NAME_sys_user:
                    if (!target.company.nil())
                        return target.company;
                    var department = target.department;
                    company = getDepartmentCompany(department);
                    break;
                case TABLE_NAME_cmn_department:
                    company = getDepartmentCompany(target);
                    break;
                case TABLE_NAME_business_unit:
                    company = getBusinessUnitCompany(target);
                    break;
                default:
                    return;
            }
            if (!company.nil())
                return company;
        }
        function getLocation(target) {
            switch ('' + target.getTableName()) {
                case TABLE_NAME_sys_user:
                    if (!target.location.nil())
                        return target.location;
                    target = target.building;
                    break;
                case TABLE_NAME_cmn_building:
                    break;
                default:
                    return;
            }
            if (!(target.nil() || target.location.nil()))
                return target.location;
        }
        function testDistinguishedName(value) {
            if (value.trim().length == 0)
                return false;
            return dnRegex.test(value);
        }
        function isDnContainedBy(sourceDN, containerDN) {
            if (!testDistinguishedName(sourceDN))
                return false;
            if (sourceDN.length == containerDN.length)
                return sourceDN.toLowerCase() == containerDN.toLowerCase();
            if (sourceDN.length < (containerDN.length + 3))
                return false;
            return testDistinguishedName(containerDN) && sourceDN.toLowerCase().endsWith(',' + containerDN.toLowerCase());
        }
        function isUserDN(sourceDN) {
            var containerDN = constructor.getUsersContainerDN();
            if (sourceDN.startsWith('ldap:'))
                sourceDN = sourceDN.substring(5);
            if (containerDN.trim().length == 0)
                return sourceDN.trim().length == 0;
            if (sourceDN.trim().length == 0)
                return constructor.includeEmptyUserSource();
            return isDnContainedBy(sourceDN, containerDN);
        }
        function isGroupDN(sourceDN) {
            var containerDN = constructor.getGroupsContainerDN();
            if (sourceDN.startsWith('ldap:'))
                sourceDN = sourceDN.substring(5);
            if (containerDN.trim().length == 0)
                return sourceDN.trim().length == 0;
            if (sourceDN.trim().length == 0)
                return constructor.includeEmptyGroupSource();
            return isDnContainedBy(sourceDN, containerDN);
        }
        function assertIteratorResult(methodName, iteratorResult) {
            if (typeof iteratorResult !== 'object' || iteratorResult === null)
                throw new TypeError("iterator." + methodName + "() returned a non-object value");
            if (typeof iteratorResult.done !== 'boolean' && typeof iteratorResult.value === 'undefined')
                throw new TypeError("Object returned by iterator." + methodName + "() does not imlement the IteratorResult interface");
            return iteratorResult;
        }
        function createRelayIterator(context, source, onNext) {
            var relayIterator = { next: onNext };
            if (typeof source["return"] !== 'undefined')
                relayIterator["return"] = function (value) {
                    var iteratorResult;
                    if (typeof source["return"] === 'undefined') {
                        iteratorResult = (typeof value === 'undefined') ? { done: true, value: null } : { done: true, value: value };
                        if (typeof context["return"] === 'undefined')
                            context["return"] = iteratorResult;
                    }
                    else {
                        iteratorResult = assertIteratorResult("return", (arguments.length > 0) ? source["return"](value) : source["return"]());
                        if (typeof context["return"] === 'undefined') {
                            if (iteratorResult.done === true)
                                context["return"] = iteratorResult;
                            else
                                context["return"] = (typeof value === 'undefined') ? { done: true, value: null } : { done: true, value: value };
                        }
                    }
                    return iteratorResult;
                };
            if (typeof source["throw"] !== 'undefined')
                relayIterator["throw"] = function (e) {
                    var iteratorResult;
                    if (typeof source["throw"] === 'undefined') {
                        iteratorResult = { done: true, value: null };
                        if (typeof context["return"] === 'undefined')
                            context["return"] = iteratorResult;
                    }
                    else {
                        iteratorResult = assertIteratorResult("throw", (arguments.length > 0) ? source["throw"](e) : source["throw"]());
                        if (typeof context["return"] === 'undefined')
                            context["return"] = (iteratorResult.done === true) ? iteratorResult : { done: true, value: null };
                    }
                    return iteratorResult;
                };
            return relayIterator;
        }
        // #endregion
        return constructor;
    })();
})(x_g_inte_site_17 || (x_g_inte_site_17 = {}));
