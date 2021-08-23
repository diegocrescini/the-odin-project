// let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
//     let para = document.createElement('p');

//     // Add your code here
    
//     function chooseName() {
//     let randomName = Math.round(Math.random() * (names.length - 1));
//     para.textContent = names[randomName]
//       }
//       chooseName();








//     // Don't edit the code below here!

//     const section = document.querySelector('section');

//     section.appendChild(para);



/******************************************
Write a function called add7 that takes one number and returns that number + 7.
*//////////////////////////////////////////////////////

let add7 = (a) => {
    let result = a + 7;
    return result;
}



/******************************************
Write a function called multiply that takes 2 numbers and returns their product.
*//////////////////////////////////////////////////////

let multiply = (a, b) => {return (a * b)};

/******************************************
Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. 
Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
*//////////////////////////////////////////////////////

let capitalize = (string) => {
    let lowercase = (string.toLowerCase()).slice(1);
    let capitalLetter = string[0].toUpperCase();
    let capitalizedWord = capitalLetter + lowercase;
    return capitalizedWord;
};


/******************************************
Write a function called lastLetter that takes a string and returns the very last letter of that string:
    lastLetter("abcd") should return "d"
 *//////////////////////////////////////////////////////

 let lastLetter = (string) => {
     let last = string[(string.length - 1)];
     return last;
 }