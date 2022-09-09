"use strict";
var x_g_inte_site_17;
(function (x_g_inte_site_17) {
    x_g_inte_site_17.ReservationSchedulerAjax = (function () {
        var constructor = Class.create();
        /**
         * The name of the top-level response element from {@link getAvailabilitiesInRange} and {@link getNextAvailableTimeSlot} with attributes representing additional property values that were included in the response.
         * @constant
         * @type {string}
         */
        var XMLNAME_scheduler_type = "scheduler_type";
        /**
         * The name of the top-level response element from {@link getAvailabilitiesInRange} containing a list of {@link XMLNAME_availability} elements.
         * @constant
         * @type {string}
         */
        var XMLNAME_availabilities = "availabilities";
        /**
         * The name of the attribute on the {@link XMLNAME_availabilities} response element from {@link getAvailabilitiesInRange} indicating the number of {@link XMLNAME_availability} elements contained within.
         * @constant
         * @type {string}
         */
        var XMLNAME_length = "length";
        /**
         * The name of the attribute on the {@link XMLNAME_availability} response element from {@link getNextAvailableTimeSlot} containing a boolean value indicating whether an availability was found in the specified date/time range.
         * @constant
         * @type {string}
         */
        var XMLNAME_success = "success";
        /**
         * The name of a response element representing an availability date/time range.
         * This will either be a top-level response element from {@link getNextAvailableTimeSlot} or a child element of the {@link XMLNAME_availabilities} response element from {@link getAvailabilitiesInRange}.
         * @constant
         * @type {string}
         */
        var XMLNAME_availability = "availability";
        /**
         * The name of the attribute on an {@link XMLNAME_availability} element indicating the start date and time of the current availability range.
         * @constant
         * @type {string}
         */
        var XMLNAME_startDateTime = "startDateTime";
        /**
         * The name of the attribute on an {@link XMLNAME_availability} element indicating the duration of the current availability range.
         * @constant
         * @type {string}
         */
        var XMLNAME_durationMinutes = "durationMinutes";
        /**
         * Value of the {@link PARAM_NAME.include} Glide Ajax parameter indicating that all properties represented by {@link INCLUDE_NAME} are to be included in the response.
         * @constant
         * @type {string}
         */
        var INCLUDE_NAME_all = "all";
        /**
         * Element value in the {@link PARAM_NAME.include} Glide Ajax parameter indicating that properties represented by {@link INCLUDE_NAME.approval_group} and {@link INCLUDE_NAME.assignment_group}
         * are to be included in the response.
         * @constant
         * @type {string}
         */
        var INCLUDE_NAME_groups = "groups";
        /**
         * Element value in the {@link PARAM_NAME.include} Glide Ajax parameter indicating that {@link INCLUDE_NAME.minimum_duration}, {@link INCLUDE_NAME.maximum_duration},
         * {@link INCLUDE_NAME.duration_increment} and {@link INCLUDE_NAME.start_time_interval} are to be included in the response.
         * @constant
         * @type {string}
         */
        var INCLUDE_NAME_durations = "durations";
        /**
         * Individual element values of {@link PARAM_NAME.include} representing additional properties to include in GlideAjax responses.
         * Theses must be lower case, valid NCNames.
         * @readonly
         * @enum {string}
         */
        var INCLUDE_NAME;
        (function (INCLUDE_NAME) {
            /**
             * Includes the {@link GlideRecord#sys_id} of the {@link IReservationScheduler#approval_group} in the response.
             * The value for this response will be contained an attribute of the same name in the {@link XMLNAME_scheduler_type} element of the Glide Ajax response if the approval group was not nil.
             */
            INCLUDE_NAME["approval_group"] = "approval_group";
            /**
             * Includes the {@link GlideRecord#sys_id} of the {@link IReservationScheduler#assignment_group} in the response.
             * The value for this response will be contained an attribute of the same name in the {@link XMLNAME_scheduler_type} element of the Glide Ajax response.
             */
            INCLUDE_NAME["assignment_group"] = "assignment_group";
            /**
             * Includes the duration string value ({@link GlideDuration#getDurationValue()}) of {@link IReservationScheduler#duration_increment} in the response.
             * The value for this response will be contained an attribute of the same name in the {@link XMLNAME_scheduler_type} element of the Glide Ajax response.
             */
            INCLUDE_NAME["duration_increment"] = "duration_increment";
            /**
             * Includes the duration string value ({@link GlideDuration#getDurationValue()}) of {@link IReservationScheduler#minimum_duration} in the response.
             * The value for this response will be contained an attribute of the same name in the {@link XMLNAME_scheduler_type} element of the Glide Ajax response.
             */
            INCLUDE_NAME["minimum_duration"] = "minimum_duration";
            /**
             * Includes the duration string value ({@link GlideDuration#getDurationValue()}) of {@link IReservationScheduler#maximum_duration} in the response.
             *
             * The value for this response will be contained an attribute of the same name in the {@link XMLNAME_scheduler_type} element of the Glide Ajax response.
             */
            INCLUDE_NAME["maximum_duration"] = "maximum_duration";
            /**
             * Includes the duration string value ({@link GlideDuration#getDurationValue()}) of {@link IReservationScheduler#start_time_interval} in the response.
             * The value for this response will be contained an attribute of the same name in the {@link XMLNAME_scheduler_type} element of the Glide Ajax response.
             */
            INCLUDE_NAME["start_time_interval"] = "start_time_interval";
        })(INCLUDE_NAME || (INCLUDE_NAME = {}));
        /**
         * Parameter names for GlideAjax calls.
         * @readonly
         * @enum {string}
         */
        var PARAM_NAME;
        (function (PARAM_NAME) {
            /** Required parameter name for the SysID of a {@link reservation_typeGlideRecord}. */
            PARAM_NAME["type"] = "sys_parm_reservation_type";
            /** Optional parameter name for a boolean value indicating whether the referenced {@link reservation_typeGlideRecord} can be inactive. */
            PARAM_NAME["allow_inactive"] = "sys_parm_allow_inactive";
            /** Required parameter name for the starting date/time (inclusive). */
            PARAM_NAME["from"] = "sys_parm_from";
            /** Required parameter name for the ending date/time (exclusive). */
            PARAM_NAME["to"] = "sys_parm_to";
            /** Optional parameter name for the reservation duration. */
            PARAM_NAME["duration"] = "sys_parm_duration";
            /** Optional parameter name for a comma-separated list of additional properties to include in the response (see {@link INCLUDE_NAME}). */
            PARAM_NAME["include"] = "sys_parm_include";
        })(PARAM_NAME || (PARAM_NAME = {}));
        function addIncludeParams(scheduler) {
            var p = '' + this.getParameter(PARAM_NAME.include);
            if ((p = p.trim()).length == 0)
                return [];
            var include = p.split(',').map(function (s) { return s.trim().toLowerCase(); }).filter(function (s) { return s.length > 0; });
            if (include.length == 0)
                return include;
            var result = [];
            var arrayUtil = new global.ArrayUtil();
            var element;
            if (arrayUtil.contains(include, INCLUDE_NAME_all)) {
                element = this.newItem(XMLNAME_scheduler_type);
                result = [INCLUDE_NAME.assignment_group, INCLUDE_NAME.duration_increment, INCLUDE_NAME.minimum_duration, INCLUDE_NAME.maximum_duration, INCLUDE_NAME.start_time_interval];
                if (typeof scheduler.approval_group !== 'undefined') {
                    include.unshift(INCLUDE_NAME.approval_group);
                    element.setAttribute(INCLUDE_NAME.approval_group, scheduler.approval_group);
                }
                element.setAttribute(INCLUDE_NAME.assignment_group, scheduler.assignment_group);
                element.setAttribute(INCLUDE_NAME.duration_increment, '' + Math.floor(scheduler.duration_increment.getNumericValue() / 60000));
                element.setAttribute(INCLUDE_NAME.minimum_duration, '' + Math.floor(scheduler.minimum_duration.getNumericValue() / 60000));
                element.setAttribute(INCLUDE_NAME.maximum_duration, '' + Math.floor(scheduler.maximum_duration.getNumericValue() / 60000));
                element.setAttribute(INCLUDE_NAME.start_time_interval, '' + Math.floor(scheduler.start_time_interval.getNumericValue() / 60000));
                return result;
            }
            if (arrayUtil.contains(include, INCLUDE_NAME_groups)) {
                element = this.newItem(XMLNAME_scheduler_type);
                if (typeof scheduler.approval_group !== 'undefined') {
                    result.push(INCLUDE_NAME.approval_group);
                    element.setAttribute(INCLUDE_NAME.approval_group, scheduler.approval_group);
                }
                result.push(INCLUDE_NAME.assignment_group);
                element.setAttribute(INCLUDE_NAME.assignment_group, scheduler.assignment_group);
            }
            else {
                if (arrayUtil.contains(include, INCLUDE_NAME.approval_group) && typeof scheduler.approval_group !== 'undefined') {
                    if (typeof element === 'undefined')
                        element = this.newItem(XMLNAME_scheduler_type);
                    result.push(INCLUDE_NAME.approval_group);
                    element.setAttribute(INCLUDE_NAME.approval_group, scheduler.approval_group);
                }
                if (arrayUtil.contains(include, INCLUDE_NAME.assignment_group)) {
                    result.push(INCLUDE_NAME.assignment_group);
                    if (typeof element === 'undefined')
                        element = this.newItem(XMLNAME_scheduler_type);
                    element.setAttribute(INCLUDE_NAME.assignment_group, scheduler.assignment_group);
                }
            }
            if (arrayUtil.contains(include, INCLUDE_NAME_durations)) {
                element = this.newItem(XMLNAME_scheduler_type);
                result.push(INCLUDE_NAME.duration_increment);
                result.push(INCLUDE_NAME.minimum_duration);
                result.push(INCLUDE_NAME.maximum_duration);
                result.push(INCLUDE_NAME.start_time_interval);
                element.setAttribute(INCLUDE_NAME.duration_increment, '' + Math.floor(scheduler.duration_increment.getNumericValue() / 60000));
                element.setAttribute(INCLUDE_NAME.minimum_duration, '' + Math.floor(scheduler.minimum_duration.getNumericValue() / 60000));
                element.setAttribute(INCLUDE_NAME.maximum_duration, '' + Math.floor(scheduler.maximum_duration.getNumericValue() / 60000));
                element.setAttribute(INCLUDE_NAME.start_time_interval, '' + Math.floor(scheduler.start_time_interval.getNumericValue() / 60000));
                return result;
            }
            if (arrayUtil.contains(include, INCLUDE_NAME.duration_increment)) {
                if (typeof element === 'undefined')
                    element = this.newItem(XMLNAME_scheduler_type);
                result.push(INCLUDE_NAME.duration_increment);
                element.setAttribute(INCLUDE_NAME.duration_increment, '' + Math.floor(scheduler.duration_increment.getNumericValue() / 60000));
            }
            if (arrayUtil.contains(include, INCLUDE_NAME.minimum_duration)) {
                if (typeof element === 'undefined')
                    element = this.newItem(XMLNAME_scheduler_type);
                result.push(INCLUDE_NAME.minimum_duration);
                element.setAttribute(INCLUDE_NAME.minimum_duration, '' + Math.floor(scheduler.minimum_duration.getNumericValue() / 60000));
            }
            if (arrayUtil.contains(include, INCLUDE_NAME.maximum_duration)) {
                if (typeof element === 'undefined')
                    element = this.newItem(XMLNAME_scheduler_type);
                result.push(INCLUDE_NAME.maximum_duration);
                element.setAttribute(INCLUDE_NAME.maximum_duration, '' + Math.floor(scheduler.maximum_duration.getNumericValue() / 60000));
            }
            if (arrayUtil.contains(include, INCLUDE_NAME.start_time_interval)) {
                if (typeof element === 'undefined')
                    element = this.newItem(XMLNAME_scheduler_type);
                result.push(INCLUDE_NAME.start_time_interval);
                element.setAttribute(INCLUDE_NAME.start_time_interval, '' + Math.floor(scheduler.start_time_interval.getNumericValue() / 60000));
            }
            return result;
        }
        function getAvailabilitiesInRange(scheduler) {
            var fromDateTime = new GlideDateTime(this.getParameter(PARAM_NAME.from));
            var toDateTime = new GlideDateTime(this.getParameter(PARAM_NAME.to));
            var value = this.getParameter(PARAM_NAME.duration);
            var duration;
            if (!gs.nil(value))
                duration = new GlideDuration(parseInt('' + value) * 60000);
            var availabilities;
            try {
                availabilities = scheduler.getAvailabilitiesInRange(fromDateTime, toDateTime, duration);
            }
            catch (e) {
                this.setError(e);
                return [];
            }
            var availabilitiesElement = this.newItem(XMLNAME_availabilities);
            var count = 0;
            var yielded = availabilities.next();
            while (!yielded.done) {
                count++;
                var element = this.getDocument().createElement(XMLNAME_availability);
                availabilitiesElement.appendChild(element);
                element.setAttribute(XMLNAME_startDateTime, yielded.value.start.getDisplayValue());
                element.setAttribute(XMLNAME_durationMinutes, '' + Math.floor(yielded.value.duration.getNumericValue() / 60000));
            }
            availabilitiesElement.setAttribute(XMLNAME_length, '' + count);
            return addIncludeParams.call(this, scheduler);
        }
        function getNextAvailableTimeSlot(scheduler) {
            var fromDateTime = new GlideDateTime(this.getParameter(PARAM_NAME.from));
            var toDateTime = new GlideDateTime(this.getParameter(PARAM_NAME.to));
            var value = this.getParameter(PARAM_NAME.duration);
            var duration;
            if (!gs.nil(value))
                duration = new GlideDuration(parseInt(value) * 60000);
            var availability;
            try {
                availability = scheduler.getNextAvailableTimeSpan(fromDateTime, toDateTime, duration);
            }
            catch (e) {
                this.setError(e);
                return [];
            }
            var availabilitiesElement = this.newItem(XMLNAME_availability);
            if (gs.nil(availability)) {
                availabilitiesElement.setAttribute(XMLNAME_success, 'false');
            }
            else {
                availabilitiesElement.setAttribute(XMLNAME_success, 'false');
                availabilitiesElement.setAttribute(XMLNAME_startDateTime, availability.start.getDisplayValue());
                if (typeof availability.duration !== 'undefined')
                    availabilitiesElement.setAttribute(XMLNAME_durationMinutes, '' + Math.floor(availability.duration.getNumericValue() / 60000));
            }
            return addIncludeParams.call(this, scheduler);
        }
        /**
         * Gets the next available time slot.
         * @param {IAbstractAjaxProcessor} processor - The processor that will provide the asynchronous the results.
         * @param {ReservationScheduler} scheduler - The reservation scheduler object that will be used to calculate the results.
         * @return {string[]} The names of the additional properties that were included.
         * @description
         * The 'availability' element will contain an attribute named 'success' which will contain the value 'true' if an availability was returned; otherwise, it will contain 'false'.
         * If the 'success' attribute of the 'availability' element is 'true', then the 'startDateTime' will contain the start date and time of the next
         * availability.
         * The 'durationMinutes' attribute indicates the number of contiguous minutes that are open for reservation. This attrbute may be missing
         * if no 'sys_parm_to' parameter was provided all future times are open for reservation.
         *
         * Parameters are:
         * sys_parm_reservation_type = The sys_id of the reservation type;
         * sys_parm_allow_inactive = Optional boolean indicating whether to allow inactive reservation types;
         * sys_parm_from = The required date and time to start from;
         * sys_parm_to = The required end date and time to search within;
         * sys_parm_duration = The optional minimum reservation duration in minutes;
         * sys_parm_include = The optional list of comma-separated result inclusions.
         *
         * Values for result inclusions are:
         * all = Includes all additional properties;
         * group = Includes assignment_group and approval_group properties;
         * assignment_group = The sys_id of the assignment group will be contained in the 'assignment_group' attribute of the 'scheduler_type' element;
         * approval_group = If there is an approval group, the sys_id will be contained in the 'approval_group' attribute of the 'scheduler_type' element;
         * durations = Includes duration_increment, minimum_duration, maximum_duration and start_time_interval properties;
         * duration_increment = The number of minutes for duration increments will be contained in the 'duration_increment' attribute of the 'scheduler_type' element;
         * minimum_duration = The minimum number of minutes for durations will be contained in the 'minimum_duration' attribute of the 'scheduler_type' element;
         * maximum_duration = The maximum number of minutes for durations will be contained in the 'maximum_duration' attribute of the 'scheduler_type' element;
         * start_time_interval = The number of minutes for start time intervals will be contained in the 'start_time_interval' attribute of the 'scheduler_type' element.
         */
        constructor.getNextAvailableTimeSlot = function (processor, scheduler) {
            if (typeof processor === 'undefined')
                throw new Error("AJAX processor not provided.");
            if (typeof scheduler === 'undefined')
                throw new Error("Scheduler not provided.");
            return getNextAvailableTimeSlot.call(processor, scheduler);
        };
        /**
         * Gets the reservation availabilities within a given date and time range.
         * @param {IAbstractAjaxProcessor} processor - The processor that will provide the asynchronous the results.
         * @param {ReservationScheduler} scheduler - The reservation scheduler object that will be used to calculate the results.
         * @return {string[]} The names of the additional properties that were included.
         * @description
         * The 'availabilities' element will contain an attribute named 'length' which will indicate the number of availabilities found.
         * Child elements named 'availability' contain the individual date/time ranges open for reservation.
         * Each child element has a 'startDateTime' attribute that contains the start date and time, and a 'durationMinutes' attribute that
         * indicates the number of contiguous minutes that are open for reservation.
         *
         * Parameters are:
         * sys_parm_reservation_type =The sys_id of the reservation type;
         * sys_parm_allow_inactive = Optional boolean indicating whether to allow inactive reservation types;
         * sys_parm_from = The required date and time to start from;
         * sys_parm_to = The required end date and time to search within;
         * sys_parm_duration = The optional minimum reservation duration in minutes;
         * sys_parm_include = The optional list of comma-separated result inclusions.
         *
         * Values for result inclusions are:
         * all = Includes all additional properties;
         * group = Includes assignment_group and approval_group properties;
         * approval_group = If there is an approval group, the sys_id will be contained in the 'approval_group' attribute of the 'scheduler_type' element;
         * assignment_group = The sys_id of the assignment group will be contained in the 'assignment_group' attribute of the 'scheduler_type' element;
         * durations = Includes duration_increment, minimum_duration, maximum_duration and start_time_interval properties;
         * duration_increment = The number of minutes for duration increments will be contained in the 'duration_increment' attribute of the 'scheduler_type' element;
         * minimum_duration = The minimum number of minutes for durations will be contained in the 'minimum_duration' attribute of the 'scheduler_type' element;
         * maximum_duration = The maximum number of minutes for durations will be contained in the 'maximum_duration' attribute of the 'scheduler_type' element;
         * start_time_interval = The number of minutes for start time intervals will be contained in the 'start_time_interval' attribute of the 'scheduler_type' element.
         */
        constructor.getAvailabilitiesInRange = function (processor, scheduler) {
            if (typeof processor === 'undefined')
                throw new Error("AJAX processor not provided.");
            if (typeof scheduler === 'undefined')
                throw new Error("Scheduler not provided.");
            return getAvailabilitiesInRange.call(processor, scheduler);
        };
        constructor.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
            initialize: function (request, responseXML, gc) {
                global.AbstractAjaxProcessor.prototype.initialize.call(this, request, responseXML, gc);
                var value = this.getParameter(PARAM_NAME.allow_inactive);
                var allowInactive;
                if (!gs.nil(value)) {
                    var s = ('' + value).trim().toLowerCase();
                    switch (s) {
                        case 'true':
                            allowInactive = true;
                            break;
                        case 'false':
                            allowInactive = false;
                            break;
                        default:
                            var i = parseInt(s);
                            if (!isNaN(i))
                                allowInactive = i != 0;
                            break;
                    }
                }
                value = this.getParameter(PARAM_NAME.type);
                if (gs.nil(value))
                    this.setError('Appointment Type Sys ID (sys_parm_reservation_type) not provided.');
                else {
                    try {
                        if (typeof allowInactive !== 'undefined')
                            this._scheduler = new x_g_inte_site_17.ReservationScheduler('' + value, allowInactive);
                        else
                            this._scheduler = new x_g_inte_site_17.ReservationScheduler('' + value);
                    }
                    catch (e) {
                        this.setError(e);
                    }
                }
            },
            /**
             * Gets the next available time slot.
             * @description
             * The 'availability' element will contain an attribute named 'success' which will contain the value 'true' if an availability was returned; otherwise, it will contain 'false'.
             * If the 'success' attribute of the 'availability' element is 'true', then the 'startDateTime' will contain the start date and time of the next
             * availability.
             * The 'durationMinutes' attribute indicates the number of contiguous minutes that are open for reservation. This attrbute may be missing
             * if no 'sys_parm_to' parameter was provided all future times are open for reservation.
             *
             * Parameters are:
             * sys_parm_reservation_type = The sys_id of the reservation type;
             * sys_parm_allow_inactive = Optional boolean indicating whether to allow inactive reservation types;
             * sys_parm_from = The date and time to start from;
             * sys_parm_to = The optional end date and time to search within;
             * sys_parm_duration = The optional minimum reservation duration in minutes;
             * sys_parm_include = The optional list of comma-separated result inclusions.
             *
             * Values for result inclusions are:
             * all = Includes all additional properties;
             * group = Includes assignment_group and approval_group properties;
             * approval_group = If there is an approval group, the sys_id will be contained in the 'approval_group' attribute of the 'scheduler_type' element;
             * assignment_group = The sys_id of the assignment group will be contained in the 'assignment_group' attribute of the 'scheduler_type' element;
             * durations = Includes duration_increment, minimum_duration, maximum_duration and start_time_interval properties;
             * duration_increment = The number of minutes for duration increments will be contained in the 'duration_increment' attribute of the 'scheduler_type' element;
             * minimum_duration = The minimum number of minutes for durations will be contained in the 'minimum_duration' attribute of the 'scheduler_type' element;
             * maximum_duration = The maximum number of minutes for durations will be contained in the 'maximum_duration' attribute of the 'scheduler_type' element;
             * start_time_interval = The number of minutes for start time intervals will be contained in the 'start_time_interval' attribute of the 'scheduler_type' element.
             */
            getNextAvailableTimeSlot: function () {
                if (typeof this._scheduler !== 'undefined')
                    getNextAvailableTimeSlot.call(this, this._scheduler);
            },
            /**
             * Gets the reservation availabilities within a given date and time range.
             * @description
             * The 'availabilities' element will contain an attribute named 'length' which will indicate the number of availabilities found.
             * Child elements named 'availability' contain the individual date/time ranges open for reservation.
             * Each child element has a 'startDateTime' attribute that contains the start date and time, and a 'durationMinutes' attribute that
             * indicates the number of contiguous minutes that are open for reservation.
             *
             * Parameters are:
             * sys_parm_reservation_type =The sys_id of the reservation type;
             * sys_parm_allow_inactive = Optional boolean indicating whether to allow inactive reservation types;
             * sys_parm_from = The date and time to start from;
             * sys_parm_to = The end date and time to search within;
             * sys_parm_duration = The optional minimum reservation duration in minutes;
             * sys_parm_include = The optional list of comma-separated result inclusions.
             *
             * Values for result inclusions are:
             * all = Includes all additional properties;
             * group = Includes assignment_group and approval_group properties;
             * approval_group = If there is an approval group, the sys_id will be contained in the 'approval_group' attribute of the 'scheduler_type' element;
             * assignment_group = The sys_id of the assignment group will be contained in the 'assignment_group' attribute of the 'scheduler_type' element;
             * durations = Includes duration_increment, minimum_duration, maximum_duration and start_time_interval properties;
             * duration_increment = The number of minutes for duration increments will be contained in the 'duration_increment' attribute of the 'scheduler_type' element;
             * minimum_duration = The minimum number of minutes for durations will be contained in the 'minimum_duration' attribute of the 'scheduler_type' element;
             * maximum_duration = The maximum number of minutes for durations will be contained in the 'maximum_duration' attribute of the 'scheduler_type' element;
             * start_time_interval = The number of minutes for start time intervals will be contained in the 'start_time_interval' attribute of the 'scheduler_type' element.
             */
            getAvailabilitiesInRange: function () {
                if (typeof this._scheduler !== 'undefined')
                    getAvailabilitiesInRange.call(this, this._scheduler);
            },
            type: "ReservationSchedulerAjax"
        });
        return constructor;
    })();
})(x_g_inte_site_17 || (x_g_inte_site_17 = {}));
