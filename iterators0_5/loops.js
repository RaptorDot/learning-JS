
for (let i = 1; i <=10; i++) {
    // console.log(`now the value is ${i}` )
}
//finding a val

let val = 5;
for (let index = 0; index < 10; index++) {
    if(index==val) {
        //console.log(`the value is : ${index}`)
    }
} 
 
//---------while loop----------
// print all even nums b/w 1-10
let index = 2;
while (index<10) {
   // console.log(`The num is: ${index}`);
    index +=2;
}

// printing values of a array]

const arr = [1,2,3,74,6,8,75];
    //using forof loop
        for (const num of arr) {
           // console.log(num); // ***for of loop***
        }

        const map = new Map()
        map.set(91 , "INDIA");
        map.set(1, "USA");

       // console.log(map);
        for (const [key, value] of map) {
           // console.log(key , ":-" , value);
           //console.log(value);//
            // console.log(key);
        }

        const myNewObj = {
            js: "JavaScript",
            cpp: "c++",
            j: "java",
            r: "rust"
        }

        for (const key in myNewObj) {
          // console.log(` ${key} is the shortcut for ${myNewObj[key]}`);
        }

        const codingLang = ["js","c++","c","java","rust"];

    codingLang.forEach(function (v){
        console.log(v);
    })

    

