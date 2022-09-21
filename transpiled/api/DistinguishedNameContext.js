"use strict";
/// <reference path="../../types/sn_typings_server_scoped/dist/index.d.ts" />
var x_g_inte_site_17;
(function (x_g_inte_site_17) {
    x_g_inte_site_17.DistinguishedNameContext = (function () {
        var constructor = Class.create();
        constructor.prototype = {
            _isGroup: false,
            /**
             * Creates a new {@link DistinguishedNameContext} instance.
             * @constructor
             * @param {(string | GlideRecord | GlideElementReference)} source - The source of the Distinguished Name context
             * @returns {DistinguishedNameContext} A new {@link DistinguishedNameContext} instance.
             * @memberof DistinguishedNameContext
             */
            initialize: function (source) {
                if (gs.nil(source))
                    throw new Error("No user or group specified");
                if (typeof source === 'string') {
                    this._sourceRecord = new GlideRecord('sys_user');
                    this._sourceRecord.addQuery('sys_id', source);
                    this._sourceRecord.query();
                    if (!this._sourceRecord.next()) {
                        this._sourceRecord = new GlideRecord('sys_user_group');
                        this._sourceRecord.addQuery('sys_id', source);
                        this._sourceRecord.query();
                        if (!this._sourceRecord.next())
                            throw new Error("Task not found");
                        this._isGroup = true;
                    }
                    else {
                        this._targetobject = this._sourceRecord;
                        this._isGroup = false;
                    }
                    return;
                }
                if (source instanceof GlideRecord) {
                    if ((this._sourceRecord = source).isNewRecord() || !source.isValidRecord())
                        throw new Error("Not a valid glide object representing a table row");
                }
                else if (source instanceof GlideElement) {
                    this._sourceRecord = source.getRefRecord();
                    if (gs.nil(this._sourceRecord) || this._sourceRecord.isNewRecord() || !this._sourceRecord.isValidRecord())
                        throw new Error("Not a valid glide object representing a table row");
                }
                else
                    throw new Error("Not a valid glide object representing a table row");
                switch ('' + this._sourceRecord.getTableName()) {
                    case 'sys_user':
                        this._targetobject = this._sourceRecord;
                        break;
                    case 'sys_user_group':
                        this._isGroup = true;
                        this._targetobject = this._sourceRecord;
                        break;
                    default:
                        this._targetobject = x_g_inte_site_17.Site17Util.getCaller(this._sourceRecord);
                        break;
                }
            },
            /**
             * Gets the GlideRecord that is the source of this context.
             * @returns {GlideRecord} The GlideRecord that is the source of this context.
             */
            getSourceRecord: function () { return this._sourceRecord; },
            /**
             * Gets the sys_user or sys_user_group object that is the target of this context.
             * @returns {(GlideRecord | GlideElementReference | undefined)} The GlideRecord that is the target of this context.
             * @memberof DistinguishedNameContext
             */
            getTargetObject: function () { return this._targetobject; },
            /**
             * Indicates whether the target object is a sys_user_group or sys_user.
             * @returns {boolean} true if {@link IDistinguishedNameContext#getTargetObject} returns a sys_user_group {@link GlideRecord} or {@link GlideElementReference}; otherwise, false.
             * @memberof DistinguishedNameContext
             */
            isGroup: function () { return this._isGroup; },
            /**
             * Indicates whether the target object is a sys_user and it is considered a Site 17 user.
             * @returns {boolean} true if {@link IDistinguishedNameContext#getTargetObject} returns a sys_user {@link GlideRecord} or {@link GlideElementReference} and {@link Site17Util#isUserDN} returns true for the source property of the target object; otherwise, false.
             * @memberof DistinguishedNameContext
             */
            isSite17User: function () {
                return !this._isGroup && x_g_inte_site_17.Site17Util.isUserDN('' + (this._isGroup ? this._sourceRecord : this._targetobject).source);
            },
            /**
             * Indicates whether the target object is a sys_user_group and it is considered a Site 17 group.
             * @returns {boolean} true if {@link IDistinguishedNameContext#getTargetObject} returns a sys_user_group {@link GlideRecord} or {@link GlideElementReference} and {@link Site17Util#isGroupDN} returns true for the source property of the target object; otherwise, false.
             * @memberof DistinguishedNameContext
             */
            isSite17Group: function () {
                return this._isGroup && x_g_inte_site_17.Site17Util.isGroupDN('' + (this._isGroup ? this._sourceRecord : this._targetobject).source);
            },
            type: "DistinguishedNameContext"
        };
        return constructor;
    })();
})(x_g_inte_site_17 || (x_g_inte_site_17 = {}));
