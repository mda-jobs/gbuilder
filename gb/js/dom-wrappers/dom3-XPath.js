/*************************************************************************
*                      LIBRARY FUNCTIONS BEGIN
*
************************************************************************/

Function XPathResult ()

    this.type = type, // ANY, NUMBER, STRING, BOOLEAN, NODE, ITERATOR, SNAPSHOT
    this.ordered = ordered // true, false
    this.firstNode = firstNode // true, false
    
    var resultType = ordered ? "ORDERED" : "UNORDERED + type + "_TYPE"
    
    
    
    iteratorType: {
        
        getAttributeValuesByName: function( xpath, resultType) {
  
            var document.evaluate( xpath, document, null, XPathResult[resultType], null),

    n =  xpr.iterateNext(),
    
    r = [],
    
    v;
      
while( n) {

    v = n.getAttribute('id');
    
    if( v !== "") {
   
        r.push( v);
    }

    n =  xpr.iterateNext();
}

console.log(r.join("\n"))
  
})("//dt[@id]", "ORDERED_NODE_ITERATOR_TYPE");

};