// alert(2 > 1);
// alert(2 == 1);
// alert(2 != 1);

// 5 > 4 //true
// "apple" > "pineapple" //false
// "2" > "12" //true
// undefined == null //true
// undefined === null //false
// null == "\n0\n" // false
// null === +"\n0\n" //false

// https://javascript.info/logical-operators

// Write an if condition to check that age is between 14 and 90
// inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.
let age = 20;
if (age >= 14 && age <= 90);

// Write an if condition to check that age is NOT between 14 and 90 
// inclusively.
// Create two variants: the first one using NOT !, the second one –
// without it.

if (!(age >= 14 && age <= 90));

if (age < 14 || age > 90);

// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, 
// if the input is an empty line or Esc – show “Canceled”, 
//if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

//     If it equals “TheMaster”, then show “Welcome!”,
//     Another string – show “Wrong password”,
//     For an empty string or cancelled input, show “Canceled”


// Please use nested if blocks. Mind the overall readability of the code.

// Hint: passing an empty input to a prompt returns an empty string ''.
// Pressing ESC during a prompt returns null.

let userName = prompt('Who\'s there?', '');

if (userName === 'Maku') {

    let password = prompt('Password?', '');

    if (password === 'Hola') {
    alert('Welcome!');
    } else if (password === '' || password === null) {
    alert('Cancelled');
    } else {
    alert('Wrong Password!');
    }
} else if (userName === '' || userName === null) {
    alert('Cancelled');
} else {
    alert('I don\'t know you!');
}


/// Continue with 4 This article reinforces the concept and provides several interesting examples of how you could use it building websites.