    // the {} is called scopes
    
    var c = 900;
    let a = 500;
if (true) {
     let a = 5;
     console.log("value of a inside scope: " ,a);
    const b = 6;
     c = 9;
}
// console.log(a);
// console.log(b);
console.log("value of a" ,a)// expected value is 500. Because the variable is declared outside of the scope
// console.log(c); 
// var can be accesed out side of the scope

addOne(5)
function addOne(number) {
    return 5 + 1;
}

// addTwo(5,5);
const adding = function addTwo(num1,num2) {
        return num1+num2;
}

