//Concatenation and Interpolation
var price = 50;
var itemName = "cup";

var messageToPrint = "The price for your cup is 50 dollors.";
console.log(messageToPrint);

var messageToPrint2 = "Message 2: The price for your " + itemName + " is " + price + " dollors.";
console.log(messageToPrint2);

//Interpolation
var messageToPrint3 = `Message3: the price for your ${itemName} is ${price} dollors.`;
console.log(messageToPrint3);