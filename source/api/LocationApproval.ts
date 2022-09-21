/// <reference path="../../types/sn_typings_server_scoped/dist/index.d.ts" />

namespace x_g_inte_site_17 {
    export interface ILocationApproval extends $$snClass.ICustomClassBase<ILocationApproval, "LocationApproval"> {
        /**
         * Gets the target user of the target record (ie. caller, requested_for).
         * @returns {(GlideRecord | GlideElementReference | undefined)} The {@link GlideRecord} or {@link GlideElementReference} for the target user.
         * @memberof ILocationApproval
         */
        getCaller(): GlideRecord | GlideElement | undefined;

        /**
         * Indicates whether the target user is a VIP user.
         * @returns {boolean} true if {@link ILocationApproval#getCaller} returns user designated as VIP; otherwise, false.
         * @memberof ILocationApproval
         */
        isVip(): boolean;

        /**
         * Looks up the default approval group.
         * @returns {(GlideElementReference | undefined)} The{@link GlideElementReference} for the default aproval group.
         * @memberof ILocationApproval
         */
        getDefaultApprovalGroup(): GlideElementReference | undefined;
    }

    export interface ILocationApprovalPrototype extends $$snClass.ICustomClassPrototype1<ILocationApproval, ILocationApprovalPrototype, "LocationApproval", GlideRecord | GlideElementReference>, ILocationApproval {
        /**
         * The target {@link GlideRecord}.
         * @type {GlideRecord}
         * @memberof ILocationApprovalPrototype
         * @private
         */
        _glideRecord?: GlideRecord;
    }

        export declare type LocationApproval = Readonly<ILocationApprovalPrototype>;

    export interface LocationApprovalConstructor extends $$snClass.CustomClassConstructor1<ILocationApproval, ILocationApprovalPrototype, LocationApproval, GlideRecord | GlideElementReference> {
        /**
         * Creates a new {@link LocationApproval} instance.
         * @constructor
         * @param {(string | GlideRecord | GlideElementReference)} source - The source object for the approval context.
         * @returns {ILocationApproval} A new {@link LocationApproval} instance.
         * @memberof LocationApprovalConstructor
         */
        new(source: GlideRecord | GlideElementReference): LocationApproval;

        /**
         * Creates a new {@link LocationApproval} instance.
         * @constructor
         * @param {(string | GlideRecord | GlideElementReference)} source - The source object for the approval context.
         * @returns {ILocationApproval} A new {@link LocationApproval} instance.
         * @memberof LocationApprovalConstructor
         */
        (source: GlideRecord | GlideElementReference): LocationApproval;

        /**
         * Looks up the default approval group.
         * @param {(string | GlideRecord | GlideElementReference)} source - The source object for the approval context.
         * @returns {(GlideElementReference | undefined)} The{@link GlideElementReference} for the default aproval group.
         * @memberof LocationApprovalConstructor
         */
        getDefaultApprovalGroup(source: GlideRecord | GlideElementReference): GlideElementReference | undefined;
    }

    export const LocationApproval: LocationApprovalConstructor = (function (): LocationApprovalConstructor {
        var constructor: LocationApprovalConstructor = Class.create();

        const TABLE_NAME = 'x_g_inte_site_17_location_approvers';

        function getDefaultApprovalGroup(source: GlideRecord | GlideElementReference): GlideElementReference | undefined {
            var company: GlideRecord | GlideElementReference | undefined = Site17Util.getCompany(source);
            var building: GlideElementReference | undefined = (<{ [key: string]: any}>source).building;
            var business_unit: GlideRecord | GlideElementReference | undefined = Site17Util.getBusinessUnit(source);
            var department: GlideElementReference | undefined = (<{ [key: string]: any}>source).department;
            var location: GlideRecord | GlideElementReference | undefined = Site17Util.getLocation(source);
            var gr: GlideRecord = new GlideRecord(TABLE_NAME);
            gr.orderBy('order');
            gr.query();
            while (gr.next()) {
                if ((<{ [key: string]: any}>gr).type == 'any') {
                    if ((!(gs.nil((<{ [key: string]: any}>gr).company) || gs.nil(company)) && (<{ [key: string]: any}>gr).company.sys_id == company.sys_id) ||
                        (!(gs.nil((<{ [key: string]: any}>gr).business_unit) || gs.nil(company)) && (<{ [key: string]: any}>gr).business_unit.sys_id == (<GlideRecord><any>business_unit).sys_id) ||
                        (!(gs.nil((<{ [key: string]: any}>gr).department) || gs.nil(department)) && (<{ [key: string]: any}>gr).department.sys_id == department.sys_id) ||
                        (!(gs.nil((<{ [key: string]: any}>gr).building) || gs.nil(building)) && (<{ [key: string]: any}>gr).building.sys_id == building.sys_id) ||
                        (!(gs.nil((<{ [key: string]: any}>gr).location) || gs.nil(location)) && (<{ [key: string]: any}>gr).company.sys_id == location.sys_id))
                        return (<{ [key: string]: any}>gr).approval_group;
                } else {
                    if ((gs.nil((<{ [key: string]: any}>gr).company) || (!gs.nil(company) && (<{ [key: string]: any}>gr).company.sys_id == company.sys_id)) &&
                        (gs.nil((<{ [key: string]: any}>gr).business_unit) || (!gs.nil(business_unit) && (<{ [key: string]: any}>gr).business_unit.sys_id == business_unit.sys_id)) &&
                        (gs.nil((<{ [key: string]: any}>gr).department) || (!gs.nil(department) && (<{ [key: string]: any}>gr).department.sys_id == department.sys_id)) &&
                        (gs.nil((<{ [key: string]: any}>gr).building) || (!gs.nil(building) && (<{ [key: string]: any}>gr).building.sys_id == building.sys_id)) &&
                        (gs.nil((<{ [key: string]: any}>gr).location) || (!gs.nil(location) && (<{ [key: string]: any}>gr).location.sys_id == location.sys_id)))
                        return (<{ [key: string]: any}>gr).approval_group;
                }
            }
        }

        constructor.getDefaultApprovalGroup = getDefaultApprovalGroup;

        constructor.prototype = {
            /**
             * Creates a new {@link LocationApproval} instance.
             * @constructor
             * @param {(string | GlideRecord | GlideElementReference)} source - The source object for the approval context.
             * @memberof LocationApproval
             */
            initialize(source: GlideRecord | GlideElementReference): void {
                if (gs.nil(source)) throw new Error("No glide object provided");
                if (source instanceof GlideRecord) {
                    if (source.isNewRecord() || !source.isValidRecord())
                        throw new Error("Not a valid task record");
                    this._glideRecord = source;
                } else {
                    this._glideRecord = <GlideRecord>source.getRefRecord();
                    if (gs.nil(this._glideRecord)) throw new Error("No glide record referenced");
                }
            },

            /**
             * Gets the target user of the target record (ie. caller, requested_for).
             * @returns {(GlideRecord | GlideElementReference | undefined)} The {@link GlideRecord} or {@link GlideElementReference} for the target user.
             * @memberof LocationApproval
             */
            getCaller: function(): GlideRecord | GlideElement | undefined {
                return Site17Util.getCaller(<GlideRecord>this._glideRecord);
            },

            /**
             * Indicates whether the target user is a VIP user.
             * @returns {boolean} true if {@link ILocationApproval#getCaller} returns user designated as VIP; otherwise, false.
             * @memberof LocationApproval
             */
            isVip: function(): boolean {
                return Site17Util.isVip(<GlideRecord>this._glideRecord);
            },

            /**
             * Looks up the default approval group.
             * @returns {(GlideElementReference | undefined)} The{@link GlideElementReference} for the default aproval group.
             * @memberof LocationApproval
             */
            getDefaultApprovalGroup: function(): GlideElementReference | undefined {
                return getDefaultApprovalGroup(<GlideRecord>this.getCaller());
            },

            type: "LocationApproval"
        };

        return constructor;
    })();
}