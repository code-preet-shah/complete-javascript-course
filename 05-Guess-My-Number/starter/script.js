'use strict';
/* console.log(document.querySelector('.message').textContent); //Start guessing...
document.querySelector('.message').textContent = 'Correct number!';
console.log(document.querySelector('.message').textContent); //Correct number! */

const initialNumber = document.querySelector('.number').textContent;
const initalScore = document.querySelector('.score').textContent;
const initialMessage = document.querySelector('.message').textContent;
const initialBackgroundColor = document.querySelector('body').style.backgroundColor;
let score = Number(initalScore);
let number = null;

function generateRandomNumber() {
    number = Math.trunc(Math.random() * 20) + 1;
    //document.querySelector('.number').textContent = number;
}
generateRandomNumber();

document.querySelector('.check').addEventListener('click', function () {
    let guess = document.querySelector('.guess').value;
    if (guess === '')
        guess = null;
    else
        guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    if (guess === null) {
        document.querySelector('.message').textContent = 'No number provided';
    } else {
        //compare the value now
        if (guess === number) {
            document.querySelector('body').style.backgroundColor = 'green';
            document.querySelector('.message').textContent = 'Correct number!';
            document.querySelector('.number').textContent = number;
            const highscore = Number(document.querySelector('.highscore').textContent);
            if (score > highscore)
                document.querySelector('.highscore').textContent = score;
        } else {
            (guess > number) ? (document.querySelector('.message').textContent = 'Go a little lower!') : (document.querySelector('.message').textContent = 'Go a little higher!');
            score--;
            document.querySelector('.score').textContent = score;
            if (score == 0) {
                document.querySelector('body').style.backgroundColor = 'red';
                document.querySelector('.message').textContent = 'You have lost the game!'
                document.getElementsByClassName('check')[0].style.visibility = 'hidden';
            }

        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    generateRandomNumber();
    document.querySelector('.number').textContent = initialNumber;
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = initalScore;
    document.querySelector('.message').textContent = initialMessage;
    score = Number(initalScore);
    document.getElementsByClassName('check')[0].style.visibility = 'visible';
    document.querySelector('body').style.backgroundColor = initialBackgroundColor;
});