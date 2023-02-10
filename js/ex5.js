/* HW4
   Problem 5 JavaScript code
*/
let password = "secret";
let tries = 0;
while (tries < 3) {
  let input = prompt("Enter the password:");
  if (input === password) {
    console.log(`You entered the correct password after ${tries + 1} try(s)`);
    break;
  } else {
    tries++;
  }
}
if (tries === 3) {
  console.log(`Your account is locked! You failed to enter the correct password ${tries} times`);
}

