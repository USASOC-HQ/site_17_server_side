namespace x_g_inte_site_17 {
    /**
     * Represents a pseudo-code statement in a sequence of one or more linked statements.
     * @export
     * @interface IPseudoCodeBuilder
     * @extends {$$snClass.ICustomClassBase<IPseudoCodeBuilder, "AtfHelper.PseudoCodeBuilder">}
     */
    export interface IPseudoCodeBuilder extends $$snClass.ICustomClassBase<IPseudoCodeBuilder, "AtfHelper.PseudoCodeBuilder"> {
        /**
         * Gets the comment associated with the current pseudo-code statement.
         * @return {(string | undefined)} The comment string or undefined if there is no comment.
         * @memberof IPseudoCodeBuilder
         */
        getComment(): string | undefined;
        /**
         * Sets the comment associated with the current pseudo-code statement.
         * @param {(string | null)} [comment]
         * @return {PseudoCodeBuilder} The current PseudoCodeBuilder for method chaining.
         * @memberof IPseudoCodeBuilder
         */
        setComment(comment?: string | null): PseudoCodeBuilder;
        /**
         * Gets the current pseudo-code statement.
         * @return {string} The text representing the current pseudo-code statement.
         * @memberof IPseudoCodeBuilder
         */
        statement(): string;
        /**
         * Gets the preceding pseudo-code statement.
         * @return {(PseudoCodeBuilder | undefined)} The PseudoCodeBuilder for the preceding pseudo-code statement or undefined if this current statement is the first statement in the sequence.
         * @memberof IPseudoCodeBuilder
         */
        previous(): PseudoCodeBuilder | undefined;
        /**
         * Appends a pseudo-code statement after the current statement.
         * @param {string} statement - The text representing a pseudo-code statement.
         * @param {...string[]} additionalStatements - Additional pseudo-code statements to append.
         * @return {PseudoCodeBuilder} The new PseudoCodeBuilder object representing the final pseudo-code statement.
         * @memberof IPseudoCodeBuilder
         */
        appendStatement(statement: string, ...additionalStatements: string[]): PseudoCodeBuilder;
        /**
         * Gets a string representation of the current and all preceding pseudo-code statements.
         * @return {string} The combination of the current all preceding pseudo-code statements joined by terminating ';' and newline characters.
         * @memberof IPseudoCodeBuilder
         */
        toString(): string;
    }

    export interface IPseudoCodeBuilderPrototype extends $$snClass.ICustomClassPrototype1<IPseudoCodeBuilder, IPseudoCodeBuilderPrototype, "AtfHelper.PseudoCodeBuilder", string>, IPseudoCodeBuilder {
        _statement: string;
        _previous?: PseudoCodeBuilder;
        _comment?: string;
    }

    /**
     * Represents a pseudo-code statement in a sequence of one or more linked statements.
     * @export
     * @typedef {Readonly<IPseudoCodeBuilder>} PseudoCodeBuilder;
     */
    export declare type PseudoCodeBuilder = Readonly<IPseudoCodeBuilder>;

    /**
     * Constructor for the {@link PseudoCodeBuilder} class.
     * @export
     * @interface PseudoCodeBuilderConstructor
     * @extends {$$snClass.CustomClassConstructor1<IPseudoCodeBuilder, IPseudoCodeBuilderPrototype, PseudoCodeBuilder, string>}
     */
    export interface PseudoCodeBuilderConstructor extends $$snClass.CustomClassConstructor1<IPseudoCodeBuilder, IPseudoCodeBuilderPrototype, PseudoCodeBuilder, string> {
        /**
         * Creates a new instance of the {@link PseudoCodeBuilder} class.
         * @param {string} statement - The text representing a pseudo-code statement.
         * @return {PseudoCodeBuilder} - An object that can linked to additional pseudo-code statements.
         * @memberof PseudoCodeBuilderConstructor
         */
        new(statement: string): PseudoCodeBuilder;
        /**
         * Creates a new instance of the {@link PseudoCodeBuilder} class.
         * @param {string} statement - The text representing a pseudo-code statement.
         * @return {PseudoCodeBuilder} - An object that can linked to additional pseudo-code statements.
         * @memberof PseudoCodeBuilderConstructor
         */
        (statement: string): PseudoCodeBuilder;
    }

    /**
     * Base interface for the AtfHelper API
     * @export
     * @interface IAtfHelperBase
     * @extends {$$snClass.ICustomClassBase<IAtfHelper, "AtfHelper">}
     */
    export interface IAtfHelper extends $$snClass.ICustomClassBase<IAtfHelper, "AtfHelper"> {
        /**
         * Sets the result message and sets the step result to failed.
         * @param {string} reason - Explains why the test failed.
         * @param {*} e - The error that caused the failure.
         * @throws When the setFailed method is invoked on the associated test result object, an exception may be thrown.
         * @memberof IAtfHelperBase
         */
        setFailed(reason: string, e: any): void;

        /**
         * Asserts the record id (Sys ID) from the results of a previous test step.
         * This will invoke the setFailed method if there is no record_id from the referenced test step results, which results in an exception being thrown.
         * @param {string} sys_id - The Sys ID of a preceding test step.
         * @return {string} The record id (Sys ID) from the results of a previous test step.
         * @throws If the referenced test step results could not be found or it does not define a record_id, then the setFailed method is invoked on the associated test result object, an exception will be thrown.
         * @memberof IAtfHelperBase
         */
        getRecordIdFromStep(sys_id: string): string | undefined;
    }

    export interface IAtfHelperPrototype extends $$snClass.ICustomClassPrototype2<IAtfHelper, IAtfHelperPrototype, "AtfHelper", sn_atf.ITestStepsFunc, sn_atf.ITestStepResult>, IAtfHelper {
        _stepResult: sn_atf.ITestStepResult;
        _steps: sn_atf.ITestStepsFunc;
    }

    /**
     * Represents an instance of the AtfHelper API.
     * @export
     * @typedef {Readonly<IAtfHelper>} AtfHelper;
     */
    export declare type AtfHelper = Readonly<IAtfHelper>;

    /**
     * Constructor for the AtfHelper API.
     * @export
     * @interface AtfHelperConstructor
     * @extends {$$snClass.CustomClassConstructor2<IAtfHelper, IAtfHelperPrototype, AtfHelper, sn_atf.ITestStepsFunc, sn_atf.ITestStepResult>}
     */
    export interface AtfHelperConstructor extends $$snClass.CustomClassConstructor2<IAtfHelper, IAtfHelperPrototype, AtfHelper, sn_atf.ITestStepsFunc, sn_atf.ITestStepResult> {
        /**
         * Initializes a new AtfHelper object.
         * @param {sn_atf.ITestStepsFunc} steps - The function that is used to retrieve results of preceding test steps.
         * @param {sn_atf.ITestStepResult} stepResult - The object that is used for specifying the results of the current test step.
         * @constructs {AtfHelper}
         * @memberof AtfHelperConstructor
         */
        new(steps: sn_atf.ITestStepsFunc, stepResult: sn_atf.ITestStepResult): AtfHelper;

        /**
         * Initializes a new AtfHelper object.
         * @param {sn_atf.ITestStepsFunc} steps - The function that is used to retrieve results of preceding test steps.
         * @param {sn_atf.ITestStepResult} stepResult - The object that is used for specifying the results of the current test step.
         * @constructs {AtfHelper}
         * @memberof AtfHelperConstructor
         */
        (steps: sn_atf.ITestStepsFunc, stepResult: sn_atf.ITestStepResult): AtfHelper;

        /**
         * Sets the result message and sets the step result to failed.
         * @param {sn_atf.ITestStepResult} stepResult
         * @param {string} reason - Explains why the test failed.
         * @param {*} e - The error that caused the failure.
         * @throws When the setFailed method is invoked on stepResult, an exception will be thrown.
         * @memberof AtfHelperConstructor
         */
        setFailed(stepResult: sn_atf.ITestStepResult, reason: string, e: any): void;

        /**
         * Gets a date/time string that is of a specific time, and is relative to the current date.
         * @param {number} daysFromToday - The relative number of days.
         * @param {number} hours - The hours for the specific time of day.
         * @param {number} minutes - The minutes for the specific time of day.
         * @param {number} [seconds] - The seconds for the specific time of day
         * @return {string} A date/time string representing the specific time of date, relative to today's date.
         * @memberof AtfHelperConstructor
         */
        relativeDayAt(daysFromToday: number, hours: number, minutes: number, seconds?: number): string;

        /**
         * Gets a date/time string that represents the end of the day, relative to the current date.
         * @param {number} daysFromToday - The relative number of days.
         * @return {string} A date/time string representing the end of the day, relative to today's date.
         * @memberof AtfHelperConstructor
         */
        endOfRelativeDay(daysFromToday: number): string;

        /**
         * Tests whether a value represents an undefined, null, NaN, an empty string value.
         * @param {(any | undefined)} obj - The value to test.
         * @return {(obj is undefined | null | "")} True if the value is undefined, null, NaN, an empty string, an uninitialized GlideRecord or a nil GlideElement; otherwise, false.
         * @memberof AtfHelperConstructor
         */
        isNil(obj: any | undefined): obj is undefined | null | "";

        /**
         * Tests whether any values represent an undefined, null, NaN, an empty string value.
         * @param {(...(any | undefined)[])} obj - The value(s) to test.
         * @return {boolean} True if any value is undefined, null, NaN, an empty string, an uninitialized GlideRecord or a nil GlideElement; otherwise, false.
         * @memberof AtfHelperConstructor
         */
        areAnyNil(...obj: (any | undefined)[]): boolean;

        /**
         * Gets the type of a value, distinguishing whether an object is null.
         * @param {(any | undefined)} obj - The target value.
         * @return {("null" | "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function")} - The string 'null' if the value is null;
         * otherwise it returns the result of the typeof statement.
         * @memberof AtfHelperConstructor
         */
        typeOfEx(obj: any | undefined): "null" | "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";

        /**
         * Creates a {@link PseudoCodeBuilder} object from one or more pseudo-code statements.
         * @param {string} statement - Text reprsenting a pseudo-code statement.
         * @param {...string[]} additionalStatements - Additional pseudo-code statements to append.
         * @return {PseudoCodeBuilder} An object representing the last pseudo-code statement.
         * @memberof AtfHelperConstructor
         */
        createPseudoCodeBuilder(statement: string, ...additionalStatements: string[]): PseudoCodeBuilder;
    }

    export const AtfHelper: AtfHelperConstructor = (function (): AtfHelperConstructor {
        var constructor: AtfHelperConstructor = Class.create();

        const PseudoCodeBuilder: PseudoCodeBuilderConstructor = (function (): PseudoCodeBuilderConstructor {
            var builderConstructor: PseudoCodeBuilderConstructor = Class.create();
    
            builderConstructor.prototype = <IPseudoCodeBuilderPrototype>{
                initialize: function(statement: string): void {
                    this._statement = statement;
                },

                getComment: function(): string | undefined { return this._comment; },

                setComment: function(comment?: string | null): PseudoCodeBuilder {
                    if (typeof comment === 'string' && (comment = comment.trim()).length > 0)
                        this._comment = comment;
                    else
                        this._comment = undefined;
                    return this;
                },
    
                statement: function(this: IPseudoCodeBuilderPrototype): string { return this._statement; },

                previous: function(this: IPseudoCodeBuilderPrototype): PseudoCodeBuilder | undefined { return this._previous; },

                appendStatement: function(this: IPseudoCodeBuilderPrototype, statement: string, ...additionalStatements: string[]): PseudoCodeBuilder {
                    var next = new PseudoCodeBuilder(statement);
                    (<IPseudoCodeBuilderPrototype>next)._previous = this;
                    if (typeof additionalStatements !== 'undefined' && additionalStatements.length > 0) {
                        for (var s of additionalStatements) {
                            var previous = next;
                            next = new PseudoCodeBuilder(s);
                            (<IPseudoCodeBuilderPrototype>next)._previous = previous;
                        }
                    }
                    return next;
                },

                toString: function(this: IPseudoCodeBuilderPrototype): string {
                    var result: string;
                    var previous = this._previous;
                    if (typeof previous === 'undefined')
                        result = this._statement;
                    else {
                        var statements: string[] = [this._statement];
                        do {
                            var statement = (<IPseudoCodeBuilderPrototype>previous)._statement.trim();
                            var c = (<IPseudoCodeBuilderPrototype>previous)._comment;
                            if (typeof c === 'string')
                                statements.unshift(statement.endsWith(';') ? statement + ' // ' + c : statement + "; // " + c);
                            else
                                statements.unshift(statement.endsWith(';') ? statement : statement + ";");
                        } while(typeof (previous = (<IPseudoCodeBuilderPrototype>previous)._previous) !== 'undefined');
                        result = statements.join("\n");
                    }
                    return (typeof this._comment === 'string') ? result + ' // ' + this._comment : result;
                },

                type: "AtfHelper.PseudoCodeBuilder"
            };
    
            return builderConstructor;
        })();
    
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

        function areAnyNil(...obj: (any | undefined)[]): boolean {
            for (var i in obj)
                if (isNil(obj[i])) return true;
            return false;
        }

        function typeOfEx(obj: any | undefined): "null" | "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" {
            return (obj === null) ? 'null' : typeof obj;
        }

        function setFailed(stepResult: sn_atf.ITestStepResult, reason: string, e: any): void {
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
            } else if (name.length > 0)
                stepResult.setOutputMessage("Unexpected error: " + ((stack.length > 0) ? reason + "\n" + stack : reason));
            else if (stack.length > 0)
                stepResult.setOutputMessage("Unexpected error: " + reason + "\n" + stack);
            else if ((m = ('' + e).trim()).length > 0)
                stepResult.setOutputMessage("Unexpected error: " + reason + "\nMessage: " + m);
            else
                stepResult.setOutputMessage("Unexpected error: " + reason);
            stepResult.setFailed();
        }

        /**
         * Tests whether a value represents an undefined, null, NaN, an empty string value.
         * @param {(any | undefined)} obj - The value to test.
         * @return {(obj is undefined | null | "")} True if the value is undefined, null, NaN, an empty string, an uninitialized GlideRecord or a nil GlideElement; otherwise, false.
         * @static
         * @memberof AtfHelper
         */
        constructor.isNil = isNil;

        /**
         * Tests whether any values represent an undefined, null, NaN, an empty string value.
         * @param {(...(any | undefined)[])} obj - The value(s) to test.
         * @return {boolean} True if any value is undefined, null, NaN, an empty string, an uninitialized GlideRecord or a nil GlideElement; otherwise, false.
         * @static
         * @memberof AtfHelper
         */
        constructor.areAnyNil = areAnyNil;

        /**
         * Gets the type of a value, distinguishing whether an object is null.
         * @param {(any | undefined)} obj - The target value.
         * @return {("null" | "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function")} - The string 'null' if the value is null;
         * otherwise it returns the result of the typeof statement.
         * @static
         * @memberof AtfHelper
         */
        constructor.typeOfEx = typeOfEx;
        
        /**
         * Sets the result message and sets the step result to failed.
         * @param {sn_atf.ITestStepResult} stepResult
         * @param {string} reason - Explains why the test failed.
         * @param {*} e - The error that caused the failure.
         * @throws When the setFailed method is invoked on stepResult, an exception will be thrown.
         * @static
         * @memberof AtfHelper
         */
        constructor.setFailed = setFailed;

        /**
         * Gets a date/time string that represents the end of the day, relative to the current date.
         * @param {number} daysFromToday - The relative number of days.
         * @return {string} A date/time string representing the end of the day, relative to today's date.
         * @static
         * @memberof AtfHelper
         */
        constructor.endOfRelativeDay = function(daysFromToday: number): string {
            var dateTime: GlideDateTime = new GlideDateTime();
            if (daysFromToday != -1) dateTime.addDaysLocalTime(daysFromToday + 1);
            dateTime.setDisplayValue(dateTime.getDate().getDisplayValue() + " 00:00:00");
            dateTime.subtract(1);
            return dateTime.getDisplayValue();
        };

        /**
         * Gets a date/time string that is of a specific time, and is relative to the current date.
         * @param {number} daysFromToday - The relative number of days.
         * @param {number} hours - The hours for the specific time of day.
         * @param {number} minutes - The minutes for the specific time of day.
         * @param {number} [seconds] - The seconds for the specific time of day
         * @return {string} A date/time string representing the specific time of date, relative to today's date.
         * @static
         * @memberof AtfHelper
         */
        constructor.relativeDayAt = function(daysFromToday: number, hours: number, minutes: number, seconds?: number): string {
            var dateTime: GlideDateTime = new GlideDateTime();
            if (daysFromToday != 0) dateTime.addDaysLocalTime(daysFromToday);
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

        /**
         * Creates a {@link PseudoCodeBuilder} object from one or more pseudo-code statements.
         * @param {string} statement - Text reprsenting a pseudo-code statement.
         * @param {...string[]} additionalStatements - Additional pseudo-code statements to append.
         * @return {PseudoCodeBuilder} An object representing the last pseudo-code statement.
         * @static
         * @memberof AtfHelper
         */
        constructor.createPseudoCodeBuilder = function(statement: string, ...additionalStatements: any[]): IPseudoCodeBuilder {
            var result = new PseudoCodeBuilder(statement);
            if (typeof additionalStatements !== 'undefined' && additionalStatements.length > 0) {
                for (var s of additionalStatements)
                    result = result.appendStatement(s);
            }
            return result;
        };

        constructor.prototype = <IAtfHelperPrototype>{
            /**
             * Initializes a new AtfHelper object.
             * @param {sn_atf.ITestStepsFunc} steps - The function that is used to retrieve results of preceding test steps.
             * @param {sn_atf.ITestStepResult} stepResult - The object that is used for specifying the results of the current test step.
             * @memberof AtfHelper
             */
            initialize: function(this: IAtfHelperPrototype, steps: sn_atf.ITestStepsFunc, stepResult: sn_atf.ITestStepResult): void {
                if (isNil(steps)) throw new Error("Steps function not provided");
                if (isNil(stepResult)) throw new Error("Step result not provided");
                this._steps = steps;
                this._stepResult = stepResult;
            },

            /**
             * Sets the result message and sets the step result to failed.
             * @param {string} reason - Explains why the test failed.
             * @param {*} e - The error that caused the failure.
             * @throws When the setFailed method is invoked on the associated test result object, an exception will be thrown.
             * @memberof AtfHelper
             */
            setFailed: function(this: IAtfHelperPrototype, reason: string, e: any): void {
                setFailed(this._stepResult, reason, e);
            },

            /**
             * Asserts the record id (Sys ID) from the results of a previous test step.
             * This will invoke the setFailed method if there is no record_id from the referenced test step results, which results in an exception being thrown.
             * @param {string} sys_id - The Sys ID of a preceding test step.
             * @return {string} The record id (Sys ID) from the results of a previous test step.
             * @throws If the referenced test step results could not be found or it does not define a record_id, then the setFailed method is invoked on the associated test result object, and an exception will be thrown.
             * @memberof AtfHelper
             */
            getRecordIdFromStep: function(sys_id: string): string | undefined {
                var sr: sn_atf.ITestStepOutputs | undefined;
                try { sr = this._steps(sys_id); }
                catch (e) {
                    this.setFailed("Unexpected exception result of step with Sys Id '" + sys_id + "'", e);
                    return;
                }
                var result: atf_output_variableFields;
                if (typeof sr === 'undefined' || sr === null) {
                    this._stepResult.setOutputMessage("Could not find result of step with Sys Id '" + sys_id + "'");
                    return;
                }
                try { result = sr.record_id; }
                catch (e) {
                    this.setFailed("Unexpected exception getting record_id from result of step with Sys Id '" + sys_id + "'", e);
                    return
                }
                if (typeof result !== 'undefined' && result !== null)
                    return '' + result;
                this._stepResult.setOutputMessage("Result of step with Sys Id '" + sys_id + "' does not have a record_id");
            },

            type: "AtfHelper"
        };

        return constructor;
    })();
}