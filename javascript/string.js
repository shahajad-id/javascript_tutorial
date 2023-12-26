let name="mds";//string declare
let age=22;
console.log(name+age);
console.log(`helo my name is ${name} and age is ${age}`);//use it while adding string (backticks``)
//console.log(`${name}`)

const str=new String('muhammad shahajad');//string declare

console.log(str.__proto__); //it will show all prototype 
console.log(str.length);

console.log(str.toUpperCase());//it does not change original string 
console.log(str.charAt(2));//  u
console.log(str.indexOf('m'));  //  0

const newstr=str.substring(0,8); //substing(include,exclude)

console.log(str.slice(-6,-4));// we can give negative value in slice() o/p=ah  -6and -5 print from back 

          //trim(){trimStart(for removing beg white spaces) ,trimEnd()} and replace() 

const str2="     muhammad shahajad   "; 
console.log(str2.trim());//"muhammad shahajad"  trim() remove all starting and end white space and  line terminator


const url="https://shahajad.com/shahajad%10alam";

console.log(url.replace('%10','-'));  //https://shahajad.com/shahajad-alam
//replace('value to be serched','value from replce');
console.log(url.includes('alam')); // if present return true

// spliting based on condition    //split(seperator) or split(seperator,limit)
console.log(str.split(' ',2)); //give array  ['muhammad','shahajad']

