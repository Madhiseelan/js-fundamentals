//when you hover over the variable names, you can see the type of the variable
// it shows as string type for customerFirstName and customerLastName, and number type for customerAge
var customerFirstName = "John";
var customerLastname = "Smith";
var customerAge = 25;


//Typescript preventing us to assign a value of different type to the variables

//uncommenting the below line will give an error
//customerAge = "25"; //Error: Type 'string' is not assignable to type 'number'

//Type Inference
//Typescript infers the type of the variable based on the value assigned to it
//So, we don't need to explicitly specify the type of the variable
var customerCity = "New York"; //Inferred as string
var customerZipCode = 10001; //Inferred as number

//customerCity = 12345; //Error: Type 'number' is not assignable to type 'string'
//customerZipCode = "10001"; //Error: Type 'string' is not assignable to type 'number'

//Explicitly specifying the type of the variable
var customerCountry: string = "USA";
var customerPhoneNumber: number = 1234567890;

//uncommenting the below line will give an error
//customvar customerPhoneNumber: number = 1234567890;
//var customerHomeNumber: number = "3556"; //Error: Type 'string' is not assignable to type 'number'";


//We can create our own custom type.
//I want my customer to be an object of firstName, lastname and active status 
type Customer = {
    firstName: string,
    lastName: string,
    active: boolean};

var firstCustomer: Customer = {
    firstName: "Mary",
    lastName: "Johns",
    active: true
}