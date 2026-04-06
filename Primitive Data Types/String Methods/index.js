let a=" Hello World ";

let b=a.length; 
console.log(b);

let c =a.charAt(0) 
console.log(c);

let d=a.charCodeAt(0)
console.log(d); 

let e=a.toUpperCase();
console.log(e);

let f=a.toLowerCase();
console.log(f);

let g=a.startsWith("H");
console.log(g);

let h=a.endsWith("d"); 
console.log(h);

let i =a.includes("w");
console.log(i); 

let j=a.indexOf("r");
console.log(j); 

let k=a.trimStart("");
console.log(k);

let l=a.trimEnd(""); 
console.log(l); 


let m=a.trim("");
console.log(m); 

let n=a.concat("Everyone");
console.log(n); 

let o=a.repeat(2);
console.log(o);

let p=a.replace("Hello","Bye");
console.log(p);

let q=a.slice(3,9);
console.log(q);

let r=a.split();
console.log(r);  

let s=a.split("");
console.log(s); 

let t=a.split(" ");
console.log(t); 

let u=prompt("Enter Your Name");  
let v=u.charAt(0).toUpperCase().concat(u.slice(1));
console.log(v);
