//Excercise found in https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods
// Excercise 1
//My answer:

const list = document.querySelector('.output ul');
list.innerHTML = '';
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (let i = 0; i < cities.length; i++) {
  let input = cities[i];
  let lower = input.toLowerCase();
  let lower2 = lower.slice(1);
  let firstLetter = lower.slice(0,1);
  let capitalLetter = firstLetter.toUpperCase();
  let capitalizedCities = capitalLetter + lower2;
  let result = capitalizedCities;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}

// "Official" answer: 
const list = document.querySelector('.output ul');
list.innerHTML = '';
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (let i = 0; i < cities.length; i++) {
  let input = cities[i];
  let lower = input.toLowerCase();
  let firstLetter = lower.slice(0,1);
  let capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
  let result = capitalized;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);

}

//Excercise 2
//My Answer

const list = document.querySelector('.output ul');
list.innerHTML = '';
let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (let i = 0; i < stations.length; i++) {
  let input = stations[i];
  let stationCode = input.slice(0,3);
  let semicolon = input.indexOf(';');
  let stationName = input.slice(semicolon + 1);
  let display = `${stationCode}: ${stationName}`;
  let result = display;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}


//"Official" answer

const list = document.querySelector('.output ul');
list.innerHTML = '';
let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (let i = 0; i < stations.length; i++) {
  let input = stations[i];
  let code = input.slice(0,3);
  let semiC = input.indexOf(';');
  let name = input.slice(semiC + 1);
  let result = code + ': ' + name;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}

//Continue with https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_Strings