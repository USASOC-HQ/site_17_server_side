/// <reference path="../sn_typings_server_scoped/dist/index.d.ts" />
declare namespace x_g_inte_site_17 {
    /**
     * Base interface for the Site17Util API
     * @export
     * @interface ISite17Util
     * @extends {$$snClass.ICustomClassBase<ISite17Util, "Site17Util">}
     */
    interface ISite17Util extends $$snClass.ICustomClassBase<ISite17Util, "Site17Util"> {
        /**
         * Determines whether a specified DistinguishedName is contained within another.
         * @return {("true" | "false")} "true" if the source DN is contained within the container DN; otherwise, "false".
         * @memberof ISite17Util
         * @description This is intended to be invoked by a client script.
         * AJAX Parameter names: "sys_parm_target_dn"=The DistinguishedName to check;
         * "sys_parm_container_dn"=The parent DistinguishedName.
         */
        isDnContainedBy(): "true" | "false";
        /**
         * Gets the LDAP Distinguished Name of the container for all Site 17 users.
         * @return {string} The value of the "x_g_inte_site_17.source_dn_users" system property or empty if the property is not defined.
         * @memberof ISite17Util
         */
        getUsersContainerDN(): string;
        /**
         * Gets the LDAP Distinguished Name of the container for all Site 17 groups.
         * @return {string} The value of the "x_g_inte_site_17.source_dn_groups" system property or empty if the property is not defined.
         * @memberof ISite17Util
         */
        getGroupsContainerDN(): string;
        /**
         * Gets a value indicating whether the user records with an empty Source property are considered Site 17 users.
         * @return {("true" | "false")} "true" if the "x_g_inte_site_17.source_user_include_empty" system property is set to "true"; otherwise, "false".
         * @memberof ISite17Util
         */
        includeEmptyUserSource(): "true" | "false";
        /**
         * Gets a value indicating whether the group records with an empty Source property are considered Site 17 groups.
         * @return {("true" | "false")} "true" if the "x_g_inte_site_17.source_group_include_empty" system property is set to "true"; otherwise, "false".
         * @memberof ISite17Util
         */
        includeEmptyGroupSource(): "true" | "false";
        /**
         * Tests whether a given LDAP Distinguished Name is to be considered that of a Site 17 user.
         * @return {("true" | "false")} "true" if the given DN is for a Site 17 user; otherwise, "false".
         * @memberof ISite17Util
         * @description This is intended to be invoked by a client script.
         * AJAX Parameter name: "sys_parm_target_dn"=The DistinguishedName to check.
         */
        isUserDN(): "true" | "false";
        /**
         * Tests whether a given LDAP Distinguished Name is to be considered that of a Site 17 group.
         * @return {("true" | "false")} "true" if the given DN is for a Site 17 group; otherwise, "false".
         * @memberof ISite17Util
         * @description This is intended to be invoked by a client script.
         * AJAX Parameter name: "sys_parm_target_dn"=The DistinguishedName to check.
         */
        isGroupDN(): "true" | "false";
        /**
         * Tests whether the given glide record or element is to be considered a Site 17 user.
         * @return {("true" | "false")} "true" if the given glide record element is for a Site 17 user; otherwise, "false".
         * @memberof ISite17Util
         * @description This is intended to be invoked by a client script.
         * AJAX Parameter name: "sys_parm_user_id"=The SysID of a User (sys_user) record.
         */
        isSite17User(): "true" | "false";
        /**
         * Tests whether the given glide record or element is to be considered a Site 17 group.
         * @return {("true" | "false")} "true" if the given glide record element is for a Site 17 group; otherwise, "false".
         * @memberof ISite17Util
         * @description This is intended to be invoked by a client script.
         * AJAX Parameter name: "sys_parm_user_group_id"=The SysID of a Group (sys_user_group) record.
         */
        isSite17Group(): "true" | "false";
    }
    /**
     * Defines the prototype for the Site17Util API.
     * @export
     * @interface ISite17UtilPrototype
     * @extends {$$snClass.ICustomAjaxClassPrototype<ISite17Util, ISite17UtilPrototype, "Site17Util">}
     * @extends {ISite17Util}
     */
    interface ISite17UtilPrototype extends $$snClass.ICustomAjaxClassPrototype<ISite17Util, ISite17UtilPrototype, "Site17Util">, ISite17Util {
    }
    /**
     * Defines a constructed Site17Util API instance.
     * @typedef {Readonly<ISite17Util>} Site17Util;
     */
    type Site17Util = Readonly<ISite17Util>;
    /**
     * Defines the constructor for the Site17Util API
     * @export
     * @interface Site17UtilConstructor
     * @extends {$$snClass.CustomAjaxClassConstructor<ISite17Util, ISite17UtilPrototype, Site17Util>}
     */
    interface Site17UtilConstructor extends $$snClass.CustomAjaxClassConstructor<ISite17Util, ISite17UtilPrototype, Site17Util> {
        new (request?: GlideServletRequest, responseXML?: XMLDocument2, gc?: GlideController): Site17Util;
        (request?: GlideServletRequest, responseXML?: XMLDocument2, gc?: GlideController): Site17Util;
        /**
         * Tests whether the record or element represents a User record (sys_user).
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {boolean} true if the target record or element is a User record; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        isUser(target: GlideRecord | GlideElementReference): target is sys_userElement | sys_userGlideRecord;
        /**
         * Tests whether the record or element represents a Group record (sys_user_group).
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {boolean} true if the target record or element is a Group record; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        isGroup(target: GlideRecord | GlideElementReference): target is sys_user_groupElement | sys_user_groupGlideRecord;
        /**
         * Tests whether the record or element is a VIP user or is associated with a VIP user.
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {boolean} true if the target record or element is a VIP user or if the user that is the target (ie. caller, requestor) of that record is a VIP user;
         * otherwise, false.
         * @memberof Site17UtilConstructor
         * @description If the target is not itself a sys_user record or element, this checks the properties of the following record types to determine the associated user:
         * Incident Caller (incident.caller_id, incident_task.incident.caller_id),
         * Requested For (sc_request.requested_for, sc_req_item.request.requested_for", "sc_task.request.requested_for),
         * Opened For (sm_order.opened_for, sn_si_incident.opened_for),
         * Move User (change_request_imac.move_user) and
         * Affected User (sm_order.affected_user, sn_si_incident.affected_user, sn_si_task.affected_user).
         */
        isVip(target: GlideRecord | GlideElementReference): boolean;
        /**
         * Tests whether the record or element represents a Business Unit record (business_unit).
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {boolean} true if the target record or element is a Business Unit record; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        isBusinessUnit(target: GlideRecord | GlideElementReference): target is business_unitElement | business_unitGlideRecord;
        /**
         * Tests whether the record or element represents a Department record (cmn_department).
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {boolean} true if the target record or element is a Department record; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        isDepartment(target: GlideRecord | GlideElementReference): target is cmn_departmentElement | cmn_departmentGlideRecord;
        /**
         * Tests whether the record or element represents a Company record (core_company).
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {boolean} true if the target record or element is Company Group record; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        isCompany(target: GlideRecord | GlideElementReference): target is core_companyElement | core_companyGlideRecord;
        /**
         * Tests whether the record or element represents a Location record (cmn_location).
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {boolean} true if the target record or element is a Location record; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        isLocation(target: GlideRecord | GlideElementReference): target is cmn_locationElement | cmn_locationGlideRecord;
        /**
         * Tests whether the record or element represents a Building record (cmn_building).
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {boolean} true if the target record or element is a Building record; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        isBuilding(target: GlideRecord | GlideElementReference): target is cmn_buildingGlideRecord | cmn_buildingElement;
        /**
         * Gets the Business Unit record (business_unit) associated with the target glide record or element.
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {(business_unitGlideRecord | undefined)} The Glide record of the associated business unit or undefined if the associated business unit was nil or could not be determined.
         * @memberof Site17UtilConstructor
         * @description This will search the associated fields of many records to determine the associated business unit, if necessary.
         */
        getBusinessUnit(target: GlideRecord | GlideElementReference): business_unitGlideRecord | undefined;
        /**
         * Gets the Company record (core_company) associated with the target glide record or element.
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {(core_companyGlideRecord | undefined)} The Glide record of the associated company or undefined if the associated company was nil or could not be determined.
         * @memberof Site17UtilConstructor
         * @description This will search the associated fields of many records to determine the associated company, if necessary.
         */
        getCompany(target: GlideRecord | GlideElementReference): core_companyGlideRecord | undefined;
        /**
         * Gets the Location record (cmn_location) associated with the target glide record or element.
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {(cmn_locationGlideRecord | undefined)} The Glide record of the associated location or undefined if the associated location was nil or could not be determined.
         * @memberof Site17UtilConstructor
         * @description This will search the associated fields of many records to determine the associated location, if necessary.
         */
        getLocation(target: GlideRecord | GlideElementReference): cmn_locationGlideRecord | undefined;
        /**
         * Gets the User record (sys_user) associated with the target glide record or element.
         * @param {(GlideRecord | GlideElementReference)} target - The target glide record or referenc element.
         * @return {(sys_userGlideRecord | undefined)} The Glide record of the associated user or undefined if the associated user was nil or could not be determined.
         * @memberof Site17UtilConstructor
         * @description If the target is not itself a sys_user record or element, this checks the properties of the following record types to determine the associated user:
         * Incident Caller (incident.caller_id, incident_task.incident.caller_id),
         * Requested For (sc_request.requested_for, sc_req_item.request.requested_for", "sc_task.request.requested_for),
         * Opened For (sm_order.opened_for, sn_si_incident.opened_for),
         * Move User (change_request_imac.move_user) and
         * Affected User (sm_order.affected_user, sn_si_incident.affected_user, sn_si_task.affected_user).
         */
        getCaller(target: GlideRecord | GlideElementReference): sys_userGlideRecord | undefined;
        /**
         * Checks whether a string contains a valid LDAP Distinguished Name.
         * @param {($$rhino.String | null)} [value] - The target string value.
         * @return {boolean} True if the given string represents a valid LDAP distinguished name; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        testDistinguishedName(value?: $$rhino.String | null): boolean;
        /**
         * Determines whether a specified DistinguishedName is contained within another.
         * @param {($$rhino.String | null)} [sourceDN] - The DistinguishedName to check.
         * @param {($$rhino.String | null)} [containerDN] - The parent DistinguishedName.
         * @return {boolean} true if the source DN is contained within the container DN; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        isDnContainedBy(sourceDN?: $$rhino.String | null, containerDN?: $$rhino.String | null): boolean;
        /**
         * Gets the LDAP Distinguished Name of the container for all Site 17 users.
         * @return {string} The value of the "x_g_inte_site_17.source_dn_users" system property or empty if the property is not defined.
         * @memberof Site17UtilConstructor
         */
        getUsersContainerDN(): string;
        /**
         * Gets the LDAP Distinguished Name of the container for all Site 17 groups.
         * @return {string} The value of the "x_g_inte_site_17.source_dn_groups" system property or empty if the property is not defined.
         * @memberof Site17UtilConstructor
         */
        getGroupsContainerDN(): string;
        /**
         * Gets a value indicating whether the user records with an empty Source property are considered Site 17 users.
         * @return {boolean} True if the "x_g_inte_site_17.source_user_include_empty" system property is set to "true"; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        includeEmptyUserSource(): boolean;
        /**
         * Gets a value indicating whether the group records with an empty Source property are considered Site 17 groups.
         * @return {boolean} True if the "x_g_inte_site_17.source_group_include_empty" system property is set to "true"; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        includeEmptyGroupSource(): boolean;
        /**
         * Tests whether a given LDAP Distinguished Name is to be considered that of a Site 17 user.
         * @param {($$rhino.String | null)} [sourceDN] - The LDAP Distinguished Name.
         * @return {boolean} True if the given DN is for a Site 17 user; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        isUserDN(sourceDN: $$rhino.String): boolean;
        /**
         * Tests whether a given LDAP Distinguished Name is to be considered that of a Site 17 group.
         * @param {($$rhino.String | null)} [sourceDN] - The LDAP Distinguished Name.
         * @return {boolean} True if the given DN is for a Site 17 group; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        isGroupDN(sourceDN?: $$rhino.String): boolean;
        /**
         * Tests whether the given glide record or element is to be considered a Site 17 user.
         * @param {(GlideRecord | GlideElementReference | $$rhino.String | null)} [source] - The glide record or reference element.
         * @return {boolean} True if the given glide record element is for a Site 17 user; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        isSite17User(source?: GlideRecord | GlideElementReference | $$rhino.String | null): source is sys_userElement | sys_userGlideRecord;
        /**
         * Tests whether the given glide record or element is to be considered a Site 17 group.
         * @param {(GlideRecord | GlideElementReference | $$rhino.String | null)} [source] - The glide record or reference element.
         * @return {boolean} True if the given glide record element is for a Site 17 group; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        isSite17Group(source?: GlideRecord | GlideElementReference | $$rhino.String | null): source is sys_user_groupElement | sys_user_groupGlideRecord;
        /**
         * Creates a new iterator which is a filtered result set of a given iterator.
         * @template TYield - The yielded result type for the iterator.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {{ (value: TYield, ...args: [] | [TNext]): boolean; }} predicate - Determines whether a value will be yielded in the result iterator.
         * @param {*} [thisArg] - An optional object to which the this keyword can refer in the predicate function.
         * @return {Iterator<TYield, TReturn, TNext>} The iterator yielding filtered results.
         * @memberof Site17UtilConstructor
         */
        filterIterator<TYield, TReturn = any, TNext = undefined>(source: Iterator<TYield, TReturn, TNext>, predicate: {
            (value: TYield, ...args: [] | [TNext]): boolean;
        }, thisArg?: any): Iterator<TYield, TReturn, TNext>;
        /**
         * Creates a new iterator which applies a given function before each value is yielded.
         * @template TYield - The yielded result type for the iterator.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {{ (value: TYield, ...args: [] | [TNext]): void; }} callbackFn - The function that is applied to each value before it is yielded in the result iterator.
         * @param {*} [thisArg] - An optional object to which the this keyword can refer in the callback function.
         * @return {Iterator<TYield, TReturn, TNext>} A wrapper for the original iterator.
         * @memberof Site17UtilConstructor
         */
        reiterate<TYield, TReturn = any, TNext = undefined>(source: Iterator<TYield, TReturn, TNext>, callbackFn: {
            (value: TYield, ...args: [] | [TNext]): void;
        }, thisArg?: any): Iterator<TYield, TReturn, TNext>;
        /**
         * Maps the yielded results of an iterator to another value or type.
         * @template TInput - The yielded result type for the source iterator.
         * @template TYield - The yielded result type for the mapped iterator.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @param {Iterator<TInput, TReturn, TNext>} source - The source iterator.
         * @param {{ (value: TInput, ...args: [] | [TNext]): TYield; }} mapper - A function that converts each value from the source iterator as it is yielded.
         * @param {*} [thisArg] - An optional object to which the this keyword can refer in the mapper function.
         * @return {Iterator<TYield, TReturn, TNext>} The iterator with mapped values.
         * @memberof Site17UtilConstructor
         */
        mapIterator<TInput, TYield, TReturn = any, TNext = undefined>(source: Iterator<TInput, TReturn, TNext>, mapper: {
            (value: TInput, ...args: [] | [TNext]): TYield;
        }, thisArg?: any): Iterator<TYield, TReturn, TNext>;
        /**
         * Creates an aggregated value from all yielded values of an iterator.
         * @template TInput - The yielded result type for the source iterator.
         * @template TAcc - The type of aggregated value.
         * @param {Iterator<TInput>} source - The source iterator.
         * @param {TAcc} initialValue - The initial aggregated value.
         * @param {{ (acc: TAcc, cur: TInput): TAcc }} reducerFn - The function that calculates the aggregated value for each yielded iterator value.
         * @param {*} [thisArg] - An optional object to which the this keyword can refer in the reducer function.
         * @return {TAcc} The final aggregated value.
         * @memberof Site17UtilConstructor
         */
        reduceIterator<TInput, TAcc>(source: Iterator<TInput>, initialValue: TAcc, reducerFn: {
            (acc: TAcc, cur: TInput): TAcc;
        }, thisArg?: any): TAcc;
        /**
         * Gets the first yielded result from an iterator.
         * @template TYield - The yielded result type for the iterator.
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {{ (value: TYield): boolean; }} [predicate] - Optional predicate that determines whether to ignore a yielded value.
         * @param {*} [thisArg] - An optional object to which the this keyword can refer in the predicate function.
         * @return {(TYield | undefined)} The first yielded result that wasn't filered out by the predicate.
         * @memberof Site17UtilConstructor
         */
        firstIterated<TYield>(source: Iterator<TYield>, predicate?: {
            (value: TYield): boolean;
        }, thisArg?: any): TYield | undefined;
        /**
         * Gets the first yielded or default result from an iterator.
         * @template TYield - The yielded result type for the iterator.
         * @param {Iterator<TYield>} source - The source iterator.
         * @param {(TYield | { (): TYield; })} ifEmpty - Default value or function that produces the default value if no value was yieled which was not filtered out.
         * @param {{ (value: TYield): boolean; }} [predicate] - Optional predicate that determines whether to ignore a yielded value.
         * @param {*} [thisArg] - An optional object to which the this keyword can refer in the predicate function.
         * @return {TYield} The first yeilded value that was not filtered out or the default value.
         * @memberof Site17UtilConstructor
         */
        firstIteratedOrDefault<TYield>(source: Iterator<TYield>, ifEmpty: TYield | {
            (): TYield;
        }, predicate?: {
            (value: TYield): boolean;
        }, thisArg?: any): TYield;
        /**
         * Creates a wrapper iterator that limits the number of iterations from a source iterator.
         * @template TYield - The yielded result type for the mapped iterator.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {number} count - The maximum number of iterations.
         * @return {Iterator<TYield, TReturn, TNext>} - A wrapper iterator with a limited number of iterations.
         * @memberof Site17UtilConstructor
         */
        limitIterator<TYield, TReturn = any, TNext = undefined>(source: Iterator<TYield, TReturn, TNext>, count: number): Iterator<TYield, TReturn, TNext>;
        /**
         * Converts the yielded values of an interator to an array.
         * @template TYield - The yielded result type for the iterator.
         * @param {Iterator<TYield>} source - The source iterator.
         * @param {number} [limit] - The optional maximum number of elements (iterations).
         * @return {TYield[]} The yielded values of the iterator.
         * @memberof Site17UtilConstructor
         */
        iteratorToArray<TYield>(source: Iterator<TYield>, limit?: number): TYield[];
        /**
         * Creates an interator from an array.
         * @template T - The element type.
         * @template TReturn - The optional return value type.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @param {T[]} arr - The source array.
         * @param {boolean} [supportsReturn] - If true, the iterator will implement the "return" method.
         * @param {TReturn} [finalReturnValue] - The value to return with the iteration result when all items have been iterated.
         * @param {{ (e?: any): TReturn | undefined }} [onThrow] - If defined, the iterator will implement the "throw" method, using this method to get the result value.
         * @return {Iterator<T, TReturn, TNext>} - The iterator created from the array.
         * @memberof Site17UtilConstructor
         */
        iteratorFromArray<T, TReturn = any, TNext = undefined>(arr: T[], supportsReturn?: boolean, finalReturnValue?: TReturn, onThrow?: {
            (e?: any): TReturn | undefined;
        }): Iterator<T, TReturn, TNext>;
    }
    const Site17Util: Site17UtilConstructor;
}
