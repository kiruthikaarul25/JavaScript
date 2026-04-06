sessionStorage.setItem('name',"sudesh")
sessionStorage.setItem('age',25)

// sessionStorage.clear()
// sessionStorage.removeItem('age')

let name=sessionStorage.getItem('name')
let age=sessionStorage.getItem('age')
document.writeln(`My name is ${name} and my age is ${age}`);
