var student = {};
(student.usn = "1cr21"), (student.name = "ShreeRam");
// command for drop  multiple database at a time

// ChatGPT
// In MongoDB, there isn't a direct command to drop multiple databases at the same time. However, you can achieve this by iterating through the list of databases and executing the dropDatabase command for each one. You can use a script or a loop, depending on your specific needs.

// Here's an example using the MongoDB shell:

javascript;

// Get a list of all databases
var databaseList = db.getMongo().getDBNames();

// Exclude system databases (admin, config, local)
var excludedDatabases = ["admin", "config", "local"];
var userDatabases = databaseList.filter(
  (db) => !excludedDatabases.includes(db)
);

// Drop each database
userDatabases.forEach(function (dbName) {
  print("Dropping database: " + dbName);
  db.getSiblingDB(dbName).dropDatabase();
});

// print("Dropping databases completed.");
// In this script:

// The db.getMongo().getDBNames() command retrieves a list of all database names.
// The excludedDatabases array contains the names of system databases that you might want to exclude from the dropping process.
// The userDatabases array filters out the system databases.
// The script then iterates through the user databases and uses db.getSiblingDB(dbName).dropDatabase() to drop each one.
// Please be extremely cautious when using the dropDatabase command, as it permanently deletes all data in the specified database. Ensure you have proper backups and have verified that you want to delete the databases before executing such scripts.


//mongo Import
mongoimport --db DataBaseName --collection CollectionName --file student.js --jsonArray