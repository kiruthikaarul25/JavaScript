let a=[1,3,7,2,5]
console.log(a);

let b=a.push(6,7)  
console.log(a);

let c=a.pop()  
console.log(a);

let d=a.unshift(4) 
console.log(a);

let e=a.shift()
console.log(a);

let movies=["KGF","Kantara","Jailer","Gilli"]
let f=movies.map((value,index)=>console.log(value,index)) 

let g=a.filter((value,index)=>value%2==0)
console.log(g);

let gg=movies.filter((value,index)=>value=="Jailer") 
console.log(gg);

let h=a.find((value,index)=>value%2==0)
console.log(h);

let i=a.reduce((prev,curr)=>{return prev+curr}) 
console.log(i);

for(const key in movies){
    console.log(key);
}
 
for(const key of movies){ 
    console.log(key)
}

let j=movies.forEach((value,index)=>{ 
    console.log(`${value} == ${index}`)
})

let k=[100,200,300]

let kk=k.map((value,index)=>value*2) 

let kkk=k.forEach((value,index)=>value*2) 
console.log(kkk)

let l=a.reverse()
console.log(l)

let m=a.sort() 
console.log(m)

let n=a.join() 
console.log(n)

let o=[45,67,13,26]

let oo=o.some((value,index)=>value%2==0) 
console.log(oo) 

let ooo=o.every((value,index)=>value%2==0) 
console.log(ooo)
