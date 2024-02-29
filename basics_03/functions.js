function calcRectArea(width, height) {
    return width * height;
  }
  
  console.log(calcRectArea(5, 6));
  function callUserName(username) {
    console.log(`user id is: ${username}`);
  }

//   console.log(callUserName("xyz1234"))

  function isLoggedIn(username) {
    if(!username) {
        console.log(`user is not logged in`)
        return
    }
    return `${username} just logged in.`
  }

//   console.log(isLoggedIn("Debasish Das"))
    function cartPrice(var1,var2,...num) {
        console.log(var1,var2);
        return num
    }
    console.log(cartPrice(2,5,8,7,6,3,9))
        let totalPrice = 0;
    function addCartPrices(...num) {
        // console.log(val1,val2)
        for (let i = 0; i < num.length; i++) {
            totalPrice += num[i];
            
        }
        return totalPrice
    }
    console.log(addCartPrices(50,20,40,90,50))

  
  