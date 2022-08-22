import { addTwoNumbers, divideTwoNumbers, substractTwoNumbers, timesTwoNumbers } from "../helpers/math-helpers";

export let num1 = 10;
let num2 = 20;

let total1 = addTwoNumbers (num1, num2);
let total2 = substractTwoNumbers (num1, num2);
let total3 = timesTwoNumbers (num1, num2);
let total4 = divideTwoNumbers(num1, num2);


console.log( "add = ", total1);
console.log( "substract = ", total2);
console.log( "times = ", total3);
console.log( "divide = ", total4);



// substractTwoNumbers
// timesTwoNumbers
// divideTwoNumbers