

/********** METHOD 1 ********/ 
/* we can create objects here, of inside the class itself using export keyword
// In this case, Importing the class from printhelper.js. so you export the class there. 
// import { CustomerDetails } from "../helpers/printhelper.js";
// Create an instance/object of the class

// var customerdetails = new CustomerDetails();
customerdetails.printFirstName("madhiseelan");
customerdetails.printLastName("samy");
*/

/********** METHOD 2 ********/ 
//Importing the customer details instance/object from printhelper.js. 
// In this case you dont need to export the class, just export the class instance/object

import { customerdetails } from "../helpers/printhelper.js";

customerdetails.printFirstName("madhiseelan");
customerdetails.printLastName("samy");