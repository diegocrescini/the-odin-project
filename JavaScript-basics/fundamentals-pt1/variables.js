// TASKS
// SOURCE https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_Math

// MATH 1
// Working with variables

// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

let admin, personName;
personName = 'John';
admin = personName;
// alert(admin);

// Giving the right name

// Create a variable with the name of our planet. How would you name such a variable?
// Create a variable to store the name of a current visitor to a website. How would you name that variable?

let planet = 'Earth'; //CORRECTION: Useful for planets, but not specific enough for the task. ourPlanetName would be more precise. 
let currentVisitor; //CORRECTION: currentVisitorName or currentUserName would be fine. Don't skimp on words, unless the variable becomes too long. 

//Uppercase const?

// Examine the following code:

// const birthday = '18.04.1982';
// const age = someCode(birthday);

// Here we have a constant birthday date and the age is calculated from birthday with the help of some code (it is not provided for shortness, and because details don’t matter here).
// Would it be right to use upper case for birthday? For age? Or even for both?

// const BIRTHDAY = '18.04.1982'; // make uppercase?
// const AGE = someCode(BIRTHDAY); // make uppercase?

//Answer: Would be ok for birth DynamicsCompressorNode, but not for AbstractRange, since it's calculated.

// Mozilla MATH 1 excercises
//1

// Create four variables that contain numbers. 
// Call the variables something sensible.
// Add the first two variables together and store the result in another variable.
// Subtract the fourth variable from the third
// and store the result in another variable.
// Multiply the results from the last two steps together, 
// storing the result in a variable called finalResult. The product should be 48. 
// If it isn't, you'll have to adjust some of the initial input values.
// Finally, write a calculation that checks whether finalResult is an even number.
// Store the result in a variable called evenOddResult.

// let number1 = 2;
// let number2 = 4;
// let number3 = 11;
// let number4 = 3;
// let result1 = number1 + number2;
// console.log(result1);
// let result2 = number3 - number4;
// console.log(result2);
// let finalResult = result1 * result2;
// console.log(finalResult);
// evenOddResult = finalResult % 2;
// console.log(evenOddResult);
// if (evenOddResult === 0) {
//     console.log('Eureka');
// } else {console.log('FAIL');}

// MATH 2
// In the second task you are already provided with two calculations, 
// with the results stored in the variables result and result2. 
// But these results aren't what we want; you'll need to take the calculations 
// and change them to give us what we want.

// What do we want? After multiplying the two results together and formatting
// the result to 2 decimal places, the final result should be 10.42.

// Try updating the live code below to recreate the finished example, 
// following these steps:

// Write a calculation that multiplies result and result2 together and assigns 
// the result back to result. This will require assignment shorthand.
// Write a line of code that takes result and formats it to 2 decimal places,
// storing the result of this in a variable called finalResult.
// Check the data type of finalResult using typeof; you'll probably 
// see that it is actually of string type! Write a line of code that converts
// it to a number type, storing the result in a variable called finalNumber.
// The value of finalNumber needs to be 10.42. Go back and update the original
// calculations you were provided with so that they give this final result.
// Don't update the numbers or the operators.

// let result = (7 + 13) / (9 + 7);
// console.log(result);

// let result2 = 100 / (2 * 6);
// console.log(result2);

// result *= result2;
// console.log(result);

// let finalResult = (Math.round(result * 100) / 100).toFixed(2);
// console.log(finalResult);
// console.log(typeof finalResult);

// finalNumber = parseInt(finalResult, 10);
// console.log(finalNumber);

// MATH 3

// In the final task for this article, we want you to write some tests. 
// You've got three groups, each consisting of a statement and two variables.
// For each one, write a test that proves or disproves the statement made.
// Store the results of those tests in variables called weightComparison, 
// heightComparison, and pwdMatch, respectively.

// Statement 1: The elephant weights less than the mouse
// let weightComparison;

// let heightComparison;

// let pwdMatch;


// let eleWeight = 1000;
// let mouseWeight = 2;

// if (eleWeight < mouseWeight === true) {
//     weightComparison = true;
// } else {
//     weightComparison = false;
// }
// console.log(weightComparison);

// let ostrichHeight = 2;
// let duckHeight = 0.3;

// if(ostrichHeight > duckHeight === true) {
//     heightComparison = true;
// } else {
//     heightComparison = false;
// }
// console.log(heightComparison);

// let pwd1 = 'stromboli';
// let pwd2 = 'stROmBoLi'

// if(pwd1 === pwd2) {
//     pwdMatch = true;
// } else {
//     pwdMatch = false;
// }
// console.log(pwdMatch);


