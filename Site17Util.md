# x_g_inte_site_17.Site17Util API

- [x_g_inte_site_17.Site17Util API](#x_g_inte_site_17site17util-api)
  - [Methods](#methods)
    - [isUser](#isuser)
    - [isGroup](#isgroup)
    - [isVip](#isvip)
    - [isBusinessUnit](#isbusinessunit)
    - [isDepartment](#isdepartment)
    - [isCompany](#iscompany)
    - [isLocation](#islocation)
    - [isBuilding](#isbuilding)
    - [getBusinessUnit](#getbusinessunit)
    - [getCompany](#getcompany)
    - [getLocation](#getlocation)
    - [getCaller](#getcaller)
    - [testDistinguishedName](#testdistinguishedname)
    - [isDnContainedBy](#isdncontainedby)
    - [getUsersContainerDN](#getuserscontainerdn)
    - [getGroupsContainerDN](#getgroupscontainerdn)
    - [includeEmptyUserSource](#includeemptyusersource)
    - [includeEmptyGroupSource](#includeemptygroupsource)
    - [isUserDN](#isuserdn)
    - [isGroupDN](#isgroupdn)
    - [isSite17User](#issite17user)
    - [isSite17Group](#issite17group)
    - [filterIterator](#filteriterator)
    - [reiterate](#reiterate)
    - [mapIterator](#mapiterator)
    - [reduceIterator](#reduceiterator)
    - [firstIterated](#firstiterated)
    - [firstIteratedOrDefault](#firstiteratedordefault)
    - [limitIterator](#limititerator)
    - [iteratorToArray](#iteratortoarray)
    - [iteratorFromArray](#iteratorfromarray)
    - [isDnContainedBy (asynchronous)](#isdncontainedby-asynchronous)
    - [getUsersContainerDN (asynchronous)](#getuserscontainerdn-asynchronous)
    - [getGroupsContainerDN (asynchronous)](#getgroupscontainerdn-asynchronous)
    - [includeEmptyUserSource (asynchronous)](#includeemptyusersource-asynchronous)
    - [includeEmptyGroupSource (asynchronous)](#includeemptygroupsource-asynchronous)
    - [isUserDN (asynchronous)](#isuserdn-asynchronous)
    - [isGroupDN (asynchronous)](#isgroupdn-asynchronous)
    - [isSite17User (asynchronous)](#issite17user-asynchronous)
    - [isSite17Group (asynchronous)](#issite17group-asynchronous)
  - [Callback Function Types](#callback-function-types)
    - [IThrowFunc](#ithrowfunc)
    - [IIterationPredicate](#iiterationpredicate)
    - [IIteratorNextCallback](#iiteratornextcallback)
    - [IMapFunc](#imapfunc)
    - [IReducerFunc](#ireducerfunc)
    - [IPredicate](#ipredicate)
    - [IIteratorThrowHandler](#iiteratorthrowhandler)

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

If the target is not itself a sys_user record or element, this checks the properties of the following record types to determine the associated user:

- Incident Caller: `incident.caller_id` and `incident_task.incident.caller_id`
- Requested For: `sc_request.requested_for`, `sc_req_item.request.requested_for` and `sc_task.request.requested_for`
- Opened For: `sm_order.opened_for` and `sn_si_incident.opened_for`
- Move User: `change_request_imac.move_user`
- Affected User: `sm_order.affected_user`, `sn_si_incident.affected_user` and `sn_si_task.affected_user`

```TypeScript
isVip(target: GlideRecord | GlideElementReference): boolean;
```

Argument:

- target: `{(GlideRecord | GlideElementReference)}` - The glide record or reference element.

Returns `true` if the target record or element is a VIP user or if the user that is the target (ie. caller, requestor) of that record is a VIP user;
otherwise, `false`.

### isBusinessUnit

Tests whether the record or element represents a Business Unit record (business_unit).

```TypeScript
isBusinessUnit(target: GlideRecord | GlideElementReference): target is business_unitElement | business_unitGlideRecord;
```

Argument:

- target: `{(GlideRecord | GlideElementReference)}` - The glide record or reference element.

Returns `true` if the target record or element is a Business Unit record; otherwise, `false`.

### isDepartment

Tests whether the record or element represents a Department record (cmn_department).

```TypeScript
isDepartment(target: GlideRecord | GlideElementReference): target is cmn_departmentElement | cmn_departmentGlideRecord;
```

Argumens:

- target: `{(GlideRecord | GlideElementReference)}` - The glide record or reference element.

Returns true if the target record or element is a Department record; otherwise, false.

### isCompany

Tests whether the record or element represents a Company record (core_company).

```TypeScript
isCompany(target: GlideRecord | GlideElementReference): target is core_companyElement | core_companyGlideRecord;
```

Argument:

- target: `{(GlideRecord | GlideElementReference)}` - The glide record or reference element.

Returns true if the target record or element is Company Group record; otherwise, false.

### isLocation

Tests whether the record or element represents a Location record (cmn_location).

```TypeScript
isLocation(target: GlideRecord | GlideElementReference): target is cmn_locationElement | cmn_locationGlideRecord;
```

Argument:

- target: `{(GlideRecord | GlideElementReference)}` - The glide record or reference element.

Returns true if the target record or element is a Location record; otherwise, false.

### isBuilding

Tests whether the record or element represents a Building record (cmn_building).

```TypeScript
isBuilding(target: GlideRecord | GlideElementReference): target is cmn_buildingGlideRecord | cmn_buildingElement;
```

Argument:

- target: `{(GlideRecord | GlideElementReference)}` - The glide record or reference element.

Returns true if the target record or element is a Building record; otherwise, false.

### getBusinessUnit

Gets the Business Unit record (business_unit) associated with the target glide record or element.

This will search the associated fields of many records to determine the associated business unit, if necessary.

```TypeScript
getBusinessUnit(target: GlideRecord | GlideElementReference): business_unitGlideRecord | undefined;
```

Argument:

- target: `{(GlideRecord | GlideElementReference)}` - The glide record or reference element.

Returns the Glide record of the associated business unit or `undefined` if the associated business unit was nil or could not be determined.

### getCompany

Gets the Company record (core_company) associated with the target glide record or element.

This will search the associated fields of many records to determine the associated company, if necessary.

```TypeScript
getCompany(target: GlideRecord | GlideElementReference): core_companyGlideRecord | undefined;
```

Argument:

- target: `{(GlideRecord | GlideElementReference)}` - The glide record or reference element.

Returns the Glide record of the associated company or `undefined` if the associated company was nil or could not be determined.

### getLocation

Gets the Location record (cmn_location) associated with the target glide record or element.

This will search the associated fields of many records to determine the associated location, if necessary.

```TypeScript
getLocation(target: GlideRecord | GlideElementReference): cmn_locationGlideRecord | undefined;
```

Argument:

- target: `{(GlideRecord | GlideElementReference)}` - The glide record or reference element.

Returns the Glide record of the associated location or `undefined` if the associated location was nil or could not be determined.

### getCaller

Gets the User record (`sys_user`) associated with the target glide record or element.

If the target is not itself a `sys_user` record or element, this checks the properties of the following record types to determine the associated user:

- Incident Caller: `incident.caller_id` and `incident_task.incident.caller_id`
- Requested For: `sc_request.requested_for`, `sc_req_item.request.requested_for` and `sc_task.request.requested_for`
- Opened For: `sm_order.opened_for` and `sn_si_incident.opened_for`
- Move User: `change_request_imac.move_user`
- Affected User: `sm_order.affected_user`, `sn_si_incident.affected_user` and `sn_si_task.affected_user`

```TypeScript
getCaller(target: GlideRecord | GlideElementReference): sys_userGlideRecord | undefined;
```

Argument:

- target: `{(GlideRecord | GlideElementReference)}` - The glide record or reference element.

Returns the Glide record of the associated user or `undefined` if the associated user was nil or could not be determined.

### testDistinguishedName

Checks whether a string contains a valid LDAP Distinguished Name.

```TypeScript
testDistinguishedName(value?: java.lang.String | string | null): boolean;
```

Arguments:

- value: `{(java.lang.String | string | null | undefined)}` - The target string value.

Returns `true` if the given string represents a valid LDAP distinguished name; otherwise, `false`.

### isDnContainedBy

Determines whether a specified DistinguishedName is contained within another.

```TypeScript
isDnContainedBy(sourceDN?: java.lang.String | string | null, containerDN?: java.lang.String | string | null): boolean;
```

Arguments:

- sourceDN:  `{(java.lang.String | string | null | undefined)}` - The DistinguishedName to check.
- containerDN:  `{(java.lang.String | string | null | undefined)}` - The parent DistinguishedName.

Returns `true` if the source DN is contained within the container DN; otherwise, `false`.

Example:

```TypeScript
gs.info(x_g_inte_site_17.Site17Util.isDnContainedBy("CN=Joey Bag O' Donuts,OU=Sales,DC=Fabrikam,DC=COM", "DC=Fabrikam,DC=COM")) // writes true
gs.info(x_g_inte_site_17.Site17Util.isDnContainedBy("CN=Joey Bag O' Donuts,OU=Sales,DC=Fabrikam,DC=COM", "DC=Cloud,DC=Fabrikam,DC=COM")) // writes false
```

### getUsersContainerDN

Gets the LDAP Distinguished Name of the container for all Site 17 users.

```TypeScript
getUsersContainerDN(): string;
```

Returns the value of the `x_g_inte_site_17.source_dn_users` system property or an empty string if the property is not defined.

### getGroupsContainerDN

Gets the LDAP Distinguished Name of the container for all Site 17 groups.

```TypeScript
getGroupsContainerDN(): string;
```

Returns the value of the `x_g_inte_site_17.source_dn_groups` system property or an empty string if the property is not defined.

### includeEmptyUserSource

Gets a value indicating whether the user records with an empty Source property are considered Site 17 users.

```TypeScript
includeEmptyUserSource(): boolean;
```

Returns `true` if the `x_g_inte_site_17.source_user_include_empty` system property is set to `"true"`; otherwise, `false`.

### includeEmptyGroupSource

Gets a value indicating whether the group records with an empty Source property are considered Site 17 groups.

```TypeScript
includeEmptyGroupSource(): boolean;
```

Returns `true` if the `x_g_inte_site_17.source_group_include_empty` system property is set to `"true"`; otherwise, `false`.

### isUserDN

Tests whether a given LDAP Distinguished Name is to be considered that of a Site 17 user.

```TypeScript
isUserDN(sourceDN?: java.lang.String | string | null): boolean;
```

Argument:

- sourceDN: `{(java.lang.String | string | null | undefined)}` - The LDAP Distinguished Name.

Returns `true` if the given DN is for a Site 17 user; otherwise, `false`.

### isGroupDN

Tests whether a given LDAP Distinguished Name is to be considered that of a Site 17 group.

```TypeScript
isGroupDN(sourceDN?: java.lang.String | string | null): boolean;
```

Argument:

- sourceDN (optional): `{(java.lang.String | string | null | undefined)}` - The LDAP Distinguished Name.

Returns `true` if the given DN is for a Site 17 group; otherwise, `false`.

### isSite17User

Tests whether the given glide record or element is to be considered a Site 17 user.

```TypeScript
isSite17User(source?: GlideRecord | GlideElementReference | java.lang.String | string | null): source is sys_userElement | sys_userGlideRecord;
```

Argument:

- source: `{(GlideRecord | GlideElementReference | java.lang.String | string | null | undefined)}` - The glide record or reference element.

Returns `true` if the given glide record element is for a Site 17 user; otherwise, `false`.

### isSite17Group

Tests whether the given glide record or element is to be considered a Site 17 group.

```TypeScript
isSite17Group(source?: GlideRecord | GlideElementReference | java.lang.String | string | null): source is sys_user_groupElement | sys_user_groupGlideRecord;
```

Argument:

- source: `{(GlideRecord | GlideElementReference | java.lang.String | string | null | undefined)}` - The glide record or reference element.

Returns `true` if the given glide record element is for a Site 17 group; otherwise, `false`.

### filterIterator

Creates a new `Iterator` which is a filtered result set of a given `Iterator`.

```TypeScript
filterIterator<TYield>(source: Iterator<TYield>, predicate: IIterationPredicate<TYield>): Iterator<TYield>;
filterIterator<TYield, TReturn>(source: Iterator<TYield, TReturn>, predicate: IIterationPredicate<TYield>): Iterator<TYield, TReturn>;
filterIterator<TYield, TReturn, TNext>(source: Iterator<TYield, TReturn, TNext>, predicate: IIterationPredicate<TYield, TNext>): Iterator<TYield, TReturn, TNext>;
filterIterator<TYield, TReturn, TNext, TThis>(source: Iterator<TYield, TReturn, TNext>, predicate: IIterationPredicate<TYield, TNext, TThis>, thisArg: TThis): Iterator<TYield, TReturn, TNext>;
```

Generic Types:

- TYield:  The yielded result type for the iterator.
- TReturn (optional, default: `any`): The final value type for the iterator.
- TNext (optional): The parameter type for obtaining a yielded result.
- TThis (optional, default: `any`): The type of object to which the 'this' keyword can refer.

Arguments:

- source: `{Iterator<TYield, TReturn, TNext>}` - The source iterator.
- predicate: [`{IIterationPredicate<TYield, TNext, TThis>}`](#iiterationpredicate) - Determines whether a value will be yielded in the result iterator.
- thisArg (optional): `{(TThis | undefined)}` - An object to which the `this` keyword can refer in the predicate function.

Returns the `Iterator` yielding filtered results.

Example:

```TypeScript
var filtered = x_g_inte_site_17.Site17Util.filterIterator<string>(myStringIterator, function(value: string, ...args: [] | [undefined]): boolean {
    return typeof value === 'string' && value.trim().length > 0;
}
```

### reiterate

Creates a new iterator which applies a given function before each value is yielded.

```TypeScript
reiterate<TYield>(source: Iterator<TYield>, callbackFn: IIteratorNextCallback<TYield>): Iterator<TYield>;
reiterate<TYield, TReturn>(source: Iterator<TYield, TReturn>, callbackFn: IIteratorNextCallback<TYield>): Iterator<TYield, TReturn>;
reiterate<TYield, TReturn, TNext>(source: Iterator<TYield, TReturn, TNext>, callbackFn: IIteratorNextCallback<TYield, TNext>): Iterator<TYield, TReturn, TNext>;
reiterate<TYield, TReturn, TNext, TThis>(source: Iterator<TYield, TReturn, TNext>, callbackFn: IIteratorNextCallback<TYield, TNext, TThis>, thisArg: TThis): Iterator<TYield, TReturn, TNext>;
```

Generic Types:

- TYield: The yielded result type for the iterator.
- TReturn (optional, default: `any`): The final value type for the iterator.
- TNext (optional): The parameter type for obtaining a yielded result.
- TThis (optional, default: `any`): The type of object to which the 'this' keyword can refer.

Arguments:

- source: `{Iterator<TYield, TReturn, TNext>}` - The source iterator.
- callbackFn: [`{IIteratorNextCallback<TYield, TNext, TThis>}`](#iiteratornextcallback) - The function that is applied to each value before it is yielded in the result iterator.
- thisArg (optional): `{(TThis | undefined)}` - An object to which the `this` keyword can refer in the predicate function.

Returns a wrapper for the original `Iterator`.

### mapIterator

Maps the yielded results of an iterator to another value or type.

```TypeScript
mapIterator<TInput, TYield>(source: Iterator<TInput>, mapper: IMapFunc<TInput, TYield>): Iterator<TYield>;
mapIterator<TInput, TYield, TReturn>(source: Iterator<TInput, TReturn>, mapper: IMapFunc<TInput, TYield>): Iterator<TYield, TReturn>;
mapIterator<TInput, TYield, TReturn, TNext>(source: Iterator<TInput, TReturn, TNext>, mapper: IMapFunc<TInput, TYield, TNext>): Iterator<TYield, TReturn, TNext>;
mapIterator<TInput, TYield, TReturn, TNext, TThis>(source: Iterator<TInput, TReturn, TNext>, mapper: IMapFunc<TInput, TYield, TNext, TThis>, thisArg: TThis): Iterator<TYield, TReturn, TNext>;
```

Generic Types:

- TInput: The yielded result type for the source iterator.
- TYield: The yielded result type for the mapped iterator.
- TReturn (optional, default: `any`): The final value type for the iterator.
- TNext (optional): The parameter type for obtaining a yielded result.
- TThis (optional, default: `any`): The type of object to which the 'this' keyword can refer.

Arguments:

- source: `{Iterator<TInput, TReturn, TNext>}` - The source iterator.
- mapper: [`{IMapFunc<TInput, TYield, TNext, TThis>}`](#imapfunc) - A function that converts each value from the source iterator as it is yielded.
- thisArg (optional): `{(TThis | undefined)}` - An object to which the `this` keyword can refer in the predicate function.

Returns an `Iterator` with mapped values.

Example:

```TypeScript
var stringIterator = x_g_inte_site_17.Site17Util.mapIterator<number, string>(myNumberIterator, function(value: number, ...args: [] | [undefined]): string {
    return isNaN(value) ? "" : JSON.stringify(value);
}
```

### reduceIterator

Creates an aggregated value from all yielded values of an iterator.

```TypeScript
reduceIterator<TInput, TAcc>(source: Iterator<TInput>, initialValue: TAcc, reducerFn: IReducerFunc<TAcc, TInput>): TAcc;
reduceIterator<TInput, TAcc, TThis>(source: Iterator<TInput>, initialValue: TAcc, reducerFn: IReducerFunc<TAcc, TInput, TThis>, thisArg: TThis): TAcc;
```

Generic Types:

- TInput: The yielded result type for the source iterator.
- TAcc: The type of aggregated value.
- TThis (optional, default: `any`): The type of object to which the 'this' keyword can refer.

Arguments:

- source: `{Iterator<TInput>}` - The source iterator.
- initialValue: `{TAcc}` - The initial aggregated value.
- reducerFn: [`{IReducerFunc<TAcc, TInput, TThis>}`](#ireducerfunc) - The function that calculates the aggregated value for each yielded iterator value.
- thisArg (optional): `{(TThis | undefined)}` - An object to which the `this` keyword can refer in the predicate function.

Returns the final aggregated value.

Example:

```TypeScript
var trueCount = x_g_inte_site_17.Site17Util.reduceIterator<boolean, number>(myBooleanIterator, 0, function(acc: number, cur: boolean): number {
    return cur ? acc : acc + 1
}
```

### firstIterated

Gets the first yielded result from an iterator.

```TypeScript
firstIterated<TYield>(source: Iterator<TYield>, predicate?: IPredicate<TYield>): TYield | undefined;
firstIterated<TYield, TThis>(source: Iterator<TYield>, predicate: IPredicate<TYield, TThis> | undefined, thisArg: TThis): TYield | undefined;
```

Generic Types:

- TYield: The yielded result type for the iterator.
- TThis (optional, default: `any`): The type of object to which the 'this' keyword can refer.

Arguments:

- source: `{Iterator<TYield>}` - The source iterator.
- predicate (optional): [`{(IPredicate<TYield, TThis> | undefined)}`](#ipredicate) - Predicate that determines whether to ignore a yielded value.
- thisArg (optional): `{(TThis | undefined)}` - An object to which the `this` keyword can refer in the predicate function.

Returns the first yielded result that wasn't filered out by the predicate.

### firstIteratedOrDefault

Gets the first yielded or default result from an iterator.

```TypeScript
firstIteratedOrDefault<TYield>(source: Iterator<TYield>, ifEmpty: TYield | { (): TYield; }, predicate?: IPredicate<TYield>): TYield;
firstIteratedOrDefault<TYield, TThis>(source: Iterator<TYield>, ifEmpty: TYield | { (this: TThis): TYield; }, predicate: IPredicate<TYield, TThis> | undefined, thisArg: TThis): TYield;
```

Generic Types:

- TYield: The yielded result type for the iterator.
- TThis (optional, default: `any`): The type of object to which the 'this' keyword can refer.

Arguments:

- source: `{Iterator<TYield>}` - The source iterator.
- ifEmpty: `{(TYield | { (this: TThis): TYield; })}` - Default value or function that produces the default value if no value was yieled which was not filtered out.
- predicate (optional): [`{(IPredicate<TYield, TThis> | undefined)}`](#ipredicate) - Predicate that determines whether to ignore a yielded value.
- thisArg (optional): `{(TThis | undefined)}` - An object to which the `this` keyword can refer in the predicate function.

Returns the first yeilded value that was not filtered out or the default value.

### limitIterator

Creates a wrapper `Iterator` that limits the number of iterations from a source iterator.

```TypeScript
limitIterator<TYield>(source: Iterator<TYield>, count: number): Iterator<TYield>;
limitIterator<TYield, TReturn>(source: Iterator<TYield, TReturn>, count: number): Iterator<TYield, TReturn>;
limitIterator<TYield, TReturn, TNext>(source: Iterator<TYield, TReturn, TNext>, count: number): Iterator<TYield, TReturn, TNext>;
```

Generic Types:

- TYield: The yielded result type for the mapped iterator.
- TReturn (optional, default: `any`): The final value type for the iterator.
- TNext (optional): The parameter type for obtaining a yielded result.

Arguments:

- source: `{Iterator<TYield, TReturn, TNext>}` - The source iterator.
- count: `{number}` - The maximum number of iterations.

Returns a wrapper `Iterator` with a limited number of iterations.

### iteratorToArray

Converts the yielded values of an interator to an array.

```TypeScript
iteratorToArray<TYield>(source: Iterator<TYield>, limit?: number): TYield[];
```

Generic Types:

- TYield: The yielded result type for the iterator.

Arguments:

- source: `{Iterator<TYield>}` - The source iterator.
- limit (optional):  `{(number | undefined)}` - The maximum number of elements (iterations).

Returns the yielded values of the iterator.

### iteratorFromArray

Creates an interator from an array.

```TypeScript
iteratorFromArray<T>(arr: T[], supportsReturn?: boolean, finalReturnValue?: TReturn, onThrow?: IIteratorThrowHandler): Iterator<T>;
iteratorFromArray<T, TReturn>(arr: T[], supportsReturn?: boolean, finalReturnValue?: TReturn, onThrow?: IIteratorThrowHandler<TReturn>): Iterator<T, TReturn>;
iteratorFromArray<T, TReturn, TNext>(arr: T[], supportsReturn?: boolean, finalReturnValue?: TReturn, onThrow?: IIteratorThrowHandler<TReturn>): Iterator<T, TReturn, TNext>;
```

Generic Types:

- T: The element type.
- TReturn (optional, default: `any`): The return value type.
- TNext (optional): The parameter type for obtaining a yielded result.

Arguments:

- arr: T[] - The source array.
- supportsReturn (optional):  `{(boolean | undefined)}` - If `true`, the iterator will implement the `Iterator.return()` method.
- finalReturnValue (optional):  `{(TReturn | undefined)}` - The value to return with the iteration result when all items have been iterated.
- onThrow (optional):  [`{(IIteratorThrowHandler<TReturn> | undefined)}`](#iiteratorthrowhandler) - If defined, the iterator will implement `Iterator.throw()` using this method to get the result value.

Returns the `Iterator` created from the array.

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
<TYield>(e?: any): IteratorResult<TYield>;
<TYield, TReturn>(e?: any): IteratorResult<TYield, TReturn>;
<TYield, TReturn, TThis>(this: TThis, e?: any): IteratorResult<TYield, TReturn>;
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
<TYield>(value: TYield, ...args: []): boolean;
<TYield, TNext>(value: TYield, ...args: [] | [TNext]): boolean;
<TYield, TNext, TThis>(this: TThis, value: TYield, ...args: [] | [TNext]): boolean;
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
<TYield>(value: TYield, ...args: []): void;
<TYield, TNext>(value: TYield, ...args: [] | [TNext]): void;
<TYield, TNext, TThis>(this: TThis, value: TYield, ...args: [] | [TNext]): void;
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
<TInput, TResult>(value: TInput, ...args: []): TResult;
<TInput, TResult, TNext>(value: TInput, ...args: [] | [TNext]): TResult;
<TInput, TResult, TNext, TThis>(this: TThis, value: TInput, ...args: [] | [TNext]): TResult;
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
<TAcc, TInput>(acc: TAcc, cur: TInput): TAcc;
<TAcc, TInput, TThis>(this: TThis, acc: TAcc, cur: TInput): TAcc;
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
<T>(value: T): boolean;
<T, TThis>(this: TThis, value: T): boolean;
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
(e?: any): IteratorReturnResult<any> | undefined;
<TReturn>(e?: any): TReturn | undefined;
<TReturn, TThis>(this: TThis, e?: any): TReturn | undefined;
```

Generic Types:

- TReturn (optional, default: `any`): The final value type returned by the target `Iterator`.
- TThis (optional, default: `any`): The type of object to which the 'this' keyword can refer.

Argument:

- e (optional): `{(any | undefined)}` - An object representing the exception.

Returns the optional return value.
