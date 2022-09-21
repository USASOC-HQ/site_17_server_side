/// <reference path="../../types/sn_typings_server_scoped/dist/index.d.ts" />

namespace x_g_inte_site_17 {
    export interface IDistinguishedNameContext extends $$snClass.ICustomClassBase<IDistinguishedNameContext, "DistinguishedNameContext"> {
        /**
         * Has a true value if {@link IDistinguishedNameContext#_targetObject} is a sys_user_group; otherwise, false.
         * @type {boolean}
         * @memberof IDistinguishedNameContext
         * @private
         */
        _isGroup: boolean;

        /**
         * The source {@link GlideRecord}.
         * @type {GlideRecord}
         * @memberof IDistinguishedNameContext
         * @private
         */
        _sourceRecord?: GlideRecord;

        /**
         * The target {@link GlideRecord} or {@link GlideElementReference} for a sys_user or sys_user_group.
         * @type {GlideRecord | GlideElementReference | undefined}
         * @memberof IDistinguishedNameContext
         * @private
         */
        _targetobject?: GlideRecord | GlideElementReference;

        /**
         * Gets the GlideRecord that is the source of this context.
         * @returns {GlideRecord} The GlideRecord that is the source of this context.
         * @memberof IDistinguishedNameContext
         */
        getSourceRecord(): GlideRecord;

        /**
         * Gets the sys_user or sys_user_group object that is the target of this context.
         * @returns {(GlideRecord | GlideElementReference | undefined)} The GlideRecord that is the target of this context.
         * @memberof IDistinguishedNameContext
         */
        getTargetObject(): GlideRecord | GlideElementReference | undefined;

        /**
         * Indicates whether the target object is a sys_user_group or sys_user.
         * @returns {boolean} true if {@link IDistinguishedNameContext#getTargetObject} returns a sys_user_group {@link GlideRecord} or {@link GlideElementReference}; otherwise, false.
         * @memberof IDistinguishedNameContext
         */
        isGroup(): boolean;

        /**
         * Indicates whether the target object is a sys_user and it is considered a Site 17 user.
         * @returns {boolean} true if {@link IDistinguishedNameContext#getTargetObject} returns a sys_user {@link GlideRecord} or {@link GlideElementReference} and {@link Site17Util#isUserDN} returns true for the source property of the target object; otherwise, false.
         * @memberof IDistinguishedNameContext
         */
        isSite17User(): boolean;

        /**
         * Indicates whether the target object is a sys_user_group and it is considered a Site 17 group.
         * @returns {boolean} true if {@link IDistinguishedNameContext#getTargetObject} returns a sys_user_group {@link GlideRecord} or {@link GlideElementReference} and {@link Site17Util#isGroupDN} returns true for the source property of the target object; otherwise, false.
         * @memberof IDistinguishedNameContext
         */
        isSite17Group(): boolean;
    }

    export interface IDistinguishedNameContextPrototype extends $$snClass.ICustomClassPrototype1<IDistinguishedNameContext, IDistinguishedNameContextPrototype, "DistinguishedNameContext", string | GlideRecord | GlideElementReference>, IDistinguishedNameContext {
    }

    export interface IDistinguishedNameContextInfo extends Readonly<IDistinguishedNameContext> { }

    export declare type DistinguishedNameContext = Readonly<IDistinguishedNameContextInfo>;

    export interface DistinguishedNameContextConstructor extends $$snClass.CustomClassConstructor1<IDistinguishedNameContext, IDistinguishedNameContextPrototype, IDistinguishedNameContextInfo, string | GlideRecord | GlideElementReference> {
        /**
         * Creates a new {@link DistinguishedNameContext} instance.
         * @constructor
         * @param {(string | GlideRecord | GlideElementReference)} source - The source of the Distinguished Name context
         * @returns {DistinguishedNameContext} A new {@link DistinguishedNameContext} instance.
         * @memberof DistinguishedNameContextConstructor
         */
        new(source: string | GlideRecord | GlideElementReference): DistinguishedNameContext;

        /**
         * Creates a new {@link DistinguishedNameContext} instance.
         * @constructor
         * @param {(string | GlideRecord | GlideElementReference)} source - The source of the Distinguished Name context
         * @returns {DistinguishedNameContext} A new {@link DistinguishedNameContext} instance.
         * @memberof DistinguishedNameContextConstructor
         */
        (source: string | GlideRecord | GlideElementReference): DistinguishedNameContext;
    }

    export const DistinguishedNameContext: DistinguishedNameContextConstructor = (function (): DistinguishedNameContextConstructor {
        var constructor: DistinguishedNameContextConstructor = Class.create();

        constructor.prototype = {
            _isGroup: false,
            
            /**
             * Creates a new {@link DistinguishedNameContext} instance.
             * @constructor
             * @param {(string | GlideRecord | GlideElementReference)} source - The source of the Distinguished Name context
             * @returns {DistinguishedNameContext} A new {@link DistinguishedNameContext} instance.
             * @memberof DistinguishedNameContext
             */
            initialize(source: string | GlideRecord | GlideElementReference): void {
                if (gs.nil(source)) throw new Error("No user or group specified");
                if (typeof source === 'string') {
                    this._sourceRecord = new GlideRecord('sys_user');
                    this._sourceRecord.addQuery('sys_id', source);
                    this._sourceRecord.query();
                    if (!this._sourceRecord.next()) {
                        this._sourceRecord = new GlideRecord('sys_user_group');
                        this._sourceRecord.addQuery('sys_id', source);
                        this._sourceRecord.query();
                        if (!this._sourceRecord.next()) throw new Error("Task not found");
                        this._isGroup = true;
                    } else {
                        this._targetobject = this._sourceRecord;
                        this._isGroup = false;
                    }
                    return;
                }
                if (source instanceof GlideRecord) {
                    if ((this._sourceRecord = source).isNewRecord() || !source.isValidRecord()) throw new Error("Not a valid glide object representing a table row");
                } else if (source instanceof GlideElement) {
                    this._sourceRecord = (<{ [key: string]: any}>source).getRefRecord();
                    if (gs.nil(this._sourceRecord) || this._sourceRecord.isNewRecord() || !this._sourceRecord.isValidRecord()) throw new Error("Not a valid glide object representing a table row");
                } else
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
                        this._targetobject = Site17Util.getCaller(this._sourceRecord);
                        break;
                }
            },

            /**
             * Gets the GlideRecord that is the source of this context.
             * @returns {GlideRecord} The GlideRecord that is the source of this context.
             */
            getSourceRecord: function(): GlideRecord { return <GlideRecord>this._sourceRecord; },

            /**
             * Gets the sys_user or sys_user_group object that is the target of this context.
             * @returns {(GlideRecord | GlideElementReference | undefined)} The GlideRecord that is the target of this context.
             * @memberof DistinguishedNameContext
             */
            getTargetObject: function(): GlideRecord | GlideElementReference | undefined { return this._targetobject; },

            /**
             * Indicates whether the target object is a sys_user_group or sys_user.
             * @returns {boolean} true if {@link IDistinguishedNameContext#getTargetObject} returns a sys_user_group {@link GlideRecord} or {@link GlideElementReference}; otherwise, false.
             * @memberof DistinguishedNameContext
             */
            isGroup: function(): boolean { return this._isGroup; },

            /**
             * Indicates whether the target object is a sys_user and it is considered a Site 17 user.
             * @returns {boolean} true if {@link IDistinguishedNameContext#getTargetObject} returns a sys_user {@link GlideRecord} or {@link GlideElementReference} and {@link Site17Util#isUserDN} returns true for the source property of the target object; otherwise, false.
             * @memberof DistinguishedNameContext
             */
            isSite17User: function(): boolean {
                return !this._isGroup && Site17Util.isUserDN('' + (this._isGroup ? <sys_userFields><any>this._sourceRecord : <sys_userFields><any>this._targetobject).source);
            },

            /**
             * Indicates whether the target object is a sys_user_group and it is considered a Site 17 group.
             * @returns {boolean} true if {@link IDistinguishedNameContext#getTargetObject} returns a sys_user_group {@link GlideRecord} or {@link GlideElementReference} and {@link Site17Util#isGroupDN} returns true for the source property of the target object; otherwise, false.
             * @memberof DistinguishedNameContext
             */
            isSite17Group: function(): boolean {
                return this._isGroup && Site17Util.isGroupDN('' + (this._isGroup ? <sys_userFields><any>this._sourceRecord : <sys_userFields><any>this._targetobject).source);
            },

            type: "DistinguishedNameContext"
        };

        return constructor;
    })();
}