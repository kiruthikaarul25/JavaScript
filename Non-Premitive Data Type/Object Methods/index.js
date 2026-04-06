let emp = {
    eName: "Nivi",
    ePlace: "Tamilnadu",
    eId: 31,
    ePassword: "nivi@31"
}

Object.seal(emp) // it not allowed to add...but edit
Object.freeze(emp) // it not allowed new value and edit

emp.ePin = 9056
emp.eName = "Darlaa"

console.log(Object.keys(emp)); //only print key
console.log(Object.values(emp)); //only print values
console.log(Object.entries(emp)); //object convert into array
console.log(Object.isFrozen(emp)); //check freeze or not
console.log(Object.isSealed(emp)); //check seal or not

let sharingData = Object.fromEntries(Object.entries(emp).filter(([key]) => key !== "ePassword")) //fromentries convert array into object
console.log(sharingData)

// const person={
//     name:'Nivi'
// }
// function greet(age,msg){
//     console.log(`My name is ${this.name} and my age is ${age},s${msg}`);  
// }
// greet.call(person,28,'Welcome');
// greet.apply(person,[28,'Welcome']); //use array brackes[] using apply


const person = {
    name: 'Nivi',
    greet: function (age, msg) {
        console.log(`My name is ${this.name} and my age is ${age},
            ${msg}`);
    }
}
person.greet.call(person, 28, 'Welcome');
person.greet.apply(person, [28, 'Welcome']);
const bindMethod = person.greet.bind(person, 30, "Have a nice day")
bindMethod()