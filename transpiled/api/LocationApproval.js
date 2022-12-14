"use strict";
/// <reference path="../../types/sn_typings_server_scoped/dist/index.d.ts" />
var x_g_inte_site_17;
(function (x_g_inte_site_17) {
    x_g_inte_site_17.LocationApproval = (function () {
        var constructor = Class.create();
        var TABLE_NAME = 'x_g_inte_site_17_location_approvers';
        function getDefaultApprovalGroup(source) {
            var company = x_g_inte_site_17.Site17Util.getCompany(source);
            var building = source.building;
            var business_unit = x_g_inte_site_17.Site17Util.getBusinessUnit(source);
            var department = source.department;
            var location = x_g_inte_site_17.Site17Util.getLocation(source);
            var gr = new GlideRecord(TABLE_NAME);
            gr.orderBy('order');
            gr.query();
            while (gr.next()) {
                if (gr.type == 'any') {
                    if ((!(gs.nil(gr.company) || gs.nil(company)) && gr.company.sys_id == company.sys_id) ||
                        (!(gs.nil(gr.business_unit) || gs.nil(company)) && gr.business_unit.sys_id == business_unit.sys_id) ||
                        (!(gs.nil(gr.department) || gs.nil(department)) && gr.department.sys_id == department.sys_id) ||
                        (!(gs.nil(gr.building) || gs.nil(building)) && gr.building.sys_id == building.sys_id) ||
                        (!(gs.nil(gr.location) || gs.nil(location)) && gr.company.sys_id == location.sys_id))
                        return gr.approval_group;
                }
                else {
                    if ((gs.nil(gr.company) || (!gs.nil(company) && gr.company.sys_id == company.sys_id)) &&
                        (gs.nil(gr.business_unit) || (!gs.nil(business_unit) && gr.business_unit.sys_id == business_unit.sys_id)) &&
                        (gs.nil(gr.department) || (!gs.nil(department) && gr.department.sys_id == department.sys_id)) &&
                        (gs.nil(gr.building) || (!gs.nil(building) && gr.building.sys_id == building.sys_id)) &&
                        (gs.nil(gr.location) || (!gs.nil(location) && gr.location.sys_id == location.sys_id)))
                        return gr.approval_group;
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
            initialize: function (source) {
                if (gs.nil(source))
                    throw new Error("No glide object provided");
                if (source instanceof GlideRecord) {
                    if (source.isNewRecord() || !source.isValidRecord())
                        throw new Error("Not a valid task record");
                    this._glideRecord = source;
                }
                else {
                    this._glideRecord = source.getRefRecord();
                    if (gs.nil(this._glideRecord))
                        throw new Error("No glide record referenced");
                }
            },
            /**
             * Gets the target user of the target record (ie. caller, requested_for).
             * @returns {(GlideRecord | GlideElementReference | undefined)} The {@link GlideRecord} or {@link GlideElementReference} for the target user.
             * @memberof LocationApproval
             */
            getCaller: function () {
                return x_g_inte_site_17.Site17Util.getCaller(this._glideRecord);
            },
            /**
             * Indicates whether the target user is a VIP user.
             * @returns {boolean} true if {@link ILocationApproval#getCaller} returns user designated as VIP; otherwise, false.
             * @memberof LocationApproval
             */
            isVip: function () {
                return x_g_inte_site_17.Site17Util.isVip(this._glideRecord);
            },
            /**
             * Looks up the default approval group.
             * @returns {(GlideElementReference | undefined)} The{@link GlideElementReference} for the default aproval group.
             * @memberof LocationApproval
             */
            getDefaultApprovalGroup: function () {
                return getDefaultApprovalGroup(this.getCaller());
            },
            type: "LocationApproval"
        };
        return constructor;
    })();
})(x_g_inte_site_17 || (x_g_inte_site_17 = {}));
