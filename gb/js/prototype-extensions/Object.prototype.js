/**
 * OBJECT.PROTOTYPE.EQUALS 
 * 
 * 
 * 
*/

Object.prototype.equals = function equals( compare) {
 
    if(Object.getOwnPropertyNames(this).sort().toString() == Object.getOwnPropertyNames(compare).sort().toString() && this.prototype === compare.prototype){

        var aProp = Object.getOwnPropertyNames(this);
        
        for(var i = 0; i < aProp.length; i++) {

            if(typeof this[aProp[i]] != "object"){
       
                if(this[aProp[i]] !== compare[aProp[i]]) return false;
            }
            else return this[aProp[i]].equals(compare[aProp[i]]);    
        }
	return true;
    }
    else return false;

}


/**
 * OBJECT.PROTOTYPE.GETPROPERTIES 
 * 
 * 
 * 
*/

Object.prototype.getProperties = function getProperties() {

    var result = new Array();
    for(var p in this) result.push(p);
    return result.sort().toString();
}


/**
 * OBJECT.PROTOTYPE.GETINHERITEDPROPERTIES 
 * 
 * 
 * 
*/

Object.prototype.getInheritedProperties = function() getInheritedProperties(){

    var result = new Array();
    for(var p in this) if(!this.hasOwnProperty(p)) result.push(p);
    return result.sort().toString();
}


/**
 * OBJECT.PROTOTYPE.GETOWNPROPERTIES 
 * 
 * 
 * 
*/

Object.prototype.getOwnProperties = function getOwnProperties() {

    var result = new Array();
    for(var p in this) if(this.hasOwnProperty(p)) result.push(p);
    return result.sort().toString();
}


/**
 * OBJECT.PROTOTYPE.TYPE
 * 
 * Service: Queries the type of a JavaScript object. works for any JavaScript value except null and undefined.
 *
 * Credits: David Flanagan, JavaScript The Definitive Guide, 6ed, p.136
 *
 * Defintions: 
 * - An object is defined as any in memory value that can invoke the properties of Object.prototype via its name (symbol or reference).
 * - A Generic Object is any object that returns [object Object] for its value. See Object.prototype.valueOf.
 * 
 * Notes: 
 * - Objects created through built-in constructors such as Array and Date have class attributes that match the names of their constructors.
 * - Host objects typically have meaningful class ([[Class]]) attributes as well, though this is implementation-dependent. Objects created through object literals or by Object.create have a class attribute of �Object�
 * - If you define your own constructor function, any objects you create with it will have a class attribute of �Object�: there is no way to specify the class attribute for your own classes of objects.
*/

Object.prototype.type = function() {

    return Object.prototype.toString.call(this).slice(8,-1); // Courtesy of David Flanagan, JavaScript The Definitive Guide, 6ed, p.136
}