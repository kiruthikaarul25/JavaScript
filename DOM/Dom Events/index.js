function dark(){
    document.body.style.background="black"
    document.body.style.color="white"
}

function li(){
    document.body.style.background="white"
    document.body.style.color="black" 
}

function kd(){
    document.body.style.background="blue"
}

function ku(){
    document.body.style.background="pink"
}

function blr(){
    let i=document.getElementById('ip1')
    i.value=i.value.toUpperCase()
}

function fo(x){
   x.style.background="yellow"
}

function sub(e){
    e.preventDefault()
    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    console.log(name,email);
    
}