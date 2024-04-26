function multiplayBy5(num){
return num *5;
}

    console.log(multiplayBy5(4));
    console.log(multiplayBy5.prototype)
    multiplayBy5.p = 4;
    console.log(multiplayBy5.p);

    function creat(username , idNo){
        this.username = username;
        this.idNo = idNo;
    }
    creat.prototype.inc = function(idNo){
        this.idNo++;
        console.log(`The Id is: ${idNo}`);
    }
    

    const user1 = new creat("userOne" , 12001);
    const user2 = new creat("userTwo" , 12002);

    console.log(user1);
    console.log(user2)