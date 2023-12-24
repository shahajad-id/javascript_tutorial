//String ,Numeber,null,Boolean,undefined,Symbol,BigInt(2233424n)->primitive
//nonpremitive->array,objects,functions
const score=5.6;  //number
const temp=null;
const isloggedin=true;  //Boolean
let username;  //undefined
const bigno=523412423n;
const id=Symbol('345');
const anotherid=('345');// both are not equal because of symbol
//console.log(id===anotherid);  false

//non premetive
const fruit=["apple","banana","mango"];

let myobj={
    name:"mds",
    age:22,
}

const myfun=function(){
    console.log("hello world");
}
console.log(typeof(temp));  //object
console.log(typeof(isloggedin));  //boolean
console.log(typeof(bigno));//bigint
console.log(typeof(myobj));//object
console.log(typeof(myfun));//function

