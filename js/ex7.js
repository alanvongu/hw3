/* HW4
   Problem 7 JavaScript code
*/
let hours = parseInt(prompt("Enter the number of hours:"));
let minutes = parseInt(prompt("Enter the number of minutes:"));
let seconds = parseInt(prompt("Enter the number of seconds:"));

if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59 && seconds >= 0 && seconds <= 59) {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
      if (hours === 24) {
        hours = 0;
      }
    }
  }
  console.log(`Time input: ${hours}h${minutes}m${seconds}s`);
  console.log(`One second later: ${hours}h${minutes}m${seconds}s`);
} else {
  console.log("Hours must be between 0 and 23, minutes between 0 and 59, and seconds between 0 and 59.");
}
