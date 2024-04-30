class users{
    constructor(email , password){
            this.password = password;
            this.email = email;
    }
    get password(){
        return this._passwprd.toUpperCase();
    }
    set password(val){
        return this._passwprd = val;
    }

}
const user = new users("userOner@email.com" , "132abc");
    console.log(user.password);