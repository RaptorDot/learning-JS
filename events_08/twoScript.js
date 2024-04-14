// setTimeout(() => {
//     console.log("Hello Everyone")
// }, 2000);
const sayHello = function () {
    console.log("Hello Everyone");
}
// setTimeout(sayHello , 1500);
let changeHeading = document.querySelector('h1');
  const changeMe = setTimeout(function () {
        changeHeading.innerHTML = 'Heading Is Changed';
    }, 2000)

    document.getElementById('stop').addEventListener('click' ,function () {
    clearTimeout(changeMe);
    console.log("Headings will remain unchanged.")
    })