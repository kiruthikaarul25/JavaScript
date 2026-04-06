let movies=["KGF","Bahubali","RRR"];
let a=movies.map((item,index)=>{return item})
console.log(a);

Array.prototype.myMap=function(callback){  //mymap we create own method
    let result=[]
    for(let i=0;i<this.length;i++){
        result.push(callback(this[i],i))
    }
    return result;
}

let b=movies.myMap((item,index)=>{return item})
console.log(b);

let c=[10,20,30]
let d=c.map((item,index)=>item*2)
let e=c.myMap((item,index)=>item*2)
console.log(d);
console.log(e);


