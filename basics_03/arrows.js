const userObject = {
    userId: "Claw",
    userAge: 18,
    userMessege:function print() {
        
        console.log(`hello my name is ${this.userId} , nice to meet you`)
        // console.log(this)
    } 

}
// userObject.userMessege()
// // const{userId:uId} = userObject;
// // uId = "sam"
userObject.userId = "Sam"
// userObject.userMessege()
// console.log(this) // it will print a empty object as "this" is out of the scope of a object. However if we print "this" in a browser then a global (window) object will print

const sayHello = function hello() {
    console.log("Hello...");
}
// sayHello()

const add = (num1,num2) => {
    return num1 + num2;
}
// console.log(add(7,9));
const div = (num1,num2) => num2/num1;

console.log(div(5,10))