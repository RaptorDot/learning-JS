//----Number-----
// Number values represent floating-point numbers like 37 or -9.25.

// The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.

// When used as a function, Number(value) converts a string or other value to the Number type. If the value can't be converted, it returns NaN.
const num1 = 4
    console.log(num1);
    console.log(Number(456))
    console.log(Number(456)==num1)
    let num2 = Number(582)
    console.log(num2)
    let num = new Number(789)
    console.log(num)
    console.log(num.toString)
    console.log(typeof(num.toString()))
    let a = num.valueOf()
    console.log(typeof(num))
    console.log(typeof(a))
        let aN = new Number(4102.54584)
        console.log(aN.toFixed(2))
    const anoNum = new Number(416.49215894)
    console.log(anoNum.toPrecision(4))
    console.log(typeof(anoNum.toPrecision(4))) //it returns a string value

    //++++++++++++math+++++++++++++++
    console.log(Math.abs(-54))
     //its make -ve to +ve
     console.log(Math.round(4.9)) // its rounds off the number

     console.log(Math.sqrt(4))
     
     console.log(Math.min(7,8,5,7,1))
     console.log(Math.max(4.5,7,8,9,10))

     console.log(Math.pow(2,3))// it makes the 2nd element the power of the 1st element in this parenthecis

     console.log(Math.floor(5.99))// it will roend down the number

     let x = 7
     console.log(Math.random()) //it will return  a random number b/w 0-1
     console.log(Math.floor(Math.random()*x))   //it will return a value between 0-->x

     let max = 17;
     let min = 10;
     console.log(Math.floor(Math.random() * (max - min) +1 + min)) //it wil return the numbers between man-min

     //-------------Date & Time-------------------------
    //  JavaScript Date objects represent a single moment in time in a platform-independent format.Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

    let myDate = new Date();
    // console.log(myDate);
    // console.log(myDate.toJSON);
    // console.log(myDate.toLocaleString);

    // let newDate = new Date(2024,1,22);
    let newDate = new Date(2024,1,22,2,40);
    console.log(newDate)




    
