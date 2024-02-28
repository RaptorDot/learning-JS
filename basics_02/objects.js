// // object literals

// const jsUser = {
//     name: "Debasish",
//     "full name" : "Debasish Das",
//     age: 18,
//         location: "India",
//     email: "debasish@micro.com",
//     isLogedIn: false

// }
// console.log(jsUser.location);
// console.log(jsUser["location"])
// //we can use object's useing "dot" oparetor or "[]" brakets
// // console.log(jsUser.full name)
// console.log(jsUser["full name"]);//full name cant be use eith dot oparetor in this case



// jsUser.age = 21;

// console.log(jsUser.age)
//     // Object.freeze(jsUser); we cannot change any properties after that
//     jsUser.greetings = function () {
//         console.log("hello world")
//     }
// console.log(jsUser.greetings)
// console.log(jsUser.greetings())

//     jsUser.greetingsTwo = function() {
//         console.log(`hello user, your name is: ${this["full name"]}`)
//     }
//     console.log(jsUser.greetingsTwo())
//     const compUser = {
//         userFullName: {
//             firstName: "Debasish",
//             lastName: "Das"
//         },
//         email: "jsUser@jmail.com"
//     }

//     console.log(compUser);
//     const obj1 = {1:a,2:b,3:c};
//     const obj2 = {4:d,5:e}

//     const obj3 = Object.assign({},obj1,obj2)
//     console.log(obj3)


 //   const ytUser = new Object(); //singleton object
   // console.log(ytUser);
//    const microUser = {};// non-singleton object
//    console.log(microUser)

 