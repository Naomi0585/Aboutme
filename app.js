alert("Welcome to the Guessing Game! 🎮");

let user = prompt('what is your name?');


while (!user) {
  user = prompt('what is your name? I REALLY want to know... ')
}

// this is the not equals comparison operator
if (user !== 'Naomi'){
  alert('Hmm, Nice try!');
}

alert('Hi' + user + '!I am so glad  you decided to visit my site.');


let score = 0;

// Question 1
let q1 = prompt("Is Naomi a Morning person or night owl?");
if (q1.toLowerCase() === "night owl") {
  alert("Correct! 🌙");
  score++;
} else {
  alert("Nope! The answer was Night Owl.");
}

// Question 2
let q2 = prompt("Pineapple on pizza: yes or no?");
if (q2.toLowerCase() === "yes") {
  alert("Correct! 🍍🍕");
  score++;
} else {
  alert("Nope! Yes is the answer.");
}

// Question 3
let q3 = prompt("Cats or dogs (or both)?");
if (q3.toLowerCase() === "cats") {
  alert("Correct! 🐱");
  score++;
} else {
  alert("Nope! Cats was the answer.");
}

// Question 4
let q4 = prompt("Guess a number from 1–5");
if (Number(q4) === 3) {
  alert("Correct! 🎯");
  score++;
} else {
  alert("Nope! Try again!");
}

// Question 5
let q5 = prompt("Sweet or salty?");
if (q5.toLowerCase() === "salty") {
  alert("Correct! 🧂");
  score++;
} else {
  alert("Nope! Salty was the answer.");
}

// Question 6
let q6 = prompt("Reading or audiobooks?");
if (q6.toLowerCase() === "reading") {
  alert("Correct! 📚");
  score++;
} else {
  alert("Nope! Reading was the answer.");
}

// Question 7
let q7 = prompt("Socks or barefoot?");
if (q7.toLowerCase() === "barefoot") {
  alert("Correct! 🦶");
  score++;
} else {
  alert("Nope! Barefoot was the answer.");
}

// Final score
alert("Game over! 🎉 You got " + score + " out of 7 correct!");

