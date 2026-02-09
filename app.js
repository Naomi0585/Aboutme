'use strict';
let userPoints = 0;

console.log('Hello there!');

alert('Welcome to my guessing game!');

let user = prompt('what is your name?');

while (!user) {
  user = prompt('what is your name? Really, I want to know... ')
}

// this is the not equals comparison operator
if (user !== 'Naomi'){
  alert('Nice try!');
}

alert('Hi' + user + '!I am so glad  you decided to come visit my page.');


