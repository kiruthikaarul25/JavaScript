let emp = {
    eName: "Keerthi",
    ePlace: "Tamilnadu",
    eId: 31,
    ePassword: "keerthi@31"
}

Object.seal(emp) 
Object.freeze(emp) 

emp.ePin = 9056
emp.eName = "Darlaa"

console.log(Object.keys(emp)); 
console.log(Object.values(emp)); 
console.log(Object.entries(emp)); 
console.log(Object.isFrozen(emp)); 
console.log(Object.isSealed(emp)); 

let sharingData = Object.fromEntries(Object.entries(emp).filter(([key]) => key !== "ePassword")) 
console.log(sharingData)

const person={
    name:'Nivi'
}
function greet(age,msg){
    console.log(`My name is ${this.name} and my age is ${age},s${msg}`);  
}
greet.call(person,28,'Welcome');
greet.apply(person,[28,'Welcome']); //use array brackes[] using apply


const person = {
    name: 'Keerthi',
    greet: function (age, msg) {
        console.log(`My name is ${this.name} and my age is ${age},
            ${msg}`);
    }
}
person.greet.call(person, 28, 'Welcome');
person.greet.apply(person, [28, 'Welcome']);
const bindMethod = person.greet.bind(person, 30, "Have a nice day")
bindMethod()
