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
// let age = 20;
// if (age >= 14 && age <= 90);

// Write an if condition to check that age is NOT between 14 and 90 
// inclusively.
// Create two variants: the first one using NOT !, the second one –
// without it.

// if (!(age >= 14 && age <= 90));

// if (age < 14 || age > 90);

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

// let userName = prompt('Who\'s there?', '');

// if (userName === 'Maku') {

//     let password = prompt('Password?', '');

//     if (password === 'Hola') {
//     alert('Welcome!');
//     } else if (password === '' || password === null) {
//     alert('Cancelled');
//     } else {
//     alert('Wrong Password!');
//     }
// } else if (userName === '' || userName === null) {
//     alert('Cancelled');
// } else {
//     alert('I don\'t know you!');
// }


// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals

// const select = document.querySelector('select');
// const list = document.querySelector('ul');
// const h1 = document.querySelector('h1');

// select.onchange = function() {
//   const choice = select.value;
// 	let days = 31;
  
//   if(choice === 'February') {
//     days = 28;
//   } else if(choice === 'April' || choice === 'June' || choice === 'September' || choice ==='November'){
//     days = 30;
//   }
  
  
  
//   createCalendar(days, choice);
// }

// function createCalendar(days, choice) {
//   list.innerHTML = '';
//   h1.textContent = choice;
//   for (let i = 1; i <= days; i++) {
//     const listItem = document.createElement('li');
//     listItem.textContent = i;
//     list.appendChild(listItem);
//   }
// }

// createCalendar(31,'January');


// switch(choice){
//     case 'white':
//         update('white' , 'black');
//     break;

//     case 'white':
//         update('black' , 'white');
//     break;

//     case 'purple':
//         update('purple' , 'white');
//     break;

//     case 'yellow':
//         update('black' , 'yellow');
//     break;

//     case 'psychedelic':
//         update('yellow' , 'purple');
//     break;
// }

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals

// Conditionals 1

// let season = 'summer';
// let response;


// if(season === 'summer'){
//     response = 'It is summer.';
// } else {
//     response = 'Season unknown.';
// }

// if(season !== 'winter'){
//     response = 'It is NOT winter';
// } else {
//     response = 'It is winter.';
// }

// Conditionals 2



// let response;
// let score = 75;
// let machineActive = false;

// if(machineActive === false){
//     response = 'Turn the machine on!';
// } else if(score >= 0 && score <= 19){
//     response = 'That was a terrible score - Total fail!';
// } else if(score >= 20 && score <= 39){
//     response = 'You know some things, but it\'s a pretty bad score. Needs improvement';
// } else if(score >= 40 && score <= 69){
//     response = 'You did a passable job, not bad!';
// } else if(score >= 70 && score <= 89){
//     response = 'That\'s a great score, you really know your stuff.';
// } else if(score >= 90 && score <= 100){
//     response = 'What an amazing score! Did you cheat? Are you for real?';
// } else {response = 'This is not possible, an error has occurred.'};

// Conditionals 3

// let response;
// let score = 75;
// let machineActive = false;

// if(machineActive) {
// switch(score){
//     case (score >= 0 && score <= 19):
//         response = 'That was a terrible score - Total fail!';
//         [break];
//     case (score >= 20 && score <= 39):
//         response = 'You know some things, but it\'s a pretty bad score. Needs improvement';           
//         break;
//     case (score >= 40 && score <= 69):   
//         response = 'You did a passable job, not bad!';
//         break;
//     case (score >= 70 && score <= 89):
//         response = 'That\'s a great score, you really know your stuff.';
//         break;
//     case (score >= 90 && score <= 100):
//         response = 'What an amazing score! Did you cheat? Are you for real?';
//     break;
//     case (score < 0 || score > 100):
//         response = 'This is not possible, an error has occurred.';
//     break;
//     }
// }


// Conditionals 4

// if(machineActive === true) {
//     machineResult = 'Machine ON';
//     if(pwd === 'cheese'){
//         pwdResult = 'Login Succesful';
//     } else {
//         pwdResult = 'Login Failed';
//     }
// } else {
//     machineResult = 'Machine OFF';
// }


// Continue with 6: Switch statement. (https://www.digitalocean.com/community/tutorials/how-to-use-the-switch-statement-in-javascript)