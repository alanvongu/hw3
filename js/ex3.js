/* HW4
   Problem 3 JavaScript code
*/
let day = prompt("Enter a day of the week (use a three-letter abbreviation in lowercase):").toLowerCase();
switch (day) {
  case "sun":
    console.log("You entered: " + day);
    console.log("The following day is: mon");
    break;
  case "mon":
    console.log("You entered: " + day);
    console.log("The following day is: tue");
    break;
  case "tue":
    console.log("You entered: " + day);
    console.log("The following day is: wed");
    break;
  case "wed":
    console.log("You entered: " + day);
    console.log("The following day is: thu");
    break;
  case "thu":
    console.log("You entered: " + day);
    console.log("The following day is: fri");
    break;
  case "fri":
    console.log("You entered: " + day);
    console.log("The following day is: sat");
    break;
  case "sat":
    console.log("You entered: " + day);
    console.log("The following day is: sun");
    break;
  default:
    console.log("Sorry, Please enter a three-letter abbreviation in lowercase.");
}