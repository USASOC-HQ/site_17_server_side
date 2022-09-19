"use strict";
/// <reference path="../../../types/sn_typings_server_scoped/dist/index.d.ts" />
/// <reference path="../../../types/x_g_inte_site_17/table/index.d.ts" />
var site17Util_DistinguishedNameTest;
(function (site17Util_DistinguishedNameTest) {
    (function (outputs, steps, stepResult, assertEqual) {
        var atfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);
        var testDnTestData = [
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
        var dnContainedByTestData = [
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
        var returnValue;
        var pseudoCode;
        for (var _i = 0, testDnTestData_1 = testDnTestData; _i < testDnTestData_1.length; _i++) {
            var dnTestData = testDnTestData_1[_i];
            pseudoCode = 'testDistinguishedName(' + JSON.stringify(dnTestData.value) + ')';
            stepResult.setOutputMessage("Executing " + pseudoCode);
            try {
                returnValue = x_g_inte_site_17.Site17Util.testDistinguishedName(dnTestData.value);
            }
            catch (e) {
                atfHelper.setFailed('Unexpected error while executing ' + pseudoCode, e);
                return false;
            }
            stepResult.setOutputMessage("Executed " + pseudoCode);
            assertEqual({
                name: 'returnValue',
                shouldbe: dnTestData.expected,
                value: returnValue
            });
        }
        for (var _a = 0, dnContainedByTestData_1 = dnContainedByTestData; _a < dnContainedByTestData_1.length; _a++) {
            var containedByTestData = dnContainedByTestData_1[_a];
            pseudoCode = 'isDnContainedBy(' + JSON.stringify(containedByTestData.sourceDN) + ', ' + JSON.stringify(containedByTestData.containerDN) + ')';
            stepResult.setOutputMessage("Executing " + pseudoCode);
            try {
                returnValue = x_g_inte_site_17.Site17Util.isDnContainedBy(containedByTestData.sourceDN, containedByTestData.containerDN);
            }
            catch (e) {
                atfHelper.setFailed('Unexpected error while executing )' + pseudoCode, e);
                return false;
            }
            stepResult.setOutputMessage("Executed " + pseudoCode);
            assertEqual({
                name: 'returnValue',
                shouldbe: containedByTestData.expected,
                value: returnValue
            });
        }
        stepResult.setOutputMessage((testDnTestData.length + dnContainedByTestData.length) + ' assertions evaluated');
        return true;
    })(outputs, steps, stepResult, assertEqual);
})(site17Util_DistinguishedNameTest || (site17Util_DistinguishedNameTest = {}));
var site17Util_IteratorFromArrayTest;
(function (site17Util_IteratorFromArrayTest) {
    (function (outputs, steps, stepResult, assertEqual) {
        var atfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);
        var zeroDuration = new GlideDuration('0 0:0:0');
        function createIterator(testParams, iteratorInfo, prefix) {
            iteratorInfo.throwInvoked = false;
            iteratorInfo.thrown = undefined;
            var values = testParams.iterations.map(function (item) { return (typeof item === 'string') ? item : item.value; });
            if (typeof testParams.onThrow === 'undefined') {
                if (typeof testParams.finalReturnValue === 'undefined') {
                    if (typeof testParams.supportsReturn === 'undefined') {
                        iteratorInfo.pseudoCode = 'iteratorFromArray(' + JSON.stringify(values) + ')';
                        stepResult.setOutputMessage(((typeof prefix === 'string') ? prefix + ": Executing " : "Executing ") + iteratorInfo.pseudoCode);
                        try {
                            iteratorInfo.iterator = x_g_inte_site_17.Site17Util.iteratorFromArray(values);
                        }
                        catch (error) {
                            atfHelper.setFailed('Unexpected exception while invoking ' + iteratorInfo.pseudoCode, error);
                            return false;
                        }
                    }
                    else {
                        iteratorInfo.pseudoCode = 'iteratorFromArray(' + JSON.stringify(values) + ', ' + testParams.supportsReturn + ')';
                        stepResult.setOutputMessage(((typeof prefix === 'string') ? prefix + ": Executing " : "Executing ") + iteratorInfo.pseudoCode);
                        try {
                            iteratorInfo.iterator = x_g_inte_site_17.Site17Util.iteratorFromArray(values, testParams.supportsReturn);
                        }
                        catch (error) {
                            atfHelper.setFailed('Unexpected exception while invoking ' + iteratorInfo.pseudoCode, error);
                            return false;
                        }
                    }
                }
                else {
                    if (typeof testParams.supportsReturn === 'undefined')
                        iteratorInfo.pseudoCode = 'iteratorFromArray(' + JSON.stringify(values) + ', undefined, new GlideDuration("' + testParams.finalReturnValue.getDurationValue() + '"))';
                    else
                        iteratorInfo.pseudoCode = 'iteratorFromArray(' + JSON.stringify(values) + ', ' + testParams.supportsReturn + ', new GlideDuration("' + testParams.finalReturnValue.getDurationValue() + '"))';
                    stepResult.setOutputMessage(((typeof prefix === 'string') ? prefix + ": Executing " : "Executing ") + iteratorInfo.pseudoCode);
                    try {
                        iteratorInfo.iterator = x_g_inte_site_17.Site17Util.iteratorFromArray(values, testParams.supportsReturn, testParams.finalReturnValue);
                    }
                    catch (error) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + iteratorInfo.pseudoCode, error);
                        return false;
                    }
                }
            }
            else if (testParams.onThrow === null) {
                if (typeof testParams.finalReturnValue === 'undefined') {
                    if (typeof testParams.supportsReturn === 'undefined')
                        iteratorInfo.pseudoCode = 'iteratorFromArray(' + JSON.stringify(values) + ', undefined, undefined, (e)=>null)';
                    else
                        iteratorInfo.pseudoCode = 'iteratorFromArray(' + JSON.stringify(values) + ', ' + testParams.supportsReturn + ', undefined, (e)=>null)';
                }
                else if (typeof testParams.supportsReturn === 'undefined')
                    iteratorInfo.pseudoCode = 'iteratorFromArray(' + JSON.stringify(values) + ', undefined, new GlideDuration("' + testParams.finalReturnValue.getDurationValue() + '"), (e)=>null)';
                else
                    iteratorInfo.pseudoCode = 'iteratorFromArray(' + JSON.stringify(values) + ', ' + testParams.supportsReturn + ', new GlideDuration("' + testParams.finalReturnValue.getDurationValue() + '"), (e)=>null)';
                stepResult.setOutputMessage(((typeof prefix === 'string') ? prefix + ": Executing " : "Executing ") + iteratorInfo.pseudoCode);
                try {
                    iteratorInfo.iterator = x_g_inte_site_17.Site17Util.iteratorFromArray(values, testParams.supportsReturn, testParams.finalReturnValue, function (e) {
                        iteratorInfo.throwInvoked = true;
                        iteratorInfo.thrown = e;
                        return;
                    });
                }
                catch (error) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + iteratorInfo.pseudoCode, error);
                    return false;
                }
            }
            else {
                if (typeof testParams.finalReturnValue === 'undefined') {
                    if (typeof testParams.supportsReturn === 'undefined')
                        iteratorInfo.pseudoCode = 'iteratorFromArray(' + JSON.stringify(values) + ', undefined, undefined, (e)=>new GlideDuration("' + testParams.onThrow.getDurationValue() + '"))';
                    else
                        iteratorInfo.pseudoCode = 'iteratorFromArray(' + JSON.stringify(values) + ', ' + testParams.supportsReturn + ', undefined, (e)=>new GlideDuration("' + testParams.onThrow.getDurationValue() + '"))';
                }
                else if (typeof testParams.supportsReturn === 'undefined')
                    iteratorInfo.pseudoCode = 'iteratorFromArray(' + JSON.stringify(values) + ', undefined, new GlideDuration("' + testParams.finalReturnValue.getDurationValue() + '"), (e)=>new GlideDuration("' +
                        testParams.onThrow.getDurationValue() + '"))';
                else
                    iteratorInfo.pseudoCode = 'iteratorFromArray(' + JSON.stringify(values) + ', ' + testParams.supportsReturn + ', new GlideDuration("' + testParams.finalReturnValue.getDurationValue() +
                        '"), (e)=>new GlideDuration("' + testParams.onThrow.getDurationValue() + '"))';
                stepResult.setOutputMessage(((typeof prefix === 'string') ? prefix + ": Executing " : "Executing ") + iteratorInfo.pseudoCode);
                try {
                    iteratorInfo.iterator = x_g_inte_site_17.Site17Util.iteratorFromArray(values, testParams.supportsReturn, testParams.finalReturnValue, function (e) {
                        iteratorInfo.throwInvoked = true;
                        iteratorInfo.thrown = e;
                        return testParams.onThrow;
                    });
                }
                catch (error) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + iteratorInfo.pseudoCode, error);
                    return false;
                }
            }
            stepResult.setOutputMessage(((typeof prefix === 'string') ? prefix + ": Executed " : "Executed ") + iteratorInfo.pseudoCode);
            assertEqual({
                name: 'typeof iterator',
                shouldbe: 'object',
                value: (iteratorInfo.iterator === null) ? 'null' : typeof iteratorInfo.iterator
            });
            assertEqual({
                name: 'typeof iterator.next',
                shouldbe: 'function',
                value: typeof iteratorInfo.iterator.next
            });
            iteratorInfo.assertionCount += 2;
            if (testParams.supportsReturn === true) {
                assertEqual({
                    name: 'typeof iterator.return',
                    shouldbe: 'function',
                    value: typeof iteratorInfo.iterator["return"]
                });
                iteratorInfo.assertionCount++;
            }
            if (typeof testParams.onThrow !== 'undefined') {
                assertEqual({
                    name: 'typeof iterator.throw',
                    shouldbe: 'function',
                    value: typeof iteratorInfo.iterator["throw"]
                });
                iteratorInfo.assertionCount++;
            }
            return true;
        }
        function assertIteratorResult(iterationResult, done, value) {
            assertEqual({
                name: 'typeof iterationResult',
                shouldbe: 'object',
                value: (iterationResult === null) ? 'null' : typeof iterationResult
            });
            assertEqual({
                name: 'iterationResult.done',
                shouldbe: done,
                value: iterationResult.done === true
            });
            if (typeof value === 'undefined')
                assertEqual({
                    name: 'typeof iterationResult.value',
                    shouldbe: 'null',
                    value: (iterationResult.value === null) ? 'null' : typeof iterationResult.value
                });
            else if (typeof value === 'string')
                assertEqual({
                    name: 'iterationResult.value',
                    shouldbe: value,
                    value: iterationResult.value
                });
            else {
                assertEqual({
                    name: 'instanceof iterationResult.value',
                    shouldbe: 'GlideDuration',
                    value: (iterationResult.value instanceof GlideDuration) ? 'GlideDuration' : (iterationResult.value === null) ? 'null' : typeof iterationResult.value
                });
                assertEqual({
                    name: 'iterationResult.value',
                    shouldbe: value.getDurationValue(),
                    value: iterationResult.value.getDurationValue()
                });
                return 4;
            }
            return 3;
        }
        function testIterations(testParams, iteratorInfo, limit, prefix) {
            var count = (typeof limit === 'number') ? limit : testParams.iterations.length;
            for (var i = 0; i < count; i++) {
                var item = testParams.iterations[i];
                var iterationResult;
                var pseudoCode;
                if (typeof item === 'string') {
                    pseudoCode = iteratorInfo.pseudoCode + ";\niterator.next() // iteration: " + i;
                    stepResult.setOutputMessage(((typeof prefix === 'string') ? prefix + ": Executing " : "Executing ") + pseudoCode);
                    try {
                        iterationResult = iteratorInfo.iterator.next();
                    }
                    catch (error) {
                        atfHelper.setFailed('Unexpected exception while invoking iterator.next()', error);
                        return false;
                    }
                    iteratorInfo.assertionCount += assertIteratorResult(iterationResult, false, item);
                }
                else {
                    pseudoCode = iteratorInfo.pseudoCode + ";\niterator.next(" + item.arg + ") // iteration: " + i;
                    stepResult.setOutputMessage(((typeof prefix === 'string') ? prefix + ": Executing " : "Executing ") + pseudoCode);
                    try {
                        iterationResult = iteratorInfo.iterator.next(item.arg);
                    }
                    catch (error) {
                        atfHelper.setFailed("Unexpected exception while invoking next(" + item.arg + ")", error);
                        return false;
                    }
                    iteratorInfo.assertionCount += assertIteratorResult(iterationResult, false, item.value);
                }
                stepResult.setOutputMessage(((typeof prefix === 'string') ? prefix + ": Executed " : "Executed ") + pseudoCode);
            }
            return true;
        }
        function testIteratorFromArray(testParams) {
            var iteratorInfo = { assertionCount: 0, throwInvoked: false };
            if (!(createIterator(testParams, iteratorInfo) && testIterations(testParams, iteratorInfo)))
                return -1;
            var pseudoCode = iteratorInfo.pseudoCode + ";\niterator.next(); // iteration: " + testParams.iterations.length;
            var iterationResult;
            stepResult.setOutputMessage("Executing " + pseudoCode);
            try {
                iterationResult = iteratorInfo.iterator.next();
            }
            catch (error) {
                atfHelper.setFailed('Unexpected exception while invoking iterator.next()', error);
                return -1;
            }
            stepResult.setOutputMessage("Executed " + pseudoCode);
            iteratorInfo.assertionCount += assertIteratorResult(iterationResult, true, testParams.finalReturnValue);
            var limit = testParams.iterations.length - 1;
            if (testParams.supportsReturn === true) {
                if (!createIterator(testParams, iteratorInfo, "Return"))
                    return -1;
                pseudoCode = iteratorInfo.pseudoCode + ";\niterator.return(); // iteration: 0";
                stepResult.setOutputMessage("Return: Executing " + pseudoCode);
                try {
                    iterationResult = iteratorInfo.iterator["return"]();
                }
                catch (error) {
                    atfHelper.setFailed('Unexpected exception while invoking iterator.return()', error);
                    return -1;
                }
                stepResult.setOutputMessage("Return: Executed " + pseudoCode);
                iteratorInfo.assertionCount += assertIteratorResult(iterationResult, true);
                pseudoCode = iteratorInfo.pseudoCode + ";\niterator.return();\niterator.next(); // iteration: 0";
                stepResult.setOutputMessage("Return: Executing " + pseudoCode);
                try {
                    iterationResult = iteratorInfo.iterator.next();
                }
                catch (error) {
                    atfHelper.setFailed('Unexpected exception while invoking iterator.next()', error);
                    return -1;
                }
                stepResult.setOutputMessage("Return: Executed " + pseudoCode);
                iteratorInfo.assertionCount += assertIteratorResult(iterationResult, true);
                if (!createIterator(testParams, iteratorInfo, "Return"))
                    return -1;
                pseudoCode = iteratorInfo.pseudoCode + ";\niterator.return(new GlideDuration('0 0:0:0')); // iteration: 0";
                stepResult.setOutputMessage("Return: Executing " + pseudoCode);
                try {
                    iterationResult = iteratorInfo.iterator["return"](zeroDuration);
                }
                catch (error) {
                    atfHelper.setFailed("Unexpected exception while invoking iterator.return(new GlideDuration('0 0:0:0'))", error);
                    return -1;
                }
                stepResult.setOutputMessage("Return: Executed " + pseudoCode);
                iteratorInfo.assertionCount += assertIteratorResult(iterationResult, true, zeroDuration);
                pseudoCode = iteratorInfo.pseudoCode + ";\niterator.return(new GlideDuration('0 0:0:0'));\niterator.next(); // iteration: 0";
                stepResult.setOutputMessage("Return: Executing " + pseudoCode);
                try {
                    iterationResult = iteratorInfo.iterator.next();
                }
                catch (error) {
                    atfHelper.setFailed('Unexpected exception while invoking iterator.next()', error);
                    return -1;
                }
                stepResult.setOutputMessage("Return: Executed " + pseudoCode);
                iteratorInfo.assertionCount += assertIteratorResult(iterationResult, true, zeroDuration);
                if (limit > 0) {
                    if (!(createIterator(testParams, iteratorInfo, "Return") && testIterations(testParams, iteratorInfo, limit, "Return")))
                        return -1;
                    pseudoCode = iteratorInfo.pseudoCode + ";\niterator.return(); // iteration: " + limit;
                    stepResult.setOutputMessage("Return: Executing " + pseudoCode);
                    try {
                        iterationResult = iteratorInfo.iterator["return"]();
                    }
                    catch (error) {
                        atfHelper.setFailed('Unexpected exception while invoking iterator.return()', error);
                        return -1;
                    }
                    stepResult.setOutputMessage("Return: Executed " + pseudoCode);
                    iteratorInfo.assertionCount += assertIteratorResult(iterationResult, true);
                    pseudoCode = iteratorInfo.pseudoCode + ";\niterator.return();\niterator.next(); // iteration: " + limit;
                    stepResult.setOutputMessage("Return: Executing " + pseudoCode);
                    try {
                        iterationResult = iteratorInfo.iterator.next();
                    }
                    catch (error) {
                        atfHelper.setFailed('Unexpected exception while invoking iterator.next()', error);
                        return -1;
                    }
                    stepResult.setOutputMessage("Return: Executed " + pseudoCode);
                    iteratorInfo.assertionCount += assertIteratorResult(iterationResult, true);
                    if (!(createIterator(testParams, iteratorInfo, "Return") && testIterations(testParams, iteratorInfo, limit, "Return")))
                        return -1;
                    pseudoCode = iteratorInfo.pseudoCode + ";\niterator.return(new GlideDuration('0 0:0:0')); // iteration: " + limit;
                    stepResult.setOutputMessage("Return: Executing " + pseudoCode);
                    try {
                        iterationResult = iteratorInfo.iterator["return"](zeroDuration);
                    }
                    catch (error) {
                        atfHelper.setFailed("Unexpected exception while invoking iterator.return(new GlideDuration('0 0:0:0'))", error);
                        return -1;
                    }
                    stepResult.setOutputMessage("Return: Executed " + pseudoCode);
                    iteratorInfo.assertionCount += assertIteratorResult(iterationResult, true, zeroDuration);
                    pseudoCode = iteratorInfo.pseudoCode + ";\niterator.return(new GlideDuration('0 0:0:0'));\niterator.next(); // iteration: " + limit;
                    stepResult.setOutputMessage("Return: Executing " + pseudoCode);
                    try {
                        iterationResult = iteratorInfo.iterator.next();
                    }
                    catch (error) {
                        atfHelper.setFailed('Unexpected exception while invoking iterator.next()', error);
                        return -1;
                    }
                    stepResult.setOutputMessage("Return: Executed " + pseudoCode);
                    iteratorInfo.assertionCount += assertIteratorResult(iterationResult, true, zeroDuration);
                }
            }
            if (typeof testParams.onThrow === 'undefined') {
                stepResult.setOutputMessage('All assertions evaluated');
                return iteratorInfo.assertionCount;
            }
            if (!createIterator(testParams, iteratorInfo, "Throw"))
                return -1;
            pseudoCode = iteratorInfo.pseudoCode + ";\niterator.throw(\"Error!!!\"); // iteration: 0";
            stepResult.setOutputMessage("Throw: Executing " + pseudoCode);
            try {
                iterationResult = iteratorInfo.iterator["throw"]("Error!!!");
            }
            catch (error) {
                atfHelper.setFailed('Unexpected exception while invoking iterator.throw("Error!!!")', error);
                return -1;
            }
            stepResult.setOutputMessage("Throw: Executed " + pseudoCode);
            if (testParams.onThrow === null)
                iteratorInfo.assertionCount += assertIteratorResult(iterationResult, true);
            else
                iteratorInfo.assertionCount += assertIteratorResult(iterationResult, true, testParams.onThrow);
            pseudoCode = iteratorInfo.pseudoCode + ";\niterator.throw(\"Error!!!\");\niterator.next(); // iteration: 0";
            stepResult.setOutputMessage("Throw: Executing " + pseudoCode);
            try {
                iterationResult = iteratorInfo.iterator.next();
            }
            catch (error) {
                atfHelper.setFailed('Unexpected exception while invoking iterator.next()', error);
                return -1;
            }
            stepResult.setOutputMessage("Throw: Executed " + pseudoCode);
            if (testParams.onThrow === null)
                iteratorInfo.assertionCount += assertIteratorResult(iterationResult, true);
            else
                iteratorInfo.assertionCount += assertIteratorResult(iterationResult, true, testParams.onThrow);
            if (limit > 0) {
                if (!(createIterator(testParams, iteratorInfo, "Throw") && testIterations(testParams, iteratorInfo, limit, "Throw")))
                    return -1;
                pseudoCode = iteratorInfo.pseudoCode + ";\niterator.throw(\"Error!!!\"); // iteration: " + limit;
                stepResult.setOutputMessage("Throw: Executing " + pseudoCode);
                try {
                    iterationResult = iteratorInfo.iterator["throw"]("Error!!!");
                }
                catch (error) {
                    atfHelper.setFailed('Unexpected exception while invoking iterator.throw("Error!!!")', error);
                    return -1;
                }
                stepResult.setOutputMessage("Throw: Executed " + pseudoCode);
                if (testParams.onThrow === null)
                    iteratorInfo.assertionCount += assertIteratorResult(iterationResult, true);
                else
                    iteratorInfo.assertionCount += assertIteratorResult(iterationResult, true, testParams.onThrow);
                pseudoCode = iteratorInfo.pseudoCode + ";\niterator.throw(\"Error!!!\");\niterator.next(); // iteration: " + limit;
                stepResult.setOutputMessage("Throw: Executing " + pseudoCode);
                try {
                    iterationResult = iteratorInfo.iterator.next();
                }
                catch (error) {
                    atfHelper.setFailed('Unexpected exception while invoking iterator.next()', error);
                    return -1;
                }
                stepResult.setOutputMessage("Throw: Executed " + pseudoCode);
                if (testParams.onThrow === null)
                    iteratorInfo.assertionCount += assertIteratorResult(iterationResult, true);
                else
                    iteratorInfo.assertionCount += assertIteratorResult(iterationResult, true, testParams.onThrow);
            }
            stepResult.setOutputMessage('All assertions evaluated');
            return iteratorInfo.assertionCount;
        }
        var totalAssertionCount = 0;
        for (var _i = 0, _a = [
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
                iterations: ['dolor sit amet']
            },
            {
                iterations: [{ value: 'sed do', arg: 294 }],
                onThrow: new GlideDuration('1 12:26:23')
            },
            {
                iterations: ['quis nostrud'],
                onThrow: null
            },
            {
                iterations: ['nisi ut aliquip'],
                supportsReturn: true
            },
            {
                iterations: [{ value: 'magna aliqua', arg: 374 }],
                supportsReturn: true,
                onThrow: new GlideDuration('1 13:25:30')
            },
            {
                iterations: ['laborum.'],
                supportsReturn: true,
                onThrow: null
            },
            {
                iterations: ['eu fugia'],
                supportsReturn: false,
                finalReturnValue: new GlideDuration('1 18:17:0')
            },
            {
                iterations: [{ value: 'esse cillum dolore', arg: 809 }],
                supportsReturn: false,
                onThrow: new GlideDuration('0 1:26:21')
            },
            {
                iterations: ['exercitation'],
                supportsReturn: false,
                onThrow: null
            },
            {
                iterations: [{ value: 'dolor in reprehenderit', arg: 604 }],
                finalReturnValue: new GlideDuration('0 5:12:20')
            },
            {
                iterations: ['mollit'],
                finalReturnValue: new GlideDuration('1 6:5:25'),
                onThrow: new GlideDuration('1 7:9:47')
            },
            {
                iterations: ['sed do'],
                finalReturnValue: new GlideDuration('0 20:43:28'),
                onThrow: null
            },
            {
                iterations: [{ value: 'Duis aute irure', arg: 112 }],
                supportsReturn: true,
                finalReturnValue: new GlideDuration('0 15:56:41')
            },
            {
                iterations: ['magna aliqua'],
                supportsReturn: true,
                finalReturnValue: new GlideDuration('0 2:23:10'),
                onThrow: new GlideDuration('1 12:31:30')
            },
            {
                iterations: ['Ut enim'],
                supportsReturn: true,
                finalReturnValue: new GlideDuration('0 22:55:57'),
                onThrow: null
            },
            {
                iterations: [{ value: 'Ut enim', arg: 327 }],
                supportsReturn: false,
                finalReturnValue: new GlideDuration('1 14:20:13')
            },
            {
                iterations: [{ value: 'ullamco', arg: 500 }],
                supportsReturn: false,
                finalReturnValue: new GlideDuration('1 23:48:30'),
                onThrow: new GlideDuration('0 11:36:19')
            },
            {
                iterations: ['Ut enim'],
                supportsReturn: false,
                finalReturnValue: new GlideDuration('1 11:20:43'),
                onThrow: null
            },
            {
                iterations: [{ value: 'incididunt ut labore', arg: 793 }, 'Excepteur sint occaecat', { value: 'id', arg: 592 }]
            },
            {
                iterations: ['eu fugia', { value: 'ad minim veniam', arg: 797 }, { value: 'dolor in reprehenderit', arg: 716 }],
                onThrow: new GlideDuration('0 17:39:42')
            },
            {
                iterations: [{ value: 'Ut enim', arg: 979 }, 'et dolore', 'ad minim veniam'],
                onThrow: null
            },
            {
                iterations: [{ value: 'ex ea commodo consequat', arg: 981 }, 'eiusmod tempor', 'mollit'],
                supportsReturn: true
            },
            {
                iterations: ['ullamco', { value: 'Duis aute irure', arg: 138 }, 'Lorem ipsum'],
                supportsReturn: true,
                onThrow: new GlideDuration('0 15:5:33')
            },
            {
                iterations: ['Duis aute irure', { value: 'laboris', arg: 883 }, { value: 'Lorem ipsum', arg: 1 }],
                supportsReturn: true,
                onThrow: null
            },
            {
                iterations: ['mollit', { value: 'esse cillum dolore', arg: 482 }, { value: 'ad minim veniam', arg: 650 }],
                supportsReturn: false,
                finalReturnValue: new GlideDuration('0 17:36:16')
            },
            {
                iterations: ['nisi ut aliquip', 'magna aliqua', { value: 'Excepteur sint occaecat', arg: 443 }],
                supportsReturn: false,
                onThrow: new GlideDuration('1 10:18:17')
            },
            {
                iterations: [{ value: 'exercitation', arg: 906 }, { value: 'Lorem ipsum', arg: 409 }, 'quis nostrud'],
                supportsReturn: false,
                onThrow: null
            },
            {
                iterations: ['eiusmod tempor', 'ullamco', { value: 'eiusmod tempor', arg: 804 }],
                supportsReturn: undefined,
                finalReturnValue: new GlideDuration('1 12:19:1')
            },
            {
                iterations: [{ value: 'eu fugia', arg: 356 }, 'nulla pariatur', 'esse cillum dolore'],
                finalReturnValue: new GlideDuration('0 4:19:34'),
                onThrow: new GlideDuration('0 7:7:9')
            },
            {
                iterations: ['est', { value: 'dolor in reprehenderit', arg: 85 }, 'qui officia deserunt'],
                finalReturnValue: new GlideDuration('0 11:28:4'),
                onThrow: null
            },
            {
                iterations: [{ value: 'consectetur adipiscing elit', arg: 151 }, 'Lorem ipsum', 'laboris'],
                supportsReturn: true,
                finalReturnValue: new GlideDuration('0 20:28:31')
            },
            {
                iterations: ['dolor sit amet', { value: 'mollit', arg: 246 }, { value: 'dolor sit amet', arg: 666 }],
                supportsReturn: true,
                finalReturnValue: new GlideDuration('1 9:38:53'),
                onThrow: new GlideDuration('1 10:43:20')
            },
            {
                iterations: [{ value: 'quis nostrud', arg: 79 }, 'ullamco', { value: 'qui officia deserunt', arg: 850 }],
                supportsReturn: true,
                finalReturnValue: new GlideDuration('1 17:34:40'),
                onThrow: null
            },
            {
                iterations: ['nisi ut aliquip', { value: 'exercitation', arg: 653 }, { value: 'incididunt ut labore', arg: 77 }],
                supportsReturn: false,
                finalReturnValue: new GlideDuration('0 2:8:22')
            },
            {
                iterations: [{ value: 'esse cillum dolore', arg: 503 }, 'id', { value: 'laboris', arg: 350 }],
                supportsReturn: false,
                finalReturnValue: new GlideDuration('0 0:14:33'),
                onThrow: new GlideDuration('0 11:49:47')
            },
            {
                iterations: [{ value: 'in voluptate velit', arg: 908 }, 'mollit', 'ex ea commodo consequat'],
                supportsReturn: false,
                finalReturnValue: new GlideDuration('0 21:46:3'),
                onThrow: null
            }
        ]; _i < _a.length; _i++) {
            var tp = _a[_i];
            try {
                var c = testIteratorFromArray(tp);
                if (c < 0)
                    return false;
                totalAssertionCount += c;
            }
            catch (error) {
                atfHelper.setFailed("Uncaught error", error);
                return false;
            }
        }
        stepResult.setOutputMessage(totalAssertionCount + ' assertions evaluated');
        return true;
    })(outputs, steps, stepResult, assertEqual);
})(site17Util_IteratorFromArrayTest || (site17Util_IteratorFromArrayTest = {}));
var site17Util_ReiterateTest;
(function (site17Util_ReiterateTest) {
    (function (outputs, steps, stepResult, assertEqual) {
        var atfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);
        var zeroDuration = new GlideDuration('0 0:0:0');
        function createIterator(testParams, iteratorInfo, thisObj, prefix) {
            thisObj.nextArgs = [];
            thisObj.reiterated = [];
            thisObj.throwCalled = false;
            thisObj.thrown = undefined;
            var pseudoCode;
            iteratorInfo.values = testParams.iterations.map(function (item) { return (typeof item === 'string') ? item : item.value; });
            if (testParams.hasThisArg) {
                if (typeof testParams.onThrow !== 'undefined') {
                    if (testParams.onThrow === null) {
                        if (typeof testParams.finalReturnValue !== 'undefined') {
                            pseudoCode = 'iteratorFromArray(' + JSON.stringify(iteratorInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) + ', new GlideDuration("' +
                                testParams.finalReturnValue.getDurationValue() + '"), (e)=>undefined)';
                            iteratorInfo.pseudoCode = 'reiterate<string, GlideDuration, number>(' + pseudoCode + ', (value,...args)=>{...}, thisArg)';
                        }
                        else {
                            pseudoCode = 'iteratorFromArray(' + JSON.stringify(iteratorInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) + ', undefined, (e)=>undefined)';
                            iteratorInfo.pseudoCode = 'reiterate<string, GlideDuration, number>(' + pseudoCode + ', (value,...args)=>{...}, thisArg)';
                        }
                        stepResult.setOutputMessage(((typeof prefix === 'string') ? "Executing " : prefix + ": Executing ") + pseudoCode);
                        iteratorInfo.source = x_g_inte_site_17.Site17Util.iteratorFromArray(iteratorInfo.values, testParams.supportsReturn, testParams.finalReturnValue, function (e) {
                            thisObj.throwCalled = true;
                            thisObj.thrown = e;
                            return;
                        });
                    }
                    else {
                        if (typeof testParams.finalReturnValue !== 'undefined') {
                            pseudoCode = 'iteratorFromArray(' + JSON.stringify(iteratorInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) + ', new GlideDuration("' +
                                testParams.finalReturnValue.getDurationValue() + '"), (e)=>new GlideDuration("' + testParams.onThrow.getDurationValue() + '"))';
                            iteratorInfo.pseudoCode = 'reiterate<string, GlideDuration, number>(' + pseudoCode + ', (value,...args)=>{...}, thisArg)';
                        }
                        else {
                            pseudoCode = 'iteratorFromArray(' + JSON.stringify(iteratorInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) + ', undefined, (e)=>new GlideDuration("' +
                                testParams.onThrow.getDurationValue() + '"))';
                            iteratorInfo.pseudoCode = 'reiterate<string, GlideDuration, number>(' + pseudoCode + ', (value,...args)=>{...}, thisArg)';
                        }
                        stepResult.setOutputMessage(((typeof prefix === 'string') ? "Executing " : prefix + ": Executing ") + pseudoCode);
                        iteratorInfo.source = x_g_inte_site_17.Site17Util.iteratorFromArray(iteratorInfo.values, testParams.supportsReturn, testParams.finalReturnValue, function (e) {
                            thisObj.throwCalled = true;
                            thisObj.thrown = e;
                            return testParams.onThrow;
                        });
                    }
                }
                else if (typeof testParams.finalReturnValue !== 'undefined') {
                    pseudoCode = 'iteratorFromArray(' + JSON.stringify(iteratorInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) + ', new GlideDuration("' +
                        testParams.finalReturnValue.getDurationValue() + '"))';
                    iteratorInfo.pseudoCode = 'reiterate<string, GlideDuration, number>(' + pseudoCode + ', (value,...args)=>{...}, thisArg)';
                    stepResult.setOutputMessage(((typeof prefix === 'string') ? "Executing " : prefix + ": Executing ") + pseudoCode);
                    iteratorInfo.source = x_g_inte_site_17.Site17Util.iteratorFromArray(iteratorInfo.values, testParams.supportsReturn, testParams.finalReturnValue);
                }
                else {
                    if (testParams.supportsReturn) {
                        pseudoCode = 'iteratorFromArray(' + JSON.stringify(iteratorInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) + ')';
                        stepResult.setOutputMessage(((typeof prefix === 'string') ? "Executing " : prefix + ": Executing ") + pseudoCode);
                        iteratorInfo.source = x_g_inte_site_17.Site17Util.iteratorFromArray(iteratorInfo.values, testParams.supportsReturn);
                        iteratorInfo.pseudoCode = 'reiterate<string, GlideDuration, number>(' + pseudoCode + ', (value,...args)=>{...}, thisArg)';
                    }
                    else {
                        pseudoCode = 'iteratorFromArray(' + JSON.stringify(iteratorInfo.values) + ')';
                        iteratorInfo.pseudoCode = 'reiterate<string, GlideDuration, number>(' + pseudoCode + ', (value,...args)=>{...}, thisArg)';
                        stepResult.setOutputMessage(((typeof prefix === 'string') ? "Executing " : prefix + ": Executing ") + pseudoCode);
                        iteratorInfo.source = x_g_inte_site_17.Site17Util.iteratorFromArray(iteratorInfo.values);
                    }
                }
                stepResult.setOutputMessage(((typeof prefix === 'string') ? "Executing " : prefix + ": Executing ") + iteratorInfo.pseudoCode);
                try {
                    iteratorInfo.iterator = x_g_inte_site_17.Site17Util.reiterate(iteratorInfo.source, function (value, next) {
                        var args = [];
                        for (var _i = 2; _i < arguments.length; _i++) {
                            args[_i - 2] = arguments[_i];
                        }
                        this.nextArgs.push(next);
                        this.reiterated.push(value);
                    }, thisObj);
                }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + iteratorInfo.pseudoCode, e);
                    return false;
                }
            }
            else {
                if (typeof testParams.onThrow !== 'undefined') {
                    if (testParams.onThrow === null) {
                        if (typeof testParams.finalReturnValue !== 'undefined') {
                            pseudoCode = 'iteratorFromArray(' + JSON.stringify(iteratorInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) + ', new GlideDuration("' +
                                testParams.finalReturnValue.getDurationValue() + '"), (e)=>undefined)';
                            iteratorInfo.pseudoCode = 'reiterate<string, GlideDuration, number>(' + pseudoCode + ', (value,...args)=>{...})';
                        }
                        else {
                            pseudoCode = 'iteratorFromArray(' + JSON.stringify(iteratorInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) + ', undefined, (e)=>undefined)';
                            iteratorInfo.pseudoCode = 'reiterate<string, GlideDuration, number>(' + pseudoCode + ', (value,...args)=>{...})';
                        }
                        stepResult.setOutputMessage(((typeof prefix === 'string') ? "Executing " : prefix + ": Executing ") + pseudoCode);
                        iteratorInfo.source = x_g_inte_site_17.Site17Util.iteratorFromArray(iteratorInfo.values, testParams.supportsReturn, testParams.finalReturnValue, function (e) {
                            thisObj.throwCalled = true;
                            thisObj.thrown = e;
                            return;
                        });
                    }
                    else {
                        if (typeof testParams.finalReturnValue !== 'undefined') {
                            pseudoCode = 'iteratorFromArray(' + JSON.stringify(iteratorInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) + ', new GlideDuration("' +
                                testParams.finalReturnValue.getDurationValue() + '"), (e)=>new GlideDuration("' + testParams.onThrow.getDurationValue() + '"))';
                            iteratorInfo.pseudoCode = 'reiterate<string, GlideDuration, number>(' + pseudoCode + ', (value,...args)=>{...})';
                        }
                        else {
                            pseudoCode = 'iteratorFromArray(' + JSON.stringify(iteratorInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) + ', undefined, (e)=>new GlideDuration("' +
                                testParams.onThrow.getDurationValue() + '"))';
                            iteratorInfo.pseudoCode = 'reiterate<string, GlideDuration, number>(' + pseudoCode + ', (value,...args)=>{...})';
                        }
                        stepResult.setOutputMessage(((typeof prefix === 'string') ? "Executing " : prefix + ": Executing ") + pseudoCode);
                        iteratorInfo.source = x_g_inte_site_17.Site17Util.iteratorFromArray(iteratorInfo.values, testParams.supportsReturn, testParams.finalReturnValue, function (e) {
                            thisObj.throwCalled = true;
                            thisObj.thrown = e;
                            return testParams.onThrow;
                        });
                    }
                }
                else if (typeof testParams.finalReturnValue !== 'undefined') {
                    pseudoCode = 'iteratorFromArray(' + JSON.stringify(iteratorInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) + ', new GlideDuration("' +
                        testParams.finalReturnValue.getDurationValue() + '"))';
                    iteratorInfo.pseudoCode = 'reiterate<string, GlideDuration, number>(' + pseudoCode + ', (value,...args)=>{...})';
                    stepResult.setOutputMessage(((typeof prefix === 'string') ? "Executing " : prefix + ": Executing ") + pseudoCode);
                    iteratorInfo.source = x_g_inte_site_17.Site17Util.iteratorFromArray(iteratorInfo.values, testParams.supportsReturn, testParams.finalReturnValue);
                }
                else {
                    if (testParams.supportsReturn) {
                        pseudoCode = 'iteratorFromArray(' + JSON.stringify(iteratorInfo.values) + ', ' + JSON.stringify(testParams.supportsReturn) + ')';
                        iteratorInfo.pseudoCode = 'reiterate<string, GlideDuration, number>(' + pseudoCode + ', (value,...args)=>{...})';
                        stepResult.setOutputMessage(((typeof prefix === 'string') ? "Executing " : prefix + ": Executing ") + pseudoCode);
                        iteratorInfo.source = x_g_inte_site_17.Site17Util.iteratorFromArray(iteratorInfo.values, testParams.supportsReturn);
                    }
                    else {
                        pseudoCode = 'iteratorFromArray(' + JSON.stringify(iteratorInfo.values) + ')';
                        iteratorInfo.pseudoCode = 'reiterate<string, GlideDuration, number>(' + pseudoCode + ', (value,...args)=>{...})';
                        stepResult.setOutputMessage(((typeof prefix === 'string') ? "Executing " : prefix + ": Executing ") + pseudoCode);
                        iteratorInfo.source = x_g_inte_site_17.Site17Util.iteratorFromArray(iteratorInfo.values);
                    }
                }
                stepResult.setOutputMessage(((typeof prefix === 'string') ? "Executing " : prefix + ": Executing ") + iteratorInfo.pseudoCode);
                try {
                    iteratorInfo.iterator = x_g_inte_site_17.Site17Util.reiterate(iteratorInfo.source, function (value, next) {
                        var args = [];
                        for (var _i = 2; _i < arguments.length; _i++) {
                            args[_i - 2] = arguments[_i];
                        }
                        thisObj.nextArgs.push(next);
                        thisObj.reiterated.push(value);
                    });
                }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + iteratorInfo.pseudoCode, e);
                    return false;
                }
            }
            stepResult.setOutputMessage(((typeof prefix === 'string') ? "Executed " : prefix + ": Executed ") + iteratorInfo.pseudoCode);
            assertEqual({
                name: 'typeof iterator',
                shouldbe: 'object',
                value: (iteratorInfo.iterator === null) ? 'null' : typeof iteratorInfo.iterator
            });
            assertEqual({
                name: 'typeof iterator.next',
                shouldbe: 'function',
                value: typeof iteratorInfo.iterator.next
            });
            assertEqual({
                name: 'typeof iterator.return',
                shouldbe: testParams.supportsReturn ? 'function' : 'undefined',
                value: typeof iteratorInfo.iterator["return"]
            });
            assertEqual({
                name: 'typeof iterator.throw',
                shouldbe: (typeof testParams.onThrow !== 'undefined') ? 'function' : 'undefined',
                value: typeof iteratorInfo.iterator["throw"]
            });
            iteratorInfo.assertionCount += 4;
            return true;
        }
        function assertIterationResult(iterationResult, done, value) {
            assertEqual({
                name: 'typeof iterationResult',
                shouldbe: 'object',
                value: (iterationResult === null) ? 'null' : typeof iterationResult
            });
            assertEqual({
                name: 'iterationResult.done',
                shouldbe: done,
                value: iterationResult.done === true
            });
            if (typeof value === 'undefined')
                assertEqual({
                    name: 'typeof iterationResult.value',
                    shouldbe: 'undefined',
                    value: (value === null) ? 'undefined' : typeof value
                });
            else if (typeof value === 'string')
                assertEqual({
                    name: 'iterationResult.value',
                    shouldbe: value,
                    value: iterationResult.value
                });
            else {
                assertEqual({
                    name: 'instanceof iterationResult.value',
                    shouldbe: 'GlideDuration',
                    value: (iterationResult.value instanceof GlideDuration) ? 'GlideDuration' : (iterationResult.value === null) ? 'null' : typeof iterationResult.value
                });
                assertEqual({
                    name: 'iterationResult.value',
                    shouldbe: value.getNumericValue(),
                    value: iterationResult.value.getNumericValue()
                });
                return 4;
            }
            return 3;
        }
        function assertIteratedValues(testParams, iteratorInfo, thisObj, iterationCount) {
            var expectedValues;
            var expectedIterated;
            if (typeof iterationCount === 'number') {
                expectedIterated = [];
                expectedValues = [];
                for (var i = 0; i < iterationCount; i++) {
                    var item = testParams.iterations[i];
                    if (typeof item === 'string') {
                        expectedIterated.push(undefined);
                        expectedValues.push(item);
                    }
                    else {
                        expectedIterated.push(item.arg);
                        expectedValues.push(item.value);
                    }
                }
            }
            else {
                expectedIterated = testParams.iterations.map(function (item) {
                    if (typeof item !== 'string')
                        return item.arg;
                });
                expectedValues = iteratorInfo.values;
            }
            assertEqual({
                name: 'thisObj.nextArgs',
                shouldbe: JSON.stringify(expectedIterated.map(function (value) { return (typeof value === 'undefined') ? 'undefined' : value.toString(); })),
                value: JSON.stringify(thisObj.nextArgs.map(function (value) { return (typeof value === 'undefined') ? 'undefined' : value.toString(); }))
            });
            assertEqual({
                name: 'thisObj.reiterated',
                shouldbe: JSON.stringify(expectedValues),
                value: JSON.stringify(thisObj.reiterated)
            });
            iteratorInfo.assertionCount += 2;
        }
        function testIterations(testParams, iteratorInfo, limit, prefix) {
            var count = (typeof limit === 'number') ? limit : testParams.iterations.length;
            for (var idx = 0; idx < count; idx++) {
                var nextItem = testParams.iterations[idx];
                var iterationPseudoCode;
                var ir;
                if (typeof nextItem === 'string') {
                    iterationPseudoCode = iteratorInfo.pseudoCode + ";\niterator.next(); // iteration: " + idx;
                    stepResult.setOutputMessage(((typeof prefix === 'string') ? "Executing " : prefix + ": Executing ") + iterationPseudoCode);
                    try {
                        ir = iteratorInfo.iterator.next();
                    }
                    catch (e) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + iterationPseudoCode, e);
                        return false;
                    }
                    stepResult.setOutputMessage(((typeof prefix === 'string') ? "Executed " : prefix + ": Executed ") + iterationPseudoCode);
                    iteratorInfo.assertionCount += assertIterationResult(ir, false, nextItem);
                }
                else {
                    iterationPseudoCode = iteratorInfo.pseudoCode + ";\niterator.next(" + nextItem.arg + "); // iteration: " + idx;
                    stepResult.setOutputMessage(((typeof prefix === 'string') ? "Executing " : prefix + ": Executing ") + iterationPseudoCode);
                    try {
                        ir = iteratorInfo.iterator.next(nextItem.arg);
                    }
                    catch (e) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + iterationPseudoCode, e);
                        return false;
                    }
                    stepResult.setOutputMessage(((typeof prefix === 'string') ? "Executed " : prefix + ": Executed ") + iterationPseudoCode);
                    iteratorInfo.assertionCount += assertIterationResult(ir, false, nextItem.value);
                }
            }
            return true;
        }
        function testReiterate(testParams) {
            var thisObj = {
                nextArgs: [],
                reiterated: [],
                throwCalled: false
            };
            var iteratorInfo = { assertionCount: 0 };
            var iterationResult;
            if (!(createIterator(testParams, iteratorInfo, thisObj) && testIterations(testParams, iteratorInfo)))
                return -1;
            var pseudoCode = iteratorInfo.pseudoCode + ";\niterator.next(); // iteration: " + iteratorInfo.values.length;
            stepResult.setOutputMessage("Executing " + pseudoCode);
            try {
                iterationResult = iteratorInfo.iterator.next();
            }
            catch (e) {
                atfHelper.setFailed('Unexpected exception while invoking iterator.next()', e);
                return -1;
            }
            stepResult.setOutputMessage("Executed " + pseudoCode);
            iteratorInfo.assertionCount += assertIterationResult(iterationResult, true, testParams.finalReturnValue);
            assertIteratedValues(testParams, iteratorInfo, thisObj);
            if (!(createIterator(testParams, iteratorInfo, thisObj) && testIterations(testParams, iteratorInfo)))
                return -1;
            pseudoCode = iteratorInfo.pseudoCode + ";\niterator.next(-1); // iteration: " + iteratorInfo.values.length;
            stepResult.setOutputMessage("Executing " + pseudoCode);
            try {
                iterationResult = iteratorInfo.iterator.next(-1);
            }
            catch (e) {
                atfHelper.setFailed('Unexpected exception while invoking iterator.next(-1)', e);
                return -1;
            }
            stepResult.setOutputMessage("Executed " + pseudoCode);
            iteratorInfo.assertionCount += assertIterationResult(iterationResult, true, testParams.finalReturnValue);
            assertIteratedValues(testParams, iteratorInfo, thisObj);
            var limit = testParams.iterations.length - 1;
            if (testParams.supportsReturn) {
                if (!createIterator(testParams, iteratorInfo, thisObj, "Return"))
                    return -1;
                pseudoCode = iteratorInfo.pseudoCode + ";\niterator.return(); // iteration: 0";
                stepResult.setOutputMessage("Return: Executing " + pseudoCode);
                try {
                    iterationResult = iteratorInfo.iterator["return"]();
                }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking iterator.return()', e);
                    return -1;
                }
                stepResult.setOutputMessage("Return: Executed " + pseudoCode);
                iteratorInfo.assertionCount += assertIterationResult(iterationResult, true);
                pseudoCode = iteratorInfo.pseudoCode + ";\niterator.return();\niterator.next(); // iteration: 0";
                stepResult.setOutputMessage("Return: Executing " + pseudoCode);
                try {
                    iterationResult = iteratorInfo.iterator.next();
                }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking iterator.next()', e);
                    return -1;
                }
                stepResult.setOutputMessage("Return: Executed " + pseudoCode);
                iteratorInfo.assertionCount += assertIterationResult(iterationResult, true);
                assertIteratedValues(testParams, iteratorInfo, thisObj, 0);
                if (!createIterator(testParams, iteratorInfo, thisObj, "Return"))
                    return -1;
                pseudoCode = iteratorInfo.pseudoCode + ";\niterator.return(new GlideDuration('0 0:0:0')); // iteration: 0";
                stepResult.setOutputMessage("Return: Executing " + pseudoCode);
                try {
                    iterationResult = iteratorInfo.iterator["return"](zeroDuration);
                }
                catch (e) {
                    atfHelper.setFailed("Unexpected exception while invoking iterator.return(new GlideDuration('0 0:0:0'))", e);
                    return -1;
                }
                stepResult.setOutputMessage("Return: Executed " + pseudoCode);
                iteratorInfo.assertionCount += assertIterationResult(iterationResult, true, zeroDuration);
                pseudoCode = iteratorInfo.pseudoCode + ";\niterator.return(new GlideDuration('0 0:0:0'));\niterator.next(-1); // iteration: 0";
                stepResult.setOutputMessage("Return: Executing " + pseudoCode);
                try {
                    iterationResult = iteratorInfo.iterator.next(-1);
                }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking iterator.next(-1)', e);
                    return -1;
                }
                stepResult.setOutputMessage("Return: Executed " + pseudoCode);
                iteratorInfo.assertionCount += assertIterationResult(iterationResult, true, zeroDuration);
                assertIteratedValues(testParams, iteratorInfo, thisObj, 0);
                if (limit > 1) {
                    if (!(createIterator(testParams, iteratorInfo, thisObj, "Return") && testIterations(testParams, iteratorInfo, limit, "Return")))
                        return -1;
                    pseudoCode = iteratorInfo.pseudoCode + ";\niterator.return(); // iteration: " + limit;
                    stepResult.setOutputMessage("Return: Executing " + pseudoCode);
                    try {
                        iterationResult = iteratorInfo.iterator["return"]();
                    }
                    catch (e) {
                        atfHelper.setFailed('Unexpected exception while invoking iterator.return()', e);
                        return -1;
                    }
                    stepResult.setOutputMessage("Return: Executed " + pseudoCode);
                    iteratorInfo.assertionCount += assertIterationResult(iterationResult, true);
                    pseudoCode = iteratorInfo.pseudoCode + ";\niterator.return();\niterator.next(); // iteration: " + limit;
                    stepResult.setOutputMessage("Return: Executing " + pseudoCode);
                    try {
                        iterationResult = iteratorInfo.iterator.next();
                    }
                    catch (e) {
                        atfHelper.setFailed('Unexpected exception while invoking iterator.next()', e);
                        return -1;
                    }
                    stepResult.setOutputMessage("Return: Executed " + pseudoCode);
                    iteratorInfo.assertionCount += assertIterationResult(iterationResult, true);
                    assertIteratedValues(testParams, iteratorInfo, thisObj, limit);
                    if (!(createIterator(testParams, iteratorInfo, thisObj, "Return") && testIterations(testParams, iteratorInfo, limit, "Return")))
                        return -1;
                    pseudoCode = iteratorInfo.pseudoCode + ";\niterator.return(new GlideDuration('0 0:0:0')); // iteration: " + limit;
                    stepResult.setOutputMessage("Return: Executing " + pseudoCode);
                    try {
                        iterationResult = iteratorInfo.iterator["return"](zeroDuration);
                    }
                    catch (e) {
                        atfHelper.setFailed("Unexpected exception while invoking iterator.return(new GlideDuration('0 0:0:0'))", e);
                        return -1;
                    }
                    stepResult.setOutputMessage("Return: Executed " + pseudoCode);
                    iteratorInfo.assertionCount += assertIterationResult(iterationResult, true, zeroDuration);
                    pseudoCode = iteratorInfo.pseudoCode + ";\niterator.return(new GlideDuration('0 0:0:0'));\niterator.next(); // iteration: " + limit;
                    stepResult.setOutputMessage("Return: Executing " + pseudoCode);
                    try {
                        iterationResult = iteratorInfo.iterator.next();
                    }
                    catch (e) {
                        atfHelper.setFailed('Unexpected exception while invoking iterator.next()', e);
                        return -1;
                    }
                    stepResult.setOutputMessage("Return: Executed " + pseudoCode);
                    iteratorInfo.assertionCount += assertIterationResult(iterationResult, true, zeroDuration);
                    assertIteratedValues(testParams, iteratorInfo, thisObj, limit);
                }
            }
            if (typeof testParams.onThrow === 'undefined')
                return iteratorInfo.assertionCount;
            if (!createIterator(testParams, iteratorInfo, thisObj, "Throw"))
                return -1;
            pseudoCode = iteratorInfo.pseudoCode + ";\niterator.throw(\"Error!!!\"); // iteration: 0";
            stepResult.setOutputMessage("Throw: Executing " + pseudoCode);
            try {
                iterationResult = iteratorInfo.iterator["throw"]("Error!!!");
            }
            catch (error) {
                atfHelper.setFailed('Unexpected exception while invoking iterator.throw("Error!!!")', error);
                return -1;
            }
            stepResult.setOutputMessage("Throw: Executed " + pseudoCode);
            if (testParams.onThrow === null)
                iteratorInfo.assertionCount += assertIterationResult(iterationResult, true);
            else
                iteratorInfo.assertionCount += assertIterationResult(iterationResult, true, testParams.onThrow);
            pseudoCode = iteratorInfo.pseudoCode + ";\n.throw(\"Error!!!\");\niterator.next(); // iteration: 0";
            stepResult.setOutputMessage("Throw: Executing " + pseudoCode);
            try {
                iterationResult = iteratorInfo.iterator.next();
            }
            catch (error) {
                atfHelper.setFailed('Unexpected exception while invoking iterator.next()', error);
                return -1;
            }
            stepResult.setOutputMessage("Throw: Executed " + pseudoCode);
            if (testParams.onThrow === null)
                iteratorInfo.assertionCount += assertIterationResult(iterationResult, true);
            else
                iteratorInfo.assertionCount += assertIterationResult(iterationResult, true, testParams.onThrow);
            assertIteratedValues(testParams, iteratorInfo, thisObj, 0);
            if (limit > 1) {
                if (!(createIterator(testParams, iteratorInfo, thisObj, "Throw") && testIterations(testParams, iteratorInfo, limit, "Throw")))
                    return -1;
                pseudoCode = iteratorInfo.pseudoCode + ";\niterator.throw(\"Error!!!\"); // iteration: " + limit;
                stepResult.setOutputMessage("Throw: Executing " + pseudoCode);
                try {
                    iterationResult = iteratorInfo.iterator["throw"]("Error!!!");
                }
                catch (error) {
                    atfHelper.setFailed('Unexpected exception while invoking iterator.throw("Error!!!")', error);
                    return -1;
                }
                stepResult.setOutputMessage("Throw: Executed " + pseudoCode);
                if (testParams.onThrow === null)
                    iteratorInfo.assertionCount += assertIterationResult(iterationResult, true);
                else
                    iteratorInfo.assertionCount += assertIterationResult(iterationResult, true, testParams.onThrow);
                pseudoCode = iteratorInfo.pseudoCode + ";\n.throw(\"Error!!!\");\niterator.next(); // iteration: " + limit;
                stepResult.setOutputMessage("Throw: Executing " + pseudoCode);
                try {
                    iterationResult = iteratorInfo.iterator.next();
                }
                catch (error) {
                    atfHelper.setFailed('Unexpected exception while invoking terator.next()', error);
                    return -1;
                }
                stepResult.setOutputMessage("Throw: Executed " + pseudoCode);
                if (testParams.onThrow === null)
                    iteratorInfo.assertionCount += assertIterationResult(iterationResult, true);
                else
                    iteratorInfo.assertionCount += assertIterationResult(iterationResult, true, testParams.onThrow);
                assertIteratedValues(testParams, iteratorInfo, thisObj, limit);
            }
            return iteratorInfo.assertionCount;
        }
        var totalAssertionCount = 0;
        for (var _i = 0, _a = [
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
                iterations: [{ value: 'dolor in reprehenderit', arg: 731 }],
                supportsReturn: false,
                hasThisArg: true
            },
            {
                iterations: ['eu fugia'],
                supportsReturn: false,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('1 22:42:26')
            },
            {
                iterations: ['et dolore'],
                supportsReturn: true,
                hasThisArg: true
            },
            {
                iterations: ['sed do'],
                supportsReturn: true,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('0 8:35:46')
            },
            {
                iterations: [{ value: 'nisi ut aliquip', arg: 806 }],
                supportsReturn: false,
                hasThisArg: false
            },
            {
                iterations: [{ value: 'cupidatat non proident', arg: 347 }],
                supportsReturn: false,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('0 10:9:55')
            },
            {
                iterations: ['est'],
                supportsReturn: true,
                hasThisArg: false
            },
            {
                iterations: ['laborum.'],
                supportsReturn: true,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('0 21:2:44')
            },
            {
                iterations: ['anim'],
                supportsReturn: false,
                hasThisArg: true,
                onThrow: new GlideDuration('1 5:16:16')
            },
            {
                iterations: [{ value: 'consectetur adipiscing elit', arg: 44 }],
                supportsReturn: false,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('1 8:3:6'),
                onThrow: new GlideDuration('1 17:19:43')
            },
            {
                iterations: [{ value: 'consectetur adipiscing elit', arg: 186 }],
                supportsReturn: true,
                hasThisArg: true,
                onThrow: new GlideDuration('0 23:30:15')
            },
            {
                iterations: ['exercitation'],
                supportsReturn: true,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('1 9:55:48'),
                onThrow: new GlideDuration('1 16:44:14')
            },
            {
                iterations: [{ value: 'et dolore', arg: 977 }],
                supportsReturn: false,
                hasThisArg: false,
                onThrow: new GlideDuration('0 12:59:41')
            },
            {
                iterations: ['ullamco'],
                supportsReturn: false,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('1 0:17:6'),
                onThrow: new GlideDuration('0 20:32:16')
            },
            {
                iterations: ['Ut enim'],
                supportsReturn: true,
                hasThisArg: false,
                onThrow: new GlideDuration('0 16:11:43')
            },
            {
                iterations: [{ value: 'id', arg: 255 }],
                supportsReturn: true,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('0 5:33:20'),
                onThrow: new GlideDuration('1 15:46:49')
            },
            {
                iterations: [{ value: 'eiusmod tempor', arg: 456 }],
                supportsReturn: false,
                hasThisArg: true,
                onThrow: null
            },
            {
                iterations: ['dolor sit amet'],
                supportsReturn: false,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('0 12:38:24'),
                onThrow: null
            },
            {
                iterations: ['incididunt ut labore'],
                supportsReturn: true,
                hasThisArg: true,
                onThrow: null
            },
            {
                iterations: [{ value: 'magna aliqua', arg: 600 }],
                supportsReturn: true,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('1 17:27:43'),
                onThrow: null
            },
            {
                iterations: ['ad minim veniam'],
                supportsReturn: false,
                hasThisArg: false,
                onThrow: null
            },
            {
                iterations: ['exercitation'],
                supportsReturn: false,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('1 6:44:12'),
                onThrow: null
            },
            {
                iterations: ['ullamco'],
                supportsReturn: true,
                hasThisArg: false,
                onThrow: null
            },
            {
                iterations: [{ value: 'consectetur adipiscing elit', arg: 704 }],
                supportsReturn: true,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('0 1:20:39'),
                onThrow: null
            },
            {
                iterations: [{ value: 'exercitation', arg: 181 }, 'sunt in culpa', { value: 'sunt in culpa', arg: 940 }],
                supportsReturn: false,
                hasThisArg: true
            },
            {
                iterations: ['laborum.', 'cupidatat non proident', 'id'],
                supportsReturn: false,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('0 10:28:14')
            },
            {
                iterations: [{ value: 'ex ea commodo consequat', arg: 910 }, { value: 'nulla pariatur', arg: 160 }, { value: 'esse cillum dolore', arg: 140 }],
                supportsReturn: true,
                hasThisArg: true
            },
            {
                iterations: ['Lorem ipsum', { value: 'magna aliqua', arg: 557 }, { value: 'ullamco', arg: 759 }],
                supportsReturn: true,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('0 1:5:0')
            },
            {
                iterations: ['in voluptate velit', 'anim', { value: 'ex ea commodo consequat', arg: 458 }],
                supportsReturn: false,
                hasThisArg: false
            },
            {
                iterations: [{ value: 'ad minim veniam', arg: 276 }, { value: 'id', arg: 554 }, 'laboris'],
                supportsReturn: false,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('0 20:15:58')
            },
            {
                iterations: [{ value: 'anim', arg: 804 }, 'Lorem ipsum', { value: 'dolor sit amet', arg: 735 }],
                supportsReturn: true,
                hasThisArg: false
            },
            {
                iterations: ['quis nostrud', { value: 'Excepteur sint occaecat', arg: 566 }, 'nisi ut aliquip'],
                supportsReturn: true,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('1 3:37:49')
            },
            {
                iterations: [{ value: 'Excepteur sint occaecat', arg: 89 }, 'sed do', { value: 'in voluptate velit', arg: 395 }],
                supportsReturn: false,
                hasThisArg: true,
                onThrow: new GlideDuration('0 16:54:42')
            },
            {
                iterations: [{ value: 'mollit', arg: 530 }, { value: 'et dolore', arg: 470 }, { value: 'Duis aute irure', arg: 808 }],
                supportsReturn: false,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('1 23:14:45'),
                onThrow: new GlideDuration('1 22:29:8')
            },
            {
                iterations: [{ value: 'ex ea commodo consequat', arg: 22 }, 'Duis aute irure', 'qui officia deserunt'],
                supportsReturn: true,
                hasThisArg: true,
                onThrow: new GlideDuration('1 2:30:35')
            },
            {
                iterations: [{ value: 'Excepteur sint occaecat', arg: 202 }, { value: 'qui officia deserunt', arg: 311 }, 'qui officia deserunt'],
                supportsReturn: true,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('1 22:32:29'),
                onThrow: new GlideDuration('0 4:53:2')
            },
            {
                iterations: ['eu fugia', 'ullamco', { value: 'dolor sit amet', arg: 16 }],
                supportsReturn: false,
                hasThisArg: false,
                onThrow: new GlideDuration('1 1:21:58')
            },
            {
                iterations: [{ value: 'qui officia deserunt', arg: 872 }, { value: 'et dolore', arg: 758 }, 'ex ea commodo consequat'],
                supportsReturn: false,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('1 23:1:50'),
                onThrow: new GlideDuration('0 4:37:55')
            },
            {
                iterations: [{ value: 'mollit', arg: 805 }, { value: 'consectetur adipiscing elit', arg: 45 }, { value: 'esse cillum dolore', arg: 733 }],
                supportsReturn: true,
                hasThisArg: false,
                onThrow: new GlideDuration('1 20:27:35')
            },
            {
                iterations: [{ value: 'laboris', arg: 879 }, { value: 'laborum.', arg: 432 }, 'quis nostrud'],
                supportsReturn: true,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('1 8:8:23'),
                onThrow: new GlideDuration('0 8:55:43')
            },
            {
                iterations: [{ value: 'est', arg: 220 }, 'ullamco', 'nulla pariatur'],
                supportsReturn: false,
                hasThisArg: true,
                onThrow: null
            },
            {
                iterations: [{ value: 'Duis aute irure', arg: 443 }, { value: 'quis nostrud', arg: 332 }, 'sed do'],
                supportsReturn: false,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('0 5:36:40'),
                onThrow: null
            },
            {
                iterations: ['in voluptate velit', { value: 'magna aliqua', arg: 743 }, 'quis nostrud'],
                supportsReturn: true,
                hasThisArg: true,
                onThrow: null
            },
            {
                iterations: ['qui officia deserunt', { value: 'est', arg: 217 }, { value: 'cupidatat non proident', arg: 265 }],
                supportsReturn: true,
                hasThisArg: true,
                finalReturnValue: new GlideDuration('0 3:33:18'),
                onThrow: null
            },
            {
                iterations: [{ value: 'sunt in culpa', arg: 500 }, { value: 'esse cillum dolore', arg: 802 }, 'consectetur adipiscing elit'],
                supportsReturn: false,
                hasThisArg: false,
                onThrow: null
            },
            {
                iterations: ['cupidatat non proident', 'ad minim veniam', 'exercitation'],
                supportsReturn: false,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('0 5:19:8'),
                onThrow: null
            },
            {
                iterations: [{ value: 'dolor in reprehenderit', arg: 868 }, 'id', { value: 'ullamco', arg: 442 }],
                supportsReturn: true,
                hasThisArg: false,
                onThrow: null
            },
            {
                iterations: ['esse cillum dolore', 'incididunt ut labore', { value: 'dolor sit amet', arg: 462 }],
                supportsReturn: true,
                hasThisArg: false,
                finalReturnValue: new GlideDuration('0 2:32:18'),
                onThrow: null
            }
        ]; _i < _a.length; _i++) {
            var tp = _a[_i];
            try {
                var c = testReiterate(tp);
                if (c < 0)
                    return false;
                totalAssertionCount += c;
            }
            catch (error) {
                atfHelper.setFailed("Uncaught error", error);
                return false;
            }
        }
        stepResult.setOutputMessage(totalAssertionCount + ' assertions evaluated');
        return true;
    })(outputs, steps, stepResult, assertEqual);
})(site17Util_ReiterateTest || (site17Util_ReiterateTest = {}));
var site17Util_FilterIteratorTest;
(function (site17Util_FilterIteratorTest) {
    (function (outputs, steps, stepResult, assertEqual) {
        var atfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);
        var iterations = [
            { value: "One" },
            { value: "Two", arg: 1 },
            { value: "", arg: 3 },
            { value: "Three", arg: 3 }
        ];
        var expected = iterations.filter(function (value) { return value.value.length > 0; });
        var expectedNextArgs = iterations.map(function (d) {
            return d.arg;
        });
        var values = iterations.map(function (value) { return value.value; });
        stepResult.setOutputMessage("Executing iteratorFromArray(" + JSON.stringify(values) + ', false, true)');
        var source = x_g_inte_site_17.Site17Util.iteratorFromArray(values, false, true);
        stepResult.setOutputMessage("Executed iteratorFromArray(" + JSON.stringify(values) + ', false, true)');
        function predicate(value, arg) {
            this.nextArgs.push(arg);
            return value.length > 0;
        }
        var idx;
        var iterationResult;
        var item;
        var thisArg = { nextArgs: [] };
        var methodPseudoCode = 'filterIterator<string, boolean, number>(' + JSON.stringify(values) + '.iterator(), ' + JSON.stringify(predicate) + ', ' + JSON.stringify(thisArg) + ')';
        stepResult.setOutputMessage("Executing " + methodPseudoCode);
        var iterator;
        try {
            iterator = x_g_inte_site_17.Site17Util.filterIterator(source, predicate, thisArg);
        }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + methodPseudoCode, e);
            return false;
        }
        stepResult.setOutputMessage("Executed " + methodPseudoCode);
        assertEqual({
            name: 'typeof iterator',
            shouldbe: 'object',
            value: (iterator === null) ? 'null' : typeof iterator
        });
        assertEqual({
            name: 'typeof iterator.next',
            shouldbe: 'function',
            value: typeof iterator.next
        });
        assertEqual({
            name: 'typeof iterator.return',
            shouldbe: 'undefined',
            value: typeof iterator["return"]
        });
        assertEqual({
            name: 'typeof iterator.throw',
            shouldbe: 'undefined',
            value: typeof iterator["throw"]
        });
        var assignmentPseudoCode = x_g_inte_site_17.AtfHelper.createPseudoCodeBuilder('iterator = ' + methodPseudoCode);
        var pseudoCode;
        for (idx = 0; idx < expected.length; idx++) {
            item = expected[idx];
            if (typeof item.arg === 'undefined') {
                pseudoCode = assignmentPseudoCode.appendStatement('iterator.next()').setComment('iteration: ' + idx);
                stepResult.setOutputMessage("Executing " + pseudoCode.toString());
                try {
                    iterationResult = iterator.next();
                }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking iterator.next()', e);
                    return false;
                }
            }
            else {
                pseudoCode = assignmentPseudoCode.appendStatement('iterator.next(' + JSON.stringify(item.arg) + ')').setComment('iteration: ' + idx);
                stepResult.setOutputMessage("Executing " + pseudoCode.toString());
                try {
                    iterationResult = iterator.next(item.arg);
                }
                catch (e) {
                    atfHelper.setFailed("Unexpected exception while invoking iterator.next(" + JSON.stringify(item.arg) + ")", e);
                    return false;
                }
            }
            stepResult.setOutputMessage("Executed " + pseudoCode.toString());
            assertEqual({
                name: 'typeof iterationResult',
                shouldbe: 'object',
                value: (iterationResult === null) ? 'null' : typeof iterationResult
            });
            assertEqual({
                name: 'iterationResult.done',
                shouldbe: false,
                value: iterationResult.done === true
            });
            assertEqual({
                name: 'iterationResult.value',
                shouldbe: item.value,
                value: iterationResult.value
            });
        }
        pseudoCode = assignmentPseudoCode.appendStatement('iterator.next()').setComment('iteration: ' + values.length);
        stepResult.setOutputMessage("Executing " + pseudoCode.toString());
        try {
            iterationResult = iterator.next();
        }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking iterator.next()', e);
            return false;
        }
        stepResult.setOutputMessage("Executed " + pseudoCode.toString());
        assertEqual({
            name: 'typeof iterationResult',
            shouldbe: 'object',
            value: (iterationResult === null) ? 'null' : typeof iterationResult
        });
        assertEqual({
            name: 'iterationResult.done',
            shouldbe: true,
            value: iterationResult.done
        });
        assertEqual({
            name: 'iterationResult.value',
            shouldbe: true,
            value: iterationResult.value
        });
        assertEqual({
            name: 'thisArg.nextArgs',
            shouldbe: expectedNextArgs.map(function (value) { return (typeof value === 'undefined') ? 'undefined' : JSON.stringify(value); }).join(','),
            value: thisArg.nextArgs.map(function (value) { return (typeof value === 'undefined') ? 'undefined' : JSON.stringify(value); }).join(',')
        });
        stepResult.setOutputMessage((6 + (3 * expected.length)) + ' assertions evaluated');
        return true;
    })(outputs, steps, stepResult, assertEqual);
})(site17Util_FilterIteratorTest || (site17Util_FilterIteratorTest = {}));
var site17Util_MapIteratorTest;
(function (site17Util_MapIteratorTest) {
    (function (outputs, steps, stepResult, assertEqual) {
        var atfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);
        var iterations = [
            { value: 1, expect: 'True: 1', arg: true },
            { value: 2, expect: '(2)', arg: null },
            { value: 3, expect: '3' },
            { value: 5, expect: 'False: 5', arg: false },
            { value: 7, expect: '7' },
            { value: 11, expect: '11' }
        ];
        var values = iterations.map(function (d) {
            return d.value;
        });
        var expectedNextArgs = iterations.map(function (d) {
            return d.arg;
        });
        stepResult.setOutputMessage("Executing iteratorFromArray(" + JSON.stringify(values) + ', false, "Test 1")');
        var source = x_g_inte_site_17.Site17Util.iteratorFromArray(values, false, "Test 1");
        stepResult.setOutputMessage("Executed iteratorFromArray(" + JSON.stringify(values) + ', false, "Test 1")');
        function mapper(value, arg) {
            this.nextArgs.push(arg);
            if (typeof arg === 'undefined')
                return value.toString();
            if (arg === null)
                return '(' + value + ')';
            if (arg)
                return 'True: ' + value;
            return 'False: ' + value;
        }
        var thisArg = { nextArgs: [] };
        var idx;
        var arg;
        var iterationResult;
        var pseudoCode = 'mapIterator<number, string, string, boolean | null>(' + JSON.stringify(values) + '.iterator(), ' + JSON.stringify(mapper) + ', ' + JSON.stringify(thisArg) + ')';
        var iterator;
        stepResult.setOutputMessage("Executing " + pseudoCode);
        try {
            iterator = x_g_inte_site_17.Site17Util.mapIterator(source, mapper, thisArg);
        }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
            return false;
        }
        stepResult.setOutputMessage("Executed " + pseudoCode);
        assertEqual({
            name: 'typeof iterator',
            shouldbe: 'object',
            value: (iterator === null) ? 'null' : typeof iterator
        });
        assertEqual({
            name: 'typeof iterator.next',
            shouldbe: 'function',
            value: (iterator.next === null) ? 'null' : typeof iterator.next
        });
        assertEqual({
            name: 'typeof iterator.return',
            shouldbe: 'undefined',
            value: (iterator["return"] === null) ? 'null' : typeof iterator["return"]
        });
        assertEqual({
            name: 'typeof iterator.throw',
            shouldbe: 'undefined',
            value: (iterator["throw"] === null) ? 'null' : typeof iterator["throw"]
        });
        var iterationPseudoCode;
        for (idx = 0; idx < values.length; idx++) {
            arg = iterations[idx].arg;
            if (typeof arg === 'undefined') {
                iterationPseudoCode = pseudoCode + ";\niterator.next(); // iteration: " + idx;
                stepResult.setOutputMessage("Executing iterator.next()");
                try {
                    iterationResult = iterator.next();
                }
                catch (e) {
                    atfHelper.setFailed("Unexpected exception while invoking iterator.next()", e);
                    return false;
                }
            }
            else {
                iterationPseudoCode = pseudoCode + ";\niterator.next(" + JSON.stringify(arg) + '); // iteration: ' + idx;
                stepResult.setOutputMessage("Executing " + iterationPseudoCode);
                try {
                    iterationResult = iterator.next(arg);
                }
                catch (e) {
                    atfHelper.setFailed("Unexpected exception while invoking iterator.next(" + arg + ")", e);
                    return false;
                }
            }
            stepResult.setOutputMessage("Executed " + iterationPseudoCode);
            assertEqual({
                name: 'typeof iterationResult',
                shouldbe: 'object',
                value: (iterationResult === null) ? 'null' : typeof iterationResult
            });
            assertEqual({
                name: 'iterationResult.done',
                shouldbe: false,
                value: iterationResult.done === true
            });
            assertEqual({
                name: 'iterationResult.value',
                shouldbe: iterations[idx].expect,
                value: iterationResult.value
            });
        }
        iterationPseudoCode = ";\niterator.next(); // iteration: " + values.length;
        stepResult.setOutputMessage("Executing " + iterationPseudoCode);
        try {
            iterationResult = iterator.next();
        }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking iterator.next()', e);
            return false;
        }
        stepResult.setOutputMessage("Executed " + iterationPseudoCode);
        assertEqual({
            name: 'typeof iterationResult',
            shouldbe: 'object',
            value: (iterationResult === null) ? 'null' : typeof iterationResult
        });
        assertEqual({
            name: 'iterationResult.done',
            shouldbe: true,
            value: iterationResult.done
        });
        assertEqual({
            name: 'iterationResult.value',
            shouldbe: "Test 1",
            value: iterationResult.value
        });
        assertEqual({
            name: 'thisArg.nextArgs',
            shouldbe: expectedNextArgs.map(function (value) { return (typeof value === 'undefined') ? 'undefined' : JSON.stringify(value); }).join(','),
            value: thisArg.nextArgs.map(function (value) { return (typeof value === 'undefined') ? 'undefined' : JSON.stringify(value); }).join(',')
        });
        stepResult.setOutputMessage((8 + (3 * values.length)) + ' assertions evaluated');
        return true;
    })(outputs, steps, stepResult, assertEqual);
})(site17Util_MapIteratorTest || (site17Util_MapIteratorTest = {}));
var site17Util_ReduceIteratorTest;
(function (site17Util_ReduceIteratorTest) {
    (function (outputs, steps, stepResult, assertEqual) {
        var atfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);
        var values = [
            new GlideDuration('1 0:0:0'),
            new GlideDuration('0 1:0:0'),
            new GlideDuration('0 0:1:0'),
            new GlideDuration('0 0:0:1')
        ];
        stepResult.setOutputMessage("Executing iteratorFromArray(" + JSON.stringify(values) + ")");
        var source = x_g_inte_site_17.Site17Util.iteratorFromArray(values);
        stepResult.setOutputMessage("Executed iteratorFromArray(" + JSON.stringify(values) + ")");
        var initialValue = 0;
        function reducerFn(acc, cur) {
            this.count++;
            if (cur.isValid()) {
                var result = acc + cur.getNumericValue();
                this.log.push("Returning " + cur.getNumericValue() + " ('" + cur.getDurationValue() + "') + " + acc + ' = ' + result);
                return result;
            }
            this.log.push(cur + ' is invalid: returning ' + acc);
            return acc;
        }
        var thisArg = { count: 0, log: [] };
        var pseudoCode = "reduceIterator<GlideDuration, number>([new GlideDuration('" + values.map(function (gd) {
            return gd.getDurationValue();
        }).join("'), new GlideDuration('") + "')].iterator(), " + initialValue + ', ' + JSON.stringify(reducerFn) + ', ' + JSON.stringify(thisArg) + ')';
        stepResult.setOutputMessage("Executing " + pseudoCode);
        var returnValue;
        try {
            returnValue = x_g_inte_site_17.Site17Util.reduceIterator(source, initialValue, reducerFn, thisArg);
        }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
            return false;
        }
        stepResult.setOutputMessage("Executed " + pseudoCode + ";\n" + thisArg.log.join("\n"));
        assertEqual({
            name: 'returnValue',
            shouldbe: values.reduce(function (previousValue, currentValue) { return currentValue.isValid() ? currentValue.getNumericValue() + previousValue : previousValue; }, initialValue),
            value: returnValue
        });
        assertEqual({
            name: 'thisArg.count',
            shouldbe: values.length,
            value: thisArg.count
        });
        stepResult.setOutputMessage("Executing iteratorFromArray([])");
        source = x_g_inte_site_17.Site17Util.iteratorFromArray([]);
        stepResult.setOutputMessage("Executed iteratorFromArray([])");
        initialValue = 7;
        thisArg.count = 0;
        thisArg.log = [];
        pseudoCode = 'reduceIterator<GlideDuration, number>([].iterator(), ' + initialValue + ', ' + JSON.stringify(reducerFn) + ', ' + JSON.stringify(thisArg) + ')';
        stepResult.setOutputMessage("Executing " + pseudoCode);
        try {
            returnValue = x_g_inte_site_17.Site17Util.reduceIterator(source, initialValue, reducerFn, thisArg);
        }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
            return false;
        }
        stepResult.setOutputMessage("Executed " + pseudoCode + ";\n" + thisArg.log.join("\n"));
        assertEqual({
            name: 'returnValue',
            shouldbe: initialValue,
            value: returnValue
        });
        assertEqual({
            name: 'thisArg.count',
            shouldbe: 0,
            value: thisArg.count
        });
        stepResult.setOutputMessage('4 assertions evaluated');
        return true;
    })(outputs, steps, stepResult, assertEqual);
})(site17Util_ReduceIteratorTest || (site17Util_ReduceIteratorTest = {}));
var site17Util_FirstIteratedTest;
(function (site17Util_FirstIteratedTest) {
    (function (outputs, steps, stepResult, assertEqual) {
        var atfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);
        var testDataArr = [
            {
                values: [1, 2, 3, 5, 7, 11],
                predicate: function (value) { return value > 5; },
                hasThisObj: true,
                pseudoCode: '(value) => value > 5'
            },
            {
                values: [1, 2, 3, 5, 7, 11],
                predicate: function (value) { return value > 5; },
                hasThisObj: false,
                pseudoCode: '(value) => value > 5'
            },
            {
                values: [11, 7, 5, 3, 2, 1],
                predicate: function (value) { return value < 5; },
                hasThisObj: true,
                pseudoCode: '(value) => value < 5'
            },
            {
                values: [11, 7, 5, 3, 2, 1],
                predicate: function (value) { return value < 5; },
                hasThisObj: false,
                pseudoCode: '(value) => value < 5'
            },
            {
                values: [4, 6, 8, 9, 10, 12],
                predicate: function (value) { return value > 11; },
                hasThisObj: true,
                pseudoCode: '(value) => value > 11'
            },
            {
                values: [4, 6, 8, 9, 10, 12],
                predicate: function (value) { return value > 11; },
                hasThisObj: false,
                pseudoCode: '(value) => value > 11'
            },
            {
                values: [4, 6, 8, 9, 10, 12],
                predicate: function (value) { return value > 0; },
                hasThisObj: true,
                pseudoCode: '(value) => value > 0'
            },
            {
                values: [4, 6, 8, 9, 10, 12],
                predicate: function (value) { return value > 0; },
                hasThisObj: false,
                pseudoCode: '(value) => value > 0'
            },
            {
                values: [1, 2, 3, 5, 7, 11],
                predicate: function (value) { return value < 0; },
                hasThisObj: true,
                pseudoCode: '(value) => value < 0'
            },
            {
                values: [1, 2, 3, 5, 7, 11],
                predicate: function (value) { return value < 0; },
                hasThisObj: false,
                pseudoCode: '(value) => value < 0'
            },
            {
                values: [1],
                predicate: function (value) { return value > 0; },
                hasThisObj: true,
                pseudoCode: '(value) => value > 0'
            },
            {
                values: [1],
                predicate: function (value) { return value > 0; },
                hasThisObj: false,
                pseudoCode: '(value) => value > 0'
            },
            {
                values: [1],
                predicate: function (value) { return value > 1; },
                hasThisObj: true,
                pseudoCode: '(value) => value > 1'
            },
            {
                values: [1],
                predicate: function (value) { return value > 1; },
                hasThisObj: false,
                pseudoCode: '(value) => value > 1'
            },
            {
                values: [],
                predicate: function (value) { return value > 0; },
                hasThisObj: true,
                pseudoCode: '(value) => value > 0'
            },
            {
                values: [],
                predicate: function (value) { return value > 0; },
                hasThisObj: false,
                pseudoCode: '(value) => value > 0'
            }
        ];
        for (var _i = 0, testDataArr_1 = testDataArr; _i < testDataArr_1.length; _i++) {
            var testDataItem = testDataArr_1[_i];
            stepResult.setOutputMessage("Executing iteratorFromArray(" + JSON.stringify(testDataItem.values) + ")");
            var source = x_g_inte_site_17.Site17Util.iteratorFromArray(testDataItem.values);
            stepResult.setOutputMessage("Executed iteratorFromArray(" + JSON.stringify(testDataItem.values) + ")");
            var thisArg = { count: 0 };
            var idx = 0;
            if (testDataItem.values.length > 0) {
                while (!testDataItem.predicate(testDataItem.values[idx])) {
                    idx++;
                    if (idx == testDataItem.values.length)
                        break;
                }
            }
            else
                idx = 0;
            var returnValue;
            var pseudoCode;
            if (testDataItem.hasThisObj) {
                pseudoCode = 'firstIterated(' + JSON.stringify(testDataItem.values) + '.iterator(), ' + testDataItem.pseudoCode + ', thisArg)';
                stepResult.setOutputMessage("Executing " + pseudoCode);
                try {
                    returnValue = x_g_inte_site_17.Site17Util.firstIterated(source, function (value) {
                        this.count++;
                        return testDataItem.predicate(value);
                    }, thisArg);
                }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
                    return false;
                }
            }
            else {
                pseudoCode = 'firstIterated(' + JSON.stringify(testDataItem.values) + '.iterator(), ' + testDataItem.pseudoCode + ')';
                stepResult.setOutputMessage("Executing " + pseudoCode);
                try {
                    returnValue = x_g_inte_site_17.Site17Util.firstIterated(source, function (value) {
                        thisArg.count++;
                        return testDataItem.predicate(value);
                    });
                }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
                    return false;
                }
            }
            stepResult.setOutputMessage("Executed " + pseudoCode);
            if (idx < testDataItem.values.length) {
                assertEqual({
                    name: 'returnValue',
                    shouldbe: testDataItem.values[idx],
                    value: returnValue
                });
                assertEqual({
                    name: 'thisArg.count',
                    shouldbe: idx + 1,
                    value: thisArg.count
                });
            }
            else {
                assertEqual({
                    name: 'returnValue',
                    shouldbe: 'undefined',
                    value: typeof returnValue
                });
                assertEqual({
                    name: 'thisArg.count',
                    shouldbe: testDataItem.values.length,
                    value: thisArg.count
                });
            }
        }
        stepResult.setOutputMessage((testDataArr.length * 2) + ' assertions evaluated');
        return true;
    })(outputs, steps, stepResult, assertEqual);
})(site17Util_FirstIteratedTest || (site17Util_FirstIteratedTest = {}));
var site17Util_firstIteratedOrDefault;
(function (site17Util_firstIteratedOrDefault) {
    (function (outputs, steps, stepResult, assertEqual) {
        var atfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);
        var testDataArr = [
            {
                values: [1, 2, 3, 5, 7, 11],
                predicate: function (value) { return value > 5; },
                pseudoCode: '(value) => value > 5',
                hasThisObj: true,
                defaultSpec: 5
            },
            {
                values: [1, 2, 3, 5, 7, 11],
                predicate: function (value) { return value > 5; },
                pseudoCode: '(value) => value > 5',
                hasThisObj: false,
                defaultSpec: function () { return 5; }
            },
            {
                values: [11, 7, 5, 3, 2, 1],
                predicate: function (value) { return value < 5; },
                pseudoCode: '(value) => value < 5',
                hasThisObj: true,
                defaultSpec: function () { return 7; }
            },
            {
                values: [11, 7, 5, 3, 2, 1],
                predicate: function (value) { return value < 5; },
                pseudoCode: '(value) => value < 5',
                hasThisObj: false,
                defaultSpec: 7
            },
            {
                values: [4, 6, 8, 9, 10, 12],
                predicate: function (value) { return value > 11; },
                pseudoCode: '(value) => value > 11',
                hasThisObj: true,
                defaultSpec: 7
            },
            {
                values: [4, 6, 8, 9, 10, 12],
                hasThisObj: false,
                predicate: function (value) { return value > 11; },
                pseudoCode: '(value) => value > 11',
                defaultSpec: function () { return 7; }
            },
            {
                values: [4, 6, 8, 9, 10, 12],
                predicate: function (value) { return value > 0; },
                pseudoCode: '(value) => value > 0',
                hasThisObj: true,
                defaultSpec: function () { return 7; }
            },
            {
                values: [4, 6, 8, 9, 10, 12],
                predicate: function (value) { return value > 0; },
                pseudoCode: '(value) => value > 0',
                hasThisObj: false,
                defaultSpec: 7
            },
            {
                values: [1, 2, 3, 5, 7, 11],
                predicate: function (value) { return value < 0; },
                pseudoCode: '(value) => value < 0',
                hasThisObj: true,
                defaultSpec: 40
            },
            {
                values: [1, 2, 3, 5, 7, 11],
                predicate: function (value) { return value < 0; },
                pseudoCode: '(value) => value < 0',
                hasThisObj: false,
                defaultSpec: function () { return 40; }
            },
            {
                values: [1],
                predicate: function (value) { return value > 0; },
                pseudoCode: '(value) => value > 0',
                hasThisObj: true,
                defaultSpec: function () { return 40; }
            },
            {
                values: [1],
                predicate: function (value) { return value > 0; },
                pseudoCode: '(value) => value > 0',
                hasThisObj: false,
                defaultSpec: 40
            },
            {
                values: [1],
                predicate: function (value) { return value > 1; },
                pseudoCode: '(value) => value > 1',
                hasThisObj: true,
                defaultSpec: 40
            },
            {
                values: [1],
                predicate: function (value) { return value > 1; },
                pseudoCode: '(value) => value > 1',
                hasThisObj: false,
                defaultSpec: function () { return 40; }
            },
            {
                values: [],
                predicate: function (value) { return value > 0; },
                pseudoCode: '(value) => value > 0',
                hasThisObj: true,
                defaultSpec: function () { return 40; }
            },
            {
                values: [],
                predicate: function (value) { return value > 0; },
                pseudoCode: '(value) => value > 0',
                hasThisObj: false,
                defaultSpec: 40
            }
        ];
        for (var _i = 0, testDataArr_2 = testDataArr; _i < testDataArr_2.length; _i++) {
            var testDataItem = testDataArr_2[_i];
            stepResult.setOutputMessage("Executing iteratorFromArray(" + JSON.stringify(testDataItem.values) + ")");
            var source = x_g_inte_site_17.Site17Util.iteratorFromArray(testDataItem.values);
            stepResult.setOutputMessage("Executed iteratorFromArray(" + JSON.stringify(testDataItem.values) + ")");
            var thisArg = { count: 0 };
            var idx = 0;
            if (testDataItem.values.length > 0) {
                while (!testDataItem.predicate(testDataItem.values[idx])) {
                    idx++;
                    if (idx == testDataItem.values.length)
                        break;
                }
            }
            else
                idx = 0;
            var returnValue;
            var expectedValue;
            var pseudoCode;
            if (testDataItem.hasThisObj) {
                if (typeof testDataItem.defaultSpec === 'number') {
                    expectedValue = (idx < testDataItem.values.length) ? testDataItem.values[idx] : testDataItem.defaultSpec;
                    pseudoCode = 'firstIteratedOrDefault(' + JSON.stringify(testDataItem.values) + '.iterator(), ' + testDataItem.defaultSpec + ', ' + testDataItem.pseudoCode + ', thisArg)';
                }
                else {
                    pseudoCode = 'firstIteratedOrDefault(' + JSON.stringify(testDataItem.values) + '.iterator(), () => ' + testDataItem.defaultSpec() + ', ' + testDataItem.pseudoCode + ', thisArg)';
                    expectedValue = (idx < testDataItem.values.length) ? testDataItem.values[idx] : testDataItem.defaultSpec();
                }
                stepResult.setOutputMessage("Executing " + pseudoCode);
                try {
                    returnValue = x_g_inte_site_17.Site17Util.firstIteratedOrDefault(source, testDataItem.defaultSpec, function (value) {
                        this.count++;
                        return testDataItem.predicate(value);
                    }, thisArg);
                }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
                    return false;
                }
            }
            else {
                if (typeof testDataItem.defaultSpec === 'number') {
                    expectedValue = (idx < testDataItem.values.length) ? testDataItem.values[idx] : testDataItem.defaultSpec;
                    pseudoCode = 'firstIteratedOrDefault(' + JSON.stringify(testDataItem.values) + '.iterator(), ' + testDataItem.defaultSpec + ', ' + testDataItem.pseudoCode + ')';
                }
                else {
                    pseudoCode = 'firstIteratedOrDefault(' + JSON.stringify(testDataItem.values) + '.iterator(), () => ' + testDataItem.defaultSpec() + ', ' + testDataItem.pseudoCode + ')';
                    expectedValue = (idx < testDataItem.values.length) ? testDataItem.values[idx] : testDataItem.defaultSpec();
                }
                stepResult.setOutputMessage("Executing " + pseudoCode);
                try {
                    returnValue = x_g_inte_site_17.Site17Util.firstIteratedOrDefault(source, testDataItem.defaultSpec, function (value) {
                        thisArg.count++;
                        return testDataItem.predicate(value);
                    });
                }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
                    return false;
                }
            }
            stepResult.setOutputMessage("Executed " + pseudoCode);
            assertEqual({
                name: 'returnValue',
                shouldbe: expectedValue,
                value: returnValue
            });
            assertEqual({
                name: 'thisArg.count',
                shouldbe: (idx < testDataItem.values.length) ? idx + 1 : testDataItem.values.length,
                value: thisArg.count
            });
        }
        stepResult.setOutputMessage((testDataArr.length * 2) + ' assertions evaluated');
        return true;
    })(outputs, steps, stepResult, assertEqual);
})(site17Util_firstIteratedOrDefault || (site17Util_firstIteratedOrDefault = {}));
var site17Util_LimitIteratorTest;
(function (site17Util_LimitIteratorTest) {
    (function (outputs, steps, stepResult, assertEqual) {
        var atfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);
        var testDataArr = [
            {
                iterations: [],
                counts: [-1, 0, 1],
                supportsReturn: false
            }, {
                iterations: [],
                counts: [-1, 0, 1],
                supportsReturn: false,
                onThrow: -582
            }, {
                iterations: [],
                counts: [-1, 0, 1],
                supportsReturn: false,
                finalReturnValue: "Return Code 807"
            }, {
                iterations: [],
                counts: [-1, 0, 1],
                supportsReturn: false,
                finalReturnValue: "Return Code -922",
                onThrow: -193
            }, {
                iterations: [],
                counts: [-1, 0, 1],
                supportsReturn: true
            }, {
                iterations: [],
                counts: [-1, 0, 1],
                supportsReturn: true,
                onThrow: 529
            }, {
                iterations: [],
                counts: [-1, 0, 1],
                supportsReturn: true,
                finalReturnValue: "Return Code -498"
            }, {
                iterations: [],
                counts: [-1, 0, 1],
                supportsReturn: true,
                finalReturnValue: "Return Code -712",
                onThrow: -126
            }, {
                iterations: [{ value: -887, arg: false }],
                counts: [-1, 0, 1],
                supportsReturn: false
            }, {
                iterations: [{ value: 249, arg: false }],
                counts: [-1, 0, 1],
                supportsReturn: false,
                onThrow: 148
            }, {
                iterations: [{ value: 611 }],
                counts: [-1, 0, 1],
                supportsReturn: false,
                finalReturnValue: "Return Code 0"
            }, {
                iterations: [{ value: -871, arg: true }],
                counts: [-1, 0, 1],
                supportsReturn: false,
                finalReturnValue: "Return Code 393",
                onThrow: -909
            }, {
                iterations: [{ value: -710 }],
                counts: [-1, 0, 1],
                supportsReturn: true
            }, {
                iterations: [{ value: 390 }],
                counts: [-1, 0, 1],
                supportsReturn: true,
                onThrow: -355
            }, {
                iterations: [{ value: 484, arg: true }],
                counts: [-1, 0, 1],
                supportsReturn: true,
                finalReturnValue: "Return Code -621"
            }, {
                iterations: [{ value: 829 }],
                counts: [-1, 0, 1],
                supportsReturn: true,
                finalReturnValue: "Return Code -478",
                onThrow: 255
            }, {
                iterations: [{ value: -81 }, { value: -586 }, { value: -60, arg: false }, { value: 444, arg: true }],
                counts: [-1, 0, 1, 3, 4],
                supportsReturn: false
            }, {
                iterations: [{ value: -767, arg: false }, { value: 529, arg: true }, { value: 357 }, { value: 859 }],
                counts: [-1, 0, 2, 3, 4],
                supportsReturn: false,
                onThrow: -292
            }, {
                iterations: [{ value: 858 }, { value: -498 }, { value: -680 }, { value: 780 }],
                counts: [-1, 0, 1, 3, 4],
                supportsReturn: false,
                finalReturnValue: "Return Code 876"
            }, {
                iterations: [{ value: 908, arg: false }, { value: -765, arg: true }, { value: 994 }, { value: -243, arg: false }],
                counts: [-1, 0, 1, 3, 4],
                supportsReturn: false,
                finalReturnValue: "Return Code -941",
                onThrow: 62
            }, {
                iterations: [{ value: 451 }, { value: 805 }, { value: -261 }, { value: 701, arg: false }],
                counts: [-1, 0, 2, 3, 4],
                supportsReturn: true
            }, {
                iterations: [{ value: -234, arg: true }, { value: -452, arg: false }, { value: -336, arg: false }, { value: -584 }],
                counts: [-1, 0, 1, 3, 4],
                supportsReturn: true,
                onThrow: 319
            }, {
                iterations: [{ value: 160, arg: true }, { value: 399, arg: false }, { value: -623, arg: false }, { value: 123, arg: true }],
                counts: [-1, 0, 1, 3, 4],
                supportsReturn: true,
                finalReturnValue: "Return Code 250"
            }, {
                iterations: [{ value: 100, arg: true }, { value: 41, arg: false }, { value: 646 }, { value: 611, arg: true }],
                counts: [-1, 0, 1, 3, 4],
                supportsReturn: true,
                finalReturnValue: "Return Code 581",
                onThrow: -445
            }
        ];
        var assertionCount = 0;
        for (var _i = 0, testDataArr_3 = testDataArr; _i < testDataArr_3.length; _i++) {
            var testDataItem = testDataArr_3[_i];
            var values = testDataItem.iterations.map(function (value) { return value.value; });
            for (var _a = 0, _b = testDataItem.counts; _a < _b.length; _a++) {
                var count = _b[_a];
                var sourcePseudoCode;
                var createSource;
                //var source: Iterator<number, string, boolean>;
                if (typeof testDataItem.onThrow === 'number') {
                    if (typeof testDataItem.finalReturnValue === 'string')
                        sourcePseudoCode = "iteratorFromArray(" + JSON.stringify(values) + ', ' + JSON.stringify(testDataItem.supportsReturn) + ', ' + JSON.stringify(testDataItem.finalReturnValue) + ', (e) => (e.length > 0) ? e + " (Code ' + testDataItem.onThrow + ')" : "Error Code ' + testDataItem.onThrow + '")';
                    else
                        sourcePseudoCode = "iteratorFromArray(" + JSON.stringify(values) + ', ' + JSON.stringify(testDataItem.supportsReturn) + ', undefined, (e) => (e.length > 0) ? e + " (Code ' + testDataItem.onThrow + ')" : "Error Code ' + testDataItem.onThrow + '")';
                    stepResult.setOutputMessage("Executing " + sourcePseudoCode);
                    createSource = function () {
                        return x_g_inte_site_17.Site17Util.iteratorFromArray(values, testDataItem.supportsReturn, testDataItem.finalReturnValue, function (e) {
                            if (typeof e !== 'undefined' && e !== null) {
                                var s = ('' + e).trim();
                                if (s.length > 0)
                                    return s + ' (Code ' + testDataItem.onThrow + ')';
                            }
                            return 'Error Code ' + testDataItem.onThrow;
                        });
                    };
                }
                else if (typeof testDataItem.finalReturnValue === 'string') {
                    sourcePseudoCode = "iteratorFromArray(" + JSON.stringify(values) + ', ' + JSON.stringify(testDataItem.supportsReturn) + ', ' + JSON.stringify(testDataItem.finalReturnValue) + ')';
                    stepResult.setOutputMessage("Executing " + sourcePseudoCode);
                    createSource = function () {
                        return x_g_inte_site_17.Site17Util.iteratorFromArray(values, testDataItem.supportsReturn, testDataItem.finalReturnValue);
                    };
                }
                else if (testDataItem.supportsReturn) {
                    sourcePseudoCode = "iteratorFromArray(" + JSON.stringify(values) + ', ' + JSON.stringify(testDataItem.supportsReturn) + ')';
                    stepResult.setOutputMessage("Executing " + sourcePseudoCode);
                    createSource = function () {
                        return x_g_inte_site_17.Site17Util.iteratorFromArray(values, testDataItem.supportsReturn);
                    };
                }
                else {
                    sourcePseudoCode = "iteratorFromArray(" + JSON.stringify(values) + ')';
                    stepResult.setOutputMessage("Executing " + sourcePseudoCode);
                    createSource = function () {
                        return x_g_inte_site_17.Site17Util.iteratorFromArray(values, testDataItem.supportsReturn);
                    };
                }
                stepResult.setOutputMessage("Executed " + sourcePseudoCode);
                var methodPseudoCode = 'limitIterator<number, string, boolean>(' + sourcePseudoCode + ', ' + count + ')';
                var expectedCount;
                if (count < 1) {
                    expectedCount = 0;
                }
                else if (count > values.length) {
                    expectedCount = values.length;
                }
                else {
                    expectedCount = count;
                }
                var idx;
                var iterator;
                var iterationResult;
                stepResult.setOutputMessage("Executing " + methodPseudoCode);
                try {
                    iterator = x_g_inte_site_17.Site17Util.limitIterator(createSource(), count);
                }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + methodPseudoCode, e);
                    return false;
                }
                stepResult.setOutputMessage("Executed " + methodPseudoCode);
                assertEqual({
                    name: 'typeof iterator',
                    shouldbe: 'object',
                    value: (iterator === null) ? 'null' : typeof iterator
                });
                assertEqual({
                    name: 'typeof iterator.next',
                    shouldbe: 'function',
                    value: (iterator.next === null) ? 'null' : typeof iterator.next
                });
                assertEqual({
                    name: 'typeof iterator.return',
                    shouldbe: testDataItem.supportsReturn ? 'function' : 'undefined',
                    value: (iterator["return"] === null) ? 'null' : typeof iterator["return"]
                });
                assertEqual({
                    name: 'typeof iterator.throw',
                    shouldbe: (typeof testDataItem.onThrow === 'number') ? 'function' : 'undefined',
                    value: (iterator["throw"] === null) ? 'null' : typeof iterator["throw"]
                });
                var assignmentPsb = x_g_inte_site_17.AtfHelper.createPseudoCodeBuilder('iterator = ' + methodPseudoCode);
                var psb;
                var arg;
                for (idx = 0; idx < expectedCount; idx++) {
                    arg = testDataItem.iterations[idx].arg;
                    if (typeof arg === 'undefined') {
                        psb = assignmentPsb.appendStatement('iterator.next()').setComment('iteration: ' + idx);
                        stepResult.setOutputMessage("Executing " + psb.toString());
                        try {
                            iterationResult = iterator.next();
                        }
                        catch (e) {
                            atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                            return false;
                        }
                    }
                    else {
                        psb = assignmentPsb.appendStatement('iterator.next(' + JSON.stringify(arg) + ')').setComment('iteration: ' + idx);
                        try {
                            iterationResult = iterator.next(arg);
                        }
                        catch (e) {
                            atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                            return false;
                        }
                    }
                    stepResult.setOutputMessage("Executed " + psb.toString());
                    assertEqual({
                        name: 'typeof iterationResult',
                        shouldbe: 'object',
                        value: (iterationResult === null) ? 'null' : typeof iterationResult
                    });
                    assertEqual({
                        name: 'iterationResult.done',
                        shouldbe: false,
                        value: iterationResult.done === true
                    });
                    assertEqual({
                        name: 'iterationResult.value',
                        shouldbe: values[idx],
                        value: iterationResult.value
                    });
                }
                psb = assignmentPsb.appendStatement('iterator.next()').setComment('iteration: ' + expectedCount);
                stepResult.setOutputMessage("Executing " + psb.toString());
                try {
                    iterationResult = iterator.next();
                }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                    return false;
                }
                stepResult.setOutputMessage("Executed " + psb.toString());
                assertEqual({
                    name: 'typeof iterationResult',
                    shouldbe: 'object',
                    value: (iterationResult === null) ? 'null' : typeof iterationResult
                });
                assertEqual({
                    name: 'iterationResult.done',
                    shouldbe: true,
                    value: iterationResult.done
                });
                if (typeof testDataItem.finalReturnValue === 'string' && values.length == expectedCount)
                    assertEqual({
                        name: 'iterationResult.value',
                        shouldbe: testDataItem.finalReturnValue,
                        value: iterationResult.value
                    });
                else
                    assertEqual({
                        name: 'typeof iterationResult.value',
                        shouldbe: 'undefined',
                        value: (iterationResult.value === null) ? 'undefined' : typeof iterationResult.value
                    });
                assertionCount += 7 + (expectedCount * 3);
                if (testDataItem.supportsReturn) {
                    stepResult.setOutputMessage("Executing " + methodPseudoCode);
                    try {
                        iterator = x_g_inte_site_17.Site17Util.limitIterator(createSource(), count);
                    }
                    catch (e) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + methodPseudoCode, e);
                        return false;
                    }
                    stepResult.setOutputMessage("Executed " + methodPseudoCode);
                    psb = assignmentPsb.appendStatement('iterator.return()');
                    stepResult.setOutputMessage("Executing " + psb.toString());
                    try {
                        iterationResult = iterator["return"]();
                    }
                    catch (e) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                        return false;
                    }
                    stepResult.setOutputMessage("Executed " + psb.toString());
                    assertEqual({
                        name: 'typeof iterationResult',
                        shouldbe: 'object',
                        value: (iterationResult === null) ? 'null' : typeof iterationResult
                    });
                    assertEqual({
                        name: 'iterationResult.done',
                        shouldbe: true,
                        value: iterationResult.done
                    });
                    assertEqual({
                        name: 'typeof iterationResult.value',
                        shouldbe: 'undefined',
                        value: (iterationResult.value === null) ? 'undefined' : typeof iterationResult.value
                    });
                    psb = psb.appendStatement('iterator.next()');
                    stepResult.setOutputMessage("Executing " + psb.toString());
                    try {
                        iterationResult = iterator.next();
                    }
                    catch (e) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                        return false;
                    }
                    stepResult.setOutputMessage("Executed " + psb.toString());
                    assertEqual({
                        name: 'typeof iterationResult',
                        shouldbe: 'object',
                        value: (iterationResult === null) ? 'null' : typeof iterationResult
                    });
                    assertEqual({
                        name: 'iterationResult.done',
                        shouldbe: true,
                        value: iterationResult.done
                    });
                    assertEqual({
                        name: 'typeof iterationResult.value',
                        shouldbe: 'undefined',
                        value: (iterationResult.value === null) ? 'undefined' : typeof iterationResult.value
                    });
                    stepResult.setOutputMessage("Executing " + methodPseudoCode);
                    try {
                        iterator = x_g_inte_site_17.Site17Util.limitIterator(createSource(), count);
                    }
                    catch (e) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + methodPseudoCode, e);
                        return false;
                    }
                    stepResult.setOutputMessage("Executed " + methodPseudoCode);
                    psb = assignmentPsb.appendStatement('iterator.return("Finally)');
                    stepResult.setOutputMessage("Executing " + psb.toString());
                    try {
                        iterationResult = iterator["return"]("Finally");
                    }
                    catch (e) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                        return false;
                    }
                    stepResult.setOutputMessage("Executed " + psb.toString());
                    assertEqual({
                        name: 'typeof iterationResult',
                        shouldbe: 'object',
                        value: (iterationResult === null) ? 'null' : typeof iterationResult
                    });
                    assertEqual({
                        name: 'iterationResult.done',
                        shouldbe: true,
                        value: iterationResult.done
                    });
                    assertEqual({
                        name: 'iterationResult.value',
                        shouldbe: 'Finally',
                        value: iterationResult.value
                    });
                    psb = psb.appendStatement('iterator.next()');
                    stepResult.setOutputMessage("Executing " + psb.toString());
                    try {
                        iterationResult = iterator.next();
                    }
                    catch (e) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                        return false;
                    }
                    stepResult.setOutputMessage("Executed " + psb.toString());
                    assertEqual({
                        name: 'typeof iterationResult',
                        shouldbe: 'object',
                        value: (iterationResult === null) ? 'null' : typeof iterationResult
                    });
                    assertEqual({
                        name: 'iterationResult.done',
                        shouldbe: true,
                        value: iterationResult.done
                    });
                    assertEqual({
                        name: 'iterationResult.value',
                        shouldbe: 'Finally',
                        value: iterationResult.value
                    });
                    assertionCount += 12;
                    if (expectedCount > 0) {
                        stepResult.setOutputMessage("Executing " + methodPseudoCode);
                        try {
                            iterator = x_g_inte_site_17.Site17Util.limitIterator(createSource(), count);
                        }
                        catch (e) {
                            atfHelper.setFailed('Unexpected exception while invoking ' + methodPseudoCode, e);
                            return false;
                        }
                        stepResult.setOutputMessage("Executed " + methodPseudoCode);
                        assignmentPsb.setComment('return test');
                        arg = testDataItem.iterations[0].arg;
                        if (typeof arg === 'undefined') {
                            psb = assignmentPsb.appendStatement('iterator.next()').setComment('iteration: 0');
                            stepResult.setOutputMessage("Executing " + psb.toString());
                            try {
                                iterationResult = iterator.next();
                            }
                            catch (e) {
                                atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                                return false;
                            }
                        }
                        else {
                            psb = assignmentPsb.appendStatement('iterator.next(' + JSON.stringify(arg) + ')').setComment('iteration: 0');
                            stepResult.setOutputMessage("Executing " + psb.toString());
                            try {
                                iterationResult = iterator.next(arg);
                            }
                            catch (e) {
                                atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                                return false;
                            }
                        }
                        stepResult.setOutputMessage("Executed " + psb.toString());
                        assertEqual({
                            name: 'typeof iterationResult',
                            shouldbe: 'object',
                            value: (iterationResult === null) ? 'null' : typeof iterationResult
                        });
                        assertEqual({
                            name: 'iterationResult.done',
                            shouldbe: false,
                            value: iterationResult.done === true
                        });
                        assertEqual({
                            name: 'iterationResult.value',
                            shouldbe: values[0],
                            value: iterationResult.value
                        });
                        psb = psb.appendStatement('iterator.return()');
                        stepResult.setOutputMessage("Executing " + psb.toString());
                        try {
                            iterationResult = iterator["return"]();
                        }
                        catch (e) {
                            atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                            return false;
                        }
                        stepResult.setOutputMessage("Executed " + psb.toString());
                        assertEqual({
                            name: 'typeof iterationResult',
                            shouldbe: 'object',
                            value: (iterationResult === null) ? 'null' : typeof iterationResult
                        });
                        assertEqual({
                            name: 'iterationResult.done',
                            shouldbe: true,
                            value: iterationResult.done
                        });
                        assertEqual({
                            name: 'typeof iterationResult.value',
                            shouldbe: 'undefined',
                            value: (iterationResult.value === null) ? 'undefined' : typeof iterationResult.value
                        });
                        psb = psb.appendStatement('iterator.next()');
                        stepResult.setOutputMessage("Executing " + psb.toString());
                        try {
                            iterationResult = iterator.next();
                        }
                        catch (e) {
                            atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                            return false;
                        }
                        stepResult.setOutputMessage("Executed " + psb.toString());
                        assertEqual({
                            name: 'typeof iterationResult',
                            shouldbe: 'object',
                            value: (iterationResult === null) ? 'null' : typeof iterationResult
                        });
                        assertEqual({
                            name: 'iterationResult.done',
                            shouldbe: true,
                            value: iterationResult.done
                        });
                        assertEqual({
                            name: 'typeof iterationResult.value',
                            shouldbe: 'undefined',
                            value: (iterationResult.value === null) ? 'undefined' : typeof iterationResult.value
                        });
                        stepResult.setOutputMessage("Executing " + methodPseudoCode);
                        try {
                            iterator = x_g_inte_site_17.Site17Util.limitIterator(createSource(), count);
                        }
                        catch (e) {
                            atfHelper.setFailed('Unexpected exception while invoking ' + methodPseudoCode, e);
                            return false;
                        }
                        stepResult.setOutputMessage("Executed " + methodPseudoCode);
                        if (typeof arg === 'undefined') {
                            psb = psb.appendStatement('iterator.next()').setComment('iteration: 0');
                            stepResult.setOutputMessage("Executing " + psb.toString());
                            try {
                                iterationResult = iterator.next();
                            }
                            catch (e) {
                                atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                                return false;
                            }
                        }
                        else {
                            psb = psb.appendStatement('iterator.next(' + JSON.stringify(arg) + ')').setComment('iteration: 0');
                            stepResult.setOutputMessage("Executing " + psb.toString());
                            try {
                                iterationResult = iterator.next(arg);
                            }
                            catch (e) {
                                atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                                return false;
                            }
                        }
                        stepResult.setOutputMessage("Executed " + psb.toString());
                        assertEqual({
                            name: 'typeof iterationResult',
                            shouldbe: 'object',
                            value: (iterationResult === null) ? 'null' : typeof iterationResult
                        });
                        assertEqual({
                            name: 'iterationResult.done',
                            shouldbe: false,
                            value: iterationResult.done === true
                        });
                        assertEqual({
                            name: 'iterationResult.value',
                            shouldbe: values[0],
                            value: iterationResult.value
                        });
                        psb = psb.appendStatement('iterator.return("Finally")');
                        stepResult.setOutputMessage("Executing " + psb.toString());
                        try {
                            iterationResult = iterator["return"]("Finally");
                        }
                        catch (e) {
                            atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                            return false;
                        }
                        stepResult.setOutputMessage("Executed " + psb.toString());
                        assertEqual({
                            name: 'typeof iterationResult',
                            shouldbe: 'object',
                            value: (iterationResult === null) ? 'null' : typeof iterationResult
                        });
                        assertEqual({
                            name: 'iterationResult.done',
                            shouldbe: true,
                            value: iterationResult.done
                        });
                        assertEqual({
                            name: 'iterationResult.value',
                            shouldbe: 'Finally',
                            value: iterationResult.value
                        });
                        psb = psb.appendStatement('iterator.next()');
                        stepResult.setOutputMessage("Executing " + psb.toString());
                        try {
                            iterationResult = iterator.next();
                        }
                        catch (e) {
                            atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                            return false;
                        }
                        stepResult.setOutputMessage("Executed " + psb.toString());
                        assertEqual({
                            name: 'typeof iterationResult',
                            shouldbe: 'object',
                            value: (iterationResult === null) ? 'null' : typeof iterationResult
                        });
                        assertEqual({
                            name: 'iterationResult.done',
                            shouldbe: true,
                            value: iterationResult.done
                        });
                        assertEqual({
                            name: 'iterationResult.value',
                            shouldbe: 'Finally',
                            value: iterationResult.value
                        });
                        assertionCount += 18;
                    }
                }
                if (typeof testDataItem.onThrow !== 'number')
                    continue;
                stepResult.setOutputMessage("Executing " + methodPseudoCode);
                try {
                    iterator = x_g_inte_site_17.Site17Util.limitIterator(createSource(), count);
                }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + methodPseudoCode, e);
                    return false;
                }
                stepResult.setOutputMessage("Executed " + methodPseudoCode);
                psb = assignmentPsb.setComment().appendStatement('iterator.throw()');
                stepResult.setOutputMessage("Executing " + psb.toString());
                try {
                    iterationResult = iterator["throw"]();
                }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                    return false;
                }
                stepResult.setOutputMessage("Executed " + psb.toString());
                assertEqual({
                    name: 'typeof iterationResult',
                    shouldbe: 'object',
                    value: (iterationResult === null) ? 'null' : typeof iterationResult
                });
                assertEqual({
                    name: 'iterationResult.done',
                    shouldbe: true,
                    value: iterationResult.done
                });
                assertEqual({
                    name: 'iterationResult.value',
                    shouldbe: "Error Code " + testDataItem.onThrow,
                    value: iterationResult.value
                });
                psb = psb.appendStatement('iterator.next()');
                stepResult.setOutputMessage("Executing " + psb.toString());
                try {
                    iterationResult = iterator.next();
                }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                    return false;
                }
                stepResult.setOutputMessage("Executed " + psb.toString());
                assertEqual({
                    name: 'typeof iterationResult',
                    shouldbe: 'object',
                    value: (iterationResult === null) ? 'null' : typeof iterationResult
                });
                assertEqual({
                    name: 'iterationResult.done',
                    shouldbe: true,
                    value: iterationResult.done
                });
                assertEqual({
                    name: 'iterationResult.value',
                    shouldbe: "Error Code " + testDataItem.onThrow,
                    value: iterationResult.value
                });
                stepResult.setOutputMessage("Executing " + methodPseudoCode);
                try {
                    iterator = x_g_inte_site_17.Site17Util.limitIterator(createSource(), count);
                }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + methodPseudoCode, e);
                    return false;
                }
                stepResult.setOutputMessage("Executed " + methodPseudoCode);
                psb = assignmentPsb.appendStatement('iterator.throw("Abort!")');
                stepResult.setOutputMessage("Executing " + psb.toString());
                try {
                    iterationResult = iterator["throw"]("Abort!");
                }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                    return false;
                }
                stepResult.setOutputMessage("Executed " + psb.toString());
                assertEqual({
                    name: 'typeof iterationResult',
                    shouldbe: 'object',
                    value: (iterationResult === null) ? 'null' : typeof iterationResult
                });
                assertEqual({
                    name: 'iterationResult.done',
                    shouldbe: true,
                    value: iterationResult.done
                });
                assertEqual({
                    name: 'iterationResult.value',
                    shouldbe: 'Abort! (Code ' + testDataItem.onThrow + ')',
                    value: iterationResult.value
                });
                psb = psb.appendStatement('iterator.next()');
                stepResult.setOutputMessage("Executing " + psb.toString());
                try {
                    iterationResult = iterator.next();
                }
                catch (e) {
                    atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                    return false;
                }
                stepResult.setOutputMessage("Executed " + psb.toString());
                assertEqual({
                    name: 'typeof iterationResult',
                    shouldbe: 'object',
                    value: (iterationResult === null) ? 'null' : typeof iterationResult
                });
                assertEqual({
                    name: 'iterationResult.done',
                    shouldbe: true,
                    value: iterationResult.done
                });
                assertEqual({
                    name: 'iterationResult.value',
                    shouldbe: 'Abort! (Code ' + testDataItem.onThrow + ')',
                    value: iterationResult.value
                });
                assertionCount += 12;
                if (expectedCount > 0) {
                    stepResult.setOutputMessage("Executing " + methodPseudoCode);
                    try {
                        iterator = x_g_inte_site_17.Site17Util.limitIterator(createSource(), count);
                    }
                    catch (e) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + methodPseudoCode, e);
                        return false;
                    }
                    stepResult.setOutputMessage("Executed " + methodPseudoCode);
                    assignmentPsb.setComment('throw test');
                    arg = testDataItem.iterations[0].arg;
                    if (typeof arg === 'undefined') {
                        psb = assignmentPsb.appendStatement('iterator.next()').setComment('iteration: 0');
                        stepResult.setOutputMessage("Executing " + psb.toString());
                        try {
                            iterationResult = iterator.next();
                        }
                        catch (e) {
                            atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                            return false;
                        }
                    }
                    else {
                        psb = assignmentPsb.appendStatement('iterator.next(' + JSON.stringify(arg) + ')').setComment('iteration: 0');
                        stepResult.setOutputMessage("Executing " + psb.toString());
                        try {
                            iterationResult = iterator.next(arg);
                        }
                        catch (e) {
                            atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                            return false;
                        }
                    }
                    stepResult.setOutputMessage("Executed " + psb.toString());
                    assertEqual({
                        name: 'typeof iterationResult',
                        shouldbe: 'object',
                        value: (iterationResult === null) ? 'null' : typeof iterationResult
                    });
                    assertEqual({
                        name: 'iterationResult.done',
                        shouldbe: false,
                        value: iterationResult.done === true
                    });
                    assertEqual({
                        name: 'iterationResult.value',
                        shouldbe: values[0],
                        value: iterationResult.value
                    });
                    psb = assignmentPsb.appendStatement('iterator.throw()');
                    stepResult.setOutputMessage("Executing " + psb.toString());
                    try {
                        iterationResult = iterator["throw"]();
                    }
                    catch (e) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                        return false;
                    }
                    stepResult.setOutputMessage("Executed " + psb.toString());
                    assertEqual({
                        name: 'typeof iterationResult',
                        shouldbe: 'object',
                        value: (iterationResult === null) ? 'null' : typeof iterationResult
                    });
                    assertEqual({
                        name: 'iterationResult.done',
                        shouldbe: true,
                        value: iterationResult.done
                    });
                    assertEqual({
                        name: 'iterationResult.value',
                        shouldbe: "Error Code " + testDataItem.onThrow,
                        value: iterationResult.value
                    });
                    psb = assignmentPsb.appendStatement('iterator.next()');
                    stepResult.setOutputMessage("Executing " + psb.toString());
                    try {
                        iterationResult = iterator.next();
                    }
                    catch (e) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                        return false;
                    }
                    stepResult.setOutputMessage("Executed " + psb.toString());
                    assertEqual({
                        name: 'typeof iterationResult',
                        shouldbe: 'object',
                        value: (iterationResult === null) ? 'null' : typeof iterationResult
                    });
                    assertEqual({
                        name: 'iterationResult.done',
                        shouldbe: true,
                        value: iterationResult.done
                    });
                    assertEqual({
                        name: 'iterationResult.value',
                        shouldbe: "Error Code " + testDataItem.onThrow,
                        value: iterationResult.value
                    });
                    stepResult.setOutputMessage("Executing " + methodPseudoCode);
                    try {
                        iterator = x_g_inte_site_17.Site17Util.limitIterator(createSource(), count);
                    }
                    catch (e) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + methodPseudoCode, e);
                        return false;
                    }
                    stepResult.setOutputMessage("Executed " + methodPseudoCode);
                    if (typeof arg === 'undefined') {
                        psb = assignmentPsb.appendStatement('iterator.next()').setComment('iteration: 0');
                        stepResult.setOutputMessage("Executing " + psb.toString());
                        try {
                            iterationResult = iterator.next();
                        }
                        catch (e) {
                            atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                            return false;
                        }
                    }
                    else {
                        psb = assignmentPsb.appendStatement('iterator.next(' + JSON.stringify(arg) + ')').setComment('iteration: 0');
                        stepResult.setOutputMessage("Executing " + psb.toString());
                        try {
                            iterationResult = iterator.next(arg);
                        }
                        catch (e) {
                            atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                            return false;
                        }
                    }
                    stepResult.setOutputMessage("Executed " + psb.toString());
                    assertEqual({
                        name: 'typeof iterationResult',
                        shouldbe: 'object',
                        value: (iterationResult === null) ? 'null' : typeof iterationResult
                    });
                    assertEqual({
                        name: 'iterationResult.done',
                        shouldbe: false,
                        value: iterationResult.done === true
                    });
                    assertEqual({
                        name: 'iterationResult.value',
                        shouldbe: values[0],
                        value: iterationResult.value
                    });
                    psb = assignmentPsb.appendStatement('iterator.throw("Abort!")');
                    stepResult.setOutputMessage("Executing " + psb.toString());
                    try {
                        iterationResult = iterator["throw"]("Abort!");
                    }
                    catch (e) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                        return false;
                    }
                    stepResult.setOutputMessage("Executed " + psb.toString());
                    assertEqual({
                        name: 'typeof iterationResult',
                        shouldbe: 'object',
                        value: (iterationResult === null) ? 'null' : typeof iterationResult
                    });
                    assertEqual({
                        name: 'iterationResult.done',
                        shouldbe: true,
                        value: iterationResult.done
                    });
                    assertEqual({
                        name: 'iterationResult.value',
                        shouldbe: 'Abort! (Code ' + testDataItem.onThrow + ')',
                        value: iterationResult.value
                    });
                    psb = assignmentPsb.appendStatement('iterator.next()');
                    stepResult.setOutputMessage("Executing " + psb.toString());
                    try {
                        iterationResult = iterator.next();
                    }
                    catch (e) {
                        atfHelper.setFailed('Unexpected exception while invoking ' + psb.statement(), e);
                        return false;
                    }
                    stepResult.setOutputMessage("Executed " + psb.toString());
                    assertEqual({
                        name: 'typeof iterationResult',
                        shouldbe: 'object',
                        value: (iterationResult === null) ? 'null' : typeof iterationResult
                    });
                    assertEqual({
                        name: 'iterationResult.done',
                        shouldbe: true,
                        value: iterationResult.done
                    });
                    assertEqual({
                        name: 'iterationResult.value',
                        shouldbe: 'Abort! (Code ' + testDataItem.onThrow + ')',
                        value: iterationResult.value
                    });
                    assertionCount += 18;
                }
            }
        }
        stepResult.setOutputMessage(assertionCount + ' assertions evaluated');
        return true;
    })(outputs, steps, stepResult, assertEqual);
})(site17Util_LimitIteratorTest || (site17Util_LimitIteratorTest = {}));
var site17Util_IteratorToArrayTest;
(function (site17Util_IteratorToArrayTest) {
    (function (outputs, steps, stepResult, assertEqual) {
        var atfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);
        var values = [1, 2, 3, 5, 7, 11];
        stepResult.setOutputMessage("Executing iteratorFromArray(" + JSON.stringify(values) + ")");
        var source = x_g_inte_site_17.Site17Util.iteratorFromArray(values);
        stepResult.setOutputMessage("Executed iteratorFromArray(" + JSON.stringify(values) + ")");
        var limit = 3;
        var returnValue;
        var idx;
        var pseudoCode = 'iteratorToArray<number>(' + JSON.stringify(values) + '.iterator(), ' + limit + ')';
        try {
            returnValue = x_g_inte_site_17.Site17Util.iteratorToArray(source, limit);
        }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
            return false;
        }
        assertEqual({
            name: 'isArray(returnValue)',
            shouldbe: true,
            value: Array.isArray(returnValue)
        });
        assertEqual({
            name: 'returnValue',
            shouldbe: limit,
            value: returnValue.length
        });
        for (idx = 0; idx < limit; idx++) {
            assertEqual({
                name: 'returnValue[' + idx + ']',
                shouldbe: values[idx],
                value: returnValue[idx]
            });
        }
        limit = values.length + 1;
        pseudoCode = 'iteratorToArray<number>(' + JSON.stringify(values) + '.iterator(), ' + limit + ')';
        stepResult.setOutputMessage("Executing iteratorFromArray(" + JSON.stringify(values) + ")");
        source = x_g_inte_site_17.Site17Util.iteratorFromArray(values);
        stepResult.setOutputMessage("Executed iteratorFromArray(" + JSON.stringify(values) + ")");
        try {
            returnValue = x_g_inte_site_17.Site17Util.iteratorToArray(source, limit);
        }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
            return false;
        }
        assertEqual({
            name: 'isArray(returnValue)',
            shouldbe: true,
            value: Array.isArray(returnValue)
        });
        assertEqual({
            name: 'returnValue.length',
            shouldbe: values.length,
            value: returnValue.length
        });
        for (idx = 0; idx < values.length; idx++) {
            assertEqual({
                name: 'returnValue[' + idx + ']',
                shouldbe: values[idx],
                value: returnValue[idx]
            });
        }
        limit = 0;
        pseudoCode = 'iteratorToArray<number>(' + JSON.stringify(values) + '.iterator(), ' + limit + ')';
        stepResult.setOutputMessage("Executing iteratorFromArray(" + JSON.stringify(values) + ")");
        source = x_g_inte_site_17.Site17Util.iteratorFromArray(values);
        stepResult.setOutputMessage("Executed iteratorFromArray(" + JSON.stringify(values) + ")");
        try {
            returnValue = x_g_inte_site_17.Site17Util.iteratorToArray(source, limit);
        }
        catch (e) {
            atfHelper.setFailed('Unexpected exception while invoking ' + pseudoCode, e);
            return false;
        }
        assertEqual({
            name: 'isArray(returnValue)',
            shouldbe: true,
            value: Array.isArray(returnValue)
        });
        assertEqual({
            name: 'returnValue.length',
            shouldbe: limit,
            value: returnValue.length
        });
        stepResult.setOutputMessage((9 + values.length) + ' assertions evaluated');
        return true;
    })(outputs, steps, stepResult, assertEqual);
})(site17Util_IteratorToArrayTest || (site17Util_IteratorToArrayTest = {}));
var site17Util_RecordTypesTest;
(function (site17Util_RecordTypesTest) {
    (function (outputs, steps, stepResult, assertEqual) {
        var atfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);
        return true;
    })(outputs, steps, stepResult, assertEqual);
})(site17Util_RecordTypesTest || (site17Util_RecordTypesTest = {}));
var site17Util_isVipTest;
(function (site17Util_isVipTest) {
    (function (outputs, steps, stepResult, assertEqual) {
        var atfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);
        return true;
    })(outputs, steps, stepResult, assertEqual);
})(site17Util_isVipTest || (site17Util_isVipTest = {}));
var site17Util_RelatedRecordsTest;
(function (site17Util_RelatedRecordsTest) {
    (function (outputs, steps, stepResult, assertEqual) {
        var atfHelper = new x_g_inte_site_17.AtfHelper(steps, stepResult);
        return true;
    })(outputs, steps, stepResult, assertEqual);
})(site17Util_RelatedRecordsTest || (site17Util_RelatedRecordsTest = {}));
