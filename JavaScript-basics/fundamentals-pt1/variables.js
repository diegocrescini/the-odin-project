//TASKS

//Working with variables

// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

let admin, personName;
personName = 'John';
admin = personName;
// alert(admin);

//Giving the right name

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

let number1 = 2;
let number2 = 4;
let number3 = 11;
let number4 = 3;
let result1 = number1 + number2;
console.log(result1);
let result2 = number3 - number4;
console.log(result2);
let finalResult = result1 * result2;
console.log(finalResult);
evenOddResult = finalResult % 2;
console.log(evenOddResult);
if (evenOddResult === 0) {
    console.log('Eureka');
} else {console.log('FAIL');}

// CONTINUE WITH https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_Math