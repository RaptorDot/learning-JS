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
//------------lvl up----------------

const marvelHeroes = ["deadpool" ,"spider man","Iron man","chaptain america" , "Hulk"];
const dCHeroes = ["batman","flash","robin","Raven"];
const allHeroes = marvelHeroes.concat(dCHeroes);
console.log(allHeroes);

const twoDArr  = [2,6,10,[11,12],16,20,[21,[21.5,22.0],23,24],28];
console.log(twoDArr);
const oneD_isActually2Darr = twoDArr.flat(10);//flat method Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(oneD_isActually2Darr);

console.log(Array.isArray("Debasish"));//it will check if the argument is array or not.
console.log(Array.from("Raptor"));//it will Creates an array from an iterable object.


console.log(Array.from({name: "Denasish"}));
let s1 = 100;
let s2 = 200;
let s3 = 300;
console.log(Array.of(s1,s2,s3));// it will Returns a new array from a set of elements.







