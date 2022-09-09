/// <reference path="../../../types/sn_typings_server_scoped/dist/index.d.ts" />
/// <reference path="../../../types/x_g_inte_site_17/table/index.d.ts" />

namespace site17Util_DistinguishedNameTest {
    declare var outputs: sn_atf.ITestStepOutputs;
    declare function steps(sys_id: string): sn_atf.ITestStepOutputs;
    declare var stepResult: sn_atf.ITestStepResult;
    declare function assertEqual(assertion: sn_atf.ITestAssertion): void;

    interface ITestDnTestData {
        value?: string | null;
        expected: boolean;
    }

    interface IDnContainedByTestData {
        sourceDN: string;
        containerDN: string;
        expected: boolean;
    }

    (function(outputs: sn_atf.ITestStepOutputs, steps: sn_atf.ITestStepsFunc, stepResult: sn_atf.ITestStepResult, assertEqual: sn_atf.IAssertEqualFunc): boolean {
        var atfHelper: x_g_inte_site_17.AtfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);

        var testDnTestData: ITestDnTestData[] = [
            { expected: false },
            { value: null, expected: false },
            { value: '', expected: false },
            { value: ' ', expected: false },
            { value: "DC=Fabrikam,DC=COM", expected: true },
            { value: "DC=Fabrikam, DC=COM", expected: false },
            { value: "DC=Fabrikam ,DC=COM", expected: true },
            { value: "DC=Fabrikam ,DC=COM=", expected: true },
            { value: "DC=Fabrikam,,DC=COM", expected: false },
            { value: " DC=Fabrikam,DC=COM", expected: false },
            { value: "DC=Fabrikam,DC=COM ", expected: true },
            { value: "DC=Fabrikam,DC=", expected: true },
            { value: "DC=Fabrikam,DC", expected: false },
            { value: "DC=Fabrikam,", expected: false },
            { value: "DC=,OU=", expected: true },
            { value: "CN=Joey Bag O' Donuts,OU=Sales,DC=Fabrikam,DC=COM", expected: true },
            { value: "CN=Joey Bag O' Donuts\\, III,OU=Sales,DC=Fabrikam,DC=COM", expected: true },
            { value: "My,List", expected: false },
            { value: "ID=My\\,List", expected: true }
        ];
    
        var dnContainedByTestData: IDnContainedByTestData[] = [
            { sourceDN: '', containerDN: '', expected: false },
            { sourceDN: 'DC=Fabrikam,DC=COM', containerDN: 'DC=Fabrikam,DC=COM', expected: true },
            { sourceDN: "OU=Sales,DC=Fabrikam,DC=COM", containerDN: 'DC=COM', expected: true },
            { sourceDN: "OU=Sales,DC=Fabrikam,DC=COM", containerDN: 'DC=Fabrikam,DC=COM', expected: true },
            { sourceDN: "CN=Joey Bag O' Donuts,OU=Sales,DC=Fabrikam,DC=COM", containerDN: 'DC=COM', expected: true },
            { sourceDN: "CN=Joey Bag O' Donuts,OU=Sales,DC=Fabrikam,DC=COM", containerDN: 'DC=Fabrikam,DC=COM', expected: true },
            { sourceDN: 'DC=Fabrikam,DC=COM', containerDN: "OU=Sales,DC=Fabrikam,DC=COM", expected: false },
            { sourceDN: "CN=Joey Bag O' Donuts,OU=Sales,DC=Fabrikam,DC=COM", containerDN: 'DC=Fabrikam,DC=COM ', expected: false },
            { sourceDN: " CN=Joey Bag O' Donuts,OU=Sales,DC=Fabrikam,DC=COM", containerDN: 'DC=Fabrikam,DC=COM', expected: false }
        ];
    
        var actual: boolean | undefined;
        for (var dnTestData of testDnTestData) {
            try { actual = x_g_inte_site_17.Site17Util.testDistinguishedName(dnTestData.value); }
            catch (e) {
                atfHelper.setFailed('Unexpected error while executing testDistinguishedName(' + JSON.stringify(dnTestData.value) + ')', e);
                return false;
            }
            assertEqual({
                name: 'testDistinguishedName(' + JSON.stringify(dnTestData.value) + ')',
                shouldbe: dnTestData.expected,
                value: actual
            });
        }
    
        for (var containedByTestData of dnContainedByTestData) {
            try { actual = x_g_inte_site_17.Site17Util.isDnContainedBy(containedByTestData.sourceDN, containedByTestData.containerDN); }
            catch (e) {
                atfHelper.setFailed('Unexpected error while executing isDnContainedBy(' + JSON.stringify(containedByTestData.sourceDN) + ', ' + JSON.stringify(containedByTestData.containerDN) + ')', e);
                return false;
            }
            assertEqual({
                name: 'isDnContainedBy(' + JSON.stringify(containedByTestData.sourceDN) + ', ' + JSON.stringify(containedByTestData.containerDN) + ')',
                shouldbe: containedByTestData.expected,
                value: actual
            });
        }
        return true;
    })(outputs, steps, stepResult, assertEqual);
}

namespace site17Util_IteratorFromArrayTest {
    declare var outputs: sn_atf.ITestStepOutputs;
    declare function steps(sys_id: string): sn_atf.ITestStepOutputs;
    declare var stepResult: sn_atf.ITestStepResult;
    declare function assertEqual(assertion: sn_atf.ITestAssertion): void;

    interface INextWithArg {
        value: string;
        arg: number;
    }

    interface ITestParams {
        iterations: (INextWithArg | string)[];
        supportsReturn?: boolean;
        finalReturnValue?: GlideDuration;
        onThrow?: GlideDuration | null;
    }

    interface IIteratorInfo {
        pseudoCode: string;
        iterator: Iterator<string, GlideDuration, number>;
        throwInvoked: boolean;
        thrown?: any;
    }

    (function(outputs: sn_atf.ITestStepOutputs, steps: sn_atf.ITestStepsFunc, stepResult: sn_atf.ITestStepResult, assertEqual: sn_atf.IAssertEqualFunc): boolean {
        var atfHelper: x_g_inte_site_17.AtfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);
        var zeroDuration = new GlideDuration('0 0:0:0');
        
        function createIterator(testParams: ITestParams, iteratorInfo: IIteratorInfo, prefix?: string): boolean {
            iteratorInfo.throwInvoked = false;
            iteratorInfo.thrown = undefined;
            var values = testParams.iterations.map(function(item: (INextWithArg | string)): string { return (typeof item === 'string') ? item : item.value; });
            if (typeof testParams.onThrow === 'undefined') {
                if (typeof testParams.finalReturnValue === 'undefined') {
                    if (typeof testParams.supportsReturn === 'undefined') {
                        iteratorInfo.pseudoCode = (typeof prefix === 'string') ? prefix + ': iteratorFromArray(' + JSON.stringify(values) + ')' :
                            'iteratorFromArray(' + JSON.stringify(values) + ')';
                        try {
                            iteratorInfo.iterator = x_g_inte_site_17.Site17Util.iteratorFromArray(values);
                        } catch (error) {
                            atfHelper.setFailed('Unexpected exception while invoking ' + iteratorInfo.pseudoCode, error);
                            return false;
                        }
                    } else {
                        iteratorInfo.pseudoCode = (typeof prefix === 'string') ? prefix + ': iteratorFromArray(' + JSON.stringify(values) + ', ' + testParams.supportsReturn + ')' :
                            'iteratorFromArray(' + JSON.stringify(values) + ', ' + testParams.supportsReturn + ')';
                        try {
                            iteratorInfo.iterator = x_g_inte_site_17.Site17Util.iteratorFromArray(values, testParams.supportsReturn);
                        } catch (error) {
                            atfHelper.setFailed('Unexpected exception while invoking ' + iteratorInfo.pseudoCode, error);
                            return false;
                        }
                    }
                } else {
                    if (typeof testParams.supportsReturn === 'undefined')
                        iteratorInfo.pseudoCode = (typeof prefix === 'string') ?
                            prefix + ': iteratorFromArray(' + JSON.stringify(values) + ', undefined, new GlideDuration("' + testParams.finalReturnValue.getDurationValue() + '"))' :
                            'iteratorFromArray(' + JSON.stringify(values) + ', undefined, new GlideDuration("' + testParams.finalReturnValue.getDurationValue() + '"))';
                    else
                        iteratorInfo.pseudoCode = (typeof prefix === 'string') ?
                            prefix + ': iteratorFromArray(' + JSON.stringify(values) + ', ' + testParams.supportsReturn + ', new GlideDuration("' + testParams.finalReturnValue.getDurationValue() +
                                '"))' :
                            'iteratorFromArray(' + JSON.stringify(values) + ', ' + testParams.supportsReturn + ', new GlideDuration("' + testParams.finalReturnValue.getDurationValue() + '"))';
                    try {
                        iteratorInfo.iterator = x_g_inte_site_17.Site17Util.iteratorFromArray(values, testParams.supportsReturn, testParams.finalReturnValue);
                    } catch (error) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + iteratorInfo.pseudoCode, error);
                        return false;
                    }
                }
            } else if (testParams.onThrow === null) {
                if (typeof testParams.finalReturnValue === 'undefined') {
                    if (typeof testParams.supportsReturn === 'undefined')
                        iteratorInfo.pseudoCode = (typeof prefix === 'string') ? prefix + ': iteratorFromArray(' + JSON.stringify(values) + ', undefined, undefined, (e)=>null)' :
                            'iteratorFromArray(' + JSON.stringify(values) + ', undefined, undefined, (e)=>null)';
                    else
                        iteratorInfo.pseudoCode = (typeof prefix === 'string') ?
                            prefix + ': iteratorFromArray(' + JSON.stringify(values) + ', ' + testParams.supportsReturn + ', undefined, (e)=>null)' :
                            'iteratorFromArray(' + JSON.stringify(values) + ', ' + testParams.supportsReturn + ', undefined, (e)=>null)';
                } else if (typeof testParams.supportsReturn === 'undefined')
                    iteratorInfo.pseudoCode = (typeof prefix === 'string') ?
                        prefix + ': iteratorFromArray(' + JSON.stringify(values) + ', undefined, new GlideDuration("' + testParams.finalReturnValue.getDurationValue() + '"), (e)=>null)' :
                        'iteratorFromArray(' + JSON.stringify(values) + ', undefined, new GlideDuration("' + testParams.finalReturnValue.getDurationValue() + '"), (e)=>null)';
                else
                    iteratorInfo.pseudoCode = (typeof prefix === 'string') ?
                        prefix + ': iteratorFromArray(' + JSON.stringify(values) + ', ' + testParams.supportsReturn + ', new GlideDuration("' + testParams.finalReturnValue.getDurationValue() +
                            '"), (e)=>null)' :
                        'iteratorFromArray(' + JSON.stringify(values) + ', ' + testParams.supportsReturn + ', new GlideDuration("' + testParams.finalReturnValue.getDurationValue() + '"), (e)=>null)';
                try {
	                iteratorInfo.iterator = x_g_inte_site_17.Site17Util.iteratorFromArray(values, testParams.supportsReturn, testParams.finalReturnValue, function(e?: any): GlideDuration | undefined {
	                    iteratorInfo.throwInvoked = true;
	                    iteratorInfo.thrown = e;
	                    return;
	                });
                } catch (error) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + iteratorInfo.pseudoCode, error);
                    return false;
                }
            } else {
                if (typeof testParams.finalReturnValue === 'undefined') {
                    if (typeof testParams.supportsReturn === 'undefined')
                        iteratorInfo.pseudoCode = (typeof prefix === 'string') ?
                            prefix + ': iteratorFromArray(' + JSON.stringify(values) + ', undefined, undefined, (e)=>new GlideDuration("' + testParams.onThrow.getDurationValue() + '"))' :
                            'iteratorFromArray(' + JSON.stringify(values) + ', undefined, undefined, (e)=>new GlideDuration("' + testParams.onThrow.getDurationValue() + '"))';
                    else
                        iteratorInfo.pseudoCode = (typeof prefix === 'string') ?
                            prefix + ': iteratorFromArray(' + JSON.stringify(values) + ', ' + testParams.supportsReturn + ', undefined, (e)=>new GlideDuration("' +
                                testParams.onThrow.getDurationValue() + '"))' :
                            'iteratorFromArray(' + JSON.stringify(values) + ', ' + testParams.supportsReturn + ', undefined, (e)=>new GlideDuration("' + testParams.onThrow.getDurationValue() + '"))';
                } else if (typeof testParams.supportsReturn === 'undefined')
                    iteratorInfo.pseudoCode = (typeof prefix === 'string') ?
                        prefix + ': iteratorFromArray(' + JSON.stringify(values) + ', undefined, new GlideDuration("' + testParams.finalReturnValue.getDurationValue() +
                            '"), (e)=>new GlideDuration("' + testParams.onThrow.getDurationValue() + '"))' :
                        'iteratorFromArray(' + JSON.stringify(values) + ', undefined, new GlideDuration("' + testParams.finalReturnValue.getDurationValue() + '"), (e)=>new GlideDuration("' +
                            testParams.onThrow.getDurationValue() + '"))';
                else
                    iteratorInfo.pseudoCode = (typeof prefix === 'string') ?
                        prefix + ': iteratorFromArray(' + JSON.stringify(values) + ', ' + testParams.supportsReturn + ', new GlideDuration("' + testParams.finalReturnValue.getDurationValue() +
                            '"), (e)=>new GlideDuration("' + testParams.onThrow.getDurationValue() + '"))' :
                        'iteratorFromArray(' + JSON.stringify(values) + ', ' + testParams.supportsReturn + ', new GlideDuration("' + testParams.finalReturnValue.getDurationValue() +
                            '"), (e)=>new GlideDuration("' + testParams.onThrow.getDurationValue() + '"))';
                try {
	                iteratorInfo.iterator = x_g_inte_site_17.Site17Util.iteratorFromArray(values, testParams.supportsReturn, testParams.finalReturnValue, function(e?: any): GlideDuration | undefined {
	                    iteratorInfo.throwInvoked = true;
	                    iteratorInfo.thrown = e;
	                    return <GlideDuration>testParams.onThrow;
	                });
                } catch (error) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + iteratorInfo.pseudoCode, error);
                    return false;
                }
            }
            assertEqual({
                name: 'typeof ' + iteratorInfo.pseudoCode,
                shouldbe: 'object',
                value: (iteratorInfo.iterator === null) ? 'null' : typeof iteratorInfo.iterator
            });
            assertEqual({
                name: 'typeof ' + iteratorInfo.pseudoCode + '.next',
                shouldbe: 'function',
                value: typeof iteratorInfo.iterator.next
            });
            if (testParams.supportsReturn === true)
                assertEqual({
                    name: 'typeof ' + iteratorInfo.pseudoCode + '.return',
                    shouldbe: 'function',
                    value: typeof iteratorInfo.iterator.return
                });
            if (typeof testParams.onThrow !== 'undefined')
                assertEqual({
                    name: 'typeof ' + iteratorInfo.pseudoCode + '.throw',
                    shouldbe: 'function',
                    value: typeof iteratorInfo.iterator.throw
                });
            return true;
        }

        function assertIteratorResult(pseudoCode: string, ir: IteratorResult<string, GlideDuration>, done: boolean, value?: string | GlideDuration): void {
            assertEqual({
                name: 'typeof ' + pseudoCode,
                shouldbe: 'object',
                value: (ir === null) ? 'null' : typeof ir
            });
            assertEqual({
                name: pseudoCode + '.done',
                shouldbe: done,
                value: ir.done === true
            });
            if (typeof value === 'undefined')
                assertEqual({
                    name: 'typeof ' + pseudoCode + '.value',
                    shouldbe: 'null',
                    value: (ir.value === null) ? 'null' : typeof ir.value
                });
            else if (typeof value === 'string')
                assertEqual({
                    name: pseudoCode + '.value',
                    shouldbe: value,
                    value: ir.value
                });
            else {
                assertEqual({
                    name: 'instanceof ' + pseudoCode + '.value',
                    shouldbe: 'GlideDuration',
                    value: (ir.value instanceof GlideDuration) ? 'GlideDuration' : (ir.value === null) ? 'null' : typeof ir.value
                });
                assertEqual({
                    name: pseudoCode + '.value',
                    shouldbe: value.getDurationValue(),
                    value: (<GlideDuration>ir.value).getDurationValue()
                });
            }
        }

        function testIterations(testParams: ITestParams, iteratorInfo: IIteratorInfo, limit?: number): boolean {
            var count = (typeof limit === 'number') ? limit : testParams.iterations.length;
            for (var i = 0; i < count; i++) {
                var item = testParams.iterations[i];
                var ir: IteratorResult<string, GlideDuration>;
                var pseudoCode: string;
                if (typeof item === 'string') {
                    pseudoCode = iteratorInfo.pseudoCode + '[' + i + '].next()';
                    try {
                        ir = iteratorInfo.iterator.next();
                    } catch (error) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, error);
                        return false;
                    }
                    assertIteratorResult(pseudoCode, ir, false, item);
                } else {
                    pseudoCode = iteratorInfo.pseudoCode + '[' + i + '].next(' + item.arg + ')';
                    try {
                        ir = iteratorInfo.iterator.next(item.arg);
                    } catch (error) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, error);
                        return false;
                    }
                    assertIteratorResult(pseudoCode, ir, false, item.value);
                }
            }
            return true;
        }

        function testIteratorFromArray(testParams: ITestParams): boolean {
            var iteratorInfo = <IIteratorInfo>{ };
            if (!(createIterator(testParams, iteratorInfo) && testIterations(testParams, iteratorInfo))) return false;
            var pseudoCode = iteratorInfo.pseudoCode + '[' + testParams.iterations.length + '].next()';
            var ir: IteratorResult<string, GlideDuration>;
            try {
                ir = iteratorInfo.iterator.next();
            } catch (error) {
                atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, error);
                return false;
            }
            assertIteratorResult(pseudoCode, ir, true, testParams.finalReturnValue);

            var limit = testParams.iterations.length - 1;
            if (testParams.supportsReturn === true) {
                if (!createIterator(testParams, iteratorInfo, "Return")) return false;
                pseudoCode = iteratorInfo.pseudoCode + '.return()';
                try {
                    ir = (<{ (value?: GlideDuration): IteratorResult<string, GlideDuration> }>iteratorInfo.iterator.return)();
                } catch (error) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, error);
                    return false;
                }
                assertIteratorResult(pseudoCode, ir, true);
                pseudoCode += '; next()';
                try {
                    ir = iteratorInfo.iterator.next();
                } catch (error) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, error);
                    return false;
                }
                assertIteratorResult(pseudoCode, ir, true);
                
                if (!createIterator(testParams, iteratorInfo, "Return")) return false;
                pseudoCode = iteratorInfo.pseudoCode + ".return(new GlideDuration('0 0:0:0'))";
                try {
                    ir = (<{ (value?: GlideDuration): IteratorResult<string, GlideDuration> }>iteratorInfo.iterator.return)(zeroDuration);
                } catch (error) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, error);
                    return false;
                }
                assertIteratorResult(pseudoCode, ir, true, zeroDuration);
                pseudoCode += '; next()';
                try {
                    ir = iteratorInfo.iterator.next();
                } catch (error) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, error);
                    return false;
                }
                assertIteratorResult(pseudoCode, ir, true, zeroDuration);

                if (limit > 0) {
                    if (!(createIterator(testParams, iteratorInfo, "Return") && testIterations(testParams, iteratorInfo, limit))) return false;
                    pseudoCode = iteratorInfo.pseudoCode + '[' + limit + '].return()';
                    try {
                        ir = (<{ (value?: GlideDuration): IteratorResult<string, GlideDuration> }>iteratorInfo.iterator.return)();
                    } catch (error) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, error);
                        return false;
                    }
                    assertIteratorResult(pseudoCode, ir, true);
                    pseudoCode += '; next()';
                    try {
                        ir = iteratorInfo.iterator.next();
                    } catch (error) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, error);
                        return false;
                    }
                    assertIteratorResult(pseudoCode, ir, true);

                    if (!(createIterator(testParams, iteratorInfo, "Return") && testIterations(testParams, iteratorInfo, limit))) return false;
                    pseudoCode = iteratorInfo.pseudoCode + '[' + limit + "].return(new GlideDuration('0 0:0:0'))";
                    try {
                        ir = (<{ (value?: GlideDuration): IteratorResult<string, GlideDuration> }>iteratorInfo.iterator.return)(zeroDuration);
                    } catch (error) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, error);
                        return false;
                    }
                    assertIteratorResult(pseudoCode, ir, true, zeroDuration);
                    pseudoCode += '; next()';
                    try {
                        ir = iteratorInfo.iterator.next();
                    } catch (error) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, error);
                        return false;
                    }
                    assertIteratorResult(pseudoCode, ir, true, zeroDuration);
                }
            }

            if (typeof testParams.onThrow === 'undefined') return true;
            
            if (!createIterator(testParams, iteratorInfo, "Throw")) return false;
            pseudoCode = iteratorInfo.pseudoCode + '.throw("Error!!!")';
            try {
                ir = (<{ (e?: any): IteratorResult<string, GlideDuration> }>iteratorInfo.iterator.throw)("Error!!!");
            } catch (error) {
                atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, error);
                return false;
            }
            if (testParams.onThrow === null)
                assertIteratorResult(pseudoCode, ir, true);
            else
                assertIteratorResult(pseudoCode, ir, true, testParams.onThrow);
            pseudoCode += '; next()';
            try {
                ir = iteratorInfo.iterator.next();
            } catch (error) {
                atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, error);
                return false;
            }
            if (testParams.onThrow === null)
                assertIteratorResult(pseudoCode, ir, true);
            else
                assertIteratorResult(pseudoCode, ir, true, testParams.onThrow);

            if (limit > 0) {
                if (!(createIterator(testParams, iteratorInfo, "Throw") && testIterations(testParams, iteratorInfo, limit))) return false;
                pseudoCode = iteratorInfo.pseudoCode + '[' + limit + '].throw("Error!!!")';
                try {
                    ir = (<{ (e?: any): IteratorResult<string, GlideDuration> }>iteratorInfo.iterator.throw)("Error!!!");
                } catch (error) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, error);
                    return false;
                }
                if (testParams.onThrow === null)
                    assertIteratorResult(pseudoCode, ir, true);
                else
                    assertIteratorResult(pseudoCode, ir, true, testParams.onThrow);
                pseudoCode += '; next()';
                try {
                    ir = iteratorInfo.iterator.next();
                } catch (error) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, error);
                    return false;
                }
                if (testParams.onThrow === null)
                    assertIteratorResult(pseudoCode, ir, true);
                else
                    assertIteratorResult(pseudoCode, ir, true, testParams.onThrow);
            }
            return true;
        }

        for (var tp of <ITestParams[]>[
            {
                iterations: []
            },
            {
                iterations: [],
                onThrow: new GlideDuration('0 4:23:3')
            },
            {
                iterations: [],
                onThrow: null
            },
            {
                iterations: [],
                supportsReturn: true
            },
            {
                iterations: [],
                supportsReturn: true,
                onThrow: new GlideDuration('1 2:27:0')
            },
            {
                iterations: [],
                supportsReturn: true,
                onThrow: null
            },
            {
                iterations: [],
                supportsReturn: false,
                finalReturnValue: new GlideDuration('1 4:47:52')
            },
            {
                iterations: [],
                supportsReturn: false,
                onThrow: new GlideDuration('0 4:19:43')
            },
            {
                iterations: [],
                supportsReturn: false,
                onThrow: null
            },
            {
                iterations: [],
                finalReturnValue: new GlideDuration('0 11:4:8')
            },
            {
                iterations: [],
                finalReturnValue: new GlideDuration('1 23:54:6'),
                onThrow: new GlideDuration('1 0:50:28')
            },
            {
                iterations: [],
                finalReturnValue: new GlideDuration('1 16:55:51'),
                onThrow: null
            },
            {
                iterations: [],
                supportsReturn: true,
                finalReturnValue: new GlideDuration('0 15:56:19')
            },
            {
                iterations: [],
                supportsReturn: true,
                finalReturnValue: new GlideDuration('0 22:58:10'),
                onThrow: new GlideDuration('0 15:2:8')
            },
            {
                iterations: [],
                supportsReturn: true,
                finalReturnValue: new GlideDuration('0 6:17:36'),
                onThrow: null
            },
            {
                iterations: [],
                supportsReturn: false,
                finalReturnValue: new GlideDuration('1 0:33:0')
            },
            {
                iterations: [],
                supportsReturn: false,
                finalReturnValue: new GlideDuration('0 13:56:9'),
                onThrow: new GlideDuration('0 17:44:15')
            },
            {
                iterations: [],
                supportsReturn: false,
                finalReturnValue: new GlideDuration('1 5:36:19'),
                onThrow: null
            },
            {
                iterations: [ 'dolor sit amet' ]
            },
            {
                iterations: [ { value: 'sed do', arg: 294 } ],
                onThrow: new GlideDuration('1 12:26:23')
            },
            {
                iterations: [ 'quis nostrud' ],
                onThrow: null
            },
            {
                iterations: [ 'nisi ut aliquip' ],
                supportsReturn: true
            },
            {
                iterations: [ { value: 'magna aliqua', arg: 374 } ],
                supportsReturn: true,
                onThrow: new GlideDuration('1 13:25:30')
            },
            {
                iterations: [ 'laborum.' ],
                supportsReturn: true,
                onThrow: null
            },
            {
                iterations: [ 'eu fugia' ],
                supportsReturn: false,
                finalReturnValue: new GlideDuration('1 18:17:0')
            },
            {
                iterations: [ { value: 'esse cillum dolore', arg: 809 } ],
                supportsReturn: false,
                onThrow: new GlideDuration('0 1:26:21')
            },
            {
                iterations: [ 'exercitation' ],
                supportsReturn: false,
                onThrow: null
            },
            {
                iterations: [ { value: 'dolor in reprehenderit', arg: 604 } ],
                finalReturnValue: new GlideDuration('0 5:12:20')
            },
            {
                iterations: [ 'mollit' ],
                finalReturnValue: new GlideDuration('1 6:5:25'),
                onThrow: new GlideDuration('1 7:9:47')
            },
            {
                iterations: [ 'sed do' ],
                finalReturnValue: new GlideDuration('0 20:43:28'),
                onThrow: null
            },
            {
                iterations: [ { value: 'Duis aute irure', arg: 112 } ],
                supportsReturn: true,
                finalReturnValue: new GlideDuration('0 15:56:41'),
            },
            {
                iterations: [ 'magna aliqua' ],
                supportsReturn: true,
                finalReturnValue: new GlideDuration('0 2:23:10'),
                onThrow: new GlideDuration('1 12:31:30')
            },
            {
                iterations: [ 'Ut enim' ],
                supportsReturn: true,
                finalReturnValue: new GlideDuration('0 22:55:57'),
                onThrow: null
            },
            {
                iterations: [ { value: 'Ut enim', arg: 327 } ],
                supportsReturn: false,
                finalReturnValue: new GlideDuration('1 14:20:13')
            },
            {
                iterations: [ { value: 'ullamco', arg: 500 } ],
                supportsReturn: false,
                finalReturnValue: new GlideDuration('1 23:48:30'),
                onThrow: new GlideDuration('0 11:36:19')
            },
            {
                iterations: [ 'Ut enim' ],
                supportsReturn: false,
                finalReturnValue: new GlideDuration('1 11:20:43'),
                onThrow: null
            },
            {
                iterations: [ { value: 'incididunt ut labore', arg: 793 }, 'Excepteur sint occaecat', { value: 'id', arg: 592 } ]
            },
            {
                iterations: [ 'eu fugia', { value: 'ad minim veniam', arg: 797 }, { value: 'dolor in reprehenderit', arg: 716 } ],
                onThrow: new GlideDuration('0 17:39:42')
            },
            {
                iterations: [ { value: 'Ut enim', arg: 979 }, 'et dolore', 'ad minim veniam' ],
                onThrow: null
            },
            {
                iterations: [ { value: 'ex ea commodo consequat', arg: 981 }, 'eiusmod tempor', 'mollit' ],
                supportsReturn: true
            },
            {
                iterations: [ 'ullamco', { value: 'Duis aute irure', arg: 138 }, 'Lorem ipsum' ],
                supportsReturn: true,
                onThrow: new GlideDuration('0 15:5:33')
            },
            {
                iterations: [ 'Duis aute irure', { value: 'laboris', arg: 883 }, { value: 'Lorem ipsum', arg: 1 } ],
                supportsReturn: true,
                onThrow: null
            },
            {
                iterations: [ 'mollit', { value: 'esse cillum dolore', arg: 482 }, { value: 'ad minim veniam', arg: 650 } ],
                supportsReturn: false,
                finalReturnValue: new GlideDuration('0 17:36:16')
            },
            {
                iterations: [ 'nisi ut aliquip', 'magna aliqua', { value: 'Excepteur sint occaecat', arg: 443 } ],
                supportsReturn: false,
                onThrow: new GlideDuration('1 10:18:17')
            },
            {
                iterations: [ { value: 'exercitation', arg: 906 }, { value: 'Lorem ipsum', arg: 409 }, 'quis nostrud' ],
                supportsReturn: false,
                onThrow: null
            },
            {
                iterations: [ 'eiusmod tempor', 'ullamco', { value: 'eiusmod tempor', arg: 804 } ],
                supportsReturn: undefined,
                finalReturnValue: new GlideDuration('1 12:19:1')
            },
            {
                iterations: [ { value: 'eu fugia', arg: 356 }, 'nulla pariatur', 'esse cillum dolore' ],
                finalReturnValue: new GlideDuration('0 4:19:34'),
                onThrow: new GlideDuration('0 7:7:9')
            },
            {
                iterations: [ 'est', { value: 'dolor in reprehenderit', arg: 85 }, 'qui officia deserunt' ],
                finalReturnValue: new GlideDuration('0 11:28:4'),
                onThrow: null
            },
            {
                iterations: [ { value: 'consectetur adipiscing elit', arg: 151 }, 'Lorem ipsum', 'laboris' ],
                supportsReturn: true,
                finalReturnValue: new GlideDuration('0 20:28:31')
            },
            {
                iterations: [ 'dolor sit amet', { value: 'mollit', arg: 246 }, { value: 'dolor sit amet', arg: 666 } ],
                supportsReturn: true,
                finalReturnValue: new GlideDuration('1 9:38:53'),
                onThrow: new GlideDuration('1 10:43:20')
            },
            {
                iterations: [ { value: 'quis nostrud', arg: 79 }, 'ullamco', { value: 'qui officia deserunt', arg: 850 } ],
                supportsReturn: true,
                finalReturnValue: new GlideDuration('1 17:34:40'),
                onThrow: null
            },
            {
                iterations: [ 'nisi ut aliquip', { value: 'exercitation', arg: 653 }, { value: 'incididunt ut labore', arg: 77 } ],
                supportsReturn: false,
                finalReturnValue: new GlideDuration('0 2:8:22'),
            },
            {
                iterations: [ { value: 'esse cillum dolore', arg: 503 }, 'id', { value: 'laboris', arg: 350 } ],
                supportsReturn: false,
                finalReturnValue: new GlideDuration('0 0:14:33'),
                onThrow: new GlideDuration('0 11:49:47')
            },
            {
                iterations: [ { value: 'in voluptate velit', arg: 908 }, 'mollit', 'ex ea commodo consequat' ],
                supportsReturn: false,
                finalReturnValue: new GlideDuration('0 21:46:3'),
                onThrow: null
            }
        ]) {
            try {
                if (!testIteratorFromArray(tp)) return false;
            } catch (error) {
                atfHelper.setFailed("Uncaught error", error);
                return false;
            }
        }
        return true;
    })(outputs, steps, stepResult, assertEqual);
}

namespace site17Util_ReiterateTest {
    declare var outputs: sn_atf.ITestStepOutputs;
    declare function steps(sys_id: string): sn_atf.ITestStepOutputs;
    declare var stepResult: sn_atf.ITestStepResult;
    declare function assertEqual(assertion: sn_atf.ITestAssertion): void;

    interface INextWithArg {
        value: string;
        arg: number;
    }

    interface ITargetInfo {
        pseudoCode: string;
        source: Iterator<string, GlideDuration, number>;
        iterator: Iterator<string, GlideDuration, number>;
        values: string[];
    }

    interface ITestParams {
        iterations: (string | INextWithArg)[];
        supportsReturn: boolean;
        hasThisArg: boolean;
        finalReturnValue?: GlideDuration;
        onThrow?: GlideDuration | null;
    }

    interface IThisObj {
        nextArgs: (number | undefined)[];
        reiterated: string[];
        throwCalled: boolean;
        thrown?: any;
    }

    (function(outputs: sn_atf.ITestStepOutputs, steps: sn_atf.ITestStepsFunc, stepResult: sn_atf.ITestStepResult, assertEqual: sn_atf.IAssertEqualFunc): boolean {
        var atfHelper: x_g_inte_site_17.AtfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);
        var zeroDuration = new GlideDuration('0 0:0:0');
        
        function createIterator(testParams: ITestParams, targetInfo: ITargetInfo, thisObj: IThisObj, prefix?: string): boolean {
            thisObj.nextArgs = [];
            thisObj.reiterated = [];
            thisObj.throwCalled = false;
            thisObj.thrown = undefined;
            targetInfo.values = testParams.iterations.map(function(item: string | INextWithArg): string { return (typeof item === 'string') ? item : item.value });
            if (testParams.hasThisArg) {
                if (typeof testParams.onThrow !== 'undefined') {
                    if (testParams.onThrow === null) {
                        targetInfo.source = x_g_inte_site_17.Site17Util.iteratorFromArray(targetInfo.values, testParams.supportsReturn, testParams.finalReturnValue, function(e?: any): GlideDuration | undefined { 
                            thisObj.throwCalled = true;
                            thisObj.thrown = e;
                            return;
                        });
                        if (typeof testParams.finalReturnValue !== 'undefined')
                            targetInfo.pseudoCode = (typeof prefix === 'string') ?
                                prefix + ': reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) +
                                    ', new GlideDuration("' + testParams.finalReturnValue.getDurationValue() + '"), (e)=>undefined), (value,...args)=>{...}, thisArg)' :
                                'reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) + ', new GlideDuration("' +
                                    testParams.finalReturnValue.getDurationValue() + '"), (e)=>undefined), (value,...args)=>{...}, thisArg)';
                        else
                            targetInfo.pseudoCode = (typeof prefix === 'string') ?
                                prefix + ': reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) +
                                    ', undefined, (e)=>undefined), (value,...args)=>{...}, thisArg)' :
                                'reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) +
                                    ', undefined, (e)=>undefined), (value,...args)=>{...}, thisArg)';
                    } else {
                        targetInfo.source = x_g_inte_site_17.Site17Util.iteratorFromArray(targetInfo.values, testParams.supportsReturn, testParams.finalReturnValue, function(e?: any): GlideDuration | undefined {
                            thisObj.throwCalled = true;
                            thisObj.thrown = e;
                            return <GlideDuration>testParams.onThrow;
                        });
                        if (typeof testParams.finalReturnValue !== 'undefined')
                            targetInfo.pseudoCode = (typeof prefix === 'string') ?
                                prefix + ': reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) +
                                    ', new GlideDuration("' + testParams.finalReturnValue.getDurationValue() + '"), (e)=>new GlideDuration("' + testParams.onThrow.getDurationValue() +
                                    '")), (value,...args)=>{...}, thisArg)' :
                                'reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) + ', new GlideDuration("' +
                                    testParams.finalReturnValue.getDurationValue() + '"), (e)=>new GlideDuration("' + testParams.onThrow.getDurationValue() + '")), (value,...args)=>{...}, thisArg)';
                        else
                            targetInfo.pseudoCode = (typeof prefix === 'string') ?
                                prefix + ': reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) +
                                    ', undefined, (e)=>new GlideDuration("' + testParams.onThrow.getDurationValue() + '")), (value,...args)=>{...}, thisArg)' :
                                'reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) +
                                    ', undefined, (e)=>new GlideDuration("' + testParams.onThrow.getDurationValue() + '")), (value,...args)=>{...}, thisArg)';
                    }
                } else if (typeof testParams.finalReturnValue !== 'undefined') {
                    targetInfo.source = x_g_inte_site_17.Site17Util.iteratorFromArray(targetInfo.values, testParams.supportsReturn, testParams.finalReturnValue);
                    targetInfo.pseudoCode = (typeof prefix === 'string') ?
                        prefix + ': reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) + ', new GlideDuration("' +
                            testParams.finalReturnValue.getDurationValue() + '")), (value,...args)=>{...}, thisArg)' :
                        'reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) + ', new GlideDuration("' +
                            testParams.finalReturnValue.getDurationValue() + '")), (value,...args)=>{...}, thisArg)';
                } else {
                    if (testParams.supportsReturn) {
                        targetInfo.source = x_g_inte_site_17.Site17Util.iteratorFromArray(targetInfo.values, testParams.supportsReturn);
                        targetInfo.pseudoCode = (typeof prefix === 'string') ?
                            prefix + ': reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) +
                                '), (value,...args)=>{...}, thisArg)' :
                            'reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) +
                                '), (value,...args)=>{...}, thisArg)';
                    } else {
                        targetInfo.source = x_g_inte_site_17.Site17Util.iteratorFromArray(targetInfo.values);
                        targetInfo.pseudoCode = (typeof prefix === 'string') ?
                            prefix + ': reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + '), (value,...args)=>{...}, thisArg)' :
                            'reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + '), (value,...args)=>{...}, thisArg)';
                    }
                }
                try {
                    targetInfo.iterator = x_g_inte_site_17.Site17Util.reiterate(targetInfo.source, function(this: IThisObj, value: string, next?: number, ...args: []) {
                        this.nextArgs.push(next);
                        this.reiterated.push(value);
                    }, thisObj);
                }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + targetInfo.pseudoCode, e);
                    return false;
                }
            } else {
                if (typeof testParams.onThrow !== 'undefined') {
                    if (testParams.onThrow === null) {
                        targetInfo.source = x_g_inte_site_17.Site17Util.iteratorFromArray(targetInfo.values, testParams.supportsReturn, testParams.finalReturnValue, function(e?: any): GlideDuration | undefined {
                            thisObj.throwCalled = true;
                            thisObj.thrown = e;
                            return;
                        });
                        if (typeof testParams.finalReturnValue !== 'undefined')
                            targetInfo.pseudoCode = (typeof prefix === 'string') ?
                                prefix + ': reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) +
                                    ', new GlideDuration("' + testParams.finalReturnValue.getDurationValue() + '"), (e)=>undefined), (value,...args)=>{...})' :
                                'reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) +
                                    ', new GlideDuration("' + testParams.finalReturnValue.getDurationValue() + '"), (e)=>undefined), (value,...args)=>{...})';
                        else
                            targetInfo.pseudoCode = (typeof prefix === 'string') ?
                                prefix + ': reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) +
                                    ', undefined, (e)=>undefined), (value,...args)=>{...})' :
                                'reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) +
                                    ', undefined, (e)=>undefined), (value,...args)=>{...})';
                    } else {
                        targetInfo.source = x_g_inte_site_17.Site17Util.iteratorFromArray(targetInfo.values, testParams.supportsReturn, testParams.finalReturnValue, function(e?: any): GlideDuration | undefined {
                            thisObj.throwCalled = true;
                            thisObj.thrown = e;
                            return <GlideDuration>testParams.onThrow;
                        });
                        if (typeof testParams.finalReturnValue !== 'undefined')
                            targetInfo.pseudoCode = (typeof prefix === 'string') ?
                                prefix + ': reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) +
                                    ', new GlideDuration("' + testParams.finalReturnValue.getDurationValue() + '"), (e)=>new GlideDuration("' + testParams.onThrow.getDurationValue() + '")), (value,...args)=>{...})' :
                                'reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) + ', new GlideDuration("' +
                                    testParams.finalReturnValue.getDurationValue() + '"), (e)=>new GlideDuration("' + testParams.onThrow.getDurationValue() + '")), (value,...args)=>{...})';
                        else
                            targetInfo.pseudoCode = (typeof prefix === 'string') ?
                                prefix + ': reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) +
                                    ', undefined, (e)=>new GlideDuration("' + testParams.onThrow.getDurationValue() + '")), (value,...args)=>{...})' :
                                'reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) +
                                    ', undefined, (e)=>new GlideDuration("' + testParams.onThrow.getDurationValue() + '")), (value,...args)=>{...})';
                    }
                } else if (typeof testParams.finalReturnValue !== 'undefined') {
                    targetInfo.source = x_g_inte_site_17.Site17Util.iteratorFromArray(targetInfo.values, testParams.supportsReturn, testParams.finalReturnValue);
                    targetInfo.pseudoCode = (typeof prefix === 'string') ?
                        prefix + ': reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) + ', new GlideDuration("' +
                            testParams.finalReturnValue.getDurationValue() + '")), (value,...args)=>{...})' :
                        'reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) + ', new GlideDuration("' +
                            testParams.finalReturnValue.getDurationValue() + '")), (value,...args)=>{...})';
                } else {
                    if (testParams.supportsReturn) {
                        targetInfo.source = x_g_inte_site_17.Site17Util.iteratorFromArray(targetInfo.values, testParams.supportsReturn);
                        targetInfo.pseudoCode = (typeof prefix === 'string') ?
                            prefix + ': reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) +
                                '), (value,...args)=>{...})' :
                            'reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) +
                                '), (value,...args)=>{...})';
                    } else {
                        targetInfo.source = x_g_inte_site_17.Site17Util.iteratorFromArray(targetInfo.values);
                        targetInfo.pseudoCode = (typeof prefix === 'string') ?
                            prefix + ': reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + '), (value,...args)=>{...})' :
                            'reiterate<string, GlideDuration, number>(iteratorFromArray(' + JSON.stringify(targetInfo.values) + '), (value,...args)=>{...})';
                    }
                }
                try {
                    targetInfo.iterator = x_g_inte_site_17.Site17Util.reiterate(targetInfo.source, function(value: string, next?: number, ...args: []) {
                        thisObj.nextArgs.push(next);
                        thisObj.reiterated.push(value);
                    });
                }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + targetInfo.pseudoCode, e);
                    return false;
                }
            }
            assertEqual({
                name: 'typeof ' + targetInfo.pseudoCode,
                shouldbe: 'object',
                value: (targetInfo.iterator === null) ? 'null' : typeof targetInfo.iterator
            });
            assertEqual({
                name: 'typeof ' + targetInfo.pseudoCode + 'next',
                shouldbe: 'function',
                value: typeof targetInfo.iterator.next
            });
            assertEqual({
                name: 'typeof ' + targetInfo.pseudoCode + 'return',
                shouldbe: testParams.supportsReturn ? 'function' : 'undefined',
                value: typeof targetInfo.iterator.return
            });
            assertEqual({
                name: 'typeof ' + targetInfo.pseudoCode + 'throw',
                shouldbe: (typeof testParams.onThrow !== 'undefined') ? 'function' : 'undefined',
                value: typeof targetInfo.iterator.throw
            });
            return true;
        }

        function assertIterationResult(pseudoCode: string, ir: IteratorResult<string, GlideDuration>, done: boolean, value?: string | GlideDuration): void {
            assertEqual({
                name: 'typeof ' + pseudoCode,
                shouldbe: 'object',
                value: (ir === null) ? 'null' : typeof ir
            });
            assertEqual({
                name: pseudoCode + '.done',
                shouldbe: done,
                value: ir.done === true
            });
            if (typeof value === 'undefined')
                assertEqual({
                    name: 'typeof ' + pseudoCode + '.value',
                    shouldbe: 'undefined',
                    value: (value === null) ? 'undefined' : typeof value
                });
            else if (typeof value === 'string')
                assertEqual({
                    name: pseudoCode + '.value',
                    shouldbe: value,
                    value: ir.value
                });
            else {
                assertEqual({
                    name: 'instanceof ' + pseudoCode + '.value',
                    shouldbe: 'GlideDuration',
                    value: (ir.value instanceof GlideDuration) ? 'GlideDuration' : (ir.value === null) ? 'null' : typeof ir.value
                });
                assertEqual({
                    name: pseudoCode + '.value',
                    shouldbe: value.getNumericValue(),
                    value: (<GlideDuration>ir.value).getNumericValue()
                });
            }
        }

        function assertIteratedValues(testParams: ITestParams, targetInfo: ITargetInfo, thisObj: IThisObj, pseudoCode: string, iterationCount?: number): void {
            var expectedValues: string[];
            var expectedIterated: (number | undefined)[];
            if (typeof iterationCount === 'number') {
                expectedIterated = [];
                expectedValues = []
                for (var i = 0; i < iterationCount; i++) {
                    var item: INextWithArg | string = testParams.iterations[i];
                    if (typeof item === 'string') {
                        expectedIterated.push(undefined);
                        expectedValues.push(item);
                    } else {
                        expectedIterated.push(item.arg);
                        expectedValues.push(item.value);
                    }
                }
            } else {
                expectedIterated = testParams.iterations.map(function(item: INextWithArg | string): number | undefined {
                    if (typeof item !== 'string')
                    return item.arg;
                });
                expectedValues = targetInfo.values;
            }
            assertEqual({
                name: pseudoCode + '; thisObj.nextArgs',
                shouldbe: JSON.stringify(expectedIterated.map(function(value?: number) { return (typeof value === 'undefined') ? 'undefined' : value.toString(); })),
                value: JSON.stringify(thisObj.nextArgs.map(function(value?: number) { return (typeof value === 'undefined') ? 'undefined' : value.toString(); }))
            });
            assertEqual({
                name: pseudoCode + '; thisObj.reiterated',
                shouldbe: JSON.stringify(expectedValues),
                value: JSON.stringify(thisObj.reiterated)
            });
        }

        function testIterations(testParams: ITestParams, targetInfo: ITargetInfo, limit?: number): boolean {
            var count = (typeof limit === 'number') ? limit : testParams.iterations.length;
            for (var idx = 0; idx < count; idx++) {
                var nextItem = testParams.iterations[idx];
                var iterationPseudoCode: string;
                var ir: IteratorResult<string, GlideDuration>;
                if (typeof nextItem === 'string') {
                    iterationPseudoCode = targetInfo.pseudoCode + '[' + idx + '].next()';
                    try {
                        ir = targetInfo.iterator.next();
                    } catch (e) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + iterationPseudoCode, e);
                        return false;
                    }
                    assertIterationResult(iterationPseudoCode, ir, false, nextItem);
                } else {
                    iterationPseudoCode = targetInfo.pseudoCode + '[' + idx + '].next(' + nextItem.arg + ')';
                    try {
                        ir = targetInfo.iterator.next(nextItem.arg);
                    } catch (e) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + iterationPseudoCode, e);
                        return false;
                    }
                    assertIterationResult(iterationPseudoCode, ir, false, nextItem.value);
                }
            }
            return true;
        }

        function testReiterate(testParams: ITestParams): boolean {
            var thisObj: IThisObj = {
                nextArgs: [],
                reiterated: [],
                throwCalled: false
            };
            var iteratorInfo = <ITargetInfo>{ };

            var ir: IteratorResult<string, GlideDuration>;
            if (!(createIterator(testParams, iteratorInfo, thisObj) && testIterations(testParams, iteratorInfo))) return false;
            var pseudoCode = iteratorInfo.pseudoCode + '[' + iteratorInfo.values.length + ']';
            try { ir = iteratorInfo.iterator.next(); }
            catch (e) {
                atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
                return false;
            }
            assertIterationResult(pseudoCode, ir, true, testParams.finalReturnValue);
            assertIteratedValues(testParams, iteratorInfo, thisObj, pseudoCode);

            if (!(createIterator(testParams, iteratorInfo, thisObj) && testIterations(testParams, iteratorInfo))) return false;
            try { ir = iteratorInfo.iterator.next(-1); }
            catch (e) {
                atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
                return false;
            }
            assertIterationResult(pseudoCode, ir, true, testParams.finalReturnValue);
            assertIteratedValues(testParams, iteratorInfo, thisObj, pseudoCode);

            var limit = testParams.iterations.length - 1;
            if (testParams.supportsReturn) {
                if (!createIterator(testParams, iteratorInfo, thisObj, "Return")) return false;
                pseudoCode = iteratorInfo.pseudoCode + '[0].return()';
                try { ir = (<{ (value?: GlideDuration): IteratorResult<string, GlideDuration>; }>iteratorInfo.iterator.return)(); }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
                    return false;
                }
                assertIterationResult(pseudoCode, ir, true);
                pseudoCode += '; next()';
                try { ir = iteratorInfo.iterator.next(); }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
                    return false;
                }
                assertIterationResult(pseudoCode, ir, true);
                assertIteratedValues(testParams, iteratorInfo, thisObj, pseudoCode, 0);
    
                if (!createIterator(testParams, iteratorInfo, thisObj, "Return")) return false;
                pseudoCode = iteratorInfo.pseudoCode + "[0].return(new GlideDuration('0 0:0:0'))";
                try { ir = (<{ (value?: GlideDuration): IteratorResult<string, GlideDuration>; }>iteratorInfo.iterator.return)(zeroDuration); }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
                    return false;
                }
                assertIterationResult(pseudoCode, ir, true, zeroDuration);
                pseudoCode += '; next(-1)';
                try { ir = iteratorInfo.iterator.next(-1); }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
                    return false;
                }
                assertIterationResult(pseudoCode, ir, true, zeroDuration);
                assertIteratedValues(testParams, iteratorInfo, thisObj, pseudoCode, 0);
                if (limit > 1) {
                    if (!(createIterator(testParams, iteratorInfo, thisObj, "Return") && testIterations(testParams, iteratorInfo, limit))) return false;
                    pseudoCode = iteratorInfo.pseudoCode + '[' + limit + '].return()';
                    try { ir = (<{ (value?: GlideDuration): IteratorResult<string, GlideDuration>; }>iteratorInfo.iterator.return)(); }
                    catch (e) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
                        return false;
                    }
                    assertIterationResult(pseudoCode, ir, true);
                    pseudoCode += '; next()';
                    try { ir = iteratorInfo.iterator.next(); }
                    catch (e) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
                        return false;
                    }
                    assertIterationResult(pseudoCode, ir, true);
                    assertIteratedValues(testParams, iteratorInfo, thisObj, pseudoCode, limit);
                    
                    if (!(createIterator(testParams, iteratorInfo, thisObj, "Return") && testIterations(testParams, iteratorInfo, limit))) return false;
                    pseudoCode = iteratorInfo.pseudoCode + '[' + limit + "].return(new GlideDuration('0 0:0:0'))";
                    try { ir = (<{ (value?: GlideDuration): IteratorResult<string, GlideDuration>; }>iteratorInfo.iterator.return)(zeroDuration); }
                    catch (e) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
                        return false;
                    }
                    assertIterationResult(pseudoCode, ir, true, zeroDuration);
                    pseudoCode += '; next()';
                    try { ir = iteratorInfo.iterator.next(); }
                    catch (e) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
                        return false;
                    }
                    assertIterationResult(pseudoCode, ir, true, zeroDuration);
                    assertIteratedValues(testParams, iteratorInfo, thisObj, pseudoCode, limit);
                }
            }

            if (typeof testParams.onThrow === 'undefined') return true;
            
            if (!createIterator(testParams, iteratorInfo, thisObj, "Throw")) return false;
            pseudoCode = iteratorInfo.pseudoCode + '.throw("Error!!!")';
            try {
                ir = (<{ (e?: any): IteratorResult<string, GlideDuration> }>iteratorInfo.iterator.throw)("Error!!!");
            } catch (error) {
                atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, error);
                return false;
            }
            if (testParams.onThrow === null)
                assertIterationResult(pseudoCode, ir, true);
            else
                assertIterationResult(pseudoCode, ir, true, testParams.onThrow);
            pseudoCode += '; next()';
            try {
                ir = iteratorInfo.iterator.next();
            } catch (error) {
                atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, error);
                return false;
            }
            if (testParams.onThrow === null)
                assertIterationResult(pseudoCode, ir, true);
            else
                assertIterationResult(pseudoCode, ir, true, testParams.onThrow);
            assertIteratedValues(testParams, iteratorInfo, thisObj, pseudoCode, 0);

            if (limit > 1) {
                if (!(createIterator(testParams, iteratorInfo, thisObj, "Throw") && testIterations(testParams, iteratorInfo, limit))) return false;
                pseudoCode = iteratorInfo.pseudoCode + '[' + limit + '].throw("Error!!!")';
                try {
                    ir = (<{ (value?: any): IteratorResult<string, GlideDuration> }>iteratorInfo.iterator.throw)("Error!!!");
                } catch (error) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, error);
                    return false;
                }
                if (testParams.onThrow === null)
                    assertIterationResult(pseudoCode, ir, true);
                else
                    assertIterationResult(pseudoCode, ir, true, testParams.onThrow);
                pseudoCode += '; next()';
                try {
                    ir = iteratorInfo.iterator.next();
                } catch (error) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, error);
                    return false;
                }
                if (testParams.onThrow === null)
                    assertIterationResult(pseudoCode, ir, true);
                else
                    assertIterationResult(pseudoCode, ir, true, testParams.onThrow);
                assertIteratedValues(testParams, iteratorInfo, thisObj, pseudoCode, limit);
            }

            return true;
        }

        for (var tp of <ITestParams[]>[
            {
                iterations: [],
                supportsReturn: false,
                hasThisArg: true
            },
            {
                iterations: [],
                supportsReturn: false,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('1 18:58:15')
            },
            {
                iterations: [],
                supportsReturn: true,
                hasThisArg: true
            },
            {
                iterations: [],
                supportsReturn: true,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('0 5:31:47')
            },
            {
                iterations: [],
                supportsReturn: false,
                hasThisArg: false
            },
            {
                iterations: [],
                supportsReturn: false,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('0 3:47:58')
            },
            {
                iterations: [],
                supportsReturn: true,
                hasThisArg: false
            },
            {
                iterations: [],
                supportsReturn: true,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('1 0:48:27')
            },
            {
                iterations: [],
                supportsReturn: false,
                hasThisArg: true,
                onThrow: new GlideDuration('1 11:1:16')
            },
            {
                iterations: [],
                supportsReturn: false,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('1 5:6:58'),
                onThrow: new GlideDuration('0 9:3:32')
            },
            {
                iterations: [],
                supportsReturn: true,
                hasThisArg: true,
                onThrow: new GlideDuration('1 0:12:32')
            },
            {
                iterations: [],
                supportsReturn: true,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('1 1:1:45'),
                onThrow: new GlideDuration('1 4:10:24')
            },
            {
                iterations: [],
                supportsReturn: false,
                hasThisArg: false,
                onThrow: new GlideDuration('0 22:9:58')
            },
            {
                iterations: [],
                supportsReturn: false,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('1 19:16:56'),
                onThrow: new GlideDuration('0 7:6:18')
            },
            {
                iterations: [],
                supportsReturn: true,
                hasThisArg: false,
                onThrow: new GlideDuration('1 16:25:20')
            },
            {
                iterations: [],
                supportsReturn: true,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('0 4:6:40'),
                onThrow: new GlideDuration('0 10:27:32')
            },
            {
                iterations: [],
                supportsReturn: false,
                hasThisArg: true,
                onThrow: null
            },
            {
                iterations: [],
                supportsReturn: false,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('0 6:19:47'),
                onThrow: null
            },
            {
                iterations: [],
                supportsReturn: true,
                hasThisArg: true,
                onThrow: null
            },
            {
                iterations: [],
                supportsReturn: true,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('0 19:17:3'),
                onThrow: null
            },
            {
                iterations: [],
                supportsReturn: false,
                hasThisArg: false,
                onThrow: null
            },
            {
                iterations: [],
                supportsReturn: false,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('0 2:42:6'),
                onThrow: null
            },
            {
                iterations: [],
                supportsReturn: true,
                hasThisArg: false,
                onThrow: null
            },
            {
                iterations: [],
                supportsReturn: true,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('1 18:1:14'),
                onThrow: null
            },
            {
                iterations: [ { value: 'dolor in reprehenderit', arg: 731 } ],
                supportsReturn: false,
                hasThisArg: true
            },
            {
                iterations: [ 'eu fugia' ],
                supportsReturn: false,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('1 22:42:26')
            },
            {
                iterations: [ 'et dolore' ],
                supportsReturn: true,
                hasThisArg: true
            },
            {
                iterations: [ 'sed do' ],
                supportsReturn: true,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('0 8:35:46')
            },
            {
                iterations: [ { value: 'nisi ut aliquip', arg: 806 } ],
                supportsReturn: false,
                hasThisArg: false
            },
            {
                iterations: [ { value: 'cupidatat non proident', arg: 347 } ],
                supportsReturn: false,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('0 10:9:55')
            },
            {
                iterations: [ 'est' ],
                supportsReturn: true,
                hasThisArg: false
            },
            {
                iterations: [ 'laborum.' ],
                supportsReturn: true,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('0 21:2:44')
            },
            {
                iterations: [ 'anim' ],
                supportsReturn: false,
                hasThisArg: true,
                onThrow: new GlideDuration('1 5:16:16')
            },
            {
                iterations: [ { value: 'consectetur adipiscing elit', arg: 44 } ],
                supportsReturn: false,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('1 8:3:6'),
                onThrow: new GlideDuration('1 17:19:43')
            },
            {
                iterations: [ { value: 'consectetur adipiscing elit', arg: 186 } ],
                supportsReturn: true,
                hasThisArg: true,
                onThrow: new GlideDuration('0 23:30:15')
            },
            {
                iterations: [ 'exercitation' ],
                supportsReturn: true,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('1 9:55:48'),
                onThrow: new GlideDuration('1 16:44:14')
            },
            {
                iterations: [ { value: 'et dolore', arg: 977 } ],
                supportsReturn: false,
                hasThisArg: false,
                onThrow: new GlideDuration('0 12:59:41')
            },
            {
                iterations: [ 'ullamco' ],
                supportsReturn: false,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('1 0:17:6'),
                onThrow: new GlideDuration('0 20:32:16')
            },
            {
                iterations: [ 'Ut enim' ],
                supportsReturn: true,
                hasThisArg: false,
                onThrow: new GlideDuration('0 16:11:43')
            },
            {
                iterations: [ { value: 'id', arg: 255 } ],
                supportsReturn: true,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('0 5:33:20'),
                onThrow: new GlideDuration('1 15:46:49')
            },
            {
                iterations: [ { value: 'eiusmod tempor', arg: 456 } ],
                supportsReturn: false,
                hasThisArg: true,
                onThrow: null
            },
            {
                iterations: [ 'dolor sit amet' ],
                supportsReturn: false,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('0 12:38:24'),
                onThrow: null
            },
            {
                iterations: [ 'incididunt ut labore' ],
                supportsReturn: true,
                hasThisArg: true,
                onThrow: null
            },
            {
                iterations: [ { value: 'magna aliqua', arg: 600 } ],
                supportsReturn: true,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('1 17:27:43'),
                onThrow: null
            },
            {
                iterations: [ 'ad minim veniam' ],
                supportsReturn: false,
                hasThisArg: false,
                onThrow: null
            },
            {
                iterations: [ 'exercitation' ],
                supportsReturn: false,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('1 6:44:12'),
                onThrow: null
            },
            {
                iterations: [ 'ullamco' ],
                supportsReturn: true,
                hasThisArg: false,
                onThrow: null
            },
            {
                iterations: [ { value: 'consectetur adipiscing elit', arg: 704 } ],
                supportsReturn: true,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('0 1:20:39'),
                onThrow: null
            },
            {
                iterations: [ { value: 'exercitation', arg: 181 }, 'sunt in culpa', { value: 'sunt in culpa', arg: 940 } ],
                supportsReturn: false,
                hasThisArg: true
            },
            {
                iterations: [ 'laborum.', 'cupidatat non proident', 'id' ],
                supportsReturn: false,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('0 10:28:14')
            },
            {
                iterations: [ { value: 'ex ea commodo consequat', arg: 910 }, { value: 'nulla pariatur', arg: 160 }, { value: 'esse cillum dolore', arg: 140 } ],
                supportsReturn: true,
                hasThisArg: true
            },
            {
                iterations: [ 'Lorem ipsum', { value: 'magna aliqua', arg: 557 }, { value: 'ullamco', arg: 759 } ],
                supportsReturn: true,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('0 1:5:0')
            },
            {
                iterations: [ 'in voluptate velit', 'anim', { value: 'ex ea commodo consequat', arg: 458 } ],
                supportsReturn: false,
                hasThisArg: false
            },
            {
                iterations: [ { value: 'ad minim veniam', arg: 276 }, { value: 'id', arg: 554 }, 'laboris' ],
                supportsReturn: false,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('0 20:15:58')
            },
            {
                iterations: [ { value: 'anim', arg: 804 }, 'Lorem ipsum', { value: 'dolor sit amet', arg: 735 } ],
                supportsReturn: true,
                hasThisArg: false
            },
            {
                iterations: [ 'quis nostrud', { value: 'Excepteur sint occaecat', arg: 566 }, 'nisi ut aliquip' ],
                supportsReturn: true,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('1 3:37:49')
            },
            {
                iterations: [ { value: 'Excepteur sint occaecat', arg: 89 }, 'sed do', { value: 'in voluptate velit', arg: 395 } ],
                supportsReturn: false,
                hasThisArg: true,
                onThrow: new GlideDuration('0 16:54:42')
            },
            {
                iterations: [ { value: 'mollit', arg: 530 }, { value: 'et dolore', arg: 470 }, { value: 'Duis aute irure', arg: 808 } ],
                supportsReturn: false,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('1 23:14:45'),
                onThrow: new GlideDuration('1 22:29:8')
            },
            {
                iterations: [ { value: 'ex ea commodo consequat', arg: 22 }, 'Duis aute irure', 'qui officia deserunt' ],
                supportsReturn: true,
                hasThisArg: true,
                onThrow: new GlideDuration('1 2:30:35')
            },
            {
                iterations: [ { value: 'Excepteur sint occaecat', arg: 202 }, { value: 'qui officia deserunt', arg: 311 }, 'qui officia deserunt' ],
                supportsReturn: true,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('1 22:32:29'),
                onThrow: new GlideDuration('0 4:53:2')
            },
            {
                iterations: [ 'eu fugia', 'ullamco', { value: 'dolor sit amet', arg: 16 } ],
                supportsReturn: false,
                hasThisArg: false,
                onThrow: new GlideDuration('1 1:21:58')
            },
            {
                iterations: [ { value: 'qui officia deserunt', arg: 872 }, { value: 'et dolore', arg: 758 }, 'ex ea commodo consequat' ],
                supportsReturn: false,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('1 23:1:50'),
                onThrow: new GlideDuration('0 4:37:55')
            },
            {
                iterations: [ { value: 'mollit', arg: 805 }, { value: 'consectetur adipiscing elit', arg: 45 }, { value: 'esse cillum dolore', arg: 733 } ],
                supportsReturn: true,
                hasThisArg: false,
                onThrow: new GlideDuration('1 20:27:35')
            },
            {
                iterations: [ { value: 'laboris', arg: 879 }, { value: 'laborum.', arg: 432 }, 'quis nostrud' ],
                supportsReturn: true,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('1 8:8:23'),
                onThrow: new GlideDuration('0 8:55:43')
            },
            {
                iterations: [ { value: 'est', arg: 220 }, 'ullamco', 'nulla pariatur' ],
                supportsReturn: false,
                hasThisArg: true,
                onThrow: null
            },
            {
                iterations: [ { value: 'Duis aute irure', arg: 443 }, { value: 'quis nostrud', arg: 332 }, 'sed do' ],
                supportsReturn: false,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('0 5:36:40'),
                onThrow: null
            },
            {
                iterations: [ 'in voluptate velit', { value: 'magna aliqua', arg: 743 }, 'quis nostrud' ],
                supportsReturn: true,
                hasThisArg: true,
                onThrow: null
            },
            {
                iterations: [ 'qui officia deserunt', { value: 'est', arg: 217 }, { value: 'cupidatat non proident', arg: 265 } ],
                supportsReturn: true,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('0 3:33:18'),
                onThrow: null
            },
            {
                iterations: [ { value: 'sunt in culpa', arg: 500 }, { value: 'esse cillum dolore', arg: 802 }, 'consectetur adipiscing elit' ],
                supportsReturn: false,
                hasThisArg: false,
                onThrow: null
            },
            {
                iterations: [ 'cupidatat non proident', 'ad minim veniam', 'exercitation' ],
                supportsReturn: false,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('0 5:19:8'),
                onThrow: null
            },
            {
                iterations: [ { value: 'dolor in reprehenderit', arg: 868 }, 'id', { value: 'ullamco', arg: 442 } ],
                supportsReturn: true,
                hasThisArg: false,
                onThrow: null
            },
            {
                iterations: [ 'esse cillum dolore', 'incididunt ut labore', { value: 'dolor sit amet', arg: 462 } ],
                supportsReturn: true,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('0 2:32:18'),
                onThrow: null
            }
        ]) {
            try {
                if (!testReiterate(tp)) return false;
            } catch (error) {
                atfHelper.setFailed("Uncaught error", error);
                return false;
            }
        }

        return true;
    })(outputs, steps, stepResult, assertEqual);
}

namespace site17Util_FilterIteratorTest {
    declare var outputs: sn_atf.ITestStepOutputs;
    declare function steps(sys_id: string): sn_atf.ITestStepOutputs;
    declare var stepResult: sn_atf.ITestStepResult;
    declare function assertEqual(assertion: sn_atf.ITestAssertion): void;

    interface INextWithArg {
        value: string;
        arg?: number;
    }

    interface IThisObj { nextArgs: (number | undefined)[]; }

    (function(outputs: sn_atf.ITestStepOutputs, steps: sn_atf.ITestStepsFunc, stepResult: sn_atf.ITestStepResult, assertEqual: sn_atf.IAssertEqualFunc): boolean {
        var atfHelper: x_g_inte_site_17.AtfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);

        var iterations: INextWithArg[] = [
            { value: "One" },
            { value: "Two", arg: 1 },
            { value: "", arg: 3 },
            { value: "Three", arg: 3 }
        ];
        var expected = iterations.filter(function(value: INextWithArg): boolean { return value.value.length > 0; });
        var expectedNextArgs = iterations.map(function(d: INextWithArg): number | undefined {
            return d.arg;
        });
        var values = iterations.map(function(value: INextWithArg): string { return value.value; });
        var source: Iterator<string, boolean, number> = x_g_inte_site_17.Site17Util.iteratorFromArray<string, boolean, number>(values, false, true);
        function predicate(this: IThisObj, value: string, arg?: number): boolean {
            this.nextArgs.push(arg);
            return value.length > 0;
        }
        var idx: number;
        var arg: number | undefined;
        var ir: IteratorResult<string, boolean>;
        var item: INextWithArg;
        var thisArg: IThisObj = { nextArgs: [] };
        var pseudoCode = 'filterIterator<string, boolean, number>(' + JSON.stringify(values) + '.iterator(), ' + JSON.stringify(predicate) + ', ' + JSON.stringify(thisArg) + ')';
        var iterator: Iterator<string, boolean, number>;
        try { iterator = x_g_inte_site_17.Site17Util.filterIterator<string, boolean, number>(source, predicate, thisArg); }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
            return false;
        }
        assertEqual({
            name: 'typeof ' + pseudoCode,
            shouldbe: 'object',
            value: (iterator === null) ? 'null' : typeof iterator
        });
        assertEqual({
            name: 'typeof ' + pseudoCode + '.next',
            shouldbe: 'function',
            value: typeof iterator.next
        });
        // assertEqual({
        //     name: 'typeof ' + pseudoCode + '.return',
        //     shouldbe: 'function',
        //     value: typeof iterator.return
        // });
        // assertEqual({
        //     name: 'typeof ' + pseudoCode + '.throw',
        //     shouldbe: 'function',
        //     value: typeof iterator.throw
        // });
        var iterationPseudoCode;
        for (idx = 0; idx < expected.length; idx++) {
            item = expected[idx];
            if (typeof item.arg === 'undefined') {
                iterationPseudoCode = pseudoCode + '[' + idx + '].next()';
                try {
                    ir = iterator.next();
                } catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + iterationPseudoCode, e);
                    return false;
                }
            } else {
                iterationPseudoCode = pseudoCode + '[' + idx + '].next(' + JSON.stringify(item.arg) + ')';
                try {
                    ir = iterator.next(item.arg);
                } catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + iterationPseudoCode, e);
                    return false;
                }
            }
            assertEqual({
                name: 'typeof ' + iterationPseudoCode,
                shouldbe: 'object',
                value: (ir === null) ? 'null' : typeof ir
            });
            assertEqual({
                name: iterationPseudoCode + '.done',
                shouldbe: true,
                value: ir.done !== true
            });
            assertEqual({
                name: iterationPseudoCode + '.value',
                shouldbe: item.value,
                value: ir.value
            });
        }
        iterationPseudoCode = pseudoCode + '[' + values.length + ']';
        try { ir = iterator.next(); }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + iterationPseudoCode, e);
            return false;
        }
        assertEqual({
            name: 'typeof ' + iterationPseudoCode,
            shouldbe: 'object',
            value: (ir === null) ? 'null' : typeof ir
        });
        assertEqual({
            name: pseudoCode + iterationPseudoCode + '.done',
            shouldbe: true,
            value: ir.done
        });
        assertEqual({
            name: pseudoCode + iterationPseudoCode + '.value',
            shouldbe: true,
            value: ir.value
        });
        assertEqual({
            name: pseudoCode + '; thisArg.nextArgs',
            shouldbe: expectedNextArgs.map(function(value: number | undefined): string { return (typeof value === 'undefined') ? 'undefined' : JSON.stringify(value); }).join(','),
            value: thisArg.nextArgs.map(function(value: number | undefined): string { return (typeof value === 'undefined') ? 'undefined' : JSON.stringify(value); }).join(',')
        });

        return true;
    })(outputs, steps, stepResult, assertEqual);
}

namespace site17Util_MapIteratorTest {
    declare var outputs: sn_atf.ITestStepOutputs;
    declare function steps(sys_id: string): sn_atf.ITestStepOutputs;
    declare var stepResult: sn_atf.ITestStepResult;
    declare function assertEqual(assertion: sn_atf.ITestAssertion): void;

    interface INextWithArg {
        value: number;
        expect: string;
        arg?: boolean | null;
    }

    interface IThisObj {
        nextArgs: (boolean | null | undefined)[];
    }

    (function(outputs: sn_atf.ITestStepOutputs, steps: sn_atf.ITestStepsFunc, stepResult: sn_atf.ITestStepResult, assertEqual: sn_atf.IAssertEqualFunc): boolean {
        var atfHelper: x_g_inte_site_17.AtfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);

        var iterations = <INextWithArg[]>[
            { value: 1, expect: 'True: 1', arg: true },
            { value: 2, expect: '(2)', arg: null },
            { value: 3, expect: '3' },
            { value: 5, expect: 'False: 5', arg: false },
            { value: 7, expect: '7' },
            { value: 11, expect: '11' }
        ];
        var values = iterations.map(function(d: INextWithArg): number {
            return d.value;
        });
        var expectedNextArgs = iterations.map(function(d: INextWithArg): boolean | null | undefined {
            return d.arg;
        });
        var source: Iterator<number, string, boolean | null> = x_g_inte_site_17.Site17Util.iteratorFromArray<number, string, boolean | null>(values, false, "Test 1");
        function mapper(this: IThisObj, value: number, arg?: boolean | null): string {
            this.nextArgs.push(arg);
            if (typeof arg === 'undefined') return value.toString();
            if (arg === null) return '(' + value + ')';
            if (arg) return 'True: ' + value;
            return 'False: ' + value;
        }
        var thisArg: IThisObj = { nextArgs: [] };
        var idx: number;
        var arg: boolean | null | undefined;
        var ir: IteratorResult<string, string>;
        var pseudoCode = 'mapIterator<number, string, string, boolean | null>(' + JSON.stringify(values) + '.iterator(), ' + JSON.stringify(mapper) + ', ' + JSON.stringify(thisArg) + ')';
        var iterator: Iterator<string, string,  boolean | null>;
        try { iterator = x_g_inte_site_17.Site17Util.mapIterator<number, string, string, boolean | null>(source, mapper, thisArg); }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
            return false;
        }
        assertEqual({
            name: 'typeof ' + pseudoCode,
            shouldbe: 'object',
            value: (iterator === null) ? 'null' : typeof iterator
        });
        assertEqual({
            name: 'typeof ' + pseudoCode + 'next',
            shouldbe: 'function',
            value: typeof iterator.next
        });
        assertEqual({
            name: 'typeof ' + pseudoCode + 'return',
            shouldbe: 'function',
            value: typeof iterator.return
        });
        assertEqual({
            name: 'typeof ' + pseudoCode + 'throw',
            shouldbe: 'function',
            value: typeof iterator.throw
        });
        var iterationPseudoCode;
        for (idx = 0; idx < values.length; idx++) {
            arg = iterations[idx].arg;
            if (typeof arg === 'undefined') {
                iterationPseudoCode = pseudoCode + '[' + idx + '].next()';
                try { ir = iterator.next(); }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + iterationPseudoCode, e);
                    return false;
                }
            } else {
                iterationPseudoCode = pseudoCode + '[' + idx + '].next(' + JSON.stringify(arg) + ')';
                try { ir = iterator.next(arg); }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + iterationPseudoCode, e);
                    return false;
                }
            }
            assertEqual({
                name: 'typeof ' + iterationPseudoCode,
                shouldbe: 'object',
                value: (ir === null) ? 'null' : typeof ir
            });
            assertEqual({
                name: iterationPseudoCode + '.done',
                shouldbe: true,
                value: ir.done !== true
            });
            assertEqual({
                name: iterationPseudoCode + '.value',
                shouldbe: iterations[idx].expect,
                value: ir.value
            });
        }
        iterationPseudoCode = pseudoCode + '[' + values.length + '].next()';
        try { ir = iterator.next(); }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + iterationPseudoCode, e);
            return false;
        }
        assertEqual({
            name: 'typeof ' + iterationPseudoCode,
            shouldbe: 'object',
            value: (ir === null) ? 'null' : typeof ir
        });
        assertEqual({
            name: pseudoCode + iterationPseudoCode + '.done',
            shouldbe: true,
            value: ir.done
        });
        assertEqual({
            name: pseudoCode + iterationPseudoCode + '.value',
            shouldbe: "Test 1",
            value: ir.value
        });
        assertEqual({
            name: pseudoCode + '; thisArg.nextArgs',
            shouldbe: expectedNextArgs.map(function(value: boolean | null | undefined): string { return (typeof value === 'undefined') ? 'undefined' : JSON.stringify(value); }).join(','),
            value: thisArg.nextArgs.map(function(value: boolean | null | undefined): string { return (typeof value === 'undefined') ? 'undefined' : JSON.stringify(value); }).join(',')
        });
        
        return true;
    })(outputs, steps, stepResult, assertEqual);
}

namespace site17Util_ReduceIteratorTest {
    declare var outputs: sn_atf.ITestStepOutputs;
    declare function steps(sys_id: string): sn_atf.ITestStepOutputs;
    declare var stepResult: sn_atf.ITestStepResult;
    declare function assertEqual(assertion: sn_atf.ITestAssertion): void;

    interface IThisObj { count: number; }

    (function(outputs: sn_atf.ITestStepOutputs, steps: sn_atf.ITestStepsFunc, stepResult: sn_atf.ITestStepResult, assertEqual: sn_atf.IAssertEqualFunc): boolean {
        var atfHelper: x_g_inte_site_17.AtfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);

        var values: GlideDuration[] = [
            new GlideDuration('1 0:0:0'),
            new GlideDuration('0 1:0:0'),
            new GlideDuration('0 0:1:0'),
            new GlideDuration('0 0:0:1')
        ];
        var source: Iterator<GlideDuration> = x_g_inte_site_17.Site17Util.iteratorFromArray<GlideDuration>(values);
        var initialValue: number = 0;
        function reducerFn(this: IThisObj, acc: number, cur: GlideDuration): number {
            this.count++;
            return cur.isValid() ? acc + cur.getNumericValue() : acc;
        }
        var thisArg: IThisObj = { count: 0 };
        var pseudoCode = 'reduceIterator<GlideDuration, number>(' + JSON.stringify(values) + '.iterator(), ' + initialValue + ', ' + JSON.stringify(reducerFn) + ', ' + JSON.stringify(thisArg) + ')';
        var aggregate: number;
        try { aggregate = x_g_inte_site_17.Site17Util.reduceIterator<GlideDuration, number>(source, initialValue, reducerFn, thisArg); }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
            return false;
        }
        assertEqual({
            name: pseudoCode,
            shouldbe: values.reduce<number>(function(previousValue: number, currentValue: GlideDuration): number { return currentValue.isValid() ? currentValue.getNumericValue() + previousValue : previousValue; }, 0),
            value: aggregate
        });
        assertEqual({
            name: pseudoCode + '; thisArg.count',
            shouldbe: values.length + 1,
            value: thisArg.count
        });

        source = x_g_inte_site_17.Site17Util.iteratorFromArray<GlideDuration>([]);
        initialValue = 7;
        thisArg.count = 0;
        pseudoCode = 'reduceIterator<GlideDuration, number>([].iterator(), ' + initialValue + ', ' + JSON.stringify(reducerFn) + ', ' + JSON.stringify(thisArg) + ')';
        try { aggregate = x_g_inte_site_17.Site17Util.reduceIterator<GlideDuration, number>(source, initialValue, reducerFn, thisArg); }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
            return false;
        }
        assertEqual({
            name: pseudoCode,
            shouldbe: initialValue,
            value: aggregate
        });
        assertEqual({
            name: pseudoCode + '; thisArg.count',
            shouldbe: 1,
            value: thisArg.count
        });

        return true;
    })(outputs, steps, stepResult, assertEqual);
}

namespace site17Util_FirstIteratedTest {
    declare var outputs: sn_atf.ITestStepOutputs;
    declare function steps(sys_id: string): sn_atf.ITestStepOutputs;
    declare var stepResult: sn_atf.ITestStepResult;
    declare function assertEqual(assertion: sn_atf.ITestAssertion): void;

    interface IThisObj { count: number; }

    (function(outputs: sn_atf.ITestStepOutputs, steps: sn_atf.ITestStepsFunc, stepResult: sn_atf.ITestStepResult, assertEqual: sn_atf.IAssertEqualFunc): boolean {
        var atfHelper: x_g_inte_site_17.AtfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);

        var values: number[] = [ 1, 2, 3, 5, 7, 11 ];
        var source: Iterator<number> = x_g_inte_site_17.Site17Util.iteratorFromArray(values);
        function predicate1(value: number): boolean { return value > 5; }
        var thisArg: IThisObj = { count: 0 };
        var first: number | undefined;
        var pseudoCode = 'firstIterated<number>(' + JSON.stringify(values) + '.iterator(), ' + JSON.stringify(predicate1) + ', ' + JSON.stringify(thisArg) + ')';
        try { first = x_g_inte_site_17.Site17Util.firstIterated<number>(source, predicate1, thisArg); }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
            return false;
        }
        assertEqual({
            name: pseudoCode,
            shouldbe: 7,
            value: first
        });
        assertEqual({
            name: pseudoCode + '; thisArg.count',
            shouldbe: values.length - 1,
            value: thisArg.count
        });

        function predicate2(value: number): boolean { return value > 11; }
        pseudoCode = 'firstIterated<number>(' + JSON.stringify(values) + '.iterator(), ' + JSON.stringify(predicate2) + ', ' + JSON.stringify(thisArg) + ')';
        source = x_g_inte_site_17.Site17Util.iteratorFromArray(values);
        thisArg.count = 0;
        try { first = x_g_inte_site_17.Site17Util.firstIterated<number>(source, predicate2, thisArg); }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
            return false;
        }
        assertEqual({
            name: pseudoCode,
            shouldbe: 'undefined',
            value: typeof first
        });
        assertEqual({
            name: pseudoCode + '; thisArg.count',
            shouldbe: values.length + 1,
            value: thisArg.count
        });

        return true;
    })(outputs, steps, stepResult, assertEqual);
}

namespace site17Util_firstIteratedOrDefault {
    declare var outputs: sn_atf.ITestStepOutputs;
    declare function steps(sys_id: string): sn_atf.ITestStepOutputs;
    declare var stepResult: sn_atf.ITestStepResult;
    declare function assertEqual(assertion: sn_atf.ITestAssertion): void;

    interface IThisObj { count: number; }

    (function(outputs: sn_atf.ITestStepOutputs, steps: sn_atf.ITestStepsFunc, stepResult: sn_atf.ITestStepResult, assertEqual: sn_atf.IAssertEqualFunc): boolean {
        var atfHelper: x_g_inte_site_17.AtfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);
        
        var values: number[] = [ 1, 2, 3, 5, 7, 11 ];
        var source: Iterator<number> = x_g_inte_site_17.Site17Util.iteratorFromArray(values);
        var ifEmptyValue = 13;
        function predicate1(value: number): boolean { return value < 1; }
        var thisArg: IThisObj = { count: 0 };
        var first: number | undefined;
        var pseudoCode = 'firstIterated<number>(' + JSON.stringify(values) + '.iterator(), ' + ifEmptyValue + ', ' + JSON.stringify(predicate1) + ', ' + JSON.stringify(thisArg) + ')';
        try { first = x_g_inte_site_17.Site17Util.firstIteratedOrDefault<number>(source, ifEmptyValue, predicate1, thisArg); }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
            return false;
        }
        assertEqual({
            name: pseudoCode,
            shouldbe: 13,
            value: first
        });
        assertEqual({
            name: pseudoCode,
            shouldbe: values.length + 1,
            value: thisArg.count
        });

        function predicate2(value: number): boolean { return value > 5; }
        pseudoCode = 'firstIterated<number>(' + JSON.stringify(values) + '.iterator(), ' + ifEmptyValue + ', ' + JSON.stringify(predicate2) + ', ' + JSON.stringify(thisArg) + ')';
        source = x_g_inte_site_17.Site17Util.iteratorFromArray(values);
        thisArg.count = 0;
        try { first = x_g_inte_site_17.Site17Util.firstIteratedOrDefault<number>(source, ifEmptyValue, predicate2, thisArg); }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
            return false;
        }
        assertEqual({
            name: pseudoCode,
            shouldbe: 7,
            value: first
        });
        assertEqual({
            name: pseudoCode,
            shouldbe: values.length - 1,
            value: thisArg.count
        });

        function ifEmptyFunc(): number { return 17; }
        thisArg.count = 0;
        pseudoCode = 'firstIterated<number>(' + JSON.stringify(values) + '.iterator(), ' + JSON.stringify(ifEmptyFunc) + ', ' + JSON.stringify(predicate1) + ', ' + JSON.stringify(thisArg) + ')';
        source = x_g_inte_site_17.Site17Util.iteratorFromArray(values);
        thisArg.count = 0;
        try { first = x_g_inte_site_17.Site17Util.firstIteratedOrDefault<number>(source, ifEmptyFunc, predicate1, thisArg); }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
            return false;
        }
        assertEqual({
            name: pseudoCode,
            shouldbe: 17,
            value: first
        });
        assertEqual({
            name: pseudoCode,
            shouldbe: values.length + 1,
            value: thisArg.count
        });

        return true;
    })(outputs, steps, stepResult, assertEqual);
}

namespace site17Util_LimitIteratorTest {
    declare var outputs: sn_atf.ITestStepOutputs;
    declare function steps(sys_id: string): sn_atf.ITestStepOutputs;
    declare var stepResult: sn_atf.ITestStepResult;
    declare function assertEqual(assertion: sn_atf.ITestAssertion): void;

    interface INextWithArg {
        value: number;
        arg?: boolean;
    }

    (function(outputs: sn_atf.ITestStepOutputs, steps: sn_atf.ITestStepsFunc, stepResult: sn_atf.ITestStepResult, assertEqual: sn_atf.IAssertEqualFunc): boolean {
        var atfHelper: x_g_inte_site_17.AtfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);

        var iterations: INextWithArg[] = [
            { value: 1 },
            { value: 2, arg: false },
            { value: 3 },
            { value: 4, arg: true }
        ];
        var values = iterations.map(function(value: INextWithArg): number { return value.value; });
        var source: Iterator<number, string, boolean> = x_g_inte_site_17.Site17Util.iteratorFromArray<number, string, boolean>(values, false, "Test 1");
        var count = 3;
        var iterator: Iterator<number, string, boolean>;
        var idx: number;
        var arg: boolean | undefined;
        var ir: IteratorResult<number, string>;
        var pseudoCode = 'limitIterator<number, string, boolean>(' + JSON.stringify(values) + '.iterator():= "Test 1", ' + count + ')';
        try { iterator = x_g_inte_site_17.Site17Util.limitIterator<number, string, boolean>(source, count); }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
            return false;
        }
        assertEqual({
            name: 'typeof ' + pseudoCode,
            shouldbe: 'object',
            value: (iterator === null) ? 'null' : typeof iterator
        });
        assertEqual({
            name: 'typeof ' + pseudoCode + 'next',
            shouldbe: 'function',
            value: typeof iterator.next
        });
        assertEqual({
            name: 'typeof ' + pseudoCode + 'return',
            shouldbe: 'function',
            value: typeof iterator.return
        });
        assertEqual({
            name: 'typeof ' + pseudoCode + 'throw',
            shouldbe: 'function',
            value: typeof iterator.throw
        });
        var iterationPseudoCode;
        for (idx = 0; idx < count; idx++) {
            arg = iterations[idx].arg;
            if (typeof arg === 'undefined') {
                iterationPseudoCode = pseudoCode + '[' + idx + '].next()';
                try { ir = iterator.next(); }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + iterationPseudoCode, e);
                    return false;
                }
            } else {
                iterationPseudoCode = pseudoCode + '[' + idx + '].next(' + JSON.stringify(arg) + ')';
                try { ir = iterator.next(arg); }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + iterationPseudoCode, e);
                    return false;
                }
            }
            assertEqual({
                name: 'typeof ' + iterationPseudoCode,
                shouldbe: 'object',
                value: (ir === null) ? 'null' : typeof ir
            });
            assertEqual({
                name: pseudoCode + iterationPseudoCode + '].done',
                shouldbe: true,
                value: ir.done !== true
            });
            assertEqual({
                name: pseudoCode + iterationPseudoCode + '].value',
                shouldbe: values[idx],
                value: ir.value
            });
        }
        iterationPseudoCode = pseudoCode + '[' + (count + 1) + '].next()';
        try { ir = iterator.next(); }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + iterationPseudoCode, e);
            return false;
        }
        assertEqual({
            name: 'typeof ' + iterationPseudoCode,
            shouldbe: 'object',
            value: (ir === null) ? 'null' : typeof ir
        });
        assertEqual({
            name: iterationPseudoCode + '.done',
            shouldbe: true,
            value: ir.done
        });
        assertEqual({
            name: iterationPseudoCode + '.value',
            shouldbe: "Test 1",
            value: ir.value
        });

        count = values.length + 1;
        pseudoCode = 'limitIterator<number, string, boolean>(' + JSON.stringify(values) + '.iterator():= "Test 2", ' + count + ')';
        source = x_g_inte_site_17.Site17Util.iteratorFromArray<number, string, boolean>(values, false, "Test 2");
        try { iterator = x_g_inte_site_17.Site17Util.limitIterator<number, string, boolean>(source, count); }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
            return false;
        }
        assertEqual({
            name: 'typeof ' + pseudoCode,
            shouldbe: 'object',
            value: (iterator === null) ? 'null' : typeof iterator
        });
        assertEqual({
            name: 'typeof ' + pseudoCode + 'next',
            shouldbe: 'function',
            value: typeof iterator.next
        });
        assertEqual({
            name: 'typeof ' + pseudoCode + 'return',
            shouldbe: 'function',
            value: typeof iterator.return
        });
        assertEqual({
            name: 'typeof ' + pseudoCode + 'throw',
            shouldbe: 'function',
            value: typeof iterator.throw
        });
        for (idx = 0; idx < values.length; idx++) {
            arg = iterations[idx].arg;
            if (typeof arg === 'undefined') {
                iterationPseudoCode = pseudoCode + '[' + idx + '].next()';
                try { ir = iterator.next(); }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + iterationPseudoCode, e);
                    return false;
                }
            } else {
                iterationPseudoCode = pseudoCode + '[' + idx + '].next(' + JSON.stringify(arg) + ')';
                try { ir = iterator.next(arg); }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + iterationPseudoCode, e);
                    return false;
                }
            }
            assertEqual({
                name: 'typeof ' + iterationPseudoCode,
                shouldbe: 'object',
                value: (ir === null) ? 'null' : typeof ir
            });
            assertEqual({
                name: pseudoCode + iterationPseudoCode + '].done',
                shouldbe: true,
                value: ir.done !== true
            });
            assertEqual({
                name: pseudoCode + iterationPseudoCode + '].value',
                shouldbe: values[idx],
                value: ir.value
            });
        }
        iterationPseudoCode = pseudoCode + '[' + values.length + '].next()';
        try { ir = iterator.next(); }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + iterationPseudoCode, e);
            return false;
        }
        assertEqual({
            name: 'typeof ' + iterationPseudoCode,
            shouldbe: 'object',
            value: (ir === null) ? 'null' : typeof ir
        });
        assertEqual({
            name: iterationPseudoCode + '.done',
            shouldbe: true,
            value: ir.done
        });
        assertEqual({
            name: iterationPseudoCode + '.value',
            shouldbe: "Test 2",
            value: ir.value
        });

        count = 0;
        pseudoCode = 'limitIterator<number, string, boolean>(' + JSON.stringify(values) + '.iterator(), ' + count + '):="Test3"';
        source = x_g_inte_site_17.Site17Util.iteratorFromArray<number, string, boolean>(values, false, "Test 3");
        try { iterator = x_g_inte_site_17.Site17Util.limitIterator<number, string, boolean>(source, count); }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
            return false;
        }
        assertEqual({
            name: 'typeof ' + pseudoCode,
            shouldbe: 'object',
            value: (iterator === null) ? 'null' : typeof iterator
        });
        assertEqual({
            name: 'typeof ' + pseudoCode + 'next',
            shouldbe: 'function',
            value: typeof iterator.next
        });
        assertEqual({
            name: 'typeof ' + pseudoCode + 'return',
            shouldbe: 'function',
            value: typeof iterator.return
        });
        assertEqual({
            name: 'typeof ' + pseudoCode + 'throw',
            shouldbe: 'function',
            value: typeof iterator.throw
        });
        iterationPseudoCode = pseudoCode + '[0].next()';
        try { ir = iterator.next(); }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + iterationPseudoCode, e);
            return false;
        }
        assertEqual({
            name: 'typeof ' + iterationPseudoCode,
            shouldbe: 'object',
            value: (ir === null) ? 'null' : typeof ir
        });
        assertEqual({
            name: iterationPseudoCode + '.done',
            shouldbe: true,
            value: ir.done
        });
        assertEqual({
            name: iterationPseudoCode + '.value',
            shouldbe: "Test 3",
            value: ir.value
        });

        return true;
    })(outputs, steps, stepResult, assertEqual);
}

namespace site17Util_IteratorToArrayTest {
    declare var outputs: sn_atf.ITestStepOutputs;
    declare function steps(sys_id: string): sn_atf.ITestStepOutputs;
    declare var stepResult: sn_atf.ITestStepResult;
    declare function assertEqual(assertion: sn_atf.ITestAssertion): void;

    (function(outputs: sn_atf.ITestStepOutputs, steps: sn_atf.ITestStepsFunc, stepResult: sn_atf.ITestStepResult, assertEqual: sn_atf.IAssertEqualFunc): boolean {
        var atfHelper: x_g_inte_site_17.AtfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);
        
        var values: number[] = [ 1, 2, 3, 5, 7, 11 ];
        var source: Iterator<number> = x_g_inte_site_17.Site17Util.iteratorFromArray(values);
        var limit = 3;
        var arr: number[];
        var idx: number;
        var pseudoCode = 'iteratorToArray<number>(' + JSON.stringify(values) + '.iterator(), ' + limit + ')';
        try { arr = x_g_inte_site_17.Site17Util.iteratorToArray<number>(source, limit); }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
            return false;
        }
        assertEqual({
            name: 'isArray(' + pseudoCode + ')',
            shouldbe: true,
            value: Array.isArray(arr)
        });
        assertEqual({
            name: pseudoCode,
            shouldbe: limit,
            value: arr.length
        });
        for (idx = 0; idx < limit; idx++) {
            assertEqual({
                name: pseudoCode + '[' + idx + ']',
                shouldbe: values[idx],
                value: arr[idx]
            });
        }

        limit = values.length + 1;
        pseudoCode = 'iteratorToArray<number>(' + JSON.stringify(values) + '.iterator(), ' + limit + ')';
        source = x_g_inte_site_17.Site17Util.iteratorFromArray(values);
        try { arr = x_g_inte_site_17.Site17Util.iteratorToArray<number>(source, limit); }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
            return false;
        }
        assertEqual({
            name: 'isArray(' + pseudoCode + ')',
            shouldbe: true,
            value: Array.isArray(arr)
        });
        assertEqual({
            name: pseudoCode,
            shouldbe: values.length,
            value: arr.length
        });
        for (idx = 0; idx < values.length; idx++) {
            assertEqual({
                name: pseudoCode + '[' + idx + ']',
                shouldbe: values[idx],
                value: arr[idx]
            });
        }

        limit = 0;
        pseudoCode = 'iteratorToArray<number>(' + JSON.stringify(values) + '.iterator(), ' + limit + ')';
        source = x_g_inte_site_17.Site17Util.iteratorFromArray(values);
        try { arr = x_g_inte_site_17.Site17Util.iteratorToArray<number>(source, limit); }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
            return false;
        }
        assertEqual({
            name: 'isArray(' + pseudoCode + ')',
            shouldbe: true,
            value: Array.isArray(arr)
        });
        assertEqual({
            name: pseudoCode,
            shouldbe: limit,
            value: arr.length
        });

        return true;
    })(outputs, steps, stepResult, assertEqual);
}

namespace site17Util_RecordTypesTest {
    declare var outputs: sn_atf.ITestStepOutputs;
    declare function steps(sys_id: string): sn_atf.ITestStepOutputs;
    declare var stepResult: sn_atf.ITestStepResult;
    declare function assertEqual(assertion: sn_atf.ITestAssertion): void;

    (function(outputs: sn_atf.ITestStepOutputs, steps: sn_atf.ITestStepsFunc, stepResult: sn_atf.ITestStepResult, assertEqual: sn_atf.IAssertEqualFunc): boolean {
        var atfHelper: x_g_inte_site_17.AtfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);
        return true;
    })(outputs, steps, stepResult, assertEqual);
}

namespace site17Util_isVipTest {
    declare var outputs: sn_atf.ITestStepOutputs;
    declare function steps(sys_id: string): sn_atf.ITestStepOutputs;
    declare var stepResult: sn_atf.ITestStepResult;
    declare function assertEqual(assertion: sn_atf.ITestAssertion): void;

    (function(outputs: sn_atf.ITestStepOutputs, steps: sn_atf.ITestStepsFunc, stepResult: sn_atf.ITestStepResult, assertEqual: sn_atf.IAssertEqualFunc): boolean {
        var atfHelper: x_g_inte_site_17.AtfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);
        return true;
    })(outputs, steps, stepResult, assertEqual);
}

namespace site17Util_RelatedRecordsTest {
    declare var outputs: sn_atf.ITestStepOutputs;
    declare function steps(sys_id: string): sn_atf.ITestStepOutputs;
    declare var stepResult: sn_atf.ITestStepResult;
    declare function assertEqual(assertion: sn_atf.ITestAssertion): void;

    (function(outputs: sn_atf.ITestStepOutputs, steps: sn_atf.ITestStepsFunc, stepResult: sn_atf.ITestStepResult, assertEqual: sn_atf.IAssertEqualFunc): boolean {
        var atfHelper: x_g_inte_site_17.AtfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);
        return true;
    })(outputs, steps, stepResult, assertEqual);
}
