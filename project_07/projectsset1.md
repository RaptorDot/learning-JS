#Project Related To Dom
## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)
# Solution Code
## Project1
```javascript
    const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach(function (b) {
  // console.log(b);
  b.addEventListener('click' , function(event){
    // console.log("You Clicked");
    // console.log(event.target);
    switch(event.target.id) {
      case "grey":
          body.style.backgroundColor = event.target.id;
        break;
      case "white":
      body.style.backgroundColor = event.target.id;
        break;
        case "blue":
      body.style.backgroundColor = event.target.id;
        break;
        case "yellow":
      body.style.backgroundColor = event.target.id;
        break;
      default:
        // code block
    }
  })
});


```
## Project 2

``` javascript 

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    if(bmi<18.6){
      results.innerHTML = `<span>${bmi} , You're Under Weight ☹️ </span>`;
    }
    else if(bmi>=25){
      results.innerHTML = `<span>${bmi} , You're OverWeight ☹️ </span>`;

    }
    else if(bmi>18.6 && bmi<25){
      results.innerHTML = `<span>${bmi} , You're Weight is Normal 😃 </span>`;

    }
  }
});

```
## project 3
``` javascript 
const clock = document.getElementById('clock');


setInterval(function(){
      let time = new Date();
      clock.innerHTML = time.toLocaleTimeString();
    } , 1000);


```

## project no. 4

``` javascript 

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
      displayMessage('');
    playGame = true;
  });
}
```

# Project 5
### Changing Background Color
##
``` javascript 
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if(intervalId==null){
    intervalId = setInterval(changeColor , 1000);
  }

  function changeColor(){
    document.body.style.backgroundColor = randomColor();
  }
};
  function stopChangingColor(){
      clearInterval(intervalId);
      intervalId = null;
}
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);



```