'use strict';

//Intro to my page welcome prompts

alert('Hello and welcome to my site!!')
var userName = prompt('What is your name?');
console.log('userName after prompt ' + userName);


alert('We are going to play a guessing game!!!')

// set up tally for correct answers
var totalCorrect = 0;

var responseOne = prompt('Is my name Regan and am 28 years old?').toLowerCase();
console.log('responseOne after prompt ' + responseOne);


if (responseOne=== "yes" || responseTwo === "y") {

  alert('You are correct! ' + userName + '.');

  totalCorrect++; // iterate tally since response is correct
  console.log('totalCorrect', totalCorrect);

} else {

  alert('Sorry that is incorrect, ' + userName + '.');

}


var responseTwo = prompt('Was I born in Malone, New York?').toLowerCase();
console.log('responseTwo after prompt ' + responseTwo);


if (responseTwo=== "yes" || responseTwo === "y") {

  alert('You are correct! ' + userName + '.');
  totalCorrect++;// iterate tally since response is correct

} else {

  alert('Sorry that is incorrect, ' + userName + '.');
}

var responseThree = prompt('Did I move to Pennsylvania and develop sports as a passion?').toLowerCase();
console.log('responseThree after prompt ' + responseThree);


if (responseThree === "yes" || responseTwo === "y") {

  alert('You are correct! ' + userName + '.');
  totalCorrect++;// iterate tally since response is correct

} else {

  alert('Sorry that is incorrect, ' + userName + '.');
}

var responseFour = prompt('Was I 10 years old when I moved away from PA?').toLowerCase();
console.log('responseFour after prompt ' + responseFour);


if (responseFour === "no" || responseTwo === "n") {

  alert('That is correct!' + userName + '.');
  totalCorrect++;// iterate tally since response is correct

} else {

  alert('get to know me better, ' + userName + '.');
}

var responseFive = prompt('Did I play football for Arkansas State?').toLowerCase();
console.log('responseFive after prompt ' + responseFive);


if (responseFive === "no" || responseTwo === "n") {

  alert('That is correct! ' + userName + '.');
  totalCorrect++;// iterate tally since response is correct

} else {

  alert('Nope actually Appalachian State, ' + userName + '.');
}

var responseSix = prompt('Is my passion Health and Fitness and have a strong goal of software development?').toLowerCase();
console.log('responseSix after prompt ' + responseSix);


if (responseSix === "yes" || responseTwo === "y") {

  alert('That is correct! ' + userName + '.');
  totalCorrect++;// iterate tally since response is correct

} else {

  alert('Nope!! Continue to get to know me!, ' + userName + '.');
}

// Reset user instructions
alert('Man! your doing great!! The next questions are a bit tougher because they aren\'t yes or no. I\'ll give you a few chances for each to be fair. Ready?');

// Question about Football tenure

var triesLeft = 4; //set initial number of tries for this question
console.log('triesLeft', triesLeft);
var answerFootball = parseInt(prompt('how many years did I play football? (You have ' + triesLeft + ' tries.)'));
var correctFootball = ('I spent 8 years playing and can recall plays like the back of my hand.');
console.log('correctFootball',correctFootball);

while(triesLeft > 1) {
  if (answerFootball === 8) {
    alert('That\'s right! ' + correctFootball);
    totalCorrect++; // iterate tally since response is correct
    console.log('totalCorrect', totalCorrect);
    break;
  } else if (answerFootball < 8) {
    triesLeft--; // decrement guess counter for incorrect response
    console.log('triesLeft', triesLeft);
    answerFootball = parseInt(prompt('Nope... more than that. (You have ' + triesLeft + ' tries left.)'));
  } else if (answerFootball > 8 && answerFootball < 20) {
    triesLeft--; // decrement guess counter for incorrect response
    console.log('triesLeft', triesLeft);
    answerFootball = parseInt(prompt('Nope... less than that. (You have ' + triesLeft + ' tries left.)'));
  } else {
    triesLeft--; // decrement guess counter for incorrect response
    console.log('triesLeft', triesLeft);
    answerFootball = parseInt(prompt('That\'s not even possible! Try again. (You have ' + triesLeft + ' tries left.)'));
  }
}

var favorite = 6;
var userGuess = parseInt(prompt('Guess a number?'));

var counter = 0;
var maxGuesses = 4;

while (userGuess !== favorite && counter < maxGuesses) {

  if (userGuess < favorite) {

    userGuess = parseInt(prompt('Too low Guess again!'));

  } else if ( userGuess > favorite){

  userGuess = parseInt(prompt('Too high Guess again!'));
 }

  counter++;
}






var answers = ['malone', 'selinsgrove', 'fredericksburg', 'seattle'];
var responseSeven = prompt('Guess one of the four cities I have live in?').toLowerCase();
var guesscounter = 0;
console.log('guesscounter', guesscounter);
var answerRight = true;


while (guesscounter < 6 && answerRight == true) {
  console.log('guesscounter', guesscounter);

  for (var i = 0; i < answers.length; i++) {
    if (responseSeven === answers[i]) {

      alert('correct');
      console.log('i', i);
      answerRight = false;
      break;
    }
  }
  if (answerRight = false) {
    break;
  }
  else if (guesscounter == 6) {
    alert('you ran out of tries')
    break;

  }
  else {
    responseSeven = prompt('Guess again?').toLowerCase();
    guesscounter++;

  }
}


























//prompt('Guess a number?')





    // if ( number = favorite) {
    //     number = (prompt( 'your number was correct!'));
    // } else {
    //     number = (prompt('Not the correct answer keep trying'))
    // }
//}










/*var numberGuess = (prompt('guess what my favorite number is between 1 and 6'));
var favorite = '5'

while (numberGuess !== randNumber) {
  if (numberGuess > randNumber) {
    numberGuess = (prompt('Your guess was too high. Try again'));
  } else {
    numberGuess = (prompt('Your guess was too low. Try again.'));
  }
}
*/
