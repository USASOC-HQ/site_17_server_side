"use strict";
var ensure_schedule_entries;
(function (ensure_schedule_entries) {
    // This defines the expected schedule relationships and entries
    var schedules = [{
            sys_id: "86045f4e1b67c9101497a820f54bcb59",
            is_holiday: false,
            entries: [{
                    name: "0600 - 1800 Weekdays",
                    start_date_time: "20180222T060000",
                    end_date_time: "20180222T180000",
                    all_day: false,
                    repeat_type: "weekdays",
                    show_as: "busy"
                }],
            child_schedules: [{ /* Site 17 Facility Holidays */ sys_id: 'c7475f021ba7c9101497a820f54bcb04', type: 'include' }]
        }, {
            sys_id: "96f879351b27c910ec0320efe54bcb47",
            is_holiday: false,
            entries: [{
                    name: "0900-1400 Weekdays",
                    start_date_time: "20220214T090000",
                    end_date_time: "20220214T140000",
                    all_day: false,
                    repeat_type: "weekdays",
                    show_as: "busy"
                }],
            child_schedules: [{ /* Site 17 Facility Holidays */ sys_id: 'c7475f021ba7c9101497a820f54bcb04', type: 'include' }]
        }, {
            sys_id: "c7475f021ba7c9101497a820f54bcb04",
            is_holiday: true,
            entries: [{
                    name: "New Year's Day",
                    start_date_time: "20120101T000000",
                    end_date_time: "20120101T235959",
                    all_day: true,
                    repeat_type: "yearly",
                    yearly_type: "doy",
                    type: "exclude",
                    show_as: "free"
                }, {
                    name: "Martin Luther King, Jr. Day",
                    start_date_time: "20120116T000000",
                    end_date_time: "20120116T235959",
                    all_day: true,
                    repeat_type: "yearly",
                    yearly_type: "float",
                    float_day: "2",
                    float_week: "3",
                    month: "1",
                    type: "exclude",
                    show_as: "free"
                }, {
                    name: "Memorial Day",
                    start_date_time: "20120528T000000",
                    end_date_time: "20120528T235959",
                    all_day: true,
                    repeat_type: "yearly",
                    yearly_type: "float",
                    float_day: "2",
                    float_week: "last",
                    month: "5",
                    type: "exclude",
                    show_as: "free"
                }, {
                    name: "Juneteenth",
                    start_date_time: "20220619T000000",
                    end_date_time: "20220619T235959",
                    all_day: true,
                    repeat_type: "yearly",
                    yearly_type: "doy",
                    type: "exclude",
                    show_as: "free"
                }, {
                    name: "Independence Day",
                    start_date_time: "20120704T000000",
                    end_date_time: "20120704T235959",
                    all_day: true,
                    repeat_type: "yearly",
                    yearly_type: "doy",
                    type: "exclude",
                    show_as: "free"
                }, {
                    name: "Labor Day",
                    start_date_time: "20120901T000000",
                    end_date_time: "20120901T235959",
                    all_day: true,
                    repeat_type: "yearly",
                    yearly_type: "float",
                    float_day: "2",
                    float_week: "1",
                    month: "9",
                    type: "exclude",
                    show_as: "free"
                }, {
                    name: "Veterans Day",
                    start_date_time: "20121111T000000",
                    end_date_time: "20121111T235959",
                    all_day: true,
                    repeat_type: "yearly",
                    yearly_type: "doy",
                    type: "exclude",
                    show_as: "free"
                }, {
                    name: "Thanksgiving Day",
                    start_date_time: "20121122T000000",
                    end_date_time: "20121122T235959",
                    all_day: true,
                    repeat_type: "yearly",
                    yearly_type: "float",
                    float_day: "5",
                    float_week: "4",
                    month: "11",
                    type: "exclude",
                    show_as: "free"
                }, {
                    name: "Black Friday",
                    start_date_time: "20221125T000000",
                    end_date_time: "20221125T235959",
                    all_day: true,
                    repeat_type: "yearly",
                    yearly_type: "float",
                    float_day: "6",
                    float_week: "4",
                    month: "11",
                    type: "exclude",
                    show_as: "free"
                }, {
                    name: "Christmas Day",
                    start_date_time: "20121225T000000",
                    end_date_time: "20121225T235959",
                    all_day: true,
                    repeat_type: "yearly",
                    yearly_type: "doy",
                    type: "exclude",
                    show_as: "free"
                }, {
                    name: "New Year's Eve",
                    start_date_time: "20121231T000000",
                    end_date_time: "20121231T235959",
                    all_day: true,
                    repeat_type: "yearly",
                    yearly_type: "doy",
                    type: "exclude",
                    show_as: "free"
                }],
            child_schedules: []
        }, {
            sys_id: "cfd2d74e1b67c9101497a820f54bcb2a",
            is_holiday: false,
            entries: [{
                    name: "0800 -1200 Weekdays",
                    start_date_time: "20080709T080000",
                    end_date_time: "20080709T120000",
                    all_day: false,
                    repeat_type: "weekdays",
                    notes: 'Represents before-lunch hours. Actual hours may vary for each person.',
                    show_as: "busy"
                }, {
                    name: "1300-1700 Weekdays",
                    start_date_time: "20220214T130000",
                    end_date_time: "20220214T170000",
                    all_day: false,
                    repeat_type: "weekdays",
                    notes: 'Represents after-lunch hours. Actual hours may vary for each person.',
                    show_as: "busy"
                }],
            child_schedules: [{ /* Site 17 Facility Holidays */ sys_id: 'c7475f021ba7c9101497a820f54bcb04', type: 'include' }]
        }, {
            sys_id: "c3849f8e1b67c9101497a820f54bcb04",
            is_holiday: false,
            entries: [{
                    name: "0600-1800 Weekdays",
                    start_date_time: "20220214T060000",
                    end_date_time: "20220214T180000",
                    all_day: false,
                    repeat_type: "weekdays",
                    show_as: "busy"
                }],
            child_schedules: [
                { /* Site 17 Facility Holidays */ sys_id: 'c7475f021ba7c9101497a820f54bcb04', type: 'include' },
                { /* Site 17 UM/CIV Holidays */ sys_id: '46981f421ba7c9101497a820f54bcbff', type: 'include' }
            ]
        }, {
            sys_id: "79a01f0a1b67c9101497a820f54bcbc9",
            is_holiday: false,
            entries: [{
                    name: "0900-1400 Weekdays",
                    start_date_time: "20220214T090000",
                    end_date_time: "20220214T140000",
                    all_day: false,
                    repeat_type: "weekdays",
                    show_as: "busy"
                }],
            child_schedules: [
                { /* Site 17 Facility Holidays */ sys_id: 'c7475f021ba7c9101497a820f54bcb04', type: 'include' },
                { /* Site 17 UM/CIV Holidays */ sys_id: '46981f421ba7c9101497a820f54bcbff', type: 'include' }
            ]
        }, {
            sys_id: "46981f421ba7c9101497a820f54bcbff",
            is_holiday: true,
            entries: [{
                    name: "Presidents' Day",
                    start_date_time: "20120220T000000",
                    end_date_time: "20120220T235959",
                    all_day: true,
                    repeat_type: "yearly",
                    yearly_type: "float",
                    float_day: "2",
                    float_week: "3",
                    month: "2",
                    type: "exclude",
                    show_as: "free"
                }, {
                    name: "Columbus Day",
                    start_date_time: "20121009T000000",
                    end_date_time: "20121009T235959",
                    all_day: true,
                    repeat_type: "yearly",
                    yearly_type: "float",
                    float_day: "2",
                    float_week: "2",
                    month: "10",
                    type: "exclude",
                    show_as: "free"
                }, {
                    name: "Christmas Eve",
                    start_date_time: "20121224T000000",
                    end_date_time: "20121224T235959",
                    all_day: true,
                    repeat_type: "yearly",
                    yearly_type: "doy",
                    type: "exclude",
                    show_as: "free"
                }],
            child_schedules: [{ /* Site 17 Facility Holidays */ sys_id: 'c7475f021ba7c9101497a820f54bcb04', type: 'include' }]
        }, {
            sys_id: "5d23974e1b67c9101497a820f54bcbeb",
            is_holiday: false,
            entries: [{
                    name: "0800 -1200 Weekdays",
                    start_date_time: "20220214T080000",
                    end_date_time: "20220214T090000",
                    all_day: false,
                    repeat_type: "weekdays",
                    notes: 'Represents before-lunch hours. Actual hours may vary for each person.',
                    show_as: "busy"
                }, {
                    name: "1300-1700 Weekdays",
                    start_date_time: "20220214T130000",
                    end_date_time: "20220214T170000",
                    all_day: false,
                    repeat_type: "weekdays",
                    notes: 'Represents after-lunch hours. Actual hours may vary for each person.',
                    show_as: "busy"
                }],
            child_schedules: [
                { /* Site 17 Facility Holidays */ sys_id: 'c7475f021ba7c9101497a820f54bcb04', type: 'include' },
                { /* Site 17 UM/CIV Holidays */ sys_id: '46981f421ba7c9101497a820f54bcbff', type: 'include' }
            ]
        }];
    for (var s = 0; s < schedules.length; s++) {
        // Make sure the schedule exists
        var cmn_schedule = schedules[s];
        var gr = new GlideRecord('cmn_schedule');
        gr.addQuery('sys_id', cmn_schedule.sys_id);
        gr.query();
        if (gr.getRowCount() < 1) {
            gs.error("Failed to find cmn_schedule[sys_id='" + cmn_schedule.sys_id + "']");
            continue;
        }
        // Get number of existing schedule entries
        gr = new GlideRecord('cmn_schedule_span');
        gr.addQuery('schedule', cmn_schedule.sys_id);
        gr.query();
        var rowCount = gr.getRowCount();
        if (cmn_schedule.is_holiday) {
            // Only add holidays if there aren't already any entries defined.
            if (rowCount > 0 || cmn_schedule.entries.length == 0)
                continue;
            gs.info("Adding " + cmn_schedule.entries.length + " entries for cmn_schedule_span[schedule='" + cmn_schedule.sys_id + "']");
            for (var i = 0; i < cmn_schedule.entries.length; i++) {
                var entry = cmn_schedule.entries[i];
                gr = new GlideRecord('cmn_schedule_span');
                gr.newRecord();
                gr.setValue('name', entry.name);
                gr.setValue('start_date_time', entry.start_date_time);
                gr.setValue('end_date_time', entry.end_date_time);
                gr.setValue('all_day', entry.all_day);
                if (!gs.nil(entry.type))
                    gr.setValue('type', entry.type);
                gr.setValue('repeat_type', entry.repeat_type);
                gr.setValue('show_as', entry.show_as);
                if (!gs.nil(entry.yearly_type))
                    gr.setValue('yearly_type', entry.yearly_type);
                if (!gs.nil(entry.float_day))
                    gr.setValue('float_day', entry.float_day);
                if (!gs.nil(entry.float_week))
                    gr.setValue('float_week', entry.float_week);
                if (!gs.nil(entry.month))
                    gr.setValue('month', entry.month);
                if (!gs.nil(entry.notes))
                    gr.setValue('notes', entry.notes);
                gr.setValue('schedule', cmn_schedule.sys_id);
                gr.insert();
            }
        }
        else {
            // If the number of schedule entries matches the expected count, do nothing
            if (rowCount == cmn_schedule.entries.length) {
                gs.info("cmn_schedule_span[schedule='" + cmn_schedule.sys_id + "'] - Expected row count passed (" + cmn_schedule.entries.length + ")");
                continue;
            }
            if (rowCount > 0) {
                gs.warn("Deleting exising schedule entries due to expected count mismatch: cmn_schedule_span[schedule='" + cmn_schedule.sys_id + "'] - Expected row count: " + cmn_schedule.entries.length + "; Actual: " + rowCount);
                gr.deleteMultiple();
            }
            else
                gs.info("Adding " + cmn_schedule.entries.length + " entries for cmn_schedule[sys_id='" + cmn_schedule.sys_id + "']");
            for (var i = 0; i < cmn_schedule.entries.length; i++) {
                var entry = cmn_schedule.entries[i];
                gr = new GlideRecord('cmn_schedule_span');
                gr.newRecord();
                gr.setValue('name', entry.name);
                gr.setValue('start_date_time', entry.start_date_time);
                gr.setValue('end_date_time', entry.end_date_time);
                gr.setValue('all_day', entry.all_day);
                if (!gs.nil(entry.type))
                    gr.setValue('type', entry.type);
                gr.setValue('show_as', entry.show_as);
                gr.setValue('repeat_type', entry.repeat_type);
                if (!gs.nil(entry.yearly_type))
                    gr.setValue('yearly_type', entry.yearly_type);
                if (!gs.nil(entry.float_day))
                    gr.setValue('float_day', entry.float_day);
                if (!gs.nil(entry.float_week))
                    gr.setValue('float_week', entry.float_week);
                if (!gs.nil(entry.month))
                    gr.setValue('month', entry.month);
                if (!gs.nil(entry.notes))
                    gr.setValue('notes', entry.notes);
                gr.setValue('schedule', cmn_schedule.sys_id);
                gr.insert();
            }
        }
        // Ensure child schedules are as expected
        for (var n = 0; n < cmn_schedule.child_schedules.length; n++) {
            var child_schedule = cmn_schedule.child_schedules[n];
            gr = new GlideRecord("cmn_other_schedule");
            gr.addQuery('schedule', cmn_schedule.sys_id);
            gr.addQuery('child_schedule', child_schedule.sys_id);
            gr.addQuery('type', child_schedule.type);
            gr.query();
            if (!gr.next()) {
                gs.info("Adding child schedule '" + child_schedule.sys_id + "' (type = '" + child_schedule.type + "') to cmn_schedule[sys_id='" + cmn_schedule.sys_id + "']");
                gr = new GlideRecord('cmn_other_schedule');
                gr.newRecord();
                gr.setValue('schedule', cmn_schedule.sys_id);
                gr.setValue('child_schedule', child_schedule.sys_id);
                gr.setValue('type', child_schedule.type);
                gr.insert();
            }
        }
    }
})(ensure_schedule_entries || (ensure_schedule_entries = {}));
