# x_g_inte_site_17.AtfHelper API

Helper API for test scripts in the [Automated Test Framework](https://docs.servicenow.com/bundle/sandiego-application-development/page/administer/auto-test-framework/concept/automated-test-framework.html).

- [Source Code](source/api/AtfHelper.ts)
- [Type Definition](types/x_g_inte_site_17/api/AtfHelper.d.ts)

## Constructor

```TypeScript
new AtfHelper(steps: sn_atf.ITestStepsFunc, stepResult: sn_atf.ITestStepResult);
```

Arguments:

- steps: `{sn_atf.ITestStepsFunc}` - The function provided by the Automated Test Framework to get the results of previous test steps.
- stepResult: `{sn_atf.ITestStepResult}` - The object provided by the Automated Test Framework to indicate test step results.

## Instance Methods

### setFailed

Sets the result message and sets the step result to failed.
When this method is invoked on the associated test result object, an exception may be thrown.

```TypeScript
setFailed(reason: string, e: any): void;
```

Arguments:

- reason: `{string}` - Explains why the test failed.
- e: `{any}` - The error that caused the failure.

### getRecordIdFromStep

Asserts the record id (Sys ID) from the results of a previous test step.
This will invoke the setFailed method if there is no record_id from the referenced test step results, which results in an exception being thrown.
If the referenced test step results could not be found or it does not define a record_id, then the setFailed method is invoked on the associated test result object, and an exception will be thrown.

```TypeScript
getRecordIdFromStep(sys_id: string): string | undefined;
```

Argument:

- sys_id: `{string}` - The Sys ID of a preceding test step.

Returns the record id (Sys ID) from the results of a previous test step.

### Instance Example

```TypeScript
namespace site17Util_DistinguishedNameTest {
    declare var outputs: sn_atf.ITestStepOutputs;
    declare function steps(sys_id: string): sn_atf.ITestStepOutputs;
    declare var stepResult: sn_atf.ITestStepResult;
    declare function assertEqual(assertion: sn_atf.ITestAssertion): void;
    (function(outputs: sn_atf.ITestStepOutputs, steps: sn_atf.ITestStepsFunc, stepResult: sn_atf.ITestStepResult, assertEqual: sn_atf.IAssertEqualFunc): boolean {

        var atfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);

        var sys_id;
        try {
            sys_id = atfHelper.getRecordIdFromStep('dc117523a4f940569a71dd22f95cd338');
            myFunc();
        } catch (e) {
            atfHelper.setFailed("Unexpected Error", e);
            return false;
        }

        return true;
    })(outputs, steps, stepResult, assertEqual);
}
```

## Static Methods

### relativeDayAt

Gets a date/time string that is of a specific time, and is relative to the current date.

```TypeScript
relativeDayAt(daysFromToday: number, hours: number, minutes: number, seconds?: number): string;
```

Arguments:

- daysFromToday: `{number}` - The relative number of days.
- hours: `{number}` - The hours for the specific time of day.
- minutes: `{number}` - The minutes for the specific time of day.
- seconds?: `{number}` - The optional seconds for the specific time of day

Returns a date/time string representing the specific time of date, relative to today's date.

Example:

```TypeScript
// Gets date/time string for yesterday at noon.
var dateString =  x_g_inte_site_17.AtfHelper.relativeDayAt(-1, 12, 0);
```

### endOfRelativeDay

Gets a date/time string that represents the end of the day, relative to the current date.

```TypeScript
endOfRelativeDay(daysFromToday: number): string;
```

Arguments:

- daysFromToday: `{number}` - The relative number of days.

Returns a date/time string representing the end of the day, relative to today's date.

Example:

```TypeScript
// Gets date/time string for end of day before yesterday.
var dateString = x_g_inte_site_17.AtfHelper.endOfRelativeDay(-2);
```

### isNil

Tests whether a value represents an `undefined`, `null`, `NaN`, an empty string value.

```TypeScript
isNil(obj: any | undefined): obj is undefined | null | "";
```

Arguments:

- obj:  `{(any | undefined)}` - The value to test.

Returns `true` if the value is `undefined`, `null`, `NaN`, an empty string, an uninitialized `GlideRecord` or a nil `GlideElement`; otherwise, `false`.

### areAnyNil

Tests whether any values represent an `undefined`, `null`, `NaN`, an empty string value.

```TypeScript
areAnyNil(...obj: (any | undefined)[]): boolean;
```

Arguments:

- obj: `{(...(any | undefined)[])}` - The value(s) to test.

Returns `true` if any value is `undefined`, `null`, `NaN`, an empty string, an uninitialized `GlideRecord` or a nil `GlideElement`; otherwise, `false`.

Example:

```TypeScript
var hasNil = x_g_inte_site_17.AtfHelper.areAnyNil(var1, var2, var3);
```

### typeOfEx

Gets the type of a value, distinguishing whether an object is null.

```TypeScript
typeOfEx(obj: any | undefined): "null" | "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
```

Arguments:

- obj: `{(any | undefined)}` - The target value.

Returns literal string `"null"` if the value is `null`; otherwise it returns the result of the `typeof` statement `("string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function")`.

### createPseudoCodeBuilder

Creates a `PseudoCodeBuilder` object from one or more pseudo-code statements.

```TypeScript
createPseudoCodeBuilder(statement: string, ...additionalStatements: string[]): PseudoCodeBuilder;
```

Arguments:

- statement: `{string}` - Text reprsenting a pseudo-code statement.
- additionalStatements: `{...string[]}` - Additional pseudo-code statements to append.

Returns an object representing the last pseudo-code statement.

Example:

```TypeScript
var psb = x_g_inte_site_17.AtfHelper.createPseudoCodeBuilder('var gr = new GlideRecord("sys_user")');
```

## PseudoCodeBuilder Methods

### getComment

Gets the comment associated with the current pseudo-code statement.

```TypeScript
getComment(): string | undefined;
```

Returns the comment string or undefined if there is no comment.

### setComment

Sets the comment associated with the current pseudo-code statement.

```TypeScript
setComment(comment?: string | null): PseudoCodeBuilder;
```

Argument:

- comment: `{(string | null | undefined)}` - The new comment for the current statement. Use no parameters, or a `null`, `undefined` or an empty string to clear the comment.

Returns the current PseudoCodeBuilder for method chaining.

Example:

```TypeScript
var psb = x_g_inte_site_17.AtfHelper.createPseudoCodeBuilder('var gr = new GlideRecord("sys_user")').setComment('new record');
```

### statement

Gets the current pseudo-code statement.

```TypeScript
statement(): string;
```

Returns the text representing the current pseudo-code statement.

### previous

Gets the preceding pseudo-code statement.

```TypeScript
previous(): PseudoCodeBuilder | undefined;
```

Returns the `PseudoCodeBuilder` for the preceding pseudo-code statement or `undefined` if this current statement is the first statement in the sequence.

Example:

```TypeScript
var curPsb = x_g_inte_site_17.AtfHelper.createPseudoCodeBuilder('var gr = new GlideRecord("sys_user")').appendStatement('gr.get(sys_id)');
gs.info(curPsb.statement()); // writes 'gr.get(sys_id)'
var prevPsb = curPsb.previous();
gs.info(prevPsb.statement()); // writes 'var gr = new GlideRecord("sys_user")'
```

### appendStatement

Appends a pseudo-code statement after the current statement.

```TypeScript
appendStatement(statement: string, ...additionalStatements: string[]): PseudoCodeBuilder;
```

Arguments:

- statement: `{string}` - The text representing a pseudo-code statement.
- additionalStatements: `{...string[]}` - Additional pseudo-code statements to append.

Returns the new `PseudoCodeBuilder` object representing the final pseudo-code statement.

Example:

```TypeScript
var basePsb = x_g_inte_site_17.AtfHelper.createPseudoCodeBuilder('var gr = new GlideRecord("sys_user")');
var psb = basePsb.appendStatement('gr.get(sys_id)');
gs.info(psb.statement()); // writes 'gr.get(sys_id)'
gs.info(basePsb.statement()); // writes 'var gr = new GlideRecord("sys_user")'
```

### toString

Gets a string representation of the current and all preceding pseudo-code statements.

```TypeScript
toString(): string;
```

Returns the combination of the current all preceding pseudo-code statements joined by terminating `';'` and newline characters.

Example:

```TypeScript
var psb = x_g_inte_site_17.AtfHelper.createPseudoCodeBuilder('var gr = new GlideRecord("sys_user")');
psb = psb.appendStatement('gr.setValue("contact", sys_id)').comment('user id').appendStatement('gr.query()');
gs.info(psb.toString()) // writes "var gr = new GlideRecord(\"sys_user\");\ngr.setValue(\"contact\", sys_id); // user id\ngr.query()"
```
