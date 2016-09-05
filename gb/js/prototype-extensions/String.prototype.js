/*************************************************************************
*                      LIBRARY FUNCTIONS BEGIN
*
************************************************************************/

String.prototype.end = function() {

  return "\n</" + this + ">";


                     /***************************************************
                      * Author:      Michael D. Alexander 
                      * Date:        2014-Jan-28
                      * Parameters:  None
                      * Result Type: String
                      * Purpose:     Apply HTML end tag delimiters  
                      * Callers:     String.prototype.Wrap 
                      **************************************************/ 

}



function setTab( n){

    var tab = "";
  
    for( var i = 0; i < n; i++){

        tab += String.fromCharCode(32);
    }

    return tab;

}


String.prototype.start = function( attrs) {
  
  if( arguments[0]) return "<" + this + " " +  attrs + ">\n";
  else return "<" + this + ">\n";

                     /***************************************************
                      * Author:      Michael Alexander 
                      * Date:        2014-Jan-28
                      * Parameters:  string/Attributes for this tag
                      * Result Type: string
                      * Purpose:     Apply HTML start tag delimiters
                      * Callers:     String.prototype.Wrap
                      **************************************************/ 

}


String.prototype.trim = function() {

    return this.replace(/^\s*/, "").replace(/\s*$/, "");


/* TEST CODE
var s = "   Michael Alexander\r\n";
alert( s.length);
alert( s.trim().length);
*/

                     /***************************************************
                      * Author:      Michael Alexander 
                      * Date:        2014-Jan-28
                      * Parameters:  None
                      * Result Type: string
                      * Purpose:     Remove all whitespace from start and
                      *              end of this string.
                      **************************************************/ 

}


String.prototype.trimLeft = function() {
  
    return this.replace(/^\s*/, "");


/* TEST CODE
var s = "   Michael Alexander\r\n";
alert( s.length); 22
alert( s.trim().length); 19
*/

                     /***************************************************
                      * Author:      Michael Alexander 
                      * Date:        2014-Jan-28
                      * Parameters:  None
                      * Result Type: string
                      * Purpose:     Remove all whitespace from left end 
                      *              of this string.
                      **************************************************/ 

}


String.prototype.trimRight = function() {

    return this.replace(/\s*$/, "");


/* TEST CODE
var s = "   Michael Alexander\r\n";
alert( s.length); // 22
alert( s.trimRight().length); //19
*/

                     /***************************************************
                      * Author:      Michael Alexander 
                      * Date:        2014-Jan-28
                      * Parameters:  None
                      * Result Type: string
                      * Purpose:     Remove all whitespace from right end 
                      *              of this string.
                      **************************************************/ 
}


String.prototype.wrap = function( tag, attrs){

    if( arguments[1] == undefined) attrs = "";
    
    return tag.start(attrs) + this + tag.end();


                     /***************************************************
                      * Author:      Michael Alexander 
                      * Date:        2014-Jan-28
                      * Parameters:  string/HTML tag name,
                      *              string/attributes                         
                      * Result Type: string 
                      * Purpose:     Wrap this (content model) with 
                      *              start/end XML element tag pair.
                      * Helpers:     String.Prototype.start/end                                                                                                                                                                                                                                                                                            
                      **************************************************/ 

}


String.prototype.write = function( id){

    if( arguments[0]) document.getElementById( id).innerHTML = "<pre>" + this.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>").replace(/\t/g, tab) + "</pre>"; 

    else document.write("<pre>" + this.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>").replace(/\t/g, tab) + "</pre>");

}


/*************************************************************************
*                      LIBRARY FUNCTIONS END
*
************************************************************************/


                     /***************************************************
                      * Author:      Michael D. Alexander 
                      * Date:        2014-
                      * Parameters:  None
                      * Result Type: 
                      * Purpose:             
                      * Callers:
                      * Helpers:
                      **************************************************/



