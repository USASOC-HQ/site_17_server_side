/// <reference path="../../sn_typings_server_scoped/dist/index.d.ts" />
declare namespace x_g_inte_site_17 {
    interface IDistinguishedNameContext extends $$snClass.ICustomClassBase<IDistinguishedNameContext, "DistinguishedNameContext"> {
        /**
         * Has a true value if {@link IDistinguishedNameContext#_targetObject} is a sys_user_group; otherwise, false
         *
         * @type {boolean}
         * @memberof IDistinguishedNameContextBase
         * @private
         */
        _isGroup: boolean;
        /**
         * The source {@link GlideRecord}.
         *
         * @type {GlideRecord}
         * @memberof IDistinguishedNameContextBase
         * @private
         */
        _sourceRecord?: GlideRecord;
        /**
         * The target {@link GlideRecord} or {@link GlideElementReference} for a sys_user or sys_user_group.
         *
         * @type {GlideRecord | GlideElementReference | undefined}
         * @memberof IDistinguishedNameContextBase
         * @private
         */
        _targetobject?: GlideRecord | GlideElementReference;
        /**
         * Gets the GlideRecord that is the source of this context.
         *
         * @returns {GlideRecord} The GlideRecord that is the source of this context.
         */
        getSourceRecord(): GlideRecord;
        /**
         * Gets the sys_user or sys_user_group object that is the target of this context.
         *
         * @returns {(GlideRecord | GlideElementReference | undefined)} The GlideRecord that is the target of this context.
         */
        getTargetObject(): GlideRecord | GlideElementReference | undefined;
        /**
         * Indicates whether the target object is a sys_user_group or sys_user.
         *
         * @returns {boolean} true if {@link IDistinguishedNameContext#getTargetObject} returns a sys_user_group {@link GlideRecord} or {@link GlideElementReference}; otherwise, false.
         */
        isGroup(): boolean;
        /**
         * Indicates whether the target object is a sys_user and it is considered a Site 17 user.
         *
         * @returns {boolean} true if {@link IDistinguishedNameContext#getTargetObject} returns a sys_user {@link GlideRecord} or {@link GlideElementReference} and {@link Site17Util#isUserDN} returns true for the source property of the target object; otherwise, false.
         */
        isSite17User(): boolean;
        /**
         * Indicates whether the target object is a sys_user_group and it is considered a Site 17 group.
         *
         * @returns {boolean} true if {@link IDistinguishedNameContext#getTargetObject} returns a sys_user_group {@link GlideRecord} or {@link GlideElementReference} and {@link Site17Util#isGroupDN} returns true for the source property of the target object; otherwise, false.
         */
        isSite17Group(): boolean;
    }
    interface IDistinguishedNameContextPrototype extends $$snClass.ICustomClassPrototype1<IDistinguishedNameContext, IDistinguishedNameContextPrototype, "DistinguishedNameContext", string | GlideRecord | GlideElementReference>, IDistinguishedNameContext {
    }
    interface IDistinguishedNameContextInfo extends Readonly<IDistinguishedNameContext> {
    }
    type DistinguishedNameContext = Readonly<IDistinguishedNameContextPrototype>;
    interface DistinguishedNameContextConstructor extends $$snClass.CustomClassConstructor1<IDistinguishedNameContext, IDistinguishedNameContextPrototype, IDistinguishedNameContextInfo, string | GlideRecord | GlideElementReference> {
        /**
         * Creates a new {@link DistinguishedNameContext} instance.
         *
         * @constructor
         * @param {(string | GlideRecord | GlideElementReference)} source - The source of the Distinguished Name context
         * @memberof DistinguishedNameContextConstructor
         * @returns {IDistinguishedNameContextInfo} A new {@link DistinguishedNameContext} instance.
         */
        new (source: string | GlideRecord | GlideElementReference): IDistinguishedNameContextInfo;
        /**
         * Creates a new {@link DistinguishedNameContext} instance.
         *
         * @constructor
         * @param {(string | GlideRecord | GlideElementReference)} source - The source of the Distinguished Name context
         * @memberof DistinguishedNameContextConstructor
         * @returns {IDistinguishedNameContextInfo} A new {@link DistinguishedNameContext} instance.
         */
        (source: string | GlideRecord | GlideElementReference): IDistinguishedNameContextInfo;
    }
    const DistinguishedNameContext: DistinguishedNameContextConstructor;
}
