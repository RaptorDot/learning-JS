
// const  user = {
//     username : "user1",
//     password: "abcx1234",
//     isLoggedIn : false,
//     locaiton : "India",

//     getUserDetail : function(username ,locaiton){
//         console.log(`${user.username} is loggedin from ${user.locaiton}`)
//     }

// }

// user.getUserDetail();



function users(username , isLoggedin , currentLocation){
    this.username = username;
    this.isLoggedin = isLoggedin;
    this.currentLocation = currentLocation;

    return this;
}

    const userOne = new users("userOne" , true , "India");
    const userTwo = new users("User2" , false , "USA" );

    console.log(userOne);
    console.log(userTwo);
