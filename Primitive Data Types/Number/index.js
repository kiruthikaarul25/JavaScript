let a=10;
console.log(a,typeof a)  

let b=10.5;
console.log(b,typeof b) //js has only number not int,float like that

let c=parseInt(prompt("enter your age")) //parseInt to use string into number
console.log(c,typeof c)



let d=3.2457879;
let e=+d.toFixed(2) //+ is also use for string to number tofixed after how many value we want
console.log(e,typeof e)

let f=35
let g=f.toString() // toString to use number into string
console.log(g,typeof g)

let h=-Infinity; //it also number whether it is negative or postive
console.log(h,typeof h)

let i=10/0
console.log(i,typeof i)

console.log(0.1+0.2);
console.log(0.1+0.3);
//js is not give and predict crt floating point it is a js problem the program run under the IEEE 754 
console.log(0.1+0.2===0.3);
console.log(0.1+0.3===0.4);

