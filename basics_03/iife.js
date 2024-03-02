        //named iife
    (function add() {
        console.log("hello everyone")
    })();

   (function xyz() {
        console.log(`DB connected`);
    })();

    //not nammed iife

    (
        (value) => {
            console.log(value*5);
        }
    )(8);

    
    