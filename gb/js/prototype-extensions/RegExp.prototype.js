/*************************************************************************
*                      LIBRARY FUNCTIONS BEGIN
*
************************************************************************/


RegExp.prototype.count = function( s){
 
    var result;
    var count = 0;

    result = this.exec( s);

    while (result != null)
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



                     /***************************************************
                      * Author:      Michael D. Alexander 
                      * Date:        2014-Jan-28
                      * Parameters:  None
                      * Result Type: string
                      * Purpose:     Count number of occurrences of this
                      *              regular expression object (this) in 
                      *              string (s).                                                                                          
                      **************************************************/

}