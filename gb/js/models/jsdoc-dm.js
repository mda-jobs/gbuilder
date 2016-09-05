'strict mode';

let jsdoc = { // @use JSDoc Index [http://usejsdoc.org/] - JSDoc 3 (GitHub) [https://github.com/jsdoc3/jsdoc]
    
    "terms": "@abstract, @access, @alias, @augments, @author, @borrows, @callback, @class, @classdesc, @constant, @constructs, @copyright, @default, @deprecated, @description, @enum, @event, @example, @exports, @external, @file, @fires, @function, @global, @ignore, @implements, @inheritdoc, @inner, @instance, @interface, @kind, @lends, @license, @listens, @member, @memberof, @mixes, @mixin, @module, @name, @namespace, @override, @param, @private, @property, @protected, @public, @readonly, @requires, @returns, @see, @since, @static, @summary, @this, @throws, @todo, @tutorial, @type, @typedef, @variation, @version",
    
    "term": {
        
        "@abstract": {
            "synonyms": "@virtual",
            "summary": "This member must be implemented (or overridden) by the inheritor.",
            "url": "http://usejsdoc.org/tags-abstract.html"
        },
        
        "@access": {
            "synonyms": "",
            "summary": "Specify the access level of this member (private, public, or protected).",
            "url": "http://usejsdoc.org/tags-access.html"
        },
        
        "@alias": {
            "synonyms": "",
            "summary": "Treat a member as if it had a different name.",
            "url": "http://usejsdoc.org/tags-alias.html"
        },
        
        "@augments": {
            "synonyms": "@extends",
            "summary": "Indicate that a symbol inherits from, ands adds to, a parent symbol.",
            "url": "http://usejsdoc.org/tags-augments.html"
        },
        
        "@author": {
            "synonyms": "",
            "summary": "Identify the author of an item.",
            "url": "http://usejsdoc.org/tags-author.html"
        },
        
        "@borrows": {
            "synonyms": "",
            "summary": "This object uses something from another object.",
            "url": "http://usejsdoc.org/tags-borrows.html"
        },
        
        "@callback": {
            "synonyms": "",
            "summary": "Document a callback function.",
            "url": "http://usejsdoc.org/tags-callback.html"
        },
        
        "@class": {
            "synonyms": "@constructor",
            "summary": "This function is intended to be called with the "new" keyword.",
            "url": "http://usejsdoc.org/tags-class.html"
        },
        
        "@classdesc": {
            "synonyms": "",
            "summary": "Use the following text to describe the entire class.",
            "url": "http://usejsdoc.org/tags-classdesc.html"
        },
        
        "@constant": {
            "synonyms": "@const",
            "summary": "Document an object as a constant.",
            "url": "http://usejsdoc.org/tags-constant.html"
        },
        
        "@constructs": {
            "synonyms": "",
            "summary": "This function member will be the constructor for the previous class.",
            "url": "http://usejsdoc.org/tags-constructs.html"
        },
        
        "@copyright": {
            "synonyms": "",
            "summary": "Document some copyright information.",
            "url": "http://usejsdoc.org/tags-copyright.html"
        },
        
        "@default": {
            "synonyms": "@defaultvalue",
            "summary": "Document the default value.",
            "url": "http://usejsdoc.org/tags-default.html"
        },
        
        "@deprecated": {
            "synonyms": "",
            "summary": "Document that this is no longer the preferred way.",
            "url": "http://usejsdoc.org/tags-deprecated.html"
        },
        
        "@description": {
            "synonyms": "@desc",
            "summary": "Describe a symbol.",
            "url": "http://usejsdoc.org/tags-description.html"
        },
        
        "@enum": {
            "synonyms": "",
            "summary": "Document a collection of related properties.",
            "url": "http://usejsdoc.org/tags-enum.html"
        },
        
        "@event": {
            "synonyms": "",
            "summary": "Document an event.",
            "url": "http://usejsdoc.org/tags-event.html"
        },
        
        "@example": {
            "synonyms": "",
            "summary": "Provide an example of how to use a documented item.",
            "url": "http://usejsdoc.org/tags-example.html"
        },
        
        "@exports": {
            "synonyms": "",
            "summary": "Identify the member that is exported by a JavaScript module.",
            "url": "http://usejsdoc.org/tags-exports.html"
        },
        
        "@external": {
            "synonyms": "@host",
            "summary": "Identifies an external class, namespace, or module.",
            "url": "http://usejsdoc.org/tags-external.html"
        },
        
        "@file": {
            "synonyms": "@fileoverview, @overview",
            "summary": "Describe a file.",
            "url": "http://usejsdoc.org/tags-file.html"
        },
        
        "@fires": {
            "synonyms": "@emits",
            "summary": "Describe the events this method may fire.",
            "url": "http://usejsdoc.org/tags-fires.html"
        },
        
        "@function": {
            "synonyms": "@func, @method",
            "summary": "Describe a function or method.",
            "url": "http://usejsdoc.org/tags-function.html"
        },
        
        "@global": {
            "synonyms": "",
            "summary": "Document a global object.",
            "url": "http://usejsdoc.org/tags-global.html"
        },
        
        "@ignore": {
            "synonyms": "",
            "summary": "Omit a symbol from the documentation.",
            "url": "http://usejsdoc.org/tags-ignore.html"
        },
        
        "@implements": {
            "synonyms": "",
            "summary": "This symbol implements an interface.",
            "url": "http://usejsdoc.org/tags-implements.html"
        },
        
        "@inheritdoc": {
            "synonyms": "",
            "summary": "Indicate that a symbol should inherit its parent's documentation.",
            "url": "http://usejsdoc.org/tags-inheritdoc.html"
        },
        
        "@inner": {
            "synonyms": "",
            "summary": "Document an inner object.",
            "url": "http://usejsdoc.org/tags-inner.html"
        },
        
        "@instance": {
            "synonyms": "",
            "summary": "Document an instance member.",
            "url": "http://usejsdoc.org/tags-instance.html"
        },
        
        "@interface": {
            "synonyms": "",
            "summary": "This symbol is an interface that others can implement.",
            "url": "http://usejsdoc.org/tags-interface.html"
        },
        
        "@kind": {
            "synonyms": "",
            "summary": "What kind of symbol is this?",
            "url": "http://usejsdoc.org/tags-kind.html"
        },
        
        "@lends": {
            "synonyms": "",
            "summary": "Document properties on an object literal as if they belonged to a symbol with a given name.",
            "url": "http://usejsdoc.org/tags-lends.html"
        },
        
        "@license": {
            "synonyms": "",
            "summary": "Identify the license that applies to this code.",
            "url": "http://usejsdoc.org/tags-license.html"
        },
        
        "@listens": {
            "synonyms": "",
            "summary": "List the events that a symbol listens for.",
            "url": "http://usejsdoc.org/tags-listens.html"
        },
        
        "@member": {
            "synonyms": "@var",
            "summary": "Document a member.",
            "url": "http://usejsdoc.org/tags-member.html"
        },
        
        "@memberof": {
            "synonyms": "",
            "summary": "This symbol belongs to a parent symbol.",
            "url": "http://usejsdoc.org/tags-memberof.html"
        },
        
        "@mixes": {
            "synonyms": "",
            "summary": "This object mixes in all the members from another object.",
            "url": "http://usejsdoc.org/tags-mixes.html"
        },
        
        "@mixin": {
            "synonyms": "",
            "summary": "Document a mixin object.",
            "url": "http://usejsdoc.org/tags-mixin.html"
        },
        
        "@module": {
            "synonyms": "",
            "summary": "Document a JavaScript module.",
            "url": "http://usejsdoc.org/tags-module.html"
        },
        
        "@name": {
            "synonyms": "",
            "summary": "Document the name of an object.",
            "url": "http://usejsdoc.org/tags-name.html"
        },
        
        "@namespace": {
            "synonyms": "",
            "summary": "Document a namespace object.",
            "url": "http://usejsdoc.org/tags-namespace.html"
        },
        
        "@override": {
            "synonyms": "",
            "summary": "Indicate that a symbol overrides its parent.bol listens for.",
            "url": "http://usejsdoc.org/tags-override.html"
        },
        
        "@param": {
            "synonyms": "@arg, @argument",
            "summary": "Document the parameter to a function.",
            "url": "http://usejsdoc.org/tags-param.html"
        },
        
        "@private": {
            "synonyms": "",
            "summary": "This symbol is meant to be private.",
            "url": "http://usejsdoc.org/tags-private.html"
        },
        
        "@property": {
            "synonyms": "@prop",
            "summary": "Document a property of an object.",
            "url": "http://usejsdoc.org/tags-property.html"
        },
        
        "@protected": {
            "synonyms": "",
            "summary": "This symbol is meant to be protected.",
            "url": "http://usejsdoc.org/tags-protected.html"
        },
        
        "@public": {
            "synonyms": "",
            "summary": "This symbol is meant to be public.",
            "url": "http://usejsdoc.org/tags-public.html"
        },
        
        "@readonly": {
            "synonyms": "",
            "summary": "This symbol is meant to be read-only.",
            "url": "http://usejsdoc.org/tags-readonly.html"
        },
        
        "@requires": {
            "synonyms": "",
            "summary": "This file requires a JavaScript module.",
            "url": "http://usejsdoc.org/tags-requires.html"
        },
        
        "@returns": {
            "synonyms": "@return",
            "summary": "Document the return value of a function.",
            "url": "http://usejsdoc.org/tags-returns.html"
        },
        
        "@see": {
            "synonyms": "",
            "summary": "Refer to some other documentation for more information.",
            "url": "http://usejsdoc.org/tags-see.html"
        },
        
        "@since": {
            "synonyms": "",
            "summary": "When was this feature added?",
            "url": "http://usejsdoc.org/tags-since.html"
        },
        
        "@static": {
            "synonyms": "",
            "summary": "Document a static member.",
            "url": "http://usejsdoc.org/tags-static.html"
        },
        
        "@summary": {
            "synonyms": "",
            "summary": "A shorter version of the full description.",
            "url": "http://usejsdoc.org/tags-summary.html"
        },
        
        "@this": {
            "synonyms": "",
            "summary": "What does the 'this' keyword refer to here?",
            "url": "http://usejsdoc.org/tags-this.html"
        },
        
        "@throws": {
            "synonyms": "@exception",
            "summary": "Describe what errors could be thrown.",
            "url": "http://usejsdoc.org/tags-throws.html"
        },
        
        "@todo": {
            "synonyms": "",
            "summary": "Document tasks to be completed.",
            "url": "http://usejsdoc.org/tags-todo.html"
        },
        
        "@tutorial": {
            "synonyms": "",
            "summary": "Insert a link to an included tutorial file.",
            "url": "http://usejsdoc.org/tags-tutorial.html"
        },
        
        "@type": {
            "synonyms": "",
            "summary": "Document the type of an object.",
            "url": "http://usejsdoc.org/tags-type.html"
        },
        
        "@typedef": {
            "synonyms": "",
            "summary": "Document a custom type.",
            "url": "http://usejsdoc.org/tags-typedef.html"
        },
        
        "@variation": {
            "synonyms": "",
            "summary": "Distinguish different objects with the same name.",
            "url": "http://usejsdoc.org/tags-variation.html"
        },
        
        "@version": {
            "synonyms": "",
            "summary": "Documents the version number of an item.",
            "url": ""
        }
    } // end term object
} // end jsdoc object