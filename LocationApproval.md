# x_g_inte_site_17.LocationApproval API

Location-based approval support.

- [x_g_inte_site_17.LocationApproval API](#x_g_inte_site_17locationapproval-api)
  - [Constructor](#constructor)
  - [Methods](#methods)

- [Source Code](source/api/LocationApproval.ts)
- [Type Definition File](types/x_g_inte_site_17/api/LocationApproval.d.ts)

## Constructor

Creates a new `LocationApproval` instance.

```TypeScript
new LocationApproval(source: GlideRecord | GlideElementReference): LocationApproval;
```

Argument:

- source: {(string | GlideRecord | GlideElementReference)} - The source object for the approval context.

Returns a new `LocationApproval` instance.

## Methods

Gets the target user of the target record (ie. caller, requested_for).

```TypeScript
getCaller(): GlideRecord | GlideElement | undefined;
```

Returns the `GlideRecord` or `GlideElementReference` for the target user.

Indicates whether the target user is a VIP user.

```TypeScript
isVip(): boolean;
```

Returns `true` if `ILocationApproval#getCaller` returns user designated as VIP; otherwise, `false`.

Looks up the default approval group.

```TypeScript
getDefaultApprovalGroup(): GlideElementReference | undefined;
```

Returns the`GlideElementReference` for the default aproval group.

Looks up the default approval group.

```TypeScript
getDefaultApprovalGroup(source: GlideRecord | GlideElementReference): GlideElementReference | undefined;
```

Argument:

- source {(string | GlideRecord | GlideElementReference)} - The source object for the approval context.

Returns the`GlideElementReference` for the default aproval group.
