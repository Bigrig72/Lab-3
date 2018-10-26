'use strict';

//Intro to my page welcome prompts
alert('Hello and welcome to my site!!')


// ------------------QUESTION 1----------------------
var userName = prompt('What is your name?');
console.log('userName after prompt ' + userName);

alert('We are going to play a guessing game!!!')

// set up tally for correct answers
var totalCorrect = 0;

var responseOne = prompt('Is my name Regan and am 28 years old?').toLowerCase();
console.log('responseOne after prompt ' + responseOne);

if (responseOne === "yes" || responseOne === "y") {
  alert('You are correct! ' + userName + '.');

  totalCorrect++; // iterate tally since response is correct
  console.log('totalCorrect', totalCorrect);

} else {
  alert('Sorry that is incorrect, ' + userName + '.');
}


// ------------------QUESTION 2----------------------
var responseTwo = prompt('Was I born in Malone, New York?').toLowerCase();
console.log('responseTwo after prompt ' + responseTwo);


if (responseTwo === "yes" || responseTwo === "y") {
  alert('You are correct! ' + userName + '.');
  totalCorrect++;// iterate tally since response is correct

} else {
  alert('Sorry that is incorrect, ' + userName + '.');
}

// ------------------QUESTION 3----------------------

var responseThree = prompt('Did I move to Pennsylvania and develop sports as a passion?').toLowerCase();
console.log('responseThree after prompt ' + responseThree);

if (responseThree === "yes" || responseThree === "y") {

  alert('You are correct! ' + userName + '.');
  totalCorrect++;// iterate tally since response is correct

} else {

  alert('Sorry that is incorrect, ' + userName + '.');
}


// ------------------QUESTION 4----------------------

var responseFour = prompt('Was I 10 years old when I moved away from PA?').toLowerCase();
console.log('responseFour after prompt ' + responseFour);


if (responseFour === "yes" || responseFour === "y") {

  alert('That is correct!' + userName + '.');
  totalCorrect++;// iterate tally since response is correct

} else {

  alert('get to know me better, ' + userName + '.');
}

// ------------------QUESTION 5----------------------

var responseFive = prompt('Did I play football for Arkansas State?').toLowerCase();
console.log('responseFive after prompt ' + responseFive);


if (responseFive === "no" || responseFive === "n") {

  alert('That is correct! ' + userName + '.');
  totalCorrect++;// iterate tally since response is correct

} else {

  alert('Nope actually Appalachian State, ' + userName + '.');
}

// Reset user instructions
alert('Man! You\'re doing great!! The next questions are a bit tougher because they aren\'t yes or no. I\'ll give you a few chances for each to be fair. Ready?');



// ------------------QUESTION 6----------------------

var favorite = 6;
var userGuess = parseInt(prompt('Guess a number?'));

var counter = 0;
var maxGuesses = 4;

while (userGuess !== favorite && counter < maxGuesses) {

  if (userGuess < favorite) {

    userGuess = parseInt(prompt('Too low Guess again!'));

  } else if (userGuess > favorite) {

    userGuess = parseInt(prompt('Too high Guess again!'));
  }

  counter++;
}
if (userGuess === favorite) {
  alert('You are correct!');
  totalCorrect++;
}

// ------------------QUESTION 7----------------------

var answerRight = false;
var guessCounter = 0;
console.log('guesscounter', guessCounter);

var answers = ['malone', 'selinsgrove', 'fredericksburg', 'seattle'];

while (guessCounter < 6 && answerRight == false) {
  console.log('guesscounter', guessCounter);

  var responseSeven = prompt('Guess one of the four cities I have live in?').toLowerCase();

  for (var answer = 0; answer < answers.length; answer++) {
    if (responseSeven === answers[answer]) {
      answerRight = true;
      totalCorrect++;
      alert('correct');
      console.log('answer: ', answer);
      break;
    } else{
      guessCounter++;
      alert('incorrect');
      console.log('Q 7 guess counter: ', guessCounter);
    }
  }
}

