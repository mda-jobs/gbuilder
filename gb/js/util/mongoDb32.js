'use strict';
/**
 * Returns the type of a native, host or user-defined object
 * @param {object} type
 */
function typeOf( type) {
    try {
        let s = type.constructor.toString();
        return s.slice( 9, s.indexOf("("));
    }
    catch( e) {
        return Object.prototype.toString.call(type).slice(8, -1);
    }
}
/**
 * Search a data model in search of a matching key--  
 * for example, search on the mongoDb32-dm.js data model to search for a database command, operator, or shell command.
 * @param {object} root - Root of search path for secondary elements in the schema object to be appended to 
 * @param {object} schema - The object providing meta data for this search, for example, the structure of a model hierarchy.
 * @param {string} key - The search key, for example, the MongoDB "$group" pipeline aggregation operator.
 * @param {string} suffix = A string representation of the array notation to be appended to the end of each string.
 */
function searchDataModel( root, schema, key) {
    
    let metaData = eval( schema), // string to object conversion
        stack = []; // "tree" path components ("nodes")
    
    for( let p in metaData) { // traverse doesn't navigate top level object transitions, i.e., doesn't detect end of traversal. Therefore, process top-level nodes one-at-a-time.
        
        stack.push( p); //
        let md = eval( schema  + "[\"" + p +  "\"]"); // top level object
        traverse( md);
    }
    /**
    * Traverse top-level schema objects for the purpose of identifying array "leaf" objects
    * @param {object} obj - find properties of 'type Object'
    */
    function traverse( obj) {
        
        let upLevel = false; // flag used to detect when to ajust stack, i.e., remove nodes
    
        for( var p in obj) {
            if( typeOf( obj[ p]) === "Object") {
                stack.push(p);
                traverse( obj[ p]); // continue search for next "leaf" node
            }
            else { // process detected "leaf"
                upLevel = true; // flag node for removal
                stack.push(p);
                searchArrays("[\"" + stack.join().replace(/,/g, "\"][\"") + "\"]");
            }
        }
        if( upLevel === true) {
            stack.pop(); // remove node
            upLevel = false; // reset flag
        };
    }
    /**
     * Final path assembly and search for 'key'.
     * @param {string} string representation of partial path to array node
     */
    function searchArrays( path) {
        
        let arr = eval( root + path); // array object to traverse
        for( let i = 1; i < arr.length; i++) {
          if( key === arr[i][0]) {
              console.log( root + path);
              console.log("\t" + key)
          }
        }
        stack.pop(); // done processing, so remove this property name from stack
    }
}

/*

    Resources:
    
        Find or Query Data with Node.js
        https://docs.mongodb.com/getting-started/node/query/
        
        FAQ: MongoDB Fundamentals
        https://docs.mongodb.com/manual/faq/fundamentals/
        
        mongo Shell Quick Reference
        https://docs.mongodb.com/manual/reference/mongo-shell/
        
        MongoDB CRUD Operations
        https://docs.mongodb.com/manual/crud/
        
        MongoDB Scripting
        https://docs.mongodb.com/v3.0/administration/scripting/
        
        noSQL Databases Explained [https://www.mongodb.com/nosql-explained]
        
        Write Scripts for the mongo Shell
        https://docs.mongodb.com/manual/tutorial/write-scripts-for-the-mongo-shell/

    Definitions:
    
        collection - If a collection does not exist, MongoDB creates the collection when you first store data for that collection. 
        
        database - If a database does not exist, MongoDB creates the database when you first store data for that database. As such, you can switch to a non-existent database with the following command at the mongo prompt: use <dbname>.
          
        mongo ::= The mongo shell is an interactive JavaScript interface to MongoDB and is a component of the MongoDB package. You can use the mongo shell to query and update data as well as perform administrative operations. [https://docs.mongodb.com/getting-started/shell/client/]

        mongod ::= mongod is the primary daemon process for the MongoDB system. It handles data requests, manages data access, and performs background management operations. [https://docs.mongodb.com/manual/reference/program/mongod/]

        mongoDB ::= See mongoDB Server
        
        mongoDB Server ::= MongoDB is a cross-platform and open-source document-oriented database, a kind of NoSQL database. As a NoSQL database, MongoDB shuns the relational database's table-based structure to adapt JSON-like documents that have dynamic schemas which it calls BSON. [https://www.techopedia.com/definition/30340/mongodb]
        
        MongoLab ::= See mLab

        mongos ::= mongos for “MongoDB Shard,” is a routing service for MongoDB shard configurations that processes queries from the application layer, and determines the location of this data in the sharded cluster, in order to complete these operations. From the perspective of the application, a mongos instance behaves identically to any other MongoDB instance. [https://docs.mongodb.com/manual/reference/program/mongos/]
        
    Articles:  
    
        An Introduction To Node.js And MongoDB By Elliot Bonneville
        https://www.smashingmagazine.com/2014/05/detailed-introduction-nodejs-mongodb/
        
        MongoLab Changes Its Name To mLab As It looks Beyond Database Management
        https://techcrunch.com/2016/02/29/mongolab-is-now-mlab/
        
        How to Install Node.js
        https://howtonode.org/how-to-install-nodejs
        
    Tools:
    
        Mongoose
    
    
    Services:
    
        mLab - Database-as-a-Service for MongoDB
        https://mlab.com/
        
       
*/

