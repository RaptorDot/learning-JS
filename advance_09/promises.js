const promessis = new Promise(function(resolve , reject){

    setTimeout(function(){
       // console.log("Async task is completed");
        resolve();
    } , 1200)
})

promessis.then(function(){
    //console.log("promise consumed");
})

new Promise(function(resolve , reject){
    setTimeout(() => {
       // console.log("Acync task two");
    }, 1500);
}).then(function(){
   // console.log("Async 2 Resolve")
})

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(() => {
        resolve({ username: "userOne", userEmail: "userEmail@email.com",})
    }, 1500);
});

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(){

    
});

