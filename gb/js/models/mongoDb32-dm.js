'use strict';

(function() {
    
    let mongoDb32 = { /* https://docs.mongodb.org/manual/reference/command/#user-commands */
    
        "keywords": "$, $abs, $add, $addToSet, $all, $allElementsTrue, $and, $anyElementTrue, $arrayElemAt, $avg, addShard, aggregate, applyOps, authenticate, authSchemaUpgrade, availableQueryOptions, $bit, $bitsAllClear, $bitsAllSet, $bitsAnyClear, $bitsAnySet, buildInfo, Bulk(), Bulk.execute(), Bulk.find(), Bulk.find.remove(), Bulk.find.removeOne(), Bulk.find.replaceOne(), Bulk.find.update(), Bulk.find.updateOne(), Bulk.find.upsert(), Bulk.getOperations(), Bulk.insert(), Bulk.tojson(), Bulk.toString(), BulkWriteResult(), $ceil, $cmp, $comment, $concat, $concatArrays, $cond, $currentDate, captrunc, cat(), cd(), checkShardingIndex, clean, cleanupOrphaned, clone, cloneCollection, cloneCollectionAsCapped, collMod, collStats, compact, configureFailPoint, connect(), connectionStatus, connPoolStats, connPoolSync, convertToCapped, copydb, copydbgetnonce, copyDbpath(), count, create, createIndexes, createRole, createUser, cursor.batchSize(), cursor.close(), cursor.comment(), cursor.count(), cursor.explain(), cursor.forEach(), cursor.hasNext(), cursor.hint(), cursor.itcount(), cursor.limit(), cursor.map(), cursor.max(), cursor.maxScan(), cursor.maxTimeMS(), cursor.min(), cursor.next(), cursor.noCursorTimeout(), cursor.objsLeftInBatch(), cursor.pretty(), cursor.readConcern(), cursor.readPref(), cursor.returnKey(), cursor.showRecordId(), cursor.size(), cursor.skip(), cursor.snapshot(), cursor.sort(), cursor.tailable(), cursor.toArray(), cursorInfo, $dateToString, $dayOfMonth, $dayOfWeek, $dayOfYear, $divide, dataSize, Date(), db.auth(), db.changeUserPassword(), db.cloneCollection(), db.cloneDatabase(), db.collection.aggregate(), db.collection.bulkWrite(), db.collection.copyTo(), db.collection.count(), db.collection.createIndex(), db.collection.dataSize(), db.collection.deleteMany(), db.collection.deleteOne(), db.collection.distinct(), db.collection.drop(), db.collection.dropIndex(), db.collection.dropIndexes(), db.collection.ensureIndex(), db.collection.explain(), db.collection.find(), db.collection.findAndModify(), db.collection.findOne(), db.collection.findOneAndDelete(), db.collection.findOneAndReplace(), db.collection.findOneAndUpdate(), db.collection.getIndexes(), db.collection.getPlanCache(), db.collection.getShardDistribution(), db.collection.getShardVersion(), db.collection.group(), db.collection.initializeOrderedBulkOp(), db.collection.initializeUnorderedBulkOp(), db.collection.insert(), db.collection.insertMany(), db.collection.insertOne(), db.collection.isCapped(), db.collection.mapReduce(), db.collection.reIndex(), db.collection.remove(), db.collection.renameCollection(), db.collection.replaceOne(), db.collection.save(), db.collection.stats(), db.collection.storageSize(), db.collection.totalIndexSize(), db.collection.totalSize(), db.collection.update(), db.collection.updateMany(), db.collection.updateOne(), db.collection.validate(), db.commandHelp(), db.copyDatabase(), db.createCollection(), db.createRole(), db.createUser(), db.currentOp(), db.dropAllRoles(), db.dropAllUsers(), db.dropDatabase(), db.dropRole(), db.dropUser(), db.eval(), db.fsyncLock(), db.fsyncUnlock(), db.getCollection(), db.getCollectionInfos(), db.getCollectionNames(), db.getLastError(), db.getLastErrorObj(), db.getLogComponents(), db.getMongo(), db.getName(), db.getPrevError(), db.getProfilingLevel(), db.getProfilingStatus(), db.getReplicationInfo(), db.getRole(), db.getRoles(), db.getSiblingDB(), db.getUser(), db.getUsers(), db.grantPrivilegesToRole(), db.grantRolesToRole(), db.grantRolesToUser(), db.help(), db.hostInfo(), db.isMaster(), db.killOp(), db.listCommands(), db.loadServerScripts(), db.logout(), db.printCollectionStats(), db.printReplicationInfo(), db.printShardingStatus(), db.printSlaveReplicationInfo(), db.removeUser(), db.repairDatabase(), db.resetError(), db.revokePrivilegesFromRole(), db.revokeRolesFromRole(), db.revokeRolesFromUser(), db.runCommand(), db.serverBuildInfo(), db.serverCmdLineOpts(), db.serverStatus(), db.setLogLevel(), db.setProfilingLevel(), db.shutdownServer(), db.stats(), db.updateRole(), db.updateUser(), db.upgradeCheck(), db.upgradeCheckAllDBs(), db.version(), dbHash, dbStats, delete, diagLogging, distinct, driverOIDTest, drop, dropAllRolesFromDatabase, dropAllUsersFromDatabase, dropDatabase, dropIndexes, dropRole, dropUser, $each, $elemMatch, $eq, $exists, $exp, emptycapped, enableSharding, eval, explain, $filter, $first, $floor, features, filemd5, find, findAndModify, flushRouterConfig, forceerror, fsync, fuzzFile(), $geoIntersects, $geoNear, $geoWithin, $group, $gt, $gte, geoNear, geoSearch, getCmdLineOpts, getHostName(), getLastError, getLog, getMemInfo(), getMore, getnonce, getParameter, getPrevError, getShardMap, getShardVersion, godinsert, grantPrivilegesToRole, grantRolesToRole, grantRolesToUser, group, $hour, _hashBSONElement, handshake, hostInfo, hostname(), $ifNull, $in, $inc, $indexStats, $isArray, $isolated, _isWindows(), insert, invalidateUserCache, isdbgrid, isMaster, isSelf, journalLatencyTest, $last, $let, $limit, $literal, $ln, $log, $log10, $lookup, $lt, $lte, listCollections, listCommands, listDatabases, listFiles(), listIndexes, listShards, load(), logApplicationMessage, logout, logRotate, ls(), $map, $match, $max, $meta, $millisecond, $min, $minute, $mod, $month, $mul, $multiply, mapReduce, mapreduce.shardedfinish, md5sumFile(), medianKey, mergeChunks, mkdir(), Mongo(), Mongo.getDB(), Mongo.getReadPrefMode(), Mongo.getReadPrefTagSet(), Mongo.setReadPref(), Mongo.setSlaveOk(), moveChunk, movePrimary, _migrateClone, $ne, $near, $nearSphere, $nin, $nor, $not, Name, netstat, $or, $out, ObjectId.getTimestamp(), ObjectId.toString(), ObjectId.valueOf(), $pop, $position, $pow, $project, $pull, $pullAll, $push, $pushAll, parallelCollectionScan, ping, PlanCache.clear(), PlanCache.clearPlansByQuery(), PlanCache.getPlansByQuery(), PlanCache.help(), PlanCache.listQueryShapes(), planCacheClear, planCacheClearFilters, planCacheListFilters, planCacheListPlans, planCacheListQueryShapes, planCacheSetFilter, profile, pwd(), quit(), $redact, $regex, $rename, _rand(), _recvChunkAbort, _recvChunkCommit, _recvChunkStart, _recvChunkStatus, _replSetFresh, reIndex, removeFile(), removeShard, renameCollection, repairCursor, repairDatabase, replSetElect, replSetFreeze, replSetGetConfig, replSetGetRBID, replSetGetStatus, replSetHeartbeat, replSetInitiate, replSetMaintenance, replSetReconfig, replSetStepDown, replSetSyncFrom, replSetTest, resetDbpath(), resetError, resync, revokePrivilegesFromRole, revokeRolesFromRole, revokeRolesFromUser, rolesInfo, rs.add(), rs.addArb(), rs.conf(), rs.freeze(), rs.help(), rs.initiate(), rs.printReplicationInfo(), rs.printSlaveReplicationInfo(), rs.reconfig(), rs.remove(), rs.slaveOk(), rs.status(), rs.stepDown(), rs.syncFrom(), $sample, $second, $set, $setDifference, $setEquals, $setIntersection, $setIsSubset, $setOnInsert, $setUnion, $size, $skip, $slice, $sort, $sqrt, $stdDevPop, $stdDevSamp, $strcasecmp, $substr, $subtract, $sum, _srand(), serverStatus, setParameter, setShardVersion, setVerboseShell(), sh.addShard(), sh.addShardTag(), sh.addTagRange(), sh.disableBalancing(), sh.enableBalancing(), sh.enableSharding(), sh.getBalancerHost(), sh.getBalancerLockDetails(), sh.getBalancerState(), sh.help(), sh.isBalancerRunning(), sh.moveChunk(), sh.removeShardTag(), sh.removeTagRange(), sh.setBalancerState(), sh.shardCollection(), sh.splitAt(), sh.splitFind(), sh.startBalancer(), sh.status(), sh.stopBalancer(), sh.waitForBalancer(), sh.waitForBalancerOff(), sh.waitForDLock(), sh.waitForPingChange(), sh._adminCommand(), sh._checkFullName(), sh._checkMongos(), sh._lastMigration(), shardCollection, shardConnPoolStats, shardingState, shutdown, skewClockCommand, sleep, sleep(), split, splitChunk, splitVector, $text, $toLower, $toUpper, $trunc, $type, _transferMods, testDistLockWithSkew, testDistLockWithSyncCluster, top, touch, $unset, $unwind, unsetSharding, update, updateRole, updateUser, usersInfo, UUID(), validate, version(), $week, $where, whatsmyuri, writebacklisten, writeBacksQueued, WriteResult(), WriteResult.hasWriteConcernError(), WriteResult.hasWriteError(), $year",
            
        "schema": {
            
            "Database Commands": {
                
                "Auditing Commands": "https://docs.mongodb.org/manual/reference/command/#auditing-commands", 
                
                "Database Operations": {
                    
                    "Authentication Commands": "https://docs.mongodb.org/manual/reference/command/nav-authentication/",
                    
                    "Diagnostic Commands": "https://docs.mongodb.org/manual/reference/command/nav-diagnostic/",
                    
                    "Instance Administration Commands": "https://docs.mongodb.org/manual/reference/command/#database-operations", 
                    
                    "Role Management Commands": "https://docs.mongodb.org/manual/reference/command/nav-role-management/",
                    
                    "Replication Commands": "https://docs.mongodb.org/manual/reference/command/nav-replication/",
                    
                    "Sharding Commands": "https://docs.mongodb.org/manual/reference/command/nav-sharding/",
                    
                    "User Management Commands": "https://docs.mongodb.org/manual/reference/command/nav-user-management/"    
                },
                
                "Internal Commands": "https://docs.mongodb.org/manual/reference/command/#internal-commands",
                
                "Testing Commands": "https://docs.mongodb.org/manual/reference/command/#testing-commands",
                
                "User Commands": {
                    
                    "Aggregation Commands": "https://docs.mongodb.org/manual/reference/command/nav-aggregation/",
                    
                    "Geospatial Commands": "https://docs.mongodb.org/manual/reference/command/nav-geospatial/",
                    
                    "Query and Write Operation Commands": "https://docs.mongodb.org/manual/reference/command/nav-crud/",
                    
                    "Query Plan Cache Commands": "https://docs.mongodb.org/manual/reference/command/nav-plan-cache/"
                }
            }, 
            
            "mongo Shell Methods": {
                
                "Bulk Write Operations": "https://docs.mongodb.org/manual/core/bulk-write-operations/",
                
                "Collection": "https://docs.mongodb.org/manual/reference/method/#collection",
                
                "Connection": "https://docs.mongodb.org/manual/reference/method/#connection",
                
                "Constructors": "https://docs.mongodb.org/manual/reference/method/#constructors",
                
                "Cursor": "https://docs.mongodb.org/manual/reference/method/#cursor",
                
                "Database": "https://docs.mongodb.org/manual/reference/method/#database",
                
                "Native": "https://docs.mongodb.org/manual/reference/method/#native",
                
                "Query Plan Cache": "https://docs.mongodb.org/manual/reference/method/#query-plan-cache",
                
                "Replication": "https://docs.mongodb.org/manual/reference/method/#replication",
                
                "Role Management": "https://docs.mongodb.org/manual/reference/method/#role-management",
                
                "Sharding": "https://docs.mongodb.org/manual/reference/method/#sharding",
                
                "Subprocess": "https://docs.mongodb.org/manual/reference/method/#subprocess",
                
                "User Management": "https://docs.mongodb.org/manual/reference/method/#user-management"
            },
            
            "Operators": {
                
                "Aggregation Pipeline Operators": {
                    
                    "Accumulators": "https://docs.mongodb.org/manual/reference/operator/aggregation/#accumulators", 
                    
                    "Expression Operators": {
                        
                        "Arithmetic": "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators", 
                        
                        "Array": "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators", 
                        
                        "Boolean": "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators", 
                        
                        "Comparison": "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators", 
                        
                        "Conditional": "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators", 
                        
                        "Date": "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators",
                        
                        "Literal": "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators", 
                        
                        "Set": "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators", 
                        
                        "String": "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators", 
                        
                        "Text Search": "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators", 
                        
                        "Variable": "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"
                    },
                    
                    "Stage Operators": "https://docs.mongodb.org/manual/reference/operator/aggregation/#stage-operators"    
                },   
                
                "Query and Projection Operators": {
                    
                    "Projection Operators": "https://docs.mongodb.org/manual/reference/operator/query/#projection-operators", 
                    
                    "Query Selectors": {
                        
                        "Array": "https://docs.mongodb.org/manual/reference/operator/query/#query-selectors",
                        
                        "Bitwise": "https://docs.mongodb.org/manual/reference/operator/query/#query-selectors",
                        
                        "Comments": "https://docs.mongodb.org/manual/reference/operator/query/#query-selectors",
                        
                        "Comparison": "https://docs.mongodb.org/manual/reference/operator/query/#query-selectors",
                        
                        "Element": "https://docs.mongodb.org/manual/reference/operator/query/#query-selectors",
                        
                        "Evaluation": "https://docs.mongodb.org/manual/reference/operator/query/#query-selectors",
                        
                        "Geospatial": "https://docs.mongodb.org/manual/reference/operator/query/#query-selectors",
                        
                        "Logical": "https://docs.mongodb.org/manual/reference/operator/query/#query-selectors"
                    }
                },
                
                "Update Operators": {  /* https://docs.mongodb.org/manual/reference/operator/update-array/ */
                    
                    "Array": "https://docs.mongodb.org/manual/reference/operator/update-array/",
                    
                    "Bitwise": "https://docs.mongodb.org/manual/reference/operator/update-bitwise/",
                    
                    "Fields": "https://docs.mongodb.org/manual/reference/operator/update-field/",
                    
                    "Isolation": "https://docs.mongodb.org/manual/reference/operator/update-isolation/",
                    
                    "Modifiers": "https://docs.mongodb.org/manual/reference/operator/update/"
                },
            }  // end Operators object definition
        },  // end "schema" object definition
        
        "Database Commands": {  /* https://docs.mongodb.org/manual/reference/command/ */
            
            "Auditing Commands": [  /* https://docs.mongodb.org/manual/reference/command/#auditing-commands  -->   Database Commands > Auditing Commands */
                
                ["Token", "Summary", "References: Maintainer | Title | URL"],
                
                ["logApplicationMessage", "Posts a custom message to the audit log.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/logApplicationMessage/#dbcmd.logApplicationMessage"]]]
                
            ],
            
            "Database Operations": {  /* https://docs.mongodb.org/manual/reference/command/#database-operations  -->   Database Commands > Database Operations */
                
                "Authentication Commands": [  /*  https://docs.mongodb.org/manual/reference/command/nav-authentication/  -->  Database Commands > Database Operations > Authentication Commands*/
                    
                    ["Token", "Summary", "References: Maintainer | Title | URL"],
                    
                    ["authenticate", "Starts an authenticated session using a username and password.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/authenticate/#dbcmd.authenticate"]]],
                    
                    ["authSchemaUpgrade", "Supports the upgrade process for user data between version 2.4 and 2.6.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/authSchemaUpgrade/#dbcmd.authSchemaUpgrade"]]],
                    
                    ["copydbgetnonce", "This is an internal command to generate a one-time password for use with the copydb command.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/copydbgetnonce/#dbcmd.copydbgetnonce"]]],
                    
                    ["getnonce", "This is an internal command to generate a one-time password for authentication.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/getnonce/#dbcmd.getnonce"]]],
                    
                    ["logout", "Terminates the current authenticated session.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/logout/#dbcmd.logout"]]]
                ],
        
                "Diagnostic Commands": [  /* https://docs.mongodb.org/manual/reference/command/nav-diagnostic/  -->   Database Commands > Database Operations > Diagnostic Commands */
                    
                    ["Token", "Summary", "References: Maintainer | Title | URL"],
                    
                    ["availableQueryOptions", "Internal command that reports on the capabilities of the current MongoDB instance.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/availableQueryOptions/#dbcmd.availableQueryOptions"]]],
                    
                    ["buildInfo", "Displays statistics about the MongoDB build.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/buildInfo/#dbcmd.buildInfo"]]],
                    
                    ["collStats", "Reports storage utilization statics for a specified collection.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/collStats/#dbcmd.collStats"]]],
                    
                    ["connPoolStats", "Reports statistics on the outgoing connections from this MongoDB instance to other MongoDB instances in the deployment.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/connPoolStats/#dbcmd.connPoolStats"]]],
                    
                    ["cursorInfo", "Removed in MongoDB 3.2. Replaced with metrics.cursor.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/cursorInfo/#dbcmd.cursorInfo"]]],
                    
                    ["dataSize", "Returns the data size for a range of data. For internal use.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/dataSize/#dbcmd.dataSize"]]],
                    
                    ["dbHash", "Internal command to support sharding.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/dbHash/#dbcmd.dbHash"]]],
                    
                    ["dbStats", "Reports storage utilization statistics for the specified database.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/dbStats/#dbcmd.dbStats"]]],
                    
                    ["diagLogging", "Provides a diagnostic logging. For internal use.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/diagLogging/#dbcmd.diagLogging"]]],
                    
                    ["driverOIDTest", "Internal command that converts an ObjectId to a string to support tests.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/driverOIDTest/#dbcmd.driverOIDTest"]]],
                    
                    ["explain", "eturns information on the execution of various operations.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/explain/#dbcmd.explain"]]],
                    
                    ["features", "eports on features available in the current MongoDB instance.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/features/#dbcmd.features"]]],
                    
                    ["getCmdLineOpts", "Returns a document with the run-time arguments to the MongoDB instance and their parsed options.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/getCmdLineOpts/#dbcmd.getCmdLineOpts"]]],
                    
                    ["getLog", "Returns recent log messages.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/getLog/#dbcmd.getLog"]]],
                    
                    ["hostInfo", "Returns data that reflects the underlying host system.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/hostInfo/#dbcmd.hostInfo"]]],
                    
                    ["isSelf", "Internal command to support testing.", [["", "", ""]]],
                    
                    ["listCommands", "Lists all database commands provided by the current mongod instance", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/listCommands/#dbcmd.listCommands"]]],
                    
                    ["listDatabases", "Returns a document that lists all databases and returns basic database statistics.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/listDatabases/#dbcmd.listDatabases"]]],
                    
                    ["netstat", "Internal command that reports on intra-deployment connectivity. Only available for mongos instances.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/netstat/#dbcmd.netstat"]]],
                    
                    ["ping", "Internal command that tests intra-deployment connectivity.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/ping/#dbcmd.ping"]]],
                    
                    ["profile", "Interface for the database profiler.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/profile/#dbcmd.profile"]]],
                    
                    ["serverStatus", "Returns a collection metrics on instance-wide resource utilization and status.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/serverStatus/#dbcmd.serverStatus"]]],
                    
                    ["shardConnPoolStats", "Reports statistics on a mongos‘s connection pool for client operations against shards.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/shardConnPoolStats/#dbcmd.shardConnPoolStats"]]],
                    
                    ["top", "Returns raw usage statistics for each database in the mongod instance.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/top/#dbcmd.top"]]],
                    
                    ["validate", "Internal command that scans for a collection's data and indexes for correctness.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/validate/#dbcmd.validate"]]],
                    
                    ["whatsmyuri", "Internal command that returns information on the current client.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/whatsmyuri/#dbcmd.whatsmyuri"]]]
                ],
        
                "Instance Administration Commands": [  /* https://docs.mongodb.org/manual/reference/command/#database-operations  -->   Database Commands > Database Operations > Instance Administration Commands */
        
                    ["Token", "Summary", "References: Maintainer | Title | URL"],
                    
                    ["clean", "Internal namespace administration command.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/clean/#dbcmd.clean"]]],
                    
                    ["clone", "Copies a database from a remote host to the current host.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/clone/#dbcmd.clone"]]],
                    
                    ["cloneCollection", "Copies a collection from a remote host to the current host.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/cloneCollection/#dbcmd.cloneCollection"]]],
                    
                    ["cloneCollectionAsCapped", "Copies a non-capped collection as a new capped collection.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/cloneCollectionAsCapped/#dbcmd.cloneCollectionAsCapped"]]],
                    
                    ["collMod", "Add flags to collection to modify the behavior of MongoDB.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/collMod/#dbcmd.collMod"]]],
                    
                    ["compact", "Defragments a collection and rebuilds the indexes.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/compact/#dbcmd.compact"]]],
                    
                    ["connectionStatus", "Reports the authentication state for the current connection.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/connectionStatus/#dbcmd.connectionStatus"]]],
                    
                    ["convertToCapped", "Converts a non-capped collection to a capped collection.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/convertToCapped/#dbcmd.convertToCapped"]]],
                    
                    ["connPoolSync", "Internal command to flush connection pool.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/connPoolSync/#dbcmd.connPoolSync"]]],
                    
                    ["copydb", "Copies a database from a remote host to the current host.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/copydb/#dbcmd.copydb"]]],
                    
                    ["create", "Creates a collection and sets collection parameters.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/create/#dbcmd.create"]]],
                    
                    ["createIndexes", "Builds one or more indexes for a collection.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/createIndexes/#dbcmd.createIndexes"]]],
                    
                    ["drop", "Removes the specified collection from the database.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/drop/#dbcmd.drop"]]],
                    
                    ["dropDatabase", "Removes the current database.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/dropDatabase/#dbcmd.dropDatabase"]]],
                    
                    ["dropIndexes", "Removes indexes from a collection.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/dropIndexes/#dbcmd.dropIndexes"]]],
                    
                    ["filemd5", "Returns the md5 hash for files stored using GridFS.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/filemd5/#dbcmd.filemd5"]]],
                    
                    ["fsync", "Flushes pending writes to the storage layer and locks the database to allow backups.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/fsync/#dbcmd.fsync"]]],
                    
                    ["getParameter", "Retrieves configuration options.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/getParameter/#dbcmd.getParameter"]]],
                    
                    ["listCollections", "Returns a list of collections in the current database.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/listCollections/#dbcmd.listCollections"]]],
                    
                    ["listIndexes", "Lists all indexes for a collection.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/listIndexes/#dbcmd.listIndexes"]]],
                    
                    ["logRotate", "Rotates the MongoDB logs to prevent a single file from taking too much space.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/logRotate/#dbcmd.logRotate"]]],
                    
                    ["reIndex", "Rebuilds all indexes on a collection.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/reIndex/#dbcmd.reIndex"]]],
                    
                    ["renameCollection", "Changes the name of an existing collection.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/renameCollection/#dbcmd.renameCollection"]]],
                    
                    ["repairCursor", "Returns a cursor that iterates over all valid documents in a collection.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/repairCursor/#dbcmd.repairCursor"]]],
                    
                    ["repairDatabase", "Repairs any errors and inconsistencies with the data storage.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/repairDatabase/#dbcmd.repairDatabase"]]],
                    
                    ["setParameter", "Modifies configuration options.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/setParameter/#dbcmd.setParameter"]]],
                    
                    ["shutdown", "Shuts down the mongod or mongos process.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/shutdown/#dbcmd.shutdown"]]],
                    
                    ["touch", "Loads documents and indexes from data storage to memory.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/touch/#dbcmd.touch"]]]
                ],
        
                "Role Management Commands": [  /* https://docs.mongodb.org/manual/reference/command/nav-role-management/  -->   Database Commands > Database Operations > Role Management Commands */
                                
                    ["Token", "Summary", "References: Maintainer | Title | URL"],
                    
                    ["createRole", "Creates a role and specifies its privileges.", [["MongoDB", "Role Management Commands", "https://docs.mongodb.org/manual/reference/command/createRole/#dbcmd.createRole"]]],
                    
                    ["dropAllRolesFromDatabase", "Deletes all user-defined roles from a database", [["MongoDB", "Role Management Commands", "https://docs.mongodb.org/manual/reference/command/dropAllRolesFromDatabase/#dbcmd.dropAllRolesFromDatabase"]]],
                    
                    ["dropRole", "Deletes the user-defined role.", [["MongoDB", "Role Management Commands", "https://docs.mongodb.org/manual/reference/command/dropRole/#dbcmd.dropRole"]]],
                    
                    ["grantPrivilegesToRole", "Assigns privileges to a user-defined role.", [["MongoDB", "Role Management Commands", "https://docs.mongodb.org/manual/reference/command/grantPrivilegesToRole/#dbcmd.grantPrivilegesToRole"]]],
                    
                    ["grantRolesToRole", "Specifies roles from which a user-defined role inherits privileges.", [["MongoDB", "Role Management Commands", "https://docs.mongodb.org/manual/reference/command/grantRolesToRole/#dbcmd.grantRolesToRole"]]],
                    
                    ["invalidateUserCache", "Flushes the in-memory cache of user information, including credentials and roles.", [["MongoDB", "Role Management Commands", "https://docs.mongodb.org/manual/reference/command/invalidateUserCache/#dbcmd.invalidateUserCache"]]],
                    
                    ["revokePrivilegesFromRole", "Removes the specified privileges from a user-defined role.", [["MongoDB", "Role Management Commands", "https://docs.mongodb.org/manual/reference/command/revokePrivilegesFromRole/#dbcmd.revokePrivilegesFromRole"]]],
                    
                    ["revokeRolesFromRole", "Removes specified inherited roles from a user-defined role.", [["MongoDB", "Role Management Commands", "https://docs.mongodb.org/manual/reference/command/revokeRolesFromRole/#dbcmd.revokeRolesFromRole"]]],
                    
                    ["rolesInfo", "Returns information for the specified role or roles.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/rolesInfo/#dbcmd.rolesInfo"]]],
                    
                    ["updateRole", "Updates a user-defined role.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/updateRole/#dbcmd.updateRole"]]]
                ],
        
                "Replication Commands": [  /* https://docs.mongodb.org/manual/reference/command/nav-replication/  -->   Database Commands > Database Operations > Replication Commands */
                    
                    ["Token", "Summary", "References: Maintainer | Title | URL"],
                    
                    ["applyOps", "Internal command that applies oplog entries to the current data set.", [["MongoDB", "Replication Commands", "https://docs.mongodb.org/manual/reference/command/applyOps/#dbcmd.applyOps"]]],
                    
                    ["isMaster", "Displays information about this member's role in the replica set, including whether it is the master.", [["MongoDB", "Replication Commands", "https://docs.mongodb.org/manual/reference/command/isMaster/#dbcmd.isMaster"]]],
                    
                    ["replSetFreeze", "Prevents the current member from seeking election as primary for a period of time.", [["MongoDB", "Replication Commands", "https://docs.mongodb.org/manual/reference/command/replSetFreeze/#dbcmd.replSetFreeze"]]],
                    
                    ["replSetGetStatus", "Returns a document that reports on the status of the replica set.", [["MongoDB", "Replication Commands", "https://docs.mongodb.org/manual/reference/command/replSetGetStatus/#dbcmd.replSetGetStatus"]]],
                    
                    ["replSetInitiate", "Initializes a new replica set.", [["MongoDB", "Replication Commands", "https://docs.mongodb.org/manual/reference/command/replSetInitiate/#dbcmd.replSetInitiate"]]],
                    
                    ["replSetMaintenance", "Enables or disables a maintenance mode, which puts a secondary node in a RECOVERING state.", [["MongoDB", "Replication Commands", "https://docs.mongodb.org/manual/reference/command/replSetMaintenance/#dbcmd.replSetMaintenance"]]],
                    
                    ["replSetReconfig", "Applies a new configuration to an existing replica set.", [["MongoDB", "Replication Commands", "https://docs.mongodb.org/manual/reference/command/replSetReconfig/#dbcmd.replSetReconfig"]]],
                    
                    ["replSetStepDown", "Forces the current primary to step down and become a secondary, forcing an election.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/replSetStepDown/#dbcmd.replSetStepDown"]]],
                    
                    ["replSetSyncFrom", "Explicitly override the default logic for selecting a member to replicate from.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/replSetSyncFrom/#dbcmd.replSetSyncFrom"]]],
                    
                    ["resync", "Forces a mongod to re-synchronize from the master. For master-slave replication only.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/resync/#dbcmd.resync"]]],
                    
                    ["replSetGetConfig", "Returns the replica set's configuration object.", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/replSetGetConfig/"]]]
                ],
        
                "Sharding Commands": [  /* https://docs.mongodb.org/manual/reference/command/nav-sharding/  -->   Database Commands > Database Operations > Sharding Commands */
                    
                    ["Token", "Summary", "References: Maintainer | Title | URL"],
                    
                    ["addShard", "Adds a shard to a sharded cluster.", [["MongoDB", "Sharding Commands", "https://docs.mongodb.org/manual/reference/command/addShard/#dbcmd.addShard"]]],
                    
                    ["checkShardingIndex", "Internal command that validates index on shard key.", [["MongoDB", "Sharding Commands", "https://docs.mongodb.org/manual/reference/command/checkShardingIndex/#dbcmd.checkShardingIndex"]]],
                    
                    ["cleanupOrphaned", "Removes orphaned data with shard key values outside of the ranges of the chunks owned by a shard.", [["MongoDB", "Sharding Commands", "https://docs.mongodb.org/manual/reference/command/cleanupOrphaned/#dbcmd.cleanupOrphaned"]]],
                    
                    ["enableSharding", "Enables sharding on a specific database.", [["MongoDB", "Sharding Commands", "https://docs.mongodb.org/manual/reference/command/enableSharding/#dbcmd.enableSharding"]]],
                    
                    ["flushRouterConfig", "Forces an update to the cluster metadata cached by a mongos.", [["MongoDB", "Sharding Commands", "https://docs.mongodb.org/manual/reference/command/flushRouterConfig/#dbcmd.flushRouterConfig"]]],
                    
                    ["getShardMap", "Internal command that reports on the state of a sharded cluster.", [["MongoDB", "Sharding Commands", "https://docs.mongodb.org/manual/reference/command/getShardMap/#dbcmd.getShardMap"]]],
                    
                    ["getShardVersion", "Internal command that returns the config server version.", [["MongoDB", "Sharding Commands", "https://docs.mongodb.org/manual/reference/command/getShardVersion/#dbcmd.getShardVersion"]]],
                    
                    ["isdbgrid", "Verifies that a process is a mongos.", [["MongoDB", "Sharding Commands", "https://docs.mongodb.org/manual/reference/command/isdbgrid/#dbcmd.isdbgrid"]]],
                    
                    ["listShards", "Returns a list of configured shards.", [["MongoDB", "Sharding Commands", "https://docs.mongodb.org/manual/reference/command/listShards/#dbcmd.listShards"]]],
                    
                    ["medianKey", "Deprecated internal command. See splitVector.", [["MongoDB", "Sharding Commands", "https://docs.mongodb.org/manual/reference/command/medianKey/#dbcmd.medianKey"]]],
                    
                    ["mergeChunks", "Provides the ability to combine chunks on a single shard.", [["MongoDB", "Sharding Commands", "https://docs.mongodb.org/manual/reference/command/mergeChunks/#dbcmd.mergeChunks"]]],
                    
                    ["moveChunk", "Internal command that migrates chunks between shards.", [["MongoDB", "Sharding Commands", "https://docs.mongodb.org/manual/reference/command/moveChunk/#dbcmd.moveChunk"]]],
                    
                    ["movePrimary", "Reassigns the primary shard when removing a shard from a sharded cluster.", [["MongoDB", "Sharding Commands", "https://docs.mongodb.org/manual/reference/command/movePrimary/#dbcmd.movePrimary"]]],
                    
                    ["removeShard", "Starts the process of removing a shard from a sharded cluster.", [["MongoDB", "Sharding Commands", "https://docs.mongodb.org/manual/reference/command/removeShard/#dbcmd.removeShard"]]],
                    
                    ["setShardVersion", "Internal command to sets the config server version.", [["MongoDB", "Sharding Commands", "https://docs.mongodb.org/manual/reference/command/setShardVersion/#dbcmd.setShardVersion"]]],
                    
                    ["shardCollection", "Enables the sharding functionality for a collection, allowing the collection to be sharded.", [["MongoDB", "Sharding Commands", "https://docs.mongodb.org/manual/reference/command/shardCollection/#dbcmd.shardCollection"]]],
                    
                    ["shardingState", "Reports whether the mongod is a member of a sharded cluster.", [["MongoDB", "Sharding Commands", "https://docs.mongodb.org/manual/reference/command/shardingState/#dbcmd.shardingState"]]],
                    
                    ["split", "Creates a new chunk.", [["MongoDB", "Sharding Commands", "https://docs.mongodb.org/manual/reference/command/split/#dbcmd.split"]]],
                    
                    ["splitChunk", "Internal command to split chunk. Instead use the methods sh.splitFind() and sh.splitAt().", [["MongoDB", "Sharding Commands", "https://docs.mongodb.org/manual/reference/command/splitChunk/#dbcmd.splitChunk"]]],
                    
                    ["splitVector", "Internal command that determines split points.", [["MongoDB", "Sharding Commands", "https://docs.mongodb.org/manual/reference/command/splitVector/#dbcmd.splitVector"]]],
                    
                    ["unsetSharding", "Internal command that affects connections between instances in a MongoDB deployment.", [["MongoDB", "Sharding Commands", "https://docs.mongodb.org/manual/reference/command/unsetSharding/#dbcmd.unsetSharding"]]],
                ],
        
                "User Management Commands": [  /* https://docs.mongodb.org/manual/reference/command/nav-user-management/  -->   Database Commands > Database Operations > User Management Commands */
        
                    ["Token", "Summary", "References: Maintainer | Title | URL"],
                    
                    ["createUser", "Creates a new user.", [["MongoDB", "User Management Commands", "https://docs.mongodb.org/manual/reference/command/createUser/#dbcmd.createUser"]]],
                    
                    ["dropAllUsersFromDatabase", "Deletes all users associated with a database.", [["MongoDB", "User Management Commands", "https://docs.mongodb.org/manual/reference/command/dropAllUsersFromDatabase/#dbcmd.dropAllUsersFromDatabase"]]],
                    
                    ["dropUser", "Removes a single user.", [["MongoDB", "User Management Commands", "https://docs.mongodb.org/manual/reference/command/dropUser/#dbcmd.dropUser"]]],
                    
                    ["grantRolesToUser", "Grants a role and its privileges to a user.", [["MongoDB", "User Management Commands", "https://docs.mongodb.org/manual/reference/command/grantRolesToUser/#dbcmd.grantRolesToUser"]]],
                    
                    ["revokeRolesFromUser", "Removes a role from a user.", [["MongoDB", "User Management Commands", "https://docs.mongodb.org/manual/reference/command/revokeRolesFromUser/#dbcmd.revokeRolesFromUser"]]],
                    
                    ["updateUser", "Updates a user's data.", [["MongoDB", "User Management Commands", "https://docs.mongodb.org/manual/reference/command/updateUser/#dbcmd.updateUs"]]],
                    
                    ["usersInfo", "Returns information about the specified users.", [["MongoDB", "User Management Commands", "https://docs.mongodb.org/manual/reference/command/usersInfo/#dbcmd.usersInfo"]]]
                ]
            },  //end "Database Operations" object definition
            
            "Internal Commands": [  /* https://docs.mongodb.org/manual/reference/command/#internal-commands  -->   Database Commands > Internal Commands */ 
                
                ["Token", "Summary", "References: Maintainer | Title | URL"],
                
                ["_migrateClone", "Internal command that supports chunk migration. Do not call directly.", [["MongoDB", "Internal Commands", "https://docs.mongodb.org/manual/reference/command/migrateClone/#dbcmd._migrateClone"]]],
                
                ["_recvChunkAbort", "Internal command that supports chunk migrations in sharded clusters. Do not call directly.", [["MongoDB", "Internal Commands", "https://docs.mongodb.org/manual/reference/command/recvChunkAbort/#dbcmd._recvChunkAbort"]]],
                
                ["_recvChunkCommit", "Internal command that supports chunk migrations in sharded clusters. Do not call directly.", [["MongoDB", "Internal Commands", "https://docs.mongodb.org/manual/reference/command/recvChunkCommit/#dbcmd._recvChunkCommit"]]],
                
                ["_recvChunkStart", "Internal command that facilitates chunk migrations in sharded clusters.. Do not call directly.", [["MongoDB", "Internal Commands", "https://docs.mongodb.org/manual/reference/command/recvChunkStart/#dbcmd._recvChunkStart"]]],
                
                ["_recvChunkStatus", "Internal command that returns data to support chunk migrations in sharded clusters. Do not call directly.", [["MongoDB", "Internal Commands", "https://docs.mongodb.org/manual/reference/command/recvChunkStatus/#dbcmd._recvChunkStatus"]]],
                
                ["_replSetFresh", "Internal command that supports replica set election operations.", [["", "", ""]]],
                
                ["_transferMods", "Internal command that supports chunk migrations. Do not call directly.", [["MongoDB", "Internal Commands", "https://docs.mongodb.org/manual/reference/command/transferMods/#dbcmd._transferMods"]]],
                
                ["handshake", "Internal command.", [["MongoDB", "Internal Commands", "https://docs.mongodb.org/manual/reference/command/handshake/#dbcmd.handshake"]]],
                
                ["mapreduce.shardedfinish", "Internal command that supports map-reduce in sharded cluster environments.", [["MongoDB", "Internal Commands", "https://docs.mongodb.org/manual/reference/command/mapreduce.shardedfinish/#dbcmd.mapreduce.shardedfinish"]]],
                
                ["replSetElect", "Internal command that supports replica set functionality.", [["MongoDB", "Internal Commands", "https://docs.mongodb.org/manual/reference/command/replSetElect/#dbcmd.replSetElect"]]],
                
                ["replSetGetRBID", "Internal command that supports replica set operations.", [["MongoDB", "Internal Commands", "https://docs.mongodb.org/manual/reference/command/replSetGetRBID/#dbcmd.replSetGetRBID"]]],
                
                ["replSetHeartbeat", "Internal command that supports replica set operations.", [["MongoDB", "Internal Commands", "https://docs.mongodb.org/manual/reference/command/replSetHeartbeat/#dbcmd.replSetHeartbeat"]]],
                
                ["writebacklisten", "Internal command that supports chunk migrations in sharded clusters.", [["MongoDB", "Internal Commands", "https://docs.mongodb.org/manual/reference/command/writebacklisten/#dbcmd.writebacklisten"]]],
                
                ["writeBacksQueued", "Internal command that supports chunk migrations in sharded clusters", [["MongoDB", "Database Commands", "https://docs.mongodb.org/manual/reference/command/writebacklisten/#dbcmd.writebacklisten"]]] 
            ],    
            
            "Testing Commands": [  /* https://docs.mongodb.org/manual/reference/command/#testing-commands  -->   Database Commands > Testing Commands */ 
        
                ["_hashBSONElement", "Internal command. Computes the MD5 hash of a BSON element.", [["MongoDB", "Testing Commands", "https://docs.mongodb.org/manual/reference/command/hashBSONElement/#dbcmd._hashBSONElement"]]],
                
                ["captrunc", "Internal command. Truncates capped collections.", [["MongoDB", "Testing Commands", "https://docs.mongodb.org/manual/reference/command/captrunc/#dbcmd.captrunc"]]],
                
                ["configureFailPoint", "Internal command for testing. Configures failure points.", [["MongoDB", "Testing Commands", "https://docs.mongodb.org/manual/reference/command/configureFailPoint/#dbcmd.configureFailPoint"]]],
                
                ["emptycapped", "Internal command. Removes all documents from a capped collection.", [["MongoDB", "Testing Commands", "https://docs.mongodb.org/manual/reference/command/emptycapped/#dbcmd.emptycapped"]]],
                
                ["forceerror", "Internal command for testing. Forces a user assertion exception.", [["MongoDB", "Testing Commands", "https://docs.mongodb.org/manual/reference/command/forceerror/#dbcmd.forceerror"]]],
                
                ["godinsert", "Internal command for testing.", [["MongoDB", "Testing Commands", "https://docs.mongodb.org/manual/reference/command/godinsert/#dbcmd.godinsert"]]],
                
                ["journalLatencyTest", "Tests the time required to write and perform a file system sync for a file in the journal directory.", [["MongoDB", "Testing Commands", "https://docs.mongodb.org/manual/reference/command/journalLatencyTest/#dbcmd.journalLatencyTest"]]],
                
                ["replSetTest", "Internal command for testing replica set functionality.", [["MongoDB", "Testing Commands", "https://docs.mongodb.org/manual/reference/command/replSetTest/#dbcmd.replSetTest"]]],
                
                ["skewClockCommand", "Internal command. Do not call this command directly.", [["", "", ""]]],
                
                ["sleep", "Internal command for testing. Forces MongoDB to block all operations.", [["MongoDB", "Testing Commands", "https://docs.mongodb.org/manual/reference/command/sleep/#dbcmd.sleep"]]],
                
                ["testDistLockWithSkew", "Internal command. Do not call this directly.", [["", "", ""]]],
                
                ["testDistLockWithSyncCluster", "Internal command. Do not call this directly.", [["", "", ""]]]
            ],
           
            "User Commands": {  /* https://docs.mongodb.org/manual/reference/command/#user-commands  -->   Database Commands > User Commands */
                
                "Aggregation Commands": [  /* https://docs.mongodb.org/manual/reference/command/nav-aggregation/  -->   Database Commands > User Commands > Agregation Commands */ 
                    
                    ["Token", "Summary", "References: Maintainer | Title | URL"],
                    
                    ["aggregate", "Performs aggregation tasks such as group using the aggregation framework.", [["MongoDB", "Aggregation Commands", "https://docs.mongodb.org/manual/reference/command/aggregate/#dbcmd.aggregate"]]],
                    
                    ["count", "Counts the number of documents in a collection.", [["MongoDB", "Aggregation Commands", "https://docs.mongodb.org/manual/reference/command/count/#dbcmd.count"]]],
                    
                    ["distinct", "Displays the distinct values found for a specified key in a collection.", [["MongoDB", "Aggregation Commands", "https://docs.mongodb.org/manual/reference/command/distinct/#dbcmd.distinct"]]],
        
                    ["group", "Groups documents in a collection by the specified key and performs simple aggregation.", [["MongoDB", "Aggregation Commands", "https://docs.mongodb.org/manual/reference/command/group/#dbcmd.group"]]],
        
                    ["mapReduce", "Performs map-reduce aggregation for large data sets.", [["MongoDB", "Aggregation Commands", "https://docs.mongodb.org/manual/reference/command/mapReduce/#dbcmd.mapReduce"]]] 
                ],
                
                "Geospatial Commands": [   /* https://docs.mongodb.org/manual/reference/command/nav-geospatial/   -->   Database Commands > User Commands > Agregation Commands > Geospatial Commands*/ 
                    
                    ["Token", "Summary", "References: Maintainer | Title | URL"],
        
                    ["geoNear", "Performs a geospatial query that returns the documents closest to a given point.", [["MongoDB", "Geospatial Commands", "https://docs.mongodb.org/manual/reference/command/geoNear/#dbcmd.geoNear"]]],
        
                    ["geoSearch", "Performs a geospatial query that uses MongoDB's haystack index functionality.", [["MongoDB", "Geospatial Commands", "https://docs.mongodb.org/manual/reference/command/geoSearch/#dbcmd.geoSearch"]]]  
                ],
                
                "Query and Write Operation Commands": [  /* https://docs.mongodb.org/manual/reference/command/nav-crud/  -->   Database Commands > User Commands > Agregation Commands > Query and Write Operation Commands */ 
                    
                    ["Token", "Summary", "References: Maintainer | Title | URL"],
                    
                    ["delete", "Deletes one or more documents.", [["MongoDB", "Query and Write Operation Commands", "https://docs.mongodb.org/manual/reference/command/delete/#dbcmd.delete"]]],
                    
                    ["eval", "Deprecated. Runs a JavaScript function on the database server.", [["MongoDB", "Query and Write Operation Commands", "https://docs.mongodb.org/manual/reference/command/eval/#dbcmd.eval"]]],
                    
                    ["find", "Selects documents in a collection.", [["MongoDB", "Query and Write Operation Commands", "https://docs.mongodb.org/manual/reference/command/find/#dbcmd.find"]]],
                    
                    ["findAndModify", "Returns and modifies a single document.", [["MongoDB", "Query and Write Operation Commands", "https://docs.mongodb.org/manual/reference/command/findAndModify/#dbcmd.findAndModify"]]],
                    
                    ["getLastError", "Returns the success status of the last operation.", [["MongoDB", "Query and Write Operation Commands", "https://docs.mongodb.org/manual/reference/command/getLastError/#dbcmd.getLastError"]]],
                    
                    ["getMore", "Returns batches of documents currently pointed to by the cursor.", [["MongoDB", "Query and Write Operation Commands", "https://docs.mongodb.org/manual/reference/command/getMore/#dbcmd.getMore"]]],
                    
                    ["getPrevError", "Returns status document containing all errors since the last resetError command.", [["MongoDB", "Query and Write Operation Commands", "https://docs.mongodb.org/manual/reference/command/getPrevError/#dbcmd.getPrevError"]]],
                    
                    ["insert", "Inserts one or more documents.", [["MongoDB", "Query and Write Operation Commands", "https://docs.mongodb.org/manual/reference/command/insert/#dbcmd.insert"]]],
                    
                    ["parallelCollectionScan", "Lets applications use multiple parallel cursors when reading documents from a collection.", [["MongoDB", "Query and Write Operation Commands", "https://docs.mongodb.org/manual/reference/command/parallelCollectionScan/#dbcmd.parallelCollectionScan"]]],
                    
                    ["resetError", "Resets the last error status.", [["MongoDB", "Query and Write Operation Commands", "https://docs.mongodb.org/manual/reference/command/resetError/#dbcmd.resetError"]]],
                    
                    ["update", "Updates one or more documents.", [["MongoDB", "Query and Write Operation Commands", "https://docs.mongodb.org/manual/reference/command/update/#dbcmd.update"]]]          
                ],
                
                "Query Plan Cache Commands": [  /* https://docs.mongodb.org/manual/reference/command/nav-plan-cache/  -->   Database Commands > User Commands > Query Plan Cache Commands */ 
                                
                    ["Name", "Description", "References"],
                    
                    ["planCacheListFilters", "Lists the index filters for a collection.", [["MongoDB", "Query Plan Cache Commands", "https://docs.mongodb.org/manual/reference/command/planCacheListFilters/"]]], 
                    
                    ["planCacheSetFilter", "Sets an index filter for a collection.", [["MongoDB", "Query Plan Cache Commands", "https://docs.mongodb.org/manual/reference/command/planCacheSetFilter/#dbcmd.planCacheSetFilter"]]],
                    
                    ["planCacheClearFilters", "Clears index filter(s) for a collection.", [["MongoDB", "Query Plan Cache Commands", "https://docs.mongodb.org/manual/reference/command/planCacheClearFilters/#dbcmd.planCacheClearFilters"]]],
                    
                    ["planCacheListQueryShapes", "Displays the query shapes for which cached query plans exist.", [["MongoDB", "Query Plan Cache Commands", "https://docs.mongodb.org/manual/reference/command/planCacheListQueryShapes/#dbcmd.planCacheListQueryShapes"]]],
                    
                    ["planCacheListPlans", "Displays the cached query plans for the specified query shape.", [["MongoDB", "Query Plan Cache Commands", "https://docs.mongodb.org/manual/reference/command/planCacheListPlans/#dbcmd.planCacheListPlans"]]],
                    
                    ["planCacheClear", "Removes cached query plan(s) for a collection.", [["MongoDB", "Query Plan Cache Commands", "https://docs.mongodb.org/manual/reference/command/planCacheClear/#dbcmd.planCacheClear"]]]
                ]
            }
        },  // end "Database Commands" object definition
    
        "glossary": {  /* https://docs.mongodb.org/manual/reference/glossary/ */
            
            terms: "_id, $cmd, accumulator, action, admin database, aggregation, aggregation framework, arbiter, authentication, authorization, B-tree, balancer, BSON, BSON types, capped collection, CAP Theorem, checksum, chunk, client, cluster, collection, collection scan, compound index, concurrency control, config database, config server, connection, CRUD, CSV, cursor, daemon, data-center awareness, database, database command, database profiler, data directory, datum, dbpath, delayed member, diagnostic log, document, dot notation, draining, driver, durable, election, eventual consistency, expression, failover, field, field path, firewall, fsync, geohash, GeoJSON, geospatial, GridFS, hashed shard key, haystack index, hidden member, idempotent, index, initial sync, init script, intent lock, interrupt point, IPv6, ISODate, JavaScript, journal, JSON, JSON document, JSONP, least privilege, legacy coordinate pairs, LineString, lock, LVM, map-reduce, mapping type, master, md5, MIB, MIME, mongo, mongod, MongoDB, MongoDB Enterprise, mongos, namespace, natural order, network partition, ObjectId, operator, oplog, ordered query plan, orphaned document, padding, padding factor, page fault, partition, passive member, pcap, PID, pipe, pipeline, Point, Polygon, powerOf2Sizes, pre-splitting, prefix compression, primary, primary key, primary shard, priority, privilege, projection, query, query optimizer, query shape, RDBMS, read concern, read lock, read preference, record size, recovering, replica pairs, replica set, replication, replication lag, resident memory, resource, REST, role, rollback, secondary, secondary index, set name, shard, sharded cluster, sharding, shard key, shell helper, single-master replication, slave, snappy, split, SQL, SSD, stale, standalone, storage engine, storage order, strict consistency, sync, syslog, tag, tag set, tailable cursor, topology, TSV, TTL, unique index, unix epoch, unordered query plan, upsert, virtual memory, WGS84, working set, writeBacks, write concern, write conflict, write lock, zlib",
            
            term: {
                
                "_id": "A field required in every MongoDB document. The _id field must have a unique value. You can think of the _id field as the document's primary key. If you create a new document without an _id field, MongoDB automatically creates the field and assigns a unique BSON ObjectId.",
                
                "$cmd": "A special virtual collection that exposes MongoDB's database commands. To use database commands, see Issue Commands.",
                
                "accumulator": "An expression in the aggregation framework that maintains state between documents in the aggregation pipeline. For a list of accumulator operations, see $group.",
                
                "action": "An operation the user can perform on a resource. Actions and resources combine to create privileges. See action.",
                
                "admin database": "A privileged database. Users must have access to the admin database to run certain administrative commands. For a list of administrative commands, see Instance Administration Commands.",
                
                "aggregation": "Any of a variety of operations that reduces and summarizes large sets of data. MongoDB's aggregate() and mapReduce() methods are two examples of aggregation operations. For more information, see Aggregation.",
                
                "aggregation framework": "The set of MongoDB operators that let you calculate aggregate values without having to use map-reduce. For a list of operators, see Aggregation Reference.",
                
                "arbiter": "A member of a replica set that exists solely to vote in elections. Arbiters do not replicate data. See Replica Set Arbiter.",
                
                "authentication": "Verification of the user identity.",
                
                "authorization": "Provisioning of access to databases and operations. See Role-Based Access Control.",
                
                "B-tree": "A data structure commonly used by database management systems to store indexes. MongoDB uses B-trees for its indexes.",
                
                "balancer": "An internal MongoDB process that runs in the context of a sharded cluster and manages the migration of chunks. Administrators must disable the balancer for all maintenance operations on a sharded cluster. See Sharded Collection Balancing.",
                
                "BSON": "A serialization format used to store documents and make remote procedure calls in MongoDB. “BSON” is a portmanteau of the words “binary” and “JSON”. Think of BSON as a binary representation of JSON (JavaScript Object Notation) documents. See BSON Types and MongoDB Extended JSON.",
                
                "BSON types": "The set of types supported by the BSON serialization format. For a list of BSON types, see BSON Types.",
                
                "capped collection": "Given three properties of computing systems, consistency, availability, and partition tolerance, a distributed computing system can provide any two of these features, but never all three.",
                
                "CAP Theorem": "A fixed-sized collection that automatically overwrites its oldest entries when it reaches its maximum size. The MongoDB oplog that is used in replication is a capped collection. See Capped Collections.",
                
                "checksum": "A calculated value used to ensure data integrity. The md5 algorithm is sometimes used as a checksum.",
                
                "chunk": "A contiguous range of shard key values within a particular shard. Chunk ranges are inclusive of the lower boundary and exclusive of the upper boundary. MongoDB splits chunks when they grow beyond the configured chunk size, which by default is 64 megabytes. MongoDB migrates chunks when a shard contains too many chunks of a collection relative to other shards. See Data Partitioning and Sharding Mechanics.",
                
                "client": "The application layer that uses a database for data persistence and storage. Drivers provide the interface level between the application layer and the database server.",
                
                "cluster": "See sharded cluster.",
                
                "collection": "A grouping of MongoDB documents. A collection is the equivalent of an RDBMS table. A collection exists within a single database. Collections do not enforce a schema. Documents within a collection can have different fields. Typically, all documents in a collection have a similar or related purpose. See What is a namespace in MongoDB?.",
                
                "collection scan": "Collection scans are a query execution strategy where MongoDB must inspect every document in a collection to see if it matches the query criteria. These queries are very inefficient and do not use indexes. See Query Optimization for details about query execution strategies.",
                
                "compound index": "An index consisting of two or more keys. See Compound Indexes.",
                
                "concurrency control": "Concurrency control ensures that database operations can be executed concurrently without compromising correctness. Pessimistic concurrency control, such as used in systems with locks, will block any potentially conflicting operations even if they may not turn out to actually conflict. Optimistic concurrency control, the approach used by WiredTiger, will delay checking until after a conflict may have occurred, aborting and retrying one of the operations involved in any write conflict that arises.",
                
                "config database": "An internal database that holds the metadata associated with a sharded cluster. Applications and administrators should not modify the config database in the course of normal operation. See Config Database.",
                
                "config server": "A mongod instance that stores all the metadata associated with a sharded cluster. See Config Servers.",
                
                "connection": "Database connection. The means by which a database server and its client software communicate with each other.",
                
                "CRUD": "An acronym for the fundamental operations of a database: Create, Read, Update, and Delete. See MongoDB CRUD Operations.",
                
                "CSV": "A text-based data format consisting of comma-separated values. This format is commonly used to exchange data between relational databases since the format is well-suited to tabular data. You can import CSV files using mongoimport.",
                
                "cursor": "A pointer to the result set of a query. Clients can iterate through a cursor to retrieve results. By default, cursors timeout after 10 minutes of inactivity. See Cursors.",
                
                "daemon": "The conventional name for a background, non-interactive process.",
                
                "data-center awareness": "A property that allows clients to address members in a system based on their locations. Replica sets implement data-center awareness using tagging. See Data Center Awareness.",
                
                "database": "A physical container for collections. Each database gets its own set of files on the file system. A single MongoDB server typically has multiple databases.",
                
                "database command": "A MongoDB operation, other than an insert, update, remove, or query. For a list of database commands, see Database Commands. To use database commands, see Issue Commands.",
                
                "database profiler": "A tool that, when enabled, keeps a record on all long-running operations in a database's system.profile collection. The profiler is most often used to diagnose slow queries. See Database Profiling.",
                
                "data directory": "The file-system location where the mongod stores data files. The dbPath option specifies the data directory.",
                
                "datum": "A set of values used to define measurements on the earth. MongoDB uses the WGS84 datum in certain geospatial calculations. See Geospatial Indexes and Queries.",
                
                "dbpath": "The location of MongoDB's data file storage. See dbPath.",
                
                "delayed member": "A replica set member that cannot become primary and applies operations at a specified delay. The delay is useful for protecting data from human error (i.e. unintentionally deleted databases) or updates that have unforeseen effects on the production database. See Delayed Replica Set Members.",
                
                "diagnostic log": "A verbose log of operations stored in the dbpath. See the --diaglog option.",
                
                "document": "A record in a MongoDB collection and the basic unit of data in MongoDB. Documents are analogous to JSON objects but exist in the database in a more type-rich format known as BSON. See Documents.",
                
                "dot notation": "MongoDB uses the dot notation to access the elements of an array and to access the fields of an embedded document. See Dot Notation.",
                
                "draining": "The process of removing or “shedding” chunks from one shard to another. Administrators must drain shards before removing them from the cluster. See Remove Shards from an Existing Sharded Cluster.",
                
                "driver": "A client library for interacting with MongoDB in a particular language. See MongoDB Drivers and Client Libraries.",
                
                "durable": "A write operation is durable when it will persist across a shutdown (or crash) and restart of one or more server processes. For a single mongod server, a write operation is considered durable when it has been written to the server's journal file. For a replica set, a write operation is considerable durable once the write operation is durable on a majority of voting nodes in the replica set; i.e. written to a majority of voting nodes' journal files.",
                
                "election": "The process by which members of a replica set select a primary on startup and in the event of a failure. See Replica Set Elections.",
                
                "eventual consistency": "<p>A property of a distributed system that allows changes to the system to propagate gradually. In a database system, this means that readable members are not required to reflect the latest writes at all times.</p><p>In MongoDB, in a replica set with one primary member [1],</p><ul><li>With \"local\" readConcern, reads from the primary reflect the latest writes in absence of a failover;</li><li>With \"majority\" readConcern, read operations from the primary or the secondaries have eventual consistency.</li></ul>",
                
                "expression": "In the context of aggregation framework, expressions are the stateless transformations that operate on the data that passes through a pipeline. See Aggregation Pipeline.",
                
                "failover": "The process that allows a secondary member of a replica set to become primary in the event of a failure. See Replica Set High Availability.",
                
                "field": "A name-value pair in a document. A document has zero or more fields. Fields are analogous to columns in relational databases. See Document Structure.",
                
                "field path": "Path to a field in the document. To specify a field path, use a string that prefixes the field name with a dollar sign ($).",
                
                "firewall": "A system level networking filter that restricts access based on, among other things, IP address. Firewalls form a part of an effective network security strategy. See Firewalls.",
                
                "fsync": "A system call that flushes all dirty, in-memory pages to disk. MongoDB calls fsync() on its database files at least every 60 seconds. See fsync.",
                
                "geohash": "A geohash value is a binary representation of the location on a coordinate grid. See Calculation of Geohash Values for 2d Indexes.",
                
                "GeoJSON": "A geospatial data interchange format based on JavaScript Object Notation (JSON). GeoJSON is used in geospatial queries. For supported GeoJSON objects, see Location Data. For the GeoJSON format specification, see http://geojson.org/geojson-spec.html.",
                
                "geospatial": "Data that relates to geographical location. In MongoDB, you may store, index, and query data according to geographical parameters. See Geospatial Indexes and Queries.",
                
                "GridFS": "A convention for storing large files in a MongoDB database. All of the official MongoDB drivers support this convention, as does the mongofiles program. See GridFS.",
                
                "hashed shard key": "A special type of shard key that uses a hash of the value in the shard key field to distribute documents among members of the sharded cluster. See Hashed Index.",
                
                "haystack index": "A geospatial index that enhances searches by creating “buckets” of objects grouped by a second criterion. See geoHaystack Indexes.",
                
                "hidden member": "A replica set member that cannot become primary and are invisible to client applications. See Hidden Replica Set Members.",
                
                "idempotent": "The quality of an operation to produce the same result given the same input, whether run once or run multiple times.",
                
                "index": "A data structure that optimizes queries. See Index Concepts.",
                
                "initial sync": "A simple shell script, typically located in the /etc/rc.d or /etc/init.d directory, and used by the system's initialization process to start, restart or stop a daemon process.",
                
                "init script": "The replica set operation that replicates data from an existing replica set member to a new or restored replica set member. See Initial Sync.",
                
                "intent lock": "A lock on a resource that indicates that the holder of the lock will read (intent shared) or write (intent exclusive) the resource using concurrency control at a finer granularity than that of the resource with the intent lock. Intent locks allow concurrent readers and writers of a resource. See What type of locking does MongoDB use?.",
                
                "interrupt point": "A point in an operation's lifecycle when it can safely abort. MongoDB only terminates an operation at designated interrupt points. See Terminate Running Operations.",
                
                "IPv6": "A revision to the IP (Internet Protocol) standard that provides a significantly larger address space to more effectively support the number of hosts on the contemporary Internet.",
                
                "ISODate": "The international date format used by mongo to display dates. The format is: YYYY-MM-DD HH:MM.SS.millis.",
                
                "JavaScript": "A popular scripting language originally designed for web browsers. The MongoDB shell and certain server-side functions use a JavaScript interpreter. See Server-side JavaScript for more information.",
                
                "journal": "A sequential, binary transaction log used to bring the database into a valid state in the event of a hard shutdown. Journaling writes data first to the journal and then to the core data files. MongoDB enables journaling by default for 64-bit builds of MongoDB version 2.0 and newer. Journal files are pre-allocated and exist as files in the data directory. See Journaling.",
                
                "JSON": "JavaScript Object Notation. A human-readable, plain text format for expressing structured data with support in many programming languages. For more information, see http://www.json.org. Certain MongoDB tools render an approximation of MongoDB BSON documents in JSON format. See MongoDB Extended JSON.",
                
                "JSON document": "A JSON document is a collection of fields and values in a structured format. For sample JSON documents, see http://json.org/example.html.",
                
                "JSONP": "JSON with Padding. Refers to a method of injecting JSON into applications. Presents potential security concerns.",
                
                "least privilege": "An authorization policy that gives a user only the amount of access that is essential to that user's work and no more.",
                
                "legacy coordinate pairs": "The format used for geospatial data prior to MongoDB version 2.4. This format stores geospatial data as points on a planar coordinate system (e.g. [ x, y ]). See Geospatial Indexes and Queries.",
                
                "LineString": "A LineString is defined by an array of two or more positions. A closed LineString with four or more positions is called a LinearRing, as described in the GeoJSON LineString specification: http://geojson.org/geojson-spec.html#linestring. To use a LineString in MongoDB, see GeoJSON Objects.",
                
                "lock": "MongoDB uses locks to ensure that concurrency does not affect correctness. MongoDB uses read locks, write locks and intent locks. For more information, see What type of locking does MongoDB use?.",
                
                "LVM": "Logical volume manager. LVM is a program that abstracts disk images from physical devices and provides a number of raw disk manipulation and snapshot capabilities useful for system management. For information on LVM and MongoDB, see Back up and Restore Using LVM on Linux.",
                
                "map-reduce": "A data processing and aggregation paradigm consisting of a “map” phase that selects data and a “reduce” phase that transforms the data. In MongoDB, you can run arbitrary aggregations over data using map-reduce. For map-reduce implementation, see Map-Reduce. For all approaches to aggregation, see Aggregation.",
                
                "mapping type": "A Structure in programming languages that associate keys with values, where keys may nest other pairs of keys and values (e.g. dictionaries, hashes, maps, and associative arrays). The properties of these structures depend on the language specification and implementation. Generally the order of keys in mapping types is arbitrary and not guaranteed.",
                
                "master": "The database that receives all writes in a conventional master-slave replication. In MongoDB, replica sets replace master-slave replication for most use cases. For more information on master-slave replication, see Master Slave Replication.",
                
                "md5": "A hashing algorithm used to efficiently provide reproducible unique strings to identify and checksum data. MongoDB uses md5 to identify chunks of data for GridFS. See filemd5.",
                
                "MIB": "Management Information Base. MongoDB uses MIB files to define the type of data tracked by SNMP in the MongoDB Enterprise edition.",
                
                "MIME": "Multipurpose Internet Mail Extensions. A standard set of type and encoding definitions used to declare the encoding and type of data in multiple data storage, transmission, and email contexts. The mongofiles tool provides an option to specify a MIME type to describe a file inserted into GridFS storage.",
                
                "mongo": "The MongoDB shell. The mongo process starts the MongoDB shell as a daemon connected to either a mongod or mongos instance. The shell has a JavaScript interface. See mongo and mongo Shell Methods.",
                
                "mongod": "The MongoDB database server. The mongod process starts the MongoDB server as a daemon. The MongoDB server manages data requests and formats and manages background operations. See mongod.",
                
                "MongoDB": "An open-source document-based database system. “MongoDB” derives from the word “humongous” because of the database's ability to scale up with ease and hold very large amounts of data. MongoDB stores documents in collections within databases.",
                
                "MongoDB Enterprise": "A commercial edition of MongoDB that includes additional features. For more information, see MongoDB Subscriptions.",
                
                "mongos": "The routing and load balancing process that acts an interface between an application and a MongoDB sharded cluster. See mongos.",
                
                "namespace": "The canonical name for a collection or index in MongoDB. The namespace is a combination of the database name and the name of the collection or index, like so: [database-name].[collection-or-index-name]. All documents belong to a namespace. See What is a namespace in MongoDB?.",
                
                "natural order": "The order in which the database refers to documents on disk. This is the default sort order. See $natural and Return in Natural Order.",
                
                "network partition": "A network failure that separates a distributed system into partitions such that nodes in one partition cannot communicate with the nodes in the other partition.",
                
                "ObjectId": "A special 12-byte BSON type that guarantees uniqueness within the collection. The ObjectId is generated based on timestamp, machine ID, process ID, and a process-local incremental counter. MongoDB uses ObjectId values as the default values for _id fields.",
                
                "operator": "A keyword beginning with a $ used to express an update, complex query, or data transformation. For example, $gt is the query language's “greater than” operator. For available operators, see Operators.",
                
                "oplog": "A capped collection that stores an ordered history of logical writes to a MongoDB database. The oplog is the basic mechanism enabling replication in MongoDB. See Replica Set Oplog.",
                
                "ordered query plan": "A query plan that returns results in the order consistent with the sort() order. See Query Plans.",
                
                "orphaned document": "In a sharded cluster, orphaned documents are those documents on a shard that also exist in chunks on other shards as a result of failed migrations or incomplete migration cleanup due to abnormal shutdown. Delete orphaned documents using cleanupOrphaned to reclaim disk space and reduce confusion.",
                
                "padding": "The extra space allocated to document on the disk to prevent moving a document when it grows as the result of update() operations. See Record Allocation Strategies.",
                
                "padding factor": "An automatically-calibrated constant used to determine how much extra space MongoDB should allocate per document container on disk. A padding factor of 1 means that MongoDB will allocate only the amount of space needed for the document. A padding factor of 2 means that MongoDB will allocate twice the amount of space required by the document. See Record Allocation Strategies.",
                
                "page fault": "<p>With the MMAPv1 storage engine, page faults can occur as MongoDB reads from or writes data to parts of its data files that are not currently located in physical memory. In contrast, operating system page faults happen when physical memory is exhausted and pages of physical memory are swapped to disk.</p><p>See Page Faults and What are page faults?.</p>",
                
                "partition": "A distributed system architecture that splits data into ranges. Sharding uses partitioning. See Data Partitioning.",
                
                "passive member": "A member of a replica set that cannot become primary because its members[n].priority is 0. See Priority 0 Replica Set Members.",
                
                "pcap": "A packet-capture format used by mongosniff to record packets captured from network interfaces and display them as human-readable MongoDB operations. See Options.",
                
                "PID": "A process identifier. UNIX-like systems assign a unique-integer PID to each running process. You can use a PID to inspect a running process and send signals to it. See /proc File System.",
                
                "pipe": "A communication channel in UNIX-like systems allowing independent processes to send and receive data. In the UNIX shell, piped operations allow users to direct the output of one command into the input of another.",
                
                "pipeline": "A series of operations in an aggregation process. See Aggregation Pipeline.",
                
                "Point": "A single coordinate pair as described in the GeoJSON Point specification: http://geojson.org/geojson-spec.html#point. To use a Point in MongoDB, see GeoJSON Objects.",
                
                "Polygon": "<p>An array of LinearRing coordinate arrays, as described in the GeoJSON Polygon specification: http://geojson.org/geojson-spec.html#polygon. For Polygons with multiple rings, the first must be the exterior ring and any others must be interior rings or holes.</p><p><p>MongoDB does not permit the exterior ring to self-intersect. Interior rings must be fully contained within the outer loop and cannot intersect or overlap with each other. See GeoJSON Objects.</p>",
                
                "powerOf2Sizes": "A per-collection setting that changes and normalizes the way MongoDB allocates space for each document, in an effort to maximize storage reuse and to reduce fragmentation. This is the default for TTL Collections. See collMod and usePowerOf2Sizes.",
                
                "pre-splitting": "An operation performed before inserting data that divides the range of possible shard key values into chunks to facilitate easy insertion and high write throughput. In some cases pre-splitting expedites the initial distribution of documents in sharded cluster by manually dividing the collection rather than waiting for the MongoDB balancer to do so. See Create Chunks in a Sharded Cluster.",
                
                "prefix compression": "Reduces memory and disk consumption by storing any identical index key prefixes only once, per page of memory. See: Compression for more about WiredTiger's compression behavior.",
                
                "primary": "In a replica set, the primary member is the current master instance, which receives all write operations. See Primary.",
                
                "primary key": "A record's unique immutable identifier. In an RDBMS, the primary key is typically an integer stored in each row's id field. In MongoDB, the _id field holds a document's primary key which is usually a BSON ObjectId.",
                
                "primary shard": "The shard that holds all the un-sharded collections. See Primary Shard.",
                
                "priority": "A configurable value that helps determine which members in a replica set are most likely to become primary. See members[n].priority.",
                
                "privilege": "A combination of specified resource and actions permitted on the resource. See privilege.",
                
                "projection": "A document given to a query that specifies which fields MongoDB returns in the result set. See Limit Fields to Return from a Query. For a list of projection operators, see Projection Operators.",
                
                "query": "A read request. MongoDB uses a JSON-like query language that includes a variety of query operators with names that begin with a $ character. In the mongo shell, you can issue queries using the find() and findOne() methods. See Read Operations Overview.",
                
                "query optimizer": "A process that generates query plans. For each query, the optimizer generates a plan that matches the query to the index that will return results as efficiently as possible. The optimizer reuses the query plan each time the query runs. If a collection changes significantly, the optimizer creates a new query plan. See Query Plans.",
                
                "query shape": "<p>A combination of query predicate, sort, and projection specifications.</p><p>For the query predicate, only the structure of the predicate, including the field names, are significant; the values in the query predicate are insignificant. As such, a query predicate { type: 'food' } is equivalent to the query predicate { type: 'utensil' } for a query shape.</p>",
                
                "RDBMS": "Relational Database Management System. A database management system based on the relational model, typically using SQL as the query language.",
                
                "read concern": "Specifies a level of isolation for read operations. For example, you can use read concern to only read data that has propagated to a majority of nodes in a replica set. See Read Concern.",
                
                "read lock": "A shared lock on a resource such as a collection or database that, while held, allows concurrent readers but no writers. See What type of locking does MongoDB use?.",
                
                "read preference": "A setting that determines how clients direct read operations. Read preference affects all replica sets, including shard replica sets. By default, MongoDB directs reads to primaries. However, you may also direct reads to secondaries for eventually consistent reads. See Read Preference.",
                
                "record size": "The space allocated for a document including the padding. For more information on padding, see Record Allocation Strategies and compact.",
                
                "recovering": "A replica set member status indicating that a member is not ready to begin normal activities of a secondary or primary. Recovering members are unavailable for reads.",
                
                "replica pairs": "<p>The precursor to the MongoDB replica sets.</p><p>Deprecated since version 1.6.</p>",
                
                "replica set": "A cluster of MongoDB servers that implements master-slave replication and automated failover. MongoDB's recommended replication strategy. See Replication.",
                
                "replication": "A feature allowing multiple database servers to share the same data, thereby ensuring redundancy and facilitating load balancing. See Replication.",
                
                "replication lag": "The length of time between the last operation in the primary's oplog and the last operation applied to a particular secondary. In general, you want to keep replication lag as small as possible. See Replication Lag.",
                
                "resident memory": "The subset of an application's memory currently stored in physical RAM. Resident memory is a subset of virtual memory, which includes memory mapped to physical RAM and to disk.",
                
                "resource": "A database, collection, set of collections, or cluster. A privilege permits actions on a specified resource. See resource.",
                
                "REST": "<p>An API design pattern centered around the idea of resources and the CRUD operations that apply to them. Typically REST is implemented over HTTP. MongoDB provides a simple HTTP REST interface that allows HTTP clients to run commands against the server. See REST API.</p><p>Deprecated since version 3.2: HTTP interface for MongoDB</p>",
                
                "role": "A set of privileges that permit actions on specified resources. Roles assigned to a user determine the user's access to resources and operations. See Security.",
                
                "rollback": "A process that reverts writes operations to ensure the consistency of all replica set members. See Rollbacks During Replica Set Failover.",
                
                "secondary": "A replica set member that replicates the contents of the master database. Secondary members may handle read requests, but only the primary members can handle write operations. See Secondaries.",
                
                "secondary index": "A database index that improves query performance by minimizing the amount of work that the query engine must perform to fulfill a query. See Indexes.",
                
                "set name": "The arbitrary name given to a replica set. All members of a replica set must have the same name specified with the replSetName setting or the --replSet option.",
                
                "shard": "A single mongod instance or replica set that stores some portion of a sharded cluster's total data set. In production, all shards should be replica sets. See Shards.",
                
                "sharded cluster": "The set of nodes comprising a sharded MongoDB deployment. A sharded cluster consists of config servers, shards, and one or more mongos routing processes. See Sharded Cluster Components.",
                
                "sharding": "A database architecture that partitions data by key ranges and distributes the data among two or more database instances. Sharding enables horizontal scaling. See <a href='https://docs.mongodb.org/manual/sharding/'>Sharding</a>.",
                
                "shard key": "The field MongoDB uses to distribute documents among members of a sharded cluster. See Shard Keys.",
                
                "shell helper": "A method in the mongo shell that provides a more concise syntax for a database command. Shell helpers improve the general interactive experience. See mongo Shell Methods.",
                
                "single-master replication": "A replication topology where only a single database instance accepts writes. Single-master replication ensures consistency and is the replication topology employed by MongoDB. See Replica Set Primary.",
                
                "slave": "A read-only database that replicates operations from a master database in conventional master/slave replication. In MongoDB, replica sets replace master/slave replication for most use cases. However, for information on master/slave replication, see Master Slave Replication.",
                
                "snappy": "A compression/decompression library designed to balance efficient computation requirements with reasonable compression rates. Snappy is the default compression library for MongoDB's use of WiredTiger. See Snappy and the WiredTiger compression documentation for more information.",
                
                "split": "The division between chunks in a sharded cluster. See Chunk Splits in a Sharded Cluster.",
                
                "SQL": "Structured Query Language (SQL) is a common special-purpose programming language used for interaction with a relational database, including access control, insertions, updates, queries, and deletions. There are some similar elements in the basic SQL syntax supported by different database vendors, but most implementations have their own dialects, data types, and interpretations of proposed SQL standards. Complex SQL is generally not directly portable between major RDBMS products. SQL is often used as metonym for relational databases.",
                
                "SSD": "Solid State Disk. A high-performance disk drive that uses solid state electronics for persistence, as opposed to the rotating platters and movable read/write heads used by traditional mechanical hard drives.",
                
                "stale": "Refers to the amount of time a secondary member of a replica set trails behind the current state of the primary'soplog. If a secondary becomes too stale, it can no longer use replication to catch up to the current state of the primary. See Replica Set Oplog and Replica Set Data Synchronization for more information.",
                
                "standalone": "An instance of mongod that is running as a single server and not as part of a replica set. To convert a standalone into a replica set, see Convert a Standalone to a Replica Set.",
                
                "storage engine": "The part of a database that is responsible for managing how data is stored and accessed, both in memory and on disk. Different storage engines perform better for specific workloads. See Storage Engines for specific details on the built-in storage engines in MongoDB.",
                
                "storage order": "See natural order.",
                
                "strict consistency": "<p>A property of a distributed system requiring that all members always reflect the latest changes to the system. In a database system, this means that any system that can provide data must reflect the latest writes at all times.</p><p>In MongoDB, in a replica set with one primary member [1],</p><ul><li>With \"local\" readConcern, reads from the primary reflect the latest writes in absence of a failover;</li><li>With \"majority\" readConcern, read operations from the primary or the secondaries have eventual consistency.</li></ul>",
                
                "sync": "The replica set operation where members replicate data from the primary. Sync first occurs when MongoDB creates or restores a member, which is called initial sync. Sync then occurs continually to keep the member updated with changes to the replica set's data. See Replica Set Data Synchronization.",
                
                "syslog": "On UNIX-like systems, a logging process that provides a uniform standard for servers and processes to submit logging information. MongoDB provides an option to send output to the host's syslog system. See syslogFacility.",
                
                "tag": "A label applied to a replica set member or shard and used by clients to issue data-center-aware operations. For more information on using tags with replica sets and with shards, see the following sections of this manual: Tag Sets and Behavior and Operations.",
                
                "tag set": "A document containing zero or more tags.",
                
                "tailable cursor": "For a capped collection, a tailable cursor is a cursor that remains open after the client exhausts the results in the initial cursor. As clients insert new documents into the capped collection, the tailable cursor continues to retrieve documents. See Create Tailable Cursor.",
                
                "topology": "The state of a deployment of MongoDB instances, including the type of deployment (i.e. standalone, replica set, or sharded cluster) as well as the availability of servers, and the role of each server (i.e. primary, secondary, config server, or mongos.)",
                
                "TSV": "A text-based data format consisting of tab-separated values. This format is commonly used to exchange data between relational databases, since the format is well-suited to tabular data. You can import TSV files using mongoimport.",
                
                "TTL": "Stands for “time to live” and represents an expiration time or period for a given piece of information to remain in a cache or other temporary storage before the system deletes it or ages it out. MongoDB has a TTL collection feature. See Expire Data from Collections by Setting TTL.",
                
                "unique index": "An index that enforces uniqueness for a particular field across a single collection. See Unique Indexes.",
                
                "unix epoch": "January 1st, 1970 at 00:00:00 UTC. Commonly used in expressing time, where the number of seconds or milliseconds since this point is counted.",
                
                "unordered query plan": "A query plan that returns results in an order inconsistent with the sort() order. See Query Plans.",
                
                "upsert": "An option for update operations; e.g. update(), findAndModify(). If set to true, the update operation will either update the document(s) matched by the specified query or if no documents match, insert a new document. The new document will have the fields indicated in the operation. See Upsert Option.",
                
                "virtual memory": "An application's working memory, typically residing on both disk an in physical RAM.",
                
                "WGS84": "The default datum MongoDB uses to calculate geometry over an Earth-like sphere. MongoDB uses the WGS84 datum for geospatial queries on GeoJSON objects. See the “EPSG:4326: WGS 84” specification: http://spatialreference.org/ref/epsg/4326/.",
                
                "working set": "The data that MongoDB uses most often. This data is preferably held in RAM, solid-state drive (SSD), or other fast media. See What is the working set?.",
                
                "writeBacks": "The process within the sharding system that ensures that writes issued to a shard that is not responsible for the relevant chunk get applied to the proper shard. For related information, see What does writebacklisten in the log mean? and writeBacksQueued.",
                
                "write concern": "Specifies whether a write operation has succeeded. Write concern allows your application to detect insertion errors or unavailable mongod instances. For replica sets, you can configure write concern to confirm replication to a specified number of members. See Write Concern.",
                
                "write conflict": "A situation in which two concurrent operations, at least one of which is a write, attempt to use a resource in a way that would violate constraints imposed by a storage engine using optimistic concurrency control. MongoDB will transparently abort and retry one of the conflicting operations.",
                
                "write lock": "An exclusive lock on a resource such as a collection or database. When a process writes to a resource, it takes an exclusive write lock to prevent other processes from writing to or reading from that resource. For more information on locks, see FAQ: Concurrency.",
                
                "zlib": "A data compression library that provides higher compression rates at the cost of more CPU, compared to MongoDB's use of snappy. You can configure WiredTiger to use zlib as its compression library. See http://www.zlib.net and the WiredTiger compression documentation for more information."
            }  //end "terms" object definition
        },  //end Glossary object definition
        
        "mongo Shell Methods": {  /* https://docs.mongodb.org/manual/reference/method/ */
        
            /* mongo Shell Quick Reference [https://docs.mongodb.org/manual/reference/mongo-shell/]
            
               MongoDB Shell (mongo) [https://docs.mongodb.org/getting-started/shell/client/]
               
                   ∙ Start mongo [mongo, mongo.exe (Windows systems), ]
                    
               Access the mongo Shell Help [https://docs.mongodb.org/manual/tutorial/access-mongo-shell-help/]
               
                   ∙ Help in mongo Shell [$ mongo --help (list of options for starting mongo shell), $ help (list of help)]
               
               Write Scripts for the mongo Shell [https://docs.mongodb.org/manual/tutorial/write-scripts-for-the-mongo-shell/]
               
               Data Types in the mongo Shell [https://docs.mongodb.org/manual/core/shell-types/]
            */
            
            "Bulk Write Operations": [  /* https://docs.mongodb.org/manual/core/bulk-write-operations/  -->   mongo Shell Methods > Bulk Write Operations */
            
            
                /* Bulk Operation Methods [https://docs.mongodb.org/manual/reference/method/js-bulk/]
                
                   MongoDB's New Bulk API [http://blog.mongodb.org/post/84922794768/mongodbs-new-bulk-api]
                   
                   Bulk Write Operations [http://api.mongodb.org/c/current/bulk.html] This tutorial explains how to take advantage of MongoDB C driver bulk write operation features. Executing write operations in batches reduces the number of network round trips, increasing write throughput.
                */
            
                ["Name", "Description", "References: Maintainer | Title | URL"]
            
                ["Bulk()", "Bulk operations builder.", [["MongoDB", "Bulk Write Operations", "https://docs.mongodb.org/manual/reference/method/Bulk/#Bulk"]]],
                
                ["db.collection.initializeOrderedBulkOp()", "Initializes a Bulk() operations builder for an ordered list of operations.", [["MongoDB", "Bulk Write Operations", "https://docs.mongodb.org/manual/reference/method/db.collection.initializeUnorderedBulkOp/#db.collection.initializeUnorderedBulkOp"]]],
                
                ["db.collection.initializeUnorderedBulkOp()", "Initializes a Bulk() operations builder for an unordered list of operations.", [["MongoDB", "Bulk Write Operations", "https://docs.mongodb.org/manual/reference/method/db.collection.initializeUnorderedBulkOp/#db.collection.initializeUnorderedBulkOp"]]],
                
                ["Bulk.insert()", "Adds an insert operation to a list of operations.", [["MongoDB", "Bulk Write Operations", "https://docs.mongodb.org/manual/reference/method/Bulk.insert/#Bulk.insert"]]],
                
                ["Bulk.find()", "Specifies the query condition for an update or a remove operation.", [["MongoDB", "Bulk Write Operations", "https://docs.mongodb.org/manual/reference/method/Bulk.find/#Bulk.find"]]],
                
                ["Bulk.find.removeOne()", "Adds a single document remove operation to a list of operations.", [["MongoDB", "Bulk Write Operations", "https://docs.mongodb.org/manual/reference/method/Bulk.find.removeOne/#Bulk.find.removeOne"]]],
                
                ["Bulk.find.remove()", "Adds a multiple document remove operation to a list of operations.", [["MongoDB", "Bulk Write Operations", "https://docs.mongodb.org/manual/reference/method/Bulk.find.remove/#Bulk.find.remove"]]],
                
                ["Bulk.find.replaceOne()", "Adds a single document replacement operation to a list of operations.", [["MongoDB", "Bulk Write Operations", "https://docs.mongodb.org/manual/reference/method/Bulk.find.replaceOne/#Bulk.find.replaceOne"]]],
                
                ["Bulk.find.updateOne()", "Adds a single document update operation to a list of operations.", [["MongoDB", "Bulk Write Operations", "https://docs.mongodb.org/manual/reference/method/Bulk.find.updateOne/#Bulk.find.updateOne"]]],
                
                ["Bulk.find.update()", "Adds a multi update operation to a list of operations.", [["MongoDB", "Bulk Write Operations", "https://docs.mongodb.org/manual/reference/method/Bulk.find.update/#Bulk.find.update"]]],
                
                ["Bulk.find.upsert()", "Specifies upsert: true for an update operation.", [["MongoDB", "Bulk Write Operations", "https://docs.mongodb.org/manual/reference/method/Bulk.find.upsert/#Bulk.find.upsert"]]],
                
                ["Bulk.execute()", "Executes a list of operations in bulk.", [["MongoDB", "Bulk Write Operations", "https://docs.mongodb.org/manual/reference/method/Bulk.execute/#Bulk.execute"]]],
                
                ["Bulk.getOperations()", "Returns an array of write operations executed in the Bulk() operations object.", [["MongoDB", "Bulk Write Operations", "https://docs.mongodb.org/manual/reference/method/Bulk.getOperations/#Bulk.getOperations"]]],
                
                ["Bulk.tojson()", "Returns a JSON document that contains the number of operations and batches in the Bulk() operations object.", [["MongoDB", "Bulk Write Operations", "https://docs.mongodb.org/manual/reference/method/Bulk.tojson/#Bulk.tojson"]]],
                
                ["Bulk.toString()", "Returns the Bulk.tojson() results as a string.", [["MongoDB", "Bulk Write Operations", "https://docs.mongodb.org/manual/reference/method/Bulk.toString/#Bulk.toString"]]]
            ],
            
            "Collection": [  /* https://docs.mongodb.org/manual/reference/method/#collection  -->   mongo Shell Methods > Collection */
            
                ["Name", "Description", "References: Maintainer | Title | URL"]
            
                ["db.collection.aggregate()", "Provides access to the aggregation pipeline.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.aggregate/#db.collection.aggregate"]]],
    
                ["db.collection.bulkWrite()", "Provides bulk write operation functionality.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.bulkWrite/#db.collection.bulkWrite"]]],
                
                ["db.collection.count()", "Wraps count to return a count of the number of documents in a collection or matching a query.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.count/#db.collection.count"]]],
                
                ["db.collection.copyTo()", "Deprecated. Wraps eval to copy data between collections in a single MongoDB instance.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.copyTo/#db.collection.copyTo"]]],
                
                ["db.collection.createIndex()", "Builds an index on a collection.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.createIndex/#db.collection.createIndex"]]],
                
                ["db.collection.dataSize()", "Returns the size of the collection. Wraps the size field in the output of the collStats.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.dataSize/#db.collection.dataSize"]]],
                
                ["db.collection.deleteOne()", "Deletes a single document in a collection.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.deleteOne/#db.collection.deleteOne"]]],
                
                ["db.collection.deleteMany()", "Deletes multiple documents in a collection.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.deleteMany/#db.collection.deleteMany"]]],
                
                ["db.collection.distinct()", "Returns an array of documents that have distinct values for the specified field.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.distinct/#db.collection.distinct"]]],
                
                ["db.collection.drop()", "Removes the specified collection from the database.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.drop/#db.collection.drop"]]],
                
                ["db.collection.dropIndex()", "Removes a specified index on a collection.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.dropIndex/#db.collection.dropIndex"]]],
                
                ["db.collection.dropIndexes()", "Removes all indexes on a collection.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.dropIndexes/#db.collection.dropIndexes"]]],
                
                ["db.collection.ensureIndex()", "Deprecated. Use db.collection.createIndex().", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.ensureIndex/#db.collection.ensureIndex"]]],
                
                ["db.collection.explain()", "Returns information on the query execution of various methods.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.explain/#db.collection.explain"]]],
                
                ["db.collection.find()", "Performs a query on a collection and returns a cursor object.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.find/#db.collection.find"]]],
                
                ["db.collection.findAndModify()", "Atomically modifies and returns a single document.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.findAndModify/#db.collection.findAndModify"]]],
                
                ["db.collection.findOne()", "Performs a query and returns a single document.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.findOne/#db.collection.findOne"]]],
                
                ["db.collection.findOneAndDelete()", "Finds a single document and deletes it.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.findOneAndDelete/#db.collection.findOneAndDelete"]]],
                
                ["db.collection.findOneAndReplace()", "Finds a single document and replaces it.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.findOneAndReplace/#db.collection.findOneAndReplace"]]],
                
                ["db.collection.findOneAndUpdate()", "Finds a single document and updates it.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.findOneAndUpdate/#db.collection.findOneAndUpdate"]]],
                
                ["db.collection.getIndexes()", "Returns an array of documents that describe the existing indexes on a collection.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.getIndexes/#db.collection.getIndexes"]]],
                
                ["db.collection.getShardDistribution()", "For collections in sharded clusters, <a href='https://docs.mongodb.org/manual/reference/method/db.collection.getShardDistribution/#db.collection.getShardDistribution'>db.collection.getShardDistribution()</a> reports data of chunk distribution.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.getShardDistribution/#db.collection.getShardDistribution"]]],
                
                ["db.collection.getShardVersion()", "Internal diagnostic method for shard cluster.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.getShardVersion/#db.collection.getShardVersion"]]],
                
                ["db.collection.group()", "Provides simple data aggregation function. Groups documents in a collection by a key, and processes the results. Use aggregate() for more complex data aggregation.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.group/#db.collection.group"]]],
                
                ["db.collection.insert()", "Creates a new document in a collection.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.insert/#db.collection.insert"]]],
                
                ["db.collection.insertOne()", "Inserts a new document in a collection.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.insertOne/#db.collection.insertOne"]]],
                
                ["db.collection.insertMany()", "Inserts several new document in a collection.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.insertMany/#db.collection.insertMany"]]],
                
                ["db.collection.isCapped()", "Reports if a collection is a capped collection.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.isCapped/#db.collection.isCapped"]]],
                
                ["db.collection.mapReduce()", "Performs map-reduce style data aggregation.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.mapReduce/#db.collection.mapReduce"]]],
                
                ["db.collection.reIndex()", "Rebuilds all existing indexes on a collection.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.reIndex/#db.collection.reIndex"]]],
                
                ["db.collection.replaceOne()", "Replaces a single document in a collection.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.replaceOne/#db.collection.replaceOne"]]],
                
                ["db.collection.remove()", "Deletes documents from a collection.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.remove/#db.collection.remove"]]],
                
                ["db.collection.renameCollection()", "Changes the name of a collection.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.renameCollection/#db.collection.renameCollection"]]],
                
                ["db.collection.save()", "Provides a wrapper around an insert() and update() to insert new documents.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.save/#db.collection.save"]]],
                
                ["db.collection.stats()", "Reports on the state of a collection. Provides a wrapper around the collStats.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.stats/#db.collection.stats"]]],
                
                ["db.collection.storageSize()", "Reports the total size used by the collection in bytes. Provides a wrapper around the storageSize field of the collStats output.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.storageSize/#db.collection.storageSize"]]],
                
                ["db.collection.totalSize()", "Reports the total size of a collection, including the size of all documents and all indexes on a collection.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.totalSize/#db.collection.totalSize"]]],
                
                ["db.collection.totalIndexSize()", "Reports the total size used by the indexes on a collection. Provides a wrapper around the totalIndexSize field of the collStats output.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.totalIndexSize/#db.collection.totalIndexSize"]]],
                
                ["db.collection.update()", "Modifies a document in a collection.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.update/#db.collection.update"]]],
                
                ["db.collection.updateOne()", "Modifies a single document in a collection.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.updateOne/#db.collection.updateOne"]]],
                
                ["db.collection.updateMany()", "Modifies multiple documents in a collection.", [["MongoDB", "Collection", "https://docs.mongodb.org/manual/reference/method/db.collection.updateMany/#db.collection.updateMany"]]],
                
                ["db.collection.validate()", "Performs diagnostic operations on a collection.", [["MongoDB", "mongo Shell Methods", "https://docs.mongodb.org/manual/reference/method/db.collection.validate/#db.collection.validate"]]]
    
            ],
            
            "Connection": [  /* https://docs.mongodb.org/manual/reference/method/#connection  -->   mongo Shell Methods > Connetion */
            
                ["Name", "Description", "References: Maintainer | Title | URL"]
            
                ["Mongo.getDB()", "Returns a database object.", [["MongoDB", "Connection", "https://docs.mongodb.org/manual/reference/method/Mongo.getDB/#Mongo.getDB"]]],
                
                ["Mongo.getReadPrefMode()", "Returns the current read preference mode for the MongoDB connection.", [["MongoDB", "Connection", "https://docs.mongodb.org/manual/reference/method/Mongo.getReadPrefMode/#Mongo.getReadPrefMode"]]],
                
                ["Mongo.getReadPrefTagSet()", "Returns the read preference tag set for the MongoDB connection.", [["MongoDB", "Connection", "https://docs.mongodb.org/manual/reference/method/Mongo.getReadPrefTagSet/#Mongo.getReadPrefTagSet"]]],
                
                ["Mongo.setReadPref()", "Sets the read preference for the MongoDB connection.", [["MongoDB", "Connection", "https://docs.mongodb.org/manual/reference/method/Mongo.setReadPref/#Mongo.setReadPref"]]],
                
                ["Mongo.setSlaveOk()", "Allows operations on the current connection to read from secondary members.", [["MongoDB", "Connection", "https://docs.mongodb.org/manual/reference/method/Mongo.setSlaveOk/#Mongo.setSlaveOk"]]],
                
                ["Mongo()", "Creates a new connection object.", [["MongoDB", "Connection", "https://docs.mongodb.org/manual/reference/method/Mongo/#Mongo"]]],
                
                ["connect()", "Connects to a MongoDB instance and to a specified database on that instance.", [["", "", ""]]]
            ],
            
            "Constructors": [  /* https://docs.mongodb.org/manual/reference/method/#constructors  -->   Connection > Constructors */
            
                ["Name", "Description", "References: Maintainer | Title | URL"]
            
                ["Date()", "Creates a date object. By default creates a date object including the current date.", [["MongoDB", "Constructors", "https://docs.mongodb.org/manual/reference/method/Date/#Date"]]],
                
                ["UUID()", "Converts a 32-byte hexadecimal string to the UUID BSON subtype.", [["MongoDB", "Constructors", "https://docs.mongodb.org/manual/reference/method/UUID/#UUID"]]],
                
                ["ObjectId.getTimestamp()", "Returns the timestamp portion of an ObjectId.", [["MongoDB", "Constructors", "https://docs.mongodb.org/manual/reference/method/ObjectId.getTimestamp/#ObjectId.getTimestamp"]]],
                
                ["ObjectId.toString()", "Displays the string representation of an ObjectId.", [["MongoDB", "Constructors", "https://docs.mongodb.org/manual/reference/method/ObjectId.toString/#ObjectId.toString"]]],
                
                ["ObjectId.valueOf()", "Displays the str attribute of an ObjectId as a hexadecimal string.", [["MongoDB", "Constructors", "https://docs.mongodb.org/manual/reference/method/ObjectId.valueOf/#ObjectId.valueOf"]]],
                
                ["WriteResult()", "Wrapper around the result set from write methods.", [["MongoDB", "Constructors", "https://docs.mongodb.org/manual/reference/method/WriteResult/#WriteResult"]]],
                
                ["WriteResult.hasWriteError()", "Returns a boolean specifying whether the results include WriteResult.writeError.", [["MongoDB", "Constructors", "https://docs.mongodb.org/manual/reference/method/WriteResult.hasWriteError/#WriteResult.hasWriteError"]]],
                
                ["WriteResult.hasWriteConcernError()", "Returns a boolean specifying whether whether the results include WriteResult.writeConcernError.", [["MongoDB", "Constructors", "https://docs.mongodb.org/manual/reference/method/WriteResult.hasWriteConcernError/#WriteResult.hasWriteConcernError"]]],
                
                ["BulkWriteResult()", "Wrapper around the result set from Bulk.execute().", [["MongoDB", "Constructors", "https://docs.mongodb.org/manual/reference/method/BulkWriteResult/#BulkWriteResult"]]]
            ],
            
            "Cursor": [  /* https://docs.mongodb.org/manual/reference/method/#cursor  -->   mongo Shell Methods > Cursor */
            
                ["Name", "Description", "References: Maintainer | Title | URL"]
            
                ["cursor.batchSize()", "Controls the number of documents MongoDB will return to the client in a single network message.", [["MongoDB", "Cursor", "https://docs.mongodb.org/manual/reference/method/cursor.batchSize/#cursor.batchSize"]]],
                
                ["cursor.close()", "Close a cursor and free associated server resources.", [["MongoDB", "Cursor", "https://docs.mongodb.org/manual/reference/method/cursor.close/#cursor.close"]]],
                
                ["cursor.comment()", "Attaches a comment to the query to allow for traceability in the logs and the system.profile collection.", [["MongoDB", "Cursor", "https://docs.mongodb.org/manual/reference/method/cursor.comment/#cursor.comment"]]],
                
                ["cursor.count()", "Modifies the cursor to return the number of documents in the result set rather than the documents themselves.", [["MongoDB", "Cursor", "https://docs.mongodb.org/manual/reference/method/cursor.count/#cursor.count"]]],
                
                ["cursor.explain()", "Reports on the query execution plan for a cursor.", [["MongoDB", "Cursor", "https://docs.mongodb.org/manual/reference/method/cursor.explain/#cursor.explain"]]],
                
                ["cursor.forEach()", "Applies a JavaScript function for every document in a cursor.", [["MongoDB", "Cursor", "https://docs.mongodb.org/manual/reference/method/cursor.forEach/#cursor.forEach"]]],
                
                ["cursor.hasNext()", "Returns true if the cursor has documents and can be iterated.", [["MongoDB", "Cursor", "https://docs.mongodb.org/manual/reference/method/cursor.hasNext/#cursor.hasNext"]]],
                
                ["cursor.hint()", "Forces MongoDB to use a specific index for a query.", [["MongoDB", "Cursor", "https://docs.mongodb.org/manual/reference/method/cursor.hint/#cursor.hint"]]],
                
                ["cursor.itcount()", "Computes the total number of documents in the cursor client-side by fetching and iterating the result set.", [["MongoDB", "Cursor", "https://docs.mongodb.org/manual/reference/method/cursor.itcount/#cursor.itcount"]]],
                
                ["cursor.limit()", "Constrains the size of a cursor's result set.", [["MongoDB", "Cursor", "https://docs.mongodb.org/manual/reference/method/cursor.limit/#cursor.limit"]]],
                
                ["cursor.map()", "Applies a function to each document in a cursor and collects the return values in an array.", [["MongoDB", "Cursor", "https://docs.mongodb.org/manual/reference/method/cursor.map/#cursor.map"]]],
                
                ["cursor.maxScan()", "Specifies the maximum number of items to scan; documents for collection scans, keys for index scans.", [["MongoDB", "Cursor", "https://docs.mongodb.org/manual/reference/method/cursor.maxScan/#cursor.maxScan"]]],
                
                ["cursor.maxTimeMS()", "Specifies a cumulative time limit in milliseconds for processing operations on a cursor.", [["MongoDB", "Cursor", "https://docs.mongodb.org/manual/reference/method/cursor.maxTimeMS/#cursor.maxTimeMS"]]],
                
                ["cursor.max()", "Specifies an exclusive upper index bound for a cursor. For use with cursor.hint()", [["MongoDB", "Cursor", "https://docs.mongodb.org/manual/reference/method/cursor.max/#cursor.max"]]],
                
                ["cursor.min()", "Specifies an inclusive lower index bound for a cursor. For use with cursor.hint()", [["MongoDB", "Cursor", "https://docs.mongodb.org/manual/reference/method/cursor.min/#cursor.min"]]],
                
                ["cursor.next()", "Returns the next document in a cursor.", [["MongoDB", "Cursor", "https://docs.mongodb.org/manual/reference/method/cursor.next/#cursor.next"]]],
                
                ["cursor.noCursorTimeout()", "Instructs the server to avoid closing a cursor automatically after a period of inactivity.", [["MongoDB", "Cursor", "https://docs.mongodb.org/manual/reference/method/cursor.noCursorTimeout/#cursor.noCursorTimeout"]]],
                
                ["cursor.objsLeftInBatch()", "Returns the number of documents left in the current cursor batch.", [["MongoDB", "Cursor", "https://docs.mongodb.org/manual/reference/method/cursor.objsLeftInBatch/#cursor.objsLeftInBatch"]]],
                
                ["cursor.pretty()", "Configures the cursor to display results in an easy-to-read format.", [["MongoDB", "Cursor", "https://docs.mongodb.org/manual/reference/method/cursor.pretty/#cursor.pretty"]]],
                
                ["cursor.readConcern()", "Specifies a read concern for a find() operation.", [["MongoDB", "Cursor", "https://docs.mongodb.org/manual/reference/method/cursor.readConcern/#cursor.readConcern"]]],
                
                ["cursor.readPref()", "Specifies a read preference to a cursor to control how the client directs queries to a replica set.", [["MongoDB", "Cursor", "https://docs.mongodb.org/manual/reference/method/cursor.readPref/#cursor.readPref"]]],
                
                ["cursor.returnKey()", "Modifies the cursor to return index keys rather than the documents.", [["MongoDB", "mongo Shell Methods", "https://docs.mongodb.org/manual/reference/method/cursor.returnKey/#cursor.returnKey"]]],
                
                ["cursor.showRecordId()", "Adds an internal storage engine ID field to each document returned by the cursor.", [["MongoDB", "mongo Shell Methods", "https://docs.mongodb.org/manual/reference/method/cursor.showRecordId/#cursor.showRecordId"]]],
                
                ["cursor.size()", "Returns a count of the documents in the cursor after applying skip() and limit() methods.", [["MongoDB", "mongo Shell Methods", "https://docs.mongodb.org/manual/reference/method/cursor.size/#cursor.size"]]],
                
                ["cursor.skip()", "Returns a cursor that begins returning results only after passing or skipping a number of documents.", [["MongoDB", "mongo Shell Methods", "https://docs.mongodb.org/manual/reference/method/cursor.skip/#cursor.skip"]]],
                
                ["cursor.snapshot()", "Forces the cursor to use the index on the _id field. Ensures that the cursor returns each document, with regards to the value of the _id field, only once.", [["MongoDB", "mongo Shell Methods", "https://docs.mongodb.org/manual/reference/method/cursor.snapshot/#cursor.snapshot"]]],
                
                ["cursor.sort()", "Returns results ordered according to a sort specification.", [["MongoDB", "mongo Shell Methods", "https://docs.mongodb.org/manual/reference/method/cursor.sort/#cursor.sort"]]],
                
                ["cursor.tailable()", "Marks the cursor as tailable. Only valid for cursors over capped collections.", [["MongoDB", "mongo Shell Methods", "https://docs.mongodb.org/manual/reference/method/cursor.tailable/#cursor.tailable"]]],
                
                ["cursor.toArray()", "Returns an array that contains all documents returned by the cursor.", [["MongoDB", "mongo Shell Methods", "https://docs.mongodb.org/manual/reference/method/cursor.toArray/#cursor.toArray"]]]
            ],
            
            "Database": [  /* https://docs.mongodb.org/manual/reference/method/#database  -->   mongo Shell Methods > Database */
            
                ["Name", "Description", "References: Maintainer | Title | URL"]
            
                ["db.cloneCollection()", "Copies data directly between MongoDB instances. Wraps cloneCollection.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.cloneCollection/#db.cloneCollection"]]],
                
                ["db.cloneDatabase()", "Copies a database from a remote host to the current host. Wraps clone.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.cloneDatabase/#db.cloneDatabase"]]],
                
                ["db.commandHelp()", "Returns help information for a database command.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.commandHelp/#db.commandHelp"]]],
                
                ["db.copyDatabase()", "Copies a database to another database on the current host. Wraps copydb.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.cloneDatabase/#db.cloneDatabase"]]],
                
                ["db.createCollection()", "Creates a new collection. Commonly used to create a capped collection.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.createCollection/#db.createCollection"]]],
                
                ["db.currentOp()", "Reports the current in-progress operations.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.currentOp/#db.currentOp"]]],
                
                ["db.dropDatabase()", "Removes the current database.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.dropDatabase/#db.dropDatabase"]]],
                
                ["db.eval()", "Deprecated. Passes a JavaScript function to the mongod instance for server-side JavaScript evaluation.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.eval/#db.eval"]]],
                
                ["db.fsyncLock()", "Flushes writes to disk and locks the database to prevent write operations and assist backup operations. Wraps fsync.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.fsyncLock/#db.fsyncLock"]]],
                
                ["db.fsyncUnlock()", "Allows writes to continue on a database locked with db.fsyncLock().", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.fsyncUnlock/#db.fsyncUnlock"]]],
                
                ["db.getCollection()", "Returns a collection object. Used to access collections with names that are not valid in the mongo shell.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.getCollection/#db.getCollection"]]],
                
                ["db.getCollectionInfos()", "Returns collection information for all collections in the current database.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.getCollectionInfos/#db.getCollectionInfos"]]],
                
                ["db.getCollectionNames()", "Lists all collections in the current database.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.getCollectionNames/#db.getCollectionNames"]]],
                
                ["db.getLastError()", "Checks and returns the status of the last operation. Wraps getLastError.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.getLastError/#db.getLastError"]]],
                
                ["db.getLastErrorObj()", "Returns the status document for the last operation. Wraps getLastError.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.getLastErrorObj/#db.getLastErrorObj"]]],
                
                ["db.getLogComponents()", "Returns the log message verbosity levels.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.getLogComponents/#db.getLogComponents"]]],
                
                ["db.getMongo()", "Returns the Mongo() connection object for the current connection.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.getMongo/#db.getMongo"]]],
                
                ["db.getName()", "Returns the name of the current database.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.getName/#db.getName"]]],
                
                ["db.getPrevError()", "Returns a status document containing all errors since the last error reset. Wraps getPrevError.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.getPrevError/#db.getPrevError"]]],
                
                ["db.getProfilingLevel()", "Returns the current profiling level for database operations.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.getProfilingLevel/#db.getProfilingLevel"]]],
                
                ["db.getProfilingStatus()", "Returns a document that reflects the current profiling level and the profiling threshold.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.getProfilingStatus/#db.getProfilingStatus"]]],
                
                ["db.getReplicationInfo()", "Returns a document with replication statistics.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.getReplicationInfo/#db.getReplicationInfo"]]],
                
                ["db.getSiblingDB()", "Provides access to the specified database.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.getSiblingDB/#db.getSiblingDB"]]],
                
                ["db.help()", "Displays descriptions of common db object methods.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.help/#db.help"]]],
                
                ["db.hostInfo()", "Returns a document with information about the system MongoDB runs on. Wraps hostInfo", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.hostInfo/#db.hostInfo"]]],
                
                ["db.isMaster()", "Returns a document that reports the state of the replica set.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.isMaster/#db.isMaster"]]],
                
                ["db.killOp()", "Terminates a specified operation.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.killOp/#db.killOp"]]],
                
                ["db.listCommands()", "Displays a list of common database commands.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.listCommands/#db.listCommands"]]],
                
                ["db.loadServerScripts()", "Loads all scripts in the system.js collection for the current database into the shell session.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.loadServerScripts/#db.loadServerScripts"]]],
                
                ["db.logout()", "Ends an authenticated session.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.logout/#db.logout"]]],
                
                ["db.printCollectionStats()", "Prints statistics from every collection. Wraps db.collection.stats().", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.printCollectionStats/#db.printCollectionStats"]]],
                
                ["db.printReplicationInfo()", "Prints a report of the status of the replica set from the perspective of the primary.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.printReplicationInfo/#db.printReplicationInfo"]]],
                
                ["db.printShardingStatus()", "Prints a report of the sharding configuration and the chunk ranges.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.printShardingStatus/#db.printShardingStatus"]]],
                
                ["db.printSlaveReplicationInfo()", "Prints a report of the status of the replica set from the perspective of the secondaries.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.printSlaveReplicationInfo/#db.printSlaveReplicationInfo"]]],
                
                ["db.repairDatabase()", "Runs a repair routine on the current database.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.repairDatabase/#db.repairDatabase"]]],
                
                ["db.resetError()", "Resets the error message returned by db.getPrevError() and getPrevError.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.resetError/#db.resetError"]]],
                
                ["db.runCommand()", "Runs a database command.", [["MongoDB", "Database", ""]]],
                
                ["db.serverBuildInfo()", "Returns a document that displays the compilation parameters for the mongod instance. Wraps buildinfo.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.serverBuildInfo/#db.serverBuildInfo"]]],
                
                ["db.serverCmdLineOpts()", "Returns a document with information about the runtime used to start the MongoDB instance. Wraps getCmdLineOpts.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.serverCmdLineOpts/#db.serverCmdLineOpts"]]],
                
                ["db.serverStatus()", "Returns a document that provides an overview of the state of the database process.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.serverStatus/#db.serverStatus"]]],
                
                ["db.setLogLevel()", "Sets a single log message verbosity level.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.setLogLevel/#db.setLogLevel"]]],
                
                ["db.setProfilingLevel()", "Modifies the current level of database profiling.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.setProfilingLevel/#db.setProfilingLevel"]]],
                
                ["db.shutdownServer()", "Shuts down the current mongod or mongos process cleanly and safely.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.shutdownServer/#db.shutdownServer"]]],
                
                ["db.stats()", "Returns a document that reports on the state of the current database.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.stats/#db.stats"]]],
                
                ["db.version()", "Returns the version of the mongod instance.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.version/#db.version"]]],
                
                ["db.upgradeCheck()", "Performs a preliminary check for upgrade preparedness for a specific database or collection.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.upgradeCheck/#db.upgradeCheck"]]],
                
                ["db.upgradeCheckAllDBs()", "Performs a preliminary check for upgrade preparedness for all databases and collections.", [["MongoDB", "Database", "https://docs.mongodb.org/manual/reference/method/db.upgradeCheckAllDBs/#db.upgradeCheckAllDBs"]]]
            ],
            
            "Native": [  /* https://docs.mongodb.org/manual/reference/method/#native  -->   mongo Shell Methods > Native */
            
                ["Name", "Description", "References: Maintainer | Title | URL"]
            
                ["cat()", "Returns the contents of the specified file.", [["", "", ""]]],
                
                ["version()", "Returns the current version of the mongo shell instance.", [["", "", ""]]],
                
                ["cd()", "Changes the current working directory to the specified path.", [["MongoDB", "Native", ""]]],
                
                ["sleep()", "Suspends the mongo shell for a given period of time.", [["", "", ""]]],
                
                ["copyDbpath()", "Copies a local dbPath. For internal use.", [["MongoDB", "Native", "https://docs.mongodb.org/manual/reference/method/copyDbpath/#copyDbpath"]]],
                
                ["resetDbpath()", "Removes a local dbPath. For internal use.", [["MongoDB", "Native", "https://docs.mongodb.org/manual/reference/method/resetDbpath/#resetDbpath"]]],
                
                ["fuzzFile()", "For internal use to support testing.", [["MongoDB", "Native", "https://docs.mongodb.org/manual/reference/method/fuzzFile/#fuzzFile"]]],
                
                ["getHostName()", "Returns the hostname of the system running the mongo shell.", [["MongoDB", "Native", "https://docs.mongodb.org/manual/reference/method/getHostName/#getHostName"]]],
                
                ["getMemInfo()", "Returns a document that reports the amount of memory used by the shell.", [["MongoDB", "Native", "https://docs.mongodb.org/manual/reference/method/getMemInfo/#getMemInfo"]]],
                
                ["hostname()", "Returns the hostname of the system running the shell.", [["", "", ""]]],
                
                ["_isWindows()", "Returns true if the shell runs on a Windows system; false if a Unix or Linux system.", [["MongoDB", "Native", "https://docs.mongodb.org/manual/reference/method/isWindows/#_isWindows"]]],
                
                ["listFiles()", "Returns an array of documents that give the name and size of each object in the directory.", [["MongoDB", "Native", "https://docs.mongodb.org/manual/reference/method/listFiles/#listFiles"]]],
                
                ["load()", "Loads and runs a JavaScript file in the shell.", [["", "", ""]]],
                
                ["ls()", "Returns a list of the files in the current directory.", [["", "", ""]]],
                
                ["md5sumFile()", "The md5 hash of the specified file.", [["MongoDB", "Native", "https://docs.mongodb.org/manual/reference/method/md5sumFile/#md5sumFile"]]],
                
                ["mkdir()", "Creates a directory at the specified path.", [["", "", ""]]],
                
                ["pwd()", "Returns the current directory.", [["", "", ""]]],
                
                ["quit()", "Exits the current shell session.", [["", "", ""]]],
                
                ["_rand()", "Returns a random number between 0 and 1.", [["MongoDB", "Native", "https://docs.mongodb.org/manual/reference/method/rand/#_rand"]]],
                
                ["removeFile()", "Removes the specified file from the local file system.", [["MongoDB", "Native", "https://docs.mongodb.org/manual/reference/method/removeFile/#removeFile"]]],
                
                ["setVerboseShell()", "Configures the mongo shell to report operation timing.", [["MongoDB", "Native", "https://docs.mongodb.org/manual/reference/method/setVerboseShell/#setVerboseShell"]]],
                
                ["_srand()", "For internal use.", [["MongoDB", "Native", "https://docs.mongodb.org/manual/reference/method/srand/#_srand"]]]
            ],
            
            "Query Plan Cache": [  /* https://docs.mongodb.org/manual/reference/method/#query-plan-cache  -->   mongo Shell Methods > Query Plan Cache */
            
                ["Token", "Summary", "References: Maintainer | Title | URL"],
            
                ["db.collection.getPlanCache()", "Returns an interface to access the query plan cache object and associated PlanCache methods for a collection.", [["MongoDB", "mongo Shell Methods", "https://docs.mongodb.org/manual/reference/method/db.collection.getPlanCache/#db.collection.getPlanCache"]]],
                
                ["PlanCache.help()", "Displays the methods available for a collection's query plan cache. Accessible through the plan cache object of a specific collection, i.e. db.collection.getPlanCache().help()", [["MongoDB", "mongo Shell Methods", "https://docs.mongodb.org/manual/reference/method/PlanCache.help/#PlanCache.help"]]],
                
                ["PlanCache.listQueryShapes()", "Displays the query shapes for which cached query plans exist. Accessible through the plan cache object of a specific collection, i.e. db.collection.getPlanCache().listQueryShapes()", [["MongoDB", "mongo Shell Methods", "https://docs.mongodb.org/manual/reference/method/PlanCache.listQueryShapes/#PlanCache.listQueryShapes"]]],
                
                ["PlanCache.getPlansByQuery()", "Displays the cached query plans for the specified query shape. Accessible through the plan cache object of a specific collection, i.e. db.collection.getPlanCache().getPlansByQuery()", [["MongoDB", "mongo Shell Methods", "https://docs.mongodb.org/manual/reference/method/PlanCache.getPlansByQuery/#PlanCache.getPlansByQuery"]]],
                
                ["PlanCache.clearPlansByQuery()", "Clears the cached query plans for the specified query shape. Accessible through the plan cache object of a specific collection, i.e. db.collection.getPlanCache().clearPlansByQuery()", [["MongoDB", "mongo Shell Methods", "https://docs.mongodb.org/manual/reference/method/PlanCache.clearPlansByQuery/#PlanCache.clearPlansByQuery"]]],
                
                ["PlanCache.clear()", "Clears all the cached query plans for a collection. Accessible through the plan cache object of a specific collection, i.e. db.collection.getPlanCache().clear().", [["MongoDB", "mongo Shell Methods", "https://docs.mongodb.org/manual/reference/method/PlanCache.clear/#PlanCache.clear"]]]
            ],
            
            "Replication": [  /* https://docs.mongodb.org/manual/reference/method/#replication  -->   mongo Shell Methods > Replication */
            
                ["Name", "Description", "References: Maintainer | Title | URL"]
            
                ["rs.add()", "Adds a member to a replica set.", [["MongoDB", "Replication", "https://docs.mongodb.org/manual/reference/method/rs.add/#rs.add"]]],
                
                ["rs.addArb()", "Adds an arbiter to a replica set.", [["MongoDB", "Replication", "https://docs.mongodb.org/manual/reference/method/rs.addArb/#rs.addArb"]]],
                
                ["rs.conf()", "Returns the replica set configuration document.", [["MongoDB", "Replication", "https://docs.mongodb.org/manual/reference/method/rs.conf/#rs.conf"]]],
                
                ["rs.freeze()", "Prevents the current member from seeking election as primary for a period of time.", [["MongoDB", "Replication", "https://docs.mongodb.org/manual/reference/method/rs.freeze/#rs.freeze"]]],
                
                ["rs.help()", "Returns basic help text for replica set functions.", [["MongoDB", "Replication", "https://docs.mongodb.org/manual/reference/method/rs.help/#rs.help"]]],
                
                ["rs.initiate()", "Initializes a new replica set.", [["MongoDB", "Replication", "https://docs.mongodb.org/manual/reference/method/rs.initiate/#rs.initiate"]]],
                
                ["rs.printReplicationInfo()", "Prints a report of the status of the replica set from the perspective of the primary.", [["MongoDB", "Replication", "https://docs.mongodb.org/manual/reference/method/rs.printSlaveReplicationInfo/#rs.printSlaveReplicationInfo"]]],
                
                ["rs.printSlaveReplicationInfo()", "Prints a report of the status of the replica set from the perspective of the secondaries.", [["MongoDB", "Replication", "https://docs.mongodb.org/manual/reference/method/rs.printSlaveReplicationInfo/#rs.printSlaveReplicationInfo"]]],
                
                ["rs.reconfig()", "Re-configures a replica set by applying a new replica set configuration object.", [["MongoDB", "Replication", "https://docs.mongodb.org/manual/reference/method/rs.reconfig/#rs.reconfig"]]],
                
                ["rs.remove()", "Remove a member from a replica set.", [["MongoDB", "Replication", "https://docs.mongodb.org/manual/reference/method/rs.remove/#rs.remove"]]],
                
                ["rs.slaveOk()", "Sets the slaveOk property for the current connection. Deprecated. Use readPref() and Mongo.setReadPref()", "to set read preference.", [["MongoDB", "Replication", "https://docs.mongodb.org/manual/reference/method/rs.slaveOk/#rs.slaveOk"]]],
                
                ["rs.status()", "Returns a document with information about the state of the replica set.", [["MongoDB", "Replication", "https://docs.mongodb.org/manual/reference/method/rs.status/#rs.status"]]],
                
                ["rs.stepDown()", "Causes the current primary to become a secondary which forces an election.", [["MongoDB", "Replication", "https://docs.mongodb.org/manual/reference/method/rs.stepDown/#rs.stepDown"]]],
                
                ["rs.syncFrom()", "Sets the member that this replica set member will sync from, overriding the default sync target selection logic.", [["MongoDB", "Replication", "https://docs.mongodb.org/manual/reference/method/rs.syncFrom/#rs.syncFrom"]]]
            ],
            
            "Role Management": [  /* https://docs.mongodb.org/manual/reference/method/#role-management  -->   mongo Shell Methods > Role Management */
            
                ["Name", "Description", "References: Maintainer | Title | URL"]
            
                ["db.createRole()", "Creates a role and specifies its privileges.", [["MongoDB", "Role Management", "https://docs.mongodb.org/manual/reference/method/db.createRole/#db.createRole"]]],
                
                ["db.updateRole()", "Updates a user-defined role.", [["MongoDB", "Role Management", "https://docs.mongodb.org/manual/reference/method/db.updateRole/#db.updateRole"]]],
                
                ["db.dropRole()", "Deletes a user-defined role.", [["MongoDB", "Role Management", "https://docs.mongodb.org/manual/reference/method/db.dropRole/#db.dropRole"]]],
                
                ["db.dropAllRoles()", "Deletes all user-defined roles associated with a database.", [["MongoDB", "Role Management", "https://docs.mongodb.org/manual/reference/method/db.dropAllRoles/#db.dropAllRoles"]]],
                
                ["db.grantPrivilegesToRole()", "Assigns privileges to a user-defined role.", [["MongoDB", "Role Management", "https://docs.mongodb.org/manual/reference/method/db.grantPrivilegesToRole/#db.grantPrivilegesToRole"]]],
                
                ["db.revokePrivilegesFromRole()", "Removes the specified privileges from a user-defined role.", [["MongoDB", "Role Management", "https://docs.mongodb.org/manual/reference/method/db.revokePrivilegesFromRole/#db.revokePrivilegesFromRole"]]],
                
                ["db.grantRolesToRole()", "Specifies roles from which a user-defined role inherits privileges.", [["MongoDB", "Role Management", "https://docs.mongodb.org/manual/reference/method/db.grantRolesToRole/#db.grantRolesToRole"]]],
                
                ["db.revokeRolesFromRole()", "Removes inherited roles from a role.", [["MongoDB", "Role Management", "https://docs.mongodb.org/manual/reference/method/db.revokeRolesFromRole/#db.revokeRolesFromRole"]]],
                
                ["db.getRole()", "Returns information for the specified role.", [["MongoDB", "Role Management", "https://docs.mongodb.org/manual/reference/method/db.getRole/#db.getRole"]]],
                
                ["db.getRoles()", "Returns information for all the user-defined roles in a database.", [["MongoDB", "Role Management", "https://docs.mongodb.org/manual/reference/method/db.getRoles/#db.getRoles"]]]
            ],
            
            "Sharding": [  /* https://docs.mongodb.org/manual/reference/method/#sharding  -->   mongo Shell Methods > Sharding */
            
                ["Name", "Description", "References: Maintainer | Title | URL"]
            
                ["sh._adminCommand()", "Runs a database command against the admin database, like db.runCommand()", " but can confirm that it is issued against a mongos.", [["MongoDB", "mongo Shell Methods", "https://docs.mongodb.org/manual/reference/method/sh._adminCommand/#sh._adminCommand"]]],
                
                ["sh.getBalancerLockDetails()", "Reports on the active balancer lock, if it exists.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.getBalancerLockDetails/#sh.getBalancerLockDetails"]]],
                
                ["sh._checkFullName()", "Tests a namespace to determine if its well formed.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh._checkFullName/#sh._checkFullName"]]],
                
                ["sh._checkMongos()", "Tests to see if the mongo shell is connected to a mongos instance.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh._checkMongos/#sh._checkMongos"]]],
                
                ["sh._lastMigration()", "Reports on the last chunk migration.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh._lastMigration/#sh._lastMigration"]]],
                
                ["sh.addShard()", "Adds a shard to a sharded cluster.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.addShard/#sh.addShard"]]],
                
                ["sh.addShardTag()", "Associates a shard with a tag, to support tag aware sharding.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.addShardTag/#sh.addShardTag"]]],
                
                ["sh.addTagRange()", "Associates range of shard keys with a shard tag, to support tag aware sharding.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.addTagRange/#sh.addTagRange"]]],
                
                ["sh.removeTagRange()", "Removes an association between a range shard keys and a shard tag. Use to manage tag aware sharding.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.removeTagRange/#sh.removeTagRange"]]],
                
                ["sh.disableBalancing()", "Disable balancing on a single collection in a sharded database. Does not affect balancing of other collections in a sharded cluster.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.disableBalancing/#sh.disableBalancing"]]],
                
                ["sh.enableBalancing()", "Activates the sharded collection balancer process if previously disabled using sh.disableBalancing()", "", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.enableBalancing/#sh.enableBalancing"]]],
                
                ["sh.enableSharding()", "Enables sharding on a specific database.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.enableSharding/#sh.enableSharding"]]],
                
                ["sh.getBalancerHost()", "Returns the name of a mongos that's responsible for the balancer process.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.getBalancerHost/#sh.getBalancerHost"]]],
                
                ["sh.getBalancerState()", "Returns a boolean to report if the balancer is currently enabled.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.getBalancerState/#sh.getBalancerState"]]],
                
                ["sh.help()", "Returns help text for the sh methods.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.help/#sh.help"]]],
                
                ["sh.isBalancerRunning()", "Returns a boolean to report if the balancer process is currently migrating chunks.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.isBalancerRunning/#sh.isBalancerRunning"]]],
                
                ["sh.moveChunk()", "Migrates a chunk in a sharded cluster.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.moveChunk/#sh.moveChunk"]]],
                
                ["sh.removeShardTag()", "Removes the association between a shard and a shard tag.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.removeShardTag/#sh.removeShardTag"]]],
                
                ["sh.setBalancerState()", "Enables or disables the balancer which migrates chunks between shards.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.setBalancerState/#sh.setBalancerState"]]],
                
                ["sh.shardCollection()", "Enables sharding for a collection.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.shardCollection/#sh.shardCollection"]]],
                
                ["sh.splitAt()", "Divides an existing chunk into two chunks using a specific value of the shard key as the dividing point.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.splitAt/#sh.splitAt"]]],
                
                ["sh.splitFind()", "Divides an existing chunk that contains a document matching a query into two approximately equal chunks.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.splitFind/#sh.splitFind"]]],
                
                ["sh.startBalancer()", "Enables the balancer and waits for balancing to start.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.startBalancer/#sh.startBalancer"]]],
                
                ["sh.status()", "Reports on the status of a sharded cluster, as db.printShardingStatus()", "", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.status/#sh.status"]]],
                
                ["sh.stopBalancer()", "Disables the balancer and waits for any in progress balancing rounds to complete.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.stopBalancer/#sh.stopBalancer"]]],
                
                ["sh.waitForBalancer()", "Internal. Waits for the balancer state to change.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.waitForBalancer/#sh.waitForBalancer"]]],
                
                ["sh.waitForBalancerOff()", "Internal. Waits until the balancer stops running.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.waitForBalancerOff/#sh.waitForBalancerOff"]]],
                
                ["sh.waitForDLock()", "Internal. Waits for a specified distributed sharded cluster lock.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.waitForDLock/#sh.waitForDLock"]]],
                
                ["sh.waitForPingChange()", "Internal. Waits for a change in ping state from one of the mongos in the sharded cluster.", [["MongoDB", "Sharding", "https://docs.mongodb.org/manual/reference/method/sh.waitForPingChange/#sh.waitForPingChange"]]]
            ],
            
            "Subprocess": [  /* https://docs.mongodb.org/manual/reference/method/#subprocess  -->   mongo Shell Methods > Subprocess */
            
                ["Name", "Description", "References: Maintainer | Title | URL"]
            
                ["clearRawMongoProgramOutput()", "For internal use.", [["MongoDB", "Subprocess", "https://docs.mongodb.org/manual/reference/method/clearRawMongoProgramOutput/#clearRawMongoProgramOutput"]]],
                
                ["rawMongoProgramOutput()", "For internal use.", [["MongoDB", "Subprocess", "https://docs.mongodb.org/manual/reference/method/rawMongoProgramOutput/#rawMongoProgramOutput"]]],
                
                ["run()", "For internal use.", [["", "", ""]]],
                
                ["runMongoProgram()", "For internal use.", [["MongoDB", "Subprocess", "https://docs.mongodb.org/manual/reference/method/rawMongoProgramOutput/#rawMongoProgramOutput"]]],
                
                ["runProgram()", "For internal use.", [["MongoDB", "Subprocess", "https://docs.mongodb.org/manual/reference/method/runProgram/#runProgram"]]],
                
                ["startMongoProgram()", "For internal use.", [["", "", ""]]],
                
                ["stopMongoProgram()", "For internal use.", [["MongoDB", "Subprocess", "https://docs.mongodb.org/manual/reference/method/stopMongoProgram/#stopMongoProgram"]]],
                
                ["stopMongoProgramByPid()", "For internal use.", [["MongoDB", "Subprocess", "https://docs.mongodb.org/manual/reference/method/stopMongoProgramByPid/#stopMongoProgramByPid"]]],
                
                ["stopMongod()", "For internal use.", [["MongoDB", "Subprocess", "https://docs.mongodb.org/manual/reference/method/stopMongod/#stopMongod"]]],
                
                ["waitMongoProgramOnPort()", "For internal use.", [["MongoDB", "Subprocess", "https://docs.mongodb.org/manual/reference/method/waitMongoProgramOnPort/#waitMongoProgramOnPort"]]],
                
                ["waitProgram()", "For internal use.", [["MongoDB", "Subprocess", "https://docs.mongodb.org/manual/reference/method/waitProgram/#waitProgram"]]]
            ],
            
            "User Management": [  /* https://docs.mongodb.org/manual/reference/method/#user-management  -->   mongo Shell Methods > User Management */
            
                ["Name", "Description", "References: Maintainer | Title | URL"]
            
                ["db.auth()", "Authenticates a user to a database.", [["MongoDB", "User Management", "https://docs.mongodb.org/manual/reference/method/db.auth/#db.auth"]]],
                
                ["db.createUser()", "Creates a new user.", [["MongoDB", "User Management", "https://docs.mongodb.org/manual/reference/method/db.createUser/#db.createUser"]]],
                
                ["db.updateUser()", "Updates user data.", [["MongoDB", "User Management", "https://docs.mongodb.org/manual/reference/method/db.updateUser/#db.updateUser"]]],
                
                ["db.changeUserPassword()", "Changes an existing user's password.", [["MongoDB", "User Management", "https://docs.mongodb.org/manual/reference/method/db.changeUserPassword/#db.changeUserPassword"]]],
                
                ["db.removeUser()", "Deprecated. Removes a user from a database.", [["MongoDB", "User Management", "https://docs.mongodb.org/manual/reference/method/db.removeUser/#db.removeUser"]]],
                
                ["db.dropAllUsers()", "Deletes all users associated with a database.", [["MongoDB", "User Management", "https://docs.mongodb.org/manual/reference/method/db.dropAllUsers/#db.dropAllUsers"]]],
                
                ["db.dropUser()", "Removes a single user.", [["MongoDB", "User Management", "https://docs.mongodb.org/manual/reference/method/db.dropUser/#db.dropUser"]]],
                
                ["db.grantRolesToUser()", "Grants a role and its privileges to a user.", [["MongoDB", "User Management", "https://docs.mongodb.org/manual/reference/method/db.grantRolesToUser/#db.grantRolesToUser"]]],
                
                ["db.revokeRolesFromUser()", "Removes a role from a user.", [["MongoDB", "User Management", "https://docs.mongodb.org/manual/reference/method/db.revokeRolesFromUser/#db.revokeRolesFromUser"]]],
                
                ["db.getUser()", "Returns information about the specified user.", [["https://docs.mongodb.org/manual/reference/method/db.getUser/#db.getUser"]]],
                
                ["db.getUsers()", "Returns information about all users associated with a database.", [["MongoDB", "User Management", "MongoDB", "mongo Shell Methods", "https://docs.mongodb.org/manual/reference/method/db.getUsers/#db.getUsers"]]]
            ]
            
        },  //end "mongo Shell Methods" object definition
        
        "Operators": { /* https://docs.mongodb.org/manual/reference/operator/ */
        
            "Aggregation Pipeline Operators": {  /* https://docs.mongodb.org/manual/reference/operator/aggregation/  -->   Operators > Aggregation Pipeline Operators */
                
                "Accumulators": [  /* https://docs.mongodb.org/manual/reference/operator/aggregation/#accumulators  -->   Operators > Aggregation Pipeline Operators > Accumulators */
         
                    ["Name", "	Description", "References"],
                    
                    ["$sum", "Returns a sum of numerical values. Ignores non-numeric values. Note: changed in version 3.2: Available in both $group and $project stages.", [["MongoDB", "Accumulators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#accumulators"]]],
                    
                    ["$avg", "Returns an average of numerical values. Ignores non-numeric values. Note: changed in version 3.2: Available in both $group and $project stages.", [["MongoDB", "Accumulators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#accumulators"]]],
                    
                    ["$first", "Returns a value from the first document for each group. Order is only defined if the documents are in a defined order. Note: available in $group stage only.", [["MongoDB", "Accumulators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#accumulators"]]],
                    
                    ["$last", "Returns a value from the last document for each group. Order is only defined if the documents are in a defined order. Note: available in $group stage only.", [["MongoDB", "Accumulators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#accumulators"]]],
                    
                    ["$max", "Returns the highest expression value for each group. Note: changed in version 3.2: Available in both $group and $project stages.", [["MongoDB", "Accumulators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#accumulators"]]],
                    
                    ["$min", "Returns the lowest expression value for each group. Note: changed in version 3.2: Available in both $group and $project stages.", [["MongoDB", "Accumulators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#accumulators"]]],
                    
                    ["$push", "Returns an array of expression values for each group. Note: available in $group stage only.", [["MongoDB", "Accumulators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#accumulators"]]],
                    
                    ["$addToSet", "Returns an array of unique expression values for each group. Order of the array elements is undefined. Note: available in $group stage only.", [["MongoDB", "Accumulators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#accumulators"]]],
                    
                    ["$stdDevPop", "Returns the population standard deviation of the input values. Note: changed in version 3.2: Available in both $group and $project stages.", [["MongoDB", "Accumulators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#accumulators"]]],
                    
                    ["$stdDevSamp", "Returns the sample standard deviation of the input values. Note: changed in version 3.2: Available in both $group and $project stages.", [["MongoDB", "Accumulators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#accumulators"]]],         
                ],
                
                "Expression Operators": {  /* https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators  -->   Operators > Aggregation Pipeline Operators > Expression Operators */
                    
                    "Arithmetic": [  /* https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators  -->   Operators > Aggregation Pipeline Operators > Expression Operators > Arithmetic*/
                        
                        ["Token", "Summary", "References: Maintainer | Title | URL"],
                        
                        ["$abs", "Returns the absolute value of a number.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$add", "Adds numbers to return the sum, or adds numbers and a date to return a new date. If adding numbers and a date, treats the numbers as milliseconds. Accepts any number of argument expressions, but at most, one expression can resolve to a date.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$ceil", "Returns the smallest integer greater than or equal to the specified number.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$divide", "Returns the result of dividing the first number by the second. Accepts two argument expressions.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$exp", "Raises e to the specified exponent.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$floor", "Returns the largest integer less than or equal to the specified number.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$ln", "Calculates the natural log of a number.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$log", "Calculates the log of a number in the specified base.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$log10", "Calculates the log base 10 of a number.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$mod", "Returns the remainder of the first number divided by the second. Accepts two argument expressions.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$multiply", "Multiplies numbers to return the product. Accepts any number of argument expressions.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$pow", "Raises a number to the specified exponent.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$sqrt", "Calculates the square root.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$subtract", "Returns the result of subtracting the second value from the first. If the two values are numbers, return the difference. If the two values are dates, return the difference in milliseconds. If the two values are a date and a number in milliseconds, return the resulting date. Accepts two argument expressions. If the two values are a date and a number, specify the date argument first as it is not meaningful to subtract a date from a number.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$trunc", "Truncates a number to its integer.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                    ],
                    
                    "Array": [  /* https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators  -->   Operators > Aggregation Pipeline Operators > Expression Operators > Array */
                        
                        ["Token", "Summary", "References: Maintainer | Title | URL"],
                        
                        ["$arrayElemAt", "Returns the element at the specified array index.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$concatArrays", "Concatenates arrays to return the concatenated array.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$filter", "Selects a subset of the array to return an array with only the elements that match the filter condition.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$isArray", "Determines if the operand is an array. Returns a boolean.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$size", "Returns the number of elements in the array. Accepts a single expression as argument.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$slice", "Returns a subset of an array.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]]
                    ],
                    
                    "Boolean": [  /* https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators  -->   Operators > Aggregation Pipeline Operators > Expression Operators > Boolean */
                        
                        ["Token", "Summary", "References: Maintainer | Title | URL"],
                        
                        ["$and", "Returns true only when all its expressions evaluate to true. Accepts any number of argument expressions.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$or", "Returns true when any of its expressions evaluates to true. Accepts any number of argument expressions.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$not", "Returns the boolean value that is the opposite of its argument expression. Accepts a single argument expression.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                    ],
                    
                    "Comparison": [  /* https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators  -->   Operators > Aggregation Pipeline Operators > Expression Operators > Comparison */
                        
                        ["Token", "Summary", "References: Maintainer | Title | URL"],
                        
                        ["$cmp", "Returns: 0 if the two values are equivalent, 1 if the first value is greater than the second, and -1 if the first value is less than the second.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$eq", "Returns true if the values are equivalent.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$gt", "Returns true if the first value is greater than the second.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$gte", "Returns true if the first value is greater than or equal to the second.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$lt", "Returns true if the first value is less than the second.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$lte", "Returns true if the first value is less than or equal to the second.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$ne", "Returns true if the values are not equivalent.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                    ],
                    
                    "Conditional": [  /* https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators  -->   Operators > Aggregation Pipeline Operators > Expression Operators > Conditional */
                        
                        ["Token", "Summary", "References: Maintainer | Title | URL"],
                        
                        ["$cond", "A ternary operator that evaluates one expression, and depending on the result, returns the value of one of the other two expressions. Accepts either three expressions in an ordered list or three named parameters.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$ifNull", "Returns either the non-null result of the first expression or the result of the second expression if the first expression results in a null result. Null result encompasses instances of undefined values or missing fields. Accepts two expressions as arguments. The result of the second expression can be null.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]]
                    ],
                    
                    "Date": [  /* https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators  -->   Operators > Aggregation Pipeline Operators > Expression Operators > Date */
                        
                        ["Token", "Summary", "References: Maintainer | Title | URL"],
                        
                        ["$dayOfYear", "Returns the day of the year for a date as a number between 1 and 366 (leap year).", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$dayOfMonth", "Returns the day of the month for a date as a number between 1 and 31.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$dayOfWeek", "Returns the day of the week for a date as a number between 1 (Sunday) and 7 (Saturday).", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$year", "Returns the year for a date as a number (e.g. 2014).", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$month", "Returns the month for a date as a number between 1 (January) and 12 (December).", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$week", "Returns the week number for a date as a number between 0 (the partial week that precedes the first Sunday of the year) and 53 (leap year).", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$hour", "Returns the hour for a date as a number between 0 and 23.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$minute", "Returns the minute for a date as a number between 0 and 59.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$second", "Returns the seconds for a date as a number between 0 and 60 (leap seconds)",, [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$millisecond", "Returns the milliseconds of a date as a number between 0 and 999.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$dateToString", "Returns the date as a formatted string.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]]
                    ],
                    
                    "Literal": [  /* https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators  -->   Operators > Aggregation Pipeline Operators > Expression Operators > Literal */
                        
                        ["Token", "Summary", "References: Maintainer | Title | URL"],
                        
                        ["$literal", "Return a value without parsing.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]]
                    ],
                    
                    "Set": [  /* https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators  -->   Operators > Aggregation Pipeline Operators > Expression Operators > Set */
                        
                        ["Token", "Summary", "References: Maintainer | Title | URL"],
                        
                        ["$setEquals", "Returns true if the input sets have the same distinct elements. Accepts two or more argument expressions.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$setIntersection", "Returns a set with elements that appear in all of the input sets. Accepts any number of argument expressions.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$setUnion", "Returns a set with elements that appear in any of the input sets. Accepts any number of argument expressions.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$setDifference", "Returns a set with elements that appear in the first set but not in the second set; i.e. performs a relative complement of the second set relative to the first. Accepts exactly two argument expressions.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$setIsSubset", "Returns true if all elements of the first set appear in the second set, including when the first set equals the second set; i.e. not a strict subset. Accepts exactly two argument expressions.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$anyElementTrue", "Returns true if any elements of a set evaluate to true; otherwise, returns false. Accepts a single argument expression.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$allElementsTrue", "Returns true if no element of a set evaluates to false, otherwise, returns false. Accepts a single argument expression.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]]
                    ],
                    
                    "String": [  /* https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators  -->   Operators > Aggregation Pipeline Operators > Expression Operators > String */
                        
                        ["Token", "Summary", "References: Maintainer | Title | URL"],
                        
                        ["$concat", "Concatenates any number of strings.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$substr", "Returns a substring of a string, starting at a specified index position up to a specified length. Accepts three expressions as arguments: the first argument must resolve to a string, and the second and third arguments must resolve to integers.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$toLower", "Converts a string to lowercase. Accepts a single argument expression.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$toUpper", "Converts a string to uppercase. Accepts a single argument expression.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$strcasecmp", "Performs case-insensitive string comparison and returns: 0 if two strings are equivalent, 1 if the first string is greater than the second, and -1 if the first string is less than the second.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]]
                    ],
                    
                    "Text Search": [  /* https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators  -->   Operators > Aggregation Pipeline Operators > Expression Operators > Text Search */
                        
                        ["Token", "Summary", "References: Maintainer | Title | URL"],
                        
                        ["$meta", "Access text search metadata.", [["MongoDB", "Text Search Aggregation Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/meta/#exp._S_meta"]]]
                    ],
                    
                    "Variable": [  /* https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators  -->   Operators > Aggregation Pipeline Operators > Expression Operators > Variable */
                        
                        ["Token", "Summary", "References: Maintainer | Title | URL"],
                        
                        ["$map", "Applies a subexpression to each element of an array and returns the array of resulting values in order. Accepts named parameters.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]],
                        
                        ["$let", "Defines variables for use within the scope of a subexpression and returns the result of the subexpression. Accepts named parameters.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators"]]]
                    ],
                    
                },
    
                "Stage Operators": [  /* https://docs.mongodb.org/manual/reference/operator/aggregation/#stage-operators */
                
                    ["Token", "Summary", "References: Maintainer | Title | URL"],
                    
                    ["$project", "Reshapes each document in the stream, such as by adding new fields or removing existing fields. For each input document, outputs one document.", [["MongoDB", "Stage Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/project/#pipe._S_project"]]],
                                    
                    ["$match", "Filters the document stream to allow only matching documents to pass unmodified into the next pipeline stage. $match uses standard MongoDB queries. For each input document, outputs either one document (a match) or zero documents (no match).", [["MongoDB", "Stage Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/match/#pipe._S_match"]]],
                                    
                    ["$redact", "Reshapes each document in the stream by restricting the content for each document based on information stored in the documents themselves. Incorporates the functionality of $project and $match. Can be used to implement field level redaction. For each input document, outputs either one or zero document.", [["MongoDB", "Stage Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/redact/#pipe._S_redact"]]],
                                    
                    ["$limit", "Passes the first n documents unmodified to the pipeline where n is the specified limit. For each input document, outputs either one document (for the first n documents) or zero documents (after the first n documents).", [["MongoDB", "Stage Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/limit/#pipe._S_limit"]]],
                                    
                    ["$skip", "Skips the first n documents where n is the specified skip number and passes the remaining documents unmodified to the pipeline. For each input document, outputs either zero documents (for the first n documents) or one document (if after the first n documents).", [["MongoDB", "Stage Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/skip/#pipe._S_skip"]]],
                                    
                    ["$unwind", "Deconstructs an array field from the input documents to output a document for each element. Each output document replaces the array with an element value. For each input document, outputs n documents where n is the number of array elements and can be zero for an empty array.", [["MongoDB", "Stage Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/unwind/#pipe._S_unwind"]]],
                                    
                    ["$group", "Groups input documents by a specified identifier expression and applies the accumulator expression(s), if specified, to each group. Consumes all input documents and outputs one document per each distinct group. The output documents only contain the identifier field and, if specified, accumulated fields.", [["MongoDB", "Stage Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/group/#pipe._S_group"]]],
                                    
                    ["$sample", "Randomly selects the specified number of documents from its input.", [["MongoDB", "Stage Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/sample/#pipe._S_sample"]]],
                                    
                    ["$sort", "Reorders the document stream by a specified sort key. Only the order changes; the documents remain unmodified. For each input document, outputs one document.", [["MongoDB", "Stage Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/sort/#pipe._S_sort"]]],
                                    
                    ["$geoNear", "Returns an ordered stream of documents based on the proximity to a geospatial point. Incorporates the functionality of $match, $sort, and $limit for geospatial data. The output documents include an additional distance field and can include a location identifier field.", [["MongoDB", "Stage Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/geoNear/#pipe._S_geoNear"]]],
                                    
                    ["$lookup", "Performs a left outer join to another collection in the same database to filter in documents from the “joined” collection for processing.", [["MongoDB", "Stage Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/lookup/#pipe._S_lookup"]]],
                                    
                    ["$out", "Writes the resulting documents of the aggregation pipeline to a collection. To use the $out stage, it must be the last stage in the pipeline.", [["MongoDB", "Stage Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/out/#pipe._S_out"]]],
                                    
                    ["$indexStats", "Returns statistics regarding the use of each index for the collection.", [["MongoDB", "Stage Operators", "https://docs.mongodb.org/manual/reference/operator/aggregation/indexStats/#pipe._S_indexStats"]]]
                ]   
                
            }, 
            
            "Query and Projection Operators": {  /* https://docs.mongodb.org/manual/reference/operator/query/ */
                    
                "Projection Operators": [  /* https://docs.mongodb.org/manual/reference/operator/query/#projection-operators    -->   Operators > Query and Projection Operators > Projection Operators */
                        
                    ["Token", "Summary", "References: Maintainer | Title | URL"],
                    
                    ["$", "Projects the first element in an array that matches the query condition.", [["MongoDB", "Expression Operators", "https://docs.mongodb.org/manual/reference/operator/projection/positional/#proj._S_"]]],
                    
                    ["$elemMatch", "Projects the first element in an array that matches the specified $elemMatch condition.", [["MongoDB", "Projection Operators", "https://docs.mongodb.org/manual/reference/operator/projection/elemMatch/#proj._S_elemMatch"]]],
                    
                    ["$meta", "Projects the document's score assigned during $text operation.", [["MongoDB", "Projection Operators", "https://docs.mongodb.org/manual/reference/operator/projection/meta/#proj._S_meta"]]],
                    
                    ["$slice", "Limits the number of elements projected from an array. Supports skip and limit slices.", [["MongoDB", "Projection Operators", "https://docs.mongodb.org/manual/reference/operator/projection/slice/#proj._S_slice"]]]
                ],
                    
                "Query Selectors": {  /* https://docs.mongodb.org/manual/reference/operator/query/#query-selectors    -->   Operators > Query and Projection Operators > Query Selectors */
                
                    "Array": [  /* https://docs.mongodb.org/manual/reference/operator/query/#query-selectors   -->   Operators > Query and Projection Operators > Query Selectors > Array */
                        
                        ["Token", "Summary", "References: Maintainer | Title | URL"],
                        
                        ["$all", "Matches arrays that contain all elements specified in the query.", [["MongoDB", "Query Selectors", "https://docs.mongodb.org/manual/reference/operator/query/all/#op._S_all"]]],
                        
                        ["$elemMatch", "Selects documents if element in the array field matches all the specified $elemMatch conditions.", [["MongoDB", "Query Selectors", "https://docs.mongodb.org/manual/reference/operator/query/elemMatch/#op._S_elemMatch"]]],
                        
                        ["$size", "Selects documents if the array field is a specified size.", [["MongoDB", "Query Selectors", "https://docs.mongodb.org/manual/reference/operator/query/size/#op._S_size"]]]
                    ],
                    
                    "Bitwise": [  /* https://docs.mongodb.org/manual/reference/operator/query/#query-selectors   -->   Operators > Query and Projection Operators > Query Selectors > Bitwise */
                        
                        ["Token", "Summary", "References: Maintainer | Title | URL"],
                        
                        ["$bitsAllSet", "Matches numeric or binary values in which a set of bit positions all have a value of 1.", [["MongoDB", "Query Selectors", "https://docs.mongodb.org/manual/reference/operator/query/bitsAllSet/#op._S_bitsAllSet"]]],
                        
                        ["$bitsAnySet", "Matches numeric or binary values in which any bit from a set of bit positions has a value of 1.", [["MongoDB", "Query Selectors", "https://docs.mongodb.org/manual/reference/operator/query/bitsAnySet/#op._S_bitsAnySet"]]],
                        
                        ["$bitsAllClear", "Matches numeric or binary values in which a set of bit positions all have a value of 0.", [["MongoDB", "Query Selectors", "https://docs.mongodb.org/manual/reference/operator/query/bitsAllClear/#op._S_bitsAllClear"]]],
                        
                        ["$bitsAnyClear", "Matches numeric or binary values in which any bit from a set of bit positions has a value of 0.", [["MongoDB", "Query Selectors", "https://docs.mongodb.org/manual/reference/operator/query/bitsAnyClear/#op._S_bitsAnyClear"]]],
                    ],
                    
                    "Comments": [  /* https://docs.mongodb.org/manual/reference/operator/query/#query-selectors   -->   Operators > Query and Projection Operators > Query Selectors > Comment */
                        
                        ["Token", "Summary", "References: Maintainer | Title | URL"],
                        
                        ["$comment", "Adds a comment to a query predicate.", [["MongoDB", "Query Selectors", "https://docs.mongodb.org/manual/reference/operator/query/comment/#op._S_comment"]]]
                    ],
                    
                    "Comparison": [  /* https://docs.mongodb.org/manual/reference/operator/query/#query-selectors   -->   Operators > Query and Projection Operators > Query Selectors > Comparison */
                        
                        ["Token", "Summary", "References: Maintainer | Title | URL"],
                        
                        ["$eq", "Matches values that are equal to a specified value.", [["MongoDB", "Query Selectors", "https://docs.mongodb.org/manual/reference/operator/query/eq/#op._S_eq"]]],
                        
                        ["$gt", "Matches values that are greater than a specified value.", [["MongoDB", "Query Selectors", "https://docs.mongodb.org/manual/reference/operator/query/gt/#op._S_gt"]]],
                        
                        ["$gte", "Matches values that are greater than or equal to a specified value.", [["MongoDB", "Query Selectors", "https://docs.mongodb.org/manual/reference/operator/query/gte/#op._S_gte"]]],
                        
                        ["$lt", "Matches values that are less than a specified value.", [["MongoDB", "Query Selectors", "https://docs.mongodb.org/manual/reference/operator/query/lt/#op._S_lt"]]],
                        
                        ["$lte", "Matches values that are less than or equal to a specified value.", [["MongoDB", "Query Selectors", "https://docs.mongodb.org/manual/reference/operator/query/lte/#op._S_lte"]]],
                        
                        ["$ne", "Matches all values that are not equal to a specified value.", [["MongoDB", "Query Selectors", "https://docs.mongodb.org/manual/reference/operator/query/ne/#op._S_ne"]]],
                        
                        ["$in", "Matches any of the values specified in an array.", [["MongoDB", "Query Selectors", "https://docs.mongodb.org/manual/reference/operator/query/in/#op._S_in"]]],
                        
                        ["$nin", "Matches none of the values specified in an array.", [["MongoDB", "Query Selectors", "https://docs.mongodb.org/manual/reference/operator/query/nin/#op._S_nin"]]]
                    ],
                    
                    "Element": [  /* https://docs.mongodb.org/manual/reference/operator/query/#query-selectors   -->   Operators > Query and Projection Operators > Query Selectors > Element */
                        
                        ["Token", "Summary", "References: Maintainer | Title | URL"],
                        
                        ["$exists", "Matches documents that have the specified field.", [["MongoDB", "Query Selectors", ""]]],
                        
                        ["$type", "Selects documents if a field is of the specified type.", [["MongoDB", "Update Operators", "https://docs.mongodb.org/manual/reference/operator/query/#query-selectors"]]]
                    ],
                    
                    "Evaluation": [  /* https://docs.mongodb.org/manual/reference/operator/query/#query-selectors   -->   Operators > Query and Projection Operators > Query Selectors > Evaluation */
                        
                        ["Token", "Summary", "References: Maintainer | Title | URL"],
                        
                        ["$mod", "Performs a modulo operation on the value of a field and selects documents with a specified result.", [["MongoDB", "Query Selectors", ""]]],
                        
                        ["$regex", "Selects documents where values match a specified regular expression.", [["MongoDB", "Query Selectors", ""]]],
                        
                        ["$text", "Performs text search.", [["MongoDB", "Query Selectors", ""]]],
                        
                        ["$where", "Matches documents that satisfy a JavaScript expression.", [["MongoDB", "Update Operators", "https://docs.mongodb.org/manual/reference/operator/query/#query-selectors"]]]
                    ],
                    
                    "Geospatial": [  /* https://docs.mongodb.org/manual/reference/operator/query/#query-selectors   -->   Operators > Query and Projection Operators > Query Selectors > Geospatial */
                        
                        ["Token", "Summary", "References: Maintainer | Title | URL"],
                        
                        ["$geoWithin", "Selects geometries within a bounding GeoJSON geometry. The 2dsphere and 2d indexes support $geoWithin.", [["MongoDB", "Query Selectors", ""]]],
                        
                        ["$geoIntersects", "Selects geometries that intersect with a GeoJSON geometry. The 2dsphere index supports $geoIntersects.", [["MongoDB", "Query Selectors", ""]]],
                        
                        ["$near", "Returns geospatial objects in proximity to a point. Requires a geospatial index. The 2dsphere and 2d indexes support $near.", [["MongoDB", "Query Selectors", ""]]],
                        
                        ["$nearSphere", "Returns geospatial objects in proximity to a point on a sphere. Requires a geospatial index. The 2dsphere and 2d indexes support $nearSphere.", [["MongoDB", "Query Selectors", ""]]]
                    ],
                    
                    "Logical": [  /* https://docs.mongodb.org/manual/reference/operator/query/#query-selectors   -->   Operators > Query and Projection Operators > Query Selectors > Logical */
                        
                        ["Token", "Summary", "References: Maintainer | Title | URL"],
                        
                        ["$or", "Joins query clauses with a logical OR returns all documents that match the conditions of either clause.", [["MongoDB", "Query Selectors", ""]]],
                        
                        ["$and", "Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.", [["MongoDB", "Query Selectors", ""]]],
                        
                        ["$not", "Inverts the effect of a query expression and returns documents that do not match the query expression.", [["MongoDB", "Query Selectors", ""]]],
                        
                        ["$nor", "Joins query clauses with a logical NOR returns all documents that fail to match both clauses.", [["MongoDB", "Query Selectors", ""]]]
                    ]
                }
            },
            
            "Update Operators": {  /* https://docs.mongodb.org/manual/reference/operator/update-array/ */
                
                "Array": [  /* https://docs.mongodb.org/manual/reference/operator/update-array/  -->  Operators > Update Operators > Array */
                    
                    ["Name", "Description", "References"],
                    
                    ["$", "Acts as a placeholder to update the first element that matches the query condition in an update.", [["MongoDB", "Array Update Operators", "https://docs.mongodb.org/manual/reference/operator/update/positional/#up._S_"]]],
                                    
                    ["$addToSet", "Adds elements to an array only if they do not already exist in the set.", [["MongoDB", "Array Update Operators", "https://docs.mongodb.org/manual/reference/operator/update/addToSet/"]]],
                                    
                    ["$pop", "Removes the first or last item of an array.", [["MongoDB", "Array Update Operators", "https://docs.mongodb.org/manual/reference/operator/update/pop/#up._S_pop"]]],
                                    
                    ["$pullAll", "Removes all matching values from an array.", [["MongoDB", "Array Update Operators", "https://docs.mongodb.org/manual/reference/operator/update/pullAll/#up._S_pullAll"]]],
                                    
                    ["$pull", "Removes all array elements that match a specified query.", [["MongoDB", "Array Update Operators", "https://docs.mongodb.org/manual/reference/operator/update/pull/#up._S_pull"]]],
                                    
                    ["$pushAll", "Deprecated. Adds several items to an array.", [["MongoDB", "Array Update Operators", "https://docs.mongodb.org/manual/reference/operator/update/pullAll/#up._S_pullAll"]]],
                                    
                    ["$push", "Adds an item to an array.", [["MongoDB", "Array Update Operators", "https://docs.mongodb.org/manual/reference/operator/update/push/#up._S_push"]]]
                ],
                
                "Bitwise": [  /* https://docs.mongodb.org/manual/reference/operator/update-bitwise/  -->  Operators > Update Operators > Bitwise */
                    
                    ["Name", "Description", "References"],
                    
                    ["$bit", "Performs bitwise AND, OR, and XOR updates of integer values.", [["MongoDB", "Update Operators", ""]]]
                                    
                    
                ],
                
                "Fields": [  /* https://docs.mongodb.org/manual/reference/operator/update-field/  -->  Operators > Update Operators > Fields */
                    
                    ["Name", "Description", "References"],
                    
                    ["$inc", "Increments the value of the field by the specified amount.", [["MongoDB", "Update Operators", ""]]],
                                                    
                    ["$mul", "Multiplies the value of the field by the specified amount.", [["MongoDB", "Update Operators", ""]]],
                                                    
                    ["$rename", "Renames a field.", [["MongoDB", "Update Operators", ""]]],
                                                    
                    ["$setOnInsert", "Sets the value of a field if an update results in an insert of a document. Has no effect on update operations that modify existing documents.", [["MongoDB", "Update Operators", ""]]],
                                                    
                    ["$set", "Sets the value of a field in a document.", [["MongoDB", "Update Operators", ""]]],
                                                    
                    ["$unset", "Removes the specified field from a document.", [["MongoDB", "Update Operators", ""]]],
                                                    
                    ["$min", "Only updates the field if the specified value is less than the existing field value.", [["MongoDB", "Update Operators", ""]]],
                                                    
                    ["$max", "Only updates the field if the specified value is greater than the existing field value.", [["MongoDB", "Update Operators", ""]]],
                                                    
                    ["$currentDate", "Sets the value of a field to current date, either as a Date or a Timestamp.", [["MongoDB", "Update Operators", ""]]]
                ],
                
                "Isolation": [  /* https://docs.mongodb.org/manual/reference/operator/update-isolation/  -->  Operators > Update Operators > Isolation */
                    
                    ["Name", "Description", "References"],
                    
                    ["$isolated", "Modifies the behavior of a write operation to increase the isolation of the operation.", [["MongoDB", "Isolation Update Operator", "https://docs.mongodb.org/manual/reference/operator/update/isolated/#up._S_isolated"]]]
                    
                ],
                
                "Modifiers": [  /* https://docs.mongodb.org/manual/reference/operator/update/  -->  Operators > Update Operators > Modifiers */
                    
                    ["Name", "Description", "References"],
                    
                    ["$each", "Modifies the $push and $addToSet operators to append multiple items for array updates.", [["MongoDB", "Update Operator Modifiers", "https://docs.mongodb.org/manual/reference/operator/update/each/#up._S_each"]]],
                    
                    ["$slice", "Modifies the $push operator to limit the size of updated arrays.", [["MongoDB", "Update Operator Modifiers", "https://docs.mongodb.org/manual/reference/operator/update/slice/#up._S_slice"]]],
                    
                    ["$sort", "Modifies the $push operator to reorder documents stored in an array.", [["MongoDB", "Update Operator Modifiers", "https://docs.mongodb.org/manual/reference/operator/update/position/#up._S_position"]]],
                    
                    ["$position", "Modifies the $push operator to specify the position in the array to add elements.", [["MongoDB", "Update Operator Modifiers", "https://docs.mongodb.org/manual/reference/operator/update/position/#up._S_position"]]]
                    
                ]
            }
            
        }  //end "Operators" object definition
        
    };  // end "mongoDb32" object definition
    
    window.mongoDb32 = mongoDb32;
    
}()); // end IIFE