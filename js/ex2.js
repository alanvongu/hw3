/* HW4
   Problem 2 JavaScript code
*/
let name = prompt("Enter name:");
let units = parseInt(prompt("Enter the number of units completed:"));
if (isNaN(units) || units < 0 || units % 1 !== 0) {
  console.log("Invalid input. Please enter a positive integer.");
} else {
  let gradeStanding = "";
  if (units >= 0 && units <= 30) {
    gradeStanding = "Freshman";
  } else if (units >= 31 && units <= 60) {
    gradeStanding = "Sophomore";
  } else if (units >= 61 && units <= 90) {
    gradeStanding = "Junior";
  } else {
    gradeStanding = "Senior";
  }
  console.log("Hello " + name);
  console.log("Your grade standing is " + gradeStanding);
}