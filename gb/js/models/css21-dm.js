'use strict';

(function () {
    
    let css21 = {  
    
        /* Reference:
        
            1. CSS Snapshot 2015 ==> https://www.w3.org/TR/CSS/
        
            2. CSS Snapshot 2010 ==> https://www.w3.org/TR/css-2010/
            
            3. CSS Snapshot 2007 ==> https://www.w3.org/TR/css-beijing/
            
            4. CSS Animations ==> https://www.w3.org/TR/css3-animations/
            
            5. CSS Fonts Module Level 3 ==> https://www.w3.org/TR/css-fonts-3/#font-face-rule
            
            6. CSS Namespaces Module Level 3 ==> https://www.w3.org/TR/css3-namespace/
            
            7. CSS Syntax Module Level 3 ==> https://www.w3.org/TR/css-syntax-3/#charset-rule
        
            8. Cascading Style Sheets Level 2.1  ==>  https://www.w3.org/TR/CSS2/ ==> https://www.w3.org/TR/2011/REC-CSS2-20110607/css2.pdf
            
            9. Cascading Style Sheets, level 2 ==> https://www.w3.org/TR/REC-CSS2/
            
           10. Cascading Style Sheets, level 1 ==> https://www.w3.org/TR/REC-CSS1/
        
           11. Complete CSS Guide ==> http://www.westciv.com/style_master/academy/css_tutorial/
            
           12. CSS 3 Quick Reference ==> https://media-mediatemple.netdna-ssl.com/wp-content/uploads/images/css3-cheat-sheet/css3-cheat-sheet.pdf
        
        */
        
        "at-rule": {
            
            "index": [
                
                /* Reference
                
                    CSS Namespaces Module Level 3 ==> https://www.w3.org/TR/css3-namespace/
                
                    At-rule ==> https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
                    
                    The At-Rules of CSS ==> https://css-tricks.com/the-at-rules-of-css/
                    
                    At-rule ==> http://reference.sitepoint.com/css/atrules
                    
                    At-Rules: @import, @media, and @font-face ==> http://htmldog.com/guides/css/advanced/atrules/
                    
                    CSS3 At-rules ==> http://www.tutorialrepublic.com/css-reference/css-at-rules.php
                    
                    Pages in category "CSS At Rules" ==> https://docs.webplatform.org/wiki/Category:CSS_At_Rules
                    
                    CSS Object Model (CSSOM) ==> https://www.w3.org/TR/cssom-1/
                    
                    Feature Testing CSS At-Rules ==> http://ryanmorr.com/feature-testing-css-at-rules/
                    
                    @charset ==> https://docs.webplatform.org/wiki/css/atrules/@charset
                    
                    @font-face ==> https://docs.webplatform.org/wiki/css/atrules/@font-face
                    
                    @import ==> https://docs.webplatform.org/wiki/css/atrules/@import
                    
                    @keyframes ==> https://docs.webplatform.org/wiki/css/atrules/@keyframes
                */
                
                ["At-Rule", "Symantics", "Described in section", "First Defined in level"],
                
                ["@charset", "Defines the character set used by the style sheet. It must appear before anything else in the file.", "<a href='https://www.w3.org/TR/css-syntax-3/#charset-rule'>The @charset Rule</a>", "2"],
                
                ["@font-face", "Provides for the specification of custom fonts.", "<a href='https://www.w3.org/TR/css-fonts-3/#font-face-rule'>The @font-face rule</a>", "2"], // Font descriptors, the ’@font-face’ declaration, and all associated parts of the font matching algorithm have been removed in CSS 2.1. ==> 
                
                ["@import", "The @import at-rule allows us to import one style sheet into another. All @import at-rules must appear before any rules.", "<a href='https://www.w3.org/TR/css-cascade-3/#at-import'>Importing Style Sheets</a>", "1"],
                
                ["@keyframes", "Keyframes are used to specify the values for the animating properties at various points during an animation.", "<a href='https://www.w3.org/TR/css3-animations/#keyframes'>Keyframes</a>", "3"],
                
                ["@media", "A conditional group rule which will apply its content if the device meets the criteria of the condition defined using a media query.", "<a href='https://www.w3.org/TR/css3-conditional/#at-media'>Media-specific style sheets</a>", "2"],
                
                ["@namespace", "Provides for the use of namespaces in CSS&mdash;declares the default namespace and binding to a namespace prefix", "<a href='https://www.w3.org/TR/css3-namespace/#declaration'>Declaring namespaces</a>", "3"]
                
                ["@page", "Defines the dimensions, orientation, and margins of a page box for printing environments.", "<a href='https://www.w3.org/TR/CSS2/page.html#page-box'>Page boxes</a>", "1"],
            ]
        },
    
        "basic data types": "<angle>, <border-style>, <border-width>, <bottom>, <color>, <counter>, <family-name>, <frequency>, <generic-family>, <generic-voice>, <identifier>, <integer>, <left>, <length>, <margin-width>, <number>, <padding-width>, <percentage>, <relative-size>, <shape>, <specific-voice>, <string>, <time>, <uri>", // https://www.w3.org/TR/2011/REC-CSS2-20110607/about.html#value-defs
        
        "basic data type": { // https://www.w3.org/TR/2011/REC-CSS2-20110607/syndata.html
            
            "<angle>": { // A.2.1 Angles  ==>  https://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#value-def-angle
                
                "abstract": "",
                
                "unit identifer": {
                    
                    "deg": "degrees",
                    
                    "grad": "grads",
                    
                    "rad": "radians"
                },
                
                "example": "For example, a right angle is '90deg' or '100grad' or '1.570796326794897rad'.",
                
                "remarks": "Angle values may be negative. They should be normalized to the range 0-360deg by the user agent. For example, -10deg and 350deg are equivalent. Like for <length>, the unit may be omitted, if the value is zero: '0deg' may be written as '0'."
            },
            
            "<color>": { // 4.3.6 Colors  ==>  https://www.w3.org/TR/CSS21/syndata.html#color-units
                
                "abstract": "A <color> is either a keyword (basic 17 color keywords or a system color name, i.e., ActiveBorder) or a numerical RGB specification.", // 18.2 System Colors  ==>  https://www.w3.org/TR/2011/REC-CSS2-20110607/ui.html#system-colors
                
                "color keywords:": "aqua (#00FFFF), black (#000000), blue (#0000FF), fuchsia (#FF00FF), gray (#808080), green (#008000), lime (#00FF00), maroon (#800000), navy (#000080), olive (#808000), orange (#FFA500), purple (#800080), red (#FF0000), silver (#C0C0C0), teal (#008080), white (#ffffff), yellow (#ffff00)",
                
                "RGB color model syntax": {
                        
                    "#<hhh>": "Where h is a hexadecimal number in the range 0-F, in order, the partial red (r), green (g) and blue (b) color component specification: #rgb. The user agent will map the three hex characters specified in this form (#rgb) to a six hexadecimal character representation (#rrggbb), where the second character in each of the three pairs is a duplicate of the first.",
                    
                    "#<hhhhhh>": "Where each hh group is a hexadecimal number in the range 00-FF, in order, the red (r), green (g) and blue (b) color component specification: #rrggbb.",
                    
                    "rgb(<ddd>, <ddd>, <ddd>)": "Where ddd is a number in the decimal range 0-255, in order, the red (r), green (g) and blue (b) color component specification: rgb(<rrr>, <ggg>, <bbb>). This form is a decimal mapping of a hexadecimal number in the range 0-FF.",
                    
                    "rgb(<ddd>%, <ddd>%, <ddd>%)": "Where ddd is a number in the decimal range 0-100; in order, the red (r), green (g) and blue (b) color component specification: rgb(<rrr>%, <ggg>%, <bbb>%). This form is a percentage specification of the hexadecimal range 00-FF."
                },
                
                "example": {
                    
                    "color keyword": "myclass {color: red; background-color: blue;}",
                    
                    "system color keyword": "myclass {color: Background; background-color: WindowFrame;} /* Set the text color to match the desktop background color and the background-color of the text to match the window frame color set for the current Microsoft Windows session. */",
                    
                    "#<hhh>": "myclass {color: #F00; background-color: #00F;}",
                    
                    "#<hhhhhh>": "myclass {color: #FF0000; background-color: #0000FF;}",
                    
                    "rgb(<ddd>, <ddd>, <ddd>)": "myclass {color: rgb(255, 0, 0); background-color: rgb(0, 0, 255);}",
                    
                    "rgb(<ddd>%, <ddd>%, <ddd>%)": "myclass {color: rgb(100%, 0%, 0%); background-color: rgb(0%, 0%, 100%);}"
                },
                
                "remarks": "The RGB color model is used in numerical color specifications. All RGB colors are specified in the <a href='https://en.wikipedia.org/wiki/SRGB'>sRGB</a> color space."
            }
            
            
        },  // end "basic data type" object
        
        "glossary": {
            
            "index": ":active, :after, :before, :first, :first-child, :first-letter, :first-line, :focus, :hover, :lang, :left, :link, :right, :visited, <angle>, <border-style>, <border-width>, <bottom>, <color>, <counter>, <frequency>, <generic-voice>, <integer>, <left>, <length>, <margin-width>, <number>, <padding-width>, <percentage>, <right>, <shape>, <specific-voice>, <string>, <time>, <top>, <uri>, =, @charset, @import, @media, @page, Author, BOM, DTD, LALR(1), MAY, MUST, MUST NOT, OPTIONAL, Property, RECOMMENDED, REQUIRED, SHALL, SHALL NOT, SHOULD, SHOULD NOT, UA, UTF-8, User, User agent (UA), absolute length, absolutely positioned element, active (pseudo-class), actual value, adjoining margins, after, all, ancestor, anonymous, anonymous boxes., anonymous inline boxes, armenian, as border style, as display value, at-rule, at-rules, atomic inline-level box, attr(), attribute, audio, auditory icon, authoring tool, automatic numbering, azimuth, background, background-attachment, background-color, background-image, background-position, background-repeat, backslash escapes, before, bidirectionality (bidi), bitmap, block, block box, block container box, block-level box, block-level element, border, border box, border edge, border-bottom, border-bottom-color, border-bottom-style, border-bottom-width, border-collapse, border-color, border-left, border-left-color, border-left-style, border-left-width, border-right, border-right-color, border-right-style, border-right-width, border-spacing, border-style, border-top, border-top-color, border-top-style, border-top-width, border-width, bottom, box, canvas, caption-side, cascade, case sensitivity, character encoding, child, child selector, circle, clear, clearance, clip, clipping region, close-quote, collapse, collapse through, collapsing margin, color, combinator, comments, computed value, conditional import, conformance, consecutive, containing block, content, content box, content edge, content height, content width, continuous, counter(), counter-increment, counter-reset, counters, cue, cue-after, cue-before, cursive, cursor, dashed, decimal, decimal-leading-zero, declaration, declaration block, default, default style sheet, definition of, descendant, descendant-selectors, direction, disc, display, document language, document tree, dotted, double, drop caps, element, elevation, em (unit), empty, empty-cells, ex (unit), exact matching, fantasy, fictional tag sequence, first-child, first-letter, first-line, float, float rules, flow of an element, focus, focus (pseudo-class), following, following element, font, font-family, font-size, font-style, font-variant, font-weight, formatting context, formatting structure, forward-compatible parsing, generated content, georgian, grid, groove, height, hidden, hover (pseudo-class), hyphen-separated matching, identifier, ignore, illegal, in-flow, inherit, initial, initial caps, initial containing block, initial value, inline, inline box, inline-block, inline-level box, inline-level element, inline-table, inner edge, inset, interactive media group, internal, internal table box, internal table element, intrinsic dimensions, invert, iso-10646, lang (pseudo-class), language (human), language code, left, letter-spacing, ligatures, line box, line-box, line-height, link (pseudo-class), list properties, list-item, list-style, list-style-image, list-style-position, list-style-type, lower-greek, lower-latin, lower-roman, mapping elements to table parts, margin, margin box, margin edge, margin-bottom, margin-left, margin-right, margin-top, match, max-height, max-width, media, media group, media-dependent import, message entity, min-height, min-width, monospace, multiple declarations, newline, no-close-quote, no-open-quote, none, normal, of a box, open-quote, orphans, out of flow, outer edge, outline, outline-color, outline-style, outline-width, outset, overflow, padding, padding box, padding edge, padding-bottom, padding-left, padding-right, padding-top, page area, page box, page selector, page-break-after, page-break-before, page-break-inside, page-context, paged, parent, pause, pause-after, pause-before, pitch, pitch-range, pixel, play-during, position, positioned element/box, positioning scheme, preceding, preceding element, principal block-level box, proper table child, proper table row parent, property, property-name, pseudo-class, pseudo-classes, pseudo-elements, quad width, quotes, reference pixel, relative positioning, relative units, rendered, rendered content, replaced element, richness, ridge, right, root, row group box, row groups, rule sets, run-in, sans-serif, scope, screen reader, selector, separated borders, serif, sheet, shorthand property, sibling, simple selector, solid, source document, space-separated matching, speak, speak-header, speak-numeral, speak-punctuation, specified value, speech, speech-rate, square, stack level, stacking context, statements, static, stress, string, style sheet, subject (of selector), subject of, system fonts, table, table element, table-caption, table-cell, table-column, table-column-group, table-footer-group, table-header-group, table-layout, table-row, table-row-group, tables, tabular container, tactile, text-align, text-decoration, text-indent, text-transform, text/css, tokenizer, top, type selector, unicode, unicode-bidi, universal selector, upper-latin, upper-roman, used value, user agent, valid style sheet, validity, value, vertical-align, viewport, visibility, visited (pseudo-class), visual, visual formatting model, voice-family, volume, white-space, widows, width, word-spacing, x-height, z-index, |=, ~=",
            
            "index phrases": "MUST NOT,SHALL NOT,SHOULD NOT,User agent (UA),absolute length,absolutely positioned element,active (pseudo-class),actual value,adjoining margins,anonymous boxes.,anonymous inline boxes,as border style,as display value,atomic inline-level box,auditory icon,authoring tool,automatic numbering,backslash escapes,bidirectionality (bidi),block box,block container box,block-level box,block-level element,border box,border edge,case sensitivity,character encoding,child selector,clipping region,collapse through,collapsing margin,computed value,conditional import,containing block,content box,content edge,content height,content width,declaration block,default style sheet,definition of,document language,document tree,drop caps,em (unit),ex (unit),exact matching,fictional tag sequence,float rules,flow of an element,focus (pseudo-class),following element,formatting context,formatting structure,forward-compatible parsing,generated content,hover (pseudo-class),hyphen-separated matching,initial caps,initial containing block,initial value,inline box,inline-level box,inline-level element,inner edge,interactive media group,internal table box,internal table element,intrinsic dimensions,lang (pseudo-class),language (human),language code,line box,link (pseudo-class),list properties,mapping elements to table parts,margin box,margin edge,media group,media-dependent import,message entity,multiple declarations,of a box,out of flow,outer edge,padding box,padding edge,page area,page box,page selector,positioned element/box,positioning scheme,preceding element,principal block-level box,proper table child,proper table row parent,quad width,reference pixel,relative positioning,relative units,rendered content,replaced element,row group box,row groups,rule sets,screen reader,separated borders,shorthand property,simple selector,source document,space-separated matching,specified value,stack level,stacking context,style sheet,subject (of selector),subject of,system fonts,table element,tabular container,type selector,universal selector,used value,user agent,valid style sheet,visited (pseudo-class),visual formatting model",
            
            "index non-phrases": ":active,:after,:before,:first,:first-child,:first-letter,:first-line,:focus,:hover,:lang,:left,:link,:right,:visited,<angle>,<border-style>,<border-width>,<bottom>,<color>,<counter>,<frequency>,<generic-voice>,<integer>,<left>,<length>,<margin-width>,<number>,<padding-width>,<percentage>,<right>,<shape>,<specific-voice>,<string>,<time>,<top>,<uri>,=,@charset,@import,@media,@page,Author,BOM,DTD,LALR(1),MAY,MUST,OPTIONAL,Property,RECOMMENDED,REQUIRED,SHALL,SHOULD,UA,UTF-8,User,after,all,ancestor,anonymous,armenian,at-rule,at-rules,attr(),attribute,audio,azimuth,background,background-attachment,background-color,background-image,background-position,background-repeat,before,bitmap,block,border,border-bottom,border-bottom-color,border-bottom-style,border-bottom-width,border-collapse,border-color,border-left,border-left-color,border-left-style,border-left-width,border-right,border-right-color,border-right-style,border-right-width,border-spacing,border-style,border-top,border-top-color,border-top-style,border-top-width,border-width,bottom,box,canvas,caption-side,cascade,child,circle,clear,clearance,clip,close-quote,collapse,color,combinator,comments,conformance,consecutive,content,continuous,counter(),counter-increment,counter-reset,counters,cue,cue-after,cue-before,cursive,cursor,dashed,decimal,decimal-leading-zero,declaration,default,descendant,descendant-selectors,direction,disc,display,dotted,double,element,elevation,empty,empty-cells,fantasy,first-child,first-letter,first-line,float,focus,following,font,font-family,font-size,font-style,font-variant,font-weight,georgian,grid,groove,height,hidden,identifier,ignore,illegal,in-flow,inherit,initial,inline,inline-block,inline-table,inset,internal,invert,iso-10646,left,letter-spacing,ligatures,line-box,line-height,list-item,list-style,list-style-image,list-style-position,list-style-type,lower-greek,lower-latin,lower-roman,margin,margin-bottom,margin-left,margin-right,margin-top,match,max-height,max-width,media,min-height,min-width,monospace,newline,no-close-quote,no-open-quote,none,normal,open-quote,orphans,outline,outline-color,outline-style,outline-width,outset,overflow,padding,padding-bottom,padding-left,padding-right,padding-top,page-break-after,page-break-before,page-break-inside,page-context,paged,parent,pause,pause-after,pause-before,pitch,pitch-range,pixel,play-during,position,preceding,property,property-name,pseudo-class,pseudo-classes,pseudo-elements,quotes,rendered,richness,ridge,right,root,run-in,sans-serif,scope,selector,serif,sheet,sibling,solid,speak,speak-header,speak-numeral,speak-punctuation,speech,speech-rate,square,statements,static,stress,string,table,table-caption,table-cell,table-column,table-column-group,table-footer-group,table-header-group,table-layout,table-row,table-row-group,tables,tactile,text-align,text-decoration,text-indent,text-transform,text/css,tokenizer,top,unicode,unicode-bidi,upper-latin,upper-roman,validity,value,vertical-align,viewport,visibility,visual,voice-family,volume,white-space,widows,width,word-spacing,x-height,z-index,|=,~=",
            
            /* ! " # $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \ ] ^ _ ` a b c d e f g h i j k l m n o p q r s t u v w x y z { | } ~ */            
            "term": {
            
                "#": {
                    
                    "definition": "The Unicode Number Sign (U+0023) is used to mark or specify an id selector in a css rule. For example: .myclass {color: red; background-color: white;}",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "&&":  {
            
                    "definition": "A double ampersand (&&) separates two or more components, all of which must occur, in any order.",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["1.4.2.1 Value", "https://www.w3.org/TR/2011/REC-CSS2-20110607/about.html#value-defs"]
                    ]
                },
                
                "*":  {
            
                    "definition": "0 or more",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["G.1 Grammar", ""]
                    ]
                },
                
                "+":  {
            
                    "definition": "1 or more",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["G.1 Grammar", ""]
                    ]
                },
            
                ".":  {
            
                    "definition": "The Unicode Full Stop (U+002E) is used to mark or specify a class selector in a css rule. For example: #myclass {color: red; background-color: white;}",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
            
                "<":  {
            
                    "definition": "basic data types, which appear between '<' and '>' (e.g., <length>, <percentage>, etc.). In the electronic version of the document, each instance of a basic data type links to its definition.",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                ">":  {
            
                    "definition": "basic data types, which appear between '<' and '>' (e.g., <length>, <percentage>, etc.). In the electronic version of the document, each instance of a basic data type links to its definition.",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "?":  {
            
                    "definition": "0 or 1",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["G.1 Grammar", ""]
                    ]
                },
                
                "@":  {
            
                    "definition": "The Unicode Commercial At sign (U+0040) is used to mark or specify an at-rule.",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["4.1.5 At-rules", "https://www.w3.org/TR/CSS2/syndata.html#at-rules"]
                    ]
                },
                
                "[":  {
            
                    "definition": "Brackets '[]' are for grouping.",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["1.4.2.1 Value", "https://www.w3.org/TR/2011/REC-CSS2-20110607/about.html#value-defs"]
                    ]
                },
                
                "]":  {
            
                    "definition": "Brackets '[]' are for grouping.",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["1.4.2.1 Value", "https://www.w3.org/TR/2011/REC-CSS2-20110607/about.html#value-defs"]
                    ]
                },
                
                "{":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "|":  {
            
                    "definition": "In the grammar A bar (|) separates two or more alternatives: exactly one of them must occur.",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["1.4.2.1 Value", "https://www.w3.org/TR/2011/REC-CSS2-20110607/about.html#value-defs"]
                    ]
                }, 
                
                "||":  {
            
                    "definition": "A double bar '||' separates two or more options: one or more of them must occur, in any order.",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "}":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "absolute length":  {
            
                    "definition": "<a href='https://www.w3.org/TR/CSS2/syndata.html#x39'>absolute length</a> units.",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "absolutely positioned element":  {
            
                    "definition": "<p>References in this specification to an <a href='https://www.w3.org/TR/CSS2/visuren.html#absolutely-positioned'>absolutely positioned element</a> (or its box) imply that the element's 'position' property has the value 'absolute' or 'fixed'.</p><p>In the absolute positioning model, a box is explicitly offset with respect to its containing block. It is removed from the normal flow entirely (it has no impact on later siblings). An absolutely positioned box establishes a new containing block for normal flow children and absolutely (but not fixed) positioned descendants. However, the contents of an absolutely positioned element do not flow around any other boxes. They may obscure the contents of another box (or be obscured themselves), depending on the stack levels of the overlapping boxes.</p>",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["9.6 Absolute positioning", ""]
                    ]
                }, 
                
                "active (pseudo-class)":  {
            
                    "definition": "The :<a href='https://www.w3.org/TR/CSS2/selector.html#x35'>active pseudo-class</a> applies while an element is being activated by the user. For example, between the times the user presses the mouse button and releases it.",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "actual value":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "adjoining margins":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "anonymous boxes.":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "anonymous inline boxes":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "at-rule":  {
            
                    "definition": "An at-rule is one of two kinds of statements used in CSS. At-rules start with an at-keyword, which is an identifier with an '@' at the start (for example: '@import', '@page'). An at-rule consists of everything up to and including the next semicolon (;) or the next block, whichever comes first. See statement. See-also, rule-set.",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["4.1.5 At-rules", "https://www.w3.org/TR/CSS2/syndata.html#at-rules"]
                    ]
                },
                
                "as border style":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "as display value":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "atomic inline-level box":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "auditory icon":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "authoring tool":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "automatic numbering":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "backslash escapes":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "bidirectionality (bidi)":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "block": [
                    
                    {
                        
                        "definition": "In the Visual Formatting Model, The three terms \"block-level box,\" \"block container box,\" and \"block box\" are sometimes abbreviated as \"block\" where unambiguous.",
                        
                        "context": "Visual Formatting Model",
                    
                        "reference": [
                            
                            ["section | title", "url"],
                            
                            ["9.2 Controlling box generation", "https://www.w3.org/TR/2011/REC-CSS2-20110607/visuren.html#box-gen"]
                        ]
                    },
                    
                    {
                        
                        "definition": "In a CSS rule set, a block starts with a left curly brace '{' and ends with the matching right curly brace '}'. In between there may be any tokens, except that parentheses '()', brackets '[]', and braces '{}' must always occur in matching pairs and may be nested. Single (') and double quotes (\") must also occur in matching pairs, and characters between them are parsed as a string.",
                        
                        "context": "rule set",
                    
                        "reference": [
                            
                            ["section | title", "url"],
                            
                            ["4.1.6 Blocks", "https://www.w3.org/TR/CSS2/syndata.html#block"]
                        ]
                    }
                ],
                
                "block box":  {
            
                    "definition": "Block-level boxes that are also block containers are called block boxes.",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["9.2.1 Block-level elements and block boxes", "https://www.w3.org/TR/2011/REC-CSS2-20110607/visuren.html#block-boxes"]
                    ]
                },
                
                "block container box":  {
            
                    "definition": "A block container box either contains only block-level boxes or establishes an inline formatting context and thus contains only inline-level boxes. Not all block container boxes are block-level boxes: non-replaced inline blocks and non-replaced table cells are block containers but not block-level boxes. Block-level boxes that are also block containers are called block boxes.",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["9.2.1 Block-level elements and block boxes", "https://www.w3.org/TR/2011/REC-CSS2-20110607/visuren.html#block-boxes"]
                    ]
                },
                
                "block-level box":  {
            
                    "definition": "Block-level boxes are boxes that participate in a block formatting context. Each block-level element generates a principal block-level box that contains descendant boxes and generated content and is also the box involved in any positioning scheme. Some block-level elements may generate additional boxes in addition to the principal box: 'list-item' elements. These additional boxes are placed with respect to the principal box.",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["9.2.1 Block-level elements and block boxes", "https://www.w3.org/TR/2011/REC-CSS2-20110607/visuren.html#block-boxes"]
                    ]
                },
                
                "block-level element":  {
            
                    "definition": "Block-level elements are those elements of the source document that are formatted visually as blocks (e.g., paragraphs). The following values of the 'display' property make an element block-level: 'block', 'list-item', and 'table'.",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["9.2.1 Block-level elements and block boxes", "https://www.w3.org/TR/2011/REC-CSS2-20110607/visuren.html#block-boxes"]
                    ]
                },
                
                "block formatting context":  {
            
                    "definition": "<p>Floats, absolutely positioned elements, block containers (such as inline-blocks, table-cells, and table-captions) that are not block boxes, and block boxes with 'overflow' other than 'visible' (except when that value has been propagated to the viewport) establish new block formatting contexts for their contents.</p><p>In a block formatting context, boxes are laid out one after the other, vertically, beginning at the top of a containing block. The vertical distance between two sibling boxes is determined by the 'margin' properties. Vertical margins between adjacent block-level boxes in a block formatting context collapse.</p><p>In a block formatting context, each box's left outer edge touches the left edge of the containing block (for right-to-left formatting, right edges touch). This is true even in the presence of floats (although a box's line boxes may shrink due to the floats), unless the box establishes a new block formatting context (in which case the box itself may become narrower due to the floats).</p>",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["9.4.1 Block formatting contexts", "https://www.w3.org/TR/2011/REC-CSS2-20110607/visuren.html#block-formatting"]
                    ]
                },
                
                "block box":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "border box":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "border edge":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "case sensitivity":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "character encoding":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "child selector":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "clipping region":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "collapse through":  {
            
                    "definition": "",
                    
                    "reference": [
                    
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "collapsing margin":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "combinator":  {
            
                    "definition": "Combinators are: white space, ">", and "+". White space may appear between a combinator and the simple selectors around it.",
                    
                    "note": "<p>In Selectors 3, the following terms were introduced:</p><ul><li>Child combinators (&gt;)</li><li>Descendant combinator (h1 em)</li><li>Sibling combinators<ul><li> Adjacent sibling combinator</li><li>General sibling combinator</li></ul></li></ul>",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["5.2 Selector syntax", "https://www.w3.org/TR/CSS2/selector.html#selector-syntax"]
                    ]
                },
                
                "computed value":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "conditional import":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "containing block":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "content box":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "content edge":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "content height":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "CSSOM":  {
            
                    "definition": "CSSOM defines APIs (including generic parsing and serialization rules) for Media Queries, Selectors, and of course CSS itself.",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["CSS Object Model (CSSOM)", "https://www.w3.org/TR/cssom-1/"]
                    ]
                },
                
                "content width":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "declaration block":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "default style sheet":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "definition of":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "document language":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "document tree":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "drop caps":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "em (unit)":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "ex (unit)":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "exact matching":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "fallback encoding":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "fictional tag sequence":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "float rules":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "flow of an element":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "focus (pseudo-class)":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "following element":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "formatting context":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "formatting structure":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "forward-compatible parsing":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "generated content":  {
            
                    "definition": "Content that does not exist in the source document. See :before and :after pseudo-element s.",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "grid template":  {
            
                    "definition": "<p>A grid template can be seen as a cross between table layout (align blocks of text automatically in two-dimensions) and absolute positioning (position elements in arbitrary order), but it also has unique features of its own.</p><p>Grid templates can also be associated with pages in paged media (via ‘@page’), to create page templates.</p><p>Slots can form chains, to create non-rectangular regions. A chain of slots is like a series of small pages: content is broken at possible page breaks and distributed over the slots.</p><p>Region-based styling allows content to be styled not only based on its position in the document tree, but also based on the slot it finds itself in. This is achieved by allowing slot names to appear in selectors. For further details, see <a href='https://www.w3.org/TR/css3-layout/'>CSS Template Layout Module</a></p>",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "hover (pseudo-class)":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "hyphen-separated matching":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "identifier":  {
            
                    "definition": "<p>In CSS, identifiers (including element names, classes, and IDs in selectors) can contain only the characters [a-zA-Z0-9] and ISO 10646 characters U+00A0 and higher, plus the hyphen (-) and the underscore (_); they cannot start with a digit, two hyphens, or a hyphen followed by a digit. Identifiers can also contain escaped characters and any ISO 10646 character as a numeric code (see next item). For instance, the <a href='https://www.w3.org/TR/CSS2/syndata.html#value-def-identifier'>identifier</a> \"B&W?\" may be written as \"B\&W\?\" or \"B\26 W\3F\".</p><p class='note'>Unicode is code-by-code equivalent to ISO 10646 (see [UNICODE] and [ISO10646]).</p>.",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["4.1.3 Characters and case", "https://www.w3.org/TR/CSS2/syndata.html#characters"]
                    ]
                },
                
                "initial caps":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "initial containing block":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "initial value":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "inline-level box":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "inline-level element":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "inline box":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "inline formatting context":  {
            
                    "definition": """,
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "inner edge":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "interactive media group":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "internal table box":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "internal table element":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "intrinsic dimensions":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "lang (pseudo-class)":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "language (human)":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "language code":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "line box":  {
            
                    "definition": "The rectangular area that contains the boxes that form a line is called a line box.",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["9.4.2 Inline formatting contexts", "https://www.w3.org/TR/2011/REC-CSS2-20110607/visuren.html#inline-formatting"]
                    ]
                },
                
                "link (pseudo-class)":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "list properties":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "mapping elements to table parts":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "margin box":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "margin edge":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "media-dependent import":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "media group":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "media query":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "message entity":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "multiple declarations":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "MUST NOT":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "of a box":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "outer edge":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "out of flow":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "padding box":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "padding edge":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "page area":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "page box":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "page selector":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "positioned element/box":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "positioning scheme":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "preceding element":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "principal block-level box":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "profile":  {
            
                    "definition": "Profiles are typically a subset of one or more levels of CSS built for a particular device or user interface. Currently there are profiles for mobile devices, printers, and television sets. Profiles should not be confused with media types, which were added in CSS 2.",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["Variations", "https://en.wikipedia.org/wiki/Cascading_Style_Sheets#Variations"]
                    ]
                },
                
                "proper table child":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "property":  {
            
                    "definition": "<p>A property value can have one or more components. Component value types are designated in several ways:</p><ul><li>keyword values (e.g., auto, disc, etc.)</li><li>basic data types, which appear between "<" and ">" (e.g., <length>, <percentage>, etc.). In the electronic version of the document, each instance of a basic data type links to its definition.</li></ul>",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "property name":  {
            
                    "definition": "A property name is an identifier. Any token may occur in the property value. Parentheses (\"( )\"), brackets (\"[ ]\"), braces (\"{ }\"), single quotes ('), and double quotes (\") must come in matching pairs, and semicolons not in strings must be escaped. Parentheses, brackets, and braces may be nested. Inside the quotes, characters are parsed as a string.",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["4.1.8 Declarations and properties", "https://www.w3.org/TR/CSS2/syndata.html#x21"]
                    ]
                },
                
                "proper table row parent":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "pseudo-class":  {
            
                    "definition": "<p>Pseudo-classes classify elements on characteristics other than their type, attributes or content; in principle characteristics that cannot be deduced from the document tree. Pseudo-classes may be dynamic, in the sense that an element may acquire or lose a pseudo-class while a user interacts with the document. The exception is ':first-child', which can be deduced from the document tree.</p><p>Pseudo-classes are allowed anywhere in selectors. Some pseudo-classes are mutually exclusive, while others can be applied simultaneously to the same element. In case of conflicting rules, the normal cascading order determines the outcome.</p>",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["5.10 Pseudo-elements and pseudo-classes", "https://www.w3.org/TR/REC-CSS2/selector.html#pseudo-elements"],
                        
                        ["Difference between a pseudo-class and a pseudo-element", "http://www.d.umn.edu/~lcarlson/csswork/selectors/pseudo_dif.html"]
                    ]
                },
                
                "pseudo-element": {
                    
                    definition: "<p>Pseudo-elements create abstractions about the document tree beyond those specified by the document language, e.g., HTML. They extend what is possible to style with selectors alone to include information that would otherwise be inaccessible or that does not exist in the source document. Specifically, selectors do not provide a way to style the first letter or first line of block content, nor do they allow additional content to be added to the beginning or end of block content, for example, to indicate the nature of the information or a footnote.</p><p>Certain combinations of multiple pseudo-elements per selector are allowed. A pseudo-elements must appear as the last element of a selector declaration, with no intervening combinators. While only one pseudo-element is allowed per selector declaration, they may follow a pseudo-class. The allowed order for pseudo-elements is formally described by a pseudo-BNF grammar. See section <a href='https://www.w3.org/TR/css3-content/#syntax'>4.1 Syntax</a> in the <a href='https://www.w3.org/TR/2003/WD-css3-content-20030514/'>CSS3 Generated and Replaced Content Module</a> for further details.</p>",
                    
                    "notes": "<div class='notes'><p>The Selectors Level 3 and CSS Pseudo-Elements Module Level 4 specifications introduced the following changes to pseudo-elements:</p><ul><li>The single colon notation was changed to a double colon in <a href='https://www.w3.org/TR/2015/WD-css-pseudo-4-20150115/'>CSS Pseudo-Elements Module Level 4</a> to distinguish pseudo-elements from pseudo-classes. For compatibility with existing style sheets written against CSS Level 2.1, user agents must also accept the previous one-colon notation.</li></li>Additional pseudo-elements and abstractions were added to the addressing model in <a href='https://www.w3.org/TR/css3-selectors/'>Selectors Level 3</a>. These are: text highlighted by the user (::selection), text flagged by the user agent (::grammar-error, ::spelling-error), and placeholder text for input fields (::placeholder).</li></ul></div>",
                    
                    reference: [
                        
                        ["section | title", "url"],
                        
                        ["2 Pseudo-classes and pseudo-elements", "https://www.w3.org/TR/REC-CSS1/#pseudo-classes-and-pseudo-elements"],
                        
                        ["4 Pseudo-elements", "https://www.w3.org/TR/css3-content/#pseudo-elements"],
                        
                        ["Difference between a pseudo-class and a pseudo-element", "http://www.d.umn.edu/~lcarlson/csswork/selectors/pseudo_dif.html"]
                        
                    ]
                },
                
                "quad width":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "reference pixel":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "relative positioning":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "relative units":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "rendered content":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "replaced element":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "row group box":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "row groups":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
        
                "rule":  {
            
                    "definition": "A rule consists of two main parts: selector ('H1') and declaration ('color: blue'). The declaration has two parts: property ('color') and value ('blue').",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["1    Basic concepts", "https://www.w3.org/TR/REC-CSS1/#basic-concepts"]
                    ]
                },
                
                "rule set":  {
            
                    "definition": "A rule set is one of two kinds of statement used in CSS. A ruleset consists of a selector-string followed by a declaration-block. The selector-string consists of everything up to (but not including) the first left curly brace ({). A ruleset that starts with a selector-string that is not valid CSS1 is skipped. See statement. See-also, at-rule.",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["7.1 Forward-compatible parsing", "https://www.w3.org/TR/REC-CSS1/#forward-compatible-parsing"]
                    ]
                },
                
                "screen reader":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "selector":  {
            
                    "definition": "<p>A selector is a chain of one or more simple selectors separated by combinators.</p><p>A selector is a string that identifies what elements the corresponding rule applies to. A selector can either be a simple selector (e.g. 'H1') or a contextual selector (e.g. 'H1 B') which consists of several simple selectors. The selector is the link between the HTML document and the style sheet, and all HTML element types are possible selectors.</p>",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["5.2 Selector syntax", "https://www.w3.org/TR/CSS2/selector.html#selector-syntax"],
                        
                        ["1 Basic concepts", "https://www.w3.org/TR/REC-CSS1/ ==> https://www.w3.org/TR/REC-CSS1/#basic-concepts"]
                    ]
                },
                
                "separated borders":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "SHALL NOT":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "shorthand property":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "SHOULD NOT":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "simple selector":  {
            
                    "definition": "A simple selector is either a type selector or universal selector followed immediately by zero or more attribute selectors, ID selectors, or pseudo-classes, in any order. The simple selector matches if all of its components match.",
                    
                    "note": "The terminology used here was redefined in Selectors Level 3: \"A simple selector is either a type selector, universal selector, attribute selector, class selector, ID selector, or pseudo-class.\"",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["5.2 Selector syntax", "https://www.w3.org/TR/REC-CSS2/selector.html#q2"]
                    ]
                }, ==> 
                
                "source document":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "space-separated matching":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "specified value":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "stacking context":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "stack level":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "statement":  {
            
                    "definition": "A CSS style sheet, for any level of CSS, consists of a list of statements (see the grammar above). There are two kinds of statements: at-rules and rule sets. There may be white space around the statements.",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["4.1.4 Statements", "https://www.w3.org/TR/CSS2/syndata.html#statements"]
                    ]
                },
                
                "style sheet":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "subject (of selector)":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "subject of":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "system fonts":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "table element":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "tabular container":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "type selector":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "universal selector":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "used value":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "user agent":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "User agent (UA)":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "valid style sheet":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "visited (pseudo-class)":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                },
                
                "visual formatting model":  {
            
                    "definition": "",
                    
                    "reference": [
                        
                        ["section | title", "url"],
                        
                        ["", ""]
                    ]
                }
            } // end term
        }, // end Glossary
    
        "properties": "azimuth, background, background-attachment, background-color, background-image, background-position, background-repeat, border, border-bottom, border-bottom-color, border-bottom-style, border-bottom-width, border-collapse, border-color, border-left, border-left-color, border-left-style, border-left-width, border-right, border-right-color, border-right-style, border-right-width, border-spacing, border-style, border-top, border-top-color, border-top-style, border-top-width, border-width, bottom, caption-side, clear, clip, color, content, counter-increment, counter-reset, cue, cue-after, cue-before, cursor, direction, display, elevation, empty-cells, float, font, font-family, font-size, font-style, font-variant, font-weight, height, left, letter-spacing, line-height, list-style, list-style-image, list-style-position, list-style-type, margin, margin-bottom, margin-left, margin-right, margin-top, max-height, max-width, min-height, min-width, orphans, outline, outline-color, outline-style, outline-width, overflow, padding, padding-bottom, padding-left, padding-right, padding-top, page-break-after, page-break-before, page-break-inside, pause, pause-after, pause-before, pitch, pitch-range, play-during, position, quotes, richness, right, speak, speak-header, speak-numeral, speak-punctuation, speech-rate, stress, table-layout, text-align, text-decoration, text-indent, text-transform, top, unicode-bidi, vertical-align, visibility, voice-family, volume, white-space, widows, width, word-spacing, z-index",
    
        "property": {  // Appendix F. Full property table  ==> https://www.w3.org/TR/CSS21/propidx.html
    
            "azimuth": {
            
                "values": "<angle> | [[ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards | inherit",	
            
                "initial": "center",
            
                use: "all",
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "aural"
            },
            
            "background-attachment": {
            
                "values": "scroll | fixed | inherit",	
            
                "initial": "scroll",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "background-color": {
            
                "values": "<color> | transparent | inherit",	
            
                "initial": "transparent",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": ""
            },
            
            "background-image": {
            
                "values": "<uri> | none | inherit",	
            
                "initial": "none",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "background-position": {
            
                "values": "[ [ <percentage> | <length> | left | center | right ] [ <percentage> | <length> | top | center | bottom ]? ] | [ [ left | center | right ] || [ top | center | bottom ] ] | inherit",	
            
                "initial": "0% 0%",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "refer to the size of the box itself",
            
                "media": "visual"
            },
            
            "background-repeat": {
            
                "values": "repeat | repeat-x | repeat-y | no-repeat | inherit",	
            
                "initial": "repeat",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "allowed on 'background-positon'",
            
                "media": "visual"
            },
            
            "background": {
            
                "values": "['background-color' || 'background-image' || 'background-repeat' || 'background-attachment' || 'background-position'] | inherit",	
            
                "initial": "see individual properties",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "allowed on 'background-position'",
            
                "media": "visual"
            },
            
            "border-collapse": {
            
                "values": "collapse | separate | inherit",	
            
                "initial": "separate",
            
                "application": "'table' and 'inline-table' elements", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "border-color": {
            
                "values": "[ <color> | transparent ]{1,4} | inherit",	
            
                "initial": "see individual properties",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "border-spacing": {
            
                "values": "<length> <length>? | inherit",	
            
                "initial": "0",
            
                "application": "'table' and 'inline-table' elements", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "border-style": {
            
                "values": "<border-style>{1,4} | inherit",	
            
                "initial": "see individual properties",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "border-top": {
            
                "values": "[ <border-width> || <border-style> || 'border-top-color' ] | inherit",	
            
                "initial": "see individual properties",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "border-right": {
            
                "values": "[ <border-width> || <border-style> || 'border-top-color' ] | inherit",	
            
                "initial": "see individual properties",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "border-bottom": {
            
                "values": "[ <border-width> || <border-style> || 'border-top-color' ] | inherit",	
            
                "initial": "see individual properties",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "border-left": {
            
                "values": "[ <border-width> || <border-style> || 'border-top-color' ] | inherit",	
            
                "initial": "see individual properties",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "border-top-color": {
            
                "values": "<color> | transparent | inherit",	
            
                "initial": "the value of the 'color' property",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "the value of the 'color' property"
            } ,
            
            "border-right-color": {
            
                "values": "<color> | transparent | inherit",	
            
                "initial": "the value of the 'color' property",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "the value of the 'color' property"
            },
            
            "border-bottom-color": {
            
                "values": "<color> | transparent | inherit",	
            
                "initial": "the value of the 'color' property",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "the value of the 'color' property"
            },
            
            "border-left-color": {
            
                "values": "<color> | transparent | inherit",	
            
                "initial": "the value of the 'color' property",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "the value of the 'color' property"
            },
            
            "border-top-style": {
            
                "values": "<border-style> | inherit",	
            
                "initial": "none",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
             
            "border-right-style": {
            
                "values": "<border-style> | inherit",	
            
                "initial": "none",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "border-bottom-style": {
            
                "values": "<border-style> | inherit",	
            
                "initial": "none",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "border-left-style": {
            
                "values": "<border-style> | inherit",	
            
                "initial": "none",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "border-top-width": {
            
                "values": "",	
            
                "initial": "",
            
                "application": "", 
            
                "inherited": "",	
            
                "percentages": "",
            
                "media": ""
            },
             
            "border-right-width": {
            
                "values": "<border-width> | inherit",	
            
                "initial": "	medium",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "border-bottom-width": {
            
                "values": "<border-width> | inherit",	
            
                "initial": "	medium",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "border-left-width": {
            
                "values": "<border-width> | inherit",	
            
                "initial": "	medium",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "border-width": {
            
                "values": "<border-width>{1,4} | inherit",	
            
                "initial": "see individual properties",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "border": {
            
                "values": "[ <border-width> || <border-style> || 'border-top-color' ] | inherit",	
            
                "initial": "see individual properties",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "bottom": {
            
                "values": "<length> | <percentage> | auto | inherit",	
            
                "initial": "auto",
            
                "application": "positioned elements", 
            
                "inherited": "no",	
            
                "percentages": "refer to height of containing block",
            
                "media": "visual"
            },
            
            "caption-side": {
            
                "values": "top | bottom | inherit",	
            
                "initial": "top",
            
                "application": "'table-caption' elements", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "clear": {
            
                "values": "none | left | right | both | inherit",	
            
                "initial": "none",
            
                "application": "block-level elements", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "clip": {
            
                "values": "<shape> | auto | inherit",	
            
                "initial": "auto",
            
                "application": "absolutely positioned elements", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "color": {
            
                "values": "<color> | inherit",	
            
                "initial": "depends on user agent",
            
                "application": ":before and :after pseudo-elements", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "all"
            },
            
            "content": {
            
                "values": "normal | none | [ <string> | <uri> | <counter> | attr(<identifier>) | open-quote | close-quote | no-open-quote | no-close-quote ]+ | inherit",	
            
                "initial": "normal",
            
                "application": ":before and :after pseudo-elements", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "all"
            },
            
            "content": {
            
                "values": "normal | none | [ <string> | <uri> | <counter> | attr(<identifier>) | open-quote | close-quote | no-open-quote | no-close-quote ]+ | inherit",	
            
                "initial": "normal",
            
                "application": ":before and :after pseudo-elements", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "all"
            },
            
            "counter-increment": {
            
                "values": "[ <identifier> <integer>? ]+ | none | inherit",	
            
                "initial": "none",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "all"
            },
            
            "counter-reset": {
            
                "values": "[ <identifier> <integer>? ]+ | none | inherit",	
            
                "initial": "none",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "all"
            },
            
            "cue-after": {
            
                "values": "<uri> | none | inherit",	
            
                "initial": "none",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "aural"
            },
            
            "cue-before": {
            
                "values": "<uri> | none | inherit",	
            
                "initial": "none",
            
                "application": "", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "aural"
            },
            
            "cue": {
            
                "values": "[ 'cue-before' || 'cue-after' ] | inherit",	
            
                "initial": "see individual properties",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "cursor": {
            
                "values": "[ [<uri> ,]* [ auto | crosshair | default | pointer | move | e-resize | ne-resize | nw-resize | n-resize | se-resize | sw-resize | s-resize | w-resize | text | wait | help | progress ] ] | inherit",	
            
                "initial": "auto",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "visual, interactive"
            },
            
            "direction": {
            
                "values": "ltr | rtl | inherit",	
            
                "initial": "ltr",
            
                "application": "all elements, but see prose", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "display": {
            
                "values": "inline | block | list-item | inline-block | table | inline-table | table-row-group | table-header-group | table-footer-group | table-row | table-column-group | table-column | table-cell | table-caption | none | inherit",	
            
                "initial": "inline",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "all"
            },
            
            "elevation": {
            
                "values": "<angle> | below | level | above | higher | lower | inherit",	
            
                "initial": "level",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "aural"
            },
            
            "empty-cells": {
            
                "values": "show | hide | inherit",	
            
                "initial": "show",
            
                "application": "'table-cell' elements", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "float": {
            
                "values": "left | right | none | inherit",	
            
                "initial": "none",
            
                "application": "all, but see <a href='https://www.w3.org/TR/CSS21/visuren.html#dis-pos-flo'>9.7</a>", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "font-family": {
            
                "values": "[[ <family-name> | <generic-family> ] [, <family-name>| <generic-family>]* ] | inherit",	
            
                "initial": "depends on user agent",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "font-size": {
            
                "values": "<absolute-size> | <relative-size> | <length> | <percentage> | inherit",	
            
                "initial": "medium",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "refer to inherited font size",
            
                "media": "visual"
            },
            
            "font-style": {
            
                "values": "normal | italic | oblique | inherit",	
            
                "initial": "normal",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "font-variant": {
            
                "values": "normal | italic | oblique | inherit",	
            
                "initial": "normal",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "font-weight": {
            
                "values": "normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | inherit",	
            
                "initial": "normal",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "font": {
            
                "values": "[ [ 'font-style' || 'font-variant' || 'font-weight' ]? 'font-size' [ / 'line-height' ]? 'font-family' ] | caption | icon | menu | message-box | small-caption | status-bar | inherit",	
            
                "initial": "see individual properties",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "see individual properties",
            
                "media": "visual"
            },
            
            "height": {
            
                "values": "<length> | <percentage> | auto | inherit",	
            
                "initial": "auto",
            
                "application": "all elements but non-replaced inline elements, table columns, and column groups", 
            
                "inherited": "no",	
            
                "percentages": "see prose",
            
                "media": "visual"
            },
            
            "left": {
            
                "values": "<length> | <percentage> | auto | inherit",	
            
                "initial": "auto",
            
                "application": "positioned elements", 
            
                "inherited": "no",	
            
                "percentages": "refer to width of containing block",
            
                "media": "visual"
            },
            
            "letter-spacing": {
            
                "values": "normal | <length> | inherit",	
            
                "initial": "normal",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "line-height": {
            
                "values": "normal | <number> | <length> | <percentage> | inherit",	
            
                "initial": "normal",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "refer to width of containing block",
            
                "media": "visual"
            },
            
            "list-style": {
            
                "values": "['list-style-type' || 'list-style-position' || 'list-style-image' ] | inherit",	
            
                "initial": "see individual properties",
            
                "application": "elements with 'display: list-item'", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "list-style-image": {
            
                "values": "<uri> | none | inherit",	
            
                "initial": "none",
            
                "application": "elements with 'display: list-item'", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "list-style-position": {
            
                "values": "inside | outside | inherit",	
            
                "initial": "outside",
            
                "application": "elements with 'display: list-item'", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "list-style-type": {
            
                "values": "disc | circle | square | decimal | decimal-leading-zero | lower-roman | upper-roman | lower-greek | lower-latin | upper-latin | armenian | georgian | lower-alpha | upper-alpha | none | inherit",	
            
                "initial": "disc",
            
                "application": "elements with 'display: list-item'", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            
            "margin": {
            
                "values": "<margin-width>{1,4} | inherit",	
            
                "initial": "see individual properties",
            
                "application": "all elements except elements with table display types other than table-caption, table and inline-table", 
            
                "inherited": "no",	
            
                "percentages": "refer to width of containing block",
            
                "media": "visual"
            },
            
            "margin-bottom": {
            
                "values": "<margin-width> | inherit",	
            
                "initial": "0",
            
                "application": "all elements except elements with table display types other than table-caption, table and inline-table", 
            
                "inherited": "no",	
            
                "percentages": "refer to width of containing block",
            
                "media": "visual"
            },
            
            "margin-left": {
            
                "values": "<margin-width> | inherit",	
            
                "initial": "zero",
            
                "application": "all elements except elements with table display types other than table-caption, table and inline-table", 
            
                "inherited": "no",	
            
                "percentages": "refer to width of containing block",
            
                "media": "visual"
            },
            
            "margin-right": {
            
                "values": "<margin-width> | inherit",	
            
                "initial": "zero",
            
                "application": "all elements except elements with table display types other than table-caption, table and inline-table", 
            
                "inherited": "no",	
            
                "percentages": "refer to width of containing block",
            
                "media": "visual"
            },
            
            "margin-top": {
            
                "values": "<margin-width> | inherit",	
            
                "initial": "0",
            
                "application": "all elements except elements with table display types other than table-caption, table and inline-table", 
            
                "inherited": "no",	
            
                "percentages": "refer to width of containing block",
            
                "media": "visual"
            },
            
            "max-height": {
            
                "values": "<length> | <percentage> | none | inherit",	
            
                "initial": "none",
            
                "application": "all elements but non-replaced inline elements, table columns, and column groups", 
            
                "inherited": "no",	
            
                "percentages": "see prose",
            
                "media": "visual"
            },
            
            "max-width": {
            
                "values": "<length> | <percentage> | none | inherit",	
            
                "initial": "none",
            
                "application": "all elements but non-replaced inline elements, table rows, and row groups", 
            
                "inherited": "no",	
            
                "percentages": "refer to width of containing block",
            
                "media": "visual"
            },
            
            "min-height": {
            
                "values": "<length> | <percentage> | inherit",	
            
                "initial": "0",
            
                "application": "all elements but non-replaced inline elements, table columns, and column groups", 
            
                "inherited": "no",	
            
                "percentages": "see prose",
            
                "media": "visual"
            },
            
            "min-width": {
            
                "values": "<length> | <percentage> | inherit",	
            
                "initial": "0",
            
                "application": "all elements but non-replaced inline elements, table rows, and row groups", 
            
                "inherited": "no",	
            
                "percentages": "refer to width of containing block",
            
                "media": "visual"
            },
            
            "orphans": {
            
                "values": "<integer> | inherit",	
            
                "initial": "2",
            
                "application": "block container elements", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "visual, paged"
            },
            
            "outline": {
            
                "values": "[ 'outline-color' || 'outline-style' || 'outline-width' ] | inherit",	
            
                "initial": "see individual properties",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual, interactive"
            },
            
            "outline-color": {
            
                "values": "<color> | invert | inherit",	
            
                "initial": "invert",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual, interactive"
            },
            
            "outline-style": {
            
                "values": "<border-style> | inherit",	
            
                "initial": "none",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual, interactive"
            },
            
            "outline-width": {
            
                "values": "<border-width> | inherit",	
            
                "initial": "medium",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual, interactive"
            },
            
            "overflow": {
            
                "values": "visible | hidden | scroll | auto | inherit",	
            
                "initial": "visible",
            
                "application": "block container elements", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual, interactive"
            },
            
            "padding": {
            
                "values": "<padding-width>{1,4} | inherit",	
            
                "initial": "see individual properties",
            
                "application": "all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column", 
            
                "inherited": "no",	
            
                "percentages": "refer to width of containing block",
            
                "media": "visual"
            },
            
            "padding-bottom": {
            
                "values": "<padding-width> | inherit",	
            
                "initial": "0",
            
                "application": "all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column", 
            
                "inherited": "no",	
            
                "percentages": "refer to width of containing block",
            
                "media": "visual"
            },
            
            "padding-left": {
            
                "values": "<padding-width> | inherit",	
            
                "initial": "0",
            
                "application": "all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column", 
            
                "inherited": "no",	
            
                "percentages": "refer to width of containing block",
            
                "media": "visual"
            },
            
            "padding-right": {
            
                "values": "<padding-width> | inherit",	
            
                "initial": "0",
            
                "application": "all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column", 
            
                "inherited": "no",	
            
                "percentages": "refer to width of containing block",
            
                "media": "visual"
            },
            
            "padding-top": {
            
                "values": "<padding-width> | inherit",	
            
                "initial": "0",
            
                "application": "all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column", 
            
                "inherited": "no",	
            
                "percentages": "refer to width of containing block",
            
                "media": "visual"
            },
            
            "page-break-after": {
            
                "values": "auto | always | avoid | left | right | inherit",	
            
                "initial": "auto",
            
                "application": "block-level elements (but see text)", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual, paged"
            },
            
            "page-break-before": {
            
                "values": "auto | always | avoid | left | right | inherit",	
            
                "initial": "auto",
            
                "application": "block-level elements (but see text)", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual, paged"
            },
            
            "page-break-inside": {
            
                "values": "avoid | auto | inherit",	
            
                "initial": "auto",
            
                "application": "block-level elements (but see text)", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual, paged"
            },
            
            "pause-after": {
            
                "values": "<time> | <percentage> | inherit",	
            
                "initial": "0",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "see prose",
            
                "media": "aural"
            },
            
            "pause-before": {
            
                "values": "<time> | <percentage> | inherit",	
            
                "initial": "0",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "see prose",
            
                "media": "aural"
            },
            
            "pause": {
            
                "values": "[ [<time> | <percentage>]{1,2} ] | inherit",	
            
                "initial": "see individual properties",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "see descriptions of 'pause-before' and 'pause-after'",
            
                "media": "aural"
            },
            
            "pitch-range": {
            
                "values": "<number> | inherit",	
            
                "initial": "50",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "aural"
            },
            
            "pitch": {
            
                "values": "<frequency> | x-low | low | medium | high | x-high | inherit",	
            
                "initial": "medium",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "aural"
            },
            
            "play-during": {
            
                "values": "<uri> [ mix || repeat ]? | auto | none | inherit",	
            
                "initial": "auto",
            
                "application": "all", 
            
                "inherited": "no",
            
                "percentages": "N/A",
            
                "media": "aural"
            },
            
            "position": {
            
                "values": "static | relative | absolute | fixed | inherit",	
            
                "initial": "static",
            
                "application": "all", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "aural"
            },
            
            "quotes": {
            
                "values": "[<string> <string>]+ | none | inherit",	
            
                "initial": "depends on user agent",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "aural"
            },
            
            "richness": {
            
                "values": "<number> | inherit",	
            
                "initial": "50",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "aural"
            },
            
            "right": {
            
                "values": "<length> | <percentage> | auto | inherit",	
            
                "initial": "auto",
            
                "application": "positioned elements", 
            
                "inherited": "no",	
            
                "percentages": "refer to width of containing block",
            
                "media": "visual"
            },
            
            "speak-header": {
            
                "values": "once | always | inherit",	
            
                "initial": "once",
            
                "application": "elements that have table header information", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "aural"
            },
            
            "speak-numeral": {
            
                "values": "digits | continuous | inherit",	
            
                "initial": "continuous",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "aural"
            },
            
            "speak-punctuation": {
            
                "values": "code | none | inherit",	
            
                "initial": "none",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "aural"
            },
            
            "speak": {
            
                "values": "normal | none | spell-out | inherit",	
            
                "initial": "normal",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "aural"
            },
            
            "speech-rate": {
            
                "values": "<number> | x-slow | slow | medium | fast | x-fast | faster | slower | inherit",	
            
                "initial": "medium",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "aural"
            },
            
            "stress": {
            
                "values": "<number> | inherit",	
            
                "initial": "50",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "aural"
            },
            
            "table-layout": {
            
                "values": "auto | fixed | inherit",	
            
                "initial": "auto",
            
                "application": "'table' and 'inline-table' elements", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "text-align": {
            
                "values": "left | right | center | justify | inherit",	
            
                "initial": "a nameless value that acts as 'left' if 'direction' is 'ltr', 'right' if 'direction' is 'rtl'",
            
                "application": "block container elements", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "text-decoration": {
            
                "values": "none | [ underline || overline || line-through || blink ] | inherit",	
            
                "initial": "none",
            
                "application": "all", 
            
                "inherited": "no (see prose)",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "text-indent": {
            
                "values": "<length> | <percentage> | inherit",	
            
                "initial": "0",
            
                "application": "block container elements", 
            
                "inherited": "yes",	
            
                "percentages": "refer to width of containing block",
            
                "media": "visual"
            },
            
            "text-transform": {
            
                "values": "capitalize | uppercase | lowercase | none | inherit",	
            
                "initial": "none",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "top": {
            
                "values": "<length> | <percentage> | auto | inherit",	
            
                "initial": "auto",
            
                "application": "positioned elements", 
            
                "inherited": "no",	
            
                "percentages": "refer to height of containing block",
            
                "media": "visual"
            },
            
            "unicode-bidi": {
            
                "values": "normal | embed | bidi-override | inherit",	
            
                "initial": "normal",
            
                "application": "all elements, but see prose", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "vertical-align": {
            
                "values": "baseline | sub | super | top | text-top | middle | bottom | text-bottom | <percentage> | <length> | inherit",	
            
                "initial": "baseline",
            
                "application": "inline-level and 'table-cell' elements", 
            
                "inherited": "no",	
            
                "percentages": "refer to the 'line-height' of the element itself",
            
                "media": "visual"
            },
            
            "visibility": {
            
                "values": "visible | hidden | collapse | inherit",	
            
                "initial": "visible",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "voice-family": {
            
                "values": "[[<specific-voice> | <generic-voice> ],]* [<specific-voice> | <generic-voice> ] | inherit",	
            
                "initial": "depends on user agent",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "aural"
            },
            
            "volume": {
            
                "values": "<number> | <percentage> | silent | x-soft | soft | medium | loud | x-loud | inherit",	
            
                "initial": "medium",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "refer to inherited value",
            
                "media": ""
            },
            
            "white-space": {
            
                "values": "normal | pre | nowrap | pre-wrap | pre-line | inherit",	
            
                "initial": "normal",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "windows": {
            
                "values": "<integer> | inherit",	
            
                "initial": "2",
            
                "application": "block container elements", 
            
                "inherited": "yes",	
            
                "percentages": "visual, paged",
            
                "media": ""
            },
            
            "width": {
            
                "values": "<length> | <percentage> | auto | inherit",	
            
                "initial": "auto",
            
                "application": "all elements but non-replaced inline elements, table rows, and row groups", 
            
                "inherited": "no",	
            
                "percentages": "refer to width of containing block",
            
                "media": "visual"
            },
            
            "word-spacing": {
            
                "values": "normal | <length> | inherit",	
            
                "initial": "normal",
            
                "application": "all", 
            
                "inherited": "yes",	
            
                "percentages": "N/A",
            
                "media": "visual"
            },
            
            "z-index": {
            
                "values": "auto | <integer> | inherit",	
            
                "initial": "auto",
            
                "application": "positioned elements", 
            
                "inherited": "no",	
            
                "percentages": "N/A",
            
                "media": "visual"
            }
            
        }, // end property object
        
        "property-types": "<'background-attachment'>, <'background-color'>, <'background-image'>, <'background-position'>, <'background-repeat'>, <'border-topcolor'>, <'cue-after'>, <'cue-before'>, <'font-family'>, <'font-size'>, <'font-style'>, <'font-variant'>, <'font-weight'>, <'line-height'>, <'list-style-position'>, <'list-style-type'>, <'list-styleimage'>, <'outline-color'>, <'outline-style'>, <'outline-width'>", // https://www.w3.org/TR/2011/REC-CSS2-20110607/about.html#value-defs
        
        "pseudo-classes": ":active, :after, :before, :first, :first-child, :focus, :hover, :lang, :left, :link, :right, :visited",  // https://www.w3.org/TR/CSS2/selector.html#x35
        
        "pseudo-class": { // https://www.w3.org/TR/CSS2/selector.html#x23
            
            "dynamic": ":active, :focus, :hover", // https://www.w3.org/TR/CSS2/selector.html#x35
            
            "first": ":first", // https://www.w3.org/TR/CSS2/page.html#x10
            
            "first-child": ":first-child", // https://www.w3.org/TR/CSS2/page.html#x10
            
            "language": ":lang", // https://www.w3.org/TR/CSS2/selector.html#x41
            
            "left": ":left", // https://www.w3.org/TR/CSS2/page.html#x6
            
            "link": ":link, :visited", // https://www.w3.org/TR/CSS2/selector.html#x26
            
            "right": "" // https://www.w3.org/TR/CSS2/page.html#x8
        
        }, // end "pseudo-class"
        
        "pseudo-elements": ":after, :before, :first-letter, :first-line",
        
        "pseudo-element": { // https://www.w3.org/TR/CSS2/selector.html#x22
            
            ":before and :after pseudo-elements": ":after, :before", // https://www.w3.org/TR/CSS2/generate.html#x2
            
            ":first-letter": ":first-letter", // https://www.w3.org/TR/CSS2/selector.html#x50
            
            ":first-line": ":first-line" // https://www.w3.org/TR/CSS2/selector.html#first-line-pseudo
        },
        
        "selector": {
            
            "index": [
                
                ["Selector Type", "Symantics", "Describe in section", "First Defined in Level"],
                
                ["Adjacent Sibling", "", "", ""],
                
                ["Attribute", "", "", ""],
                
                ["Child", "", "", ""],
                
                ["Class", "", "", "1"],
                
                ["Contexual", "a selector that matches elements based on their position in the document structure", "", "1"],
                
                ["Descendant", "", "", "1"],
                
                ["General Sibling", "", "", ""],
                
                ["Grouping", "", "", ""],
                
                ["Id", "", "", "1"],
                
                ["Simple", "<p>A selector that matches elements based on the element type and/or attributes, and not he element's position in the document structure. E.g., 'H1.initial' is a simple selector. <i>Source</i>: <a href='https://www.w3.org/TR/REC-CSS1/#terminology'>CSS Level 1</a></p><p>A simple selector is either a type selector or universal selector followed immediately by zero or more attribute selectors, ID selectors, or pseudo-classes, in any order. <i>Source</i>: <a href='https://www.w3.org/TR/REC-CSS2/selector.html#q2'>CSS Level 2</a>. See Type selector, and Universal selector</p>", "", "1"]
                
                ["Type", "", "", ""],
                
                ["Universal", "", "", ""]
            ],
            
            "patterns": [
                
                ["Pattern", "Meaning", "Described in", "Section", "First defined in level"]
                
                ["*", "any element", "<a href='http://www.w3.org/TR/css3-selectors/#universal-selector'>Universal selector</a>", "2"],
                 
                ["E", "an element of type E", "<a href='http://www.w3.org/TR/css3-selectors/#type-selectors'>Type selector</a>", "1"],
                 
                ["E[foo]", "an E element with a \"foo\" attribute", "<a href='http://www.w3.org/TR/css3-selectors/#attribute-selectors'>Attribute selectors</a>", "2"],
                 
                ["E[foo=\"bar\"]", "an E element whose \"foo\" attribute value is exactly equal to \"bar\"", "<a href='http://www.w3.org/TR/css3-selectors/#attribute-selectors'>Attribute selectors</a>", "2"],
                 
                ["E[foo~=\"bar\"]", "an E element whose \"foo\" attribute value is a list of whitespace-separated values, one of which is exactly equal to \"bar\"", "<a href='http://www.w3.org/TR/css3-selectors/#attribute-selectors'>Attribute selectors</a>", "2"],
                 
                ["E[foo^=\"bar\"]", "an E element whose \"foo\" attribute value begins exactly with the string \"bar\"", "<a href='http://www.w3.org/TR/css3-selectors/#attribute-selectors'>Attribute selectors</a>", "3"],
                 
                ["E[foo$=\"bar\"]", "an E element whose \"foo\" attribute value ends exactly with the string \"bar\"", "<a href='http://www.w3.org/TR/css3-selectors/#attribute-selectors'>Attribute selectors</a>", "3"],
                 
                ["E[foo*=\"bar\"]", "an E element whose \"foo\" attribute value contains the substring \"bar\"", "<a href='http://www.w3.org/TR/css3-selectors/#attribute-selectors'>Attribute selectors</a>", "3"],
                 
                ["E[foo|=\"en\"]", "an E element whose \"foo\" attribute has a hyphen-separated list of values beginning (from the left) with "en"", "<a href='http://www.w3.org/TR/css3-selectors/#attribute-selectors'>Attribute selectors</a>", "2"],
                 
                ["E:root", "an E element, root of the document", "<a href='https://www.w3.org/TR/css3-selectors/#structural-pseudos'>Structural pseudo-classes</a>", "3"],
                 
                ["E:nth-child(n)", "an E element, the n-th child of its parent", "<a href='https://www.w3.org/TR/css3-selectors/#structural-pseudos'>Structural pseudo-classes</a>", "3"],
                 
                ["E:nth-last-child(n)", "an E element, the n-th child of its parent, counting from the last one", "<a href='https://www.w3.org/TR/css3-selectors/#structural-pseudos'>Structural pseudo-classes</a>", "3"],
                 
                ["E:nth-of-type(n)", "an E element, the n-th sibling of its type", "<a href='https://www.w3.org/TR/css3-selectors/#structural-pseudos'>Structural pseudo-classes</a>", "3"],
                 
                ["E:nth-last-of-type(n)", "an E element, the n-th sibling of its type, counting from the last one", "<a href='https://www.w3.org/TR/css3-selectors/#structural-pseudos'>Structural pseudo-classes</a>", "3"],
                 
                ["E:first-child", "an E element, first child of its parent", "<a href='https://www.w3.org/TR/css3-selectors/#structural-pseudos'>Structural pseudo-classes</a>", "2"],
                 
                ["E:last-child", "an E element, last child of its parent", "<a href='https://www.w3.org/TR/css3-selectors/#structural-pseudos'>Structural pseudo-classes</a>", "3"],
                 
                ["E:first-of-type", "an E element, first sibling of its type", "<a href='https://www.w3.org/TR/css3-selectors/#structural-pseudos'>Structural pseudo-classes</a>", "3"],
                 
                ["E:last-of-type", "an E element, last sibling of its type", "<a href='https://www.w3.org/TR/css3-selectors/#structural-pseudos'>Structural pseudo-classes</a>", "3"],
                 
                ["E:only-child", "an E element, only child of its parent", "<a href='https://www.w3.org/TR/css3-selectors/#structural-pseudos'>Structural pseudo-classes</a>", "3"],
                 
                ["E:only-of-type", "an E element, only sibling of its type", "<a href='https://www.w3.org/TR/css3-selectors/#structural-pseudos'>Structural pseudo-classes</a>", "3"],
                 
                ["E:empty", "an E element that has no children (including text nodes)", "<a href='https://www.w3.org/TR/css3-selectors/#structural-pseudos'>Structural pseudo-classes</a>", "3"],
                 
                ["E:link<br/>E:visited", "an E element being the source anchor of a hyperlink of which the target is not yet visited (:link) or already visited (:visited)", "The link pseudo-classes", "1"],
                 
                ["E:active<br/>E:hover<br/>E:focus", "an E element during certain user actions", "The user action pseudo-classes", "1 and 2"],
                 
                ["E:target", "an E element being the target of the referring URI", "The target pseudo-class", "3"],
                 
                ["E:lang(fr)", "an element of type E in language "fr" (the document language specifies how language is determined)", "The :lang() pseudo-class", "2"],
                 
                
                ["E:enabled<br/>E:disabled", "a user interface element E which is enabled or disabled", "The UI element states pseudo-classes", "3"],
                 
                ["E:checked", "a user interface element E which is checked (for instance a radio-button or checkbox)", "The UI element states pseudo-classes", "3"],
                 
                ["E::first-line", "the first formatted line of an E element", "The ::first-line pseudo-element", "1"],
                 
                ["E::first-letter", "the first formatted letter of an E element", "The ::first-letter pseudo-element", "1"],
                 
                ["E::before", "generated content before an E element", "The ::before pseudo-element", "2"],
                 
                ["E::after", "generated content after an E element", "The ::after pseudo-element", "2"],
                 
                ["E.warning", "an E element whose class is \"warning\" (the document language specifies how class is determined).", "Class selectors", "1"],
                 
                ["E#myid", "an E element with ID equal to \"myid\".", "ID selectors", "1"],
                 
                ["E:not(s)", "an E element that does not match simple selector s", "Negation pseudo-class", "3"],
                 
                ["E F", "an F element descendant of an E element", "Descendant combinator", "1"],
                 
                ["E > F", "an F element child of an E element", "Child combinator", "2"],
                 
                ["E + F", "an F element immediately preceded by an E element", "Adjacent sibling combinator", "2"],
                 
                ["E ~ F", "an F element preceded by an E element", "General sibling combinator", "3"]
            ]
            
        },
        
        "keyword values": "100, 200, 300, 400, 500, 600, 700, 800, 900, above, absolute, always, armenian, attr, auto, avoid, baseline, behind, below, bidi-override, blink, block, bold, bolder, border, both, bottom, capitalize, caption, center, center-left, center-right, circle, close-quote, code, collapse, continuous, crosshair, cue-after, cue-before, decimal, decimal-leading-zero, default, digits, disc, e-resize, embed, far-left, far-right, far-side, fast, faster, fixed, georgian, help, hidden, hide, high, higher, icon, inherit, inline, inline-block, inline-table, inside, invert, italic, justify, left, left-side, leftwards, level, lighter, line-through, list-item, loud, low, lower, lower-alpha, lower-greek, lower-latin, lower-roman, lowercase, ltr, medium, menu, message-box, middle, mix, move, n-resize, ne-resize, no-close-quote, no-open-quote, no-repeat, none, normal, nowrap, nw-resize, oblique, once, open-quote, outside, overline, pointer, pre, pre-line, pre-wrap, progress, relative, repeat, repeat-x, repeat-y, right, right-side, rightwards, rtl, s-resize, scroll, se-resize, seperate, show, silent, slow, slower, small-caption, soft, spell-out, square, static, status-bar, sub, super, sw-resize, table, table-caption, table-cell, table-column, table-column-group, table-footer-group, table-header-group, table-row, table-row-group, text, text-bottom, text-top, top, transparent, underline, upper-alpha, upper-latin, upper-roman, uppercase, visible, w-resize, wait, x-fast, x-high, x-loud, x-low, x-slow, x-soft",
    
        "value": {
    
            "above": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "absolute": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "always": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "armenian": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "attr": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "auto": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "avoid": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "background-attachment": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "background-color": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "background-image": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "background-position": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "background-repeat": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "baseline": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "behind": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "below": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "bidi-override": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "blink": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "block": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "bold": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "bolder": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "border": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "border-bottom": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "border-left-style": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "border-style": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "border-top-color": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "border-top-width": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "border-width": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "both": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "bottom": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "capitalize": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "caption": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "center": {
            
                "symantics": "Same as '0deg'. With 'behind', '180deg'.",
                "application": "azimuth",
                "see also": "<angle>, center-left, center-right, far-left, far-right, left, left, left-side, leftwards, right, right-side, rightwards"
            },
            
            "center-left": {
            
                "symantics": "Same as '340deg'. With 'behind', '200deg'.",
                "application": "azimuth",
                "see also": "<angle>,  center, center-right, far-left, far-right, left, left, left-side, leftwards, right, right-side, rightwards"
            },
            
            "center-right": {
            
                "symantics": "Same as '20deg'. With 'behind', '160deg'.",
                "application": "azimuth",
                "see also": "<angle>,  center, center-left, far-left, far-right, left, left, left-side, leftwards, right, right-side, rightwards"
            },
            
            "circle": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "close-quote": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "code": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "collapse": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "continuous": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "crosshair": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "cue-after": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "cue-before": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "decimal": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "decimal-leading-zero": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "default": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "digits": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "disk": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "e-resize": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "embed": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "far-left": {
            
                "symantics": "Same as '300deg'. With 'behind', '240deg'.",
                "application": "azimuth",
                "see also": "<angle>,  center, center-left, center-right, far-right, left, left, left-side, leftwards, right, right-side, rightwards"
            },
            
            "far-right": {
            
                "symantics": "Same as '60deg'. With 'behind', '120deg'.",
                "application": "azimuth",
                "see also": "<angle>,  center, center-left, center-right, far-left, left, left, left-side, leftwards, right, right-side, rightwards"
            },
            
            "far-side": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "fast": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "faster": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "fixed": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "font-family": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "font-size": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "font-style": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "font-variant": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "font-weight": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "frequency": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "georgian": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "help": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "hidden": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "hide": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "high": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "higher": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "icon": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "inherit": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "inline": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "inline-block": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "inline-table": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "inside": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "invert": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "italic": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "justify": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "left": {
            
                "symantics": "",
                "application": "azimuth",
                "see also": "<angle>,  center, center-left, center-right, far-left, far-right, left, left-side, leftwards, right, right-side, rightwards"
            },
            
            "left-side": {
            
                "symantics": "Same as '270deg'. With 'behind', '270deg'.",
                "application": "azimuth",
                "see also": "<angle>,  center, center-left, center-right, far-left, far-right, left, left, left-side, leftwards, right, right-side, rightwards"
            },
            
            "leftwards": {
            
                "symantics": "Moves the sound to the left, relative to the current angle. More precisely, subtracts 20 degrees. Arithmetic is carried out modulo 360 degrees. Note that 'leftwards' is more accurately described as \"turned counter-clockwise,\" since it always subtracts 20 degrees, even if the inherited azimuth is already behind the listener (in which case the sound actually appears to move to the right).",
                "application": "azimuth",
                "see also": "<angle>,  center, center-left, center-right, far-left, far-right, left, left, left-side, right, right-side, rightwards"
            },
            
            "level": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "lighter": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "line-height": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "line-through": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "list-item": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "list-style-image": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "list-style-position": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "list-style-type": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "loud": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "low": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "lower": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "lower-alpha": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "lower-greek": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "lower-latin": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "lower-roman": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "lowercase": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "ltr": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "medium": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "menu": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "message-box": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "middle": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "move": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "n-resize": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "ne-resize": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "no-close-quote": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "no-open-quote": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "no-repeat": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "none": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "normal": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "nowrap": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "nw-resize": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "oblique": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "once": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "open-quote": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "outline-color": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "outline-style": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "outline-width": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "outside": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "overline": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "pointer": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "pre": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "pre-line": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "pre-wrap": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "progress": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "relative": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "repeat": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "repeat-x": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "repeat-y": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "right": {
            
                "symantics": "Same as '40deg'. With 'behind', '140deg'.",
                "application": "azimuth",
                "see also": "<angle>,  center, center-left, center-right, far-left, far-right, left, left, left-side, leftwards, right-side, rightwards"
            },
            
            "right-side": {
            
                "symantics": "Same as '90deg'. With 'behind', '90deg'.",
                "application": "azimuth",
                "see also": "<angle>,  center, center-left, center-right, far-left, far-right, left, left, left-side, leftwards, right, rightwards"
            },
            
            "rightwards": {
            
                "symantics": "Moves the sound to the right, relative to the current angle. More precisely, adds 20 degrees. See 'leftwards' for arithmetic.",
                "application": "azimuth",
                "see also": "<angle>,  center, center-left, center-right, far-left, far-right, left, left, left-side, leftwards, right, right-side"
            },
            
            "rtl": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "s-resize": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "scroll": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "se-resize": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "seperate": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "show": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "silent": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "slow": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "slower": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "small-caption": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "soft": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "spell-out": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "square": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "static": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "status-bar": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "sub": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "super": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "sw-resize": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "table": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "table-caption": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "table-cell": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "table-column": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "table-column-group": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "table-footer-group": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "table-header-group": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "table-row": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "table-row-group": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "text": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "text-bottom": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "text-top": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "top": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "transparent": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "underline": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "upper-alpha": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "upper-latin": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "upper-roman": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "uppercase": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "visible": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "w-resize": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "wait": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "x-fast": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "x-high": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "x-loud": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "x-low": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "x-slow": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            },
            
            "x-soft": {
            
                "symantics": "",
                "application": "",
                "see also": ""
            }
        } // end value object
    
    };  // end css21 object definition
    
// CSS 2.1 Addendum:s
    
    /*  Document Codes
    
        [CSS21], Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification, REC, 2011-06-07, http://www.w3.org/TR/2011/REC-CSS2-20110607
        [HTML401], HTML 4.01 Specification, REC, 1999-12-24, http://www.w3.org/TR/1999/REC-html401-19991224
        [HTML5], HTML5, WD, 2012-03-29, http://www.w3.org/TR/2012/WD-html5-20120329/
        [RFC2531], Content Feature Schema for Internet Fax, RFC, 1999-03-01, http://www.ietf.org/rfc/rfc2531.txt
        [XMLSTYLE], Associating Style Sheets with XML documents 1.0 (Second Edition), REC, 2010-10-28, http://www.w3.org/TR/2010/REC-xml-stylesheet-20101028/    
    */

    "CSS Topics": "Animations, Backgrounds and Borders, Box Model, Box Alignment, Cascading and Inheritance, Color, Compositing and Blending, Conditional Rules, Counters, Device Adaptation, Display property, Encodings, Exclusions, Filter Effects, Flexbox, Font Loading, Font properties, Fragmentation, Generated and Replaced Content, Geometric Interfaces, Grid layout, Inline layout, Line Grid, Masking, Media Queries, Motion Path, Namespaces, Overflow, Paged Media, Page Floats, Pseudo-Elements, Round Display, Ruby, Scoping, Selectors, Shapes, Sizing, Speech, SVG Integrations, Syntax, Tables, Template layout, Text, Text decorations, Text Effects, Transform, Transitions, User Interface, Values and Units, Variables, Will Change, Writing Modes",

    Animations: {
        
        properties: "animation, animation-delay, animation-direction, animation-duration, animation-fill-mode, animation-iteration-count, animation-name, animation-play-state, animation-timing-function",
        
        terms: "alternate, alternate-reverse, animation, animation-delay, animation-direction, animation-duration, animationend, AnimationEvent, AnimationEventInit, animation-fill-mode, animationiteration, animation-iteration-count, animationName, animation-name, animation-play-state, animationstart, animation-timing-function, appendRule, CSSKeyframeRule, CSSKeyframesRule, CSSRule, cssRules, defined animations, deleteRule, elapsedTime, keyframe declaration block, keyframe selector, keyText, name, normal, pseudoElement, reverse, <single-animation>, <single-animation-direction>, <single-animation-fill-mode>, <single-animation-iteration-count>, <single-animation-name>, <single-animation-play-state>, style, "
    },  // https://www.w3.org/TR/css3-animations/  ==>  CSS Animations
    
// Backgrounds and Borders

    "Backgrounds and Borders": {
        
        properties: "background, background-attachment, background-clip, background-color, background-image, background-origin, background-position, background-repeat, background-size, border, border-bottom, border-bottom-color, border-bottom-left-radius, border-bottom-right-radius, border-bottom-style, border-bottom-width, border-color, border-image, border-image-outset, border-image-repeat, border-image-slice, border-image-source, border-image-width, border-left, border-left-color, border-left-style, border-left-width, border-radius, border-right, border-right-color, border-right-style, border-right-width, border-style, border-top, border-top-color, border-top-left-radius, border-top-right-radius, border-top-style, border-top-width, border-width, box-shadow",
        
        terms: "<attachment>, authoring tool, auto, background, background-attachment, background-clip, background-color, background-image, background-origin, background painting area, background-position, background positioning area, background-repeat, background-size, <bg-image>, <bg-layer>, <bg-size>, blur radius, border, border-bottom, border-bottom-color, border-bottom-left-radius, border-bottom-right-radius, border-bottom-style, border-bottom-width, border-box, border-color, border-image, border image area, border-image-outset, border-image-repeat, border-image-slice, border-image-source, border-image-width, border-left, border-left-color, border-left-style, border-left-width, border-radius, border-right, border-right-color, border-right-style, border-right-width, border-style, border-top, border-top-color, border-top-left-radius, border-top-right-radius, border-top-style, border-top-width, border-width, bottom, <box>, box-shadow, center, color, background, contain, content-box, cover, dashed, document, documents, dotted, double, fill, <final-bg-layer>, fixed, fixed, groove, hidden, horizontal offset, <image>, inner box-shadow, inset, layers, left, <line-style>, <line-width>, local, none, no-repeat, outer box-shadow, outset, padding-box, <position>, renderer, repeat, <repeat-style>, repeat-x, repeat-y, ridge, right, scroll, <shadow>, solid, space, spread distance, stretch, style sheet, top, UA, User Agent, vertical offset, viewport"
    },  // https://www.w3.org/TR/css3-background/  ==>  CSS Backgrounds and Borders Module Level 3
    
// Box Model

    "Box Model": {
        
        properties: "clear, display, float, height, margin, margin-top , margin-right, margin-bottom, margin-left, marquee-direction, marquee-loop, marquee-speed, marquee-style, max-width, max-height, min-width, min-height, overflow, overflow-style, overflow-x, overflow-y,, padding, padding-top , padding-right, padding-bottom, padding-left, rotation, rotation-point, visibility, width",
        
        terms: "alternate, anonymous box, auto, value of 'overflow', background-position, block, block-level, block-progression, border, border area, border-bottom-width, border edge, border-left-width, border-right-width, border-top-width, bottom, canvas, clear, collapse, collapsed through, compact, computed value, containing block, content area, content edge, direction, display, element, float, flow, flow root, height, hidden, horizontal, image-scaling, initial containing block, inline, inline-block, inline-level, inline-table, intrinsic, left, line box, list-item, margin, margin area, margin-bottom, margin edge, margin-left, margin-right, margin-top, marquee-direction, marquee-loop, marquee-speed, marquee-style, max-height, max-width, min-height, min-width, no-content, no-display, none, normal flow, overflow, overflow-style, overflow-x, overflow-y, padding, padding area, padding-bottom, padding edge, padding-left, padding-right, padding-top, position, replaced, right, root element, rotation, rotation-point, ruby, ruby-base, ruby-base-group, ruby-text, ruby-text-group, run-in, scroll, scrolling mechanism, scroll (marquee-style), shrink-to-fit, slide, static position, table, table-caption, table-cell, table-column, table-column-group, table-footer-group, table-header-group, table-row, table-row-group, top, used value, <angle>, <bg-position>, <length>, <number>, <page-floats>, <template>, vertical, viewport, visibility, visible, width, z-index"
    },  // https://www.w3.org/TR/css3-box/  ==>  CSS Basic box model

// Box Alignment

    "Box Alignment": {

        terms: "align-content, aligned subtree, align-items, alignment baseline, alignment container, alignment context, alignment subject, align-self, auto, baseline, Baseline alignment, baseline alignment preference, baseline content-alignment, <baseline-position>, baseline self-alignment, baseline set, baseline-sharing group, box alignment properties, center, <content-distribution>, content distribution properties, <content-position>, end, fallback alignment, first-baseline alignment, first-baseline content-alignment, first baselines, first-baseline self-alignment, first baseline set, flex-end, flex-start, generate, generate baselines, generated, justify-content, justify-items, justify-self, last-baseline, last-baseline alignment, last-baseline content-alignment, last baselines, last-baseline self-alignment, last baseline set, left, legacy, normal, overflow alignment, <overflow-position>, right, safe, self-end, <self-position>, self-start, shared alignment context, space-around, space-between, space-evenly, start, stretch, synthesize, synthesize baselines, synthesized, unsafe",  // https://www.w3.org/TR/css-align-3/#index
        
        properties: "align-content, align-items, align-self, justify-content, justify-items, justify-self",
        
        values: "auto, <baseline-position>, center, <content-distribution>, <content-position>, left, legacy, normal, <overflow-position>, right, <self-position>, stretch",
        
        "terms": "align-content, aligned subtree, align-items, alignment baseline, alignment container, alignment context, alignment subject, align-self, auto, value for justify-content, value for justify-self, value for align-self, value for justify-items, value for align-items, baseline, Baseline alignment, baseline alignment preference, baseline content-alignment, <baseline-position>, baseline self-alignment, baseline-sharing group, baselines of a box, box alignment properties, center, <content-distribution>, content distribution properties, <content-position>, end, fallback alignment, first-baseline alignment, first-baseline content-alignment, first baselines, first-baseline self-alignment, flex-end, flex-start, generate, generate baselines, generated, <item-position>, justify-content, justify-items, justify-self, last-baseline, last-baseline alignment, last-baseline content-alignment, last baselines, last-baseline self-alignment, left, legacy, overflow alignment, <overflow-position>, right, safe, self-end, self-start, shared alignment context, space-around, space-between, space-evenly, start, stretch, synthesize, synthesize baselines, synthesized, true",
    
        // https://www.w3.org/TR/css-align-3/#index-defined-elsewhere
    
        "terms by reference": = "?, |, ||, alignment-baseline, auto, block axis, block container, block flow direction, bottom, column axis, cross axis, dominant baseline, first-baseline, first available font, first formatted line, fit-content, fit-content size, flex, flex-flow, flex container, flex item, flex line, grid area, grid column, grid container, grid item, grid row, grid track, height, inherited value, initial, inline axis, left, line orientation, main-axis, main axis, margin, max-height, max-width, min-height, min-width, multi-column element, overflow, padding, right, row axis, scrollable overflow region, scroll container, static-position rectangle, text-align, top, vertical-align, vertical writing mode, width",
    
        "terms by reference matrix": [
            
            ["?", "CSS Values and Units Module Level 3"],
            
            ["|", "CSS Values and Units Module Level 3"],
            
            ["||", "CSS Values and Units Module Level 3"],
            
            ["alignment-baseline", "Scalable Vector Graphics 2"],
            
            ["auto", "CSS Positioned Layout Module Level 3"],
            
            ["block axis", "CSS Writing Modes Level 3"],
            
            ["block container", "CSS Display Module Level 3"],
            
            ["block flow direction", "CSS Writing Modes Level 3"],
            
            ["bottom", "CSS Positioned Layout Module Level 3"],
            
            ["column axis", "CSS Grid Layout Module Level 1"],
            
            ["cross axis", "CSS Flexible Box Layout Module Level 1"],
            
            ["dominant baseline", "CSS Writing Modes Level 3"],
            
            ["first-baseline", "CSS Line Grid Module Level 1"],
            
            ["first available font", "CSS Fonts Module Level 3"],
            
            ["first formatted line", "Selectors Level 3"],
            
            ["fit-content", "CSS Intrinsic & Extrinsic Sizing Module Level 3"],
            
            ["fit-content size", "CSS Intrinsic & Extrinsic Sizing Module Level 3"],
            
            ["flex", "CSS Flexible Box Layout Module Level 1"],
            
            ["flex-flow", "CSS Flexible Box Layout Module Level 1"],
            
            ["flex container", "CSS Flexible Box Layout Module Level 1"],
            
            ["flex item", "CSS Flexible Box Layout Module Level 1"],
            
            ["flex line", "CSS Flexible Box Layout Module Level 1"],
            
            ["grid area", "CSS Grid Layout Module Level 1"],
            
            ["grid column", "CSS Grid Layout Module Level 1"],
            
            ["grid container", "CSS Grid Layout Module Level 1"],
            
            ["grid item", "CSS Grid Layout Module Level 1"],
            
            ["grid row", "CSS Grid Layout Module Level 1"],
            
            ["grid track", "CSS Grid Layout Module Level 1"],
            
            ["height", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["inherited value", "CSS Cascading and Inheritance Level 3"],
            
            ["initial", "CSS Cascading and Inheritance Level 3"],
            
            ["inline axis", "CSS Writing Modes Level 3"],
            
            ["left", "CSS Positioned Layout Module Level 3"],
            
            ["line orientation", "CSS Writing Modes Level 3"],
            
            ["main-axis", "CSS Flexible Box Layout Module Level 1"],
            
            ["main axis", "CSS Flexible Box Layout Module Level 1"],
            
            ["margin", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["max-height", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["max-width", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["min-height", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["min-width", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["multi-column element", "CSS Multi-column Layout Module Level 1"],
            
            ["overflow", "CSS Overflow Module Level 3"],
            
            ["padding", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["right", "CSS Positioned Layout Module Level 3"],
            
            ["row axis", "CSS Grid Layout Module Level 1"],
            
            ["scrollable overflow region", "CSS Overflow Module Level 3"],
            
            ["scroll container", "CSS Overflow Module Level 3"],
            
            ["static-position rectangle", "CSS Flexible Box Layout Module Level 1"],
            
            ["text-align", "CSS Text Module Level 3"],
            
            ["top", "CSS Positioned Layout Module Level 3"],
            
            ["vertical-align", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["vertical writing mode", "CSS Writing Modes Level 3"],
            
            ["width", "Cascading Style Sheets Level 2 Revision"]
            
        ]
    },  // https://www.w3.org/TR/css-align-3/  ==>  CCSS Box Alignment Module Level 3
            
// Cascading and Inheritance

    "Cascading and Inheritance": {
        
        properties: "all",
        
        values: "initial, inherit, unset",
        
        terms: "actual value, all, cascade, cascaded value, computed value, declared value, @import, !important, important, import conditions, inherit, inheritance, inherited property, inherited value, initial, initial value, longhand, longhand property, origin, output of the cascade, reset-only sub-property, scoped, scoping element, shorthand, shorthand property, specified value, sub-property, unset, used value",
        
        "terms by refeence": "?, |, all, background, background-color, background-image, border, border-bottom-width, border-image, border-left-width, border-right-width, border-top-width, break-before, @charset, direction, display, em, environment encoding, ex, flex, flex item, font, font-family, font-size, font-size-adjust, font-style, font-variant, font-weight, height, line-height, list-style-position, @media, <media-query-list>, orphans, page, page-break-after, <string>, text-align, unicode-bidi, <url>, vh, vw, width",
        
        "terms by reference matrix": [
            
            ["?", "CSS Values and Units Module Level 3."],
            
            ["|", "CSS Values and Units Module Level 3."],
            
            ["all", "Media Queries Level 4"],
            
            ["background", "CSS Backgrounds and Borders Module Level 3"],
            
            ["background-color", "CSS Backgrounds and Borders Module Level 3"],
            
            ["background-image", "CSS Backgrounds and Borders Module Level 3"],
            
            ["border", "CSS Backgrounds and Borders Module Level 3"],
            
            ["border-bottom-width", "CSS Backgrounds and Borders Module Level 3"],
            
            ["border-image", "CSS Backgrounds and Borders Module Level 3"],
            
            ["border-left-width", "CSS Backgrounds and Borders Module Level 3"],
            
            ["border-right-width", "CSS Backgrounds and Borders Module Level 3"],
            
            ["border-top-width", "CSS Backgrounds and Borders Module Level 3"],
            
            ["break-before", "CSS Fragmentation Module Level 3"],
            
            ["@charset", "CSS Syntax Module Level 3"],
            
            ["direction", "CSS Writing Modes Level 3"],
            
            ["display", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["em", "CSS Values and Units Module Level 3."],
            
            ["environment encoding", "CSS Syntax Module Level 3"],
            
            ["ex", "CSS Values and Units Module Level 3."],
            
            ["flex", "CSS Flexible Box Layout Module Level 1"],
            
            ["flex item", "CSS Flexible Box Layout Module Level 1"],
            
            ["font", "CSS Fonts Module Level 3"],
            
            ["font-family", "CSS Fonts Module Level 3"],
            
            ["font-size", "CSS Fonts Module Level 3"],
            
            ["font-size-adjust", "CSS Fonts Module Level 3"],
            
            ["font-style", "CSS Fonts Module Level 3"],
            
            ["font-variant", "CSS Fonts Module Level 3"],
            
            ["font-weight", "CSS Fonts Module Level 3"],
            
            ["height", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["line-height", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["list-style-position", "CSS Lists and Counters Module Level 3"],
            
            ["@media", "CSS Conditional Rules Module Level 3"],
            
            ["<media-query-list>", "Media Queries Level 4"],
            
            ["orphans", "CSS Fragmentation Module Level 3"],
            
            ["page", "CSS Fragmentation Module Level 3"],
            
            ["page-break-after", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["<string>", "CSS Values and Units Module Level 3."],
            
            ["text-align", "CSS Text Module Level 3"],
            
            ["unicode-bidi", "CSS Writing Modes Level 3"],
            
            ["<url>", "CSS Values and Units Module Level 3."],
            
            ["vh", "CSS Values and Units Module Level 3."],
            
            ["vw", "CSS Values and Units Module Level 3."],
            
            ["width", "Cascading Style Sheets Level 2 Revision 1"]            
        ]
    },  // https://www.w3.org/TR/css-cascade-3/  ==>  CSS Cascading and Inheritance Level 3
    
// Color 

    Color: {
        
        Properties: "color, opacity",
        
        values: "<alphavalue>, <color>, inherit",
        
        Terms: "ActiveBorder, ActiveCaption, aliceblue, <alphavalue>, antiquewhite, appearance, AppWorkspace, aqua, aquamarine, azure, Background, beige, bisque, black, blanchedalmond, blue, blueviolet, brown, burlywood, ButtonFace, ButtonHighlight, ButtonShadow, ButtonText, cadetblue, CaptionText, chartreuse, chocolate, color, <color>, color-interpolation, color-rendering, compositing, coral, cornflowerblue, cornsilk, crimson, currentColor, cyan, darkblue, darkcyan, darkgoldenrod, darkgray, darkgreen, darkgrey, darkkhaki, darkmagenta, darkolivegreen, darkorange, darkorchid, darkred, darksalmon, darkseagreen, darkslateblue, darkslategray, darkslategrey, darkturquoise, darkviolet, deeppink, deepskyblue, dimgray, dimgrey, dodgerblue, firebrick, floralwhite, forestgreen, fuchsia, gainsboro, ghostwhite, gold, goldenrod, gray, GrayText, green, greenyellow, grey, Highlight, HighlightText, honeydew, hotpink, hsl(), hsla(), InactiveBorder, InactiveCaption, InactiveCaptionText, indianred, indigo, InfoBackground, InfoText, ivory, khaki, lavender, lavenderblush, lawngreen, lemonchiffon, lightblue, lightcoral, lightcyan, lightgoldenrodyellow, lightgray, lightgreen, lightgrey, lightpink, lightsalmon, lightseagreen, lightskyblue, lightslategray, lightslategrey, lightsteelblue, lightyellow, lime, limegreen, linen, magenta, maroon, mediumaquamarine, mediumblue, mediumorchid, mediumpurple, mediumseagreen, mediumslateblue, mediumspringgreen, mediumturquoise, mediumvioletred, Menu, MenuText, midnightblue, mintcream, mistyrose, moccasin, navajowhite, navy, oldlace, olive, olivedrab, opacity, orange, orangered, orchid, palegoldenrod, palegreen, paleturquoise, palevioletred, papayawhip, peachpuff, peru, pink, plum, powderblue, purple, red, #rgb, rgb(), rgba(), rosybrown, royalblue, #rrggbb, saddlebrown, salmon, sandybrown, Scrollbar, seagreen, seashell, sienna, silver, skyblue, slateblue, slategray, slategrey, snow, springgreen, sRGB, steelblue, system colors, tan, teal, thistle, ThreeDDarkShadow, ThreeDFace, ThreeDHighlight, ThreeDLightShadow, ThreeDShadow, tomato, transparent, turquoise, violet, wheat, white, whitesmoke, Window, WindowFrame, WindowText, yellow, yellowgreen",
    },  // https://www.w3.org/TR/css3-color/  ==>  CSS Color Module Level 3
    
// Compositing and Blending

    "Composting and Blending": {
        
        properties: "background-blend-mode, isolation, mix-blend-mode",
        
        values: "<blend-mode>, <isolation-mode>",
        
        terms: "backdrop, background-blend-mode, <blend-mode>, color, color-burn, color-dodge, <composite-mode>, darken, difference, exclusion, hard-light, hue, isolation, <isolation-mode>, lighten, luminosity, mix-blend-mode, multiply, normal, overlay, saturation, screen, soft-light",
    },  // https://www.w3.org/TR/compositing-1/  ==>  Compositing and Blending Level 1
    
// Conditional Rules

    "Conditional Rules": {
        
        terms: "conditional group rules, CSS, CSSConditionRule, CSSGroupingRule, CSSMediaRule, CSSSupportsRule, general_enclosed, group rule body, group_rule_body, media, ‘@media’ rule, nested_statement, OR, support, supports_condition, supports_condition_in_parens, supports_conjunction, supports_declaration_condition, supports_disjunction, supports_negation, ‘@supports’ rule, supports_rule, SUPPORTS_SYM"
    },  // https://www.w3.org/TR/css3-conditional/  ==>  CSS Conditional Rules Module Level 3
    
// Counters (see Lists and Counters)

    "CSS Counter Styles Level 3": {
        
        properties: "additive-symbols, fallback, negative, pad, prefix, range, speak-as, suffix, symbols, system",
        
        values: "additive, alphabetic, auto, bullets, <counter-style-name>, cyclic, extends, fixed, infinite, <integer>, numbers, numeric, spell-out, <symbol>, symbolic, words",
        
        terms: "additive, additive-symbols, additiveSymbols, additive tuple, alphabetic, arabic-indic, armenian, auto, bengali, box-corner, bullets, cambodian, circle, circled-lower-latin, cjk-decimal, cjk-earthly-branch, cjk-heavenly-stem, cjk-ideographic, counter style, <counter-style>, @counter-style, <counter-style-name>, COUNTER_STYLE_RULE, counter symbol, CSSCounterStyleRule, current tuple, cyclic, decimal, decimal-leading-zero, devanagari, dice, disc, disclosure-closed, disclosure-open, ethiopic-numeric, extends, fallback, first symbol value, fixed, footnote, generate a counter, generate a counter representation, georgian, go, gujarati, gurmukhi, hebrew, hiragana, hiragana-iroha, initial representation for the counter value, japanese-formal, japanese-informal, kannada, katakana, katakana-iroha, khmer, korean-hangul-formal, korean-hanja-formal, korean-hanja-informal, lao, lower-alpha, lower-armenian, lower-greek, lower-latin, lower-roman, malayalam, mongolian, myanmar, name, negative, descriptor for @counter-style, attribute for CSSCounterStyleRule, numbers, numeric, oriya, pad, persian, prefix, range, simp-chinese-formal, simp-chinese-informal, speakAs, speak-as, spell-out, square, suffix, <symbol>, symbolic, symbols, symbols(), <symbols-type>, system, tamil, telugu, thai, tibetan, trad-chinese-formal, trad-chinese-informal, triangle, trinary, upper-alpha, upper-alpha-legal, upper-armenian, upper-latin, upper-roman, use a negative sign, uses a negative sign, words",
        
        "terms by reference": "#, +, ?, {A}, |, ascii case-insensitive, content, css-wide keywords, CSSRule, counter(), counters(), <custom-ident>, <declaration-list>, grapheme cluster, <ident>, <image>, infinite, inside, <integer>, list-style, list-style-type, ::marker, parse a component value, parse a list of component values, <string>",
        
        "terms by reference matrix": [
            
            ["#", "CSS Values and Units Module Level 3"],
            
            ["+", "CSS Values and Units Module Level 3"],
            
            ["?", "CSS Values and Units Module Level 3"],
            
            ["{A}", "CSS Values and Units Module Level 3"],
            
            ["|", "Document Object Model"],
            
            ["ascii case-insensitive", " CSS Pseudo-Elements Module Level 4"],
            
            ["content", "CSS Generated Content Module Level 3"],
            
            ["css-wide keywords", "CSS Values and Units Module Level 3"],
            
            ["CSSRule", "CSS Values and Units Module Level 3"],
            
            ["counter()", "CSS Lists and Counters Module Level 3"],
            
            ["counters()", "CSS Lists and Counters Module Level 3"],
            
            ["<custom-ident>", "CSS Values and Units Module Level 3"],
            
            ["<declaration-list>", "CSS Syntax Module Level 3"],
            
            ["grapheme cluster", "CSS Syntax Module Level 3"],
            
            ["<ident>", "Media Queries Level 4"],
            
            ["<image>", "CSS Image Values and Replaced Content Module Level 3"],
            
            ["infinite", "CSS Animations Module Level 1"],
            
            ["inside", "CSS Lists and Counters Module Level 3"],
            
            ["<integer>", "CSS Values and Units Module Level 3"],
            
            ["list-style", "CSS Lists and Counters Module Level 3"],
            
            ["list-style-type", "CSS Object Model Level 1"],
            
            ["::marker", "CSS Lists and Counters Module Level 3"],
            
            ["parse a component value", "CSS Syntax Module Level 3"],
            
            ["parse a list of component values", "CSS Text Module Level 3"],
            
            ["<string>", "CSS Values and Units Module Level 3"]            
        ] 
        
    }  // http://www.w3.org/TR/2015/CR-css-counter-styles-3-20150611/
    
    "CSS Lists and Counters Module Level 3": {

        /*
            CSS Lists and Counters Module Level 3	WD  2014-03-20  https://www.w3.org/TR/css-lists-3/
            					                    WD  2011-05-24  https://www.w3.org/TR/2011/WD-css3-lists-20110524/
            
            CSS3 module: Lists			            WD  2002-11-07  https://www.w3.org/TR/2002/WD-css3-lists-20021107/
            					                    WD  2002-02-20  https://www.w3.org/TR/2002/WD-css3-lists-20020220/
        */
        
    }  // https://www.w3.org/TR/2014/WD-css-lists-3-20140320/  ==>  CSS Lists and Counters Module Level 3  <==  CSS3 module: Lists
    
    "CSS3 module: Lists": {
        
        properties: "content, list-style, list-style-image, list-style-position, list-style-type",
        
        values: "arabic-indic, armenian, bengali, box, circle, cjk-earthly-branch, cjk-heavenly-stem, cjk-ideographic, decimal, decimal-leading-zero, devanagari, disc, ethiopic-abegede, ethiopic-halehame, ethiopic-numeric, georgian, gujarati, gurmukhi, hangul, hangul, hangul-consonant, hangule-consonant, hebrew, hiragana, hiragana-iroha, japanese-formal, japanese-informal, kannada, katakana, katakana-iroha, khmer, lao, lower-alpha, lower-greek, lower-latin, lower-roman, malayalam, myanmar, none, nside, oriya, outside, persian, simp-chinese-formal, simp-chinese-informal, square, tamil, telugu, thai, trad-chinese-formal, trad-chinese-informal, upper-alpha, upper-latin, upper-roman, urdu",
        
        terms: "box, circle, disc, list-style, list-style-image, list-style-position, list-style-type, square"
    }  // https://www.w3.org/TR/2002/WD-css3-lists-20021107/  ==>  CSS3 module: Lists
    
     "Predefined Counter Styles": {
             
         /*
            Predefined Counter Styles   WD  2015-02-03  https://www.w3.org/TR/predefined-counter-styles/
            			                WD  2014-08-21  https://www.w3.org/TR/2014/WD-predefined-counter-styles-20140821/
            			                WD  2013-07-25  https://www.w3.org/TR/2013/WD-predefined-counter-styles-20130725/     
        */         
         
        // Templates only
     }  // http://www.w3.org/TR/2015/WD-predefined-counter-styles-20150203/

// CSS Level 1    

    "Cascading Style Sheets, level 1": {
        
        /*
            REC 2008-04-11  https://www.w3.org/TR/REC-CSS1/
            REC 1999-01-11  https://www.w3.org/TR/1999/REC-CSS1-19990111
            REC 1996-12-17  https://www.w3.org/TR/REC-CSS1-961217
        */
        
        properties: "background, background-attachment, background-color, background-image, background-position, background-repeat, border, border-bottom, border-bottom-width, border-color, border-left, border-left-width, border-right, border-right-width, border-style, border-top, border-top-width, border-width, clear, color, display, float, font, font-family, font-size, font-style, font-variant, font-weight, height, letter-spacing, line-height, list-style, list-style-image, list-style-position, list-style-type, margin, margin-bottom, margin-left, margin-right, margin-top, padding, padding-bottom, padding-left, padding-right, padding-top, text-align, text-decoration, text-indent, text-transform, vertical-align, white-space, width, word-spacing"
    }  // https://www.w3.org/TR/REC-CSS1/  ==>  Cascading Style Sheets, level 1

// CSS Level 2

    "CSS Level 2": {
        
        properties: "azimuth, background, background-attachment, background-color, background-image, background-position, background-repeat, border, border-collapse, border-color, border-spacing, border-style, border-top, border-top-color, border-top-style, border-top-width, border-width, bottom, caption-side, clear, clip, color, content, counter-increment, counter-reset, cue, cue-after, cue-before, cursor, direction, display, elevation, empty-cells, float, font, font-family, font-size, font-size-adjust, font-stretch, font-style, font-variant, font-weight, height, left, letter-spacing, line-height, list-style, list-style-image, list-style-position, list-style-type, margin, margin-top, marker-offset, marks, max-height, max-width, min-height, min-width, orphans, outline, outline-color, outline-style, outline-width, overflow, padding, padding-top, page, page-break-after, page-break-before, page-break-inside, pause, pause-after, pause-before, pitch, pitch-range, play-during, position, quotes, richness, right, size, speak, speak-header, speak-numeral, speak-punctuation, speech-rate, stress, table-layout, text-align, text-decoration, text-indent, text-shadow, text-transform, top, unicode-bidi, vertical-align, visibility, voice-family, volume, white-space, widows, width, word-spacing, z-index", 
            // https://www.w3.org/TR/REC-CSS2/propidx.html  ==>  Cascading Style Sheets, level 2
    
        terms: ":active, :after, :before, :first, :first-child, :first-letter, :first-line, :focus, :hover, :lang, :left, :link, :right, :visited, =, ~=, |=, @charset, @font-face, @import, @media, @page, absolute length, <absolute-size>, absolutely positioned element, abstract glyph, active, actual value, after, 'all' media group, ancestor, <angle>, anonymous, anonymous inline boxes, armenian, 'ascent', aspect value, at-rule, at-rules, attr(), attribute, auditory icon, 'aural' media group, authoring tool, automatic numbering, 'azimuth', 'background', 'background-attachment', 'background-color', 'background-image', 'background-position', 'background-repeat', backslash escapes, 'baseline', 'bbox', before, bicameral, bidirectionality (bidi), 'bitmap' media group, block, block box, 'block', block-level element, border edge, 'border', 'border-bottom', 'border-bottom-color', 'border-bottom-style', 'border-bottom-width', 'border-collapse', 'border-color', 'border-left', 'border-left-color', 'border-left-style', 'border-left-width', 'border-right', 'border-right-color', 'border-right-style', 'border-right-width', 'border-spacing', <border-style>, <border-style>, 'border-style', 'border-top', 'border-top-color', 'border-top-style', 'border-top-width', <border-width>, 'border-width', border, <bottom>, 'bottom', box, canvas, 'cap-height', 'caption-side', cascade, case sensitivity, 'centerline', character, character encoding, child, child selector, circle, cjk-ideographic, 'clear', 'clip', clipping region, close-quote, collapsing margin, color, <color>, 'color', combinator, comments, compact, compact box, 'compact', computed value, conditional import, conformance, containing block, content, content edge, 'content', content, continuous' media group, <counter>, <counter>, counter(), 'counter-increment', 'counter-reset', counters, crop marks, cross marks, 'cue', 'cue-after', 'cue-before', cursive, 'cursor', 'dashed', decimal, decimal-leading-zero, declaration, declaration-block, default style sheet, default, 'definition-src', descendant, descendant-selectors, 'descent', 'direction', disc, 'display', document language, document tree, 'dotted', 'double', drop caps, DTD, element, 'elevation', em (unit), em square, empty, 'empty-cells', encoding vector, ex (unit), exact matching, <family-name>, fantasy, fictional tag sequence, first-child, first-letter, first-line, float rules, 'float', focus, focus, following element, font, font data, font definition resource, font description, font download, font encoding table, font family, font set, font synthesis, 'font', <font-description>, <font-face-name>, 'font-family', 'font-family', 'font-size', 'font-size', 'font-size-adjust', 'font-stretch', 'font-stretch', 'font-style', 'font-style', 'font-variant', 'font-variant', 'font-weight', 'font-weight', forced line break, formatting context, formatting structure, forward-compatible parsing, <frequency>, full font name, generated content, <generic-family>, <generic-voice>, georgian, glyph, 'grid' media group, 'groove', half-leading, hebrew, 'height', 'hidden, 'hidden', hiragana, hiragana-iroha, horizontal margin, hover, hyphen-separated matching, identifier, ignore, illegal, important, inherit, initial caps, initial containing block, initial value, 'inline', inline-level element, inline-table, 'inline-table', inner edge, 'inset', <integer>, intelligent font matching, 'interactive media group, internal table element, intrinsic dimensions, invert, iso-10646, Italic, katakana, katakana-iroha, lang, language (human), language code, leading, <left>, 'left', <length>, 'letter-spacing', ligatures, line box, line-box, 'line-height', link, list properties, 'list-item', 'list-style', 'list-style-image', 'list-style-position', 'list-style-type', LL(1), local stacking context, lower-greek, lower-latin, lower-roman, mapping elements to table parts, margin edge, 'margin', 'margin-bottom', 'margin-left', 'margin-right', 'margin-top', <margin-width>, margin, marker', 'marker-offset', markers, 'marks', match, 'mathline', 'max-height', 'max-width', MAY, media, media group, media type, media-dependent import, message entity, 'min-height', 'min-width', monospace, multiple declarations, MUST, MUST NOT, name matching, newline, no-close-quote, no-open-quote, 'none', <number>,  open-quote, OPTIONAL, 'orphans', outer edge, outline, 'outline', 'outline-color', 'outline-style', 'outline-width', 'outset', overflow, 'overflow', padding edge, 'padding', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top', <padding-width>, padding, page area, page box, page model, page selector, 'page', 'page-break-after', 'page-break-before', 'page-break-inside', page-context, 'paged' media group, Panose-1, panose-1, 'panose-1', parent, 'pause', 'pause-after', 'pause-before', <percentage>, 'pitch', 'pitch-range', pixel, 'play-during', 'position', positioned element/box, positioning scheme, preceding element, principal block box, progressive rendering, property, pseudo-class, pseudo-element, quad width, 'quotes', RECOMMENDED, reference pixel, relative positioning, relative units, <relative-size>, rendered content, replaced element, REQUIRED, Resource Identifier (URI), 'richness', 'ridge', <right>, 'right', root, root stacking context, rule sets, run-in, run-in box, 'run-in', sans-serif, scope, screen reader, selector, separated borders, serif, SHALL, SHALL NOT, <shape>, sheet, shorthand property, SHOULD, SHOULD NOT, sibling, simple selector, 'size', 'slope', 'solid', source document, space-separated matching, 'speak', 'speak-header', 'speak-numeral', 'speak-punctuation', <specific-voice>, specified value, 'speech-rate', square, 'src', stack level, stacking context, statements, 'static' media group, 'stemh', 'stemv', 'stress', string, <string>, <string>, style sheet, subject (of selector), system fonts, table, table element, 'table', table-caption, 'table-caption', table-cell, 'table-cell', table-column, 'table-column', table-column-group, 'table-column-group', table-footer-group, 'table-footer-group', table-header-group, 'table-header-group', 'table-layout', table-row, 'table-row', table-row-group, 'table-row-group', tables, 'tactile' media group, 'text-align', 'text-decoration', 'text-indent', 'text-shadow', 'text-transform', text/css, <time>, tokenizer, <top>, 'top', 'topline', type selector, UA, unicameral, unicode, 'unicode-bidi', 'unicode-range', Uniform Resource Locator (URL), Uniform Resource Name (URN), 'units-per-em', universal selector, upper-latin, upper-roman, <urange>, URI (Uniform Resource Identifier), <uri>, URL (Uniform Resource Locator), URN (Uniform Resource Name), user agent, valid style sheet, value, vertical margin, 'vertical-align', viewport, 'visibility', visited, visual formatting model, 'visual' media group, 'voice-family', volume, 'volume', 'white-space', 'widows', 'width', 'widths', 'word-spacing', x-height, 'x-height', 'z-index'"  // https://www.w3.org/TR/REC-CSS2/indexlist.html
    }  // https://www.w3.org/TR/REC-CSS2/  ==>  Cascading Style Sheets, level 2

// Device Adaptation
    
    "CSS Device Adaptation Module Level 1": {
        
        /*    
            CSS Device Adaptation Module Level 1    2016-03-29  WD  https://www.w3.org/TR/css-device-adapt-1/
            					                    2015-11-26	WD	https://www.w3.org/TR/2015/WD-css-device-adapt-1-20151126/
            
            CSS Device Adaptation			        2011-09-15	WD	https://www.w3.org/TR/2011/WD-css-device-adapt-20110915/    
        */
        
        properties: "height, max-height, max-width, max-zoom, min-height, min-width, min-zoom, orientation, user-zoom, width, zoom",
        
        values: "auto, fixed, landscape, <number>, <percentage>, portrait, <viewport-length>, zoom",
        
        terms: "actual viewport, auto, CSSViewportRule, fixed, height, initial-height, initial viewport, initial-width, landscape, <length>, max-height, max-width, max-zoom, min-height, min-width, min-zoom, orientation, <percentage>, portrait, style, user-zoom, @viewport, <viewport-length>, VIEWPORT_RULE, width, zoom",
        
        "terms by refeence": "{a,b}, |, CSS Values and Units Module Level 3conditional group rules, CSSRule, CSSStyleDeclaration, device-aspect-ratio, direction, font-size, inherit, <length>, @media, nested_statement, <number>, @page, <percentage>, @supports",
        
        "terms by refeence matrix": [
            
            ["{a,b}", "CSS Values and Units Module Level 3"],
            
            ["|", "CSS Values and Units Module Level 3"],
            
            ["conditional group rules", "CSS Conditional Rules Module Level 3"],
            
            ["CSSRule", "CSS Object Model (CSSOM)"],
            
            ["CSSStyleDeclaration", "CSS Object Model (CSSOM)"],
            
            ["device-aspect-ratio", "Media Queries Level 4"],
            
            ["direction", "CSS Writing Modes Level 3"],
            
            ["font-size", "CSS Fonts Module Level 3"],
            
            ["inherit", "CSS Cascading and Inheritance Level 4"],
            
            ["<length>", "CSS Values and Units Module Level 3"],
            
            ["@media", "CSS Conditional Rules Module Level 3"],
            
            ["nested_statement", "CSS Conditional Rules Module Level 3"],
            
            ["<number>", "CSS Values and Units Module Level 3"],
            
            ["@page", "CSS Paged Media Module Level 3"],
            
            ["<percentage>", "CSS Values and Units Module Level 3"],
            
            ["@supports", "CSS Conditional Rules Module Level 3"]
        ]
    },  // https://www.w3.org/TR/css-device-adapt-1/  ==>  CSS Device Adaptation Module Level 1  <==  CSS Device Adaptation
    
    
    "CSS Device Adaptation": {
        
        terms: "actual viewport, auto, device, device-dpi, device-height, device-width, fixed, height, high-dpi, initial-scale, initial viewport, landscape, low-dpi, max-height, maximum-scale, max-width, max-zoom, medium-dpi, min-height, minimum-scale, min-width, min-zoom, no, orientation, portrait, resolution, <resolution>, target-densityDpi, user-scalable, user-zoom, <viewport-length>, width, yes, zoom",    
       
        properties: "height, max-height, max-width, max-zoom, min-height, min-width, min-zoom, orientation, resolution, user-zoom, width, zoom",
        
        values: "auto, device, fixed, landscape, <number>, <percentage>, portrait, <resolution>, <viewport-length>, zoom"
    },  // https://www.w3.org/TR/2011/WD-css-device-adapt-20110915/#property-index  ==>  CSS Device Adaptation
    
// Display property

    "CSS Display Module Level 3": {
        
        terms: "anonymous, anonymous box, atomic inline, atomic inline box, BFC, block, block box, block container, block container box, block formatting context, blockification, blockify, block-level, block-level box, block-level content, box, box-suppress, box tree, containing block, contents, discard, display, <display-box>, <display-inside>, <display-internal>, <display-legacy>, <display-listitem>, <display-outside>, display type, element, element tree, flex, flow, flow layout, flow-root, formatting context, grid, hide, in-flow, initial containing block, inline, inline-block, inline box, inline-flex, inline formatting context, inline-grid, inline-level, inline-level box, inline-level content, inline-table, inlinification, inlinify, inner, inner display type, internal ruby element, internal table element, list-item, none, outer, outer display type, out-of-flow, ruby, ruby-base, ruby-base-container, ruby-text, ruby-text-container, run-in, run-in box, run-in sequence, show, table, table-caption, table-cell, table-column, table-column-group, table-footer-group, table-header-group, table-row, table-row-group",
        
        
        properties: "box-suppress, display",
        
        values: "discard, <display-box>, <display-inside>, <display-internal>, <display-legacy>, <display-listitem>, <display-outside>, hide, show",
        
        "terms by refeence": "?, |, ||, absolute, ::before, box fragment, cascade, counter-increment, fixed, flex container, flex formatting context, flex layout, float, fragment, fragmentation, grid container, grid formatting context, list-style, ::marker, overflow, position, pseudo-element, ruby container, ruby formatting context, width",
        
        "terms by refeence matrix": [
            
            ["::before", "CSS Pseudo-Elements Module Level 4"],
            
            ["::marker", "CSS Pseudo-Elements Module Level 4"],
            
            ["absolute", "CSS Positioned Layout Module Level 3"],
            
            ["box fragment", "CSS Fragmentation Module Level 3"],
            
            ["cascade", "CSS Cascading and Inheritance Level 4"],
            
            ["counter-increment", "CSS Lists and Counters Module Level 3"],
            
            ["fixed", "CSS Positioned Layout Module Level 3"],
            
            ["flex container", "CSS Flexible Box Layout Module Level 1"],
            
            ["flex formatting context", "CSS Flexible Box Layout Module Level 1"],
            
            ["flex layout", "CSS Flexible Box Layout Module Level 1"],
            
            ["float", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["fragment", "CSS Fragmentation Module Level 3"],
            
            ["fragmentation", "CSS Fragmentation Module Level 3"],
            
            ["grid container", "CSS Grid Layout Module Level 1"],
            
            ["grid formatting context", "CSS Grid Layout Module Level 1"],
            
            ["list-style", "CSS Lists and Counters Module Level 3"],
            
            ["overflow", "CSS Overflow Module Level 3"],
            
            ["position", "CSS Positioned Layout Module Level 3"],
            
            ["pseudo-element", "Selectors Level 4"],
            
            ["?", "CSS Values and Units Module Level 3"],
            
            ["ruby container", "CSS Ruby Layout Module Level 1"],
            
            ["ruby formatting context", "CSS Ruby Layout Module Level 1"],
            
            ["width", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["|", "CSS Values and Units Module Level 3"],
            
            ["||", "CSS Values and Units Module Level 3"]        
        ]
    },  // https://www.w3.org/TR/css-display-3/  ==>  CSS Display Module Level 3  WD  2015-10-15


// Encodings    CR  2015-10=20  https://www.w3.org/TR/encoding/


// Exclusions

    "CSS Exclusions Module Level 1": {
        
        terms: "content area,  exclusion area,  exclusion box,  exclusion element,  outside-inside,  wrap-flow,  wrap-through, wrapping area,  wrapping context",
        
        properties: "wrap-flow, wrap-through",
        
        values: "auto, both, clear, end, maximum, minimum, none, start, wrap"
            
    },  // https://www.w3.org/TR/2015/WD-css3-exclusions-20150115/  ==>  CSS Exclusions Module Level 1


// Filter Effects

    "Filter Effects Module Level 1": {
        
        
    },  // https://www.w3.org/TR/2014/WD-filter-effects-1-20141125/  ==>  Filter Effects Module Level 1  <==  Filter Effects 1.0
    
    "Filter Effects 1.0": {
        
        terms: "array(),  attached,  auto,  BackgroundAlpha,  BackgroundImage,  blended color,  <blend-mode>,  blur(),  bounding client rect,  brightness(),  color-interpolation-filters,  color matrix,  <composite-mode>,  contrast(),  custom(),  <custom-filter-type>,  detached,  drop-shadow(),  feBlend,  feColorMatrix,  feComponentTransfer,  feComposite,  feConvolveMatrix,  feCustom,  feCustomParam,  feCustomSource,  feDiffuseLighting,  feDisplacementMap,  feDistantLight,  feDropShadow,  feFlood,  feFuncA,  feFuncB,  feFuncG,  feFuncR,  feGaussianBlur,  feImage,  feMerge,  feMergeNode,  feMorphology,  feOffset,  fePointLight,  feSpecularLighting,  feSpotLight,  feTile,  feTurbulence,  FillPaint,  filter,  @filter,  filter(),  <filter-function>,  <filter-function-list>,  filter primitive attributes,  filter primitive elements,  <filter-primitive-reference>,  filter primitives,  filter_rule,  flood-color,  flood-opacity,  geometry,  <geometry-shape>,  grayscale(),  grid(),  group_rule_body,  hue-rotate(),  invert(),  lighting-color,  light source,  linearRGB,  local coordinate system,  margin,  <mat>,  mat2(),  mat3(),  mat4(),  mix,  mix color,  multiplied color,  null filter,  object bounding box units,  opacity(),  operating coordinate space,  <param>,  parameters,  <param-value>,  pass through filter,  saturate(),  sepia(),  SourceAlpha,  SourceGraphic,  src,  sRGB,  StrokePaint,  transfer function elements,  <url>,  user coordinate system,  vertex mesh",
        
        properties: "filter,  flood-color,  flood-opacity,  color-interpolation-filters,  lighting-color",
        
        values: "auto, <color>, <filter-function-list>, <icccolor>, linearRGB, none, <number>, <percentage>, sRGB"
    },  // https://www.w3.org/TR/2013/WD-filter-effects-20130523/  ==>  Filter Effects 1.0
    
// Flexbox

    Flexbox: {
        
        // ^([-\w]+)(\t)([\w\]\| -<>‘’]+)(.+)
        
        properties: "align-content, align-items, align-self, flex, flex-basis, flex-direction, flex-flow, flex-grow, flex-shrink, flex-wrap, justify-content, order",
        
        values = "auto, baseline, center, column, column-reverse, content, flex-end, flex-start, none, nowrap, row, row-reverse, space-around, space-between, stretch, wrap, wrap-reverse",
        
        matrix = [

            ["align-content", "flex-start | flex-end | center | space-between | space-around | stretch"]
            
            ["align-items", "flex-start | flex-end | center | baseline | stretch"],
            
            ["align-self", "auto | flex-start | flex-end | center | baseline | stretch"],
            
            ["flex", "none | [ <‘flex-grow’> <‘flex-shrink’>? || <‘flex-basis’>"],
            
            ["flex-basis", "content | <‘width’>"],
            
            ["flex-direction", "row | row-reverse | column | column-reverse"],
            
            ["flex-flow", "<flex-direction> || <flex-wrap>"],
            
            ["flex-grow", "<number>"],
            
            ["flex-shrink", "<number>"],
            
            ["flex-wrap", "nowrap | wrap | wrap-reverse"],
            
            ["justify-content", "flex-start | flex-end | center | space-between | space-around"],
            
            ["order", "<integer>"]
        ],

    
        "terms": "align-content, align-items, align-self, auto, baseline, center, collapsed, collapsed flex item, column, column-reverse, content, cross axis, cross-axis, cross-axis baseline, cross dimension, cross-end, cross size, cross-size, cross size property, cross-start, definite, definite size, flex, flex base size, flex basis, <‘flex-basis’>, flex-basis, flex container, flex-direction, flex direction, flex-end, flex-flow, flex formatting context, flex-grow, <‘flex-grow’>, flex grow factor, flexible length, flex item, flex layout, flex-level, flex line, <‘flex-shrink’>, flex-shrink, flex shrink factor, flex-start, flex-wrap, hypothetical cross size, hypothetical main size, indefinite, indefinite size, initial free space, inline-flex, <integer>, justify-content, main-axis, main axis, main-axis baseline, main dimension, main-end, main-size, main size, main size property, main-start, max cross size property, max main size property, min cross size property, min main size property, multi-line, none, nowrap, <number>, order, order-modified document order, participates in baseline alignment, remaining free space, row, row-reverse, scaled flex shrink factor, single-line, space-around, space-between, value for justify-content, value for align-content, static-position rectangle, stretch, stretched, strut size, target main size, wrap, wrap-reverse",
        
        "terms by reference": "?, |, ||, alignment container, available space, block-end, block-start, block axis, blockify, bottom, box-sizing, break-after, break-before, break-inside, clear, direction, display, end, first formatted line, ::first-letter, ::first-line, fit-content, float, height, horizontal-tb, initial, inline-end, inline-start, inline axis, <integer>, intrinsic sizing, justify-self, left, <length>, ltr, margin, max-content, max-content, max-content constraint, max-content contribution, max-content size, max-height, max-width, min-content, min-content, min-content constraint, min-content contribution, min-content size, min-height, min-width, <number>, overflow, page-break-after, page-break-before, <percentage>, position, right, rtl, specified size, start, static, top, vertical-align, vertical-rl, visibility, white-space, width, writing-mode, writing mode, z-index",
        
        "terms by reference matrix": [
            
            ["?", "CSS Values and Units Module Level 3"],
            
            ["|", "CSS Values and Units Module Level 3"],
            
            ["||", ""],
            
            ["alignment container", "CSS Box Alignment Module Level 3"],
            
            ["available space", "CSS Intrinsic & Extrinsic Sizing Module Level 3"],
            
            ["block-end", "CSS Writing Modes Level 3"],
            
            ["block-start", "CSS Writing Modes Level 3"],
            
            ["block axis", "CSS Writing Modes Level 3"],
            
            ["blockify", "CSS Display Module Level 3"],
            
            ["bottom", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["box-sizing", "CSS Basic User Interface Module Level 3 "],
            
            ["break-after", "CSS Fragmentation Module Level 3"],
            
            ["break-before", "CSS Fragmentation Module Level 3"],
            
            ["break-inside", "CSS Fragmentation Module Level 3"],
            
            ["clear", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["direction", "CSS Writing Modes Level 3"],
            
            ["display", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["end", "CSS Writing Modes Level 3"],
            
            ["first formatted line", "CSS Pseudo-Elements Module Level 4"],
            
            ["::first-letter", "CSS Pseudo-Elements Module Level 4"],
            
            ["::first-line", "CSS Pseudo-Elements Module Level 4"],
            
            ["fit-content", "CSS Intrinsic & Extrinsic Sizing Module Level 3"],
            
            ["float", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["height", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["horizontal-tb", "CSS Writing Modes Level 3"],
            
            ["initial", "CSS Cascading and Inheritance Level 4"],
            
            ["inline-end", "CSS Writing Modes Level 3"],
            
            ["inline-start", "CSS Writing Modes Level 3"],
            
            ["inline axis", "CSS Writing Modes Level 3"],
            
            ["<integer>", "CSS Values and Units Module Level 3"],
            
            ["intrinsic sizing", "CSS Intrinsic & Extrinsic Sizing Module Level 3"],
            
            ["justify-self", "CSS Box Alignment Module Level 3"],
            
            ["left", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["<length>", "CSS Values and Units Module Level 3"],
            
            ["ltr", "CSS Writing Modes Level 3"],
            
            ["margin", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["max-content", "CSS Intrinsic & Extrinsic Sizing Module Level 3"],
            
            ["max-content constraint", "CSS Intrinsic & Extrinsic Sizing Module Level 3"],
            
            ["max-content contribution", "CSS Intrinsic & Extrinsic Sizing Module Level 3"],
            
            ["max-content size", "CSS Intrinsic & Extrinsic Sizing Module Level 3"],
            
            ["max-height", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["max-width", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["min-content", "CSS Intrinsic & Extrinsic Sizing Module Level 3"],
            
            ["min-content constraint", "CSS Intrinsic & Extrinsic Sizing Module Level 3"],
            
            ["min-content contribution", "CSS Intrinsic & Extrinsic Sizing Module Level 3"],
            
            ["min-content size", "CSS Intrinsic & Extrinsic Sizing Module Level 3"],
            
            ["min-height", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["min-width", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["<number>", "CSS Values and Units Module Level 3"],
            
            ["overflow", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["page-break-after", ""],
            
            ["page-break-before", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["<percentage>", "CSS Values and Units Module Level 3"],
            
            ["position", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["right", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["rtl", "CSS Writing Modes Level 3"],
            
            ["specified size", "CSS Image Values and Replaced Content Module Level 3"],
            
            ["start", "CSS Writing Modes Level 3"],
            
            ["static", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["top", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["vertical-align", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["vertical-rl", "CSS Writing Modes Level 3"],
            
            ["visibility", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["white-space", "CSS Text Module Level 3"],
            
            ["width", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["writing-mode", "CSS Writing Modes Level 3"],
            
            ["writing mode", "CSS Writing Modes Level 3"],
            
            ["z-index", "Cascading Style Sheets Level 2 Revision 1"]
        ]
    },
    
// Fonts

    "CSS Fonts Module Level 3": {
        
        /*
            CSS Fonts Module Level 3    CR 2013-10-03   https://www.w3.org/TR/css-fonts-3/
                                      LCWD 2013-07-11   https://www.w3.org/TR/2013/WD-css-fonts-3-20130711/
                                        WD 2013-02-12   https://www.w3.org/TR/2013/WD-css3-fonts-20130212/
                                        WD 2012-12-11   https://www.w3.org/TR/2012/WD-css3-fonts-20121211/
                                        WD 2012-08-23   https://www.w3.org/TR/2012/WD-css3-fonts-20120823/
                                        WD 2011-10-04   https://www.w3.org/TR/2011/WD-css3-fonts-20111004/
                                        WD 2011-03-24   https://www.w3.org/TR/2011/WD-css3-fonts-20110324/
                                        WD 2009-06-18   https://www.w3.org/TR/2009/WD-css3-fonts-20090618/
            
            CSS3 module: Fonts          WD  2002-08-02  https://www.w3.org/TR/2002/WD-css3-fonts-20020802/
                                        WD  2001-07-31  https://www.w3.org/TR/2001/WD-css3-fonts-20010731/
        */
        
        properties: "font, font-family, font-feature-settings, font-kerning, font-language-override, font-size, font-size-adjust, font-stretch, font-style, font-synthesis, font-variant, font-variant-alternates, font-variant-caps, font-variant-east-asian, font-variant-ligatures, font-variant-numeric, font-variant-position, font-weight",
        
        values: "100, 200, 300, 400, 500, 600, 700, 800, 900, all-small-caps, annotation, auto, bold, bolder, caption, character-variant, <common-lig-values>, <contextual-alt-values>, condensed, <discretionary-lig-values>, <east-asian-variant-values>, <east-asian-width-values>, expanded, extra-condensed, extra-expanded, <family-name>, <feature-tag-value>, <feature-value-name>, <font-family>, <font-size>, <font-stretch, <font-style>, <font-variant-css21>, <font-weight>, <generic-family>, historical-forms, historical-forms, <historical-lig-values>, icon, italic, <length>, lighter, <line-height>, menu, message-box, none, nonenormal, normal, <number>, <numeric-figure-values>, <numeric-fraction-values>, <numeric-spacing-values>, obliquenone, ordinal, ornaments, <percentage>, petite-caps, <relative-size>, ruby, semi-condensed, semi-expanded, slashed-zero, small-caps, small-caption, status-bar, <string><absolute-size>, style, stylesetc, stylistic, sub, supernormal, swash, titling-caps, titling-capsnormal, ultra-condensed, ultra-expandednormal, unicase, weight",
        
        terms: "100, 200, 300, 400, 500, 600, 700, 800, 900, <absolute-size>, <common-lig-values>, <contextual-alt-values>, <discretionary-lig-values>, <east-asian-variant-values>, <east-asian-width-values>, <family-name>, <feature-tag-value>, <font-face-name>, <font-variant-css21>, <generic-family>, <historical-lig-values>, <length>, <number>, <numeric-figure-values>, <numeric-fraction-values>, <numeric-spacing-values>, <percentage>, <relative-size>, <string>, <urange>, @font-face, @font-feature-values, all-petite-caps, all-small-caps, annotation, aspect value, authoring tool, auto, bold, bolder, character map, character-variant, common-ligatures, composite face, condensed, contextual, CSSFontFaceRule, CSSFontFeatureValuesRule, cursive, default face, descriptor_declaration, diagonal-fractions, discretionary-ligatures, effective character map, expanded, extra-condensed, extra-expanded, fantasy, feature_type, feature_value_block, feature_value_definition, first available font, font, font specific, font-family, font-feature-settings, descriptor, property, font-kerning, font-language-override, font-size, font-size-adjust, font-stretch, font-style, font-synthesis, font-variant, font-variant-alternates, font-variant-caps, font-variant-east-asian, font-variant-ligatures, font-variant-numeric, font-variant-position, font-weight, font_face_rule, FONT_FACE_SYM, font_family_name, font_family_name_list, font_feature_values_rule, FONT_FEATURE_VALUES_SYM, full-width, historical-forms, historical-ligatures, italic, jis04, jis78, jis83, jis90, lighter, lining-nums, monospace, no-common-ligatures, no-contextual, no-discretionary-ligatures, no-historical-ligatures, none, normal, oblique, oldstyle-nums, ordinal, ornaments, petite-caps, proportional-nums, proportional-width, renderer, ruby, sans-serif, semi-condensed, semi-expanded, serif, simplified, slashed-zero, small-caps, src, stacked-fractions, style sheet, styleset, stylistic, sub, super, support, swash, system font fallback, tabular-nums, titling-caps, traditional, ultra-condensed, ultra-expanded, unicase, unicode-range, weight, width"
    },  // https://www.w3.org/TR/2013/CR-css-fonts-3-20131003/  ==>  CSS Fonts Module Level  <==  CSS3 module: Fonts
    
    
    "CSS3 module: Fonts": {
        
        /*    
            CSS3 module: Fonts          WD  2002-08-02  https://www.w3.org/TR/2002/WD-css3-fonts-20020802/
                                        WD  2001-07-31  https://www.w3.org/TR/2001/WD-css3-fonts-20010731/
        */        
        
        properties: "font, font-effect, font-emphasize, font-emphasize-position, font-emphasize-style, font-family, font-size, font-size-adjust, font-smooth, font-stretch, font-style, font-variant, font-weight",
        
        values: "100, 200, 300, 400, 500, 600, 700, 800, 900, <absolute-size>, accent, afternone, always, bold, bolder, caption, circle, condensed, disc[[ <family-name>, dot, emboss, engrave, expanded, extra-condensed, extra-expanded, <family-name>, <font-emphasize-position>before, <font-emphasize-style>, <font-family>, <font-size>, <font-style>, <font-variant>, <font-weight>, <generic-family>, <generic-family>, icon, italic, <length>, lengthnormal, lighter, <line-height>, menu, message-box, narrower, never, noneauto, none]<absolute-size>, obliquenormal, outline, <percentage><number>, <relative-size>, semi-condensed, semi-expanded, small-capsnormal, small-caption, status-barnone, ultra-condensed, ultra-expandednormal, wider"
        
    },  // https://www.w3.org/TR/2002/WD-css3-fonts-20020802/  ==>   CSS3 module: Fonts
    
// Font Loading

    "CSS Font Loading Module Level 3": {
        
        // No properties defined
        
        terms: "available font faces, BinaryData, check(), CSS-connected, CSSFontFaceLoadEvent, CSSFontFaceLoadEventInit, [[Data]], descriptors, eventInitDict, [[FailedFonts]], family, featureSettings, find the matching font faces, fire a font load event, font, FontFace, FontFace(), FontFaceDescriptors, FontFaceLoadStatus, fontfaces, FontFaceSet, FontFaceSetLoadStatus, FontFaceSource, fonts, font source, [[FontStatusPromise]], load(), loaded, [[LoadedFonts]], loading, loadingdone, loadingerror, [[LoadingFonts]], no pending font loads, onloading, onloadingdone, onloadingerror, [[PendingReadyPromises]], possibly pending font loads, Promise, ready(), source, status, stretch, style, text, type, unicodeRange, [[Urls]], variant, weight"
    }  //  https://www.w3.org/TR/css-font-loading-3/  ==> https://www.w3.org/TR/css-font-loading-3/

// Fragmentation

    "CSS Fragmentation Module Level 3": {
        
        /*
            ED  2016-05-21 https://drafts.csswg.org/css-break/
            CR  2016-01-14 https://www.w3.org/TR/css-break-3/
            WD  2015-01-29 https://www.w3.org/TR/2015/WD-css3-break-20150129/
            WD  2014-01-16 https://www.w3.org/TR/2014/WD-css3-break-20140116/
            WD  2012-08-23 https://www.w3.org/TR/2012/WD-css3-break-20120823/
            WD  2012-02028 https://www.w3.org/TR/2012/WD-css3-break-20120228/
        */        
        
        properties: "box-decoration-break, break-after, break-before, break-inside, orphans, widows",
        
        values: "auto, avoid, avoid-column, avoid-page, avoid-region, clone, column, <integer>, left, page, recto, regionauto, right, slice, verso"
        
        terms: "auto, avoid, avoid break values, avoid-column, avoid-page, avoid-region, box-decoration-break, box fragment, break, break-after, break-before, break-inside, clone, column, column break, forced break, forced break values, fragment, fragmentainer, fragmentation, fragmentation break, fragmentation container, fragmentation context, fragmentation direction, fragmentation root, fragmented flow, left, line break, monolithic, orphans, page, page break, pagination, recto, region, region break, remaining fragmentainer extent, right, slice, spread break, unforced break, verso, widows",
        
        "terms by reference": "border-image, border-radius, box-shadow, initial, display type, formatting context, inline-block, inline-table, mask positioning area, page, page progression, top, region chain, fill-available size, max-content size, min-content size, block flow direction, block size, block-axis, block-start, direction, inline base direction, inline size, ltr, principal writing mode, auto, height, overflow, page-break-after, page-break-before, page-break-inside, scroll",
        
        "terms by reference matrix": [
            
            ["border-image", "CSS Backgrounds and Borders Module Level 3 [CSS-BACKGROUNDS-3]"],
            
            ["border-radius", "CSS Backgrounds and Borders Module Level 3 [CSS-BACKGROUNDS-3]"],
            
            ["box-shadow", "CSS Backgrounds and Borders Module Level 3 [CSS-BACKGROUNDS-3]"],
            
            ["initial", " CSS Cascading and Inheritance Level 4 [css-cascade-3]"],
            
            ["display type", "CSS Display Module Level 3 [css-display-3]"],
            
            ["formatting context", "CSS Display Module Level 3 [css-display-3]"],
            
            ["inline-block", "CSS Display Module Level 3 [css-display-3]"],
            
            ["inline-table", "CSS Display Module Level 3 [css-display-3]"],
            
            ["mask positioning area", "CSS Masking Module Level 1 [css-masking-1]"],
            
            ["page", "CSS Paged Media Module Level 3 [css-page-3]"],
            
            ["page progression", "CSS Paged Media Module Level 3 [css-page-3]"],
            
            ["top", "CSS Positioned Layout Module Level 3 [css-position-3]"],
            
            ["region chain", "CSS Regions Module Level 1 [css-regions-1]"],
            
            ["fill-available size", "CSS Intrinsic & Extrinsic Sizing Module Level 3 [css-sizing-3]"],
            
            ["max-content size", "CSS Intrinsic & Extrinsic Sizing Module Level 3 [css-sizing-3]"],
            
            ["min-content size", "CSS Intrinsic & Extrinsic Sizing Module Level 3 [css-sizing-3]"],
            
            ["block flow direction", "CSS Writing Modes Level 3 [css-writing-modes-3]"],
            
            ["block size", "CSS Writing Modes Level 3 [css-writing-modes-3]"],
            
            ["block-axis", "CSS Writing Modes Level 3 [css-writing-modes-3]"],
            
            ["block-start", "CSS Writing Modes Level 3 [css-writing-modes-3]"],
            
            ["direction", "CSS Writing Modes Level 3 [css-writing-modes-3]"],
            
            ["inline base direction", "CSS Writing Modes Level 3 [css-writing-modes-3]"],
            
            ["inline size", "CSS Writing Modes Level 3 [css-writing-modes-3]"],
            
            ["ltr", "CSS Writing Modes Level 3 [css-writing-modes-3]"],
            
            ["principal writing mode", "CSS Writing Modes Level 3 [css-writing-modes-3]"],
            
            ["auto", "Cascading Style Sheets Level 2 Revision 1, [CSS21]"],
            
            ["height", "Cascading Style Sheets Level 2 Revision 1, [CSS21]"],
            
            ["overflow", "Cascading Style Sheets Level 2 Revision 1, [CSS21]"],
            
            ["page-break-after", "Cascading Style Sheets Level 2 Revision 1, [CSS21]"],
            
            ["page-break-before", "Cascading Style Sheets Level 2 Revision 1, [CSS21]"],
            
            ["page-break-inside", "Cascading Style Sheets Level 2 Revision 1, [CSS21]"],
            
            ["scroll", "Cascading Style Sheets Level 2 Revision 1, [CSS21]"]
        ]
    }  // https://www.w3.org/TR/css-break-3/  ==>  CSS Fragmentation Module Level 3   

// Generated and Replaced Content

    "CSS Generated Content Module Level 3": {
     
        /*
            CSS Generated Content Module Level 3                        WD  2016-06-02  https://www.w3.org/TR/css-content-3/
            
            CSS3 Generated and Replaced Content Module                  WD  2003-05-14  https://www.w3.org/TR/2003/WD-css3-content-20030514/
            
            12 Generated content, automatic numbering, and lists                        https://www.w3.org/TR/1998/REC-CSS2-19980512/generate.html    
        */
        
        properties: "bookmark-label, bookmark-level, bookmark-state, content, quotes, string-set",
        
        values: "closed, <content-list>, <custom-ident>, <image>, <integer>, none, normal, open, <string>, <url>",
        
        terms: "after, before, bookmark-label, bookmark-level, bookmark-state, bookmarks, close-quote, content, content(), contents, <content-list>, dotted, entry value, exit value, first, first-except, first-letter, last, leader(), marker, named string, no-close-quote, no-open-quote, none, normal, open-quote, <quote>, quotes, solid, space, start, string(), <string>, string-set, <target>, target-counter(), target-counters(), target-text(), text",
        
        "terms by reference": "#, *, +, ~ , ?, |, ::after, ::before, counter-increment, counter-reset, <counter-style>, <custom-ident>, display, ::first-letter, <image>, ::marker, originating element, <string>, :target, <url>, <uri>, white space",
        
        "terms by reference matrix" [
            
            ["#", "CSS Values and Units Module Level 3 [CSS-VALUES]"],
            
            ["*", "CSS Values and Units Module Level 3 [CSS-VALUES]"],
            
            ["+", "CSS Values and Units Module Level 3 [CSS-VALUES]"],
            
            [",", "CSS Values and Units Module Level 3 [CSS-VALUES]"],
            
            ["?", "CSS Values and Units Module Level 3 [CSS-VALUES]"],
            
            ["|", "CSS Values and Units Module Level 3 [CSS-VALUES]"],
            
            ["::after", "CSS Pseudo-Elements Module Level 4 [CSS-PSEUDO-4]"],
            
            ["::before", "CSS Pseudo-Elements Module Level 4 [CSS-PSEUDO-4"],
            
            ["counter-increment", "CSS Lists and Counters Module Level 3 [CSS3LIST]"],
            
            ["counter-reset", "CSS Lists and Counters Module Level 3 [CSS3LIST]"],
            
            ["<counter-style>", "CSS Counter Styles Level 3 [css-counter-styles-3]"],
            
            ["<custom-ident>", "CSS Values and Units Module Level 3 [CSS-VALUES]"],
            
            ["display", "Cascading Style Sheets Level 2 Revision 1 [CSS21]"],
            
            ["::first-letter", "CSS Pseudo-Elements Module Level 4 [CSS-PSEUDO-4]"],
            
            ["<image>", "CSS Image Values and Replaced Content Module Level 3 [CSS-IMAGES-3]"],
            
            ["::marker", "CSS Pseudo-Elements Module Level 4 [CSS-PSEUDO-4]"],
            
            ["originating element", "Selectors Level 4 [selectors-4]"],
            
            ["<string>", "CSS Values and Units Module Level 3 [CSS-VALUES]"],
            
            [":target", "Selectors Level 4 [selectors-4]"],
            
            ["<url>", "CSS Values and Units Module Level 3 [CSS-VALUES]"],
            
            ["<uri>", "Cascading Style Sheets Level 2 Revision 1 [CSS21]"],
            
            ["white space", " CSS Text Module Level [CSS3TEXT]"]
        ]
    }  // end ""CSS Generated Content Module Level 3" object definition [https://www.w3.org/TR/css-content-3/]
    
// Geometric Interfaces

    "Geometry Interfaces Module Level 1": {
        
        /*
            ED  2016-06-13  https://drafts.fxtf.org/geometry/
            CR  2014-11-25  https://www.w3.org/TR/2014/CR-geometry-1-20141125/
            WD  2014-09-18  https://www.w3.org/TR/2014/WD-geometry-1-20140918/
            LC  2014-06-26  https://www.w3.org/TR/2014/WD-geometry-1-20140626/
            FP  2014-05-27  https://www.w3.org/TR/2014/WD-geometry-1-20140522/
        */
        
        // No properties defined
        
        terms: "a, angle, array32, array64, associated bounding rectangle, b, bottom, bounds, c, d, determinant(), dommatrix(), DOMMatrix, DOMMatrixReadOnly, dompoint(), DOMPoint, DOMPointInit, DOMPointReadOnly, domquad(), DOMQuad, DOMRect, domrect(), DOMRectList, DOMRectReadOnly, e, f, flipx(), flipy(), height, index, inverse(), invert(), is2d(), isidentity(), item(), left, length, m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44, multiply(), multiply, multiplyby(), numberSequence, origin, originX, originY, originZ, other, p1, p2, p3, p4, point, post-multiply, pre-multiply, premultiplyby(), quadrilateral, rect, rectangle, right, rotate(), rotateaxisangle(), rotateaxisangleby(), rotateby(), rotatefromvector(), rotatefromvectorby(), scale(), scale, scale3dby(), scaleby(), scalenonuniform(), scalenonuniformby(), scaleX, scaleY, scaleZ, skewx(), skewxby(), skewy(), skewyby(), SVGMatrix, sx, sy, tofloat32array(), tofloat64array(), top, transformList, transformpoint(), translate(), translateby(), tx, ty, tz, w, width, x, x coordinate, y, y coordinate, z"
    }
    
// Grid layout
    
    "CSS Grid Layout Module 1": {
        
        /*
            ED  2016-06-15-https://drafts.csswg.org/css-grid/
            WD  2016-05-19 https://www.w3.org/TR/2016/WD-css-grid-1-20160519/
            WD  2015-09-17 https://www.w3.org/TR/2015/WD-css-grid-1-20150917/
            WD  2015-08-06 https://www.w3.org/TR/2015/WD-css-grid-1-20150806/
            WD  2015-03-17 https://www.w3.org/TR/2015/WD-css-grid-1-20150317/
            WD  2014-05-13 https://www.w3.org/TR/2014/WD-css-grid-1-20140513/
            WD  2014-01-23 https://www.w3.org/TR/2014/WD-css-grid-1-20140123/
            WD  2013-09-10 https://www.w3.org/TR/2014/WD-css-grid-1-20140123/
        */        
        
        properties: "grid, grid-auto-columns, grid-auto-flow, grid-auto-position, grid-auto-rows, grid-column, grid-column-end, grid-column-start, grid-row, grid-row-end, grid-row-start, grid-template, grid-template-areas, grid-template-columns, grid-template-rows",
        
        values: ",columns,dense,<grid-auto-columns,<grid-auto-flow>,<grid-auto-rows>,<grid-line>,<grid-line><grid-line><grid-line><grid-line><grid-line,<grid-line><grid-template>,<grid-template-columns>,<grid-template-rows>,<line-name-list>,<line-names>,none,rows,<string>,subgrid,<track-list>,<track-size> <line-names>,<track-size><track-size>",
        
        terms: "auto, auto-placement, auto-placement algorithm, auto-placement cursor, automatic column position, automatic column span, automatic grid position, automatic grid span, automatic position, automatic row position, automatic row span, automatic span, AvailableSpace, column, column axis, columns, <custom-ident>, definite column position, definite column span, definite grid position, definite grid span, definite position, definite row position, definite row span, definite span, dense, explicit grid, flexible length, <flex>, free space, grid, grid-area, grid-auto-columns, grid-auto-flow, grid-auto-position, grid-auto-rows, grid-column, grid-column-end, grid-column-start, <grid-line>, grid-placement property, grid-row, grid-row-end, grid-row-start, grid-template, grid-template-areas, grid-template-columns, <grid-template-columns>, grid-template-rows, <grid-template-rows>, grid area, grid cell, grid column, grid column line, grid container, grid formatting context, grid item, grid layout, grid line, grid placement, grid position, grid row, grid row line, grid span, Grid track, hypothetical 1fr size, implicit grid, implicit grid column, implicit grid row, implicit grid track, implicit named area, implicit named line, inline-grid, <integer>, <length>, <line-name-list>, <line-names>, max-content, MaxTrackSizingFunction, min-content, minmax(), MinTrackSizingFunction, named cell token, named grid area, named line, none, null cell token, occupied grid cell, order-modified grid order, participates in baseline alignment, <percentage>, placement, RemainingSpace, repeat(), row, row axis, rows, sizing function, span &&, SpanCount, <string>, subgrid, <track-breadth>, track list, <track-list>, trash token"
    }  // 2016-06-15-https://drafts.csswg.org/css-grid/  ==>  CSS Grid Layout Module Level 1  <==  CSS Grid Layout  <==  Grid Layout
    
    "CSS Grid Layout": {
        
        /*
            WD 2013-04-02 https://www.w3.org/TR/2013/WD-css3-grid-layout-20130402/
            WD 2012-11-06 https://www.w3.org/TR/2012/WD-css3-grid-layout-20121106/
            WD 2012-03-22 https://www.w3.org/TR/2012/WD-css3-grid-layout-20120322/
        */
    }
    
    "Grid Layout": {
        
        // WD 2011=04-07 https://www.w3.org/TR/2011/WD-css3-grid-layout-20110407/
    }
    
// Inline layout

    "CSS Inline Layout Module Level 3": {
        
        /*
            ED  2016-05-25  https://drafts.csswg.org/css-inline/
            WD  2016-05-24  https://www.w3.org/TR/2016/WD-css-inline-3-20160524/
            WD  2016-09-17  https://www.w3.org/TR/2015/WD-css-inline-3-20150917/
            FP  2014-12-18  https://www.w3.org/TR/2014/WD-css-inline-3-20141218/
        */
        
        properties: "initial-letter, initial-letter-align",
        
        values: "alphabetic, auto, hanging ,ideographic ,<integer> ,normal ,<number>",
        
        terms: "dropped initial, initial-letter, initial letter, initial-letter-align, <integer>, normal, <number>, raised initial, sunken initial"
        
        
    }  // https://drafts.csswg.org/css-inline/  ==>  CSS Inline Layout Module Level 3


// Line Grid

// Lists & Counters

    "CSS Lists and Counters Module Level 3": {
        
        /*
            ED  2016-06-15  https://drafts.csswg.org/css-lists-3/
            WD  2014-03-20  https://www.w3.org/TR/css-lists-3/
            WD  2011-05024  https://www.w3.org/TR/2011/WD-css3-lists-20110524/
        */    
        
    }  // https://www.w3.org/TR/css-lists-3/  ==>  CSS Lists and Counters Module Level 3  <==  CSS3 module: Lists
    
    "CSS3 module": Lists": {
        
        /*
            WD  2002-11-07  https://www.w3.org/TR/2002/WD-css3-lists-20021107
            WD  2002-02-20  https://www.w3.org/TR/2002/WD-css3-lists-20020220/
        */
        
    }  // https://www.w3.org/TR/2002/WD-css3-lists-20021107/  ==>  CSS3 module

// Masking

    "CSS Masking Module Level 1": {
        
        /*
            ED  2016-04-26  https://drafts.fxtf.org/css-masking-1/
            CR  2014-08-26  https://www.w3.org/TR/2014/CR-css-masking-1-20140826/
            LC  2014-05-22  https://www.w3.org/TR/2014/WD-css-masking-1-20140522/
            WD  2014-02-13  https://www.w3.org/TR/2014/WD-css-masking-1-20140213/
            LC  2013-10-29  https://www.w3.org/TR/2013/WD-css-masking-1-20131029/
        */
    }  // https://www.w3.org/TR/2014/CR-css-masking-1-20140826/  ==>  CSS Masking Module Level 1  <==  CSS Masking Level 1  <==  CSS Masking
    
    "CSS Masking Level 1": {
        
        //  WD  2013-06020  https://www.w3.org/TR/2013/WD-css-masking-20130620/
    }  // https://www.w3.org/TR/2013/WD-css-masking-20130620/  ==>  CSS Masking Level 1  <==  CSS Masking

    "CSS Masking": {
        
        properties: "clip, clip-path, clip-rule, mask, mask-border, mask-border-mode, mask-border-outset, mask-border-repeat, mask-border-slice, mask-border-source, mask-border-width, mask-clip, mask-composite, mask-image, mask-mode, mask-origin, mask-position, mask-repeat, mask-size, mask-type",
        
        values: "alpha,alpharect(),auto,<basic-shape>,<bg-size>,<clip-source>,<compositing-operator>,evenodd,fill,<geometry-box>,<image>luminance,<length>,<mask-border-mode>luminance,<mask-border-outset>,<mask-border-repeat>,<mask-border-slice>,<mask-border-source>,<mask-border-width>,<mask-layer>,<mask-reference>,<masking-mode>,no-clip,none,nonenonzero,<number>,<percentage>,<position>,repeat,<repeat-style>,round,space,stretch",
        
        terms: "add, alpha, border-box, <bottom>, clip, clip-path, clipPath, clipPathUnits, clipping path, clipping region, clip-rule, <clip-source>, <compositing-operator>, content-box, destination, evenodd, exclude, fill, fill-box, <geometry-box>, height, intersect, <left>, luminance, margin-box, mask, mask-border, mask border image, mask border image area, mask-border-mode, mask-border-outset, mask-border-repeat, mask-border-slice, mask-border-source, mask-border-width, mask-clip, mask-composite, maskContentUnits, mask-image, mask image, <masking-mode>, <mask-layer>, mask layer image, mask-mode, mask-origin, mask painting area, mask-position, mask positioning area, <mask-reference>, mask-repeat, mask-size, <mask-source>, mask-type, maskUnits, match-source, no-clip, nonzero, objectBoundingBox, padding-box, rect(), <right>, source, stroke bounding box, stroke-box, subtract, <top>, <url>, userSpaceOnUse, view-box, width, x, y"
    }  // https://www.w3.org/TR/2012/WD-css-masking-20121115/  ==>  CSS Masking
    
// Media Queries

    "Media Queries": {
        
        /*
            REC 2012-06-19	https://www.w3.org/TR/css3-mediaqueries/
            PR  2012-04-26	https://www.w3.org/TR/2012/PR-css3-mediaqueries-20120426/
            ED  2012-04-13  https://drafts.csswg.org/mediaqueries-3/
            CR  2010-07-27	https://www.w3.org/TR/2010/CR-css3-mediaqueries-20100727/
            CR  2009-09-15	https://www.w3.org/TR/2010/CR-css3-mediaqueries-20100727/
            CR  2009-04-23	https://www.w3.org/TR/2009/CR-css3-mediaqueries-20090423/
            WD  2008-10-15	https://www.w3.org/TR/2008/WD-css3-mediaqueries-20081015/
            CR  2007-06-06	https://www.w3.org/TR/2007/CR-css3-mediaqueries-20070606/
            CR  2002-07-08	https://www.w3.org/TR/2002/CR-css3-mediaqueries-20020708/
            WD  2002-01-23  https://www.w3.org/TR/2002/WD-css3-mediaqueries-20020123/
            WD  2001-05-17  https://www.w3.org/TR/2001/WD-css3-mediaqueries-20010517/
            WD  2001-04-04  https://www.w3.org/TR/2001/WD-css3-mediaqueries-20010404/
        */
        
        "media features": "aspect-ratio, color, color-index, device-aspect-ratio, device-height, device-width, grid, height, monochrome, orientation, resolution, scan, width",
    }


// Motion Path


// Namespaces


// Overflow


// Paged Media


// Page Floats


// Pseudo-Elements


// Round Display


// Ruby


// Scoping


// Selectors Level 4

    "Selectors Level 4": {
        
        terms: "||, >>, +, >, ~, absolutize a relative selector, absolutize a relative selector list, active, :active, :any-link, <attribute-selector>, attribute selector, <attr-matcher>, <attr-modifier>, :blank, :checked, child combinator, class selector, <class-selector>, column combinator, combinator, <combinator>, <complex-selector>, complex selector, <complex-selector-list>, compound selector, <compound-selector>, <compound-selector-list>, :current(), :current, declared, :default, descendant combinator, :dir(), :disabled, document language, :drop(), :drop, dynamic, dynamic profile, :empty, :enabled, evaluate a selector, featureless, :first-child, :first-of-type, :focus, :focus-within, following-sibling combinator, functional pseudo-class, :future, :has(), host language, :hover, ID selector, <id-selector>, :indeterminate, :in-range, :invalid, invalid, definition of, value for :drop(), invalid selector, :lang(), language, language range, :last-child, :last-of-type, :link, list of complex selectors, list of compound selectors, list of selectors, list of simple selectors, match, match a selector against an element, match a selector against a tree, :matches(), next-sibling combinator, :not(), <ns-prefix>, :nth-child(), :nth-column(), :nth-last-child(), :nth-last-column(), :nth-last-of-type(), :nth-of-type(), :only-child, :only-of-type, :optional, originating element, :out-of-range, parse a relative selector, parse a selector, :past, :paused, :placeholder-shown, :playing, pseudo-class, <pseudo-class-selector>, pseudo-element, <pseudo-element-selector>, :read-only, :read-write, relative, relative selector, <relative-selector>, <relative-selector-list>, :required, :root, :scope, scope, scope-contained, scope-contained selector, scoped selector, :scope element, scope-filtered, scope-filtered selector, scope-relative, scoping element, scoping method, scoping root, selector, selector list, <selector-list>, selector match list, selector scoping method, simple selector, <simple-selector>, <simple-selector-list>, specificity, static, static profile, structural pseudo-classes, subject, subject of a selector, :target, type selector, <type-selector>, universal selector, :user-invalid, :valid, valid, virtual scoping root, :visited, White space, <wq-name>",  // https://drafts.csswg.org/selectors-4/#index-defined-here
        
        "terms by reference": "#, *, <an+b>, ?, |, ||, a, ::after, <any-value>, area, ascii case-insensitive, ::before, box tree, button, css qualified name, <column-token>, <dash-match-token>, default namespace, descendant, direction, display, div, Document, DocumentFragment, em, ::first-letter, ::first-line, fragment, <function-, <hash-token>, :host, :host-context(), html, <ident-token>, <ident>, identifier, <include-match-token>, inclusive sibling, input, label, li, link, meta, object, ol, p, +, pre, <prefix-match-token>, q, quirks mode, root, shadow-including descendant, shadow-including tree order, shadow host, shadow tree, span, <string-token>, <string>, <substring-match-token>, <suffix-match-token>, tree, visibility,", https://drafts.csswg.org/selectors-4/#index-defined-elsewhere
        
        "terms by reference matrix": [
            
            ["#", "CSS Values and Units Module Level 3"],

            ["*", "CSS Values and Units Module Level 3"],
            
            ["<an+b>", "CSS Syntax Module Level 3"],
            
            ["?", "CSS Values and Units Module Level 3"],
            
            ["|", "CSS Values and Units Module Level 3"],
            
            ["||", "CSS Values and Units Module Level 3"],
            
            ["a", "Scalable Vector Graphics 1.1"],
            
            ["::after", "CSS Pseudo-Elements Module Level 4"],
            
            ["<any-value>", "CSS Syntax Module Level 3"],
            
            ["area", "HTML Standard. Living Standard"],
            
            ["ascii case-insensitive", "DOM Standard"],
            
            ["::before", "CSS Pseudo-Elements Module Level 4"],
            
            ["box tree", "CSS Display Module Level 3"],
            
            ["button", "HTML Standard. Living Standard"],
            
            ["css qualified name", "CSS Namespaces Module Level 3"],
            
            ["<column-token>", "CSS Syntax Module Level 3"],
            
            ["<dash-match-token>", "CSS Syntax Module Level 3"],
            
            ["default namespace", "CSS Namespaces Module Level 3"],
            
            ["descendant", "DOM Standard"],
            
            ["direction", "CSS Writing Modes Level 3"],
            
            ["display", "Cascading Style Sheets Level 2 Revision"],
            
            ["div", "HTML Standard. Living Standard"],
            
            ["Document", "HTML Standard. Living Standard"],
            
            ["DocumentFragment", "DOM Standard"],
            
            ["em", "HTML Standard. Living Standard"],
            
            ["::first-letter", "CSS Pseudo-Elements Module Level 4"],
            
            ["::first-line", "CSS Pseudo-Elements Module Level 4"],
            
            ["fragment", "URL Standard"],
            
            ["<function-", "CSS Syntax Module Level 3"],
            
            ["<hash-token>", "CSS Syntax Module Level 3"],
            
            [":host", "CSS Scoping Module Level 1"],
            
            [":host-context()", "CSS Scoping Module Level 1"],
            
            ["html", "HTML Standard. Living Standard"],
            
            ["<ident-token>", "CSS Syntax Module Level 3"],
            
            ["<ident>", "CSS Values and Units Module Level 3"],
            
            ["identifier", "CSS Syntax Module Level 3"],
            
            ["<include-match-token>", "CSS Syntax Module Level 3"],
            
            ["inclusive sibling", "DOM Standard"],
            
            ["input", "HTML Standard. Living Standard"],
            
            ["label", "HTML Standard. Living Standard"],
            
            ["li", "HTML Standard. Living Standard"],
            
            ["link", "Scalable Vector Graphics 1.1"],
            
            ["meta", "HTML Standard. Living Standard"],
            
            ["object", "HTML Standard. Living Standard"],
            
            ["ol", "HTML Standard. Living Standard"],
            
            ["p", "HTML Standard. Living Standard"],
            
            ["+", "CSS Values and Units Module Level 3"],
            
            ["pre", "HTML Standard. Living Standard"],
            
            ["<prefix-match-token>", "CSS Syntax Module Level 3"],
            
            ["q", "HTML Standard. Living Standard"],
            
            ["quirks mode", "DOM Standard"],
            
            ["root", "DOM Standard"],
            
            ["shadow-including descendant", "DOM Standard"],
            
            ["shadow-including tree order", "DOM Standard"],
            
            ["shadow host", "DOM Standard"],
            
            ["shadow tree", "DOM Standard"],
            
            ["span", "HTML Standard. Living Standard"],
            
            ["<string-token>", "CSS Syntax Module Level 3"],
            
            ["<string>", "CSS Values and Units Module Level 3"],
            
            ["<substring-match-token>", "CSS Syntax Module Level 3"],
            
            ["<suffix-match-token>", "CSS Syntax Module Level 3"],
            
            ["tree", "DOM Standard"],
            
            ["visibility", "Cascading Style Sheets Level 2 Revision"]
        ]  // https://drafts.csswg.org/selectors-4/#index-defined-elsewhere
    },  // https://drafts.csswg.org/selectors-4/  ==>  Selectors Level 4

// Shapes


// Sizing


// Speech


// SVG Integrations


// Syntax

    "CSS Syntax Module Level 3": {
      
        terms: "A, An+B, <an+b>, are a valid escape, ASCII case-insensitive, <at-keyword-token>, at-rule, B, <bad-string-token>, <bad-url-token>, <CDC-token>, <CDO-token>, @charset, check if three code points would start an identifier, check if three code points would start a number, check if two code points are a valid escape, code point, <colon-token>, <column-token>, <comma-token>, component value, consume a component value, consume a declaration, consume a function, consume a list of declarations, consume a list of rules, consume a name, consume an at-rule, consume an escaped code point, consume an ident-like token, consume a number, consume a numeric token, consume a qualified rule, consume a simple block, consume a string token, consume a token, consume a unicode-range token, consume a url token, consume the next input token, consume the remnants of a bad url, convert a string to a number, current input code point, current input token, <dash-match-token>, <dashndashdigit-ident>, declaration, <declaration-list>, decode, <delim-token>, determine the fallback encoding, digit, <dimension-token>, ending token, end of the range, environment encoding, EOF code point, <EOF-token>, escaping, function, <function-token>, get an encoding, <hash-token>, hex digit, identifier, <ident-token>, <include-match-token>, <integer>, letter, lowercase letter, maximum allowed code point, name code point, name-start code point, <ndashdigit-dimension>, <ndashdigit-ident>, <ndash-dimension>, <n-dimension>, newline, next input code point, next input token, non-ASCII code point, non-printable code point, <number-token>, parse a component value, parse a CSS stylesheet, parse a declaration, parse a list of component values, parse a list of declarations, parse a list of rules, parse a rule, parse a stylesheet, parse error, <percentage-token>, <prefix-match-token>, preserved tokens, qualified rule, reconsume the current input code point, reconsume the current input token, <rule-list>, <semicolon-token>, <signed-integer>, <signless-integer>, simple block, start of the range, starts with an identifier, starts with a number, starts with a valid escape, start with an identifier, start with a number, <string-token>, style rule, <stylesheet>, <substring-match-token>, <suffix-match-token>, surrogate code point, <{-token>, <)-token>, <}-token>, <]-token>, <(-token>, <[-token>, top-level flag, <unicode-range-token>, uppercase letter, <url-token>, whitespace, <whitespace-token>, would start an identifier, would start a number"  
    },  // https://www.w3.org/TR/css-syntax-3/  ==>  CSS Syntax Module Level 3


// Tables


// Template layout


// Text, Text Effects, International Layout

    "CSS Text Module Level 3": {
        
        /*
            CSS Text Module Level 3		2013-10-10 LCWD [https://www.w3.org/TR/css-text-3/]
        				                2012-11-13   WD [https://www.w3.org/TR/2012/WD-css3-text-20121113/]
        
            CSS Text Level 3		    2012-08-14   WD [https://www.w3.org/TR/2012/WD-css3-text-20120814/]
                        				2012-01-19   WD [https://www.w3.org/TR/2012/WD-css3-text-20120119/]
                        				2011-09-01   WD [https://www.w3.org/TR/2011/WD-css3-text-20110901/]
                        				2011-04-12   WD [https://www.w3.org/TR/2011/WD-css3-text-20110412/]
                        				2011-02-15   WD [https://www.w3.org/TR/2011/WD-css3-text-20110215/]
                        				2010-10-05   WD [https://www.w3.org/TR/2010/WD-css3-text-20101005/]
                        				2007-03-06   WD	[https://www.w3.org/TR/2007/WD-css3-text-20070306/]
            
            CSS3 Text Effects Module	2005-06-27   WD [https://www.w3.org/TR/2005/WD-css3-text-20050627/]
            
            CSS3 Text Module		    2003-05-14   CR [https://www.w3.org/TR/2003/CR-css3-text-20030514/]
            
            CSS3 module: text		    2003-02-26   WD [https://www.w3.org/TR/2003/WD-css3-text-20030226/]
                        				2002-10-24   WD [https://www.w3.org/TR/2002/WD-css3-text-20021024/]
                        				2002-05-15   WD [https://www.w3.org/TR/2002/WD-css3-text-20020515/]
                        				2001-05-17   WD [https://www.w3.org/TR/2001/WD-css3-text-20010517/]
            
            International Layout	    1999-09-10   WD [https://www.w3.org/TR/1999/WD-i18n-format-19990910/]
                    				    19990726     WD	[https://www.w3.org/TR/1999/WD-i18n-format-19990726/]
            
            International Layout in CSS 1999-03-22   WD [https://www.w3.org/TR/1999/WD-i18n-format-19990322/]
            				            19990127     WD [https://www.w3.org/TR/1999/WD-i18n-format-19990127/]
        */        
        
        terms: "allow-end, authoring tool, auto, break-all, break-word, capitalize, center, character, collapsible, content language, cursive script, distribute, each-line, end, expansion opportunity, first, forced line break, force-end, full-width, grapheme cluster, hang, hanging, hyphenate, hyphenation, hyphenation opportunity, hyphens, inter-word, justify, text-align, keep-all, last, left, <length>, letter, letter-spacing, line break, line-break, line breaking, loose, lowercase, manual, match-parent, none, normal, nowrap, overflow-wrap, <percentage>, pre, pre-line, preserved, pre-wrap, renderer, right, segment break, soft wrap break, soft wrap opportunity, start, start end, stop or comma, strict, style sheet, as conformance class, tab-size, tab stop, text-align, text-align-last, text-indent, text-justify, text-transform, tracking, uppercase, white-space, word-break, word separator, word-separator character, word-spacing, word-wrap, wrap, wrapping",
        
        properties: "hanging-punctuation, hyphens, letter-spacing, line-break, overflow-wrap, tab-size, text-align, text-align-last, text-indent, text-justify, text-transform, white-space, word-break, word-spacing, word-wrap"
    },  // https://www.w3.org/TR/css-text-3/  ==>  CSS Text Module Level 3  <== CSS Text Level 3  <== CSS3 Text Effects Module  <==  CSS3 Text Module  <==  CSS3 module: text  <==  International Layout  <==  International Layout in CSS

    "CSS Text Level 3": {
        
        properties: "hanging-punctuation, hyphens, letter-spacing, line-break, overflow-wrap/word-wrap, tab-size, text-align-last, text-align, text-decoration-color, text-decoration-line, text-decoration-skip, text-decoration, text-decoration-style, text-emphasis-color, text-emphasis-position, text-emphasis, text-emphasis-style, text-indent, text-justify, text-shadow, text-transform, text-underline-position, white-space, word-break, word-spacing"
    },  // https://www.w3.org/TR/2012/WD-css3-text-20120814/  ==>  CSS Text Level 3  <== CSS3 Text Effects Module  <==  CSS3 Text Module  <==  CSS3 module: text  <==  International Layout  <==  International Layout in CSS

    "CSS3 Text Effects Module": {
        
        properties: "hyphenate, letter-spacing, text-align, text-align-last, text-justify, text-kashida-space, text-wrap, white-space-collapse, word-break, word-spacing, word-wrap"
    },  // https://www.w3.org/TR/2005/WD-css3-text-20050627/  ==>  CSS3 Text Effects Module  <==  CSS3 Text Module  <==  CSS3 module: text  <==  International Layout  <==  International Layout in CSS

    "CSS3 Text Module": {
        
        terms: "",
        
        properties: "all-space-treatment, block-progression, direction, glyph-orientation-horizontal, glyph-orientation-vertical, hanging-punctuation, kerning-mode, kerning-pair-threshold, letter-spacing, line-break, linefeed-treatment, line-grid, line-grid-mode, line-grid-progression, max-font-size, min-font-size, punctuation-trim, text-align, text-align-last, text-autospace, text-blink, text-combine, text-decoration, text-indent, text-justify, text-justify-trim, text-kashida-space, text-line-through, text-line-through-color, text-line-through-mode, text-line-through-style, text-line-through-width, text-overflow, text-overflow-ellipsis, text-overflow-mode, text-overline, text-overline-color, text-overline-mode, text-overline-style, text-overline-width, text-script, text-shadow, text-transform, text-underline, text-underline-color, text-underline-mode, text-underline-position, text-underline-style, text-underline-width, unicode-bidi, white-space, white-space-treatment, word-break, word-break-cjk, word-break-inside, word-spacing, wrap-option, writing-mode"    
    },  //  https://www.w3.org/TR/2003/CR-css3-text-20030514/  ==>  CSS3 Text Module  <==  CSS3 module: text  <==  International Layout  <==  International Layout in CSS

    "CSS3 module: text": {
        
        properties: "all-space-treatment, direction, glyph-orientation-horizontal, glyph-orientation-vertical, hanging-punctuation, kerning-mode, kerning-pair-threshold, letter-spacing, line-break, linefeed-treatment, line-grid, line-grid-mode, line-grid-progression, max-font-size, min-font-size, punctuation-trim, text-align, text-align-last, text-autospace, text-blink, text-block-indent, text-combine, text-decoration, text-first-indent, text-indent, text-justify, text-justify-trim, text-kashida-space, text-line-through, text-line-through-color, text-line-through-mode, text-line-through-style, 'text-line-through-width', text-overflow, text-overflow-ellipsis, text-overflow-mode, text-overline, text-overline-color, text-overline-mode, text-overline-style, 'text-overline-width', text-script, text-shadow, text-transform, text-underline, text-underline-color, text-underline-mode, text-underline-position, text-underline-style, 'text-underline-width', unicode-bidi, white-space, white-space-treatment, word-break, word-break-cjk, word-break-inside, word-spacing, wrap-option, writing-mode"
    },  //  https://www.w3.org/TR/2003/WD-css3-text-20030226/  ==>  CSS3 module: text  <==  International Layout  <==  International Layout in CSS

    "International Layout": {
        
        properties: "font-emphasize, font-emphasize-position, font-emphasize-style, layout-grid, layout-grid-char, layout-grid-line, layout-grid-mode, layout-grid-type, line-break, punctuation-trim, punctuation-wrap, ruby-align, ruby-overhang, ruby-position, text-autospace, text-combine, text-fit, text-justify, text-justify-trim, text-kashida, word-break"
    },  //  https://www.w3.org/TR/1999/WD-i18n-format-19990910/  ==>  International Layout  <==  International Layout in CSS

    "International Layout in CSS": {
        
       properties: "font-emphasize, font-emphasize-position, font-emphasize-style, layout-flow, layout-grid, layout-grid-char, layout-grid-line, layout-grid-mode, layout-grid-type, line-break, punctuation-trim, punctuation-wrap, ruby-align, ruby-overhang, ruby-position, text-autospace, text-combine, text-fit, text-justify, text-justify-trim, text-kashida, word-break" 
    },  //  https://www.w3.org/TR/1999/WD-i18n-format-19990322/  ==>  International Layout in CSS

// Text decorations


// Transform


// Transitions


// User Interface


// Values and Units

    "Values and Units": {
        
        terms: "!, #, &&, *, |, ||, {A}, "{A, B}", absolute length, <angle>, <attr-fallback>, <attr-name>, attr(), bearing angle, calc(), <calc-product>, <calc-sum>, <calc-value>, ch, cm, CSS-wide keywords, <custom-ident>, deg, dimension, <dimension>, dpcm, dpi, dppx, em, ex, font-relative lengths, <frequency>, functional notation, grad, Hz, identifier, in, integer, <integer>, kHz, <length>, mm, ms, number, <number>, pc, percentage, <percentage>, physical units, pixel unit, +, pt, px, q, ?, rad, reference pixel, relative length, rem, <resolution>, resolved type, s, string, <string>, <time>, toggle(), <toggle-value>, turn, <type-or-unit>, URL, <url-modifier>, <url>, vh, viewport-percentage lengths, visual angle unit, vmax, vmin, vw", // also comma (,)
        
        "terms by reference": ">, +, actual value, animation, animation-name, animation-timing-function, ascii case-insensitive, auto, background, background-attachment, background-position, background-position, border-collapse, border-color, border-width, <border-width>, box-shadow, center, color, <color>, component value, computed value, consume a url token, currentcolor, default, <dimension-token>, disc, ease-in, ease-out, font, font-family, font-size, function, <function-token>, <ident-token>, <ident>, image-resolution, <image>, @import, in, inherit, inherited value, initial, linear-gradient(), <number-token>, orphans, outline-color, overflow, padding-top, <percentage-token>, <position>, rgba(), shorthand, shorthand property, <single-timing-function>, square, <string-token>, text-align, text-decoration, text-shadow, unset, <url-token>, used value, width",
        
        "terms by reference matrix": [
            
            [">", "Selectors Level 4"],
            
            ["+", "Selectors Level 4"],
            
            ["actual value", "CSS Cascading and Inheritance Level 4"],
            
            ["animation", "CSS Animations Module Level 1"],
            
            ["animation-name", "CSS Animations Module Level 1"],
            
            ["animation-timing-function", "CSS Animations Module Level 1"],
            
            ["ascii case-insensitive", "Document Object Model"],
            
            ["auto", "CSS Overflow Module Level 3"],
            
            ["background", "CSS Backgrounds and Borders Module Level 3"],
            
            ["background-attachment", "CSS Backgrounds and Borders Module Level 3"],
            
            ["background-position", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["background-position", "CSS Backgrounds and Borders Module Level 3"],
            
            ["border-collapse", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["border-color", "CSS Backgrounds and Borders Module Level 3"],
            
            ["border-width", "CSS Backgrounds and Borders Module Level 3"],
            
            ["<border-width>", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["box-shadow", "CSS Backgrounds and Borders Module Level 3"],
            
            ["center", "CSS Text Module Level 3"],
            
            ["color", "Compositing and Blending Level 1"],
            
            ["<color>", "CSS Color Module Level 3"],
            
            ["component value", "CSS Syntax Module Level 3"],
            
            ["computed value", "CSS Cascading and Inheritance Level 4"],
            
            ["consume a url token", "CSS Syntax Module Level 3"],
            
            ["currentcolor", "CSS Color Module Level 4"],
            
            ["default", "CSS Cascading and Inheritance Level 4"],
            
            ["<dimension-token>", "CSS Syntax Module Level 3"],
            
            ["disc", "CSS Counter Styles Level 3"],
            
            ["ease-in", "CSS Transitions Module Level 1"],
            
            ["ease-out", "CSS Transitions Module Level 1"],
            
            ["font", "CSS Fonts Module Level 3"],
            
            ["font-family", "CSS Fonts Module Level 3"],
            
            ["font-size", "CSS Fonts Module Level 3"],
            
            ["function", "CSS Syntax Module Level 3"],
            
            ["<function-token>", "CSS Syntax Module Level 3"],
            
            ["<ident-token>", "CSS Syntax Module Level 3"],
            
            ["<ident>", "Media Queries Level 4"],
            
            ["image-resolution", "CSS Image Values and Replaced Content Module Level 3"],
            
            ["<image>", "CSS Image Values and Replaced Content Module Level 3"],
            
            ["@import", "CSS Cascading and Inheritance Level 4"],
            
            ["in", "Filter Effects Level 1"],
            
            ["inherit", "CSS Cascading and Inheritance Level 4"],
            
            ["inherited value", "CSS Cascading and Inheritance Level 4"],
            
            ["initial", "CSS Cascading and Inheritance Level 4"],
            
            ["linear-gradient()", "CSS Image Values and Replaced Content Module Level 3"],
            
            ["<number-token>", "CSS Syntax Module Level 3"],
            
            ["orphans", "CSS Backgrounds and Borders Module Level 3"],
            
            ["outline-color", "CSS Basic User Interface Module Level 3"],
            
            ["overflow", "CSS Overflow Module Level 3"],
            
            ["padding-top", "Cascading Style Sheets Level 2 Revision 1"],
            
            ["<percentage-token>", "CSS Syntax Module Level 3"],
            
            ["<position>", "CSS Backgrounds and Borders Module Level 3"],
            
            ["rgba()", "CSS Color Module Level 4"],
            
            ["shorthand", "CSS Cascading and Inheritance Level 4"],
            
            ["shorthand property", "CSS Cascading and Inheritance Level 4"],
            
            ["<single-timing-function>", "CSS Animations Module Level 1"],
            
            ["square", "CSS Counter Styles Level 3"],
            
            ["<string-token>", "CSS Syntax Module Level 3"],
            
            ["text-align", "CSS Text Module Level 3"],
            
            ["text-decoration", "CSS Text Decoration Module Level 3"],
            
            ["text-shadow", "CSS Text Decoration Module Level 3"],
            
            ["unset", "CSS Cascading and Inheritance Level 4"],
            
            ["<url-token>", "CSS Syntax Module Level 3"],
            
            ["used value", "CSS Cascading and Inheritance Level 4"],
            
            ["width", "Cascading Style Sheets Level 2 Revision 1"]
        ]
            
    },  
    
// Variables


// Will Change


// Writing Modes



    
    window.css21 = css21;
    
}()); // end IIFE