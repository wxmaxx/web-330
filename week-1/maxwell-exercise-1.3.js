/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   6 November 2017
; Modified By: <Leon Maxwell>
; Modified date: 01 August 2018
; Description: Displays a formatted header
;===========================================
*/ 

// Calls in the header.js file located in the root directory

var header = require('../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 1.3")); 
console.log("\n");

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>
*/

// start program

// Log a header
// function creates a cellphone object with four propertie and three methods
function Phone(manufacturer, model, color, price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    // method that returns the price
    this.getPrice = function() {
        return this.price;
    }

    // method that returns the model
    this.getModel = function() {
        return this.model;
    }

    // method that returns the 
    this.getDetails = function() {
        return "Manufacturer: " + this.manufacturer + ('\n') + "Model: " + this.getModel() + ('\n') + "Color: " + this.color + ('\n') + "Price: $" + this.getPrice();
    }
}

// create a variable and assign it to the Phone object
// supply the four arguments for the new phone
var phone = new Phone("Google", "Pixel", "blue", "899.99");

// create a header for the data
console.log("-- DISPLAYING CELL PHONE DETAILS --");

// call the getDetails object for the phone variable
console.log(phone.getDetails());

// end program
