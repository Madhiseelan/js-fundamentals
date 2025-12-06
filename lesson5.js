// Logical operator
// && - AND

const { truncate } = require("fs");

console.log(true && true); //all values have to be True for expression to be True

//Logical OR operator
console.log(true || false); //any value should be True for expression to be True

var ageIsMorethanEighteen = true;
var isUSCitizen = true;

var eligiblityForDrivingLicense = ageIsMorethanEighteen && isUSCitizen;
console.log('Eligiblity for driving license:', eligiblityForDrivingLicense);

//Any one condition is True, the overall expression is True
var ageIsMorethanEighteen = false;
var isUSCitizen = true;

var eligiblityForDrivingLicense1 = ageIsMorethanEighteen || isUSCitizen; 
console.log('Eligiblity for driving license:', eligiblityForDrivingLicense1);

//Logical NOT operator - use !
console.log(!true); //false
console.log(!false); //true

console.log("equal ", 6 == 10);
console.log("logical not ", 6 !== 10);
