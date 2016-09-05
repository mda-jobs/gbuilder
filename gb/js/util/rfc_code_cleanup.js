RegExp.prototype.count = function( s){
 
    var result;
    var count = 0;

    result = this.exec( s);

    while( result != null)
    {
        ++count;
        result = this.exec(s);
    }
    
    return count;


/* TEST CODE 
var s = " Michael Alexander\r";
var re = /\s/gm;
alert(re.count( s)); // 3 
*/
}
/* Clean up RFC text --> 
<!-- Note: This program does not have an interface -->
<!-- Usage: #1 Copy multiline text to clipboard. #2 Refresh browser. #3Copy filtered data into your application. 

See-also Clipboard.js [https://clipboardjs.com/]*/


var s = window.clipboardData.getData("Text");

window.clipboardData.setData("Text", s.replace(/\t/gm, "").replace( /\r\n/gm, " ").replace(/( )+/gm, " "));