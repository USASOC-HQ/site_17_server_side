"use strict";
/// <reference path="../../types/sn_typings_server_scoped/dist/index.d.ts" />
var x_g_inte_site_17;
(function (x_g_inte_site_17) {
    x_g_inte_site_17.DistinguishedNameContext = (function () {
        var constructor = Class.create();
        constructor.prototype = {
            _isGroup: false,
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
            getSourceRecord: function () { return this._sourceRecord; },
            getTargetObject: function () { return this._targetobject; },
            isGroup: function () { return this._isGroup; },
            isSite17User: function () {
                return !this._isGroup && x_g_inte_site_17.Site17Util.isUserDN('' + (this._isGroup ? this._sourceRecord : this._targetobject).source);
            },
            isSite17Group: function () {
                return this._isGroup && x_g_inte_site_17.Site17Util.isGroupDN('' + (this._isGroup ? this._sourceRecord : this._targetobject).source);
            },
            type: "DistinguishedNameContext"
        };
        return constructor;
    })();
})(x_g_inte_site_17 || (x_g_inte_site_17 = {}));
