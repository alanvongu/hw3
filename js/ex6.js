/* HW4
   Problem 6 JavaScript code
*/
let number = parseInt(prompt("Enter a number to be multiplied:"));
for (let i = 0; i <= 10; i++) {
  let result = number * i;
  console.log(`${number} x ${i} = ${result}`);
}