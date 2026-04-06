// let job=true;

// let pro=new Promise((resolve,reject)=>{
//     if (job) {
//         resolve("I got a job")
//     } else {
//         reject("No, I didn't ")
//     }
// })
// .then((res)=>console.log(res)) //condition true
// .catch((err)=>console.log(err)) //condition false
// .finally(()=>console.log("This is a result")); // true or false it will execute

let p1=Promise.reject("Hello")
let p2=Promise.resolve("Hii")
let p3=Promise.resolve("Hey")

// Promise.any([p1,p2])
// .then((res)=>console.log(res));
// .catch((err)=>console.log(err));

// Promise.all([p1,p2])
// .then((res)=>console.log(res));
// .catch((err)=>console.log(err));

// const pro1=new Promise((resolve)=>{
//     setTimeout()=>resolve("first"),2000;
// });

// const pro2=new Promise((resolve)=>{
//     setTimeout()=>resolve("second"),1000;
// });

// const pro3=new Promise((resolve,reject)=>{
//     setTimeout()=>reject("third"),3000;
// });

// Promise.race([pro1,pro2])
// .then((result)=>{console.log(result);})

Promise.allSettled([pro1,pro2,pro3])
.then((res)=>console.log(res))
.catch((err)=>console.log(err))


//check later