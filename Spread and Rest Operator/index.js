let a=[1,2,3]
let b=[...a] // (...) it copies all 'a' values
console.log(b);

let c=[10,20,30]
let d=[40,50,60]
let e=[...c,...d]
console.log(e);

let emp={
    eId:101,
    eName:"Nivi"
}
let emp2={...emp}
console.log(emp2);

let colors=["red","blue","yellow","white"]
let[primary,secondary,...others]=colors

console.log(primary); //take first value
console.log(secondary); //take second value
console.log(others); //print remaining values

let emp3={
    eId:101,
    eName:"Nivi",
    ePlace:"Tamilnadu"
}
let {eId,eName,...otherData}=emp3

console.log(eId);
console.log(eName);



