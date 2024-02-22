//array
const narr = [4,5,8,6,2,7,10];
console.log(narr[2])
narr.push(5);// add 5 at the end of that array
console.log(narr)
narr.pop()//remove the last element of array
console.log(narr)
narr.unshift(23);//add element in the starting of array
console.log(narr)//unshift method will change the whole potition of the elements of array
narr.shift();//it will remove the first element of array
console.log(narr);

console.log(narr.includes(5))//it will return a boolean value.It is used to check wheather the element is present in that array or not. It is Basically just like "Find" Function in 
console.log(narr.indexOf(7))//it will return the index of the input element 
const newArr = narr.join();//it will convert the whole array to a string
console.log(newArr);
console.log(typeof(narr));
console.log(typeof newArr);
const myarr1 = narr.slice(0,5);//it will coppy a part of an array depends on the paramiters
console.log("A",myarr1);
const myarr2 = narr.splice(0,4);//it will take a part of an array and it will also change the real array.
console.log("B" , myarr2);
console.log("Real Array" , narr);
//------------lvl 2----------------

const marvelHeroes = ["deadpool" ,"spider man","Iron man","chaptain america" , "Hulk"];
const dCHeroes = ["batman","flash","robin","Raven"];
const allHeroes = marvelHeroes.concat(dCHeroes);
console.log(allHeroes);


