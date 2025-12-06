//Objects and arrays

var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ['Volvo', 'BMW', 'Toyota', 'Tesla']
};

console.log(customer);
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer['lastName']);

//Dot notation
customer.firstName = 'Mike';
//Bracket Notation
customer['lastName'] = 'Silver';

console.log(`Changed names are ${customer.firstName} and ${customer.lastName}`);


//Arrays
var cars = ['Volvo', 'BMW', 'Toyota', 'Tesla'];
console.log('Second index of car', cars[1]);
cars[1] = 'Audi';
console.log('Changed second index of car', cars[1]);

// Get the value from objects inside arrays
console.log('First Car from Customer Objext: ', customer.cars[0]);