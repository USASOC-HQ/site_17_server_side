"use strict";
var x_g_inte_site_17;
(function (x_g_inte_site_17) {
    x_g_inte_site_17.AtfHelper = (function () {
        var constructor = Class.create();
        function isNil(obj) {
            switch (typeof obj) {
                case 'undefined':
                    return true;
                case 'number':
                    return isNaN(obj) || !isFinite(obj);
                case 'string':
                    return obj.trim().length == 0;
                case 'object':
                    if (obj === null)
                        return true;
                    if (global.JSUtil.instance_of(obj, 'java.lang.String'))
                        return obj.length == 0 || ('' + obj).trim().length == 0;
                    if (obj instanceof GlideElement)
                        return obj.nil();
                    return false;
                default:
                    return false;
            }
        }
        function areAnyNil() {
            var obj = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                obj[_i] = arguments[_i];
            }
            for (var i in obj)
                if (isNil(obj[i]))
                    return true;
            return false;
        }
        function setFailed(stepResult, reason, e) {
            var m = isNil(e.message) ? '' : ((typeof e.message === 'string') ? e.message : '' + e.message).trim();
            var name = isNil(e.name) ? '' : ((typeof e.name === 'string') ? e.name : '' + e.name).trim();
            var stack = isNil(e.stack) ? '' : ((typeof e.stack === 'string') ? e.stack : '' + e.stack).trim();
            if (m.length > 0) {
                if (name.length > 0) {
                    if (stack.length > 0)
                        stepResult.setOutputMessage("Unexpected " + name + ": " + reason + "\nMessage: " + m + "\nStack trace:\n" + stack);
                    else
                        stepResult.setOutputMessage("Unexpected " + name + ": " + reason + "\nMessage: " + m);
                }
                else if (stack.length > 0)
                    stepResult.setOutputMessage("Unexpected error: " + reason + "\nMessage: " + m + "\nStack trace:\n" + stack);
                else
                    stepResult.setOutputMessage("Unexpected error: " + reason + "\nMessage: " + m);
            }
            else if (name.length > 0)
                stepResult.setOutputMessage("Unexpected error: " + ((stack.length > 0) ? reason + "\n" + stack : reason));
            else if (stack.length > 0)
                stepResult.setOutputMessage("Unexpected error: " + reason + "\n" + stack);
            else if ((m = ('' + e).trim()).length > 0)
                stepResult.setOutputMessage("Unexpected error: " + reason + "\nMessage: " + m);
            else
                stepResult.setOutputMessage("Unexpected error: " + reason);
            stepResult.setFailed();
        }
        constructor.isNil = isNil;
        constructor.areAnyNil = areAnyNil;
        constructor.setFailed = setFailed;
        constructor.endOfRelativeDay = function (daysFromToday) {
            var dateTime = new GlideDateTime();
            if (daysFromToday != -1)
                dateTime.addDaysLocalTime(daysFromToday + 1);
            dateTime.setDisplayValue(dateTime.getDate().getDisplayValue() + " 00:00:00");
            dateTime.subtract(1);
            return dateTime.getDisplayValue();
        };
        constructor.relativeDayAt = function (daysFromToday, hours, minutes, seconds) {
            var dateTime = new GlideDateTime();
            if (daysFromToday != 0)
                dateTime.addDaysLocalTime(daysFromToday);
            if (isNil(seconds) || seconds < 1) {
                if (hours < 10) {
                    if (minutes < 10)
                        return dateTime.getDate().getDisplayValue() + ' 0' + hours + ':0' + minutes + ':00';
                    return dateTime.getDate().getDisplayValue() + ' 0' + hours + ':' + minutes + ':00';
                }
                if (minutes < 10)
                    return dateTime.getDate().getDisplayValue() + ' ' + hours + ':0' + minutes + ':00';
                return dateTime.getDate().getDisplayValue() + ' ' + hours + ':' + minutes + ':00';
            }
            if (seconds < 10) {
                if (hours < 10) {
                    if (minutes < 10)
                        return dateTime.getDate().getDisplayValue() + ' 0' + hours + ':0' + minutes + ':0' + seconds;
                    return dateTime.getDate().getDisplayValue() + ' 0' + hours + ':' + minutes + ':0' + seconds;
                }
                if (minutes < 10)
                    return dateTime.getDate().getDisplayValue() + ' ' + hours + ':0' + minutes + ':0' + seconds;
                return dateTime.getDate().getDisplayValue() + ' ' + hours + ':' + minutes + ':0' + seconds;
            }
            if (hours < 10) {
                if (minutes < 10)
                    return dateTime.getDate().getDisplayValue() + ' 0' + hours + ':0' + minutes + ':' + seconds;
                return dateTime.getDate().getDisplayValue() + ' 0' + hours + ':' + minutes + ':' + seconds;
            }
            if (minutes < 10)
                return dateTime.getDate().getDisplayValue() + ' ' + hours + ':0' + minutes + ':' + seconds;
            return dateTime.getDate().getDisplayValue() + ' ' + hours + ':' + minutes + ':' + seconds;
        };
        constructor.prototype = {
            initialize: function (steps, stepResult) {
                if (isNil(steps))
                    throw new Error("Steps function not provided");
                if (isNil(stepResult))
                    throw new Error("Step result not provided");
                this._steps = steps;
                this._stepResult = stepResult;
            },
            setFailed: function (reason, e) {
                setFailed(this._stepResult, reason, e);
            },
            getRecordIdFromStep: function (sys_id) {
                var sr;
                try {
                    sr = this._steps(sys_id);
                }
                catch (e) {
                    this.setFailed("Unexpected exception result of step with Sys Id '" + sys_id + "'", e);
                    return;
                }
                var result;
                if (typeof sr === 'undefined' || sr === null) {
                    this._stepResult.setOutputMessage("Could not find result of step with Sys Id '" + sys_id + "'");
                    return;
                }
                try {
                    result = sr.record_id;
                }
                catch (e) {
                    this.setFailed("Unexpected exception getting record_id from result of step with Sys Id '" + sys_id + "'", e);
                    return;
                }
                if (typeof result !== 'undefined' && result !== null)
                    return '' + result;
                this._stepResult.setOutputMessage("Result of step with Sys Id '" + sys_id + "' does not have a record_id");
            },
            type: "AtfHelper"
        };
        return constructor;
    })();
})(x_g_inte_site_17 || (x_g_inte_site_17 = {}));
