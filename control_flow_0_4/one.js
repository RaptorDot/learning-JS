    // let value = 50;
    // //conditonals 
    // if (value>100) {
    //     console.log("The value is  gteater than 100");
    // }
    // else if (value===100) {
    //     console.log("The value is equal to 100");
    // }
    
    // else console.log("The value is not gteater than 100");
    
    var userHasEmail = true, userHasFacekook = 0, guestUser = true;
    // if (userHasEmail||userHasFacekook||guestUser) {
    //     console.log("user can log in")
    // } else {
    //     console.log("user cant log in")
    // }


        let month = 3;

        switch (3) {
            case 1:
                console.log("its jan")
                break;
            case 2:
                console.log("its feb")
                break;
            case 3:
                console.log("its march")
                break;
            case 4:
                console.log("its april")
                break;
        
            default: console.log("default")
                break;
        }


        // falsy values------------->>>
        // 0, -+0, false, bigInt- 0n' NaN,undefined ,"", null'
        //truly values---------->>
        // any falsy value in string like - "0", 'false'
        // any numbers - 5,7,8,9...
        //[], {} , function() {}
        
        let value = NaN;

        if (value) {
            console.log("Hello")
        }
        else console.log("value is false")

        // nullish Coalescing operator (??) : null undefined

        // let val = 7??10
        //  let val = 0??15 
        // let val = undefined??45
        let val = null??15*2 // this oparetor can be used only for null and undefined
        // console.log(val)
        

        // Terniary Operator 
        // Condition ? true : false

        let haveMovey = 99;
        haveMovey >100 ? console.log("yeeaaaa") : console.log("Ohh nooo")