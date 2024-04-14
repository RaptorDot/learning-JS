// setInterval(function () {
//     console.log("hello" )
// },2000)
// clearInterval(interval);
const Start = document.getElementById('start');
const Stop = document.getElementById('stop');

let interval ;
const sayDate = function (str) {
    console.log(str , Date.now() );
}
    Start.addEventListener('click' , function(){
      interval =  setInterval(sayDate , 1500 , "current date is: ");

   })
    Stop.addEventListener('click' , function () {
    clearInterval(interval);
})

