//Loops

// For loop (for initialization; condition; increment/decrement)
for(var i=0; i<=5; i++){
    console.log("Iteration number:" + i + " Welcome to loops");
}

// For of loop - to iterate over iterable objects (arrays, strings, maps, sets, etc)
var cars = ["Volvo", "BMW", "Toyota", "Tesla"];

for(let car of cars){
    console.log(car);

    if(car == "Toyota"){
        break; // Exit the loop when car is Toyota
    }
}

//ES6 forEach loop
cars.forEach(car => {
    console.log("Es6 forEach loop " + car);
});

cars.forEach(function(car){
    console.log("Es6 forEach loop with function " + car);
});