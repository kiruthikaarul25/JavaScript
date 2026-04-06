//Ananomous
// function(){
//     console.log("I am Ananomous")
// }
// ()

//Named Function
function apple(){
    console.log("I am named function")
}
apple()

//Function with Experssion
const ball=function(){
    console.log("I am function with experssion")
}

ball();

//Immediate invoke Function
(function(){
    console.log("I am immediate invoke function")
}
()
)

//Arrow Function
const arrow=()=>{           // ()=> instead of function
    console.log("I am arrow function")
}
arrow()

//Currying Function
function sum(a){
    return a
}
console.log(sum(10));

// function sum(a){
//     return function sum(b){
//         return a+b
//     }
// }
// console.log(sum(10)(20))

// function sum(a){
//     return function (b){
//         return function(c){
//             return function(d){
//                 return a+b+c+d
//             }
//         }
//     }
// }
// console.log(sum(10)(10)(10)(10));