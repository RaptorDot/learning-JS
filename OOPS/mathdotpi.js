console.log(Math.PI);
console.log(Math.floor(Math.PI));
console.log(Math.ceil(Math.PI));

// const discriptor = Object.getOwnPropertyDescriptor(Math ,"PI");


    student ={
        age: 18,
        name :"Debasish",
        course: "Btech",

        fun(){
            console.log("it's a function");
        }
    }

    console.log(Object.getOwnPropertyDescriptor(student , "name"));

    Object.defineProperty(student , "name" , {
        writable : false,
        enumerable : false
    });
    console.log(Object.getOwnPropertyDescriptor(student , "name"));

