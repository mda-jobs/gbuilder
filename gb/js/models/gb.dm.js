'use strict';

(function() {

    let entry = {
        
            domain: "",             
            term: "",           
            context: "",        
            extraText: "",      
            definition: "",
            cf: "",
            see: "",
            seeAlso: [],
            specification:[],
            reference: []
        },
        
        dt,
        
        dd,
        
        domains = [
        
            "JavaScript",
            "XPath",
            "DOM",
            "HTML",
            "XML Schema",
            "XML",
            "CSS",
            "XQuery"
        ]
    ;
    
    window.fetch("/html_glossary.html")
    
        .then( 
        
            function( response) {
                
                console.log( response.text());
            }
        )
        
        .then(
            
            function( data) {
      
                console.log( data);
            }
        )
        
        .catch(
            
            function() {
      
                console.log("Booo");
            }
        )
    ;
window.mongoDb32 = mongoDb32;
    
}()); // end IIFE    




    
    

