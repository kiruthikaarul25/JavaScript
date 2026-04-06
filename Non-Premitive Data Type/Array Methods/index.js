let a=[1,3,7,2,5]
console.log(a);

let b=a.push(6,7)  //add value in last
console.log(a);

let c=a.pop()  //rremove value in last
console.log(a);

let d=a.unshift(4) //add first value
console.log(a);

let e=a.shift()//remove first value
console.log(a);

let movies=["KGF","Kantara","Jailer","Gilli"]
let f=movies.map((value,index)=>console.log(value,index)) // we get value and its position using map ()=> arrow function is used

let g=a.filter((value,index)=>value%2==0)//use === also //filter in array get all possible value
console.log(g);

let gg=movies.filter((value,index)=>value=="Jailer") 
console.log(gg);

let h=a.find((value,index)=>value%2==0)// find first possible value only
console.log(h);

let i=a.reduce((prev,curr)=>{return prev+curr}) //add values like 1+3=4, next 4+7=7.....
console.log(i);

for(const key in movies){ //for in print index number of array in line by line
    console.log(key);
}
 
for(const key of movies){ //for of print array values in column
    console.log(key)
}

let j=movies.forEach((value,index)=>{ // for each print index and values
    console.log(`${value} == ${index}`)
})

let k=[100,200,300]

let kk=k.map((value,index)=>value*2) //return in array // 
console.log(kk);

let kkk=k.forEach((value,index)=>value*2) //not return in array it can't create new value
console.log(kkk)

let l=a.reverse()
console.log(l)

let m=a.sort() //arrange the value in order
console.log(m)

let n=a.join() //convert array into string
console.log(n)

let o=[45,67,13,26]

let oo=o.some((value,index)=>value%2==0) // check any one value is true 
console.log(oo) 

let ooo=o.every((value,index)=>value%2==0) // must true every value
console.log(ooo)
