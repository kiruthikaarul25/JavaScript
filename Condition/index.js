//If conditio  0nly when condition satify
let age=18
if(age>=18){
    console.log("Eligible");
    
}
//If Else either true or false
let Boyage=20;
if(Boyage>=21){
    console.log("Eligible for Marrige");
    
}
else{
    console.log("Not Eligible");
    
}

//Else If to handle the multiple conditions
let Babyage=4;
if (Babyage===5) {
    console.log("Join for LKG");
    
}
else if(Babyage===6){
     console.log("Join for UKG");
     
}
else if(Babyage<=5){
    console.log("let him/her play");
    
}
else{
    console.log("Join 1st standard");
    
}

//Switch case....also same if condition syntax only different
let time=12;
switch(time){
    case 6:
        console.log("Good Moring");
        break; // break is used if condition is satisy then stop
    case 12:
        console.log("Good Afternoon");
        break;
    default:
        console.log("Enter Proper time");
        break;
}