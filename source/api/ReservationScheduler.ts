/// <reference path="../../types/sn_typings_server_scoped/dist/index.d.ts" />
/// <reference path="../../types/x_g_inte_site_17/table/index.d.ts" />

 namespace x_g_inte_site_17 {

    export interface ITimeSpan {
        start: GlideDateTime;
        duration: GlideDuration;
    }

    /**
     * Base interface for the ReservationScheduler API.
     * @export
     * @interface IReservationScheduler
     * @extends {$$snClass.ICustomClassBase<IReservationScheduler, "ReservationScheduler">}
     */
    export interface IReservationScheduler extends $$snClass.ICustomClassBase<IReservationScheduler, "ReservationScheduler"> {
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
    
    export interface IReservationSchedulerPrototype extends $$snClass.ICustomClassPrototype3<IReservationScheduler, IReservationSchedulerPrototype, "ReservationScheduler", reservation_typeGlideRecord | string, boolean, string>, IReservationScheduler {
        _scheduleId: string;
    }

    export declare type ReservationScheduler = Readonly<IReservationScheduler>;

    export interface ReservationSchedulerConstructor extends $$snClass.CustomClassConstructor3<IReservationScheduler, IReservationSchedulerPrototype, ReservationScheduler, reservation_typeGlideRecord | string, boolean, string> {
        new(type: reservation_typeGlideRecord | string, allowInactive?: boolean, timeZone?: string): ReservationScheduler;
        (type: reservation_typeGlideRecord | string, allowInactive?: boolean, timeZone?: string): ReservationScheduler;
        getTableName(): string;
    }
    
    export const ReservationScheduler: ReservationSchedulerConstructor = (function (): ReservationSchedulerConstructor {
        var constructor: ReservationSchedulerConstructor = Class.create();

        const TABLE_NAME = 'x_g_inte_site_17_reservation_type';
        const ENTRY_TABLE_NAME = 'cmn_schedule_span';
        const gdz = new GlideDuration(0);
        const oneMinute = new GlideDuration(60000);

        // #region AvailabilityIterator

        interface IAvailabilityIterator extends $$snClass.ICustomClassBase<IAvailabilityIterator, "AvailabilityIterator">, Iterator<ITimeSpan> { }
    
        interface IAvailabilityIteratorPrototype extends $$snClass.ICustomClassPrototype3<IAvailabilityIterator, IAvailabilityIteratorPrototype, "AvailabilityIterator", GlideSchedule, GlideDateTime, GlideDateTime>, IAvailabilityIterator {
            _schedule: GlideSchedule;
            _start: GlideDateTime;
            _end: GlideDateTime;
        }
    
        type AvailabilityIterator = Readonly<IAvailabilityIterator>;
    
        interface AvailabilityIteratorConstructor extends $$snClass.CustomClassConstructor3<IAvailabilityIterator, IAvailabilityIteratorPrototype, AvailabilityIterator, GlideSchedule, GlideDateTime, GlideDateTime> {
            new(schedule: GlideSchedule, start: GlideDateTime, end: GlideDateTime): AvailabilityIterator;
            (schedule: GlideSchedule, start: GlideDateTime, end: GlideDateTime): AvailabilityIterator;
        }
    
        const AvailabilityIterator: AvailabilityIteratorConstructor = (function (): AvailabilityIteratorConstructor {
            var iteratorConstructor: AvailabilityIteratorConstructor = Class.create();
    
            iteratorConstructor.prototype = <IAvailabilityIteratorPrototype>{
                initialize: function(schedule: GlideSchedule, start: GlideDateTime, end: GlideDateTime): void {
                    this._schedule = schedule
                    this._start = new GlideDateTime(start);
                    this._end = end;
                },
                
                next: function(): IteratorResult<ITimeSpan> {
                    if (!this._start.before(this._end)) return <IteratorResult<ITimeSpan>>{ done: true };
                    var duration = GlideDateTime.subtract(this._start, this._end);
                    var actual = this._schedule.duration(this._start, this._end);
                    if (!actual.after(gdz)) {
                        var ms = this._schedule.whenNext(this._start);
                        if(ms < 0) return <IteratorResult<ITimeSpan>>{ done: true };
                        this._start.add(ms);
                        while (!(actual = this._schedule.duration(this._start, this._end)).after(gdz)) {
                            this._start.addSeconds(1);
                            if ((actual = this._schedule.duration(this._start, this._end)).after(gdz)) break;
                            if((ms = this._schedule.whenNext(this._start)) < 0) return <IteratorResult<ITimeSpan>>{ done: true };
                            this._start.add(ms);
                        }
                    }
                    while (actual.before(duration)) {
                        duration = actual;
                        var endDateTime = new GlideDateTime(this._start);
                        endDateTime.add(duration);
                        actual = this._schedule.duration(this._start, endDateTime);
                    }
                    var result: ITimeSpan = {
                        start: new GlideDateTime(this._start),
                        duration: duration
                    };
                    this._start.add(duration);
                    return <IteratorResult<ITimeSpan>>{ value: result };
                },

                type: "AvailabilityIterator"
            };
    
            return iteratorConstructor;
        })();

        // #endregion
        
        // #region Private functions

        function isNil(obj: any | undefined): obj is undefined | null | "" {
            switch (typeof obj) {
                case 'undefined':
                    return true;
                case 'number':
                    return isNaN(obj) || !isFinite(obj);
                case 'string':
                    return obj.trim().length == 0;
                case 'object':
                    if (obj === null) return true;
                    if (global.JSUtil.instance_of(obj, 'java.lang.String'))
                        return obj.length == 0 || ('' + obj).trim().length == 0;
                    if (obj instanceof GlideElement)
                        return obj.nil();
                    return false;
                default:
                    return false;
            }
        }

        function getStartOfDay(value: GlideDateTime): GlideDateTime {
            return new GlideDateTime(gs.dateGenerate(value.getDisplayValue().substring(0, 10), '00:00:00'));
        }
        
        function isNormalizedGlideDateTime(value: GlideDateTime, interval: GlideDuration): boolean {
            var msOfDay = value.getNumericValue() - getStartOfDay(value).getNumericValue();
            if (msOfDay == 0) return true;
            var intMs = interval.getNumericValue();
            if (msOfDay == intMs) return true;
            return msOfDay > intMs && (msOfDay % intMs) == 0;
        }

        function normalizeGlideDateTime(value: GlideDateTime, interval: GlideDuration): number {
            var msOfDay = value.getNumericValue() - getStartOfDay(value).getNumericValue();
            if (msOfDay == 0) return 0;
            var intMs = interval.getNumericValue();
            if (msOfDay == intMs) return 0;
            var diff = intMs - msOfDay;
            if (diff < 0) {
                var mod = msOfDay % intMs;
                if (mod == 0) return 0;
                diff = intMs - mod;
            }
            value.add(diff);
            return diff;
        }

        function isNormalizedGlideDuration(value: GlideDuration, interval: GlideDuration): boolean {
            if (value.before(interval)) return false;
            return !value.after(interval) || (value.getNumericValue() % interval.getNumericValue()) == 0;
        }

        function normalizeGlideDuration(value: GlideDuration, interval: GlideDuration, minDuration?: GlideDuration, maxDuration?: GlideDuration, round?: number): number {
            var result: number;
            if (typeof minDuration !== 'undefined' && value.before(minDuration)) {
                result = minDuration.getNumericValue() - value.getNumericValue();
                value.setValue(minDuration.getDurationValue());
                return result;
            }
            if (typeof maxDuration !== 'undefined' && value.after(maxDuration)) {
                result = maxDuration.getNumericValue() - value.getNumericValue();
                value.setValue(maxDuration.getDurationValue());
                return result;
            }
            var n = interval.getNumericValue();
            if (value.before(interval)) {
                value.setValue(interval.getDurationValue());
                return n - value.getNumericValue();
            }
            var mod = value.getNumericValue() % n;
            if (mod == 0) return 0;
            if(typeof round !== 'undefined' && (round < 0 || (round == 0 && (n >> 1) > mod))) {
                value.subtract(new GlideDuration(mod));
                return 0 - mod;
            }
            mod = n - mod;
            value.add(mod);
            return mod;
        }

        function getNormalizedGlideDuration(value: GlideDuration, interval: GlideDuration, minDuration?: GlideDuration, maxDuration?: GlideDuration, round?: number): GlideDuration {
            var duration = new GlideDuration(value);
            normalizeGlideDuration(duration, interval, minDuration, maxDuration, round);
            return duration;
        }

        function getNormalizedGlideDateTime(value: GlideDateTime, interval: GlideDuration): GlideDateTime {
            var dateTime = new GlideDateTime(value);
            normalizeGlideDateTime(dateTime, interval);
            return dateTime;
        }
        
        function isTimeSpanAvailable(this: IReservationSchedulerPrototype, start: GlideDateTime, duration: GlideDuration): boolean {
            var endDateTime = new GlideDateTime(start);
            endDateTime.add(duration);
            return !this.schedule.duration(start, endDateTime).before(duration);
        }

        /**
         * @deprecated Use {@link AvailabilityIterator}
         */
        function moveToNextAvailability(this: IReservationSchedulerPrototype, currentDateTime: GlideDateTime, minimumDuration: GlideDuration, rangeEnd?: GlideDateTime): boolean {
            var endDateTime = new GlideDateTime(currentDateTime);
            endDateTime.add(minimumDuration);
            if (typeof rangeEnd !== 'undefined' && endDateTime.after(rangeEnd)) return false;
            var duration = this.schedule.duration(currentDateTime, endDateTime);
            while (duration.after(gdz)) {
                currentDateTime.add(duration);
                normalizeGlideDateTime(currentDateTime, this.start_time_interval);
                endDateTime = new GlideDateTime(currentDateTime);
                endDateTime.add(minimumDuration);
                if (typeof rangeEnd !== 'undefined' && endDateTime.after(rangeEnd)) return false;
                duration = this.schedule.duration(currentDateTime, endDateTime);
            }
            return true;
        }
        
        /**
         * @deprecated Use {@link AvailabilityIterator}
         */
        function getAvailabilities(this: IReservationSchedulerPrototype, fromDateTime: GlideDateTime, minimumDuration: GlideDuration, toDateTime: GlideDateTime): global.Stream<ITimeSpan> {
            if (!fromDateTime.before(toDateTime))
                return global.Stream.fromArray<ITimeSpan>([]);
            if (typeof minimumDuration === 'undefined' || minimumDuration.before(this.minimum_duration))
                minimumDuration = this.minimum_duration;
            else if ((minimumDuration = getNormalizedGlideDuration(minimumDuration, this.duration_increment, this.minimum_duration, this.maximum_duration)).after(this.maximum_duration))
                return global.Stream.fromArray<ITimeSpan>([]);
            var context = {
                schedule: this.schedule,
                currentStart: fromDateTime,
                currentEnd: new GlideDateTime(fromDateTime)
            };
            
            return new global.Stream<ITimeSpan>(function(): ITimeSpan | global.STREAM_END {
                if(!(context.currentStart = new GlideDateTime(context.currentEnd)).before(toDateTime)) return global.Stream.END;
                if (context.currentEnd.before(toDateTime))
                    context.currentEnd = new GlideDateTime(toDateTime);
                var needed = GlideDateTime.subtract(context.currentStart, context.currentEnd);
                if (needed.before(minimumDuration)) {
                    context.currentStart = new GlideDateTime(toDateTime);
                    return global.Stream.END;
                }
                var available = context.schedule.duration(context.currentStart, toDateTime);
                while (available.before(needed)) {
                    if (available.before(minimumDuration)) {
                        context.currentStart = new GlideDateTime(toDateTime);
                        return global.Stream.END;
                    }
                    needed = available;
                    context.currentEnd = new GlideDateTime(context.currentStart);
                    context.currentEnd.add(needed);
                    if ((available = context.schedule.duration(context.currentStart, context.currentEnd)) == gdz) {
                        context.currentEnd = new GlideDateTime(toDateTime);
                        var ms = context.schedule.whenNext(context.currentEnd);
                        if (ms < 0) {
                            context.currentStart = new GlideDateTime(toDateTime);
                            return global.Stream.END;
                        }
                        context.currentStart.add(new GlideDuration(ms));
                        if (context.currentStart.after(toDateTime) || (needed = GlideDateTime.subtract(context.currentStart, toDateTime)).before(minimumDuration)) {
                            context.currentStart = new GlideDateTime(toDateTime);
                            return global.Stream.END;
                        }
                        available = context.schedule.duration(context.currentStart, toDateTime);
                    }
                }
                return {
                    start: new GlideDateTime(context.currentStart),
                    duration: needed
                };
            });
        }

        // #endregion

        constructor.getTableName = function() { return TABLE_NAME; }
        
        constructor.prototype = <IReservationSchedulerPrototype>{
            initialize: function(this: IReservationSchedulerPrototype, type: reservation_typeGlideRecord | string, allowInactive?: boolean, timeZone?: string): void {
                if (isNil(type)) throw new Error("Reservation Type was not provided.");
                var glideRecord: reservation_typeGlideRecord;
                if (typeof type === 'string') {
                    glideRecord = <reservation_typeGlideRecord>new GlideRecord(TABLE_NAME);
                    glideRecord.addQuery('sys_id', type);
                    glideRecord.query();
                    if (!glideRecord.next()) throw new Error("Could not find a Reservation Type with Sys ID '" + type + "'.");
                    this.sys_id = type;
                } else {
                    glideRecord = type;
                    var tableName = glideRecord.getTableName();
                    if (tableName != TABLE_NAME) throw new Error("Glide record is not from the 'Reservation Types' table (getTableName()='" + tableName + "')")
                    if (glideRecord.isNewRecord()) throw new Error("Reservation Type has not been saved to the database.");
                    if (!glideRecord.isValid()) throw new Error("Glide Record is not valid.");
                    this.sys_id = '' + glideRecord.sys_id;
                }
                if (glideRecord.inactive + '' == 'true' && allowInactive !== true) throw new Error("Reservation Type \"" + glideRecord.short_description + "\" (" + glideRecord.sys_id + ") is inactive.");
                this._scheduleId = '' + glideRecord.schedule;
                this.timeZone = isNil(timeZone) ? gs.getSession().getTimeZoneName() : timeZone;
                this.schedule = new GlideSchedule(this._scheduleId, this.timeZone);
                this.short_description = '' + glideRecord.short_description;
                if (!isNil(glideRecord.approval_group)) this.approval_group = '' + glideRecord.approval_group;
                this.assignment_group = '' + glideRecord.assignment_group;
                var duration: GlideDuration = new GlideDuration();
                duration.setValue(glideRecord.duration_increment);
                this.duration_increment = getNormalizedGlideDuration(duration, oneMinute);
                duration.setValue(glideRecord.start_time_interval);
                this.start_time_interval = getNormalizedGlideDuration(duration, oneMinute);
                duration.setValue(glideRecord.minimum_duration);
                this.minimum_duration = getNormalizedGlideDuration(duration, this.duration_increment);
                duration.setValue(glideRecord.maximum_duration);
                if (duration.before(this.duration_increment))
                    this.maximum_duration = new GlideDuration(this.duration_increment.getDurationValue());
                else {
                    var mod = duration.getNumericValue() % this.duration_increment.getNumericValue();
                    if (mod > 0)
                        duration.add(0 - mod);
                    this.maximum_duration = duration;
                }
            },

            /**
             * Normalizes a duration value according to the {@link #duration_increment}, {@link #minimum_duration} and {@link #maximum_duration} properties.
             * @param {GlideDuration} value - The duration value to normalize.
             * @param {number} [round] - Rounding type: Greater than zero = round to next higher {@link #duration_increment} (default);
             * Less than 0 = round to next lower {@link #duration_increment};
             * 0 = round to nearest {@link #duration_increment}.
             * @return {number} The number of milliseconds by which the duration value was adjusted.
             */
            normalizeDuration: function(this: IReservationSchedulerPrototype, value: GlideDuration, round?: number): number {
                if (isNil(value)) throw new Error("Duration not provided");
                if (!value.isValid()) throw new Error("Invalid duration: " + value.getErrorMsg());
                return normalizeGlideDuration(value, this.duration_increment, this.minimum_duration, this.maximum_duration, round);
            },

            /**
             * Creates a new normalized duration value from an existing duration value.
             * @param {GlideDuration} value - The source duration value.
             * @param {number} [round] - Rounding type: Greater than zero = round to next higher {@link #duration_increment} (default);
             * Less than 0 = round to next lower {@link #duration_increment};
             * 0 = round to nearest {@link #duration_increment}.
             * @return {GlideDuration} A new normalized duration value.
             */
            getNormalizedDuration: function(this: IReservationSchedulerPrototype, value: GlideDuration, round?: number): GlideDuration {
                if (isNil(value)) throw new Error("Duration not provided");
                if (!value.isValid()) throw new Error("Invalid duration: " + value.getErrorMsg());
                return getNormalizedGlideDuration(value, this.duration_increment, this.minimum_duration, this.maximum_duration, round);
            },
        
            /**
             * Rounds a date/time value up to the next increment specified by {@link #start_time_interval} property.
             * @param {GlideDateTime} value - The date/time value to normalize.
             * @return {number} The number of milliseconds by which the duration value was adjusted.
             */
            normalizeStartDate: function(this: IReservationSchedulerPrototype, value: GlideDateTime): number {
                if (isNil(value)) throw new Error("Date/time not provided");
                if (!value.isValid()) throw new Error("Invalid date/time: " + value.getErrorMsg());
                return normalizeGlideDateTime(value, this.start_time_interval);
            },
        
            /**
             * Creates a new normalizated date/time value from an existing date and time.
             * @param {GlideDateTime} value - The source date/time value.
             * @return {GlideDateTime} A new date/time value that is rouned up to the next increment specified by {@link #start_time_interval} property.
             */
            getNormalizedStartDate: function(this: IReservationSchedulerPrototype, value: GlideDateTime): GlideDateTime {
                if (isNil(value)) throw new Error("Date/time not provided");
                if (!value.isValid()) throw new Error("Invalid date/time: " + value.getErrorMsg());
                return getNormalizedGlideDateTime(value, this.start_time_interval);
            },
        
            /**
             * Gets the next reservation availability.
             * @param {GlideDateTime} fromDateTime
             * @param {GlideDateTime} toDateTime
             * @param {GlideDuration} [minimumDuration]
             * @param {GlideDuration} [maximumDuration]
             * @return {(ITimeSlot | undefined)}
             */
            getNextAvailableTimeSpan: function(this: IReservationSchedulerPrototype, fromDateTime: GlideDateTime, toDateTime: GlideDateTime, minimumDuration?: GlideDuration): ITimeSpan | undefined {
                if (isNil(fromDateTime)) throw new Error("From date/time not provided");
                if (!fromDateTime.isValid()) throw new Error("Invalid start date/time: " + fromDateTime.getErrorMsg());
                if (!toDateTime.isValid()) throw new Error("Invalid to date/time: " + toDateTime.getErrorMsg());
                if (!(isNil(minimumDuration) || minimumDuration.isValid())) throw new Error("Invalid minimum duration: " + minimumDuration.getErrorMsg());
                var md: GlideDuration;
                if (typeof minimumDuration === 'undefined' || !minimumDuration.after(this.minimum_duration))
                    md = this.minimum_duration;
                else
                    md = getNormalizedGlideDuration(minimumDuration, this.duration_increment, this.minimum_duration, this.maximum_duration);

                return Site17Util.firstIterated<ITimeSpan>(new AvailabilityIterator(this.schedule, getNormalizedGlideDateTime(fromDateTime, this.start_time_interval),
                        toDateTime),
                    function(this: IReservationSchedulerPrototype, ts: ITimeSpan): boolean {
                        var ms = normalizeGlideDateTime(ts.start, this.start_time_interval);
                        if (ms > 0) {
                            var d = new GlideDuration(ms);
                            if (d.before(ts.duration)) return false;
                            ts.duration.subtract(d);
                        }
                        return !ts.duration.before(md);
                    }, this);
            },

            /**
             * Gets the available time slots within a given range of date/time values.
             * @param {GlideDateTime} fromDateTime - The starting date/time range.
             * @param {GlideDateTime} toDateTime - The ending date/time range.
             * @param {GlideDuration} [minimumDuration] - The optional minimum duration for the returned time slots.
             * @return {TimeSlot[]} The available time slots within the specified date/time range.
             */
            getAvailabilitiesInRange: function(this: IReservationSchedulerPrototype, fromDateTime: GlideDateTime, toDateTime: GlideDateTime, minimumDuration?: GlideDuration): Iterator<ITimeSpan> {
                if (isNil(fromDateTime)) throw new Error("From date/time not provided");
                if (isNil(toDateTime)) throw new Error("To date/time not provided");
                if (!fromDateTime.isValid()) throw new Error("Invalid start date/time: " + fromDateTime.getErrorMsg());
                if (!toDateTime.isValid()) throw new Error("Invalid to date/time: " + toDateTime.getErrorMsg());
                if (!(isNil(minimumDuration) || minimumDuration.isValid())) throw new Error("Invalid minimum duration: " + minimumDuration.getErrorMsg());
                var md: GlideDuration;
                if (typeof minimumDuration === 'undefined' || !minimumDuration.after(this.minimum_duration))
                    md = this.minimum_duration;
                else
                    md = getNormalizedGlideDuration(minimumDuration, this.duration_increment, this.minimum_duration, this.maximum_duration);
                return Site17Util.filterIterator<ITimeSpan>(new AvailabilityIterator(this.schedule, getNormalizedGlideDateTime(fromDateTime, this.start_time_interval),
                        toDateTime),
                    function(this: IReservationSchedulerPrototype, ts: ITimeSpan, ...args: [] | [undefined]): boolean {
                        var ms = normalizeGlideDateTime(ts.start, this.start_time_interval);
                        if (ms > 0) {
                            var d = new GlideDuration(ms);
                            if (d.before(ts.duration)) return false;
                            ts.duration.subtract(d);
                        }
                        return !ts.duration.before(md);
                    }, this);
            },

            /**
             * Indicates whether the specified start date and duration is available for an reservation.
             * @param {GlideDateTime} startDateTime - The prospective reservation start date and time.
             * @param {GlideDuration} duration - The duration of the prospective reservation.
             * @return {boolean} True if the specified date/time and duration is available for reservation; otherwise, false.
             */
            isAvailable: function(this: IReservationSchedulerPrototype, startDateTime: GlideDateTime, duration: GlideDuration): boolean {
                if (isNil(startDateTime)) throw new Error("Start date/time not provided");
                if (isNil(duration)) throw new Error("Duration not provided");
                if (!startDateTime.isValid()) throw new Error("Invalid start date/time: " + startDateTime.getErrorMsg());
                if (!duration.isValid()) throw new Error("Invalid duration: " + duration.getErrorMsg());
                if (duration.getNumericValue() <= 0) throw new Error("Duration must be greater than zero");
                return isTimeSpanAvailable.call(this, getNormalizedGlideDateTime(startDateTime, this.start_time_interval), duration);
            },

            /**
             * Adds a reservation to the associated schedule.
             * @param {string} name - The name to assign to the reservation.
             * @param {GlideDateTime} startDateTime - The start date and time of the reservation.
             * @param {GlideDuration} duration - The duration of the reservation.
             * @param {GlideDuration} [group_id] - The optional sys_id of the associated sys_user_group.
             * @param {GlideDuration} [user_id] - The optional sys_id of the associated sys_user.
             * @return {(cmn_schedule_spanGlideRecord | undefined)} The {@link cmn_schedule_spanGlideRecord} representing the reservation
             * or undefined if the specified date/time and duration was not available.
             */
            addReservation: function(this: IReservationSchedulerPrototype, name: string, startDateTime: GlideDateTime, duration: GlideDuration, group_id?: string, user_id?: string): cmn_schedule_spanGlideRecord | undefined {
                if (typeof name !== 'string' || (name = name.trim()).length == 0) throw new Error("Invalid name");
                if (isNil(startDateTime)) throw new Error("Start date/time not provided");
                if (isNil(duration)) throw new Error("Duration not provided");
                if (!startDateTime.isValid()) throw new Error("Invalid start date/time: " + startDateTime.getErrorMsg());
                if (!duration.isValid()) throw new Error("Invalid duration: " + duration.getErrorMsg());
                if (duration.getNumericValue() <= 0) throw new Error("Duration must be greater than zero");
                if (!isNormalizedGlideDateTime(startDateTime, this.start_time_interval)) throw new Error("Invalid start date/time");
                if (!isNormalizedGlideDuration(duration, this.duration_increment)) throw new Error("Invalid duration");
                if (duration.before(this.minimum_duration)) throw new Error("Appointment duration is shorter than the minimum allowed duration");
                if (duration.after(this.maximum_duration)) throw new Error("Appointment duration is longer than the maximum allowed duration");
                if (!isTimeSpanAvailable.call(this, startDateTime, duration)) return;
                var gr: GlideRecord = new GlideRecord(ENTRY_TABLE_NAME);
                gr.newRecord();
                gr.setValue('schedule', this._scheduleId);
                gr.setValue('all_day', false);
                gr.setValue('name', name);
                gr.setValue('show_as', 'busy');
                gr.setValue('start_date_time', new GlideScheduleDateTime(startDateTime).getValue());
                var dateTime = new GlideDateTime(startDateTime);
                dateTime.add(duration);
                gr.setValue('end_date_time', new GlideScheduleDateTime(dateTime).getValue());
                gr.setValue('type', 'exclude');
                if (!isNil(group_id)) gr.setValue('group', group_id);
                if (!isNil(user_id)) gr.setValue('user', user_id);
                if (!isNil(gr.insert())) throw new Error("Failed to add schedule entry");
                return <cmn_schedule_spanGlideRecord>gr;
            },

            removeReservation: function(this: IReservationSchedulerPrototype, reservation: string | cmn_schedule_spanElement | cmn_schedule_spanGlideRecord): boolean {
                if (isNil(reservation)) return false;
                var gr: cmn_schedule_spanGlideRecord;
                if (typeof reservation === 'string') {
                    gr = <cmn_schedule_spanGlideRecord>new GlideRecord(ENTRY_TABLE_NAME);
                    gr.addQuery('sys_id', reservation);
                    gr.query();
                    if (!gr.next()) return false;
                } else {
                    if (reservation instanceof GlideElement) {
                        if (reservation.nil() || !(<GlideElementReference>reservation).getRefRecord) return false;
                        gr = <cmn_schedule_spanGlideRecord>(<GlideElementReference>reservation).getRefRecord();
                        if (gs.nil(gr)) return false;
                    } else {
                        if (!reservation.getTableName) return false;
                        gr = <cmn_schedule_spanGlideRecord>reservation;
                    }
                    if (gr.getTableName() != ENTRY_TABLE_NAME) return false;
                }
                return gr.getValue('schedule') == this._scheduleId && gr.deleteRecord();
            },

            type: "ReservationScheduler"
        };

        return constructor;
    })();
}