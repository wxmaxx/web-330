/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   6 November 2017
; Modified By: <Leon Maxwell>
; Modified date: 15 August 2018
; Description: The Factory Pattern
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
 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }
 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }
*/

//start program

function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7;
}

//define Oracle database class constructor
function Oracle (properties) {
	this.username = properties.username || "admin";
  	this.password = properties.password || "orapass";
  	this.server = properties.server || "localhost:8080";
  	this.version = properties.version || 2.3;
}

//define Informix database class constructor
function Informix (properties) {
	this.username = properties.username || "admin";
  	this.password = properties.password || "infopass";
  	this.server = properties.server || "localhost:3000";
}

//function creates an empty object
function DatabaseFactory() {}

//assigns a prototype class and passes in the constructor function
DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
  if (properties.databaseType === "Postgres") {
      this.databaseClass = Postgres;
  } 
  
  if (properties.databaseType === 'MySql') {
    this.databaseClass = MySql;
  }
  
  if (properties.databaseType === 'Oracle') {
  	this.databaseClass = Oracle;
  }
  
  if (properties.databaseType === 'Informix') {
  	this.databaseClass = Informix;
  }
  
   return new this.databaseClass(properties);
  
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

//creates a new database type from constructor object
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase ({
  	databaseType: "Oracle",
  	username: "oraadmin",
  	password: "orapass",
  	version: "1.2.1.1"
});

//creates a new database type from constructor object
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase ({
  	databaseType: "Informix",
  	username: "infoadmin",
  	password: "infopass"
});

console.log(oracle);
console.log(informix);

//end program