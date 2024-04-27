function setUsername(username){
//complex DB Calls
    this.username = username;
    return this;
}

function createUSer(username , email, password){
    setUsername.call( this , username);

    this.email = email;
    this.password = password;
}

    let user = new createUSer("UserOne" , "userOne@email.com" , "user121");
    console.log(user);    
