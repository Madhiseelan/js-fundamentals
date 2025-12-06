//Functions are used to organize the code into reusable blocks.

//Declarative function. 
// It can be even called in the beginning of the file, even if the funcion is defined later in the file.
// But, Its not the case in anonymous functions.

helloOne(); //Function call
function helloOne(){
    console.log("Hello World from helloOne function");
}


//Anonymous function. Need to Assign the results of this function to certain variable. It doesnt have the name.
let helloTwo = function(){
    console.log("Hello World from helloTwo function");
}
helloTwo(); //Function call


//Arrow function (ES6). Shorter syntax compared to anonymous function. no need to use the 'function' keyword.
let helloThree = () => {
    console.log("Hello World from helloThree function");
}
helloThree(); //Function call


//Function with arguments
function printName(firstname, lastname){
    console.log("Name passed through argument is: " + firstname + " " + lastname);
}
printName("seelan", "madhi"); //Function call with argument


//Function witgh return value
function multiplyByTwo(number){
    var result = number * 2;
    return result;
}
console.log(multiplyByTwo(100)); //Function call

//Create a new js folder helpers and import the function.
import { printAge } from '../helpers/printhelper.js';
printAge(30);

//Import everything from the module
import * as helper from '../helpers/printhelper.js';;
helper.printAge(45);