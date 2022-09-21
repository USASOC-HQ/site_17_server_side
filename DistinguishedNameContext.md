# x_g_inte_site_17.DistinguishedNameContext API

Contextual information relating to the Active Directory distinguished name associated with a record.

- [x_g_inte_site_17.DistinguishedNameContext API](#x_g_inte_site_17distinguishednamecontext-api)
  - [Constructor](#constructor)
  - [Methods](#methods)
  - [getSourceRecord](#getsourcerecord)
  - [getTargetObject](#gettargetobject)
  - [isGroup](#isgroup)
  - [isSite17User](#issite17user)
  - [isSite17Group](#issite17group)

- [Source Code](source/api/DistinguishedNameContext.ts)
- [Type Definition File](types/x_g_inte_site_17/api/DistinguishedNameContext.d.ts)

## Constructor

Creates a new `DistinguishedNameContext` instance

```TypeScript
new DistinguishedNameContext(source: string | GlideRecord | GlideElementReference): DistinguishedNameContext;
```

Arguments:

- source: `{(string | GlideRecord | GlideElementReference)}`- The source of the Distinguished Name context

## Methods

## getSourceRecord

Gets the GlideRecord that is the source of this context.

```TypeScript
getSourceRecord(): GlideRecord;
```

Returns the GlideRecord that is the source of this context.

## getTargetObject

Gets the sys_user or sys_user_group object that is the target of this context.

```TypeScript
getTargetObject(): GlideRecord | GlideElementReference | undefined;
```

Returns the GlideRecord that is the target of this context.

## isGroup

Indicates whether the target object is a sys_user_group or sys_user.

```TypeScript
isGroup(): boolean;
```

Returns `true` if `IDistinguishedNameContext#getTargetObject` returns a sys_user_group `GlideRecord` or `GlideElementReference`; otherwise, `false`.

## isSite17User

Indicates whether the target object is a sys_user and it is considered a Site 17 user.

```TypeScript
isSite17User(): boolean;
```

Returns  `true` if `IDistinguishedNameContext#getTargetObject` returns a `sys_user` `GlideRecord` or `GlideElementReference` and `Site17Util#isUserDN` returns `true` for the source property of the target object; otherwise, `false`.

## isSite17Group

Indicates whether the target object is a sys_user_group and it is considered a Site 17 group.

```TypeScript
isSite17Group(): boolean;
```

Returns `true` if `IDistinguishedNameContext#getTargetObject` returns a `sys_user_group` `GlideRecord` or `GlideElementReference` and `Site17Util#isGroupDN` returns `true` for the source property of the target object; otherwise, `false`.
