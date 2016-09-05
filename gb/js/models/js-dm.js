'use strict';

let js = {
    
    /* JavaScript "reference":
    
       1. http://help.dottoro.com/ljsdaoxj.php
       
       2. https://msdn.microsoft.com/en-us/library/yek4tbz0(v=vs.94).aspx
       
       3. https://developer.mozilla.org/en-US/docs/Web/JavaScript
       
       4. http://www.w3schools.com/jsref/
       
       5. http://www.javascriptkit.com/jsref/
       
       6. https://msdn.microsoft.com/en-us/library/d1et7k7c(v=vs.94).aspx
       
       7. http://www.planetpdf.com/forumarchive/CoreRefrenceJS15.pdf
       
       8. http://wps.aw.com/wps/media/objects/2234/2287950/javascript_refererence.pdf
       
       9. http://www.webreference.com/javascript/reference/core_ref/contents.html
       
      10. http://www.java2s.com/Code/JavaScriptReference/CatalogJavaScriptReference.htm
       
    */ 
    
    native: {
        
        objects: {
        
            "_": "Arguments, Array, Boolean, Date, Error, EvalError, Function, JSON, Math, Number, Object, RangeError, ReferenceError, RegEx, String, SyntaxError, TypeError, URIError",
            
            mdn: "@@iterator, concat, copyWithin, entries, every, fill, filter, find, findIndex, forEach, includes, indexOf, join, keys, lastIndexOf, map, of, pop, push, reduce, reduceRight, reverse, shift, slice, some, sort, splice, toLocaleString, toSource, toString, unshift, values"
        
        },
        
        methods: {
            
            msdn: "anchor, apply, atEnd, big, bind, blink, bold, call, charAt, charCodeAt, compile, concat, dimensions, every, exec, filter, fixed, fontcolor, fontsize, forEach, getDate, getDay, getFullYear, getHours, getItem, getMilliseconds, getMinutes, getMonth, getSeconds, getTime, getTimezoneOffset, getUTCDate, getUTCDay, getUTCFullYear, getUTCHours, getUTCMilliseconds, getUTCMinutes, getUTCMonth, getUTCSeconds, getVarDate, getYear, hasOwnProperty, indexOf, isPrototypeOf, italics, item, join, lastIndexOf, lbound, link, localeCompare, map, match, moveFirst, moveNext, pop, propertyIsEnumerable, push, reduce, reduceRight, replace, reverse, search, setDate, setFullYear, setHours, setMilliseconds, setMinutes, setMonth, setSeconds, setTime, setUTCDate, setUTCFullYear, setUTCHours, setUTCMilliseconds, setUTCMinutes, setUTCMonth, setUTCSeconds, setYear, shift, slice, small, some, sort, splice, split, strike, sub, substr, substring, sup, test, toArray, toDateString, toExponential, toFixed, toGMTString, toISOString, toJSON, toLocaleDateString, toLocaleLowerCase, toLocaleString, toLocaleTimeString, toLocaleUpperCase, toLowerCase, toPrecision, toString, toTimeString, toUpperCase, toUTCString, trim, ubound, unshift, valueOf",
            
            mdn: "abs, acos, acosh, add, addSaturate, all, allTrue, anchor, and, apply, asin, asinh, assign, atan, atan2, atanh, big, bind, blink, bold, call, catch, cbrt, ceil, charAt, charCodeAt, check, clear, clz32, codePointAt, compareExchange, compile, concat, construct, copyWithin, cos, cosh, create, defineProperties, defineProperty, delete, deleteProperty, div, endsWith, entries, enumerate, equal, eval, every, exchange, exec, exp, expm1, extractLane, fill, filter, find, findIndex, fixed, floor, fontcolor, fontsize, for, forEach, freeze, from, fromCharCode, fromCodePoint, fromFloat32x4, fromFloat32x4Bits, fromFloat64x2Bits, fromInt8x16Bits, fromInt16x8Bits, fromInt32x4, fromInt32x4Bits, fromUint8x16Bits, fromUint16x8Bits, fromUint32x4, fromUint32x4Bits, fround, futexWait, futexWake, futexWakeOrRequeue, get, getDate, getDay, getFloat32, getFloat64, getFullYear, getHours, getInt8, getInt16, getInt32, getMilliseconds, getMinutes, getMonth, getNotifier, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, getPrototypeOf, getSeconds, getTime, getTimezoneOffset, getUint8, getUint16, getUint32, getUTCDate, getUTCDay, getUTCFullYear, getUTCHours, getUTCMilliseconds, getUTCMinutes, getUTCMonth, getUTCSeconds, getYear, greaterThan, greaterThanOrEqual, has, hasOwnProperty, hypot, imul, includes, indexOf, is, isArray, isExtensible, isFinite, isFrozen, isGenerator, isInteger, isLockFree, isNaN, isPrototypeOf, isSafeInteger, isSealed, isView, italics, join, keyFor, keys, lastIndexOf, lessThan, lessThanOrEqual, link, load, localeCompare, log, log1p, log2, log10, map, match, max, maxNum, min, minNum, move, mul, neg, next, normalize, not, notEqual, now, observe, of, or, ownKeys, parse, parseFloat, parseInt, pop, pow, preventExtensions, propertyIsEnumerable, prototype[@@iterator], prototype[@@toPrimitive], push, quote, race, random, raw, reciprocalApproximation, reciprocalSqrtApproximation, reduce, reduceRight, reject, repeat, replace, replaceLane, resolve, resolvedOptions, return, reverse, revocable, round, seal, search, select, set, setDate, setFloat32, setFloat64, setFullYear, setHours, setInt8, setInt16, setInt32, setMilliseconds, setMinutes, setMonth, setPrototypeOf, setSeconds, setTime, setUint8, setUint16, setUint32, setUTCDate, setUTCFullYear, setUTCHours, setUTCMilliseconds, setUTCMinutes, setUTCMonth, setUTCSeconds, setYear, shift, shiftLeftByScalar, shiftRightArithmeticByScalar, shiftRightByScalar, shiftRightLogicalByScalar, shuffle, sign, sin, sinh, slice, small, some, sort, splat, splice, split, sqrt, startsWith, store, strike, stringify, sub, subarray, subSaturate, substr, substring, sup, supportedLocalesOf, swizzle, tan, tanh, test, then, throw, toDateString, toExponential, toFixed, toGMTString, toInteger, toISOString, toJSON, toLocaleDateString, toLocaleFormat, toLocaleLowerCase, toLocaleString, toLocaleTimeString, toLocaleUpperCase, toLowerCase, toPrecision, toSource, toString, toTimeString, toUpperCase, toUTCString, transfer, trim, trimLeft, trimRight, trunc, unobserve, unshift, unwatch, UTC, valueOf, values, watch, xor, __defineGetter__, __defineSetter__, __lookupGetter__, __lookupSetter__",
            
            all: "abs, acos, acosh, add, addSaturate, all, allTrue, anchor, and, apply, asin, asinh, assign, atan, atan2, atanh, big, bind, blink, bold, call, catch, cbrt, ceil, charAt, charCodeAt, check, clear, clz32, codePointAt, compareExchange, compile, concat, construct, copyWithin, cos, cosh, create, defineProperties, defineProperty, delete, deleteProperty, div, endsWith, entries, enumerate, equal, eval, every, exchange, exec, exp, expm1, extractLane, fill, filter, find, findIndex, fixed, floor, fontcolor, fontsize, for, forEach, freeze, from, fromCharCode, fromCodePoint, fromFloat32x4, fromFloat32x4Bits, fromFloat64x2Bits, fromInt16x8Bits, fromInt32x4, fromInt32x4Bits, fromInt8x16Bits, fromUint16x8Bits, fromUint32x4, fromUint32x4Bits, fromUint8x16Bits, fround, futexWait, futexWake, futexWakeOrRequeue, get, getDate, getDay, getFloat32, getFloat64, getFullYear, getHours, getInt16, getInt32, getInt8, getMilliseconds, getMinutes, getMonth, getNotifier, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, getPrototypeOf, getSeconds, getTime, getTimezoneOffset, getUTCDate, getUTCDay, getUTCFullYear, getUTCHours, getUTCMilliseconds, getUTCMinutes, getUTCMonth, getUTCSeconds, getUint16, getUint32, getUint8, getYear, greaterThan, greaterThanOrEqual, has, hasOwnProperty, hypot, imul, includes, indexOf, is, isArray, isExtensible, isFinite, isFrozen, isGenerator, isInteger, isLockFree, isNaN, isPrototypeOf, isSafeInteger, isSealed, isView, italics, join, keyFor, keys, lastIndexOf, lessThan, lessThanOrEqual, link, load, localeCompare, log, log10, log1p, log2, map, match, max, maxNum, min, minNum, move, mul, neg, next, normalize, not, notEqual, now, observe, of, or, ownKeys, parse, parseFloat, parseInt, pop, pow, preventExtensions, propertyIsEnumerable, prototype[@@iterator], prototype[@@toPrimitive], push, quote, race, random, raw, reciprocalApproximation, reciprocalSqrtApproximation, reduce, reduceRight, reject, repeat, replace, replaceLane, resolve, resolvedOptions, return, reverse, revocable, round, seal, search, select, set, setDate, setFloat32, setFloat64, setFullYear, setHours, setInt16, setInt32, setInt8, setMilliseconds, setMinutes, setMonth, setPrototypeOf, setSeconds, setTime, setUTCDate, setUTCFullYear, setUTCHours, setUTCMilliseconds, setUTCMinutes, setUTCMonth, setUTCSeconds, setUint16, setUint32, setUint8, setYear, shift, shiftLeftByScalar, shiftRightArithmeticByScalar, shiftRightByScalar, shiftRightLogicalByScalar, shuffle, sign, sin, sinh, slice, small, some, sort, splat, splice, split, sqrt, startsWith, store, strike, stringify, sub, subSaturate, subarray, substr, substring, sup, supportedLocalesOf, swizzle, tan, tanh, test, then, throw, toDateString, toExponential, toFixed, toGMTString, toISOString, toInteger, toJSON, toLocaleDateString, toLocaleFormat, toLocaleLowerCase, toLocaleString, toLocaleTimeString, toLocaleUpperCase, toLowerCase, toPrecision, toSource, toString, toTimeString, toUTCString, toUpperCase, transfer, trim, trimLeft, trimRight, trunc, UTC, unobserve, unshift, unwatch, valueOf, values, watch, xor, __defineGetter__, __defineSetter__, __lookupGetter__, __lookupSetter__"
        },
        
                /* Reference
                            
                   1. https://msdn.microsoft.com/en-us/library/windows/apps/c6hac83s(v=vs.94).aspx
                             
                   2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Methods_Index
                */
        
        properties: {
            
            msdn: "arguments, callee, caller, constructor, description, global, ignoreCase, index, input, lastIndex, lastMatch, lastParen, leftContext, length, message, multiline, name, number, prototype, rightContext, source, __proto__",
            
            mdn: "@@iterator, @@species, @@toStringTag, arguments, arity, buffer, byteLength, byteOffset, BYTES_PER_ELEMENT, callee, caller, columnNumber, compare, constructor, displayName, E, EPSILON, fileName, flags, format, global, ignoreCase, input, iterator, lastIndex, lastMatch, lastParen, leftContext, length, lineNumber, LN2, LN10, LOG2E, LOG10E, match, MAX_SAFE_INTEGER, MAX_VALUE, message, MIN_SAFE_INTEGER, MIN_VALUE, multiline, name, NaN, NEGATIVE_INFINITY, PI, POSITIVE_INFINITY, prototype, rightContext, size, source, species, SQRT1_2, SQRT2, stack, sticky, toPrimitive, unicode, __count__, __noSuchMethod__, __parent__, __proto__",
            
            all: "@@iterator, @@species, @@toStringTag, arguments, arity, buffer, byteLength, byteOffset, BYTES_PER_ELEMENT, callee, caller, columnNumber, compare, constructor, description, displayName, E, EPSILON, fileName, flags, format, global, ignoreCase, index, input, iterator, lastIndex, lastMatch, lastParen, leftContext, length, lineNumber, LN2, LN10, LOG2E, LOG10E, match, MAX_SAFE_INTEGER, MAX_VALUE, message, MIN_SAFE_INTEGER, MIN_VALUE, multiline, name, NaN, NEGATIVE_INFINITY, number, PI, POSITIVE_INFINITY, prototype, rightContext, size, source, species, SQRT1_2, SQRT2, stack, sticky, toPrimitive, unicode, __count__, __noSuchMethod__, __parent__, __proto__"
        
                /* Reference
                            
                   1. https://msdn.microsoft.com/en-us/library/xyad316h(v=vs.94).aspx
                             
                   2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Properties_Index
                */
        },
        
        object: {
            
            "Arguments": {
            
                properties: "length, prorotype",
            
                property: {
            
                },
            
                methods: "",
            
                method: {
            
                }
            },
            
            "Array": {
                
                "symantics":"<p>An array is an ordered collection of values. Each value is called an element, and each element has a numeric position in the array, known as its index. JavaScript arrays are untyped: an array element may be of any type, and different elements of the same array may be of different types. Array elements may even be objects or other arrays, which allows you to create complex data structures, such as arrays of objects and arrays of arrays. JavaScript arrays are zero-based and use 32-bit indexes: the index of the first element is 0, and the highest possible index is 4294967294 (232−2), for a maximum array size of 4,294,967,295 elements. JavaScript arrays are dynamic: they grow or shrink as needed and there is no need to declare a fixed size for the array when you create it or to reallocate it when the size changes. JavaScript arrays may be sparse: the elements need not have contiguous indexes and there may be gaps.</p><p>JavaScript arrays are a specialized form of JavaScript object, and array indexes are really little more than property names that happen to be integers.</p> [JTDG-6ed, p. 141]",

                inherits: "The <code>Array</code> object inherits from the  <code>Array.prototype</code> object and <code>Function.prototype</code> objects.",
                
                syntax: [
                    
                    ['var arr = "[]"'],
                    
                    ['var arr = "["[<i>element0</i>[, <i>element1</i>[, ...[, <i>elementN</i>]"]"'],
                    
                    ["var <i>arr</i> = new Array()"],
                    
                    ["var <i>arr</i> = new Array([<i>size</i>])"],
                    
                    ["var <i>arr</i> = new Array([<i>element0</i>[, <i>element1</i>[, ...[, <i>elementN</i>]]]])"],
                    
                    ["<i>regex</i>.exec(<i>str</i>)"]
                ],
                
                "parameters": {
                    
                    arr: "Required. An instance of the Array Object",
                    
                    elementN: "Optional. Initializes the array with the explicit element: <i>elementN</i>, except in the case where a single argument <i>size</i> is passed to the Array constructor and that argument is a number. Note that this special case only applies to JavaScript arrays created with the Array constructor, not array literals created with the bracket syntax.",
                    
                    regex: "Required. An instance of the <code>RegExp</code> object.",
                    
                    size: "Optional. Initializes the array to <i>size</i> elements"
                },
                
                remarks: "After an array is created, you can access the individual elements of the array by using [ ] notation. Note that arrays in JavaScript are zero-based.",
                
                example: "var my_array=new Array;for(i=0;i<10;i++)my_array[i]=i;x=my_array[4],document.write(x);",
                   
                "reference": [
            
                    ["MDN", "Array", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"],
                    
                    ["MSDN", "Array Object (JavaScript)", "https://msdn.microsoft.com/en-us/LIBRary/k4h76zbx(v=vs.94).aspx"],
            
                    ["Dottoro", "Array object", "http://help.dottoro.com/ljnkadsn.php"],
                    
                    ["w3schools", "JavaScript Array Reference", "http://www.w3schools.com/jsref/jsref_obj_array.asp"]
            
                ],
                
                members: {
            
                    properties: "constructor, index, input, length, prototype",
                
                    property: {
                        
                        "constructor": {
                        
                            "symantics": "The constructor property is a member of the prototype of every object that has a prototype. This includes all intrinsic JavaScript objects except the Global and Math objects. The constructor property contains a reference to the function that constructs instances of that particular object.",
                        
                            syntax: "<i>arr</i>.constructor",
                            
                            example: 'var x=new Array;x.constructor==Array?document.write("Object is an Array."):document.write("Object is not an Array.");',
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "constructor Property (Array)", "https://msdn.microsoft.com/en-us/LIBRary/jj155291(v=vs.94).aspx"],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },                        
                        
                        "index": {
                        
                            "symantics": "<p>The index property contains the zero-based position of the matched substring within the complete searched string.</p>",
                            
                            remarks: "Works only for arrays returned by the <code>exec</code> method of the <code>RegEx</code> object.",
                        
                            syntax: "",
                            
                            example: 'var match=/fox/,arr=match.exec("The quick brown fox jumps over the lazy dog.");console.log(arr.index);',
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", "http://help.dottoro.com/ljnkadsn.php#index"]
                        
                            ]
                        
                        },
                        
                        "input": {
                        
                            "symantics": "The input property is a read-only property. It contains the original string against which the regular expression was matched.",
                            
                            remarks: "Works only for arrays returned by the <code>exec</code> method of the <code>RegEx</code> object.",
                        
                            syntax: "<i>arr</i>.input",
                            
                            "parameters": {
                                
                                arr: "Required. An instance of the <code>Array</code> object."
                            },
                            
                            example: 'var match=/fox/,arr=match.exec("The quick brown fox jumps over the lazy dog.");console.log(arr.input);',
                            
                            implemented: "JavaScript 1.1",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                                
                                ["w3resource", "JavaScript input Property : Array Object", "http://www.w3resource.com/javascript/object-property-method/array-input.php"]
                        
                            ]
                        
                        },
                        
                        "length": {
                        
                            "symantics": "Every JavaScript array has a length property. For nonsparse arrays, this property specifies the number of elements in the array. For sparse arrays, length is larger than the index of all elements.",
                            
                            context: "Array.prototype",
                        
                            syntax: "<i>arr</i>.length",
                            
                            example: 'var arr=["A","B","C"];document.write(arr.length);',
                        
                            "reference": [
                        
                                ["MDN", "Array.prototype.length", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length"],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", "http://help.dottoro.com/ljnkadsn.php#length"]
                        
                            ]
                        
                        },
                        
                        "prototype": {
                        
                            "symantics": "<p>The prototype property Returns a reference to the <code>Array.prototype</code> object. The <code>Array.prototype</code> object allows adding properties and methods to the <code>Array</code> object that can be used with instances of the <code>Array</code> object, like any predefined property or method. The prototype property is static, it cannot be accessed from an instance of the <code>Array</code> object, only <code>Array.prototype</code> object is allowed.</p></p>Arrays inherit properties from Array.prototype, which defines a rich set of array manipulation methods. Most of these methods are generic, which means that they work correctly not only for true arrays, but for any “array-like object.",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        }
                    },
                
                    methods: {
                        
                        java2s: "pop, push, reverse, shift, slice, sort, splice, toSource, toString, unshift, valueOf",
                        
                        mdn: "@@iterator, concat, copyWithin, entries, every, fill, filter, find, findIndex, forEach, includes, indexOf, join, keys, lastIndexOf, map, of, pop, push, reduce, reduceRight, reverse, shift, slice, some, sort, splice, toLocaleString, toSource, toString, unshift, values",
                        
                        msdn:
                        
"

constructor Property (Array)
length Property (Array)
prototype Property (Array)
Array.from Function (Array)
Array.isArray Function
Array.of Function (Array)
concat Method (Array)
entries Method (Array)
every Method (Array)
fill Method (Array)
filter Method (Array)
findIndex Method (Array)
forEach Method (Array)
indexOf Method (Array)
join Method (Array)
keys Method (Array)
lastIndexOf Method (Array)
map Method (Array)
pop Method (Array)
push Method (Array)
reduce Method (Array)
reduceRight Method (Array)
reverse Method
shift Method (Array)
slice Method (Array)
some Method (Array)
sort Method (Array)
splice Method (Array)
toString Method (Array)
unshift Method (Array)
valueOf Method (Array)
values Method (Array)" ,                      
                        
                        
                        
                        
                        
                        ",
                
                    method: {
                        
                        "@@iterator": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "concat": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "copyWithin": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "entries": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "every": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "fill": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "filter": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "find": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "findIndex": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "forEach": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "includes": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "indexOf": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "join": {
                        
                            "symantics": "The <code>join</code> method concatenates the elements of an array into a string.",
                            
                            "owner": "Array.prototype",
                        
                            "syntax": "<i>str</i> = <i>arr</i>.join([<i>separator</i> = ','])",
                            
                            "parameters": [
                              
                                ["name", "symantics"],
                                ["separater", "Optional. Specifies a string to separate each element of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma. If separator is an empty string, all elements are joined without any characters in between them."]
                            ],
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "keys": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "lastIndexOf": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "map": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "of": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "pop": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "push": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "reduce": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "reduceRight": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "reverse": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "shift": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "slice": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "some": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "sort": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "splice": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "toLocaleString": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "toSource": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "toString": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "unshift": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "values": {
                        
                            "symantics": "",
                        
                            syntax: "",
                        
                            "reference": [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        }
                    }
                }
            },
            
            "Boolean": {

                "symantics":"<p></p><p></p><cite></cite>",

                inherits: "",
                
                syntax: [
                    
                    [""],
                    
                    [""],
                    
                    [""]
                ],
                    
                "reference": [
            
                    ["MDN", "", ""],
                    
                    ["MSDN", "", ""],
            
                    ["Dottoro", "", ""]
            
                ],
                
                members: {
                
                    properties: "",
                
                    property: {
                
                    },
                
                    methods: "",
                
                    method: {
                
                    }
                }
            },
            
            "Date": {

                "symantics":"<p></p><p></p><cite></cite>",

                inherits: "",
                
                syntax: [
                    
                    [""],
                    
                    [""],
                    
                    [""]
                ],
                    
                "reference": [
            
                    ["MDN", "", ""],
                    
                    ["MSDN", "", ""],
            
                    ["Dottoro", "", ""]
            
                ],
                
                members: {
                
                    properties: "",
                
                    property: {
                
                    },
                
                    methods: "",
                
                    method: {
                
                    }
                }
            },
            
            "Error": {

                "symantics":"<p></p><p></p><cite></cite>",

                inherits: "",
                
                syntax: [
                    
                    [""],
                    
                    [""],
                    
                    [""]
                ],
                    
                "reference": [
            
                    ["MDN", "", ""],
                    
                    ["MSDN", "", ""],
            
                    ["Dottoro", "", ""]
            
                ],
                
                members: {
                
                    properties: "",
                
                    property: {
                
                    },
                
                    methods: "",
                
                    method: {
                
                    }
                }
            },
            
            "EvalError": {

                "symantics":"<p></p><p></p><cite></cite>",

                inherits: "",
                
                syntax: [
                    
                    [""],
                    
                    [""],
                    
                    [""]
                ],
                    
                "reference": [
            
                    ["MDN", "", ""],
                    
                    ["MSDN", "", ""],
            
                    ["Dottoro", "", ""]
            
                ],
                
                members: {
                
                    properties: "",
                
                    property: {
                
                    },
                
                    methods: "",
                
                    method: {
                
                    }
                }
            },
            
            "Function": {

                "symantics":"<p></p><p></p><cite></cite>",

                inherits: "",
                
                syntax: [
                    
                    [""],
                    
                    [""],
                    
                    [""]
                ],
                    
                "reference": [
            
                    ["MDN", "", ""],
                    
                    ["MSDN", "", ""],
            
                    ["Dottoro", "", ""]
            
                ],
                
                members: {
                
                    properties: "",
                
                    property: {
                
                    },
                
                    methods: "",
                
                    method: {
                
                    }
                }
            },
            
            "JSON": {

                "symantics":"<p></p><p></p><cite></cite>",

                inherits: "",
                
                syntax: [
                    
                    [""],
                    
                    [""],
                    
                    [""]
                ],
                    
                "reference": [
            
                    ["MDN", "", ""],
                    
                    ["MSDN", "", ""],
            
                    ["Dottoro", "", ""]
            
                ],
                
                members: {
                
                    properties: "",
                
                    property: {
                
                    },
                
                    methods: "",
                
                    method: {
                
                    }
                }
            },
            
            "Math": {

                "symantics":"<p></p><p></p><cite></cite>",

                inherits: "",
                
                syntax: [
                    
                    [""],
                    
                    [""],
                    
                    [""]
                ],
                    
                "reference": [
            
                    ["MDN", "", ""],
                    
                    ["MSDN", "", ""],
            
                    ["Dottoro", "", ""]
            
                ],
                
                members: {
                
                    properties: "",
                
                    property: {
                
                    },
                
                    methods: "",
                
                    method: {
                
                    }
                }
            },
            
            "Number": {

                "symantics":"<p></p><p></p><cite></cite>",

                inherits: "",
                
                syntax: [
                    
                    [""],
                    
                    [""],
                    
                    [""]
                ],
                    
                "reference": [
            
                    ["MDN", "", ""],
                    
                    ["MSDN", "", ""],
            
                    ["Dottoro", "", ""]
            
                ],
                
                members: {
                
                    properties: "",
                
                    property: {
                
                    },
                
                    methods: "",
                
                    method: {
                
                    }
                }
            },
            
            "Object": {

                "symantics":"<p></p><p></p><cite></cite>",

                inherits: "",
                
                syntax: [
                    
                    [""],
                    
                    [""],
                    
                    [""]
                ],
                    
                "reference": [
            
                    ["MDN", "", ""],
                    
                    ["MSDN", "", ""],
            
                    ["Dottoro", "", ""]
            
                ],
                
                members: {
                
                    properties: "",
                
                    property: {
                
                    },
                
                    methods: "",
                
                    method: {
                
                    }
                }
            },
            
            "RangeError": {

                "symantics":"<p></p><p></p><cite></cite>",

                inherits: "",
                
                syntax: [
                    
                    [""],
                    
                    [""],
                    
                    [""]
                ],
                    
                "reference": [
            
                    ["MDN", "", ""],
                    
                    ["MSDN", "", ""],
            
                    ["Dottoro", "", ""]
            
                ],
                
                members: {
                
                    properties: "",
                
                    property: {
                
                    },
                
                    methods: "",
                
                    method: {
                
                    }
                }
            },
            
            "ReferenceError": {

                "symantics":"<p></p><p></p><cite></cite>",

                inherits: "",
                
                syntax: [
                    
                    [""],
                    
                    [""],
                    
                    [""]
                ],
                    
                "reference": [
            
                    ["MDN", "", ""],
                    
                    ["MSDN", "", ""],
            
                    ["Dottoro", "", ""]
            
                ],
                
                members: {
                
                    properties: "",
                
                    property: {
                
                    },
                
                    methods: "",
                
                    method: {
                
                    }
                }
            },
            
            "RegExp": {

                "symantics":"<p></p><p></p><cite></cite>",

                inherits: "",
                
                syntax: [
                    
                    [""],
                    
                    [""],
                    
                    [""]
                ],
                
                remarks: "",
                
                example: "",
                    
                "reference": [
            
                    ["MDN", "", ""],
                    
                    ["MSDN", "", ""],
            
                    ["Dottoro", "", ""]
            
                ],
                
                members: {
                
                    properties: "",
                
                    property: {
                        
                        "lastIndex": {
                        
                            "symantics": "The <code>lastIndex</code> property contains the position following the last character in the match.",
                            
                            remarks: "Works only for arrays returned by the <code>exec</code> method of the <code>RegEx</code> object.",
                        
                            syntax: "",
                            
                            example: 'var regex=/The*/g;arr=regex.exec("The Quick Brown Fox Jumps Over The Lazy Dog.");console.log(arr.lastIndex);',
                        
                            "reference": [
                        
                                ["MDN", "RegExp.lastIndex", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex"],
                                
                                ["MSDN", "lastIndex Property (RegExp) (JavaScript)", "https://msdn.microsoft.com/en-us/LIbrary/9ec1ex6t(v=vs.94).aspx"],
                                
                                ["w3resource", "JavaScript lastIndex Property : RegExp Object", "http://www.w3resource.com/javascript/object-property-method/regexp-lastIndex.php"]
                            ]
                        
                        },                        
                
                    },
                
                    methods: "",
                
                    method: {
                
                    }
                }
            },
            
            "String": {

                "symantics":"<p></p><p></p><cite></cite>",

                inherits: "",
                
                syntax: [
                    
                    [""],
                    
                    [""],
                    
                    [""]
                ],
                    
                "reference": [
            
                    ["MDN", "", ""],
                    
                    ["MSDN", "", ""],
            
                    ["Dottoro", "", ""]
            
                ],
                
                members: {
                
                    properties: "",
                
                    property: {
                
                    },
                
                    methods: "",
                
                    method: {
                
                    }
                }
            },
            
            "SyntaxError": {

                "symantics":"<p></p><p></p><cite></cite>",

                inherits: "",
                
                syntax: [
                    
                    [""],
                    
                    [""],
                    
                    [""]
                ],
                    
                "reference": [
            
                    ["MDN", "", ""],
                    
                    ["MSDN", "", ""],
            
                    ["Dottoro", "", ""]
            
                ],
                
                members: {
                
                    properties: "",
                
                    property: {
                
                    },
                
                    methods: "",
                
                    method: {
                
                    }
                }
            },
            
            "TypeError": {

                
                "symantics":"<p></p><p></p><cite></cite>",

                inherits: "",
                
                syntax: [
                    
                    [""],
                    
                    [""],
                    
                    [""]
                ],
                    
                "reference": [
            
                    ["MDN", "", ""],
                    
                    ["MSDN", "", ""],
            
                    ["Dottoro", "", ""]
            
                ],
                
                members: {
                
                    properties: "",
                
                    property: {
                
                    },
                
                    methods: "",
                
                    method: {
                
                    }
                }
            },
            
            "URIError": {

                
                "symantics":"<p></p><p></p><cite></cite>",

                inherits: "",
                
                syntax: [
                    
                    [""],
                    
                    [""],
                    
                    [""]
                ],
                    
                "reference": [
            
                    ["MDN", "", ""],
                    
                    ["MSDN", "", ""],
            
                    ["Dottoro", "", ""]
            
                ],
                
                members: {
                
                    properties: "",
                
                    property: {
                
                    },
                
                    methods: "",
                
                    method: {
                
                    }
                }
            }       
        }
    }    
};