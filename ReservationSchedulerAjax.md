# x_g_inte_site_17.ReservationSchedulerAjax API

Client-callable methods for the [ReservationScheduler API](ReservationScheduler.md).

- [x_g_inte_site_17.ReservationSchedulerAjax API](#x_g_inte_site_17reservationschedulerajax-api)
  - [Asynchronous Methods](#asynchronous-methods)
    - [getNextAvailableTimeSlot](#getnextavailabletimeslot)
    - [getAvailabilitiesInRange](#getavailabilitiesinrange)

- [Source Code](source/api/ReservationSchedulerAjax.ts)
- [Type Definition File](types/x_g_inte_site_17/api/ReservationSchedulerAjax.d.ts)

## Asynchronous Methods

### getNextAvailableTimeSlot

Gets the next available time slot.

Asyncrhonous Parameters:

- `sys_parm_reservation_type`: The sys_id of the reservation type;
- `sys_parm_allow_inactive`: Optional boolean indicating whether to allow inactive reservation types;
- `sys_parm_from`: The date and time to start from;
- `sys_parm_to`: The end date and time to search within;
- `sys_parm_duration`: The optional minimum reservation duration in minutes;
- `sys_parm_include`: The optional list of comma-separated result inclusions. Values for result inclusions are:
  - `"all"`: Includes all additional properties;
  - `"group"`: Includes assignment_group and approval_group properties;
  - `"assignment_group"`: The sys_id of the assignment group will be contained in the 'assignment_group' attribute of the 'scheduler_type' element;
  - `"approval_group"`: If there is an approval group, the sys_id will be contained in the 'approval_group' attribute of the 'scheduler_type' element;
  - `"durations"`: Includes duration_increment, minimum_duration, maximum_duration and start_time_interval properties;
  - `"duration_increment"`: The number of minutes for duration increments will be contained in the 'duration_increment' attribute of the 'scheduler_type' element;
  - `"minimum_duration"`: The minimum number of minutes for durations will be contained in the 'minimum_duration' attribute of the 'scheduler_type' element;
  - `"maximum_duration"`: The maximum number of minutes for durations will be contained in the 'maximum_duration' attribute of the 'scheduler_type' element;
  - `"start_time_interval"`: The number of minutes for start time intervals will be contained in the 'start_time_interval' attribute of the 'scheduler_type' element.

Response Element:

- `availability`: This element contains the availability response with the following attributes:
  - `success`: Contains the value `"true"` if there was an availability; otherwise, it will contain `"false"`.
  - `startDateTime`: Contains the start date and time of the next availability if there was an availability; otherwise this attribute will not be present.
  - `durationMinutes`: Contains the number of contiguous minutes that are open for reservation if there was an availability; otherwise this attribute will not be present.

### getAvailabilitiesInRange

Gets the reservation availabilities within a given date and time range.

Asyncrhonous Parameters:

- `sys_parm_reservation_type`: The sys_id of the reservation type;
- `sys_parm_allow_inactive`: Optional boolean indicating whether to allow inactive reservation types;
- `sys_parm_from`: The date and time to start from;
- `sys_parm_to`: The end date and time to search within;
- `sys_parm_duration`: The optional minimum reservation duration in minutes;
- `sys_parm_include`: The optional list of comma-separated result inclusions. Values for result inclusions are:
  - `"all"`: Includes all additional properties;
  - `"group"`: Includes assignment_group and approval_group properties;
  - `"approval_group"`: If there is an approval group, the sys_id will be contained in the 'approval_group' attribute of the 'scheduler_type' element;
  - `"assignment_group"`: The sys_id of the assignment group will be contained in the 'assignment_group' attribute of the 'scheduler_type' element;
  - `"durations"`: Includes duration_increment, minimum_duration, maximum_duration and start_time_interval properties;
  - `"duration_increment"`: The number of minutes for duration increments will be contained in the 'duration_increment' attribute of the 'scheduler_type' element;
  - `"minimum_duration"`: The minimum number of minutes for durations will be contained in the 'minimum_duration' attribute of the 'scheduler_type' element;
  - `"maximum_duration"`: The maximum number of minutes for durations will be contained in the 'maximum_duration' attribute of the 'scheduler_type' element;
  - `"start_time_interval"`: The number of minutes for start time intervals will be contained in the 'start_time_interval' attribute of the 'scheduler_type' element.

Response Element:

- `availabilities`: Contains the availabilities that were found. The `length` attribute contains the number of availabilities found.
  - `availability`: One or more nested attributes representing individual date/time ranges open for reservation, with the following attributes:
    - `startDateTime`: the start date and time
    - `durationMinutes`: the number of contiguous minutes that are open for reservation.
