// let myName = "User     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.user = function(){
    console.log(`user is present in all objects`);
}

Array.prototype.user = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "user",
    email: "user0@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//mordan syntax

Object.setPrototypeOf(TeachingSupport , Teacher )


let anotherUsername = "Username         ";

String.prototype.trueLenght = function(){
    console.log(`${this}`);
    console.log(`${this.length}`);
    console.log(`True Lenght is: ${this.trim().length}`);
    console.log();
}
anotherUsername.trueLenght();

    "abcdefghijklmnopqrstuvwxyz    ".trueLenght();
"wejjhf".trueLenght();
