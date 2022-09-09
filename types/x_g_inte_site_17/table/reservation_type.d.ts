/**
 * GlideElement values from the Reservation Types table.
 * @interface IGlideTableProperties
 * @extends {IExtendedGlideTableProperties}
 */
declare interface reservation_typeFields extends IGlideTableProperties {
    /**
     * Short description
     * @type {$$property.Element}
     * @memberof reservation_typeFields
     */
    short_description: $$property.Element;

    /**
     * Schedule for reservations
     * @type {cmn_scheduleProperty}
     * @memberof reservation_typeFields
     * @description Refers to cmn_schedule (Schedule)
     */
    schedule: cmn_scheduleProperty;

    /**
     * Approval group or nil to automatically approve reservations.
     * @type {$$rhino.Nilable<sys_user_groupProperty>}
     * @memberof reservation_typeFields
     * @description Refers to sys_user_group (Group)
     */
    approval_group: $$rhino.Nilable<sys_user_groupProperty>;

    /**
     * Default Assignment group
     * @type {sys_user_groupProperty}
     * @memberof reservation_typeFields
     * @description Refers to sys_user_group (Group)
     */
    assignment_group: sys_user_groupProperty;

    /**
     * Minimum Duration
     * @type {$$property.GlideObject}
     * @memberof reservation_typeFields
     * @description 
     */
    minimum_duration: $$property.GlideObject;

    /**
     * Maximum Duration
     * @type {$$property.GlideObject}
     * @memberof reservation_typeFields
     * @description This is the maximum reservation duration. This cannot be less than the Minimum Duration, and values are rounded up to the nearest minute.
     */
    maximum_duration: $$property.GlideObject;

    /**
     * Duration Increment
     * @type {$$property.GlideObject}
     * @memberof reservation_typeFields
     * @description This is the length by which reservation durations can be incremented. The minimum value is 1 minute, and values are rounded up to the nearest minute.
     */
    duration_increment: $$property.GlideObject;

    /**
     * Fixed Start Time Interval
     * @type {$$property.GlideObject}
     * @memberof reservation_typeFields
     * @description This is the interval at which reservations must be scheduled. The minimum value is 1 minute, and values are rounded up to the nearest minute.
     */
    start_time_interval: $$property.GlideObject;

    /**
     * Detailed Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof reservation_typeFields
     * @description Internal type is "html"
     */
    details: $$rhino.Nilable<$$property.Element>;

    /**
     * Is Inactive
     * @type {$$property.Boolean}
     * @memberof reservation_typeFields
     */
    inactive: $$property.Boolean;
}
/**
 * Represents constraints for schedule entries that can be added to a specified schedule.
 * @typedef {(GlideRecord & reservation_typeFields)} reservation_typeGlideRecord
 */
declare type reservation_typeGlideRecord = GlideRecord & reservation_typeFields;
declare type reservation_typeElement = $$element.Reference<reservation_typeFields, reservation_typeGlideRecord>;
declare type reservation_typeProperty = $$property.generic.ReferenceProperty<reservation_typeFields, reservation_typeGlideRecord, reservation_typeElement>;