var js = {
    
    /* JavaScript Reference:
    
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
        
            mdn: "Array, ArrayBuffer, Atomics, Boolean, DataView, Date, Error, EvalError, Float32Array, Float64Array, Function, Generator, GeneratorFunction, Int8Array, Int16Array, Int32Array, InternalError, Intl, Iterator, JSON, Map, Math, Number, Object, ParallelArray, Promise, Proxy, RangeError, ReferenceError, Reflect, RegExp, Set, SharedArrayBuffer, StopIteration, String, Symbol, SyntaxError, TypeError, Uint8Array, Uint8ClampedArray, Uint16Array, Uint32Array, URIError, WeakMap, WeakSet",
            
                /* Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference */
                
            msdn: "ActiveXObject, Arguments, Array, ArrayBuffer, Boolean, DataView, Date, Debug, Enumerator, Error, Float32Array, Float64Array, Function, Global, Int8Array, Int16Array, Int32Array, Intl.Collator, Intl.DateTimeFormat, Intl.NumberFormat, JSON, Map, Math, Number, Object, Promise, Proxy, Reflect, RegExp, Set, String, Symbol, Uint8Array, Uint8ClampedArray, Uint16Array, Uint32Array, VBArray, WeakMap, WeakSet, WinRTError",
            
                /* Reference: https://msdn.microsoft.com/en-us/library/htbw4ywd(v=vs.94).aspx */
                
            java2s: "Array, attribute, Boolean, clientInformation, clipboardData, currentStyle, dataTransfer, Date, defaults, Dialog, document, event, external, Helper, history, implementation, location, Math, mimeType, namespace, navigator, Number, Object, page, plugin, popup, rule, runtimeStyle, screen, selection, String, style, styleSheet, TextNode, TextRange, TextRectangle, userProfile, window",
            
                /* Reference: http://www.java2s.com/Code/JavaScriptReference/Javascript-Objects/CatalogJavascript-Objects.htm */
            
            all: "ActiveXObject, Arguments, Array, ArrayBuffer, Atomics, attribute, Boolean, clientInformation, clipboardData, currentStyle, dataTransfer, DataView, Date, Debug, defaults, Dialog, document, Enumerator, Error, EvalError, event, external, Float32Array, Float64Array, Function, Generator, GeneratorFunction, Global, Helper, history, implementation, Int8Array, Int16Array, Int32Array, InternalError, Intl, Intl.Collator, Intl.DateTimeFormat, Intl.NumberFormat, Iterator, JSON, location, Map, Math, mimeType, namespace, navigator, Number, Object, page, ParallelArray, plugin, popup, Promise, Proxy, RangeError, ReferenceError, Reflect, RegExp, rule, runtimeStyle, screen, selection, Set, SharedArrayBuffer, StopIteration, String, style, styleSheet, Symbol, SyntaxError, TextNode, TextRange, TextRectangle, TypeError, Uint8Array, Uint8ClampedArray, Uint16Array, Uint32Array, URIError, userProfile, VBArray, WeakMap, WeakSet, window, WinRTError"
        },
        
        methods: {
            
            mdn: "abs, acos, acosh, add, addSaturate, all, allTrue, anchor, and, apply, asin, asinh, assign, atan, atan2, atanh, big, bind, blink, bold, call, catch, cbrt, ceil, charAt, charCodeAt, check, clear, clz32, codePointAt, compareExchange, compile, concat, construct, copyWithin, cos, cosh, create, defineProperties, defineProperty, delete, deleteProperty, div, endsWith, entries, enumerate, equal, eval, every, exchange, exec, exp, expm1, extractLane, fill, filter, find, findIndex, fixed, floor, fontcolor, fontsize, for, forEach, freeze, from, fromCharCode, fromCodePoint, fromFloat32x4, fromFloat32x4Bits, fromFloat64x2Bits, fromInt8x16Bits, fromInt16x8Bits, fromInt32x4, fromInt32x4Bits, fromUint8x16Bits, fromUint16x8Bits, fromUint32x4, fromUint32x4Bits, fround, futexWait, futexWake, futexWakeOrRequeue, get, getDate, getDay, getFloat32, getFloat64, getFullYear, getHours, getInt8, getInt16, getInt32, getMilliseconds, getMinutes, getMonth, getNotifier, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, getPrototypeOf, getSeconds, getTime, getTimezoneOffset, getUint8, getUint16, getUint32, getUTCDate, getUTCDay, getUTCFullYear, getUTCHours, getUTCMilliseconds, getUTCMinutes, getUTCMonth, getUTCSeconds, getYear, greaterThan, greaterThanOrEqual, has, hasOwnProperty, hypot, imul, includes, indexOf, is, isArray, isExtensible, isFinite, isFrozen, isGenerator, isInteger, isLockFree, isNaN, isPrototypeOf, isSafeInteger, isSealed, isView, italics, join, keyFor, keys, lastIndexOf, lessThan, lessThanOrEqual, link, load, localeCompare, log, log1p, log2, log10, map, match, max, maxNum, min, minNum, move, mul, neg, next, normalize, not, notEqual, now, observe, of, or, ownKeys, parse, parseFloat, parseInt, pop, pow, preventExtensions, propertyIsEnumerable, prototype[@@iterator], prototype[@@toPrimitive], push, quote, race, random, raw, reciprocalApproximation, reciprocalSqrtApproximation, reduce, reduceRight, reject, repeat, replace, replaceLane, resolve, resolvedOptions, return, reverse, revocable, round, seal, search, select, set, setDate, setFloat32, setFloat64, setFullYear, setHours, setInt8, setInt16, setInt32, setMilliseconds, setMinutes, setMonth, setPrototypeOf, setSeconds, setTime, setUint8, setUint16, setUint32, setUTCDate, setUTCFullYear, setUTCHours, setUTCMilliseconds, setUTCMinutes, setUTCMonth, setUTCSeconds, setYear, shift, shiftLeftByScalar, shiftRightArithmeticByScalar, shiftRightByScalar, shiftRightLogicalByScalar, shuffle, sign, sin, sinh, slice, small, some, sort, splat, splice, split, sqrt, startsWith, store, strike, stringify, sub, subarray, subSaturate, substr, substring, sup, supportedLocalesOf, swizzle, tan, tanh, test, then, throw, toDateString, toExponential, toFixed, toGMTString, toInteger, toISOString, toJSON, toLocaleDateString, toLocaleFormat, toLocaleLowerCase, toLocaleString, toLocaleTimeString, toLocaleUpperCase, toLowerCase, toPrecision, toSource, toString, toTimeString, toUpperCase, toUTCString, transfer, trim, trimLeft, trimRight, trunc, unobserve, unshift, unwatch, UTC, valueOf, values, watch, xor, __defineGetter__, __defineSetter__, __lookupGetter__, __lookupSetter__",
            
                /* Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Methods_Index */
            
            msdn: "anchor, apply, atEnd, big, bind, blink, bold, call, charAt, charCodeAt, compile, concat, dimensions, every, exec, filter, fixed, fontcolor, fontsize, forEach, getDate, getDay, getFullYear, getHours, getItem, getMilliseconds, getMinutes, getMonth, getSeconds, getTime, getTimezoneOffset, getUTCDate, getUTCDay, getUTCFullYear, getUTCHours, getUTCMilliseconds, getUTCMinutes, getUTCMonth, getUTCSeconds, getVarDate, getYear, hasOwnProperty, indexOf, isPrototypeOf, italics, item, join, lastIndexOf, lbound, link, localeCompare, map, match, moveFirst, moveNext, pop, propertyIsEnumerable, push, reduce, reduceRight, replace, reverse, search, setDate, setFullYear, setHours, setMilliseconds, setMinutes, setMonth, setSeconds, setTime, setUTCDate, setUTCFullYear, setUTCHours, setUTCMilliseconds, setUTCMinutes, setUTCMonth, setUTCSeconds, setYear, shift, slice, small, some, sort, splice, split, strike, sub, substr, substring, sup, test, toArray, toDateString, toExponential, toFixed, toGMTString, toISOString, toJSON, toLocaleDateString, toLocaleLowerCase, toLocaleString, toLocaleTimeString, toLocaleUpperCase, toLowerCase, toPrecision, toString, toTimeString, toUpperCase, toUTCString, trim, ubound, unshift, valueOf",
            
                /* Reference: https://msdn.microsoft.com/en-us/library/windows/apps/c6hac83s(v=vs.94).aspx */
                
            java2s: "abs, acos, add, addBehavior, AddChannel, AddDesktopComponent, addElement, AddFavorite, addImport, addPageRule, addReadRequest, addRule, alert, anchor, appendChild, appendData, applyElement, asin, assign, atan, attachEvent, AutoCompleteSaveForm, AutoScan, back, big, blink, blur, bold, ceil, charAt, charCodeAt, ChooseColorDlg, clear, clearAttributes, clearData, clearInterval, clearRequest, clearTimeout, click, cloneNode, close, collapse, compareEndPoints, componentFromPoint, concat, confirm, contains, cos, createAttribute, createCaption, createComment, createControlRange, createDocumentFragment, createElement, createEventObject, createPopup, createRange, createStyleSheet, createTextNode, createTextRange, createTFoot, createTHead, deleteCaption, deleteCell, deleteData, deleteRow, deleteTFoot, deleteTHead, detachEvent, doImport, doReadRequest, doScroll, dragDrop, duplicate, elementFromPoint, empty, escape, eval, execCommand, execScript, exp, findText, fireEvent, firstPage, floor, focus, fontColor, fontSize, forward, fromCharCode, getAdjacentText, getAttribute, getAttributeNode, getBookmark, getCharset, getClientRects, getData, getDay, getElementById, getElementsByName, getElementsByTagName, getExpression, getFullYear, getMilliseconds, getMonth, getNamedItem, getSeconds, getTime, getTimezoneOffset, getUTCDate, getUTCDay, getUTCHours, getUTCMilliseconds, getUTCMinutes, getUTCMonth, getUTCSeconds, getYear, hasChildNodes, hasFocus, hasOwnProperty, hide, ImportExportFavorites, indexOf, inRange, insertAdjacentElement, insertAdjacentText, insertBefore, insertCell, insertData, insertRow, isEqual, isNaN, isPrototypeOf, IsSubscribed, italics, item, javaEnabled, join, lastIndexOf, lastPage, link, localeCompare, log, match, max, mergeAttributes, min, move, moveBy, moveEnd, moveRow, moveStart, moveTo, moveToBookmark, moveToElementText, moveToPoint, namedItem, namedRecordset, navigate, NavigateAndFind, nextPage, normalize, open, parentElement, parse, parseFloat, parseInt, pasteHTML, pop, pow, previousPage, print, prompt, queryCommandEnabled, queryCommandIndeterm, queryCommandState, queryCommandValue, recalc, refresh, releaseCapture, remove, removeAttribute, removeAttributeNode, removeBehavior, removeChild, removeExpression, removeNode, removeRule, replaceChild, replaceData, replace, replaceNode, replace, reset, resizeBy, reverse, round, scroll, scrollBy, scrollIntoView, scrollTo, select, setActive, setAttributeNode, setCapture, setDate, setExpression, setFullYear, setHours, setMilliseconds, setMinutes, setMonth, setSeconds, setTime, setTimeout, setUTCDate, setUTCFullYear, setUTCHours, setUTCMilliseconds, setUTCMinutes, setUTCMonth, setUTCSeconds, setYear, shift, show, ShowBrowserUI, showHelp, showModalDialog, showModelessDialog, sin, slice, small, sort, splice, split, splitText, sqrt, start, stop, strike, sub, submit, substr, substring, substringData, sup, swapNode, tags, taintEnabled, tan, toExponential, toFixed, toGMTString, toLocaleLowerCase, toLocaleString, toLocaleUpperCase, toLowerCase, toPrecision, toSource, toString, toUpperCase, toUTCString, unescape, unshift, urns, UTC, valueOf, write, writeln",
            
                /* Reference: http://www.java2s.com/Code/JavaScriptReference/Javascript-Methods/CatalogJavascript-Methods.htm */
            
            all: "abs,acos,acosh,add,addSaturate,all,allTrue,anchor,and,apply,asin,asinh,assign,atan,atan2,atanh,big,bind,blink,bold,call,catch,cbrt,ceil,charAt,charCodeAt,check,clear,clz32,codePointAt,compareExchange,compile,concat,construct,copyWithin,cos,cosh,create,defineProperties,defineProperty,delete,deleteProperty,div,endsWith,entries,enumerate,equal,eval,every,exchange,exec,exp,expm1,extractLane,fill,filter,find,findIndex,fixed,floor,fontcolor,fontsize,for,forEach,freeze,from,fromCharCode,fromCodePoint,fromFloat32x4,fromFloat32x4Bits,fromFloat64x2Bits,fromInt8x16Bits,fromInt16x8Bits,fromInt32x4,fromInt32x4Bits,fromUint8x16Bits,fromUint16x8Bits,fromUint32x4,fromUint32x4Bits,fround,futexWait,futexWake,futexWakeOrRequeue,get,getDate,getDay,getFloat32,getFloat64,getFullYear,getHours,getInt8,getInt16,getInt32,getMilliseconds,getMinutes,getMonth,getNotifier,getOwnPropertyDescriptor,getOwnPropertyNames,getOwnPropertySymbols,getPrototypeOf,getSeconds,getTime,getTimezoneOffset,getUint8,getUint16,getUint32,getUTCDate,getUTCDay,getUTCFullYear,getUTCHours,getUTCMilliseconds,getUTCMinutes,getUTCMonth,getUTCSeconds,getYear,greaterThan,greaterThanOrEqual,has,hasOwnProperty,hypot,imul,includes,indexOf,is,isArray,isExtensible,isFinite,isFrozen,isGenerator,isInteger,isLockFree,isNaN,isPrototypeOf,isSafeInteger,isSealed,isView,italics,join,keyFor,keys,lastIndexOf,lessThan,lessThanOrEqual,link,load,localeCompare,log,log1p,log2,log10,map,match,max,maxNum,min,minNum,move,mul,neg,next,normalize,not,notEqual,now,observe,of,or,ownKeys,parse,parseFloat,parseInt,pop,pow,preventExtensions,propertyIsEnumerable,prototype[@@iterator],prototype[@@toPrimitive],push,quote,race,random,raw,reciprocalApproximation,reciprocalSqrtApproximation,reduce,reduceRight,reject,repeat,replace,replaceLane,resolve,resolvedOptions,return,reverse,revocable,round,seal,search,select,set,setDate,setFloat32,setFloat64,setFullYear,setHours,setInt8,setInt16,setInt32,setMilliseconds,setMinutes,setMonth,setPrototypeOf,setSeconds,setTime,setUint8,setUint16,setUint32,setUTCDate,setUTCFullYear,setUTCHours,setUTCMilliseconds,setUTCMinutes,setUTCMonth,setUTCSeconds,setYear,shift,shiftLeftByScalar,shiftRightArithmeticByScalar,shiftRightByScalar,shiftRightLogicalByScalar,shuffle,sign,sin,sinh,slice,small,some,sort,splat,splice,split,sqrt,startsWith,store,strike,stringify,sub,subarray,subSaturate,substr,substring,sup,supportedLocalesOf,swizzle,tan,tanh,test,then,throw,toDateString,toExponential,toFixed,toGMTString,toInteger,toISOString,toJSON,toLocaleDateString,toLocaleFormat,toLocaleLowerCase,toLocaleString,toLocaleTimeString,toLocaleUpperCase,toLowerCase,toPrecision,toSource,toString,toTimeString,toUpperCase,toUTCString,transfer,trim,trimLeft,trimRight,trunc,unobserve,unshift,unwatch,UTC,valueOf,values,watch,xor,__defineGetter__,__defineSetter__,__lookupGetter__,__lookupSetter__,atEnd,dimensions,getItem,getVarDate,item,lbound,moveFirst,moveNext,toArray,ubound,addBehavior,AddChannel,AddDesktopComponent,addElement,AddFavorite,addImport,addPageRule,addReadRequest,addRule,alert,appendChild,appendData,applyElement,attachEvent,AutoCompleteSaveForm,AutoScan,back,blur,ChooseColorDlg,clearAttributes,clearData,clearInterval,clearRequest,clearTimeout,click,cloneNode,close,collapse,compareEndPoints,componentFromPoint,confirm,contains,createAttribute,createCaption,createComment,createControlRange,createDocumentFragment,createElement,createEventObject,createPopup,createRange,createStyleSheet,createTextNode,createTextRange,createTFoot,createTHead,deleteCaption,deleteCell,deleteData,deleteRow,deleteTFoot,deleteTHead,detachEvent,doImport,doReadRequest,doScroll,dragDrop,duplicate,elementFromPoint,empty,escape,execCommand,execScript,findText,fireEvent,firstPage,focus,fontColor,fontSize,forward,getAdjacentText,getAttribute,getAttributeNode,getBookmark,getCharset,getClientRects,getData,getElementById,getElementsByName,getElementsByTagName,getExpression,getNamedItem,hasChildNodes,hasFocus,hide,ImportExportFavorites,inRange,insertAdjacentElement,insertAdjacentText,insertBefore,insertCell,insertData,insertRow,isEqual,IsSubscribed,javaEnabled,lastPage,mergeAttributes,moveBy,moveEnd,moveRow,moveStart,moveTo,moveToBookmark,moveToElementText,moveToPoint,namedItem,namedRecordset,navigate,NavigateAndFind,nextPage,open,parentElement,pasteHTML,previousPage,print,prompt,queryCommandEnabled,queryCommandIndeterm,queryCommandState,queryCommandValue,recalc,refresh,releaseCapture,remove,removeAttribute,removeAttributeNode,removeBehavior,removeChild,removeExpression,removeNode,removeRule,replaceChild,replaceData,replaceNode,reset,resizeBy,scroll,scrollBy,scrollIntoView,scrollTo,setActive,setAttributeNode,setCapture,setExpression,setTimeout,show,ShowBrowserUI,showHelp,showModalDialog,showModelessDialog,splitText,start,stop,submit,substringData,swapNode,tags,taintEnabled,unescape,urns,write,writeln"
        },
        
        properties: {
            
            mdn: "@@iterator, @@species, @@toStringTag, arguments, arity, buffer, byteLength, byteOffset, BYTES_PER_ELEMENT, callee, caller, columnNumber, compare, constructor, displayName, E, EPSILON, fileName, flags, format, global, ignoreCase, input, iterator, lastIndex, lastMatch, lastParen, leftContext, length, lineNumber, LN2, LN10, LOG2E, LOG10E, match, MAX_SAFE_INTEGER, MAX_VALUE, message, MIN_SAFE_INTEGER, MIN_VALUE, multiline, name, NaN, NEGATIVE_INFINITY, PI, POSITIVE_INFINITY, prototype, rightContext, size, source, species, SQRT1_2, SQRT2, stack, sticky, toPrimitive, unicode, __count__, __noSuchMethod__, __parent__, __proto__",
            
                /* Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Properties_Index */
            
            msdn: "arguments, callee, caller, constructor, description, global, ignoreCase, index, input, lastIndex, lastMatch, lastParen, leftContext, length, message, multiline, name, number, prototype, rightContext, source, __proto__",
            
                /* Reference: https://msdn.microsoft.com/en-us/library/xyad316h(v=vs.94).aspx */
                
            java2s: "abbr, accept, acceptCharset, accessKey, action, activeElement, align, aLink, alinkColor, allowTransparency, alt, altHTML, altKey, altLeft, appCodeName, appMinorVersion, appName, appVersion, archive, autocomplete, availHeight, availLeft, availTop, availWidth, axis, background, balance, BaseHref, behavior, bgColor, bgProperties, blockDirection, border, borderColor, borderColorDark, borderColorLight, bottom, bottomMargin, boundingHeight, boundingLeft, boundingTop, boundingWidth, browserLanguage, bufferDepth, button, cancelBubble, canHaveChildren, canHaveHTML, caption, cellIndex, cellPadding, cellSpacing, charset, checked, cite, classid, className, clear, clientHeight, clientLeft, clientTop, clientWidth, clientX, clientY, clipBottom, clipLeft, clipRight, clipTop, closed, code, codeBase, codeType, color, colorDepth, cols, colSpan, compact, compatMode, complete, constructor, content, contentEditable, contentOverflow, contentWindow, cookie, cookieEnabled, coords, Count, cpuClass, cssRules, cssText, ctrlKey, ctrlLeft, cursor, data, dataFld, dataFormatAs, dataPageSize, dataSrc, dateTime, declare, defaultCharset, defaultChecked, defaultSelected, defaultStatus, defaultValue, defer, description, designMode, deviceXDPI, deviceYDPI, dialogArguments, dialogHeight, dialogLeft, dialogTop, dialogWidth, dir, direction, disabled, doctype, documentElement, domain, dropEffect, dynsrc, E, effectAllowed, encoding, enctype, event, expando, face, fgColor, fieldDelim, fileCreatedDate, fileModifiedDate, filename, fileSize, fileUpdatedDate, firstChild, fontSmoothingEnabled, form, frame, frameBorder, frameElement, frameSpacing, fromElement, galleryImg, hash, hasLayout, headers, height, hidden, hideFocus, host, hostname, href, hreflang, hspace, htmlFor, htmlText, httpEquiv, id, indeterminate, index, innerHTML, innerText, isContentEditable, isDisabled, isMap, isMultiline, isOpen, isTextEdit, keyCode, label, lang, language, lastChild, lastModified, layerX, layerY, left, leftMargin, length, link, linkColor, LN, LOG, logicalXDPI, logicalYDPI, longDesc, loop, lowsrc, maxLength, MAX_VALUE, media, menuArguments, method, Methods, MIN_VALUE, multiple, name, nameProp, NEGATIVE_INFINITY, nextPage, nextSibling, nodeName, nodeType, nodeValue, noHref, noResize, noShade, noWrap, object, offScreenBuffering, offsetHeight, offsetLeft, offsetParent, offsetTop, offsetWidth, offsetX, offsetY, onLine, onOffBehavior, opener, outerHTML, outerText, ownerDocument, owningElement, pageX, pageY, palette, parent, parentElement, parentNode, parentStyleSheet, parentTextEdit, parentWindow, pathname, PI, platform, pluginspage, port, POSITIVE_INFINITY, previousSibling, profile, propertyName, protocol, pseudoClass, qualifier, readOnly, readyState, reason, recordNumber, recordset, referrer, rel, repeat, returnValue, rev, right, rightMargin, rowIndex, rows, rowSpan, rules, saveType, scheme, scope, scopeName, screenLeft, screenTop, screenX, window, screenY, scroll, scrollAmount, scrollDelay, scrollHeight, scrollLeft, scrollTop, scrollWidth, search, sectionRowIndex, selected, selectedIndex, selector, selectorText, self, shape, shiftKey, shiftLeft, size, select, sourceIndex, span, specified, SQRT1_2, SQRT2, src, srcElement, srcFilter, srcUrn, standBy, start, status, suffixes, summary, systemLanguage, tabIndex, tabStop, tagName, tagUrn, target, text, tFoot, tHead, title, toElement, topMargin, top, trueSpeed, type, typeDetail, uniqueID, units, updateInterval, URL, URLUnencoded, urn, useMap, userAgent, userLanguage, vAlign, value, valueType, vcard_name, version, viewInheritStyle, viewLink, viewMasterTab, vLink, vlinkColor, volume, vspace, wheelDelta, width, wrap, x, XMLDocument, y"
            
                /* Reference: http://www.java2s.com/Code/JavaScriptReference/Javascript-Properties/CatalogJavascript-Properties.htm */
            
            all: "@@iterator, @@species, @@toStringTag, arguments, arity, buffer, byteLength, byteOffset, BYTES_PER_ELEMENT, callee, caller, columnNumber, compare, constructor, displayName, E, EPSILON, fileName, flags, format, global, ignoreCase, input, iterator, lastIndex, lastMatch, lastParen, leftContext, length, lineNumber, LN2, LN10, LOG2E, LOG10E, match, MAX_SAFE_INTEGER, MAX_VALUE, message, MIN_SAFE_INTEGER, MIN_VALUE, multiline, name, NaN, NEGATIVE_INFINITY, PI, POSITIVE_INFINITY, prototype, rightContext, size, source, species, SQRT1_2, SQRT2, stack, sticky, toPrimitive, unicode, __count__, __noSuchMethod__, __parent__, __proto__, description, index, number, abbr, accept, acceptCharset, accessKey, action, activeElement, align, aLink, alinkColor, allowTransparency, alt, altHTML, altKey, altLeft, appCodeName, appMinorVersion, appName, appVersion, archive, autocomplete, availHeight, availLeft, availTop, availWidth, axis, background, balance, BaseHref, behavior, bgColor, bgProperties, blockDirection, border, borderColor, borderColorDark, borderColorLight, bottom, bottomMargin, boundingHeight, boundingLeft, boundingTop, boundingWidth, browserLanguage, bufferDepth, button, cancelBubble, canHaveChildren, canHaveHTML, caption, cellIndex, cellPadding, cellSpacing, charset, checked, cite, classid, className, clear, clientHeight, clientLeft, clientTop, clientWidth, clientX, clientY, clipBottom, clipLeft, clipRight, clipTop, closed, code, codeBase, codeType, color, colorDepth, cols, colSpan, compact, compatMode, complete, content, contentEditable, contentOverflow, contentWindow, cookie, cookieEnabled, coords, Count, cpuClass, cssRules, cssText, ctrlKey, ctrlLeft, cursor, data, dataFld, dataFormatAs, dataPageSize, dataSrc, dateTime, declare, defaultCharset, defaultChecked, defaultSelected, defaultStatus, defaultValue, defer, designMode, deviceXDPI, deviceYDPI, dialogArguments, dialogHeight, dialogLeft, dialogTop, dialogWidth, dir, direction, disabled, doctype, documentElement, domain, dropEffect, dynsrc, effectAllowed, encoding, enctype, event, expando, face, fgColor, fieldDelim, fileCreatedDate, fileModifiedDate, filename, fileSize, fileUpdatedDate, firstChild, fontSmoothingEnabled, form, frame, frameBorder, frameElement, frameSpacing, fromElement, galleryImg, hash, hasLayout, headers, height, hidden, hideFocus, host, hostname, href, hreflang, hspace, htmlFor, htmlText, httpEquiv, id, indeterminate, innerHTML, innerText, isContentEditable, isDisabled, isMap, isMultiline, isOpen, isTextEdit, keyCode, label, lang, language, lastChild, lastModified, layerX, layerY, left, leftMargin, link, linkColor, LN, LOG, logicalXDPI, logicalYDPI, longDesc, loop, lowsrc, maxLength, media, menuArguments, method, Methods, multiple, nameProp, nextPage, nextSibling, nodeName, nodeType, nodeValue, noHref, noResize, noShade, noWrap, object, offScreenBuffering, offsetHeight, offsetLeft, offsetParent, offsetTop, offsetWidth, offsetX, offsetY, onLine, onOffBehavior, opener, outerHTML, outerText, ownerDocument, owningElement, pageX, pageY, palette, parent, parentElement, parentNode, parentStyleSheet, parentTextEdit, parentWindow, pathname, platform, pluginspage, port, previousSibling, profile, propertyName, protocol, pseudoClass, qualifier, readOnly, readyState, reason, recordNumber, recordset, referrer, rel, repeat, returnValue, rev, right, rightMargin, rowIndex, rows, rowSpan, rules, saveType, scheme, scope, scopeName, screenLeft, screenTop, screenX, window, screenY, scroll, scrollAmount, scrollDelay, scrollHeight, scrollLeft, scrollTop, scrollWidth, search, sectionRowIndex, selected, selectedIndex, selector, selectorText, self, shape, shiftKey, shiftLeft, select, sourceIndex, span, specified, src, srcElement, srcFilter, srcUrn, standBy, start, status, suffixes, summary, systemLanguage, tabIndex, tabStop, tagName, tagUrn, target, text, tFoot, tHead, title, toElement, topMargin, top, trueSpeed, type, typeDetail, uniqueID, units, updateInterval, URL, URLUnencoded, urn, useMap, userAgent, userLanguage, vAlign, value, valueType, vcard_name, version, viewInheritStyle, viewLink, viewMasterTab, vLink, vlinkColor, volume, vspace, wheelDelta, width, wrap, x, XMLDocument, y"
        },
        
        object: {
            
            "ActiveXObject": {

                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Arguments": {                
                
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
                    
                    properties: {
                        
                        mdn: "length, prorotype"
                    },
                    
                    property: {
                        
                        
                    },
                    
                    methods: {
                        
                        mdn: "@@iterator, concat, copyWithin, entries, every, fill, filter, find, findIndex, forEach, from, includes, indexOf, isArray, keys, lastIndexOf, map, observe, ofjoin, pop, push, reduce, reduceRight, reverse, shift, slice, some, sort, splice, toLocaleString, toSource, toString, unshift, values"
                    },
                    
                    method: {
                        
                        
                    }
                }
            },
            
            "Array": {
                
                description: "<p>An array is an ordered collection of values. Each value is called an element, and each element has a numeric position in the array, known as its index. JavaScript arrays are untyped: an array element may be of any type, and different elements of the same array may be of different types. Array elements may even be objects or other arrays, which allows you to create complex data structures, such as arrays of objects and arrays of arrays. JavaScript arrays are zero-based and use 32-bit indexes: the index of the first element is 0, and the highest possible index is 4294967294 (232−2), for a maximum array size of 4,294,967,295 elements. JavaScript arrays are dynamic: they grow or shrink as needed and there is no need to declare a fixed size for the array when you create it or to reallocate it when the size changes. JavaScript arrays may be sparse: the elements need not have contiguous indexes and there may be gaps.</p><p>JavaScript arrays are a specialized form of JavaScript object, and array indexes are really little more than property names that happen to be integers.</p> [JTDG-6ed, p. 141]",
                
                inherits: "Array.prototype, Function.prototype",
                
                syntax: [
                    
                    ['var arr = "[]"'],
                    
                    ['var arr = "["[<i>element0</i>[, <i>element1</i>[, ...[, <i>elementN</i>]"]"'],
                    
                    ["var <i>arr</i> = new Array()"],
                    
                    ["var <i>arr</i> = new Array([<i>size</i>])"],
                    
                    ["var <i>arr</i> = new Array([<i>element0</i>[, <i>element1</i>[, ...[, <i>elementN</i>]]]])"],
                    
                    ["<i>regex</i>.exec(<i>str</i>)"]
                ],
                
                Parameters: {
                    
                    arr: "Required. An instance of the Array Object",
                    
                    elementN: "Optional. Initializes the array with the explicit element: <i>elementN</i>, except in the case where a single argument <i>size</i> is passed to the Array constructor and that argument is a number. Note that this special case only applies to JavaScript arrays created with the Array constructor, not array literals created with the bracket syntax.",
                    
                    regex: "Required. An instance of the <code>RegExp</code> object.",
                    
                    size: "Optional. Initializes the array to <i>size</i> elements"
                },
                
                remarks: "After an array is created, you can access the individual elements of the array by using [ ] notation. Note that arrays in JavaScript are zero-based.",
                
                example: "var my_array=new Array;for(i=0;i<10;i++)my_array[i]=i;x=my_array[4],document.write(x);",
                   
                reference: [
            
                    ["MDN", "Array", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"],
                    
                    ["MSDN", "Array Object (JavaScript)", "https://msdn.microsoft.com/en-us/LIBRary/k4h76zbx(v=vs.94).aspx"],
            
                    ["Dottoro", "Array object", "http://help.dottoro.com/ljnkadsn.php"],
                    
                    ["w3schools", "JavaScript Array Reference", "http://www.w3schools.com/jsref/jsref_obj_array.asp"]
            
                ],
                
                members: {
                        
                    properties: {
                        
                        mdn: "constructor, index, input, length, prototype",
                        
                            /* Reference: */
                        
                        msdn: "constructor, length, prototype",
                        
                            /* Reference: */
                        
                        java2s: "constructor, length",
                        
                            /* Reference: */
                    },
                
                    methods: {
                        
                        mdn: "@@iterator, concat, copyWithin, entries, every, fill, filter, find, findIndex, forEach, includes, indexOf, join, keys, lastIndexOf, map, of, pop, push, reduce, reduceRight, reverse, shift, slice, some, sort, splice, toLocaleString, toSource, toString, unshift, values",
                        
                            /* Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array */
                        
                        msdn: "concat, entries, every, fill, filter, findIndex, forEach, from, indexOf, isArray, join, keys, lastIndexOf, map, of, pop, push, reduce, reduceRight, reverse, shift, slice, some, sort, splice, toString, unshift, valueOf, values",
                        
                            /* Reference: https://msdn.microsoft.com/en-us/LIBRary/k4h76zbx(v=vs.94).aspx */
                        
                        java2s: "concat, join, pop, push, reverse, shift, slice, sort, splice, toSource, toString, unshift, valueOf"
                        
                            /* Reference: http://www.java2s.com/Code/JavaScriptReference/Javascript-Objects/ArrayJavaScriptMethods.htm */
                            
                        all: "@@iterator, concat, copyWithin, entries, every, fill, filter, find, findIndex, forEach, from, includes, indexOf, isArray, join, keys, lastIndexOf, map, of, pop, push, reduce, reduceRight, reverse, shift, slice, some, sort, splice, toLocaleString, toSource, toString, unshift, valueOf, values"
                    },
                
                    property: {
                        
                        "constructor": {
                        
                            symantics: "The constructor property is a member of the prototype of every object that has a prototype. This includes all intrinsic JavaScript objects except the Global and Math objects. The constructor property contains a reference to the function that constructs instances of that particular object.",
                        
                            syntax: "<i>arr</i>.constructor",
                            
                            example: 'var x=new Array;x.constructor==Array?document.write("Object is an Array."):document.write("Object is not an Array.");',
                        
                            reference: [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "constructor Property (Array)", "https://msdn.microsoft.com/en-us/LIBRary/jj155291(v=vs.94).aspx"],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        },
                        
                        "index": {
                        
                            symantics: "<p>The index property contains the zero-based position of the matched substring within the complete searched string.</p>",
                            
                            remarks: "Works only for arrays returned by the <code>exec</code> method of the <code>RegEx</code> object.",
                        
                            syntax: "",
                            
                            example: 'var match=/fox/,arr=match.exec("The quick brown fox jumps over the lazy dog.");console.log(arr.index);',
                        
                            reference: [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", "http://help.dottoro.com/ljnkadsn.php#index"]
                        
                            ]
                        
                        },
                        
                        "input": {
                        
                            symantics: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.",
                            
                            remarks: "",
                        
                            syntax: "<i>arr</i>.indexOf(<i>searchElement</i>[, <i>fromIndex</i> = 0])",
                            
                            parameters: {
                                
                                arr: "Required. An instance of the <code>Array</code> object.",
                                
                                searchElement: "Required. The value to locate in arr",
                                
                                fromIndex: "Optional. The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0."
                            },
                            
                            example: 'var match=/fox/,arr=match.exec("The quick brown fox jumps over the lazy dog.");console.log(arr.input);',
                            
                            implemented: "JavaScript 1.6",
                        
                            reference: [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                                
                                ["w3resource", "JavaScript input Property : Array Object", "http://www.w3resource.com/javascript/object-property-method/array-input.php"]
                        
                            ]
                        
                        },
                        
                        "length": {
                        
                            symantics: "Every JavaScript array has a length property. For nonsparse arrays, this property specifies the number of elements in the array. For sparse arrays, length is larger than the index of all elements.",
                            
                            context: "Array.prototype",
                        
                            syntax: "<i>arr</i>.length",
                            
                            example: 'var arr=["A","B","C"];document.write(arr.length);',
                        
                            reference: [
                        
                                ["MDN", "Array.prototype.length", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length"],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", "http://help.dottoro.com/ljnkadsn.php#length"]
                        
                            ]
                        
                        },
                        
                        "prototype": {
                        
                            symantics: "<p>The prototype property Returns a reference to the <code>Array.prototype</code> object. The <code>Array.prototype</code> object allows adding properties and methods to the <code>Array</code> object that can be used with instances of the <code>Array</code> object, like any predefined property or method. The prototype property is static, it cannot be accessed from an instance of the <code>Array</code> object, only <code>Array.prototype</code> object is allowed.</p></p>Arrays inherit properties from Array.prototype, which defines a rich set of array manipulation methods. Most of these methods are generic, which means that they work correctly not only for true arrays, but for any “array-like object.",
                        
                            syntax: "",
                        
                            reference: [
                        
                                ["MDN", "", ""],
                                
                                ["MSDN", "", ""],
                        
                                ["Dottoro", "", ""]
                        
                            ]
                        
                        }
                    },
                    
                    method: {
                        
                        "instanceOf" {
                        
                            description: "Returns the index of the first occurrence of a value in an array from a given offset.",
                        
                            syntax: "<i>arr</i>.indexOf(<i>searchElement</i>[, <i>fromIndex</i>])",
                            
                            parameters: {
                                
                              arr: "Required. An instance of the <a href='#Array'><code>Array</a></code> object."
                              
                              searchElement: "The value of the element to search for",
                              
                              fromIndex: "Optional. The offset value that anchors the index to begin the search."
                            },
                            
                            example: {
                                
                                prolog: "The following code visits each element in the target array, <code>arr</code>, returning unique entries to the result array, <code>map</code>.  
                                
                                code: 'var duplicates="@@iterator,concat,concat,concat,copyWithin,entries,entries,every,every,fill,fill,filter,filter,find,findIndex,findIndex,forEach,forEach,from,includes,indexOf,indexOf,isArray,join,join,join,keys,keys,lastIndexOf,lastIndexOf,map,map,of,of,pop,pop,pop,push,push,push,reduce,reduce,reduceRight,reduceRight,reverse,reverse,reverse,shift,shift,shift,slice,slice,slice,some,some,sort,sort,sort,splice,splice,splice,toLocaleString,toSource,toSource,toString,toString,toString,unshift,unshift,unshift,valueOf,valueOf,values,values",arr=duplicates.split(","),map=arr.filter(function(e,i){return arr.indexOf(e)==i});console.log(map.toString());',
                                
                                epilog: "The comma seperated values in the <code>duplicates</code> string represents a concatenation of methods for the Array object listed by Mozilla, Microsoft and the Java2s website.  The string is converted to an array on line 2 with the <a href='#String.prototype.split'><code>String.prototype.split</code></a> method. The anonymous filter function ( returns a true value when the index of the element being visited is equal to the index of the first occurance of the element in the target array.
                            },
                        
                            reference: [
                        
                                ["MDN", "Array.prototype.indexOf()", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf"],
                                
                                ["MSDN", "indexOf Method (Array) (JavaScript)", "https://msdn.microsoft.com/en-us/LIBRary/ff679977(v=vs.94).aspx"],
                        
                                ["Dottoro", "indexOf (elemToSearch [, fromIndex])", "http://help.dottoro.com/ljnkadsn.php#indexOf"]
                        
                            ]
                        }
                    }
                }
            },

            "ArrayBuffer": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Atomics": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "attribute": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Boolean": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "clientInformation": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "clipboardData": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "currentStyle": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "dataTransfer": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "DataView": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Date": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Debug": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "defaults": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Dialog": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "document": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Enumerator": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Error": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "EvalError": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "event": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "external": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Float32Array": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Float64Array": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Function": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Generator": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "GeneratorFunction": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Global": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Helper": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "history": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "implementation": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Int8Array": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Int16Array": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Int32Array": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "InternalError": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Intl": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Intl.Collator": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Intl.DateTimeFormat": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Intl.NumberFormat": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Iterator": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "JSON": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "location": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Map": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Math": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "mimeType": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "namespace": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "navigator": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Number": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Object": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "page": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "ParallelArray": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "plugin": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "popup": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Promise": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Proxy": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "RangeError": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "ReferenceError": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Reflect": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "RegExp": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "rule": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "runtimeStyle": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "screen": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "selection": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Set": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "SharedArrayBuffer": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "StopIteration": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "String": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "style": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "styleSheet": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Symbol": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "SyntaxError": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "TextNode": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "TextRange": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "TextRectangle": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "TypeError": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Uint8Array": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Uint8ClampedArray": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Uint16Array": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "Uint32Array": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "URIError": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "userProfile": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "VBArray": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "WeakMap": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "WeakSet": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "window": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            },
            
            "WinRTError": {
            
                description: "",
            
                inherits: "",
            
                syntax: [
            
                    [],
            
                    []
                ],
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
            
                example: "",
            
                reference: [
            
                    [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
            
                    ["", "", ""]
                ],
            
                members: {
            
                    properties: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    methods: {
            
                        mdn: "",
            
                        msdn: "",
            
                        java2s: ""
                    },
            
                    property: {
            
                    },
            
                    method: {
            
                    }
                }
            }
        }
    }
};

/*  Object meta data: 


"$1": {\n\n    description: "",\n\n    inherits: "",\n\n    syntax: [\n\n        [],\n\n        []\n    ],\n\n    parameters: {\n\n        : "",\n    },\n\n    remarks: "",\n\n    example: "",\n\n    reference: [\n\n        [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],\n\n        ["", "", ""]\n    ],\n\n    members: {\n\n        properties: {\n\n            mdn: "",\n\n            msdn: "",\n\n            java2s: ""\n        },\n\n        methods: {\n\n            mdn: "",\n\n            msdn: "",\n\n            java2s: ""\n        },\n\n        property: {\n\n        },\n\n        method: {\n\n        }\n\n    }\n},\n

&1: {

    description: "",
    
    inherits: "",
    
    syntax: [
    
        [],
        
        []
    ],
    
    parameters: {
    
        : "",    
    },
    
    remarks: "",
    
    example: "",
    
    reference: [
    
        [{type: "string", symantics: "maintainer"}, {type: "string", symantics: "section heading"}, {type: "string", symantics: "URL"}],
        
        ["", "", ""]
    ],                
    
    members: {
            
        properties: {
                
            mdn: "",
                
            msdn: "",
                
            java2s: ""
        },
        
        methods: {
                
            mdn: "",
                
            msdn: "",
                
            java2s: ""
        },
        
        property: {
            
            : {
            
                description: "",
                
                context: "",
            
                syntax: "",
                
                example: '',
            
                reference: [
            
                    ["MDN", "", ""],
                    
                    ["MSDN", "", ""],
            
                    ["Dottoro", "", ""]
            
                ]
            
            },
        },
        
        method: {
        
            "&1": {
            
                description: "",
            
                syntax: "",
            
                parameters: {
            
                    : "",
                },
            
                remarks: "",
                
                example: '',
            
                reference: [
            
                    ["MDN", "", ""],
                    
                    ["MSDN", "", ""],
            
                    ["Dottoro", "", ""]
            
                ]
            },
        
        }
    }
},
    
*/

/* Method meta data

"&1": {
            
    description: "",

    syntax: "",

    parameters: {

        "": "",
    },

    remarks: "",
    
    example: '',

    reference: [

        ["MDN", "", ""],
        
        ["MSDN", "", ""],

        ["Dottoro", "", ""]

    ]
},

*/