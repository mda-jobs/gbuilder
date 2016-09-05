function removeDuplicates( string) {
    
    var duplicates = string;
    arr = duplicates.split(","),
    map = arr.filter(
        function(elem, i) {
            return arr.indexOf(elem) === i;
        }
    )
;
 
console.log(map.toString()); 
}

/**
 * The delimterCount function returns the number of occurances of <delimter> in the <target> string.
 * 
 * @author Michael D. Alexander [michael.alexander@gbuilder.org]
 * @date Fri Mar 18 2016 13:21:03 GMT-0700 (Pacific Daylight Time)
 * 
 * @param {String) - target
 * @param {String) - delimiter
 * @returns {String} - The constructor (objects), wrapper type (primitive types), Undefined, or Null. 
 */
function delimiterCount( target, delimiter) {

    if( arguments.length === 2 && delimiter.length === 1) {
        if( typeOf( target) === "String")  {
            let count = 0;
            for( let p in target) {
                if( target[p] === delimiter) {
                    count++
                }
            }
            return count;
        }
    }
    else throw new Error("delimterCounts( target, delimter) is missing one or more arguments. Delimiter length must be = 1.")
}
/**
 * The extractValues function takes an array or string, and returns a subset based on the values of last three argument. It can return word groups or not depending
 * on the second argument, further filtering the result based on the occurance of the start or end characters specified in the last two arguments. The motivating
 * problem for this function is to group the entries in an index so that a data model can be built. For example, in the technical specification for CSS 2.1, 
 * CSS properties and values do not contain spaces. However, general terms do. In addition, property values begin with "<", and end with ">", while pseudo classes
 * and elements begin with ":".
 * 
 * @author Michael D. Alexander [michael.alexander@gbuilder.org]
 * @date Fri Mar 18 2016 14:34:27 GMT-0700 (Pacific Daylight Time)
 * 
 * @param {Array|String} target - Required. The string or array to extract values from
 * @param {Boolean} spaceSeparatedValues - Required. Pass true to extract space separated values (word groups), oherwise false.
 * @param {String} beginsWith - Optional. The character or character sequence to match at start of value. For null or omitted argument, parameter is disregarded.
 * @param {String} endsWith - Optional. The character or character sequence to match at end of value. For null or omitted argument, parameter is disregarded.
 * @returns {Array|String) - The type passed in as first argument is the type returned.
 */
function extractValues( target, spaceSeparatedValues, beginsWith, endsWith) {

    if( typeOf( target) === "String") {
        if( isCSV( target)) {
            // remove leading or trailing whitespace from influencing filter results & convert string to array for processing
            return processTarget( target.replace(/\s*,\s*/g, ",").split(",")).join(", ");
        }
        else {
            throw new Error("Error: The string passed to extractValues does not contain comma separated values ");
        }
    }
    else if( typeOf( target) === "Array") {
        return processTarget( target);
    }
    else {
        throw new Error("Argument must be an Array or string literal."); 
    }
    
    function processTarget( target) {
        let result = null;
        return target.filter( function( element, index, array) {
            if( typeOf( element) === "String") {
                if( spaceSeparatedValues) {
                    result = processWordGroup( element);
                }
                else if( element.indexOf(" ") === -1) {
                    result = true;                         
                }
                if( result && beginsWith || endsWith) {
                    result = processMatch( element);
                    if (result) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return result;
                }
            }
            else {
                throw new Error( "Error: All array elements passed to extractValues must be strings.");
            }
        });
    }
    function processWordGroup( element) {
        if( element.includes(" ")) {
           return true; 
        }
        else {
            return false
        }
    }
    function processMatch( element) {
        if( beginsWith && !endsWith && element.indexOf(beginsWith) === 0) {
            return true;    
        }
        else if( endsWith && !beginsWith && element.indexOf( endsWith) === element.length - endsWith.length) {
            return true;
        }
        else if( beginsWith && endsWith && element.indexOf( beginsWith) === 0 &&  element.indexOf( endsWith) === element.length - endsWith.length) {
            return true;
        }
        else {
            return false;
        }
    }        
} // end extractValues function
/** 
 * isCSV returns true if target is a string of comma separated values, otherwise false. The definition for true is based on the following validations: target is of type "String",
 * doesn't contain beginning or trailing commas, and the number of values is one more than the delimiter count.
 * 
 * @author Michael D. Alexander [michael.alexander@gbuilder.org]
 * @date Fri Mar 18 2016 14:30:27 GMT-0700 (Pacific Daylight Time)
 * 
 * @param {String} target - The string to sample
 * @returns {Boolean} - false if the number of elements isn't one more than count returned by delimterCount.
 */
function isCSV( target) {

    return typeOf( target) === "String" && !target.startsWith(",") && !target.endsWith(",") && (delimiterCount( target, ",") + 1 === target.split(",").length) ? true : false;
}
/**
 * the toSet function processes a comma delimited string or array of strings and returns a copy removed of all duplicate entries. A collection of distinct objects is the mathematical definition of a set--hence the name, toSet
 *
 * @author Michael D. Alexander [michael.alexander@gbuilder.org]
 * @date Fri Mar 18 2016 14:41:09 GMT-0700 (Pacific Daylight Time)
 * 
 * @param {String|Array} target - The target string or Array to process
 * @returns {String|Array} - A copy of target with all duplicates removed. The return type is the same type as the target argument.
 */
function toSet( target) {
    
    switch( typeOf( target)) {
        case "Array": {
            let a = [];
            
            for( let i in target) {
                if( typeOf( target[i]) === "String") {
                    a.push( target[i].trim()); // nomalize array elements for leading and trailing whitespace.
                }   
                else throw new Error("Function toSet requires array elements to be of type string.");
            }
            return  a.filter( function( element, index, array){
                        return array.indexOf( element.replace(/\s*,\s*/g, ",")) === index;
                    });
        }
        case "String": {
            if( isCSV( target)) {
                let a = target.replace(/\s*,\s*/g, ",").split(","); // prevent leading or trailing whitespace around commas from influencing filter results
                let map =  a.filter( function( element, index, array){
                    return array.indexOf( element) === index;
                });
                return map.join(", ");
            }
            break;        
        }
        default: {
            throw new Error("Argument must be an Array or string literal.");
        }
    }  // end switch typeOf( target)
}
/**
 * typeOf returns the data type of the argument. typeOf works for built-in, host and custom types.
 *
 * @author Michael D. Alexander [michael.alexander@gbuilder.org]
 * @date Fri Mar 18 2016 14:41:09 GMT-0700 (Pacific Daylight Time)
 * 
 * @param {Object|Array|Function|string|number|boolean|undefined|null} type - JavaScript type
 * @returns {String} - The constructor (objects), wrapper type (primitive types), Undefined, or Null. 
 */
function typeOf( type) {
    try {
        let s = type.constructor.toString();
        return s.slice( 9, s.indexOf("("));
    }
    catch( e) {
        return Object.prototype.toString.call(type).slice(8, -1);
    }
}
