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
