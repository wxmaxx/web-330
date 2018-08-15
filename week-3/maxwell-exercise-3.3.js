/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   6 November 2017
; Modified By: <Leon Maxwell>
; Modified date: 15 August 2018
; Description: The Singleton Pattern
;===========================================
*/ 

// Calls in the header.js file located in the root directory

var header = require('../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 3.2")); 
console.log("\n");

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 Same database instance? true
*/

// start program

var DatabaseSingleton = (function() {
    var instance;

    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

//calls the DatabaseSingleton function and accesses the getInstance method (comparison operation)
function databaseSingletonTest()
{
	var oracle = DatabaseSingleton.getInstance();
  	var postgres = DatabaseSingleton.getInstance();
  
  	console.log("Same database instance? ", oracle === postgres);
}

//function call to test if the two variables are equal, boolean true or false returned
databaseSingletonTest();
               

// end program