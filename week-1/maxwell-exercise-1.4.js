/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   6 November 2017
; Modified By: <Leon Maxwell>
; Modified date: 03 August 2018
; Description: Looks like a duck, walks like a duck, quacks like a duck...must be a duck!
;===========================================
*/ 

// Calls in the header.js file located in the root directory

var header = require('../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 1.4")); 
console.log("\n");

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program
// create a racetrack variable and assign an empty array
var racetrack = [];

// define the car class with a function constructor
function Car(model) {
  this.model = model;
}
// prototype method
 Car.prototype.start = function() {
  console.log("Car added to the racetrack!");
};

// define the truck class with a function constructor
function Truck(model, year) {
 this.model = model;
 this.year = year;
}
// prototype method
 Truck.prototype.start = function() {
  console.log("Truck added to the racetrack!");
};

// define the jeep class with a function constructor
function Jeep(model, year, color) {
 this.model = model;
 this.year = year;
 this.color = color;
}
// prototype method
 Jeep.prototype.start = function() {
  console.log("Jeep added to the racetrack!");
};

var kia = new Car("Cadenza");
var chevy = new Truck("Silverado", 2018);
var cj7 = new Jeep("CJ7", 1978, "black");

// function to push the vehicles to the empty racetrack array
function driveIt(vehicle) {
 vehicle.start();
 racetrack.push(vehicle);
}

// call the driveIt function and pass in the vehicle variables
driveIt(kia);
driveIt(chevy);
driveIt(cj7);

// display vehicles on the track
console.log("\n-- The following vehicles have been added to the racetrack --");
for(var i = 0; i < racetrack.length; i++) {
  console.log(racetrack[i].constructor.name + ": " + racetrack[i].model);
}

// end program