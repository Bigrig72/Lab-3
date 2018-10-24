'use strict';
console.log('app.js is running');

alert('Hello and welcome to my site!!')
var userName = prompt('What is your name?');
console.log('userName after prompt ' + userName);


alert('We are going to play a guessing game!!!')

var responseOne = prompt('Is my name Regan and am 28 years old?').toLowerCase();
console.log('responseOne after prompt ' + responseOne);


if (responseOne.toLowerCase() === "yes" || responseTwo.toLowerCase() === "y") {
   
    alert('You are correct! ' + userName + '.');

} else {
   
    alert('Sorry that is incorrect, ' + userName + '.');

}


var responseTwo = prompt('Was I born in Malone, New York?');
console.log('responseTwo after prompt ' + responseTwo);


if (responseTwo.toLowerCase() === "yes" || responseTwo.toLowerCase() === "y") {

    alert('You are correct! ' + userName + '.');

} else {

    alert('Sorry that is incorrect, ' + userName + '.');
}

var responseThree = prompt('Did I move to Pennsylvania and develop sports as a passion?');
console.log('responseThree after prompt ' + responseThree);


if (responseThree.toLowerCase() === "yes" || responseTwo.toLowerCase() === "y") {

    alert('You are correct! ' + userName + '.');

} else {

    alert('Sorry that is incorrect, ' + userName + '.');
}

var responseFour = prompt('Was I 10 years old when I moved away from PA?');
console.log('responseFour after prompt ' + responseFour);


if (responseFour.toLowerCase() === "no" || responseTwo.toLowerCase() === "n") {

    alert('That is correct!' + userName + '.');

} else {

    alert('get to know me better, ' + userName + '.');
}

var responseFive = prompt('Did I play football for Arkansas State?');
console.log('responseFive after prompt ' + responseFive);


if (responseFive.toLowerCase() === "no" || responseTwo.toLowerCase() === "n") {

    alert('That is correct! ' + userName + '.');

} else {

    alert('Nope actually Appalachian State, ' + userName + '.');
}

var responseSix = prompt('Is my passion Health and Fitness and have a strong goal of software development?');
console.log('responseSix after prompt ' + responseSix);


if (responseSix.toLowerCase() === "yes" || responseTwo.toLowerCase() === "y") {

    alert('That is correct! ' + userName + '.');

} else {

    alert('Nope!! Look at the answers to follow!, ' + userName + '.');
}

var number = [1,2,3,4,5,6];
var favorite = 6

while( number !== favorite) {
    if ( number = favorite) {
        number = (prompt( 'your number was correct!'));
    } else {
        number = (prompt('Not the correct answer keep trying'))
    }
}










var numberGuess = (prompt('guess what my favorite number is between 1 and 6'));
var favorite = '5'

while (numberGuess !== randNumber) {
  if (numberGuess > randNumber) {
    numberGuess = (prompt('Your guess was too high. Try again'));
  } else {
    numberGuess = (prompt('Your guess was too low. Try again.'));
  }
}

