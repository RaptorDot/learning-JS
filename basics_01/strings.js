const name = 'Debasish'
var repos = 12;

console.log(`my name is ${name} and my repo no. is ${repos}`);

const gameName = new String('palworld'); // its a object

console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(4)); // to know char at any position
console.log(gameName.indexOf('r')); // to know the position of any char

const newstr = gameName.substring(3,8);
console.log(newstr);
const newstr2 = gameName.slice(-6,5);  // its just like substring but we can place -ve value here
console.log(newstr2);
const newstr3 = '      Hello    ';
console.log(newstr3.trim()); // .trim is used to remove spaces 
const newstr4 = " hello-everyone-how's-going-on";
console.log(newstr4.split('-')); // .split is used to make array from string on the basses of something
