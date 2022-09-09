/**
 * GlideElement values from the Squadrop Options table.
 * @interface IGlideTableProperties
 * @extends {IExtendedGlideTableProperties}
 */
 declare interface squadron_optionsFields extends IGlideTableProperties {
    /**
     * Short description
     * @type {$$property.Element}
     * @memberof squadron_optionsFields
     */
    short_description: $$property.Element;

    /**
     * Approval group or nil to automatically approve requests.
     * @type {$$rhino.Nilable<sys_user_groupProperty>}
     * @memberof squadron_optionsFields
     * @description Refers to sys_user_group (Group)
     */
    approval_group: $$rhino.Nilable<sys_user_groupProperty>;

    /**
     * Default Assignment group
     * @type {sys_user_groupProperty}
     * @memberof squadron_optionsFields
     * @description Refers to sys_user_group (Group)
     */
    assignment_group: sys_user_groupProperty;

    /**
     * Inactive
     * @type {$$property.Boolean}
     * @memberof squadron_optionsFields
     */
    inactive: $$property.Boolean;
}
/**
 * Associates default IT-related approval and assignment groups with squadrons supported by Site 17.
 * @typedef {(GlideRecord & squadron_optionsFields)} squadron_optionsGlideRecord
 * @description Record for items from the 'squadron_options' table.
 */
declare type squadron_optionsGlideRecord = GlideRecord & squadron_optionsFields
declare type squadron_optionsElement = $$element.Reference<squadron_optionsFields, squadron_optionsGlideRecord>;
declare type squadron_optionsProperty = $$property.generic.ReferenceProperty<squadron_optionsFields, squadron_optionsGlideRecord, squadron_optionsElement>;