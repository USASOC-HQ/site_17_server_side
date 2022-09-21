# x_g_inte_site_17.ReservationScheduler API

API for making schedule reservations.

- [x_g_inte_site_17.ReservationScheduler API](#x_g_inte_site_17reservationscheduler-api)
  - [Constructor](#constructor)
  - [Class Properties](#class-properties)
  - [Methods](#methods)
    - [normalizeDuration](#normalizeduration)
    - [getNormalizedDuration](#getnormalizedduration)
    - [normalizeStartDate](#normalizestartdate)
    - [getNormalizedStartDate](#getnormalizedstartdate)
    - [getNextAvailableTimeSpan](#getnextavailabletimespan)
    - [getAvailabilitiesInRange](#getavailabilitiesinrange)
    - [isAvailable](#isavailable)
    - [addReservation](#addreservation)
    - [removeReservation](#removereservation)
  - [ITimeSpan Interface](#itimespan-interface)
    - [Interface Properties](#interface-properties)

- [Source Code](source/api/ReservationScheduler.ts)
- [Type Definition File](types/x_g_inte_site_17/api/ReservationScheduler.d.ts)

## Constructor

Creates a new {@link ReservationScheduler} object.

```TypeScript
new ReservationScheduler(type: reservation_typeGlideRecord | string, allowInactive?: boolean, timeZone?: string): ReservationScheduler;
```

Arguments:

- type: `{(reservation_typeGlideRecord | string)}` - The reservation type record.
- allowInactive (optional): `{boolean}` - Optionally indicates whether inactive reservation types are allowed. The default is false.
- timeZone (optional): `{string}` - An optional time zone for the inner scheduler.

## Class Properties

- short_description: `{string}` - The short description.
- schedule: `{GlideSchedule}` - The current inner schedul object.
- timeZone: `{string}` - The current user's time zone.
- approval_group: `{string | undefined}` - The Sys ID of Approval group or undefined to automatically approve reservations or `undefined` if there is no approval group. This Refers to a Group (`sys_user_group`).
- assignment_group: `{string}` - The Sys ID of Default Assignment group. This Refers to a Group (`sys_user_group`).
- minimum_duration: `{GlideDuration}` - The Minimum Reservation Duration. The minimum value is 1 minute, and values are rounded up to the nearest minute.
- maximum_duration: `{GlideDuration}` - The maximum reservation duration. This cannot be less than the Minimum Duration, and values are rounded up to the nearest minute.
- duration_increment: `{GlideDuration}` - The length by which reservation durations can be incremented. The minimum value is 1 minute, and values are rounded up to the nearest minute.
- start_time_interval: `{GlideDuration}` - The fixed time-of-day interval, relative to midnight, for reservation start times. This is the interval at which reservations must be scheduled. The minimum value is 1 minute, and values are rounded up to the nearest minute.

## Methods

### normalizeDuration

Normalizes a duration value according to the `duration_increment`, `minimum_duration` and `maximum_duration` properties.

```TypeScript
normalizeDuration(value: GlideDuration, round?: number): number;
```

Arguments:

- value: `{GlideDuration}` - The duration value to normalize.
- round (optional): `{number}` - Rounding type: Greater than zero = round to next higher `duration_increment` (default);
  Less than 0 = round to next lower `duration_increment`;
  0 = round to nearest `duration_increment`.

Returns the number of milliseconds by which the duration value was adjusted.

### getNormalizedDuration

Creates a new normalized duration value from an existing duration value.

```TypeScript
getNormalizedDuration(value: GlideDuration, round?: number): GlideDuration;
```

Arguments:

- value: `{GlideDuration}` - The source duration value.
- round (optional): `{number}` - Greater than zero = round to next higher `duration_increment` (default);
  Less than 0 = round to next lower `duration_increment`;
  0 = round to nearest `duration_increment`.

Returns a new normalized duration value.

### normalizeStartDate

Rounds a date/time value up to the next increment specified by the `start_time_interval` property.

```TypeScript
normalizeStartDate(value: GlideDateTime): number;
```

Argument:

- value: `{GlideDateTime}` - The date/time value to normalize.

Returns the number of milliseconds by which the duration value was adjusted.

### getNormalizedStartDate

Creates a new normalizated date/time value from an existing date and time.

```TypeScript
getNormalizedStartDate(value: GlideDateTime): GlideDateTime;
```

Argument:

- value: `{GlideDateTime}` - The source date/time value.

Returns a new date/time value that is rouned up to the next increment specified by the `start_time_interval` property.

### getNextAvailableTimeSpan

Gets the timespan of the next availability from the current {@link GlideSchedule}.

```TypeScript
getNextAvailableTimeSpan(fromDateTime: GlideDateTime, toDateTime: GlideDateTime, minimumDuration?: GlideDuration): ITimeSpan | undefined;
```

Arguments:

- fromDateTime: `{GlideDateTime}` - The starting date/time (inclusive).
- toDateTime: `{GlideDateTime}` - The ending date/time (exclusive).
- minimumDuration (optional): `{GlideDuration}` - The optional minimum duration.

Returns the next available [time span](#itimespan-interface) or `undefined` if there are not availabilities in the given time span.

### getAvailabilitiesInRange

Gets the available time slots within a given range of date/time values.

```TypeScript
getAvailabilitiesInRange(fromDateTime: GlideDateTime, toDateTime: GlideDateTime, minimumDuration?: GlideDuration): Iterator<ITimeSpan>;
```

Arguments:

- fromDateTime: `{GlideDateTime}` - The starting date/time range.
- toDateTime: `{GlideDateTime}` - The ending date/time range.
- minimumDuration (optional): `{GlideDuration}` - The optional minimum duration for the returned time slots.

Returns the available [time spans](#itimespan-interface) within the specified date/time range.

### isAvailable

Indicates whether the specified start date and duration is available for an reservation.

```TypeScript
isAvailable(startDateTime: GlideDateTime, duration: GlideDuration): boolean;
```

Arguments:

- startDateTime: `{GlideDateTime}` - The prospective reservation start date and time.
- duration: `{GlideDuration}` - The duration of the prospective reservation.

Returns `true` if the specified date/time and duration is available for reservation; otherwise, `false`.

### addReservation

Adds a reservation to the associated schedule.

```TypeScript
addReservation(name: string, startDateTime: GlideDateTime, duration: GlideDuration, group_id?: string, user_id?: string): cmn_schedule_spanGlideRecord | undefined;
```

Arguments:

- name: `{string}` - The name to assign to the reservation.
- startDateTime: `{GlideDateTime}` - The start date and time of the reservation.
- duration: `{string}` - The duration of the reservation.
- group_id (optional): `{GlideDuration}` - The optional sys_id of the associated sys_user_group.
- user_id (optional): `{GlideDuration}` - The optional sys_id of the associated user.

Returns he {@link cmn_schedule_spanGlideRecord} representing the reservation or `undefined` if the specified date/time and duration was not available.

### removeReservation

Removes a reservation (schedule entry) from the associated schedule

```TypeScript
removeReservation(reservation: string | cmn_schedule_spanElement | cmn_schedule_spanGlideRecord): boolean;
```

Argument:

- reservation: `{(string | cmn_schedule_spanElement | cmn_schedule_spanGlideRecord)}` - The Sys ID or record representing the schedule entry.

Returns `true` if the schedule entry was removed; otherwise, `false`.

## ITimeSpan Interface

Represents an availability time span.

### Interface Properties

- start: `{GlideDateTime}` - The start date and time.
- duration: `{GlideDuration}`  = The duration of the time span.
