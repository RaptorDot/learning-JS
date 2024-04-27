
class users{
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password;
        return this;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
    encryptPassword(){
        return `${this.password}acb`;
    }
}

const userOne = new users("UserOne" , "userone123@email.com" , 12345);
// console.log(userOne);
// console.log(users.encryptPassword());
// console.log(users.changeUsername());
class students extends users{
    constructor (teacher , email , sub){
        this.teacher = username;
        this.email = email;
        this.sub = password;
    }
    course(){
        console.log(`Compleate ${sub} series by ${this.username}`);
    }
    
}

let user = new users("Hitesh Choudhary" , "123abcd" , "JavaScript" );

user.course()