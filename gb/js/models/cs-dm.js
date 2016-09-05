var cs = {
    
    "types of questions": "Multiple-Choice, True-False, Essay, Directives, Short-Answer, Fill-in-the-blank, Matching"
    
    /*
        [http://tutorials.istudy.psu.edu/testing/testing5.html]
    */

    
    "glossary": {
        
        
        polymorphism: {
            
            definition: "<p style="margin:.5em 0;line-height:22.4px;color:#252525;font-family:sans-serif;font-size:14px">In&nbsp;<a href=https://en.wikipedia.org/wiki/Programming_language style="text-decoration:none;color:#0b0080;background:0 0" title="Programming language">programming languages</a>&nbsp;and&nbsp;<a href=https://en.wikipedia.org/wiki/Type_theory style="text-decoration:none;color:#0b0080;background:0 0" title="Type theory">type theory</a>,&nbsp;<b>polymorphism</b>&nbsp;(from Greek&nbsp;<a class=extiw href=https://en.wiktionary.org/wiki/%CF%80%CE%BF%CE%BB%CF%8D%CF%82#Ancient_Greek style="text-decoration:none;color:#636;background:0 0" title=wikt:πολύς>&pi;&omicron;&lambda;ύ&sigmaf;</a>, polys, &quot;many, much&quot; and&nbsp;<a class=extiw href=https://en.wiktionary.org/wiki/%CE%BC%CE%BF%CF%81%CF%86%CE%AE#Ancient_Greek style="text-decoration:none;color:#636;background:0 0" title=wikt:μορφή>&mu;&omicron;&rho;&phi;ή</a>, morphē, &quot;form, shape&quot;) is the provision of a single&nbsp;<a href=https://en.wikipedia.org/wiki/Interface_(computing) style="text-decoration:none;color:#0b0080;background:0 0" title="Interface (computing)">interface</a>&nbsp;to entities of different&nbsp;<a href=https://en.wikipedia.org/wiki/Data_type style="text-decoration:none;color:#0b0080;background:0 0" title="Data type">types</a>.<sup class=reference id=cite_ref-1 style=line-height:1;unicode-bidi:isolate;font-size:11.2px><a href=https://en.wikipedia.org/wiki/Polymorphism_(computer_science)#cite_note-1 style="text-decoration:none;color:#0b0080;white-space:nowrap;background:0 0">[1]</a></sup>&nbsp;A&nbsp;<b>polymorphic type</b>&nbsp;is one whose operations can also be applied to values of some other type, or types.<sup class=reference id=cite_ref-Luca_2-0 style=line-height:1;unicode-bidi:isolate;font-size:11.2px><a href=https://en.wikipedia.org/wiki/Polymorphism_(computer_science)#cite_note-Luca-2 style="text-decoration:none;color:#0b0080;white-space:nowrap;background:0 0">[2]</a></sup>&nbsp;There are several fundamentally different kinds of polymorphism:<ul style="margin:.3em 0 0 1.6em;padding-right:0;padding-left:0;list-style-image:url(&quot;data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%225%22%20height%3D%2213%22%3E%0A%3Ccircle%20cx%3D%222.5%22%20cy%3D%229.5%22%20r%3D%222.5%22%20fill%3D%22%2300528c%22%2F%3E%0A%3C%2Fsvg%3E%0A&quot;);color:#252525;font-family:sans-serif;font-size:14px;line-height:22.4px"><li style=margin-bottom:.1em><i><a href=https://en.wikipedia.org/wiki/Ad_hoc_polymorphism style="text-decoration:none;color:#0b0080;background:0 0" title="Ad hoc polymorphism">Ad hoc polymorphism</a></i>: when a function denotes different and potentially heterogeneous implementations depending on a limited range of individually specified types and combinations. Ad hoc polymorphism is supported in many languages using&nbsp;<a href=https://en.wikipedia.org/wiki/Function_overloading style="text-decoration:none;color:#0b0080;background:0 0" title="Function overloading">function overloading</a>.<li style=margin-bottom:.1em><i><a href=https://en.wikipedia.org/wiki/Parametric_polymorphism style="text-decoration:none;color:#0b0080;background:0 0" title="Parametric polymorphism">Parametric polymorphism</a></i>: when code is written without mention of any specific type and thus can be used transparently with any number of new types. In the&nbsp;<a href=https://en.wikipedia.org/wiki/Object-oriented_programming style="text-decoration:none;color:#0b0080;background:0 0" title="Object-oriented programming">object-oriented programming</a>&nbsp;community, this is often known as&nbsp;<i>generics</i>&nbsp;or&nbsp;<i><a href=https://en.wikipedia.org/wiki/Generic_programming style="text-decoration:none;color:#0b0080;background:0 0" title="Generic programming">generic programming</a></i>. In the&nbsp;<a href=https://en.wikipedia.org/wiki/Functional_programming style="text-decoration:none;color:#0b0080;background:0 0" title="Functional programming">functional programming</a>&nbsp;community, this is often shortened to<i>polymorphism</i>.<li style=margin-bottom:.1em><i><a href=https://en.wikipedia.org/wiki/Subtyping style="text-decoration:none;color:#0b0080;background:0 0" title=Subtyping>Subtyping</a></i>&nbsp;(also called&nbsp;<i>subtype polymorphism</i>&nbsp;or&nbsp;<i>inclusion polymorphism</i>): when a name denotes instances of many different classes related by some common superclass.<sup class=reference id=cite_ref-gbooch_3-0 style=line-height:1;unicode-bidi:isolate;font-size:11.2px><a href=https://en.wikipedia.org/wiki/Polymorphism_(computer_science)#cite_note-gbooch-3 style="text-decoration:none;color:#0b0080;white-space:nowrap;background:0 0">[3]</a></sup>&nbsp;In the object-oriented programming community, this is often simply referred to as&nbsp;<i>polymorphism</i>.</ul><p style="margin:.5em 0;line-height:22.4px;color:#252525;font-family:sans-serif;font-size:14px">The interaction between parametric polymorphism and subtyping leads to the concepts of&nbsp;<a href=https://en.wikipedia.org/wiki/Covariance_and_contravariance_(computer_science) style="text-decoration:none;color:#0b0080;background:0 0" title="Covariance and contravariance (computer science)">variance</a>&nbsp;and&nbsp;<a href=https://en.wikipedia.org/wiki/Bounded_quantification style="text-decoration:none;color:#0b0080;background:0 0" title="Bounded quantification">bounded quantification</a>.",
            
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
                
                Multiple-Choice: [
                    
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
                
                Short-Answer [
                
                    ["string question" "array answer"],
                
                    [
                        "Polymorphism is the concern of these two fields of study:", 
                        
                        ["programming langages", "type theory"]
                    ],
                    
                    [
                        "The term polymorphism derives from the Greek, 
                        
                        ["polys: \"many, much\", morphē" \"form, shape\""]
                    ],
                    
                    [
                        "Ad hoc polymorphism is supported in many languages using this technique.",
                        
                        ["function overloading"]
                ],
                
                True-False: [
                    
                    ["string question", "boolean answer"], 
                    
                    ["There are several fundamentally different kinds of polymorphism?", true]
                    
                    ["Ad hoc polymorphism is supported in many languages using function overloading.", true],
                    
                    [" In the object-oriented programming community, parametric polymorphism is often known as generics or generic programming.", true],
                    
                    ["In the functional programming community, parametric polymorphism is often shortened to polymorphism.", true],
                    
                    ["In the object-oriented programming community, subtyping is often simply referred to as polymorphism.", true],
                    
                    ["The interaction between parametric polymorphism and subtyping leads to the concepts of variance and bounded quantification.", true],
                    
                    ["", ],
                    
                    ["", ],
                    
                    ["", ],
                    
                    ["", ],
                    
                    ["", ],
                    
                    ["", ],
                ]
            }
                

    }
}

