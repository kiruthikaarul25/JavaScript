let a=" Hello World ";

let b=a.length; // counting letter with space also
console.log(b);

let c =a.charAt(0) // read first letter 0 is a first index
console.log(c);

let d=a.charCodeAt(0)
console.log(d); //Computer characters ah number aa store pannum.(ASCII value)

let e=a.toUpperCase();
console.log(e);

let f=a.toLowerCase();
console.log(f);

let g=a.startsWith("H");
console.log(g); //check the letter start crt or not if crt print true otherwise false

let h=a.endsWith("d"); //check end letter
console.log(h);

let i =a.includes("w");
console.log(i); //check in between the word

let j=a.indexOf("r");
console.log(j); // print that letter index value

let k=a.trimStart("");
console.log(k); //trim space in starting

let l=a.trimEnd(""); //trim end
console.log(l); 


let m=a.trim("");
console.log(m);  //both start and end

let n=a.concat("Everyone");
console.log(n); //add word

let o=a.repeat(2);
console.log(o); //repeat word

let p=a.replace("Hello","Bye");
console.log(p); //replace bye instead of hello

let q=a.slice(3,9);
console.log(q);//remove start index 3 letter and after 9 index

let r=a.split();
console.log(r); // convert string into array 

let s=a.split("");
console.log(s); //split letters space also

let t=a.split(" ");
console.log(t); //split word

let u=prompt("Enter Your Name");  //promt to use get user input
let v=u.charAt(0).toUpperCase().concat(u.slice(1));
console.log(v);
