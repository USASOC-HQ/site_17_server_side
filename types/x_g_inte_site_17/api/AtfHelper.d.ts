declare namespace x_g_inte_site_17 {
    /**
     * Represents a pseudo-code statement in a sequence of one or more linked statements.
     * @export
     * @interface IPseudoCodeBuilder
     * @extends {$$snClass.ICustomClassBase<IPseudoCodeBuilder, "AtfHelper.PseudoCodeBuilder">}
     */
    interface IPseudoCodeBuilder extends $$snClass.ICustomClassBase<IPseudoCodeBuilder, "AtfHelper.PseudoCodeBuilder"> {
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
    interface IPseudoCodeBuilderPrototype extends $$snClass.ICustomClassPrototype1<IPseudoCodeBuilder, IPseudoCodeBuilderPrototype, "AtfHelper.PseudoCodeBuilder", string>, IPseudoCodeBuilder {
        _statement: string;
        _previous?: PseudoCodeBuilder;
        _comment?: string;
    }
    /**
     * Represents a pseudo-code statement in a sequence of one or more linked statements.
     * @export
     * @typedef {Readonly<IPseudoCodeBuilder>} PseudoCodeBuilder;
     */
    type PseudoCodeBuilder = Readonly<IPseudoCodeBuilder>;
    /**
     * Constructor for the {@link PseudoCodeBuilder} class.
     * @export
     * @interface PseudoCodeBuilderConstructor
     * @extends {$$snClass.CustomClassConstructor1<IPseudoCodeBuilder, IPseudoCodeBuilderPrototype, PseudoCodeBuilder, string>}
     */
    interface PseudoCodeBuilderConstructor extends $$snClass.CustomClassConstructor1<IPseudoCodeBuilder, IPseudoCodeBuilderPrototype, PseudoCodeBuilder, string> {
        /**
         * Creates a new instance of the {@link PseudoCodeBuilder} class.
         * @param {string} statement - The text representing a pseudo-code statement.
         * @return {PseudoCodeBuilder} - An object that can linked to additional pseudo-code statements.
         * @memberof PseudoCodeBuilderConstructor
         */
        new (statement: string): PseudoCodeBuilder;
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
    interface IAtfHelper extends $$snClass.ICustomClassBase<IAtfHelper, "AtfHelper"> {
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
    interface IAtfHelperPrototype extends $$snClass.ICustomClassPrototype2<IAtfHelper, IAtfHelperPrototype, "AtfHelper", sn_atf.ITestStepsFunc, sn_atf.ITestStepResult>, IAtfHelper {
        _stepResult: sn_atf.ITestStepResult;
        _steps: sn_atf.ITestStepsFunc;
    }
    /**
     * Represents an instance of the AtfHelper API.
     * @export
     * @typedef {Readonly<IAtfHelper>} AtfHelper;
     */
    type AtfHelper = Readonly<IAtfHelper>;
    /**
     * Constructor for the AtfHelper API.
     * @export
     * @interface AtfHelperConstructor
     * @extends {$$snClass.CustomClassConstructor2<IAtfHelper, IAtfHelperPrototype, AtfHelper, sn_atf.ITestStepsFunc, sn_atf.ITestStepResult>}
     */
    interface AtfHelperConstructor extends $$snClass.CustomClassConstructor2<IAtfHelper, IAtfHelperPrototype, AtfHelper, sn_atf.ITestStepsFunc, sn_atf.ITestStepResult> {
        /**
         * Initializes a new AtfHelper object.
         * @param {sn_atf.ITestStepsFunc} steps - The function that is used to retrieve results of preceding test steps.
         * @param {sn_atf.ITestStepResult} stepResult - The object that is used for specifying the results of the current test step.
         * @constructs {AtfHelper}
         * @memberof AtfHelperConstructor
         */
        new (steps: sn_atf.ITestStepsFunc, stepResult: sn_atf.ITestStepResult): AtfHelper;
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
    const AtfHelper: AtfHelperConstructor;
}
