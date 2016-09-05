'use strict';

let html5 = {
    
    /* Reference:
    
       1. http://reference.sitepoint.com/html
       
    */
    
    "sitepoint HTML Reference": {
        
        schema: {
            
            "HTML Elements": {
                
            }
            
            "HTML Microformats": {
                
            }
            
            "HTML Common Attributes": {
                
            }
            
            "HTML Concepts": {
                
            }
            
            "HTML Extras": {
                
            }
            
            "HTML Examples": {
                
            }
            
            
        } // end "schema" object
    } // end "sitepoint" object
    
    "WHATWG HTML5": {
        
        "attributes": "",
        
        "attribute": [  /* https://html.spec.whatwg.org/#attributes-3 ~ RegExp: ["$1", "$2", "$3", "$4", [\n\n    ["HTML The Living Standard; WHATWG", "", "", ""],\n\n    ["", "", ""]]\n],\n */
            
            ["Attribute", "Element(s)", "Description", "Value", "Reference: Citation | Title/ Section Heading | Abstract | URL"],
            
            ["abbr", "th", "Alternative label to use for the header cell when referencing the cell in other contexts", "Text*", [
            
                ["HTML The Living Standard; WHATWG", "", "The th element may have an abbr content attribute specified. Its value must be an alternative label for the header cell, to be used when referencing the cell in other contexts (e.g. when describing the header cells that apply to a data cell).", "https://html.spec.whatwg.org/#attr-th-abbr"],
            
                ["", "", ""]]
            ],
            
            ["accept", "input", "Hint for expected file type in file upload controls", "Set of comma-separated tokens* consisting of valid MIME types with no parameters or audio/*, video/*, or image/*", [
            
                ["HTML The Living Standard; WHATWG", "", "The accept attribute may be specified to provide user agents with a hint of what file types will be accepted.", "https://html.spec.whatwg.org/#attr-input-accept"],
            
                ["", "", ""]]
            ],
            
            ["accept-charset", "form", "Character encodings to use for form submission", "Ordered set of unique space-separated tokens, ASCII case-insensitive, consisting of labels of ASCII-compatible encodings*", [
            
                ["HTML The Living Standard; WHATWG", "", "The accept-charset attribute gives the character encodings that are to be used for the submission.", "https://html.spec.whatwg.org/#attr-form-accept-charset"],
            
                ["", "", ""]]
            ],
            
            ["accesskey", "HTML elements", "Keyboard shortcut to activate or focus element", "Ordered set of unique space-separated tokens, case-sensitive, consisting of one Unicode code point in length", [
            
                ["HTML The Living Standard; WHATWG", "6.5.2 The accesskey attribute", "All HTML elements may have the accesskey content attribute set. The accesskey attribute's value is used by the user agent as a guide for creating a keyboard shortcut that activates or focuses the element.", "https://html.spec.whatwg.org/#the-accesskey-attribute"],
            
                ["", "", ""]]
            ],
            
            ["action", "form", "URL to use for form submission", "Valid non-empty URL potentially surrounded by spaces", [
            
                ["HTML The Living Standard; WHATWG", "4.10.19.6 Form submission", "", "https://html.spec.whatwg.org/#attr-fs-action"],
            
                ["", "", ""]]
            ],
            
            ["allowfullscreen", "iframe", "Whether to allow the iframe's contents to use requestFullscreen()", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "The allowfullscreen attribute is a boolean attribute. When specified, it indicates that Document objects in the iframe element's browsing context are to be allowed to use requestFullscreen().", "https://html.spec.whatwg.org/#attr-iframe-allowfullscreen"],
            
                ["", "", ""]]
            ],
            
            ["alt", "area; img; input", "Replacement text for use when images are not available", "Text*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["async", "script", "Execute script when available, without blocking", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["autocomplete", "form", "Default setting for autofill feature for controls in the form", ""on"; "off"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["autocomplete", "input; select; textarea", "Hint for form autofill feature", "Autofill field name and related tokens*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["autofocus", "button; input; keygen; select; textarea", "Automatically focus the form control when the page is loaded", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["autoplay", "audio; video", "Hint that the media resource can be started automatically when the page is loaded", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["challenge", "keygen", "String to package with the generated and signed public key", "Text", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["charset", "meta", "Character encoding declaration", "Encoding label*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["charset", "script", "Character encoding of the external script resource", "Encoding label*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["checked", "menuitem; input", "Whether the command or control is checked", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["cite", "blockquote; del; ins; q", "Link to the source of the quotation or more information about the edit", "Valid URL potentially surrounded by spaces", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["class", "HTML elements", "Classes to which the element belongs", "Set of space-separated tokens", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["cols", "textarea", "Maximum number of characters per line", "Valid non-negative integer greater than zero", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["colspan", "td; th", "Number of columns that the cell is to span", "Valid non-negative integer greater than zero", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["content", "meta", "Value of the element", "Text*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["contenteditable", "HTML elements", "Whether the element is editable", ""true"; "false"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["contextmenu", "HTML elements", "The element's context menu", "ID*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["controls", "audio; video", "Show user agent controls", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["coords", "area", "Coordinates for the shape to be created in an image map", "Valid list of floating-point numbers*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["crossorigin", "audio; img; link; script; video", "How the element handles crossorigin requests", ""anonymous"; "use-credentials"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["data", "object", "Address of the resource", "Valid non-empty URL potentially surrounded by spaces", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["datetime", "del; ins", "Date and (optionally) time of the change", "Valid date string with optional time", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["datetime", "time", "Machine-readable value", "Valid month string, valid date string, valid yearless date string, valid time string, valid local date and time string, valid time-zone offset string, valid global date and time string, valid week string, valid non-negative integer, or valid duration string", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["default", "menuitem", "Mark the command as being a default command", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["default", "track", "Enable the track if no other text track is more suitable", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["defer", "script", "Defer script execution", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["dir", "HTML elements", "The text directionality of the element", ""ltr"; "rtl"; "auto"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["dir", "bdo", "The text directionality of the element", ""ltr"; "rtl"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["dirname", "input; textarea", "Name of form field to use for sending the element's directionality in form submission", "Text*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["disabled", "button; menuitem; fieldset; input; keygen; optgroup; option; select; textarea", "Whether the form control is disabled", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["download", "a; area", "Whether to download the resource instead of navigating to it, and its file name if so", "Text", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["draggable", "HTML elements", "Whether the element is draggable", ""true"; "false"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["dropzone", "HTML elements", "Accepted item types for drag-and-drop", "Unordered set of unique space-separated tokens, ASCII case-insensitive, consisting of accepted types and drag feedback*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["enctype", "form", "Form data set encoding type to use for form submission", ""application/x-www-form-urlencoded"; "multipart/form-data"; "text/plain"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["for", "label", "Associate the label with form control", "ID*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["for", "output", "Specifies controls from which the output was calculated", "Unordered set of unique space-separated tokens, case-sensitive, consisting of IDs*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["form", "button; fieldset; input; keygen; label; object; output; select; textarea", "Associates the control with a form element", "ID*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["formaction", "button; input", "URL to use for form submission", "Valid non-empty URL potentially surrounded by spaces", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["formenctype", "button; input", "Form data set encoding type to use for form submission", ""application/x-www-form-urlencoded"; "multipart/form-data"; "text/plain"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["formmethod", "button; input", "HTTP method to use for form submission", ""GET"; "POST"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["formnovalidate", "button; input", "Bypass form control validation for form submission", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["formtarget", "button; input", "Browsing context for form submission", "Valid browsing context name or keyword", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["headers", "td; th", "The header cells for this cell", "Unordered set of unique space-separated tokens, case-sensitive, consisting of IDs*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["height", "canvas; embed; iframe; img; input; object; video", "Vertical dimension", "Valid non-negative integer", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["hidden", "HTML elements", "Whether the element is relevant", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["high", "meter", "Low limit of high range", "Valid floating-point number*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["href", "a; area", "Address of the hyperlink", "Valid URL potentially surrounded by spaces", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["href", "link", "Address of the hyperlink", "Valid non-empty URL potentially surrounded by spaces", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["href", "base", "Document base URL", "Valid URL potentially surrounded by spaces", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["hreflang", "a; link", "Language of the linked resource", "Valid BCP 47 language tag", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["http-equiv", "meta", "Pragma directive", "Text*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["icon", "menuitem", "Icon for the command", "Valid non-empty URL potentially surrounded by spaces", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["id", "HTML elements", "The element's ID", "Text*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["inputmode", "input; textarea", "Hint for selecting an input modality", ""verbatim"; "latin"; "latin-name"; "latin-prose"; "full-width-latin"; "kana"; "kana-name"; "katakana"; "numeric"; "tel"; "email"; "url"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["ismap", "img", "Whether the image is a server-side image map", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["itemid", "HTML elements", "Global identifier for a microdata item", "Valid URL potentially surrounded by spaces", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["itemprop", "HTML elements", "Property names of a microdata item", "Unordered set of unique space-separated tokens, case-sensitive, consisting of valid absolute URLs, defined property names, or text*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["itemref", "HTML elements", "Referenced elements", "Unordered set of unique space-separated tokens, case-sensitive, consisting of IDs*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["itemscope", "HTML elements", "Introduces a microdata item", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["itemtype", "HTML elements", "Item types of a microdata item", "Unordered set of unique space-separated tokens, case-sensitive, consisting of valid absolute URL*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["keytype", "keygen", "The type of cryptographic key to generate", "Text*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["kind", "track", "The type of text track", ""subtitles"; "captions"; "descriptions"; "chapters"; "metadata"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["label", "menuitem; menu; optgroup; option; track", "User-visible label", "Text", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["lang", "HTML elements", "Language of the element", "Valid BCP 47 language tag or the empty string", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["list", "input", "List of autocomplete options", "ID*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["loop", "audio; video", "Whether to loop the media resource", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["low", "meter", "High limit of low range", "Valid floating-point number*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["manifest", "html", "Application cache manifest", "Valid non-empty URL potentially surrounded by spaces", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["max", "input", "Maximum value", "Varies*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["max", "meter; progress", "Upper bound of range", "Valid floating-point number*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["maxlength", "input; textarea", "Maximum length of value", "Valid non-negative integer", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["media", "link; source; style", "Applicable media", "Valid media query list", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["mediagroup", "audio; video", "Groups media elements together with an implicit MediaController", "Text", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["menu", "button", "Specifies the element's designated pop-up menu", "ID*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["method", "form", "HTTP method to use for form submission", ""GET"; "POST"; "dialog"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["min", "input", "Minimum value", "Varies*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["min", "meter", "Lower bound of range", "Valid floating-point number*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["minlength", "input; textarea", "Minimum length of value", "Valid non-negative integer", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["multiple", "input; select", "Whether to allow multiple values", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["muted", "audio; video", "Whether to mute the media resource by default", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["name", "button; fieldset; input; keygen; output; select; textarea", "Name of form control to use for form submission and in the form.elements API", "Text*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["name", "form", "Name of form to use in the document.forms API", "Text*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["name", "iframe; object", "Name of nested browsing context", "Valid browsing context name or keyword", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["name", "map", "Name of image map to reference from the usemap attribute", "Text*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["name", "meta", "Metadata name", "Text*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["name", "param", "Name of parameter", "Text", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["nonce", "script; style", "Cryptographic nonce used in Content Security Policy checks [CSP]", "Text", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["novalidate", "form", "Bypass form control validation for form submission", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["open", "details", "Whether the details are visible", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["open", "dialog", "Whether the dialog box is showing", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["optimum", "meter", "Optimum value in gauge", "Valid floating-point number*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["pattern", "input", "Pattern to be matched by the form control's value", "Regular expression matching the JavaScript Pattern production", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["ping", "a; area", "URLs to ping", "Set of space-separated tokens consisting of valid non-empty URLs", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["placeholder", "input; textarea", "User-visible label to be placed within the form control", "Text*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["poster", "video", "Poster frame to show prior to video playback", "Valid non-empty URL potentially surrounded by spaces", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["preload", "audio; video", "Hints how much buffering the media resource will likely need", ""none"; "metadata"; "auto"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["radiogroup", "menuitem", "Name of group of commands to treat as a radio button group", "Text", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["readonly", "input; textarea", "Whether to allow the value to be edited by the user", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["rel", "a; area; link", "Relationship between the document containing the hyperlink and the destination resource", "Set of space-separated tokens*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["required", "input; select; textarea", "Whether the control is required for form submission", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["reversed", "ol", "Number the list backwards", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["rows", "textarea", "Number of lines to show", "Valid non-negative integer greater than zero", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["rowspan", "td; th", "Number of rows that the cell is to span", "Valid non-negative integer", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["sandbox", "iframe", "Security rules for nested content", "Unordered set of unique space-separated tokens, ASCII case-insensitive, consisting of "allow-forms", "allow-modals", "allow-pointer-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-same-origin", "allow-scripts and "allow-top-navigation"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["spellcheck", "HTML elements", "Whether the element is to have its spelling and grammar checked", ""true"; "false"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["scope", "th", "Specifies which cells the header cell applies to", ""row"; "col"; "rowgroup"; "colgroup"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["scoped", "style", "Whether the styles apply to the entire document or just the parent subtree", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["selected", "option", "Whether the option is selected by default", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["shape", "area", "The kind of shape to be created in an image map", ""circle"; "default"; "poly"; "rect"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["size", "input; select", "Size of the control", "Valid non-negative integer greater than zero", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["sizes", "link", "Sizes of the icons (for rel="icon")", "Unordered set of unique space-separated tokens, ASCII case-insensitive, consisting of sizes*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["sizes", "img; source", "Image sizes for different page layouts", "Valid source size list", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["span", "col; colgroup", "Number of columns spanned by the element", "Valid non-negative integer greater than zero", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["src", "audio; embed; iframe; img; input; script; source; track; video", "Address of the resource", "Valid non-empty URL potentially surrounded by spaces", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["srcdoc", "iframe", "A document to render in the iframe", "The source of an iframe srcdoc document*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["srclang", "track", "Language of the text track", "Valid BCP 47 language tag", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["srcset", "img; source", "Images to use in different situations (e.g. high-resolution displays, small monitors, etc)", "Comma-separated list of image candidate strings", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["start", "ol", "Ordinal value of the first item", "Valid integer", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["step", "input", "Granularity to be matched by the form control's value", "Valid floating-point number greater than zero, or "any"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["style", "HTML elements", "Presentational and formatting instructions", "CSS declarations*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["tabindex", "HTML elements", "Whether the element is focusable, and the relative order of the element for the purposes of sequential focus navigation", "Valid integer", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["target", "a; area", "Browsing context for hyperlink navigation", "Valid browsing context name or keyword", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["target", "base", "Default browsing context for hyperlink navigation and form submission", "Valid browsing context name or keyword", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["target", "form", "Browsing context for form submission", "Valid browsing context name or keyword", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["title", "HTML elements", "Advisory information for the element", "Text", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["title", "abbr; dfn", "Full term or expansion of abbreviation", "Text", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["title", "input", "Description of pattern (when used with pattern attribute)", "Text", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["title", "menuitem", "Hint describing the command", "Text", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["title", "link", "Title of the link", "Text", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["title", "link; style", "Alternative style sheet set name", "Text", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["translate", "HTML elements", "Whether the element is to be translated when the page is localized", ""yes"; "no"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["type", "a; link", "Hint for the type of the referenced resource", "Valid MIME type", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["type", "button", "Type of button", ""submit"; "reset"; "button"; "menu"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["type", "embed; object; script; source; source; style", "Type of embedded resource", "Valid MIME type", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["type", "input", "Type of form control", "input type keyword", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["type", "menu", "Type of menu", ""context"; "toolbar"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["type", "menuitem", "Type of command", ""command"; "checkbox"; "radio"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["type", "ol", "Kind of list marker", ""1"; "a"; "A"; "i"; "I"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["typemustmatch", "object", "Whether the type attribute and the Content-Type value need to match for the resource to be used", "Boolean attribute", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["usemap", "img; object", "Name of image map to use", "Valid hash-name reference*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["value", "button; option", "Value to be used for form submission", "Text", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["value", "data", "Machine-readable value", "Text*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["value", "input", "Value of the form control", "Varies*", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["value", "li", "Ordinal value of the list item", "Valid integer", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["value", "meter; progress", "Current value of the element", "Valid floating-point number", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["value", "param", "Value of parameter", "Text", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["width", "canvas; embed; iframe; img; input; object; video", "Horizontal dimension", "Valid non-negative integer", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ],
            
            ["wrap", "textarea", "How the value of the form control is to be wrapped for form submission", ""soft"; "hard"", [
            
                ["HTML The Living Standard; WHATWG", "", "", ""],
            
                ["", "", ""]]
            ]
                
        ], 

        "elements:": "a, abbr, address, area, article, aside, audio, b, base, bdi, bdo, blockquote, body, br, button, canvas, caption, cite, code, col, colgroup, data, datalist, dd, del, details, dfn, dialog, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html, i, iframe, img, input, ins, kbd, keygen, label, legend, li, link, main, map, mark, math, menu, menuitem, meta, meter, nav, noscript, object, ol, optgroup, option, output, p, param, pre, progress, q, rp, rt, ruby, s, samp, script, section, select, small, source, span, strong, style, sub, summary, sup, svg, table, tbody, td, template, textarea, tfoot, th, thead, time, title, tr, track, u, ul, var, video, wbr",
        
        "element": [  /* https://html.spec.whatwg.org/#elements-3 */
            
            ["Element", "Description", "Categories", "Parents", "Children", "Attributes", "Interface", "Reference: Citation | Title/ Section Heading | Abstract | URL"],
            
            ["a", "Hyperlink", "flow; phrasing*; interactive; palpable", "phrasing", "transparent*", "globals; href; target; download; ping; rel; hreflang; type", "HTMLAnchorElement",, [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the--element"],

                ["", "", "", ""]
            ],
            
            ["abbr", "Abbreviation", "flow; phrasing; palpable", "phrasing", "phrasing", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-abbr-element"],

                ["", "", "", ""]
            ],
            
            ["address", "Contact information for a page or article element", "flow; palpable", "flow", "flow*", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-address-element"],

                ["", "", "", ""]
            ],
            
            ["area", "Hyperlink or dead area on an image map", "flow; phrasing", "phrasing*", "empty", "globals; alt; coords; shape; href; target; download; ping; rel;", "HTMLAreaElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-area-element"],

                ["", "", "", ""]
            ],
            
            ["article", "Self-contained syndicatable or reusable composition", "flow; sectioning; palpable", "flow", "flow", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-article-element"],

                ["", "", "", ""]
            ],
            
            ["aside", "Sidebar for tangentially related content", "flow; sectioning; palpable", "flow", "flow", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-aside-element"],

                ["", "", "", ""]
            ],
            
            ["audio", "Audio player", "flow; phrasing; embedded; interactive; palpable*", "phrasing", "source*; track*; transparent*", "globals; src; crossorigin; preload; autoplay; mediagroup; loop; muted; controls", "HTMLAudioElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-audio-element"],

                ["", "", "", ""]
            ],
            
            ["b", "Keywords", "flow; phrasing; palpable", "phrasing", "phrasing", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-b-element"],

                ["", "", "", ""]
            ],
            
            ["base", "Base URL and default target browsing context for hyperlinks and forms", "metadata", "head; template", "empty", "globals; href; target", "HTMLBaseElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-base-element"],

                ["", "", "", ""]
            ],
            
            ["bdi", "Text directionality isolation", "flow; phrasing; palpable", "phrasing", "phrasing", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-bdi-element"],

                ["", "", "", ""]
            ],
            
            ["bdo", "Text directionality formatting", "flow; phrasing; palpable", "phrasing", "phrasing", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-bdo-element"],

                ["", "", "", ""]
            ],
            
            ["blockquote", "A section quoted from another source", "flow; sectioning root; palpable", "flow", "flow", "globals; cite", "HTMLQuoteElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-blockquote-element"],

                ["", "", "", ""]
            ],
            
            ["body", "Document body", "sectioning root", "html", "flow", "globals; onafterprint; onbeforeprint; onbeforeunload; onhashchange; onlanguagechange; onmessage; onoffline; ononline; onpagehide; onpageshow; onpopstate; onrejectionhandled; onstorage; onunhandledrejection; onunload", "HTMLBodyElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-body-element"],

                ["", "", "", ""]
            ],
            
            ["br", "Line break, e.g. in poem or postal address", "flow; phrasing", "phrasing", "empty", "globals", "HTMLBRElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-br-element"],

                ["", "", "", ""]
            ],
            
            ["button", "Button control", "flow; phrasing; interactive; listed; labelable; submittable; reassociateable; form-associated; palpable", "phrasing", "phrasing*", "globals; autofocus; disabled; form; formaction; formenctype; formmethod; formnovalidate; formtarget; menu; name; type; value", "HTMLButtonElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-button-element"],

                ["", "", "", ""]
            ],
            
            ["canvas", "Scriptable bitmap canvas", "flow; phrasing; embedded; palpable", "phrasing", "transparent", "globals; width; height", "HTMLCanvasElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-canvas-element"],

                ["", "", "", ""]
            ],
            
            ["caption", "Table caption", "none", "table; template", "flow*", "globals", "HTMLTableCaptionElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-caption-element"],

                ["", "", "", ""]
            ],
            
            ["cite", "Title of a work", "flow; phrasing; palpable", "phrasing", "phrasing", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-cite-element"],

                ["", "", "", ""]
            ],
            
            ["code", "Computer code", "flow; phrasing; palpable", "phrasing", "phrasing", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-code-element"],

                ["", "", "", ""]
            ],
            
            ["col", "Table column", "none", "colgroup; template", "empty", "globals; span", "HTMLTableColElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-col-element"],

                ["", "", "", ""]
            ],
            
            ["colgroup", "Group of columns in a table", "none", "table; template", "col*; template*", "globals; span", "HTMLTableColElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-colgroup-element"],

                ["", "", "", ""]
            ],
            
            ["data", "Machine-readable equivalent", "flow; phrasing; palpable", "phrasing", "phrasing", "globals; value", "HTMLDataElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-data-element"],

                ["", "", "", ""]
            ],
            
            ["datalist", "Container for options for combo box control", "flow; phrasing", "phrasing", "phrasing*; option*; script-supporting elements*", "globals", "HTMLDataListElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-datalist-element"],

                ["", "", "", ""]
            ],
            
            ["dd", "Content for corresponding dt element(s)", "none", "dl; template", "flow", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-dd-element"],

                ["", "", "", ""]
            ],
            
            ["del", "A removal from the document", "flow; phrasing*", "phrasing", "transparent", "globals; cite; datetime", "HTMLModElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-del-element"],

                ["", "", "", ""]
            ],
            
            ["details", "Disclosure control for hiding details", "flow; sectioning root; interactive; palpable", "flow", "summary*; flow", "globals; open", "HTMLDetailsElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-details-element"],

                ["", "", "", ""]
            ],
            
            ["dfn", "Defining instance", "flow; phrasing; palpable", "phrasing", "phrasing*", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-dfn-element"],

                ["", "", "", ""]
            ],
            
            ["dialog", "Dialog box or window", "flow; sectioning root", "flow", "flow", "globals; open", "HTMLDialogElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-dialog-element"],

                ["", "", "", ""]
            ],
            
            ["div", "Generic flow container", "flow; palpable", "flow", "flow", "globals", "HTMLDivElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-div-element"],

                ["", "", "", ""]
            ],
            
            ["dl", "Association list consisting of zero or more name-value groups", "flow; palpable", "flow", "dt*; dd*; script-supporting elements", "globals", "HTMLDListElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-dl-element"],

                ["", "", "", ""]
            ],
            
            ["dt", "Legend for corresponding dd element(s)", "none", "dl; template", "flow*", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-dt-element"],

                ["", "", "", ""]
            ],
            
            ["dt", "Stress emphasis", "flow; phrasing; palpable", "phrasing", "phrasing", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-dt-element"],

                ["", "", "", ""]
            ],
            
            ["embed", "Plugin", "flow; phrasing; embedded; interactive; palpable", "phrasing", "empty", "globals; src; type; width; height; any*", "HTMLEmbedElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-embed-element"],

                ["", "", "", ""]
            ],
            
            ["fieldset", "Group of form controls", "flow; sectioning root; listed; reassociateable; form-associated; palpable", "flow", "legend*; flow", "globals; disabled; form; name", "HTMLFieldSetElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-fieldset-element"],

                ["", "", "", ""]
            ],
            
            ["figcaption", "Caption for figure", "none", "figure; template", "flow", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-figcaption-element"],

                ["", "", "", ""]
            ],
            
            ["figure", "Figure with optional caption", "flow; sectioning root; palpable", "flow", "figcaption*; flow", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-figure-element"],

                ["", "", "", ""]
            ],
            
            ["footer", "Footer for a page or section", "flow; palpable", "flow", "flow*", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-footer-element"],

                ["", "", "", ""]
            ],
            
            ["form", "User-submittable form", "flow; palpable", "flow", "flow*", "globals; accept-charset; action; autocomplete; enctype; method; name; novalidate; target", "HTMLFormElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-form-element"],

                ["", "", "", ""]
            ],
            
            ["h1", "Section heading", "flow; heading; palpable", "hgroup; flow", "phrasing", "globals", "HTMLHeadingElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-h1-element"],

                ["", "", "", ""]
            ],
            
            ["h2", "Section heading", "flow; heading; palpable", "hgroup; flow", "phrasing", "globals", "HTMLHeadingElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-h2-element"],

                ["", "", "", ""]
            ],
            
            ["h3", "Section heading", "flow; heading; palpable", "hgroup; flow", "phrasing", "globals", "HTMLHeadingElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-h3-element"],

                ["", "", "", ""]
            ],
            
            ["h4", "Section heading", "flow; heading; palpable", "hgroup; flow", "phrasing", "globals", "HTMLHeadingElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-h4-element"],

                ["", "", "", ""]
            ],
            
            ["h5", "Section heading", "flow; heading; palpable", "hgroup; flow", "phrasing", "globals", "HTMLHeadingElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-h5-element"],

                ["", "", "", ""]
            ],
            
            ["h6", "Section heading", "flow; heading; palpable", "hgroup; flow", "phrasing", "globals", "HTMLHeadingElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-h6-element"],

                ["", "", "", ""]
            ],
            
            ["head", "Container for document metadata", "none", "html", "metadata content*", "globals", "HTMLHeadElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-head-element"],

                ["", "", "", ""]
            ],
            
            ["header", "Introductory or navigational aids for a page or section", "flow; palpable", "flow", "flow*", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-header-element"],

                ["", "", "", ""]
            ],
            
            ["hgroup", "heading group", "flow; heading; palpable", "flow", "One or more h1, h2, h3, h4, h5, h6, and template", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-hgroup-element"],

                ["", "", "", ""]
            ],
            
            ["hr", "Thematic break", "flow", "flow", "empty", "globals", "HTMLHRElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-hr-element"],

                ["", "", "", ""]
            ],
            
            ["html", "Root element", "none", "none*", "head*; body*", "globals; manifest", "HTMLHtmlElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-html-element"],

                ["", "", "", ""]
            ],
            
            ["i", "Alternate voice", "flow; phrasing; palpable", "phrasing", "phrasing", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the--element"],

                ["", "", "", ""]
            ],
            
            ["iframe", "Nested browsing context", "flow; phrasing; embedded; interactive; palpable", "phrasing", "text*", "globals; src; srcdoc; name; sandbox; allowfullscreen; width; height", "HTMLIFrameElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-iframe-element"],

                ["", "", "", ""]
            ],
            
            ["img", "Image", "flow; phrasing; embedded; interactive*; form-associated; palpable", "phrasing", "empty", "globals; alt; src; srcset; crossorigin; usemap; ismap; width; height", "HTMLImageElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the--element"],

                ["", "", "img"]
            ],
            
            ["input", "Form control", "flow; phrasing; interactive*; listed; labelable; submittable; resettable; reassociateable; form-associated; palpable*", "phrasing", "empty", "globals; accept; alt; autocomplete; autofocus; checked; dirname; disabled; form; formaction; formenctype; formmethod; formnovalidate; formtarget; height; inputmode; list; max; maxlength; min; minlength; multiple; name; pattern; placeholder; readonly; required; size; src; step; type; value; width", "HTMLInputElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-input-element"],

                ["", "", "", ""]
            ],
            
            ["ins", "An addition to the document", "flow; phrasing*; palpable", "phrasing", "transparent", "globals; cite; datetime", "HTMLModElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-ins-element"],

                ["", "", "", ""]
            ],
            
            ["kbd", "User input", "flow; phrasing; palpable", "phrasing", "phrasing", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-kbd-element"],

                ["", "", "", ""]
            ],
            
            ["keygen", "Cryptographic key-pair generator form control", "flow; phrasing; interactive; listed; labelable; submittable; resettable; reassociateable; form-associated; palpable", "phrasing", "empty", "globals; autofocus; challenge; disabled; form; keytype; name", "HTMLKeygenElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-keygen-element"],

                ["", "", "", ""]
            ],
            
            ["label", "Caption for a form control", "flow; phrasing; interactive; reassociateable; form-associated; palpable", "phrasing", "phrasing*", "globals; form; for", "HTMLLabelElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-label-element"],

                ["", "", "", ""]
            ],
            
            ["legend", "Caption for fieldset", "none", "fieldset; template", "phrasing", "globals", "HTMLLegendElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-legend-element"],

                ["", "", "", ""]
            ],
            
            ["li", "List item", "none", "ol; ul; menu*; template", "flow", "globals; value*", "HTMLLIElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-li-element"],

                ["", "", "", ""]
            ],
            
            ["link", "Link metadata", "metadata; flow*; phrasing*", "head; template; noscript*; phrasing*", "empty", "globals; href; crossorigin; rel; media; hreflang; type; sizes", "HTMLLinkElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-link-element"],

                ["", "", "", ""]
            ],
            
            ["main", "Container for the dominant contents of another element", "flow; palpable", "flow", "flow", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-main-element"],

                ["", "", "", ""]
            ],
            
            ["map", "Image map", "flow; phrasing*; palpable", "phrasing", "transparent; area*", "globals; name", "HTMLMapElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-map-element"],

                ["", "", "", ""]
            ],
            
            ["mark", "Highlight", "flow; phrasing; palpable", "phrasing", "phrasing", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-mark-element"],

                ["", "", "", ""]
            ],
            
            ["math", "MathML root", "flow; phrasing; embedded; palpable", "phrasing", "per [MATHML]", "per [MATHML]", "Element", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-math-element"],

                ["", "", "", ""]
            ],
            
            ["menu", "Menu of commands", "flow; palpable*", "flow; menu*", "li*; flow*; menuitem*; hr*; menu*; script-supporting elements*", "globals; type; label", "HTMLMenuElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-menu-element"],

                ["", "", "", ""]
            ],
            
            ["menuitem", "Menu command", "none", "menu; template", "empty", "globals; type; label; icon; disabled; checked; radiogroup; default", "HTMLMenuItemElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-menuitem-element"],

                ["", "", "", ""]
            ],
            
            ["meta", "Text metadata", "metadata; flow*; phrasing*", "head; template; noscript*; phrasing*", "empty", "globals; name; http-equiv; content; charset", "HTMLMetaElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-meta-element"],

                ["", "", "", ""]
            ],
            
            ["meter", "Gauge", "flow; phrasing; labelable; palpable", "phrasing", "phrasing*", "globals; value; min; max; low; high; optimum", "HTMLMeterElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-meter-element"],

                ["", "", "", ""]
            ],
            
            ["nav", "Section with navigational links", "flow; sectioning; palpable", "flow", "flow", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-nav-element"],

                ["", "", "", ""]
            ],
            
            ["noscript", "Fallback content for script", "metadata; flow; phrasing", "head*; template*; phrasing*", "varies*", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-noscript-element"],

                ["", "", "", ""]
            ],
            
            ["object", "Image, nested browsing context, or plugin", "flow; phrasing; embedded; interactive*; listed; submittable; reassociateable; form-associated; palpable", "phrasing", "param*; transparent", "globals; data; type; typemustmatch; name; usemap; form; width; height", "HTMLObjectElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-object-element"],

                ["", "", "", ""]
            ],
            
            ["ol", "Ordered list", "flow; palpable*", "flow", "li; script-supporting elements", "globals; reversed; start; type", "HTMLOListElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-ol-element"],

                ["", "", "", ""]
            ],
            
            ["optgroup", "Group of options in a list box", "none", "select; template", "option; script-supporting elements", "globals; disabled; label", "HTMLOptGroupElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-optgroup-element"],

                ["", "", "", ""]
            ],
            
            ["option", "Option in a list box or combo box control", "none", "select; datalist; optgroup; template", "text*", "globals; disabled; label; selected; value", "HTMLOptionElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-option-element"],

                ["", "", "", ""]
            ],
            
            ["output", "Calculated output value", "flow; phrasing; listed; labelable; resettable; reassociateable; form-associated; palpable", "phrasing", "phrasing", "globals; for; form; name", "HTMLOutputElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-output-element"],

                ["", "", "", ""]
            ],
            
            ["p", "Paragraph", "flow; palpable", "flow", "phrasing", "globals", "HTMLParagraphElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-p-element"],

                ["", "", "", ""]
            ],
            
            ["param", "Parameter for object", "none", "object; template", "empty", "globals; name; value", "HTMLParamElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-param-element"],

                ["", "", "", ""]
            ],
            
            ["picture", "Image", "flow; phrasing; embedded", "phrasing", "source*; one img; script-supporting elements", "globals", "HTMLPictureElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-picture-element"],

                ["", "", "", ""]
            ],
            
            ["pre", "Block of preformatted text", "flow; palpable", "flow", "phrasing", "globals", "HTMLPreElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-pre-element"],

                ["", "", "", ""]
            ],
            
            ["progress", "Progress bar", "flow; phrasing; labelable; palpable", "phrasing", "phrasing*", "globals; value; max", "HTMLProgressElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-progress-element"],

                ["", "", "", ""]
            ],
            
            ["q", "Quotation", "flow; phrasing; palpable", "phrasing", "phrasing", "globals; cite", "HTMLQuoteElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-q-element"],

                ["", "", "", ""]
            ],
            
            ["rp", "Parenthesis for ruby annotation text", "none", "ruby; template", "phrasing", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-rp-element"],

                ["", "", "", ""]
            ],
            
            ["rt", "Ruby annotation text", "none", "ruby; template", "phrasing", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-rt-element"],

                ["", "", "", ""]
            ],
            
            ["ruby", "Ruby annotation(s)", "flow; phrasing; palpable", "phrasing", "phrasing; rt; rp*", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-ruby-element"],

                ["", "", "", ""]
            ],
            
            ["s", "Inaccurate text", "flow; phrasing; palpable", "phrasing", "phrasing", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-s-element"],

                ["", "", "", ""]
            ],
            
            ["samp", "Computer output", "flow; phrasing; palpable", "phrasing", "phrasing", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-samp-element"],

                ["", "", "", ""]
            ],
            
            ["script", "Embedded script", "metadata; flow; phrasing; script-supporting", "head; phrasing; script-supporting", "script, data, or script documentation*", "globals; src; type; charset; async; defer; crossorigin; nonce", "HTMLScriptElement", [["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-script-element"], ["", "", "", ""], ["", "", "", ""]],
            
            ["section", "Generic document or application section", "flow; sectioning; palpable", "flow", "flow", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-script-element"],

                ["Jake Archibald; Published: June 5th, 2013", "Deep dive into the murky waters of script loading", "http://www.html5rocks.com/en/tutorials/speed/script-loading/"],

                ["", "", "", ""]
            ],
            
            ["select", "List box control", "flow; phrasing; interactive; listed; labelable; submittable; resettable; reassociateable; form-associated; palpable", "phrasing", "option; optgroup; script-supporting elements", "globals; autocomplete; autofocus; disabled; form; multiple; name; required; size", "HTMLSelectElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-select-element"],

                ["", "", "", ""]
            ],
            
            ["small", "Side comment", "flow; phrasing; palpable", "phrasing", "phrasing", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-small-element"],

                ["", "", "", ""]
            ],
            
            ["source", "Media source for video or audio", "none", "video; audio; template", "empty", "globals; src; type", "HTMLSourceElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-source-element"],

                ["", "", "", ""]
            ],
            
            ["source", "Image source for an img", "none", "picture", "empty", "globals; srcset; sizes; media; type", "HTMLSourceElement", [

                ["HTML Living Standard", "source", "https://html.spec.whatwg.org/#the-source-element-when-used-with-the-picture-element"],

                ["", "", "", ""]
            ],
            
            ["span", "Generic phrasing container", "flow; phrasing; palpable", "phrasing", "phrasing", "globals", "HTMLSpanElement", [

                ["HTML Living Standard", "span", "https://html.spec.whatwg.org/#the-span-element"],

                ["", "", "", ""]
            ],
            
            ["strong", "Importance", "flow; phrasing; palpable", "phrasing", "phrasing", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-strong-element"],

                ["", "", "", ""]
            ],
            
            ["style", "Embedded styling information", "metadata; flow*", "head; noscript*; flow*", "varies*", "globals; media; nonce; type; scoped", "HTMLStyleElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-style-element"],

                ["", "", "", ""]
            ],
            
            ["sub", "Subscript", "flow; phrasing; palpable", "phrasing", "phrasing", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-sub-element"],

                ["", "", "", ""]
            ],
            
            ["summary", "Caption for details", "none", "details", "phrasing", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-summary-element"],

                ["", "", "", ""]
            ],
            
            ["sup", "Superscript", "flow; phrasing; palpable", "phrasing", "phrasing", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-sup-element"],

                ["", "", "", ""]
            ],
            
            ["svg", "SVG root", "flow; phrasing; embedded; palpable", "phrasing", "per [SVG]", "per [SVG]", "SVGSVGElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-svg-element"],

                ["", "", "", ""]
            ],
            
            ["table", "Table", "flow; palpable", "flow", "caption*; colgroup*; thead*; tbody*; tfoot*; tr*; script-supporting elements", "globals", "HTMLTableElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-table-element"],

                ["", "", "", ""]
            ],
            
            ["tbody", "Group of rows in a table", "none", "table; template", "tr; script-supporting elements", "globals", "HTMLTableSectionElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-tbody-element"],

                ["", "", "", ""]
            ],
            
            ["td", "Table cell", "sectioning root", "tr; template", "flow", "globals; colspan; rowspan; headers", "HTMLTableDataCellElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-td-element"],

                ["", "", "", ""]
            ],
            
            ["template", "Template", "metadata; flow; phrasing; script-supporting", "metadata; phrasing; script-supporting; colgroup*", "it's complicated*", "globals", "HTMLTemplateElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-template-element"],

                ["", "", "", ""]
            ],
            
            ["textarea", "Multiline text field", "flow; phrasing; interactive; listed; labelable; submittable; resettable; reassociateable; form-associated; palpable", "phrasing", "text", "globals; autofocus; cols; dirname; disabled; form; inputmode; maxlength; minlength; name; placeholder; readonly; required; rows; wrap", "HTMLTextAreaElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-textarea-element"],

                ["", "", "", ""]
            ],
            
            ["tfoot", "Group of footer rows in a table", "none", "table; template", "tr; script-supporting elements", "globals", "HTMLTableSectionElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-tfoot-element"],

                ["", "", "", ""]
            ],
            
            ["th", "Table header cell", "interactive*", "tr; template", "flow*", "globals; colspan; rowspan; headers; scope; abbr", "HTMLTableHeaderCellElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-th-element"],

                ["", "", "", ""]
            ],
            
            ["thead", "Group of heading rows in a table", "none", "table; template", "tr; script-supporting elements", "globals", "HTMLTableSectionElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-thead-element"],

                ["", "", "", ""]
            ],
            
            ["time", "Machine-readable equivalent of date- or time-related data", "flow; phrasing; palpable", "phrasing", "phrasing", "globals; datetime", "HTMLTimeElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-time-element"],

                ["", "", "", ""]
            ],
            
            ["title", "Document title", "metadata", "head; template", "text*", "globals", "HTMLTitleElement",, [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-title-element"],

                ["", "", "", ""]
            ],
            
            ["tr", "Table row", "none", "table; thead; tbody; tfoot; template", "th*; td; script-supporting elements", "globals", "HTMLTableRowElement", [
                
                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-tr-element"], 
                
                ["", "", "", ""]
            ],
            
            ["track", "Timed text track", "none", "audio; video; template", "empty", "globals; default; kind; label; src; srclang", "HTMLTrackElement", [
                
                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-track-element"], 
                
                ["", "", "", ""]
            ],
            
            ["u", "Keywords", "flow; phrasing; palpable", "phrasing", "phrasing", "globals", "HTMLElement", [
                
                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-u-element"], 
                
                ["", "", "", ""]
            ],
            
            ["ul", "List", "flow; palpable*", "flow", "li; script-supporting elements", "globals", "HTMLUListElement", [
                
                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-ul-element"], 
                
                ["", "", "", ""]]
            ],
            
            ["var", "Variable", "flow; phrasing; palpable", "phrasing", "phrasing", "globals", "HTMLElement", [

                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-var-element"],

                ["", "", "", ""]
            ],
            
            ["video", "Video player", "flow; phrasing; embedded; interactive; palpable", "phrasing", "source*; track*; transparent*", "globals; src; crossorigin; poster; preload; autoplay; mediagroup; loop; muted; controls; width; height", "HTMLVideoElement", [
                
                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-video-element"], 
                    
                ["", "", "", ""]
            ],
    
            ["wbr", "Line breaking opportunity", "flow; phrasing", "phrasing", "empty", "globals", "HTMLElement", [
                
                ["HTML Living Standard", "", "", "https://html.spec.whatwg.org/#the-wbr-element"], 
                
                ["", "", "", ""]
            ]
            
        ], // end element array
        
        "Element Catagories": [
            
            ["Category","Elements","Elements with exceptions"],
            
            ["Metadata content", "base; link; meta; noscript; script; style; template; title", "—"],
            
            ["Flow content", "a; abbr; address; article; aside; audio; b; bdi; bdo; blockquote; br; button; canvas; cite; code; data; datalist; del; details; dfn; dialog; div; dl; em; embed; fieldset; figure; footer; form; h1; h2; h3; h4; h5; h6; header; hgroup; hr; i; iframe; img; input; ins; kbd; keygen; label; main; map; mark; math; menu; meter; nav; noscript; object; ol; output; p; picture; pre; progress; q; ruby; s; samp; script; section; select; small; span; strong; sub; sup; svg; table; template; textarea; time; u; ul; var; video; wbr; Text", "area (if it is a descendant of a map element); link (if it is allowed in the body); meta (if the itemprop attribute is present); style (if the scoped attribute is present)"],
            
            ["Sectioning content", "article; aside; nav; section", "—"],
            
            ["Heading content", "h1; h2; h3; h4; h5; h6; hgroup", "—"],
            
            ["Phrasing content", "a; abbr; audio; b; bdi; bdo; br; button; canvas; cite; code; data; datalist; del; dfn; em; embed; i; iframe; img; input; ins; kbd; keygen; label; map; mark; math; meter; noscript; object; output; picture; progress; q; ruby; s; samp; script; select; small; span; strong; sub; sup; svg; template; textarea; time; u; var; video; wbr; Text", "area (if it is a descendant of a map element); link (if it is allowed in the body); meta (if the itemprop attribute is present)"],
            
            ["Embedded content", "audio; canvas; embed; iframe; img; math; object; picture; svg; video", "—"],
            
            ["Interactive content*", "button; details; embed; iframe; keygen; label; select; textarea", "a (if the href attribute is present); audio (if the controls attribute is present); img (if the usemap attribute is present); input (if the type attribute is not in the Hidden state); object (if the usemap attribute is present); video (if the controls attribute is present)"],
            
            ["Sectioning roots", "blockquote; body; details; dialog; fieldset; figure; td", "—"],
            
            ["Form-associated elements", "button; fieldset; input; keygen; label; object; output; select; textarea; img", "—"],
            
            ["Listed elements", "button; fieldset; input; keygen; object; output; select; textarea", "—"],
            
            ["Submittable elements", "button; input; keygen; object; select; textarea", "—"],
            
            ["Resettable elements", "input; keygen; output; select; textarea", "—"],
            
            ["Labelable elements", "button; input; keygen; meter; output; progress; select; textarea", "—"],
            
            ["Reassociateable elements", "button; fieldset; input; keygen; label; object; output; select; textarea", "—"],
            
            ["Palpable content", "a; abbr; address; article; aside; b; bdi; bdo; blockquote; button; canvas; cite; code; data; details; dfn; div; em; embed; fieldset; figure; footer; form; h1; h2; h3; h4; h5; h6; header; hgroup; i; iframe; img; ins; kbd; keygen; label; main; map; mark; math; meter; nav; object; output; p; pre; progress; q; ruby; s; samp; section; select; small; span; strong; sub; sup; svg; table; textarea; time; u; var; video", "audio (if the controls attribute is present); dl (if the element's children include at least one name-value group); input (if the type attribute is not in the Hidden state); menu (if the type attribute is in the toolbar state); ol (if the element's children include at least one li element); ul (if the element's children include at least one li element); Text that is not inter-element whitespace"],
            
            ["Script-supporting elements", "script; template", "—"]
            
        ], // end "Element Catagories" array
    
        attributes: "abbr, accept, accept-charset, accesskey, action, allowfullscreen, alt, async, autocomplete, autofocus, autoplay, challenge, charset, checked, cite, class, cols, colspan, content, contenteditable, contextmenu, controls, coords, crossorigin, data, datetime, default, defer, dir, dirname, disabled, download, draggable, dropzone, enctype, for, form, formaction, formenctype, formmethod, formnovalidate, formtarget, headers, height, hidden, high, href, hreflang, http-equiv, icon, id, inputmode, ismap, itemid, itemprop, itemref, itemscope, itemtype, keytype, kind, label, lang, list, loop, low, manifest, max, maxlength, media, mediagroup, menu, method, min, minlength, multiple, muted, name, nonce, novalidate, open, optimum, pattern, ping, placeholder, poster, preload, radiogroup, readonly, rel, required, reversed, rows, rowspan, sandbox, scope, scoped, selected, shape, size, sizes",
        
        events: "abort, autocomplete, autocompleteerror, DOMContentLoaded, afterprint, afterscriptexecute, beforeprint, beforescriptexecute, beforeunload, blur, cancel, change, click, close, connect, contextmenu, copy, cut, error, focus, hashchange, input⋰, invalid, languagechange, load, loadend, loadstart, message, offline, online, open, pagehide, pageshow⋰, paste, popstate, progress, readystatechange, rejectionhandled, reset, select, show, storage, submit, toggle, unhandledrejection, unload",
    
        element: {
            
            obsolete: {
                
                applet: "Use embed or object instead.",
                
                acronym: "Use abbr instead.",
                
                bgsound: "Use audio instead.",
                
                dir: "Use ul instead.",
                
                frame: "Either use iframe and CSS instead, or use server-side includes to generate complete pages with the various invariant parts merged in.",
                
                frameset: "Either use iframe and CSS instead, or use server-side includes to generate complete pages with the various invariant parts merged in.",
                
                isindex: "Use an explicit form and text field combination instead.",
                
                listing: "Use pre and code instead.",
                
                nextid: "Use GUIDs instead.",
                
                noembed: "Use object instead of embed when fallback is necessary.",
                
                noframes: "Either use iframe and CSS instead, or use server-side includes to generate complete pages with the various invariant parts merged in.",
                
                plaintext: 'Use the "text/plain" MIME type instead.',
                
                rb: "Providing the ruby base directly inside the ruby element or using nested ruby elements is sufficient.",
                
                rtc: "Providing the ruby base directly inside the ruby element or using nested ruby elements is sufficient.",
                
                strike: "Use del instead if the element is marking an edit, otherwise use s instead.",
                
                xmp: 'Use pre and code instead, and escape "<" and "&" characters as "&lt;" and "&amp;" respectively.',
                
                basefont: "",
                
                big: "",
                
                blink: "",
                
                center: "",
                
                font: "",
                
                marquee: "",
                
                multicol: "",
                
                nobr: "",
                
                spacer: "",
                
                tt: ""
            }
            
            "content categories": "Embedded content,Flow content,Form-associated elements,Heading content,Interactive content,Labelable elements,Listed elements,Metadata content,Palpable content,Phrasing content,Reassociateable elements,Resettable elements,Script-supporting elements,Sectioning content,Sectioning roots,Submittable elements",
            
            "content category": {
                
                "Embedded content": {
                
                    definition: "Embedded content is content that imports another resource into the document, or content from another vocabulary. Elements that are from namespaces other than the HTML namespace and that convey content but not metadata, are embedded content for the purposes of the content models defined in this <a href='https://html.spec.whatwg.org/#embedded-content-category'>specification</a>. (For example, MathML, or SVG.)",
                    
                    elements: "audio; canvas; embed; iframe; img; math; object; picture; svg; video",
                
                    Text: false,
                    
                    reference: [
                    
                        ["WHATWG", "Element content categories", "https://html.spec.whatwg.org/#element-content-categories"],
    
                        ["W3C", "4.7 Embedded content", "https://www.w3.org/TR/html5/embedded-content-0.html"],
    
                        ["HTML Dog", "Embedded Content: Video, Audio, and Canvas", "http://htmldog.com/guides/html/advanced/embeddedcontent/"]
                    ]
                },
                
                "Flow content": {
                    
                    definition: "Elements belonging to the flow content category typically contain text or embedded content. [https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content]",
                
                    elements: "a, abbr, address, area (if it is a descendant of a map element), article, aside, audio, b, bdi, bdo, blockquote, br, button, canvas, cite, code, data, datalist, del, details, dfn, dialog, div, dl, em, embed, fieldset, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, hr, i, iframe, img, input, ins, kbd, keygen, label, link (if the itemprop attribute is present), main, map, mark, math, menu, meta (if the itemprop attribute is present), meter, nav, noscript, object, ol, output, p, picture, pre, progress, q, ruby, s, samp, script, section, select, small, span, strong, style (if the scoped attribute is present), sub, sup, svg, table, template, textarea, time, u, ul, var, video, wbr",
                
                    Text: true,
                    
                    reference: [
                    
                        ["WHATWG", "Element content categories", "https://html.spec.whatwg.org/#element-content-categories"],
                        
                        ["MDN", "Flow Content", "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content"]
                    ]
                },
                
                "Form-associated elements": {
                    
                    definition: "Elements that can have a form owner.",
                
                    elements: "button; fieldset; input; keygen; label; object; output; select; textarea; img",
                
                    Text: false
                },
                
                "Heading content": {
                    
                    definition: "Heading content defines the header of a section (whether explicitly marked up using sectioning content elements, or implied by the heading content itself).",
                
                    elements: "h1; h2; h3; h4; h5; h6; hgroup",
                
                    Text: false,
                    
                    reference:
                    
                        ["WHATWG", "Element content categories", "https://html.spec.whatwg.org/#element-content-categories"]
                },
                
                "Interactive content": {
                    
                    definition: "Interactive elements allow the user to change the state of the user interface with an input device",
                
                    elements: "a (if the href attribute is present), audio (if the controls attribute is present), button; details; embed; iframe; img (if the usemap attribute is present), input (if the type attribute is not in the Hidden state), keygen; label; select; object (if the usemap attribute is present), textarea, video (if the controls attribute is present)",
                    
                    note: "The <code>tabindex</code> attribute can make any element into interactive content",
                
                    Text: false,
                    
                    reference: [
                    
                        ["WHATWG", "Element content categories", "https://html.spec.whatwg.org/#element-content-categories"],
                        
                        ["WHATWG", "Interactive content", "https://html.spec.whatwg.org/#interactive-content-2"]
                    ]
                },
                
                "Labelable elements": {
                    
                    definition: "A labelable element can be associated with a label element. Form Associateable elements are included in this category",
                
                    elements: "button; input; keygen; meter; output; progress; select; textarea	",
                
                    Text: false,
                    
                    reference: ["WHATWG", "Element content categories", "https://html.spec.whatwg.org/#element-content-categories"]
                },
                
                "Listed elements": {
                    
                    definition: "Elements that are listed in the <a href='https://developer.mozilla.org/en-US/docs/DOM/form.elements'><code>form.elements</code> and <a href='https://www.w3.org/TR/html5/forms.html#dom-form-elements'><code>fieldset.elements</code></a> IDL collections.",
                
                    elements: "button; fieldset; input; keygen; object; output; select; textarea",
                
                    Text: false,
                    
                    reference: ["WHATWG", "Element content categories", "https://html.spec.whatwg.org/#element-content-categories"]
                },
                
                "Metadata content": {
                    
                    definition: "Metadata content is content that sets up the presentation or behaviour of the rest of the content, or that sets up the relationship of the document with other documents, or that conveys other "out of band" information.",
                
                    elements: "base; link; meta; noscript; script; style; template; title",
                
                    Text: false,
                    
                    reference: ["WHATWG", "Element content categories", "https://html.spec.whatwg.org/#element-content-categories"]
                },
                
                "Palpable content": {
                    
                    definition: "Palpable content makes an element non-empty by providing either some descendant non-empty text, or else something users can hear (audio elements) or view (video or img or canvas elements) or otherwise interact with (for example, interactive form controls).",
                
                    elements: "a, abbr, address, article, aside, audio (if the controls attribute is present), b, bdi, bdo, blockquote, button, canvas, cite, code, data, details, dfn, div, dl (if the element's children include at least one name-value group), em, embed, fieldset, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, i, iframe, img, input (if the type attribute is not in the Hidden state), ins, kbd, keygen, label, main, map, mark, math, menu (if the type attribute is in the toolbar state), meter, nav, object, ol (if the element's children include at least one li element), output, p, pre, progress, q, ruby, s, samp, section, select, small, span, strong, sub, sup, svg, table, textarea, time, u, ul (if the element's children include at least one li element), var, video",
                
                    Text: true,
                    
                    "inter-element whitespace": false,
                    
                    reference: [
                    
                        ["WHATWG", "Element content categories", "https://html.spec.whatwg.org/#element-content-categories"],
                        
                        ["https://html.spec.whatwg.org/#palpable-content-2", "Palpable Content", "https://html.spec.whatwg.org/#palpable-content-2"]                    
                    ]
                },
                
                "Phrasing content": {
                    
                    description: "Phrasing content is the text of the document, as well as elements that mark up that text at the intra-paragraph level. Runs of phrasing content form paragraphs.",
                
                    elements: "a, abbr, area (if it is a descendant of a map element), audio, b, bdi, bdo, br, button, canvas, cite, code, data, datalist, del, dfn, em, embed, i, iframe, img, input, ins, kbd, keygen, label, link (if the itemprop attribute is present), map, mark, math, meta (if the itemprop attribute is present), meter, noscript, object, output, picture, progress, q, ruby, s, samp, script, select, small, span, strong, sub, sup, svg, template, textarea, time, u, var, video, wbr",
                
                    Text: true,
                    
                    reference: [
                    
                        ["WHATWG", "Element content categories", "https://html.spec.whatwg.org/#element-content-categories"],
                        
                        ["https://html.spec.whatwg.org/#phrasing-content-2", "Phrasing Content", "https://html.spec.whatwg.org/#phrasing-content-2"]
                    ]
                },
                
                "Reassociateable elements": {
                    
                    definition: "Normally, the nearest form anscestor of a Form-associated element, is the form owner. However A Reassociateable element can indicate a different form owner using the <code>form</code> attribute. Note, it is a violation of the content model to nest forms",
                
                    elements: "button; fieldset; input; keygen; label; object; output; select; textarea	",
                
                    Text: false,
                    
                    reference: [
                    
                        ["WHATWG", "Element content categories", "https://html.spec.whatwg.org/#element-content-categories"],
                        
                        ["WHATHG", "4.10.18.3 Association of controls and forms", "https://html.spec.whatwg.org/#attr-fae-form"]
                    ]
                },
                
                "Resettable elements": {
                
                    elements: "input; keygen; output; select; textarea",
                
                    Text: false,
                    
                    reference: [
                    
                        ["WHATWG", "Element content categories", "https://html.spec.whatwg.org/#element-content-categories"],
                        
                        ["", "", "", ""]
                    ]
                },
                
                "Script-supporting elements": {
                
                    elements: "script; template",
                
                    Text: false,
                    
                    reference: [
                    
                        ["WHATWG", "Element content categories", "https://html.spec.whatwg.org/#element-content-categories"],
                        
                        ["", "", "", ""]
                    ]
                },
                
                "Sectioning content": {
                
                    elements: "article; aside; nav; section",
                
                    Text: false,
                    
                    reference: [
                    
                        ["WHATWG", "Element content categories", "https://html.spec.whatwg.org/#element-content-categories"],
    
                        ["", "", "", ""]
                    ]
                },
                
                "Sectioning roots": {
                
                    elements: "blockquote; body; details; dialog; fieldset; figure; td",
                
                    Text: false,
                    
                    reference: [
                    
                        ["WHATWG", "Element content categories", "https://html.spec.whatwg.org/#element-content-categories"],
    
                        ["", "", "", ""]
                    ]
                },
                
                "Submittable elements": {
                
                    elements: "button; input; keygen; object; select; textarea",
                
                    Text: false,
                    
                    reference: [
                    
                        ["WHATWG", "Element content categories", "https://html.spec.whatwg.org/#element-content-categories"],
                        
                        ["", "", "", ""]
                    ]
                }
                
                
            }
    
        },
    
        event: [  /* Source: https://html.spec.whatwg.org/#events-2   Regex: ["$1", "$3", "$5", "$7", [["", "", "", ""]],\n\n */
            
            ["Event", "Interface", "Interesting targets", "Description", "Reference: Citation | Title/ Section Heading | Abstract | URL"],
    
            ["abort", "Event", "Window", "Fired at the Window when the download was aborted by the user", [["", "", "", ""]]]
            
            ["autocomplete", "Event", "form elements", "Fired at a form element when it is autofilled", [["", "", "", ""]]]
            
            ["autocompleteerror", "Event", "form elements", "Fired at a form element when a bulk autofill fails", [["", "", "", ""]]]
            
            ["DOMContentLoaded", "Event", "Document", "Fired at the Document once the parser has finished", [
                
                ["Web Hypertext Application Technology Working Group", "12.2.6 The end", "", "https://html.spec.whatwg.org/#the-end"],
                
                ["Mozilla Developer Network", "DOMContentLoaded", "The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. A very different event - load - should be used only to detect a fully-loaded page. It is an incredibly popular mistake to use load where DOMContentLoaded would be much more appropriate, so be cautious.", "https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded"],
                
                ["Nicolas Mendoza; Jul 08, 2007; 6:08pm", "Re: DOMContentLoaded", "<p>FYI, DOMContentLoaded is now defined as part of HTML5.<p>I ran into a problem with DOMContentLoaded today and its lack of definition. Basically exactly what elements it should wait for or not is not properly defined.</p><p>Specifically, with Mozilla Firefox, CSS style attributes from external stylesheets are applied to the DOM tree before DOMContentLoaded is fired. In Opera it's fired when the tree is done and styles are applied later. I was unable to figure out which one is correct according to the specs, neither the Mozilla documentation nor the HTML5 spec.</p>", "http://w3-org.9356.n7.nabble.com/DOMContentLoaded-td238495.html"], 
                
                ["Pro JavaScript Performance; Chapter 5: Looking Forward, a Standard for Performance; p. 87", "Performance Timing", "The DOMContentLoading event is fired when the browser completes parsing the document. for more information about this event, see the W3C's documentation for the steps that happen at the end of the document parsing, located at http://www.w3.org/TR/html5/the-end.html", "https://books.google.com/books?id=YUJjAIPe-NMC&pg=PA87&lpg=PA87&dq=DOMContentLoaded+w3.org&source=bl&ots=HgS2F3H_JU&sig=agZ2P5mrrpQvIyIgjpF17kDvKHw&hl=en&sa=X&ved=0ahUKEwj82JfQz6fLAhULwGMKHWzMAEc4ChDoAQgnMAI#v=onepage&q=DOMContentLoaded%20w3.org&f=false"]
            ],
            
            ["afterprint", "Event", "Window", "Fired at the Window after printing", [["", "", "", ""]]]
            
            ["afterscriptexecute", "Event", "script elements", "Fired at script elements after the script runs (just before the corresponding load event)", [["", "", "", ""]]]
            
            ["beforeprint", "Event", "Window", "Fired at the Window before printing", [["", "", "", ""]],
            
            ["beforescriptexecute", "Event", "script elements", "Fired at script elements just before the script runs; canceling the event cancels the running of the script", [["", "", "", ""]],
            
            ["beforeunload", "BeforeUnloadEvent", "Window", "Fired at the Window when the page is about to be unloaded, in case the page would like to show a warning prompt", [["", "", "", ""]],
            
            ["blur", "Event", "Window, elements", "Fired at nodes when they stop being focused", [["", "", "", ""]],
            
            ["cancel", "Event", "dialog elements", "Fired at dialog elements when they are canceled by the user (e.g. by pressing the Escape key)", [["", "", "", ""]],
            
            ["change", "Event", "Form controls", "Fired at controls when the user commits a value change (see also the input event)", [["", "", "", ""]],
            
            ["click", "MouseEvent", "Elements", "Normally a mouse event; also synthetically fired at an element before its activation behaviour is run, when an element is activated from a non-pointer input device (e.g. a keyboard)", [["", "", "", ""]],
            
            ["close", "Event", "dialog elements, WebSocket", "Fired at dialog elements when they are closed, and at WebSocket elements when the connection is terminated", [["", "", "", ""]],
            
            ["connect", "MessageEvent", "SharedWorkerGlobalScope", "Fired at a shared worker's global scope when a new client connects", [["", "", "", ""]],
            
            ["contextmenu", "Event", "Elements", "Fired at elements when the user requests their context menu", [["", "", "", ""]],
            
            ["copy", "Event", "Elements", "Fired at elements when the user copies data to the clipboard", [["", "", "", ""]],
            
            ["cut", "Event", "Elements", "Fired at elements when the user copies the selected data on the clipboard and removes the selection from the document", [["", "", "", ""]],
            
            ["error", "Event", "Global scope objects, Worker objects, elements, networking-related objects", "Fired when unexpected errors occur (e.g. networking errors, script errors, decoding errors)", [["", "", "", ""]],
            
            ["focus", "Event", "Window, elements", "Fired at nodes gaining focus", [["", "", "", ""]],
            
            ["hashchange", "HashChangeEvent", "Window", "Fired at the Window when the fragment part of the document's address changes", [["", "", "", ""]],
            
            ["input⋰", "Event", "Form controls", "Fired at controls when the user changes the value (see also the change event)", [["", "", "", ""]],
            
            ["invalid", "Event", "Form controls", "Fired at controls during form validation if they do not satisfy their constraints", [["", "", "", ""]],
            
            ["languagechange", "Event", "Global scope objects", "Fired at the global scope object when the user's preferred languages change", [["", "", "", ""]],
            
            ["load", "Event", "Window, elements", "Fired at the Window when the document has finished loading; fired at an element containing a resource (e.g. img, embed) when its resource has finished loading", [["", "", "", ""]],
            
            ["loadend", "Event or ProgressEvent", "img elements", "Fired at img elements after a successful load", [["", "", "", ""]],
            
            ["loadstart", "ProgressEvent", "img elements", "Fired at img elements when a load begins (see also media element events)", [["", "", "", ""]],
            
            ["message", "MessageEvent", "Window, EventSource, WebSocket, MessagePort, BroadcastChannel, DedicatedWorkerGlobalScope, Worker", "Fired at an object when it receives a message", [["", "", "", ""]],
            
            ["offline", "Event", "Global scope objects", "Fired at the global scope object when the network connections fails", [["", "", "", ""]],
            
            ["online", "Event", "Global scope objects", "Fired at the global scope object when the network connections returns", [["", "", "", ""]],
            
            ["open", "Event", "EventSource, WebSocket", "Fired at networking-related objects when a connection is established", [["", "", "", ""]],
            
            ["pagehide", "PageTransitionEvent", "Window", "Fired at the Window when the page's entry in the session history stops being the current entry", [["", "", "", ""]],
            
            ["pageshow⋰", "PageTransitionEvent", "Window", "Fired at the Window when the page's entry in the session history becomes the current entry", [["", "", "", ""]],
            
            ["paste", "Event", "Elements", "Fired at elements when the user will insert the clipboard data in the most suitable format (if any) supported for the given context", [["", "", "", ""]],
            
            ["popstate", "PopStateEvent", "Window", "Fired at the Window when the user navigates the session history", [["", "", "", ""]],
            
            ["progress", "ProgressEvent", "img elements", "Fired at img elements during a CORS-same-origin image load (see also media element events)", [["", "", "", ""]],
            
            ["readystatechange", "Event", "Document", "Fired at the Document when it finishes parsing and again when all its subresources have finished loading", [["", "", "", ""]],
            
            ["rejectionhandled", "PromiseRejectionEvent", "Global scope objects", "Fired at global scope objects when a previously-unhandled promise rejection becomes handled", [["", "", "", ""]],
            
            ["reset", "Event", "form elements", "Fired at a form element when it is reset", [["", "", "", ""]],
            
            ["select", "Event", "Form controls", "Fired at form controls when their text selection is adjusted (whether by an API or by the user)", [["", "", "", ""]],
            
            ["show", "RelatedEvent", "menu elements", "Fired at a menu element when it is shown as a context menu", [["", "", "", ""]],
            
            ["storage", "StorageEvent", "Window", "Fired at Window event when the corresponding localStorage or sessionStorage storage areas change", [["", "", "", ""]],
            
            ["submit", "Event", "form elements", "Fired at a form element when it is submitted", [["", "", "", ""]],
            
            ["toggle", "Event", "details element", "Fired at details elements when they open or close", [["", "", "", ""]],
            
            ["unhandledrejection", "PromiseRejectionEvent", "Global scope objects", "Fired at global scope objects when a promise rejection goes unhandled", [["", "", "", ""]],
            
            ["unload", "Event", "Window", "Fired at the Window object when the page is going away", [["", "", "", ""]]]  
            
        ],  // end event property
        
        "interfaces": "AbstractWorker, ApplicationCache, AudioTrack, AudioTrackList, AutocompleteErrorEvent, BarProp, BeforeUnloadEvent, BroadcastChannel, CanvasCompositing, CanvasDrawImage, CanvasDrawPath, CanvasFillStrokeStyles, CanvasGradient, CanvasHitRegion, CanvasImageData, CanvasImageSmoothing, CanvasPath, CanvasPathDrawingStyles, CanvasPattern, CanvasProxy, CanvasRect, CanvasRenderingContext2D, CanvasShadowStyles, CanvasState, CanvasText, CanvasTextDrawingStyles, CanvasTransform, CanvasUserInterface, CloseEvent, DOMStringMap, DataTransfer, DataTransferItem, DataTransferItemList, DedicatedWorkerGlobalScope, Document, DocumentAndElementEventHandlers, DragEvent, ElementContentEditable, ErrorEvent, EventSource, External, GlobalEventHandlers, HTMLAllCollection, HTMLAnchorElement, HTMLAppletElement, HTMLAreaElement, HTMLAudioElement, HTMLBRElement, HTMLBaseElement, HTMLBodyElement, HTMLButtonElement, HTMLCanvasElement, HTMLDListElement, HTMLDataElement, HTMLDataListElement, HTMLDetailsElement, HTMLDialogElement, HTMLDirectoryElement, HTMLDivElement, HTMLElement, HTMLEmbedElement, HTMLFieldSetElement, HTMLFontElement, HTMLFormControlsCollection, HTMLFormElement, HTMLFrameElement, HTMLFrameSetElement, HTMLHRElement, HTMLHeadElement, HTMLHeadingElement, HTMLHtmlElement, HTMLHyperlinkElementUtils, HTMLIFrameElement, HTMLImageElement, HTMLInputElement, HTMLKeygenElement, HTMLLIElement, HTMLLabelElement, HTMLLegendElement, HTMLLinkElement, HTMLMapElement, HTMLMarqueeElement, HTMLMediaElement, HTMLMenuElement, HTMLMenuItemElement, HTMLMetaElement, HTMLMeterElement, HTMLModElement, HTMLOListElement, HTMLObjectElement, HTMLOptGroupElement, HTMLOptionElement, HTMLOptionsCollection, HTMLOutputElement, HTMLParagraphElement, HTMLParamElement, HTMLPictureElement, HTMLPreElement, HTMLProgressElement, HTMLQuoteElement, HTMLScriptElement, HTMLSelectElement, HTMLSourceElement, HTMLSpanElement, HTMLStyleElement, HTMLTableCaptionElement, HTMLTableCellElement, HTMLTableColElement, HTMLTableDataCellElement, HTMLTableElement, HTMLTableHeaderCellElement, HTMLTableRowElement, HTMLTableSectionElement, HTMLTemplateElement, HTMLTextAreaElement, HTMLTimeElement, HTMLTitleElement, HTMLTrackElement, HTMLUListElement, HTMLUnknownElement, HTMLVideoElement, HashChangeEvent, History, ImageBitmap, ImageBitmapFactories, ImageData, Location, MediaController, MediaError, MessageChannel, MessageEvent, MessagePort, MimeType, MimeTypeArray, MouseEvent, Navigator, NavigatorContentUtils, NavigatorCookies, NavigatorID, NavigatorLanguage, NavigatorOnLine, NavigatorPlugins, PageTransitionEvent, Path2D, PluginArray, PopStateEvent, PromiseRejectionEvent, RadioNodeList, RelatedEvent, SharedWorker, SharedWorkerGlobalScope, Storage, StorageEvent, TextMetrics, TextTrack, TextTrackCue, TextTrackCueList, TextTrackList, TimeRanges, Touch, TrackEvent, ValidityState, VideoTrack, VideoTrackList, WebSocket, Window, WindowBase64, WindowEventHandlers, WindowLocalStorage, WindowSessionStorage, WindowTimers, Worker, WorkerGlobalScope, WorkerLocation, WorkerNavigator, XMLDocument", // https://html.spec.whatwg.org/#all-interfaces
        
        "Mime Types": {
            
            "application/atom+xml": "Atom [ATOM]",
            
            "application/ecmascript": "JavaScript (legacy type) [ECMA262]",
            
            "application/javascript": "JavaScript (legacy type) [ECMA262]",
            
            "application/json": "JSON [JSON]",
            
            "application/x-ecmascript": "JavaScript (legacy type) [ECMA262]",
            
            "application/x-javascript": "JavaScript (legacy type) [ECMA262]",
            
            "application/octet-stream": "Generic binary data [RFC2046]",
            
            "application/microdata+json": "Microdata as JSON",
            
            "application/rss+xml": "RSS",
            
            "application/x-www-form-urlencoded": "Form submission",
            
            "application/xhtml+xml": "HTML",
            
            "application/xml": "XML [XML] [RFC7303]",
            
            "image/gif": "GIF images [GIF]",
            
            "image/jpeg": "JPEG images [JPEG]",
            
            "image/png": "PNG images [JPEG]",
            
            "image/svg+xml": "SVG images [JPEG]",
            
            "multipart/form-data": "Form submission [RFC7578]",
            
            "multipart/mixed": "Generic mixed content [RFC2046]",
            
            "multipart/x-mixed-replace": "Streaming server push",
            
            "text/cache-manifest": "Offline application cache manifests",
            
            "text/css": "CSS [CSS]",
            
            "text/ecmascript": "JavaScript (legacy type) [ECMA262]",
            
            "text/event-stream": "Server-sent event streams",
            
            "text/javascript": "JavaScript [ECMA262]",
            
            "text/javascript1.0": "JavaScript (legacy type) [ECMA262]",
            
            "text/javascript1.1": "JavaScript (legacy type) [ECMA262]",
            
            "text/javascript1.2": "JavaScript (legacy type) [ECMA262]",
            
            "text/javascript1.3": "JavaScript (legacy type) [ECMA262]",
            
            "text/javascript1.4": "JavaScript (legacy type) [ECMA262]",
            
            "text/javascript1.5": "JavaScript (legacy type) [ECMA262]",
            
            "text/jscript": "JavaScript (legacy type) [ECMA262]",
            
            "text/json": "JSON (legacy type)",
            
            "text/livescript": "JavaScript (legacy type) [ECMA262]",
            
            "text/plain": "Generic plain text [RFC2046] [RFC3676]",
            
            "text/html": "HTML",
            
            "text/ping": "Hyperlink auditing",
            
            "text/uri-list": "List of URLs [RFC2483]",
            
            "text/vcard": "vCard [RFC6350]",
            
            "text/vtt": "WebVTT [WEBVTT]",
            
            "text/x-ecmascript": "JavaScript (legacy type) [ECMA262]",
            
            "text/x-javascript": "JavaScript (legacy type) [ECMA262]",
            
            "text/xml": "XML [XML] [RFC7303]",
            
            "video/mp4": "MPEG-4 video [RFC4337]",
            
            "video/mpeg": "MPEG video [RFC2046]"
        } // end "MIME Types" object
        
    } // end "WHATWG HTML5" object
};

/*
button
fieldset
input
keygen
label
object
output
select
textarea
img

*/

/*

html5.form = {};

html5.form.attributes = [accept-charset, accesskey, action, autocomplete, class, contenteditable, contextmenu, dir, draggable, dropzone, enctype, hidden, id, itemid, itemprop, itemref, itemscope, itemtype, lang, method, name, novalidate, onabort, onautocomplete, onautocompleteerror, onblur, oncancel, oncanplay, oncanplaythrough, onchange, onclick, onclose, oncontextmenu, oncuechange, ondblclick, ondrag, ondragend, ondragenter, ondragexit, ondragleave, ondragover, ondragstart, ondrop, ondurationchange, onemptied, onended, onerror, onfocus, oninput, oninvalid, onkeydown, onkeypress, onkeyup, onload, onloadeddata, onloadedmetadata, onloadstart, onmousedown, onmouseenter, onmouseleave, onmousemove, onmouseout, onmouseover, onmouseup, onmousewheel, onpause, onplay, onplaying, onprogress, onratechange, onreset, onresize, onscroll, onseeked, onseeking, onselect, onshow, onsort, onstalled, onsubmit, onsuspend, ontimeupdate, ontoggle, onvolumechange, onwaiting, spellcheck, style, tabindex, target, title, translate]
 
html5.form.action = "The URI of a program that processes the form information. This value can be overridden by a formaction attribute on a <button> or &lt;input&gt; element."

*/