/* hw4 
   probelm 1 JavaScript code
*/
let num = parseInt(prompt("Enter a number between 1-100:"));

if (num >= 1 && num <= 100) {
  console.log("Thank you! You entered " + num + ", a valid number.");
} else {
  console.log("Sorry" +num + "is not a valid entry.");
}