
for (let i = 1; i <=10; i++) {
    // console.log(`now the value is ${i}` )
}
//finding a val

let val = 5;
for (let index = 0; index < 10; index++) {
    if(index==val) {
        //console.log(`the value is : ${index}`)
    }
} 
 
//---------while loop----------
// print all even nums b/w 1-10
let index = 2;
while (index<10) {
   // console.log(`The num is: ${index}`);
    index +=2;
}

// printing values of a array]

const arr = [1,2,3,74,6,8,75];
    //using forof loop
        for (const num of arr) {
           // console.log(num); // ***for of loop***
        }

        const map = new Map()
        map.set(91 , "INDIA");
        map.set(1, "USA");

       // console.log(map);
        for (const [key, value] of map) {
           // console.log(key , ":-" , value);
           //console.log(value);//
            // console.log(key);
        }

        const myNewObj = {
            js: "JavaScript",
            cpp: "c++",
            j: "java",
            r: "rust"
        }

        for (const key in myNewObj) {
          // console.log(` ${key} is the shortcut for ${myNewObj[key]}`);
        }

        const codingLang = ["js","c++","c","java","rust"];

    codingLang.forEach(function (v){
        //console.log(v);
    })

    const objArray = [
        {
            name: "javaScript",
            a:"j",
            oi:"asd"
        },
        {
            name1: "c++",
            m: "programming lang"
        }
    ]

    objArray.forEach(i => {
      //  console.log(i.name);
    });

    const mNums = [0,10,20,30,40,50,60,70,80,90];

    const nNums = mNums.map(n => n+ 10);
   // console.log(nNums);
    
   const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


    const mbooks = books.filter((bk) => bk.genre = "Fiction" && bk.publish >= 2000)

  //console.log(mbooks)