/// <reference path="../../types/sn_typings_server_scoped/dist/index.d.ts" />
/// <reference path="../../types/x_g_inte_site_17/table/index.d.ts" />
declare namespace x_g_inte_site_17 {
    interface ITimeSpan {
        start: GlideDateTime;
        duration: GlideDuration;
    }
    /**
     * Base interface for the ReservationScheduler API.
     * @export
     * @interface IReservationScheduler
     * @extends {$$snClass.ICustomClassBase<IReservationScheduler, "ReservationScheduler">}
     */
    interface IReservationScheduler extends $$snClass.ICustomClassBase<IReservationScheduler, "ReservationScheduler"> {
        sys_id: string;
        /**
         * Short description
         * @type {string}
         * @memberof IReservationScheduler
         */
        short_description: string;
        /**
         * The current GlideSchedule object.
         * @type {GlideSchedule}
         * @memberof IReservationScheduler
         */
        schedule: GlideSchedule;
        /**
         * The current user's time zone
         * @type {string}
         * @memberof IReservationScheduler
         */
        timeZone: string;
        /**
         * Sys ID of Approval group or undefined to automatically approve reservations.
         * @type {(string|undefined)}
         * @memberof IReservationScheduler
         */
        approval_group?: string;
        /**
         * Sys ID of Default Assignment group
         * @type {string}
         * @memberof IReservationScheduler
         * @description Refers to sys_user_group (Group)
         */
        assignment_group: string;
        /**
         * Minimum Duration
         * @type {GlideDuration}
         * @memberof IReservationScheduler
         * @description This is the minimum reservation duration. The minimum value is 1 minute, and values are rounded up to the nearest minute.
         */
        minimum_duration: GlideDuration;
        /**
         * Maximum Duration
         * @type {GlideDuration}
         * @memberof IReservationScheduler
         * @description This is the maximum reservation duration. This cannot be less than the Minimum Duration, and values are rounded up to the nearest minute.
         */
        maximum_duration: GlideDuration;
        /**
         * Duration Increment
         * @type {GlideDuration}
         * @memberof IReservationScheduler
         * @description This is the length by which reservation durations can be incremented. The minimum value is 1 minute, and values are rounded up to the nearest minute.
         */
        duration_increment: GlideDuration;
        /**
         * Fixed time-of-day interval, relative to midnight, for reservation start times.
         * @type {GlideDuration}
         * @memberof IReservationScheduler
         * @description This is the interval at which reservations must be scheduled. The minimum value is 1 minute, and values are rounded up to the nearest minute.
         */
        start_time_interval: GlideDuration;
        /**
         * Normalizes a duration value according to the {@link #duration_increment}, {@link #minimum_duration} and {@link #maximum_duration} properties.
         * @param {GlideDuration} value - The duration value to normalize.
         * @param {number} [round] - Rounding type: Greater than zero = round to next higher {@link #duration_increment} (default);
         * Less than 0 = round to next lower {@link #duration_increment};
         * 0 = round to nearest {@link #duration_increment}.
         * @return {number} The number of milliseconds by which the duration value was adjusted.
         * @memberof IReservationScheduler
         */
        normalizeDuration(value: GlideDuration, round?: number): number;
        /**
         * Creates a new normalized duration value from an existing duration value.
         * @param {GlideDuration} value - The source duration value.
         * @param {number} [round] - Greater than zero = round to next higher {@link #duration_increment} (default);
         * Less than 0 = round to next lower {@link #duration_increment};
         * 0 = round to nearest {@link #duration_increment}.
         * @return {GlideDuration} A new normalized duration value.
         * @memberof IReservationScheduler
         */
        getNormalizedDuration(value: GlideDuration, round?: number): GlideDuration;
        /**
         * Rounds a date/time value up to the next increment specified by the {@link #start_time_interval} property.
         * @param {GlideDateTime} value - The date/time value to normalize.
         * @return {number} The number of milliseconds by which the duration value was adjusted.
         * @memberof IReservationScheduler
         */
        normalizeStartDate(value: GlideDateTime): number;
        /**
         * Creates a new normalizated date/time value from an existing date and time.
         * @param {GlideDateTime} value - The source date/time value.
         * @return {GlideDateTime} A new date/time value that is rouned up to the next increment specified by the {@link #start_time_interval} property.
         * @memberof IReservationScheduler
         */
        getNormalizedStartDate(value: GlideDateTime): GlideDateTime;
        /**
         * Gets the timespan of the next availability from the current {@link GlideSchedule}.
         * @param {GlideDateTime} fromDateTime - The starting date/time (inclusive).
         * @param {GlideDateTime} toDateTime - The ending date/time (exclusive).
         * @param {GlideDuration} [minimumDuration] - The optional minimum duration.
         * @return {ITimeSpan | undefined}
         * @memberof IReservationScheduler
         */
        getNextAvailableTimeSpan(fromDateTime: GlideDateTime, toDateTime: GlideDateTime, minimumDuration?: GlideDuration): ITimeSpan | undefined;
        /**
         * Gets the available time slots within a given range of date/time values.
         * @param {GlideDateTime} fromDateTime - The starting date/time range.
         * @param {GlideDateTime} toDateTime - The ending date/time range.
         * @param {GlideDuration} [minimumDuration] - The optional minimum duration for the returned time slots.
         * @return {global.Stream<ITimeSpan>} The available time slots within the specified date/time range.
         * @memberof IReservationScheduler
         */
        getAvailabilitiesInRange(fromDateTime: GlideDateTime, toDateTime: GlideDateTime, minimumDuration?: GlideDuration): Iterator<ITimeSpan>;
        /**
         * Indicates whether the specified start date and duration is available for an reservation.
         * @param {GlideDateTime} startDateTime - The prospective reservation start date and time.
         * @param {GlideDuration} duration - The duration of the prospective reservation.
         * @return {boolean} True if the specified date/time and duration is available for reservation; otherwise, false.
         * @memberof IReservationScheduler
         */
        isAvailable(startDateTime: GlideDateTime, duration: GlideDuration): boolean;
        /**
         * Adds a reservation to the associated schedule.
         * @param {string} name - The name to assign to the reservation.
         * @param {GlideDateTime} startDateTime - The start date and time of the reservation.
         * @param {string} duration - The duration of the reservation.
         * @param {GlideDuration} [group_id] - The optional sys_id of the associated sys_user_group.
         * @param {GlideDuration} [user_id] - The optional sys_id of the associated user.
         * @return {(cmn_schedule_spanGlideRecord | undefined)} The {@link cmn_schedule_spanGlideRecord} representing the reservation
         * or undefined if the specified date/time and duration was not available.
         * @memberof IReservationScheduler
         */
        addReservation(name: string, startDateTime: GlideDateTime, duration: GlideDuration, group_id?: string, user_id?: string): cmn_schedule_spanGlideRecord | undefined;
        removeReservation(reservation: string | cmn_schedule_spanElement | cmn_schedule_spanGlideRecord): boolean;
    }
    interface IReservationSchedulerPrototype extends $$snClass.ICustomClassPrototype3<IReservationScheduler, IReservationSchedulerPrototype, "ReservationScheduler", reservation_typeGlideRecord | string, boolean, string>, IReservationScheduler {
        _scheduleId: string;
    }
    type ReservationScheduler = Readonly<IReservationScheduler>;
    interface ReservationSchedulerConstructor extends $$snClass.CustomClassConstructor3<IReservationScheduler, IReservationSchedulerPrototype, ReservationScheduler, reservation_typeGlideRecord | string, boolean, string> {
        new (type: reservation_typeGlideRecord | string, allowInactive?: boolean, timeZone?: string): ReservationScheduler;
        (type: reservation_typeGlideRecord | string, allowInactive?: boolean, timeZone?: string): ReservationScheduler;
        getTableName(): string;
    }
    const ReservationScheduler: ReservationSchedulerConstructor;
}
