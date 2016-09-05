var dom.HTML = {
    
    /* Reference:
    
       1. http://reference.sitepoint.com/javascript
       
       2.
    
    */

    token: {
        
        Element: {
            
            identity: "interface",
            
            context: "Document Object Model Level 1 Core",
            
            "see also": "Interface Definition Language [http://pubs.opengroup.org/onlinepubs/9629399/chap4.htm]",
            
            dependency: "Node interface",
            
            symantics: "The Element interface represents an element in an HTML or XML document. Elements may have attributes associated with them; since the Element interface inherits from Node, the generic Node interface attribute attributes may be used to retrieve the set of all attributes for an element. There are methods on the Element interface to retrieve either an Attr object by name or an attribute value by name. In XML, where an attribute value may contain entity references, an Attr object should be retrieved to examine the possibly fairly complex sub-tree representing the attribute value. On the other hand, in HTML, where all attributes have simple string values, methods to directly access an attribute value can safely be used as a convenience.",
            
            specification: {
                
                W3C: [
                    
                    ["DOM Level 1", "http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-745549614"], 
                    
                    ["DOM Level 2", "http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-745549614"], 
                    
                    ["DOM Level 3", "http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-745549614"]],
                    
                WHATWG: "https://dom.spec.whatwg.org/#interface-element"
    
            },
            
            reference: [
                
                ["MDN", "https://dom.spec.whatwg.org/#interface-element"]]
            }
        },

        getElementsByTagName: { 
            
            identity: "method",
            
            context: Element interface",

            symantics: "The Elememnt.getElementsByTagName method returns a NodeList of all descendant elements with a given tag name, in the order in which they would be encountered in a preorder traversal of the Element tree.",             

            note: "If a &lt;div&gt;, &lt;span&gt;, or &lt;noembed&gt; node has a child text node that includes the characters (&amp;), (&lt;), or (&gt;), innerHTML returns these characters as &amp, &lt and &gt respectively. Use Node.textContent to get a correct copy of these text nodes' contents.",

            syntax: ["getElementsByTagName(<i>qualifiedName</i>)", "Returns the list of elements with qualified name: <i>qualifiedName</i>, for the context object."],
            
            "see also": ["getElementsByTagNameNS", "getElementsByClassName"],
		        
            specification: {
                
                W3C: [
                    
                    ["DOM Level 1", "https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-745549614"], 
                    
                    ["DOM Level 2", "https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1938918D"], 
                    
                    ["DOM Level 3", "https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1938918D"]],
                    
                WHATWG: "https://dom.spec.whatwg.org/#dom-element-getelementsbytagname"
    
            },
            
            reference: [
                
                ["MDN", "Element.getElementsByTagName()", "https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName"],
                
                ["W3C", "DOM Parsing and Serialization", "https://www.w3.org/TR/DOM-Parsing/"]
            ]
        },


        innerHTML: {
            
            identity: "property",
            
            context: "Element interface",
            
            cf: "outerHTML",
            
            "see also": "innerText, outerText, textContent",

            symantics: "The Element.innerHTML attribute can be used to return or replace the fragment of HTML or XML that is or becomes the element's contents.",

            note: "If a &lt;div&gt;, &lt;span&gt;, or &lt;noembed&gt; node has a child text node that includes the characters (&amp;), (&lt;), or (&gt;), innerHTML returns these characters as &amp, &lt and &gt respectively. Use Node.textContent to get a correct copy of these text nodes' contents.",

            syntax: [

		        ["var <i>content</i> = <i>element</i>.innerHTML", "Return a serialized represention of all descendants of the specified element reference."], 
                
		        ["<i>element</i>.innerHTML = <i>content</i>;", "Replace the contents of the specified element reference with the HTML or XML fragment; <i>contents</i>."]
	       ],

            specification: {
                    
                WHATWG: "https://w3c.github.io/DOM-Parsing/#widl-Element-innerHTML",
            },
            
            reference: [
                
                ["MDN", "Element.innerHTML", "https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML"],
                
                ["W3C", "DOM Parsing and Serialization", "https://www.w3.org/TR/DOM-Parsing/"]
            ]
        },
        
        innerText {
            
            identity: "attribute",
            
            context: "Node interface",
            
            cf: "outerText",
            
            "see also": "innerHTML",

            symantics: "The Element.innerText attribute represents the character data of the context element. That is, the inner text, stripped of all markup",
            
            note: "Node.innerText is not on a standards track and is not recommended for use in production sites. Node.textContent is a standardized alternative.",

            syntax: [

		        ["", ""], 
                
		        ["", ""]
	       ],
	       
	       example: {
	           
	           html:
	           
	           javascript:
	       }

            specification: {
                    
                WHATWG: "https://w3c.github.io/DOM-Parsing/#widl-Element-innerHTML"
            },
            
            "see also": "",
            
            reference: [
                
                ["MDN", "Element.innerHTML", "https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML"],
                
                ["tizag.com", "Javascript Tutorial - innerHTML", "http://www.tizag.com/javascriptT/javascript-innerHTML.php"],
                
                ["quackit.com", "InnerHTML In JavaScript", "http://www.quackit.com/javascript/tutorial/innerhtml_in_javascript.cfm"],
                
                ["jquery.com", ".html()", "http://api.jquery.com/html/"]
            ]
        },

        outerHTML: {
            
            context: "attribute",
            
            domain: "Element interface",

            symantics: "The Element.outerHTML attribute represents the context element and its content. That is, the innerHTML and the context element (parent).",

            note: ",

            syntax: [

		        ["", ""], 
                
		        ["", ""]
	       ],

            specification: {
                    
                WHATWG: ""
            },
            
            "see also": "",
            
            reference: [
                
                ["MDN", "Element.outerHTML", "https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML"],
                
                ["", "", ""]
            ]
        },
        
        outerText: {
            
            identity: "attribute",
            
            context: "Node interface",

            symantics: "",

            note: "",

            syntax: [

		        ["", ""], 
                
		        ["", ""]
	       ],

            specification: {
                    
                WHATWG: ""
            },
            
            "see also": "",
            
            reference: [
                
                ["", "", ""],
                
                ["", "", ""]
            ]
        },
        
        textContent: {
            
            identity: "attribute",
            
            context: "Node interface",

            symantics: "",

            note: "Note also that Microsoft introduced the Element.innerText property that is valid for block elements only.",

            syntax: [

		        ["", ""], 
                
		        ["", ""]
	       ],

            specification: {
                    
                WHATWG: ""
            },
            
            "see also": "",
            
            reference: [
                
                ["", "", ""],
                
                ["kellegous.com", "Innertext vs. TextContent", "http://www.kellegous.com/j/2013/02/27/innertext-vs-textcontent/"],
                
                ["", "", ""],
                
                ["", "", ""]
            ]
        }


    }

};

/*

        <token>: {
            
            context: "",
            
            domain: "",

            symantics: "",

            note: ",

            syntax: [

		        ["", ""], 
                
		        ["", ""]
	       ],

            specification: {
                    
                WHATWG: ""
            },
            
            "see also": "",
            
            reference: [
                
                ["", "", ""],
                
                ["", "", ""]
            ]
        }


*/