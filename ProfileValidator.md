# x_g_inte_site_17.ProfileValidator API

API for making schedule reservations.

- [x_g_inte_site_17.ProfileValidator API](#x_g_inte_site_17profilevalidator-api)
  - [Methods](#methods)
    - [isUserLookupFault](#isuserlookupfault)
    - [getUserLookupResult](#getuserlookupresult)
    - [checkUserProfileCompliance](#checkuserprofilecompliance)
    - [getUserProfileCompliance](#getuserprofilecompliance)
    - [getUserNotifications](#getusernotifications)
    - [getProfilePhoneFields](#getprofilephonefields)
    - [getProfileComplianceCheckFields](#getprofilecompliancecheckfields)
    - [getUserPhoneAndOrg](#getuserphoneandorg)
    - [getUserPhone](#getuserphone)
    - [getUserOrg](#getuserorg)
    - [getUserProfileCompliance (async)](#getuserprofilecompliance-async)
    - [getUserNotifications (async)](#getusernotifications-async)
    - [getUserPhoneAndOrg (async)](#getuserphoneandorg-async)
    - [getUserPhone (async)](#getuserphone-async)
    - [getUserOrg (async)](#getuserorg-async)
  - [Interfaces](#interfaces)
    - [IProfileFieldDefinition](#iprofilefielddefinition)
    - [IUserLookupResult](#iuserlookupresult)
    - [IComplianceCheckResult](#icompliancecheckresult)
    - [IUserProfileComplianceInfo](#iuserprofilecomplianceinfo)
    - [IUserProfileComplianceResult](#iuserprofilecomplianceresult)
    - [IUserNotificationsResult](#iusernotificationsresult)
    - [IPhoneAndOrg](#iphoneandorg)

- [Source Code](source/api/ProfileValidator.ts)
- [Type Definition File](types/x_g_inte_site_17/api/ProfileValidator.d.ts)

## Methods

### isUserLookupFault

Indicates whether the user lookup result represents a fatal error.

```TypeScript
isUserLookupFault(result: IUserLookupResult): boolean;
```

Parameter:

- result: [`IUserLookupResult`](#iuserlookupresult) - The user lookup result object to test.

Returns `true` if the user lookup result indicates a fatal error; otherwise, `false`.

### getUserLookupResult

Attempts to get a related user or look up a user.

```TypeScript
getUserLookupResult(user: GlideRecord | GlideElementReference | string): IUserLookupResult;
```

Parameter:

- user: `(GlideRecord | GlideElementReference | string)` - The object referring to a user, a `sys_id` for a user or a user name (`user_id`).

Returns An [`IUserLookupResult`](#iuserlookupresult) object that represents the result of detecting the associated user or looking up the user.

### checkUserProfileCompliance

Does a compliance check for the specified sys_user.

```TypeScript
checkUserProfileCompliance(sys_user: GlideRecord | GlideElementReference): IUserProfileComplianceInfo;
```

Parameter:

- sys_user: `(GlideRecord | GlideElementReference)` - The user to validate.

Returns An [`IUserProfileComplianceInfo`](#iuserprofilecomplianceinfo) object that describes the compliance check result.

### getUserProfileCompliance

Gets compliance check information for the specified user.

```TypeScript
getUserProfileCompliance(user: GlideRecord | GlideElementReference | string): IUserProfileComplianceResult;
```

Parameter:

- user: `(GlideRecord | GlideElementReference | string)` - The object referring to a user, a sys_id for a user or a user name (user_id).

Returns An [`IUserProfileComplianceResult`](#iuserprofilecomplianceresult) object that describes the result of the compliance check.

### getUserNotifications

Gets compliance check notifications for the specified user.

```TypeScript
getUserNotifications(user: GlideRecord | GlideElementReference | string): IUserNotificationsResult;
```

Parameter:

- user: `(GlideRecord | GlideElementReference | string)` - The object referring to a user, a sys_id for a user or a user name (user_id).

Returns [`IUserNotificationsResult`](#iusernotificationsresult) An object that contains the compliance notification information.

### getProfilePhoneFields

Gets the names of the fields for the user profile that may contain phone numbers.

```TypeScript
getProfilePhoneFields(): string[];
```

Returns an array of strings containing the names of the fields for the user profile that may contain phone numbers.

### getProfileComplianceCheckFields

Gets the names of the profile fields to be validated.

```TypeScript
getProfileComplianceCheckFields(): string[];
```

Returns an array of strings containing the names of the profile fields to be validated.

### getUserPhoneAndOrg

Gets the primary phone number and organization entity for the specified user.

```TypeScript
getUserPhoneAndOrg(user?: string | sys_userGlideRecord | sys_userElement): IPhoneAndOrg | undefined;
```

Parameter:

- user: `(string | sys_userGlideRecord | sys_userElement)` - The user record or Sys ID of the a user profile.

Returns an [`IPhoneAndOrg`](#iphoneandorg) object containing primary phone number and organization entity for the specified user or `undefined` if the user does not exist.

### getUserPhone

Gets the primary phone number for the specified user.

```TypeScript
getUserPhone(user?: string | sys_userGlideRecord | sys_userElement): string | undefined;
```

Parameter:

- user: `(string | sys_userGlideRecord | sys_userElement)` - The user record or Sys ID of the a user profile.

Returns the primary phone number for the specified user or `undefined` if the user does not exist or no phone number was found.

### getUserOrg

Gets the organization name for the specified user.

```TypeScript
getUserOrg(user?: string | sys_userGlideRecord | sys_userElement): string | undefined;
```

Parameter:

- user: `(string | sys_userGlideRecord | sys_userElement)` - The user record or Sys ID of the a user profile.

Returns the organization name for the specified user or `undefined` if the user does not exist or no related organization was found.

### getUserProfileCompliance (async)

Gets compliance check information for a user profile.

Asynchronous Parameter:

- `sysparm_user_id`: The `sys_id` or `user_id` of a user.

Returns A JSON string containing an [`IUserProfileComplianceResult`](#iuserprofilecomplianceresult) object that describes the result of the compliance check.

### getUserNotifications (async)

Gets compliance check notifications for a user profile.

- `sysparm_user_id`: The `sys_id` or `user_id` of a user.

Returns A JSON string containing an [`IUserNotificationsResult`](#iusernotificationsresult) object that contains the compliance notification information.

### getUserPhoneAndOrg (async)

Gets the primary phone number and organization entity for a user profile.

- `sysparm_user_id`: The `sys_id` or `user_id` of a user.

Response Element

- `result`: Contains the following attributes:
  - `org`: The organization name.
  - `phone`: The primary phone number.

### getUserPhone (async)

Gets the primary phone number for a user profile.

- `sysparm_user_id`: The `sys_id` or `user_id` of a user.

Returns The primary phone number for the specified user or an empty string if the user does not exist or no phone number was found.

### getUserOrg (async)

Gets the primary phone number for a user profile.

- `sysparm_user_id`: The `sys_id` or `user_id` of a user.

Returns The organization name for the specified user or an empty string if the user does not exist or no related organization was found.

## Interfaces

### IProfileFieldDefinition

Defines a profile field to be validated.

Properties:

- name: `{string}` - The table column name.
- label: `{string}` - The label for the field.
- failAdj: `{string}` - Adjective used for the field for failure messages.

### IUserLookupResult

Represents the results of a user lookup

Properties:

- code: `{number}` - The profile compliance check result code: 0=Success; 1=User not found; 2=Unexpected exception trying to find user.
- sys_id (optional): `{string}` - The sys_id of the sys_user that was found or the sys_id that was used for the user lookup.
- user_id (optional): `{string}` - The user_id of the sys_user that was found or the user_id that was used for the user lookup.
- user (optional): `{GlideRecord}` - The sys_user that was found.
- message (optional): `{string}` - The user lookup failure message.
- fault (optional): `{any}` - Describes the fatal error.

### IComplianceCheckResult

Represents the results of a compliance check for a profile field.

Properties:

- label: `{string}` - The label for the field that was checked.
- passed: `{boolean}` - Indicates whether the compliance check passed.
- message (optional): `{string}` - The field access failure message.
- fault (optional): `{any}` - Describes the fatal error.

### IUserProfileComplianceInfo

User compliance check information.

Properties:

- notChecked: `{number}` - The number of compliance checks not evaluated due to fatal exception.
- passed: `{number}` - The number of evaluated compliance checks that passed.
- failed: `{number}` - The number of evaluated compliance checks that failed.
- results (optional): `{Record<string, IComplianceCheckResult>}` - [Compliance check results](#icompliancecheckresult) by name.
- message: `{string}` - Compliance check result message.
- fault (optional): `{any}` - Describes the fatal error.

### IUserProfileComplianceResult

Represents the results of a profile compliance check.

Properties:

- code: `{number}` - The profile compliance check result code: 0=Success; 1=User not found; 2=Unexpected exception trying to find user.
- sys_id (optional): `{string}` - The sys_id of the sys_user that was found or the sys_id that was used for the user lookup.
- user_id (optional): `{string}` - The user_id of the sys_user that was found or the user_id that was used for the user lookup.

### IUserNotificationsResult

Properties:

- code: `{number}` - The profile compliance check result code: 0=Success; 1=User not found; 2=Unexpected exception trying to find user.
- sys_id (optional): `{string}` - The sys_id of the sys_user that was found or the sys_id that was used for the user lookup.
- user_id (optional): `{string}` - The user_id of the sys_user that was found or the user_id that was used for the user lookup.
- profileCompliance: [`IUserProfileComplianceInfo`](#iuserprofilecomplianceinfo) - Profile compliance check information.

### IPhoneAndOrg

Properties:

- org: `{string}` - Name of a user's organization.
- phone: `{string}` - User's primary phone number.
