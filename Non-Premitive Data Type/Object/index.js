//literal
let emp={
    eName:"Nivi",
    eID:"31",
    ePlace:"Salem",
}
emp.eState="Tamilnadu"

console.log(emp)
console.log(emp, typeof emp)
console.table(emp) // it created table formate

//new Keyword
let stu=new Object()
stu.sName="Nivi",
stu.sID="31"
console.log(stu)

//let new array

//constructor Function
function movies(name,genre){
      this.name=name
      this.genre=genre
}
let m1=new movies("kgf","action")
let m2=new movies("kantara","Devotional")
console.log(m1,m2);



