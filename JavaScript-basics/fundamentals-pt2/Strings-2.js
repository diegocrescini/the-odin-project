// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_Strings


// STRINGS 1

// let quoteStart = 'Don\'t judge each day by the harvest you reap ';
// let quoteEnd = 'but by the seeds that you plant.';
// finalQuote = quoteStart + quoteEnd;


//STRINGS 2

// let quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
// let substring = 'green eggs and ham';

// // Add your code here
// let quoteLength = quote.length;
// console.log(quoteLength);
// index = quote.indexOf(substring);
// console.log(index);
// let quoteEnd = quote.indexOf('. I do not');
// console.log(quoteEnd);
// console.log(typeof(quoteEnd));

// let revisedQuote = quote.slice(0,++quoteEnd);
// console.log(revisedQuote);

//STRINGS 3

// let quote = 'I dO nOT lIke gREen eGgS anD HAM.';
// console.log(quote);
// fixedQuote = quote.toLowerCase();
// fixedQuote = fixedQuote.replace(fixedQuote[0], fixedQuote[0].toUpperCase());
// console.log(fixedQuote); // I do not like green eggs and ham.

//STRINGS 4

// let theorem = 'Pythagorean theorem';

// let a = 5;
// let b = 8;

// Hypotenuse
// (a ** 2 + b ** 2)  = c ** 2
// (a ** 2 + b ** 2) ** (1/2) = c

// let myString = 'Using *, we can work out that that if the two shortest sides of a right-angled triangle have lengths of * and *, the length of the hypotenuse is *.';
// myString = `Using ${theorem}, we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${(a ** 2 + b ** 2) ** (1/2)}.`
// console.log(myString);

let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable."
console.log(longString);
longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable."
console.log(longString);