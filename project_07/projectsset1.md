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