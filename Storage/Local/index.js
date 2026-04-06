localStorage.setItem('name',"keerthi") 
localStorage.setItem('age',25)

localStorage.clear() 
localStorage.removeItem('age') 

let name=localStorage.getItem('name') 
let age=localStorage.getItem('age')
document.writeln(`My name is ${name} and my age is ${age}`);
