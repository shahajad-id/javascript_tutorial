const score=100; // 
const balance =new Number(100); // explicit we can declare a number po/p-number[100]

console.log(score)
console.log(balance)

//   all output of fun will be in strings
console.log(score.toFixed(4)); // 100.0000  string
console.log(balance.toString().length); //3

//precision
const num=125.8956
console.log(num.toPrecision(4));//125.9
console.log(num.toPrecision(3)); //126

// to get comma seperated value
const n=1000000
console.log(n.toLocaleString('en-IN'));// 10,00,000

//min value and max value
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

//maths
//console.log(Math);
console.log(Math.abs(3-5));//2

console.log(Math.round(4.5));//5

console.log(Math.ceil(4.2));  //it take upper value 5

console.log(Math.floor(4.9));  //it take lower value 4

console.log(Math.min(2,4,6,1));//1

            //ranom
console.log(Math.random()); // give random value between 0 and 1

// to make it >= 1
console.log((Math.random()*10)+1);//now always give value >=1 in decimallike 2.234242323,4.23432423
console.log(Math.floor((Math.random()*10)+1));  //3,7,5

//to make formulae that give random value between min and max 
const max=20;
const min=15;
console.log(Math.floor(Math.random()*(max-min+1)+ min)); // it will give value >15 and <20







