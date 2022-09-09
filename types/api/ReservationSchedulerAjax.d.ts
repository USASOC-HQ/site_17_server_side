declare namespace x_g_inte_site_17 {
    interface IReservationSchedulerAjax extends $$snClass.ICustomClassBase<IReservationSchedulerAjax, "ReservationSchedulerAjax"> {
        /**
         * Gets the next available time slot.
         * @memberof IReservationSchedulerAjaxBase
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
         * assignment_group = The sys_id of the assignment group will be contained in the 'assignment_group' attribute of the 'scheduler_type' element;
         * approval_group = If there is an approval group, the sys_id will be contained in the 'approval_group' attribute of the 'scheduler_type' element;
         * durations = Includes duration_increment, minimum_duration, maximum_duration and start_time_interval properties;
         * duration_increment = The number of minutes for duration increments will be contained in the 'duration_increment' attribute of the 'scheduler_type' element;
         * minimum_duration = The minimum number of minutes for durations will be contained in the 'minimum_duration' attribute of the 'scheduler_type' element;
         * maximum_duration = The maximum number of minutes for durations will be contained in the 'maximum_duration' attribute of the 'scheduler_type' element;
         * start_time_interval = The number of minutes for start time intervals will be contained in the 'start_time_interval' attribute of the 'scheduler_type' element.
         */
        getNextAvailableTimeSlot(): void;
        /**
         * Gets the reservation availabilities within a given date and time range.
         * @memberof IReservationSchedulerAjaxBase
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
        getAvailabilitiesInRange(): void;
    }
    interface IReservationSchedulerAjaxPrototype extends $$snClass.ICustomAjaxClassPrototype<IReservationSchedulerAjax, IReservationSchedulerAjaxPrototype, "ReservationSchedulerAjax">, IReservationSchedulerAjax {
        _scheduler?: ReservationScheduler;
    }
    type ReservationSchedulerAjax = Readonly<IReservationSchedulerAjax>;
    interface ReservationSchedulerAjaxConstructor extends $$snClass.CustomAjaxClassConstructor<IReservationSchedulerAjax, IReservationSchedulerAjaxPrototype, ReservationSchedulerAjax> {
        new (request: GlideServletRequest, responseXML: XMLDocument2, gc: GlideController): ReservationSchedulerAjax;
        (request: GlideServletRequest, responseXML: XMLDocument2, gc: GlideController): ReservationSchedulerAjax;
        /**
         * Gets the next available time slot.
         * @param {IAbstractAjaxProcessor} processor - The processor that will provide the asynchronous the results.
         * @param {ReservationScheduler} scheduler - The reservation scheduler object that will be used to calculate the results.
         * @return {string[]} The names of the additional properties that were included.
         * @memberof ReservationSchedulerAjaxConstructor
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
         * assignment_group = The sys_id of the assignment group will be contained in the 'assignment_group' attribute of the 'scheduler_type' element;
         * approval_group = If there is an approval group, the sys_id will be contained in the 'approval_group' attribute of the 'scheduler_type' element;
         * durations = Includes duration_increment, minimum_duration, maximum_duration and start_time_interval properties;
         * duration_increment = The number of minutes for duration increments will be contained in the 'duration_increment' attribute of the 'scheduler_type' element;
         * minimum_duration = The minimum number of minutes for durations will be contained in the 'minimum_duration' attribute of the 'scheduler_type' element;
         * maximum_duration = The maximum number of minutes for durations will be contained in the 'maximum_duration' attribute of the 'scheduler_type' element;
         * start_time_interval = The number of minutes for start time intervals will be contained in the 'start_time_interval' attribute of the 'scheduler_type' element.
         */
        getNextAvailableTimeSlot(processor: IAbstractAjaxProcessor, scheduler: ReservationScheduler): string[];
        /**
         * Gets the reservation availabilities within a given date and time range.
         * @param {IAbstractAjaxProcessor} processor - The processor that will provide the asynchronous the results.
         * @param {ReservationScheduler} scheduler - The reservation scheduler object that will be used to calculate the results.
         * @return {string[]} The names of the additional properties that were included.
         * @memberof ReservationSchedulerAjaxConstructor
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
        getAvailabilitiesInRange(processor: IAbstractAjaxProcessor, scheduler: ReservationScheduler): string[];
    }
    const ReservationSchedulerAjax: ReservationSchedulerAjaxConstructor;
}
