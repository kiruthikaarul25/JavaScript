localStorage.setItem('name',"sudesh") //setItem store the values
localStorage.setItem('age',25)

localStorage.clear() //delete all storage value
localStorage.removeItem('age') //remove only that key

let name=localStorage.getItem('name') // getItem read the value
let age=localStorage.getItem('age')
document.writeln(`My name is ${name} and my age is ${age}`);