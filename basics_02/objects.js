// object literals

const jsUser = {
    name: "Debasish",
    "full name" : "Debasish Das",
    age: 18,
        location: "India",
    email: "debasish@micro.com",
    isLogedIn: false

}
console.log(jsUser.location);
console.log(jsUser["location"])
//we can use object's useing "dot" oparetor or "[]" brakets
// console.log(jsUser.full name)
console.log(jsUser["full name"]);//full name cant be use eith dot oparetor in this case