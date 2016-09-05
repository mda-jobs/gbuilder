var fop = {
    
    terms: "abstract data type, actor model, currying, dynamic dispatch, first-class function, fluent API, fluent interface, functional programming, higher-order functionm, map, map (higher-order function), message passing, method dispatch, partial application, polymorphism",
    
    glossary: {
        
        "abstract data type": {
            
            definition: "In computer science, an abstract data type (ADT) is a mathematical model for data types where a data type is defined by its behavior (semantics) from the point of view of a user of the data, specifically in terms of possible values, possible operations on data of this type, and the behavior of these operations.",
            
            context: "computer science",
            
            cite: "https://en.wikipedia.org/wiki/Abstract_data_type"
        },
        
        actor: {
            
            context: " Unified Modeling Language",
            
            cite: "https://en.wikipedia.org/wiki/Actor_(UML)" 
        },
        
        "actor model": {
            
            definition: "In mathematics and computer science, currying is the technique of translating the evaluation of a function that takes multiple arguments (or a tuple of arguments) into evaluating a sequence of functions, each with a single argument. It was introduced by Gottlob Frege,[1] developed by Moses Schönfinkel,[2][3][4] and further developed by Haskell Curry."
            
            context: "computer science | mathematics",
            
            cite: "https://en.wikipedia.org/wiki/Actor_model"
        },
        
        "currying": {
            
            context: "concurrent computation",
            
            cite: "https://en.wikipedia.org/wiki/Actor_model"
        },
        
        "dynamic dispatch": {
            
            aka: "abstract data type, actor, dynamic dispatch, function dispatch, behavior delegation, first-order function, functional programming, higher-order function, map, message passing, method dispatch, partial application, polymorphism"
        },
        
        "first-class function": {
            
            definition: 'In computer science, a programming language is said to have first-class functions if it treats functions as first-class citizens. Specifically, this means the language supports passing functions as arguments to other functions, returning them as the values from other functions, and assigning them to variables or storing them in data structures. Some programming language theorists require support for anonymous functions (function literals) as well. In languages with first-class functions, the names of functions do not have any special status; they are treated like ordinary variables with a function type. The term was coined by Christopher Strachey in the context of "functions as first-class citizens" in the mid-1960s.',
            
            context: "computer science",
            
            cite: "https://en.wikipedia.org/wiki/First-class_function"
        },
        
        "fluent API": {
            
            cite: "Programming JavaScript Applications, pp. 35, 978-1-491-95029-6",
            
            see: "fluent interface"    
        },
        
        "fluent interface": {
            
            context: "software engineering",
            
            definition: '<p>In software engineering, a fluent interface (as first coined by Eric Evans and Martin Fowler) is an implementation of an object oriented API that aims to provide more readable code.</p><p>A fluent interface is normally implemented by using method cascading (concretely method chaining) to relay the instruction context of a subsequent call (but a fluent interface entails more than just method chaining)). Generally, the context is</p><ul><li>defined through the return value of a called method</li><li>self-referential, where the new context is equivalent to the last context</li><li>terminated through the return of a void context.</li></ul></h4>History</h4><p>The term "fluent interface" was coined in late 2005, though this overall style of interface dates to the invention of method cascading in Smalltalk in the 1970s, and numerous examples in the 1980s. A common example is the iostream library in C++, which uses the <code>&lt;&lt;</code> or <code>&gt;&gt;</code> <a href="https://en.wikipedia.org/wiki/Operator_(computer_programming)">operators</a> for the message passing, sending multiple data to the same object and allowing "manipulators" for other method calls. Other early examples include the <a href="http://www.cs.cmu.edu/~garnet">Garnet system</a><img src="../images/external.png"/> (from 1988 in Lisp) and the <a href="http://www.cs.cmu.edu/~amulet">Amulet system<img src="../images/external.png"/> (from 1994 in C++) which used this style for object creation and property assignment.</p>',
            
            cite: "https://en.wikipedia.org/wiki/Fluent_interface",
            
            "see also": [
                
                ["string reference-term", "string: URL"],
                
                ["Method chaining", "https://en.wikipedia.org/wiki/Method_chaining"],
                
                ["Method cascading", "https://en.wikipedia.org/wiki/Method_cascading"]
            ]
        },
        
        "functional programming": {
            
            definition: "Functional programming is a style of programming that uses <a href='~fop~#higher-order_function'>higher-order function</a>s (as opposed to objects and data) to facilitate code organization and reuse.",
            
            cite: "Programming JavaScript Applications, pp. 36-38, 978-1-491-95029-6"
        },
        
        "higher-order function": {
            
            definition: "<p>A <i>higher-order function</i> treats functions as data, either taking a function as an argument or returning a function as a result. Higher-order functions are very powerful code reuse tools that are commonly used in JavaScript  for a variety of purposes. Here are some examples:</p><ul><li>They can be used to abstract algorithms from datatypes. This is important because it reduces the amount of code you need in order to support various datatypes in your reusable algorithms. Without this, you might create  a special function to operate on a collection of one type, and a similar, but slightly different function to operate on another. This is a very common problem in most applications.<p class='note'>A series of functions that  do essentially the same thing and differ only in the type of data they operate on is a serious code smell. You’re violating the DRY principle, one of the most valuable guidelines available  to you in software design.</p></li><li>Higher-order functions are very commonly used to  abstract list iteration boilerplate from algorithm implementation.</li><li>Another common use  of higher order functions is to support partial  application and currying</li></ul>",
            
            cite: "Programming JavaScript Applications, p. 36, 978-1-491-95029-6",
            
            examples: [
                
                ["string heading", "string prolog", "string code", "string epilog"],
                
                [
                    'Abstracting Algorithms from Datatypes',
                    
                    'The following example demonstrates use of a higher-order function to sort two lists of items by price for the types, shows and books in which the keys for "price" differ. An alternative approach is to squeeze both into a single, more generic type and create a generic function that will work with both (using duck typing). However, this approach runs the risk of an unjustifiable refactor.',
                
                    'var shows=[{artist:"Kreap",city:"Melbourne",ticketPrice:"40"},{artist:"DJ EQ",city:"Paris",ticketPrice:"38"},{artist:"Treasure Fingers",city:"London",ticketPrice:"60"}],books=[{title:"How to DJ Proper",price:"18"},{title:"Music Marketing for Dummies",price:"26"},{title:"Turntablism for Beginners",price:"15"}];QUnit.test("Datatype abstraction",function(){var t=shows.sort(function(t,r){return t.ticketPrice<r.ticketPrice}),r=books.sort(function(t,r){return t.price<r.price});ok(t[0].ticketPrice>t[2].ticketPrice,"Shows sorted correctly."),ok(r[0].price>r[1].price,"Books sorted correctly.")});',
                    
                    ''
                ],
                
                [
                    'Abstracting list iteration boilerplate from algorithm implementation',
                    
                    "<p>You may have noticed in the previous example that the built-in <code>Array.prototype.sort</code>  method handles the iteration details internally, so you don’t even have to think about writing a for loop.</p><p>There are several functional methods available whose sole purpose is to iterate through a collection in order to process it with a  passed in function of your choice. You simply write the function that you'll use to process the list:</p>",
                    
                    'QUnit.test("Iterator abstraction",function(){books.forEach(function(o){o.category="music"}),ok("music"===books[0].category,"Books have categories.")});',
                ],
                
                [
                
                    'Partial Application',
                    
                    'Partial application wraps a function that takes multiple arguments and returns a function that takes fewer arguments. It uses closures to fix one or more arguments so that you only need to supply the arguments that are unknown. Imagine you have a function multiply(), which takes two arguments, x and y, and you notice that you often call the function to multiply by specific numbers. You could create a generic function that will fix one parameter:',
                    
                    'var multiply=function(t,a){return t*a},partial=function(t){var a=[].slice.call(arguments,1);return function(){var l=a.concat([].slice.call(arguments));return t.apply(this,l)}},double=partial(multiply,2);QUnit.test("Partial application",function(){equal(double(4),8,"partial() works.")});',
                    
                    "As of ES5, you can also use <a href='js_glossary#Function.prototype.bind'></code>.bind()</code></a> for partial application. The only disadvantage is that you won’t be able to override the value of <a href='js_glossary#this'><code>this</code></a> with <a href='js_glossary#Function.prototype.call'><code>.call()</code></a> or <a href='js_glossary#Function.prototype.apply'><code>.apply()</code></a>. If your function uses <a href='js_glossary#this'><code>this</code></a>, you shouldn’t use <a href='js_glossary#Function.prototype.bind'></code>.bind()</code></a>. See <a href='js_glossary#Function.prototype.bind'></code>bind</code></a> for an example."
                ]
            ]
        },
        
        map: {
            
            definition: "In computer science, an associative array, map, symbol table, or dictionary is an abstract data type composed of a collection of (key, value) pairs, such that each possible key appears just once in the collection.",
            
            context: "computer science",
            
            cite: "https://en.wikipedia.org/wiki/Associative_array"  
        },
        
        "map (higher-order function": {
            
            definition: "In computer science, an associative array, map, symbol table, or dictionary is an abstract data type composed of a collection of (key, value) pairs, such that each possible key appears just once in the collection.",
            
            context: "computer science",
            
            cite: "https://en.wikipedia.org/wiki/Associative_array"  
        },
        
        "message passing": {
            
            context: "computer science",
            
            definition: '[<p style="margin:.5em 0;line-height:22.4px;color:#252525;font-family:sans-serif;font-size:14px">In&nbsp;<a href=https://en.wikipedia.org/wiki/Computer_science style="text-decoration:none;color:#0b0080;background:0 0" title="Computer science">computer science</a>,&nbsp;<b>message passing</b>&nbsp;sends a message to a process (which may be an&nbsp;<a href=https://en.wikipedia.org/wiki/Actor_model style="text-decoration:none;color:#0b0080;background:0 0" title="Actor model">actor</a>&nbsp;or&nbsp;<a href=https://en.wikipedia.org/wiki/Object_(computer_science) style="text-decoration:none;color:#0b0080;background:0 0" title="Object (computer science)">object</a>) and relies on the process and the supporting infrastructure to select and invoke the actual code to run. Message passing differs from conventional programming where a process, subroutine, or function is directly invoked by name. Message passing is key to some&nbsp;<a href=https://en.wikipedia.org/wiki/Concurrency_(computer_science)#Models style="text-decoration:none;color:#0b0080;background:0 0" title="Concurrency (computer science)">models of concurrency</a>&nbsp;and&nbsp;<a href=https://en.wikipedia.org/wiki/Object-oriented_programming style="text-decoration:none;color:#0b0080;background:0 0" title="Object-oriented programming">object-oriented programming</a>.</p><p style="margin:.5em 0;line-height:22.4px;color:#252525;font-family:sans-serif;font-size:14px">Message passing is used ubiquitously in modern computer software. It is used as a way for the objects that make up a program to work with each other and as a way for objects and systems running on different computers (e.g., the Internet) to interact. Message passing may be implemented by various mechanisms, including&nbsp;<a href=https://en.wikipedia.org/wiki/Channel_(programming) style="text-decoration:none;color:#0b0080;background:0 0" title="Channel (programming)">channels</a>.</p>',
            
            cite: "https://en.wikipedia.org/wiki/Message_passing",

            "see also": "actor model, concurrent computation"
        },
        
        "method dispatch": {
            
            context: "computer programming",
            
            subcontext: "JavaScript",
            
            definition: "<p>Method dispatch is the mechanism that determines what to do when an object receives a message. JavaScript does this by checking to see if the method exists on the object. If it doesn’t, the JavaScript engine checks the prototype object. If the method isn’t there, it checks the prototype’s prototype, and so on. When it finds a matching method, it calls the method and passes the parameters in. This is also known as behavior delegation in delegation-based prototypal languages like JavaScript.</p><p>Dynamic dispatch enables polymorphism by selecting the appropriate method to run based on the parameters that get passed into the method at runtime. Some languages have special syntax to support dynamic dispatch.</p>",
            
            example: {
                
                prolog: "In JavaScript, you can check the parameters from within the called method and call another method in response:",
                
                code: 'var methods={init:function(e){return"initializing..."},hello:function(e){return"Hello, "+e},goodbye:function(e){return"Goodbye, cruel "+e}},greet=function(e){var o=[].slice.call(arguments,0),t="init";return"string"==typeof e&&"function"==typeof methods[e]&&(t=e,o.shift()),methods[t](o)};test("Dynamic dispatch",function(){var e=(greet(),greet("hello","world!")),o=greet("goodbye","world!");equal(e,"Hello, world!","Dispatched to hello method."),equal(o,"Goodbye, cruel world!","Dispatched to goodbye method.")});'
            },
            
            see: "dynamic dispatch",
            
            cite: "Programming JavaScript Applications, pp. 31-32, 978-1-491-95029-6"
        },
        
        "partial application": {
            
            context: "computer science",
            
            definition: '<p>In <a href="/wiki/Computer_science" title="Computer science">computer science</a>, <b>partial application</b> (or <b>partial function application</b>) refers to the process of fixing a number of arguments to a function, producing another function of smaller <a href="/wiki/Arity" title="Arity">arity</a>. Given a function <img class="mwe-math-fallback-image-inline tex" alt="\scriptstyle f \colon (X \times Y \times Z) \to N " src="//upload.wikimedia.org/math/4/3/a/43a45f58c8f35707c396444463e2ef24.png">, we might fix (or 'bind') the first argument, producing a function of type <img class="mwe-math-fallback-image-inline tex" alt=" \scriptstyle\text{partial}(f) \colon (Y \times Z) \to N " src="//upload.wikimedia.org/math/1/d/5/1d54867424707e76c6f46bf426fc193e.png">. Evaluation of this function might be represented as <img class="mwe-math-fallback-image-inline tex" alt="f_{partial}(2, 3)" src="//upload.wikimedia.org/math/1/5/0/150d132974fd1c1b21b6503567e108eb.png">. Note that the result of partial function application in this case is a function that takes two arguments.</p>',
            
            cite: 'https://en.wikipedia.org/wiki/Partial_application'
            
        },
        
        polymorphism: {
            
            definition: '<p style="margin:.5em 0;line-height:22.4px;color:#252525;font-family:sans-serif;font-size:14px">In&nbsp;<a href=https://en.wikipedia.org/wiki/Programming_language style="text-decoration:none;color:#0b0080;background:0 0" title="Programming language">programming languages</a>&nbsp;and&nbsp;<a href=https://en.wikipedia.org/wiki/Type_theory style="text-decoration:none;color:#0b0080;background:0 0" title="Type theory">type theory</a>,&nbsp;<b>polymorphism</b>&nbsp;(from Greek&nbsp;<a class=extiw href=https://en.wiktionary.org/wiki/%CF%80%CE%BF%CE%BB%CF%8D%CF%82#Ancient_Greek style="text-decoration:none;color:#636;background:0 0" title=wikt:πολύς>&pi;&omicron;&lambda;ύ&sigmaf;</a>, polys, &quot;many, much&quot; and&nbsp;<a class=extiw href=https://en.wiktionary.org/wiki/%CE%BC%CE%BF%CF%81%CF%86%CE%AE#Ancient_Greek style="text-decoration:none;color:#636;background:0 0" title=wikt:μορφή>&mu;&omicron;&rho;&phi;ή</a>, morphē, &quot;form, shape&quot;) is the provision of a single&nbsp;<a href=https://en.wikipedia.org/wiki/Interface_(computing) style="text-decoration:none;color:#0b0080;background:0 0" title="Interface (computing)">interface</a>&nbsp;to entities of different&nbsp;<a href=https://en.wikipedia.org/wiki/Data_type style="text-decoration:none;color:#0b0080;background:0 0" title="Data type">types</a>.<sup class=reference id=cite_ref-1 style=line-height:1;unicode-bidi:isolate;font-size:11.2px><a href=https://en.wikipedia.org/wiki/Polymorphism_(computer_science)#cite_note-1 style="text-decoration:none;color:#0b0080;white-space:nowrap;background:0 0">[1]</a></sup>&nbsp;A&nbsp;<b>polymorphic type</b>&nbsp;is one whose operations can also be applied to values of some other type, or types.<sup class=reference id=cite_ref-Luca_2-0 style=line-height:1;unicode-bidi:isolate;font-size:11.2px><a href=https://en.wikipedia.org/wiki/Polymorphism_(computer_science)#cite_note-Luca-2 style="text-decoration:none;color:#0b0080;white-space:nowrap;background:0 0">[2]</a></sup>&nbsp;There are several fundamentally different kinds of polymorphism:<ul style="margin:.3em 0 0 1.6em;padding-right:0;padding-left:0;list-style-image:url(&quot;data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%225%22%20height%3D%2213%22%3E%0A%3Ccircle%20cx%3D%222.5%22%20cy%3D%229.5%22%20r%3D%222.5%22%20fill%3D%22%2300528c%22%2F%3E%0A%3C%2Fsvg%3E%0A&quot;);color:#252525;font-family:sans-serif;font-size:14px;line-height:22.4px"><li style=margin-bottom:.1em><i><a href=https://en.wikipedia.org/wiki/Ad_hoc_polymorphism style="text-decoration:none;color:#0b0080;background:0 0" title="Ad hoc polymorphism">Ad hoc polymorphism</a></i>: when a function denotes different and potentially heterogeneous implementations depending on a limited range of individually specified types and combinations. Ad hoc polymorphism is supported in many languages using&nbsp;<a href=https://en.wikipedia.org/wiki/Function_overloading style="text-decoration:none;color:#0b0080;background:0 0" title="Function overloading">function overloading</a>.<li style=margin-bottom:.1em><i><a href=https://en.wikipedia.org/wiki/Parametric_polymorphism style="text-decoration:none;color:#0b0080;background:0 0" title="Parametric polymorphism">Parametric polymorphism</a></i>: when code is written without mention of any specific type and thus can be used transparently with any number of new types. In the&nbsp;<a href=https://en.wikipedia.org/wiki/Object-oriented_programming style="text-decoration:none;color:#0b0080;background:0 0" title="Object-oriented programming">object-oriented programming</a>&nbsp;community, this is often known as&nbsp;<i>generics</i>&nbsp;or&nbsp;<i><a href=https://en.wikipedia.org/wiki/Generic_programming style="text-decoration:none;color:#0b0080;background:0 0" title="Generic programming">generic programming</a></i>. In the&nbsp;<a href=https://en.wikipedia.org/wiki/Functional_programming style="text-decoration:none;color:#0b0080;background:0 0" title="Functional programming">functional programming</a>&nbsp;community, this is often shortened to<i>polymorphism</i>.<li style=margin-bottom:.1em><i><a href=https://en.wikipedia.org/wiki/Subtyping style="text-decoration:none;color:#0b0080;background:0 0" title=Subtyping>Subtyping</a></i>&nbsp;(also called&nbsp;<i>subtype polymorphism</i>&nbsp;or&nbsp;<i>inclusion polymorphism</i>): when a name denotes instances of many different classes related by some common superclass.<sup class=reference id=cite_ref-gbooch_3-0 style=line-height:1;unicode-bidi:isolate;font-size:11.2px><a href=https://en.wikipedia.org/wiki/Polymorphism_(computer_science)#cite_note-gbooch-3 style="text-decoration:none;color:#0b0080;white-space:nowrap;background:0 0">[3]</a></sup>&nbsp;In the object-oriented programming community, this is often simply referred to as&nbsp;<i>polymorphism</i>.</ul><p style="margin:.5em 0;line-height:22.4px;color:#252525;font-family:sans-serif;font-size:14px">The interaction between parametric polymorphism and subtyping leads to the concepts of&nbsp;<a href=https://en.wikipedia.org/wiki/Covariance_and_contravariance_(computer_science) style="text-decoration:none;color:#0b0080;background:0 0" title="Covariance and contravariance (computer science)">variance</a>&nbsp;and&nbsp;<a href=https://en.wikipedia.org/wiki/Bounded_quantification style="text-decoration:none;color:#0b0080;background:0 0" title="Bounded quantification">bounded quantification</a>.',
            
            quiz: {
                
                Matching: [
                    
                    ["array terms", "array definitions"],
                    
                    [
                        [
                            "Ad hoc polymorphism",
                            
                            "Parametric polymorphism",
                            
                            "Subtyping"
                        ],
                            
                        [
                            "When a function denotes different and potentially heterogeneous implementations depending on a limited range of individually specified types and combinations",
                        
                            "When code is written without mention of any specific type and thus can be used transparently with any number of new types.", 
                            
                            "When a name denotes instances of many different classes related by some common superclass."
                        ]    
                    ]
                ],
                
                
                /*
                    [http://help-archives.blackboard.com/instructor/Content/_instructor_course/instructor_course_tool_assess_question_matching.htm]
                    
                    [http://library.blackboard.com/ref/a86c3648-80a5-43cc-8fed-b3f5d24518ce/Content/as_r7_3_Instructor_Manual/Matching%20Questions.htm]
                */
               
                "Multiple-Choice": [
                    
                    ["string question", "array choices", "array (boolean answer)"],
                    
                    [
                        "Which of the following words or phrases describes a type of polymorphism?",
                        
                        ["Duck typing", "Ad hoc polymorphism", "Parametric polymorphism", "Subtyping"],
                        
                        [false, true, true, true]
                    ],
                    
                    [
                        "Which of the following are also names for subtyping?",
                        
                        ["inclusion polymorphism", "subtype polymorphism"],
                        
                        [true, true],
                        
                    ]
                ],
                
                "Short-Answer": [
                
                    ["string question", "array answer"],
                
                    [
                        "Polymorphism is the concern of these two fields of study:", 
                        
                        ["programming langages", "type theory"]
                    ],
                    
                    [
                        "The term polymorphism derives from the Greek", 
                        
                        ["polys: \"many, much\"", "morphē: \"form, shape\""]
                    ],
                    
                    [
                        "Ad hoc polymorphism is supported in many languages using this technique.",
                        
                        ["function overloading"]
                    ]
                ],
                
                "True-False": [
                    
                    ["string question", "boolean answer"], 
                    
                    ["There are several fundamentally different kinds of polymorphism?", true],
                    
                    ["Ad hoc polymorphism is supported in many languages using function overloading.", true],
                    
                    [" In the object-oriented programming community, parametric polymorphism is often known as generics or generic programming.", true],
                    
                    ["In the functional programming community, parametric polymorphism is often shortened to polymorphism.", true],
                    
                    ["In the object-oriented programming community, subtyping is often simply referred to as polymorphism.", true],
                    
                    ["The interaction between parametric polymorphism and subtyping leads to the concepts of variance and bounded quantification.", true]
                ]
            }
        }
    }    
};

/*


*/