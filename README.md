# site_17_server_side

TypeScript source code for server-side scripts in the [Site 17 ServiceNow application](https://github.com/USASOC-HQ/x_g_inte_site_17).

Issues and backlog items are tracked in the [Site 17 App GitHub Project](https://github.com/orgs/USASOC-HQ/projects/4).

## APIs

Following are APIs defined within this ServiceNow application

- [Site17Util](Site17Util.md)
- [DistinguishedNameContext](DistinguishedNameContext.md)
- [LocationApproval](LocationApproval.md)
- [ProfileValidator](ProfileValidator.md)
- [ReservationScheduler](ReservationScheduler.md)
- [ReservationSchedulerAjax](ReservationSchedulerAjax.md)
- [AtfHelper](AtfHelper.md)




## Pre-requisites and Initialization

### Visual Studio Code

[Visual Studio Code can be installed using this link](https://code.visualstudio.com/).
The file [.vscode/extension.json](./.vscode/extensions.json) contains extensions that are recommended.
You can view these recommendations and load them from the extensions icon in the activity bar.
Without certain extensions, such as "JavaScript and TypeScript Nightly", you may not be able to successfully execute a build task.

### NodeJS and NPM (Node Package Manager)

When installing [NodeJS from this link](https://nodejs.org/en/download/), the installer will include NPM.

After the first time you check out this repository, you'll need to initialize NPM locally for this repository using the command `npm install`.

## Using Transpiled Code

The transpiled files will contain a reasonable representation of the code that you copy and paste into respective script text boxes in the target ServiceNow instance.
Since there are some differences in concept of namespaces between ServiceNow and TypeScript, most of the time you will be copying and pasting the contents of a particular namespace,
rather than the entire contents of a transpiled file.

### Script Includes

Classes in this module are created and initialized within self-executing function expressions similar to the following template:

```JavaScript
ClassName = (function () {
     var constructor = Class.create();
     var constantVar = "value";
     function privateFunc() { /* code */ }
     constructor.staticMethod() { /* code */ }
     constructor.prototype = {
        instanceMethod: function() { /* code */ },
        type: "ClassName"
     };
     return constructor;
})();
```

The transpiled code of script includes will contain references for the namespace, such as `x_g_inte_site_17`, with the return value from `Class.Create()` being assigned to the namespace,
rather than to a variable like it is in ServiceNow itself. Therefore, you would copy code being assigned and paste that as the assignment value in ServiceNow.

In the following abbreviated example of the transpiled code for the `Site17Util` API, you would copy the function expression being assigned to `x_g_inte_site_17.Site17Util` and paste that into ServiceNow
as the value being assigned to the `Site17Util` variable.

```JavaScript
"use strict";
/// <reference path="../../types/sn_typings_server_scoped/dist/index.d.ts" />
var x_g_inte_site_17;
(function (x_g_inte_site_17) {
    x_g_inte_site_17.Site17Util = (function () {
        var constructor = Class.create();
// ... code omitted ...
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
// ... code omitted ...
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
// ... code omitted ...
            type: "Site17Util"
        });
// ... code omitted ...
        function isDnContainedBy(sourceDN, containerDN) {
            if (!testDistinguishedName(sourceDN))
                return false;
            if (sourceDN.length == containerDN.length)
                return sourceDN.toLowerCase() == containerDN.toLowerCase();
            if (sourceDN.length < (containerDN.length + 3))
                return false;
            return testDistinguishedName(containerDN) && sourceDN.toLowerCase().endsWith(',' + containerDN.toLowerCase());
        }
// ... code omitted ...
        return constructor;
    })();
})(x_g_inte_site_17 || (x_g_inte_site_17 = {}));
```

After you paste the code into ServiceNow script edit box, you can fix the indent by using the script formatting button. Then, it will look something like:

```JavaScript
var Site17Util = (function () {
    var constructor = Class.create();
// ... code omitted ...
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
// ... code omitted ...
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
// ... code omitted ...
        type: "Site17Util"
    });
// ... code omitted ...
    function isDnContainedBy(sourceDN, containerDN) {
        if (!testDistinguishedName(sourceDN))
            return false;
        if (sourceDN.length == containerDN.length)
            return sourceDN.toLowerCase() == containerDN.toLowerCase();
        if (sourceDN.length < (containerDN.length + 3))
            return false;
        return testDistinguishedName(containerDN) && sourceDN.toLowerCase().endsWith(',' + containerDN.toLowerCase());
    }
// ... code omitted ...
    return constructor;
})();
```

### ATF test scripts and other scripts

To prevent cross-contamination of variable names and definitions between scripts, other scripts, such as fix scripts and ATF test scripts are
defined in their own arbitrary namespace. Therefore, you'd simply copy the contents of the namepace into the script edit box in ServiceNow.

The following abbreviated example of the transpiled code for the fix script that ensures schedule entries are created:

```JavaScript
"use strict";
var ensure_schedule_entries;
(function (ensure_schedule_entries) {
    // This defines the expected schedule relationships and entries
    var schedules = [{
            sys_id: "86045f4e1b67c9101497a820f54bcb59",
            is_holiday: false,
            entries: [{
// ... code omitted ...
                }],
            child_schedules: [
                { /* Site 17 Facility Holidays */ sys_id: 'c7475f021ba7c9101497a820f54bcb04', type: 'include' },
                { /* Site 17 UM/CIV Holidays */ sys_id: '46981f421ba7c9101497a820f54bcbff', type: 'include' }
            ]
        }];
    for (var s = 0; s < schedules.length; s++) {
// ... code omitted ...
    }
})(ensure_schedule_entries || (ensure_schedule_entries = {}));
```

Since the transpiled code is contained within a code block, it will have an extra indent, as compared to what you'd expect within the ServiceNow script edit box. You can fix the indent by using the script formatting button. Afterward, the script edit box in ServiceNow will look something like:

```JavaScript
// This defines the expected schedule relationships and entries
var schedules = [{
        sys_id: "86045f4e1b67c9101497a820f54bcb59",
        is_holiday: false,
        entries: [{
// ... code omitted ...
            }],
        child_schedules: [
            { /* Site 17 Facility Holidays */ sys_id: 'c7475f021ba7c9101497a820f54bcb04', type: 'include' },
            { /* Site 17 UM/CIV Holidays */ sys_id: '46981f421ba7c9101497a820f54bcbff', type: 'include' }
        ]
    }];
for (var s = 0; s < schedules.length; s++) {
// ... code omitted ...
}
```

## Type Definitions

### Type Definition Dependency

This depends upon TypeScript definitions from the [sn_typings_server_scoped](https://github.com/erwinel/sn_typings_server_scoped/blob/master/README.md) repository.
This is included as a git submodule, with type definitions contained in the `types/sn_typings_server_scoped/dist` folder.
The original author of this project intended to replace this dependency with improved (and less complex) TypeScript definitions from the [sn-types-scoped-server](https://github.com/lerwine/sn-types-scoped-server/blob/master/README.md). However there was not enough time to finish the new set of type definitions and migrate this project before the it was handed off for deployment.

### Generate Type Definitions

When build tasks are executed, type defintion files for Script Includes are generated in the `types/x_g_inte_site_17/api` folder.
The `types/x_g_inte_site_17/table` contains type definitions for tables defined in the Site 17 application, in accordance with table definition patterns used in the
type definitions in `types/sn_typings_server_scoped/dist`.
