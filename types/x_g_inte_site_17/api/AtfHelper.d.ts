declare namespace x_g_inte_site_17 {
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
         * @memberof IAtfHelperBase
         * @throws When the setFailed method is invoked on the associated test result object, an exception will be thrown.
         */
        setFailed(reason: string, e: any): void;
        /**
         * Asserts the record id (Sys ID) from the results of a previous test step.
         * This will invoke the setFailed method if there is no record_id from the referenced test step results, which results in an exception being thrown.
         * @param {string} sys_id - The Sys ID of a preceding test step.
         * @return {string} The record id (Sys ID) from the results of a previous test step.
         * @memberof IAtfHelperBase
         * @throws If the referenced test step results could not be found or it does not define a record_id, then the setFailed method is invoked on the associated test result object, and an exception will be thrown.
         */
        getRecordIdFromStep(sys_id: string): string | undefined;
    }
    interface IAtfHelperPrototype extends $$snClass.ICustomClassPrototype2<IAtfHelper, IAtfHelperPrototype, "AtfHelper", sn_atf.ITestStepsFunc, sn_atf.ITestStepResult>, IAtfHelper {
        _stepResult: sn_atf.ITestStepResult;
        _steps: sn_atf.ITestStepsFunc;
    }
    type AtfHelper = Readonly<IAtfHelper>;
    /**
     * Constructor for the AtfHelper API
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
         * @memberof AtfHelperConstructor
         * @throws When the setFailed method is invoked on stepResult, an exception will be thrown.
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
        isNil(obj: any | undefined): obj is undefined | null | "";
        areAnyNil(...obj: (any | undefined)[]): boolean;
    }
    const AtfHelper: AtfHelperConstructor;
}
