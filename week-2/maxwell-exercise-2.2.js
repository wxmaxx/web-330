/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   4 December 2017
; Modified By: <Leon Maxwell>
; Modified date: 11 August 2018
; Description: prototypes
;===========================================
*/ 

// Calls in the header.js file located in the root directory

var header = require('../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 2.2")); 
console.log("\n");

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 The person's full name is '<fullname>.'
 The person's age is '<age>.'
*/

// start program

var Person = {
    getAge: function () {
        return this.age;
    }
};

var bob = Object.create(Person, {            
    age:
        {
        "value": "50"
        },
   fullName:
        {
        "value": "Bob Jones"
        }
});

console.log("The person's full name is " + bob.fullName + ".");
console.log("The person's age is " + bob.age + ".");

//end program