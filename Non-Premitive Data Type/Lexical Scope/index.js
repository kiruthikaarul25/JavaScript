console.log("Start");
var a=10;
function parent(){
    var b=20;
    console.log(a)
    return function child(){
        console.log(b);
        
    }
}
parent()()
console.log("end")