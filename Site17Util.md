# x_g_inte_site_17.Site17Util API

- [Source Code](source/api/Site17Util.ts)
- [Type Definition](types/x_g_inte_site_17/api/Site17Util.d.ts)

## Methods

### isUser

Tests whether the record or element represents a User record (`sys_user`).

```TypeScript
isUser(target: GlideRecord | GlideElementReference): target is sys_userElement | sys_userGlideRecord;
```

Argument:

- target: `{(GlideRecord | GlideElementReference)}` - The glide record or reference element.

Returns `true` if the target record or element is a User record; otherwise, `false`.

### isGroup

Tests whether the record or element represents a Group record (sys_user_group).

```TypeScript
isGroup(target: GlideRecord | GlideElementReference): target is sys_user_groupElement | sys_user_groupGlideRecord;
```

Argument:

- target: `{( lideRecord | GlideElementReference)}` - The glide record or reference element.

Returns `true` if the target record or element is a Group record; otherwise, `false`.

### isVip

Tests whether the record or element is a VIP user or is associated with a VIP user.

```TypeScript
isVip(target: GlideRecord | GlideElementReference): boolean;
```

Argument:

- target: `{(GlideRecord | GlideElementReference)}`

Returns

<!--
        /**
         * 
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
        
-->

### isBusinessUnit

Tests whether the record or element represents a Business Unit record (business_unit).

```TypeScript
isBusinessUnit(target: GlideRecord | GlideElementReference): target is business_unitElement | business_unitGlideRecord;
```

Argument:

- target: `{(GlideRecord | GlideElementReference)}`

Returns

<!--
        /**
         * 
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {boolean} true if the target record or element is a Business Unit record; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        
-->

### isDepartment

Tests whether the record or element represents a Department record (cmn_department).

```TypeScript
isDepartment(target: GlideRecord | GlideElementReference): target is cmn_departmentElement | cmn_departmentGlideRecord;
```

Argumens:

- target: `{(GlideRecord | GlideElementReference)}`

Returns

<!--
        /**
         * 
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {boolean} true if the target record or element is a Department record; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        
-->

### isCompany

Tests whether the record or element represents a Company record (core_company).

```TypeScript
isCompany(target: GlideRecord | GlideElementReference): target is core_companyElement | core_companyGlideRecord;
```

Argument:

- target: `{(GlideRecord | GlideElementReference)}`

Returns

<!--
        /**
         * 
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {boolean} true if the target record or element is Company Group record; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        
-->

### isLocation

Tests whether the record or element represents a Location record (cmn_location).

```TypeScript
isLocation(target: GlideRecord | GlideElementReference): target is cmn_locationElement | cmn_locationGlideRecord;
```

Argument:

- target: `{(GlideRecord | GlideElementReference)}`

Returns

<!--
        /**
         * 
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {boolean} true if the target record or element is a Location record; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        
-->

### isBuilding

Tests whether the record or element represents a Building record (cmn_building).

```TypeScript
isBuilding(target: GlideRecord | GlideElementReference): target is cmn_buildingGlideRecord | cmn_buildingElement;
```

Argument:

- target: `{(GlideRecord | GlideElementReference)}`
- 
Returns

<!--
        /**
         * 
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {boolean} true if the target record or element is a Building record; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        
-->

### getBusinessUnit

Gets the Business Unit record (business_unit) associated with the target glide record or element.

```TypeScript
getBusinessUnit(target: GlideRecord | GlideElementReference): business_unitGlideRecord | undefined;
```

Argument:

- target: `{(GlideRecord | GlideElementReference)}`

Returns

<!--
        /**
         * 
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {(business_unitGlideRecord | undefined)} The Glide record of the associated business unit or undefined if the associated business unit was nil or could not be determined.
         * @memberof Site17UtilConstructor
         * @description This will search the associated fields of many records to determine the associated business unit, if necessary.
         */
        
-->

### getCompany

Gets the Company record (core_company) associated with the target glide record or element.

```TypeScript
getCompany(target: GlideRecord | GlideElementReference): core_companyGlideRecord | undefined;
```

Argument:

- target: `{(GlideRecord | GlideElementReference)}`

Returns

<!--
        /**
         * 
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {(core_companyGlideRecord | undefined)} The Glide record of the associated company or undefined if the associated company was nil or could not be determined.
         * @memberof Site17UtilConstructor
         * @description This will search the associated fields of many records to determine the associated company, if necessary.
         */
        
-->

### getLocation

Gets the Location record (cmn_location) associated with the target glide record or element.

```TypeScript
getLocation(target: GlideRecord | GlideElementReference): cmn_locationGlideRecord | undefined;
```

Argument:

- target: `{(GlideRecord | GlideElementReference)}`

Returns

<!--
        /**
         * 
         * @param {(GlideRecord | GlideElementReference)} target - The glide record or reference element.
         * @return {(cmn_locationGlideRecord | undefined)} The Glide record of the associated location or undefined if the associated location was nil or could not be determined.
         * @memberof Site17UtilConstructor
         * @description This will search the associated fields of many records to determine the associated location, if necessary.
         */
        
-->

### getCaller

Gets the User record (sys_user) associated with the target glide record or element.

```TypeScript
getCaller(target: GlideRecord | GlideElementReference): sys_userGlideRecord | undefined;
```

Argument:

- target: `{(GlideRecord | GlideElementReference)}`

Returns

<!--
        /**
         * 
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
        
-->

### testDistinguishedName

Checks whether a string contains a valid LDAP Distinguished Name.

```TypeScript
testDistinguishedName(value?: $$rhino.String | null): boolean;
```

Arguments:

- value (optional): `{($$rhino.String | null | undefined)}`

Returns

<!--
        /**
         * 
         * @param {($$rhino.String | null)} [value] - The target string value.
         * @return {boolean} True if the given string represents a valid LDAP distinguished name; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        
-->

### isDnContainedBy

Determines whether a specified DistinguishedName is contained within another.

```TypeScript
isDnContainedBy(sourceDN?: $$rhino.String | null, containerDN?: $$rhino.String | null): boolean;
```

Arguments:

- sourceDN (optional):  `{($$rhino.String | null | undefined)}`
- containerDN (optional):  `{($$rhino.String | null | undefined)}`

Returns

<!--
        /**
         * 
         * @param {($$rhino.String | null)} [sourceDN] - The DistinguishedName to check.
         * @param {($$rhino.String | null)} [containerDN] - The parent DistinguishedName.
         * @return {boolean} true if the source DN is contained within the container DN; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        
-->

### getUsersContainerDN

Gets the LDAP Distinguished Name of the container for all Site 17 users.

```TypeScript
getUsersContainerDN(): string;
```

Returns

<!--
        /**
         * 
         * @return {string} The value of the "x_g_inte_site_17.source_dn_users" system property or empty if the property is not defined.
         * @memberof Site17UtilConstructor
         */
        
-->

### getGroupsContainerDN

Gets the LDAP Distinguished Name of the container for all Site 17 groups.

```TypeScript
getGroupsContainerDN(): string;
```

Returns

<!--
        /**
         * 
         * @return {string} The value of the "x_g_inte_site_17.source_dn_groups" system property or empty if the property is not defined.
         * @memberof Site17UtilConstructor
         */
        
-->

### includeEmptyUserSource

Gets a value indicating whether the user records with an empty Source property are considered Site 17 users.

```TypeScript
includeEmptyUserSource(): boolean;
```

Returns

<!--
        /**
         * 
         * @return {boolean} True if the "x_g_inte_site_17.source_user_include_empty" system property is set to "true"; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        
-->

### includeEmptyGroupSource

Gets a value indicating whether the group records with an empty Source property are considered Site 17 groups.

```TypeScript
includeEmptyGroupSource(): boolean;
```

Returns

<!--
        /**
         * 
         * @return {boolean} True if the "x_g_inte_site_17.source_group_include_empty" system property is set to "true"; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        
-->

### isUserDN

Tests whether a given LDAP Distinguished Name is to be considered that of a Site 17 user.

```TypeScript
isUserDN(sourceDN: $$rhino.String): boolean;
```

Argument:

- sourceDN: `{($$rhino.String | null | undefined)}`

Returns

<!--
        /**
         * 
         * @param {($$rhino.String | null)} [sourceDN] - The LDAP Distinguished Name.
         * @return {boolean} True if the given DN is for a Site 17 user; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        
-->

### isGroupDN

Tests whether a given LDAP Distinguished Name is to be considered that of a Site 17 group.

```TypeScript
isGroupDN(sourceDN?: $$rhino.String): boolean;
```

Argument:

- sourceDN (optional): `{($$rhino.String | null | undefined)}`

Returns

<!--
        /**
         * 
         * @param {($$rhino.String | null)} [sourceDN] - The LDAP Distinguished Name.
         * @return {boolean} True if the given DN is for a Site 17 group; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        
-->

### isSite17User

Tests whether the given glide record or element is to be considered a Site 17 user.

```TypeScript
isSite17User(source?: GlideRecord | GlideElementReference | $$rhino.String | null): source is sys_userElement | sys_userGlideRecord;
```

Argument:

- source (optional): `{(GlideRecord | GlideElementReference | $$rhino.String | null | undefined)}`

Returns

<!--
        /**
         * 
         * @param {(GlideRecord | GlideElementReference | $$rhino.String | null)} [source] - The glide record or reference element.
         * @return {boolean} True if the given glide record element is for a Site 17 user; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        
-->

### isSite17Group

Tests whether the given glide record or element is to be considered a Site 17 group.

```TypeScript
isSite17Group(source?: GlideRecord | GlideElementReference | $$rhino.String | null): source is sys_user_groupElement | sys_user_groupGlideRecord;
```

Argument:

- source (optional): `{(GlideRecord | GlideElementReference | $$rhino.String | null | undefined)}`

Returns

<!--
        /**
         * 
         * @param {(GlideRecord | GlideElementReference | $$rhino.String | null)} [source] - The glide record or reference element.
         * @return {boolean} True if the given glide record element is for a Site 17 group; otherwise, false.
         * @memberof Site17UtilConstructor
         */
        
-->

### filterIterator

Creates a new iterator which is a filtered result set of a given iterator.

```TypeScript
filterIterator<TYield, TReturn = any, TNext = undefined>(source: Iterator<TYield, TReturn, TNext>, predicate: IIterationPredicate<TYield, TNext>): Iterator<TYield, TReturn, TNext>;
filterIterator<TYield, TReturn = any, TNext = undefined, TThis = any>(source: Iterator<TYield, TReturn, TNext>, predicate: IIterationPredicate<TYield, TNext, TThis>, thisArg: TThis): Iterator<TYield, TReturn, TNext>;
```

Generic Types:

- TYield:  The yielded result type for the iterator.
- TReturn (optional, default: `any`): The final value type for the iterator.
- TNext (optional): The parameter type for obtaining a yielded result.
- TThis (optional, default: `any`): The type of object to which the 'this' keyword can refer.

Arguments:

- source: `{Iterator<TYield, TReturn, TNext>}`
- predicate: `{IIterationPredicate<TYield, TNext, TThis>}`
- thisArg (optional): `{(TThis | undefined)}`

Returns

<!--
        /**
         *
         * @template TYield -
         * @template TReturn - 
         * @template TNext - 
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {IIterationPredicate<TYield, TNext>} predicate - Determines whether a value will be yielded in the result iterator.
         * @return {Iterator<TYield, TReturn, TNext>} The iterator yielding filtered results.
         * @memberof Site17UtilConstructor
         */
        

        /**
         * Creates a new iterator which is a filtered result set of a given iterator.
         * @template TYield - The yielded result type for the iterator.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @template TThis - The type of object to which the 'this' keyword can refer.
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {IIterationPredicate<TYield, TNext, TThis>} predicate - Determines whether a value will be yielded in the result iterator.
         * @param {TThis} thisArg - An object to which the this keyword can refer in the predicate function.
         * @return {Iterator<TYield, TReturn, TNext>} The iterator yielding filtered results.
         * @memberof Site17UtilConstructor
         */
        
-->

### reiterate

Creates a new iterator which applies a given function before each value is yielded.

```TypeScript
reiterate<TYield, TReturn = any, TNext = undefined>(source: Iterator<TYield, TReturn, TNext>, callbackFn: IIteratorNextCallback<TYield, TNext>): Iterator<TYield, TReturn, TNext>;
reiterate<TYield, TReturn = any, TNext = undefined, TThis = any>(source: Iterator<TYield, TReturn, TNext>, callbackFn: IIteratorNextCallback<TYield, TNext, TThis>, thisArg: TThis): Iterator<TYield, TReturn, TNext>;
```

Generic Types:

- TYield: The yielded result type for the iterator.
- TReturn (optional, default: `any`): The final value type for the iterator.
- TNext (optional): The parameter type for obtaining a yielded result.
- TThis (optional, default: `any`): The type of object to which the 'this' keyword can refer.

Arguments:

- source: `{Iterator<TYield, TReturn, TNext>}`
- callbackFn: `{IIteratorNextCallback<TYield, TNext, TThis>}`
- thisArg (optional): `{(TThis | undefined)}`

Returns

<!--
        /**
         * 
         * @template TYield - 
         * @template TReturn - 
         * @template TNext - 
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {IIteratorNextCallback<TYield, TNext>} callbackFn - The function that is applied to each value before it is yielded in the result iterator.
         * @param {*} [thisArg] - An optional object to which the this keyword can refer in the callback function.
         * @return {Iterator<TYield, TReturn, TNext>} A wrapper for the original iterator.
         * @memberof Site17UtilConstructor
         */
        

        /**
         * Creates a new iterator which applies a given function before each value is yielded.
         * @template TYield - The yielded result type for the iterator.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @template TThis - The type of object to which the 'this' keyword can refer.
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {IIteratorNextCallback<TYield, TNext, TThis>} callbackFn - The function that is applied to each value before it is yielded in the result iterator.
         * @param {TThis} thisArg - An object to which the this keyword can refer in the callback function.
         * @return {Iterator<TYield, TReturn, TNext>} A wrapper for the original iterator.
         * @memberof Site17UtilConstructor
         */
        
-->

### mapIterator

Maps the yielded results of an iterator to another value or type.

```TypeScript
mapIterator<TInput, TYield, TReturn = any, TNext = undefined>(source: Iterator<TInput, TReturn, TNext>, mapper: IMapFunc<TInput, TYield, TNext>): Iterator<TYield, TReturn, TNext>;
mapIterator<TInput, TYield, TReturn = any, TNext = undefined, TThis = any>(source: Iterator<TInput, TReturn, TNext>, mapper: IMapFunc<TInput, TYield, TNext, TThis>, thisArg: TThis): Iterator<TYield, TReturn, TNext>;
```

Generic Types:

- TInput: The yielded result type for the source iterator.
- TYield: The yielded result type for the mapped iterator.
- TReturn (optional, default: `any`): The final value type for the iterator.
- TNext (optional): The parameter type for obtaining a yielded result.
- TThis (optional, default: `any`): The type of object to which the 'this' keyword can refer.

Arguments:

- source: `{Iterator<TInput, TReturn, TNext>}`
- mapper: `{IMapFunc<TInput, TYield, TNext, TThis>}`
- thisArg (optional): `{(TThis | undefined)}`

Returns

<!--
        /**
         * 
         * @template TInput - 
         * @template TYield - 
         * @template TReturn - 
         * @template TNext - 
         * @param {Iterator<TInput, TReturn, TNext>} source - The source iterator.
         * @param {IMapFunc<TInput, TYield, TNext>} mapper - A function that converts each value from the source iterator as it is yielded.
         * @return {Iterator<TYield, TReturn, TNext>} The iterator with mapped values.
         * @memberof Site17UtilConstructor
         */
        

        /**
         * Maps the yielded results of an iterator to another value or type.
         * @template TInput - The yielded result type for the source iterator.
         * @template TYield - The yielded result type for the mapped iterator.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @template TThis - The type of object to which the 'this' keyword can refer.
         * @param {Iterator<TInput, TReturn, TNext>} source - The source iterator.
         * @param {IMapFunc<TInput, TYield, TNext, TThis>} mapper- A function that converts each value from the source iterator as it is yielded.
         * @param {TThis} thisArg - An object to which the this keyword can refer in the mapper function.
         * @return {Iterator<TYield, TReturn, TNext>} The iterator with mapped values.
         * @memberof Site17UtilConstructor
         */
        
        -->

### reduceIterator

Creates an aggregated value from all yielded values of an iterator.

```TypeScript
reduceIterator<TInput, TAcc>(source: Iterator<TInput>, initialValue: TAcc, reducerFn: IReducerFunc<TAcc, TInput>): TAcc;
reduceIterator<TInput, TAcc, TThis = any>(source: Iterator<TInput>, initialValue: TAcc, reducerFn: IReducerFunc<TAcc, TInput, TThis>, thisArg: TThis): TAcc;
```

Generic Types:

- TInput: The yielded result type for the source iterator.
- TAcc: The type of aggregated value.
- TThis (optional, default: `any`): The type of object to which the 'this' keyword can refer.

Arguments:

- source: `{Iterator<TInput>}`
- initialValue: `{TAcc}`
- reducerFn: `{IReducerFunc<TAcc, TInput, TThis>}`
- thisArg (optional): `{(TThis | undefined)}`

Returns

<!--
        /**
         * 
         * @template TInput - 
         * @template TAcc -
         * @param {Iterator<TInput>} source - The source iterator.
         * @param {TAcc} initialValue - The initial aggregated value.
         * @param {IReducerFunc<TAcc, TInput>} reducerFn - The function that calculates the aggregated value for each yielded iterator value.
         * @return {TAcc} The final aggregated value.
         * @memberof Site17UtilConstructor
         */
        

        /**
         * Creates an aggregated value from all yielded values of an iterator.
         * @template TInput - The yielded result type for the source iterator.
         * @template TAcc - The type of aggregated value.
         * @template TThis - The type of object to which the 'this' keyword can refer.
         * @param {Iterator<TInput>} source - The source iterator.
         * @param {TAcc} initialValue - The initial aggregated value.
         * @param {IReducerFunc<TAcc, TInput, TThis>} reducerFn - The function that calculates the aggregated value for each yielded iterator value.
         * @param {TThis} thisArg - An object to which the this keyword can refer in the reducer function.
         * @return {TAcc} The final aggregated value.
         * @memberof Site17UtilConstructor
         */
        
-->

### firstIterated

Gets the first yielded result from an iterator.

```TypeScript
firstIterated<TYield>(source: Iterator<TYield>, predicate?: IPredicate<TYield>): TYield | undefined;
firstIterated<TYield, TThis = any>(source: Iterator<TYield>, predicate: IPredicate<TYield, TThis> | undefined, thisArg: TThis): TYield | undefined;
```

Generic Types:

- TYield: The yielded result type for the iterator.
- TThis (optional, default: `any`): The type of object to which the 'this' keyword can refer.

Arguments:

- source: `{Iterator<TYield>}`
- predicate (optional): `{(IPredicate<TYield, TThis> | undefined)}`
- thisArg (optional): `{(TThis | undefined)}`

Returns

<!--
        /**
         * 
         * @template TYield - 
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {IPredicate<TYield>} [predicate] - Optional predicate that determines whether to ignore a yielded value.
         * @return {(TYield | undefined)} The first yielded result that wasn't filered out by the predicate.
         * @memberof Site17UtilConstructor
         */
        

        /**
         * Gets the first yielded result from an iterator.
         * @template TYield - The yielded result type for the iterator.
         * @template TThis - The type of object to which the 'this' keyword can refer.
         * @param {Iterator<TYield>} source - The source iterator.
         * @param {(IPredicate<TYield, TThis> | undefined)} predicate - Optional predicate that determines whether to ignore a yielded value.
         * @param {TThis} thisArg - An object to which the this keyword can refer in the predicate function.
         * @return {(TYield | undefined)} The first yielded result that wasn't filered out by the predicate.
         * @memberof Site17UtilConstructor
         */
        
-->

### firstIteratedOrDefault

Gets the first yielded or default result from an iterator.

```TypeScript
firstIteratedOrDefault<TYield>(source: Iterator<TYield>, ifEmpty: TYield | { (): TYield; }, predicate?: IPredicate<TYield>): TYield;
firstIteratedOrDefault<TYield, TThis = any>(source: Iterator<TYield>, ifEmpty: TYield | { (this: TThis): TYield; }, predicate: IPredicate<TYield, TThis> | undefined, thisArg: TThis): TYield;
```

Generic Types:

- TYield: The yielded result type for the iterator.
- TThis (optional, default: `any`): The type of object to which the 'this' keyword can refer.

Arguments:

- source: `{Iterator<TYield>}`
- ifEmpty: `{(TYield | { (this: TThis): TYield; })}`
- predicate (optional): `{(IPredicate<TYield, TThis> | undefined)}`
- thisArg (optional): `{(TThis | undefined)}`

Returns

<!--
        /**
         * 
         * @template TYield - 
         * @param {Iterator<TYield>} source - The source iterator.
         * @param {(TYield | { (): TYield; })} ifEmpty - Default value or function that produces the default value if no value was yieled which was not filtered out.
         * @param {IPredicate<TYield>} [predicate] - Optional predicate that determines whether to ignore a yielded value.
         * @return {TYield} The first yeilded value that was not filtered out or the default value.
         * @memberof Site17UtilConstructor
         */
        

        /**
         * Gets the first yielded or default result from an iterator.
         * @template TYield - The yielded result type for the iterator.
         * @template TThis - 
         * @param {Iterator<TYield>} source - The source iterator.
         * @param {(TYield | { (this: TThis): TYield; })} ifEmpty - Default value or function that produces the default value if no value was yieled which was not filtered out.
         * @param {(IPredicate<TYield, TThis> | undefined)} predicate - Optional predicate that determines whether to ignore a yielded value.
         * @param {TThis} thisArg - An object to which the this keyword can refer in the predicate and/or ifEmpty function.
         * @return {TYield} The first yeilded value that was not filtered out or the default value.
         * @memberof Site17UtilConstructor
         */
        
-->

### limitIterator

Creates a wrapper iterator that limits the number of iterations from a source iterator.

```TypeScript
limitIterator<TYield, TReturn = any, TNext = undefined>(source: Iterator<TYield, TReturn, TNext>, count: number): Iterator<TYield, TReturn, TNext>;
```

Generic Types:

- TYield: The yielded result type for the mapped iterator.
- TReturn (optional, default: `any`): The final value type for the iterator.
- TNext (optional): The parameter type for obtaining a yielded result.

Arguments:

- source: `{Iterator<TYield, TReturn, TNext>}`
- count: `{number}`

Returns

<!--
        /**
         * 
         * @template TYield - 
         * @template TReturn - 
         * @template TNext - 
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {number} count - The maximum number of iterations.
         * @return {Iterator<TYield, TReturn, TNext>} - A wrapper iterator with a limited number of iterations.
         * @memberof Site17UtilConstructor
         */
        
-->

### iteratorToArray

Converts the yielded values of an interator to an array.

```TypeScript
iteratorToArray<TYield>(source: Iterator<TYield>, limit?: number): TYield[];
```

Generic Types:

- TYield: The yielded result type for the iterator.

Arguments:

- source: `{Iterator<TYield>}`
- limit (optional):  `{(number | undefined)}`

Returns

<!--
        /**
         * 
         * @template TYield - 
         * @param {Iterator<TYield>} source - The source iterator.
         * @param {number} [limit] - The optional maximum number of elements (iterations).
         * @return {TYield[]} The yielded values of the iterator.
         * @memberof Site17UtilConstructor
         */
        
-->

### iteratorFromArray

Creates an interator from an array.

```TypeScript
iteratorFromArray<T, TReturn = any, TNext = undefined>(arr: T[], supportsReturn?: boolean, finalReturnValue?: TReturn, onThrow?: IIteratorThrowHandler<TReturn>): Iterator<T, TReturn, TNext>;
```

Generic Types:

- T: The element type.
- TReturn (optional, default: `any`): The return value type.
- TNext (optional): The parameter type for obtaining a yielded result.

Arguments:

- arr: T[]
- supportsReturn (optional):  `{(boolean | undefined)}`
- finalReturnValue (optional):  `{(TReturn | undefined)}`
- onThrow (optional):  `{(IIteratorThrowHandler<TReturn> | undefined)}`

Returns

<!--
        /**
         * 
         * @template T - 
         * @template TReturn - 
         * @template TNext - 
         * @param {T[]} arr - The source array.
         * @param {boolean} [supportsReturn] - If true, the iterator will implement the "return" method.
         * @param {TReturn} [finalReturnValue] - The value to return with the iteration result when all items have been iterated.
         * @param {IIteratorThrowHandler<TReturn>} [onThrow] - If defined, the iterator will implement the "throw" method, using this method to get the result value.
         * @return {Iterator<T, TReturn, TNext>} - The iterator created from the array.
         * @memberof Site17UtilConstructor
         */
        
    }
-->

### isDnContainedBy (asynchronous)

Determines whether a specified DistinguishedName is contained within another.

AJAX Parameter Names:

- `"sys_parm_target_dn"` - The DistinguishedName to check
- `"sys_parm_container_dn"` - The parent DistinguishedName.

Returns string value `"true"` if the source DN is contained within the container DN; otherwise, `"false"`.

### getUsersContainerDN (asynchronous)

Gets the LDAP Distinguished Name of the container for all Site 17 users.

Returns the value of the `x_g_inte_site_17.source_dn_users` system property or empty if the property is not defined.

### getGroupsContainerDN (asynchronous)

Gets the LDAP Distinguished Name of the container for all Site 17 groups.

Returns the value of the `x_g_inte_site_17.source_dn_groups` system property or empty if the property is not defined.

### includeEmptyUserSource (asynchronous)

Gets a value indicating whether the user records with an empty Source property are considered Site 17 users.

Returns string value `"true"` if the `x_g_inte_site_17.source_user_include_empty` system property is set to `"true"`; otherwise, `"false"`.

### includeEmptyGroupSource (asynchronous)

Gets a value indicating whether the group records with an empty Source property are considered Site 17 groups.

Returns string value `"true"` if the `x_g_inte_site_17.source_group_include_empty` system property is set to `"true"`; otherwise, `"false"`.

### isUserDN (asynchronous)

Tests whether a given LDAP Distinguished Name is to be considered that of a Site 17 user.

AJAX Parameter Name:

- `"sys_parm_target_dn"` - The DistinguishedName to check.

Returns string value `"true"` if the given DN is for a Site 17 user; otherwise, `"false"`.

### isGroupDN (asynchronous)

Tests whether a given LDAP Distinguished Name is to be considered that of a Site 17 group.

AJAX Parameter Name:

- `"sys_parm_target_dn"` - The DistinguishedName to check.

Returns string value `"true"` if the given DN is for a Site 17 group; otherwise, `"false"`.

### isSite17User (asynchronous)

Tests whether a given sys_id is for a user record that is to be considered a Site 17 user.

AJAX Parameter Name:

- `"sys_parm_user_id"` - The SysID of a User (sys_user) record.

Returns string value `"true"` if the associated record is for a Site 17 user; otherwise, `"false"`.

### isSite17Group (asynchronous)

Tests whether a given sys_id is for a group record that is to be considered a Site 17 group.

AJAX Parameter Name:

- `"sys_parm_user_group_id"` - The SysID of a Group (sys_user_group) record.

Returns string value  `"true"` if the associated record element is for a Site 17 group; otherwise, `"false"`.

## Callback Function Types

### IThrowFunc

Produces an `IteratorResult` object when the `Iterator.throw` method is invoked on the target `Iterator`.

```TypeScript
<TYield, TReturn = any, TThis = any>(this: TThis, e?: any): IteratorResult<TYield, TReturn>
```

Generic Types:

- TYield: The type of value yielded by the target `Iterator`.
- TReturn (optional, default: `any`): The final value type returned by the target `Iterator`.
- TThis (optional, default: `any`): The type of object to which the 'this' keyword can refer.

Argument:

- e (optional): `{(any | undefined)}` - An object representing the exception.

Returns the iterator result object representing a yielded value or the end of the iteration.

### IIterationPredicate

Predicate function for testing yielded value from the `Iterator.next` method of an `Iterator` object, including the arguments that were passed to the `Iterator.next` method.

```TypeScript
<TYield, TNext = undefined, TThis = any>(this: TThis, value: TYield, ...args: [] | [TNext]): boolean;
```

Generic Types:

- TYield: The type of value yielded by the target `Iterator`.
- TNext (optional): The type of value may be passed to the `Iterator.next` method on the target `Iterator`.
- TThis (optional, default: `any`): The type of object to which the 'this' keyword can refer.

Arguments:

- value: TYield - The yielded value.
- args: `{(...[] | [TNext])}` - The arguments that were passed to the `Iterator.next` method.

Returns a value indicating whether the test passed.

### IIteratorNextCallback

Callback function for processing a yielded value from the `Iterator.next` method of an `Iterator` object, including the arguments that were passed to the `Iterator.next` method.

```TypeScript
<TYield, TNext = undefined, TThis = any>(this: TThis, value: TYield, ...args: [] | [TNext]): void;
```

Generic Types:

- TYield: The type of value yielded by the target `Iterator`.
- TNext (optional): The type of value may be passed to the `Iterator.next` method on the target `Iterator`.
- TThis (optional, default: `any`): The type of object to which the 'this' keyword can refer.

Arguments:

- value: TYield - The yielded value.
- args: `{(...[] | [TNext])}` - The arguments that were passed to the `Iterator.next` method.

### IMapFunc

Function that converts the yielded value from the `Iterator.next` method of an `Iterator` object, including the arguments that were passed to the `Iterator.next` method.

```TypeScript
<TInput, TResult, TNext = undefined, TThis = any>(this: TThis, value: TInput, ...args: [] | [TNext]): TResult;
```

Generic Types:

- TInput: The type of value yielded by the target `Iterator`.
- TResult: The type of converted value.
- TNext (optional): The type of value may be passed to the `Iterator.next` method on the target `Iterator`.
- TThis (optional, default: `any`): The type of object to which the 'this' keyword can refer.

Arguments:

- value: `{TInput}` - The yielded value.
- args: `{(...[] | [TNext])}` - The arguments that were passed to the `Iterator.next` method.

Returns the converted value.

### IReducerFunc

Function that calculates an aggregate value from the next input value.


```TypeScript
<TAcc, TInput, TThis = any>(this: TThis, acc: TAcc, cur: TInput): TAcc;
```

Generic Types:

- TAcc: The type of aggregated value.
- Input: The input value type.
- TThis (optional, default: `any`): The type of object to which the 'this' keyword can refer.

Arguments:

- acc: `{TAcc}` - The current aggregated value.
- cur: `{TInput}` - The next input value.

Returns the accumulated aggregate value.

### IPredicate

Function for testing a value.

```TypeScript
<T, TThis = any>(this: TThis, value: T): boolean;
```

Generic Types:

- T: The type of value to be tested.
- This (optional, default: `any`): The type of object to which the 'this' keyword can refer.

Argument:

- value: `{T}` - The value to be tested.

Returns a value indictating whether the test passed.

### IIteratorThrowHandler

Function that produces an optional return value from an error state.

```TypeScript
<TReturn = any, TThis = any>(this: TThis, e?: any): TReturn | undefined;
```

Generic Types:

- TReturn (optional, default: `any`): The final value type returned by the target `Iterator`.
- TThis (optional, default: `any`): The type of object to which the 'this' keyword can refer.

Argument:

- e (optional): `{(any | undefined)}` - An object representing the exception.

Returns the optional return value.
