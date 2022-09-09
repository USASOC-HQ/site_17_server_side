declare type LocationApprovalMatchType = 'all' | 'any';

/**
 * GlideElement values from the Location Approvers table.
 * @interface IGlideTableProperties
 * @extends {IExtendedGlideTableProperties}
 */
 declare interface location_approversFields extends IGlideTableProperties {
    /**
     * Approval group.
     * @type {$$rhino.Nilable<sys_user_groupProperty>}
     * @memberof location_approversFields
     * @description Refers to sys_user_group (Group)
     */
    approval_group: $$rhino.Nilable<sys_user_groupProperty>;

    /**
     * Building to match or nil for any building.
     * @type {$$rhino.Nilable<cmn_buildingProperty>}
     * @memberof location_approversFields
     * @description Refers to cmn_building (Building)
     */
    building: $$rhino.Nilable<cmn_buildingProperty>;

    /**
     * Business Unit to match or nil for any business unit.
     * @type {$$rhino.Nilable<business_unitProperty>}
     * @memberof location_approversFields
     * @description Refers to business_unit (Business Unit)
     */
    business_unit: $$rhino.Nilable<business_unitProperty>;

    /**
     * Company to match or nil for any company.
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof location_approversFields
     * @description Refers to core_company (Company)
     */
    company: $$rhino.Nilable<core_companyProperty>;

    /**
     * Department to match or nil for any department.
     * @type {$$rhino.Nilable<cmn_departmentProperty>}
     * @memberof location_approversFields
     * @description Refers to cmn_department (Departmnet)
     */
    department: $$rhino.Nilable<cmn_departmentProperty>;

    /**
     * Location to match or nil for any location.
     * @type {$$rhino.Nilable<cmn_locationProperty>}
     * @memberof location_approversFields
     * @description Refers to cmn_location (Location)
     */
    location: $$rhino.Nilable<cmn_locationProperty>;

    /**
     * Match Type
     * @type {$$property.generic.Element<LocationApprovalMatchType>}
     * @memberof location_approversFields
     * @description 
     */
    type: $$property.generic.Element<LocationApprovalMatchType>;

    /**
     * Order of precedence.
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof location_approversFields
     */
    order: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Is Active
     * @type {$$property.Boolean}
     * @memberof location_approversFields
     */
    is_active: $$property.Boolean;
}
/**
 * Represents constraints for schedule entries that can be added to a specified schedule.
 * @typedef {(GlideRecord & location_approversFields)} location_approversGlideRecord
 */
declare type location_approversGlideRecord = GlideRecord & location_approversFields;
declare type location_approversElement = $$element.Reference<location_approversFields, location_approversGlideRecord>;
declare type location_approversProperty = $$property.generic.ReferenceProperty<location_approversFields, location_approversGlideRecord, location_approversElement>;