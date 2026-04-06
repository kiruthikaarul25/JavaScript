//document.getElementById
let a=document.getElementById('p1')
a.style.background="blue"
a.style.color="whhite"

//document.getElementsByClassName
let b=document.getElementsByClassName('sp1')
for(let i=0;i<b.length;i++){
    b[0].style.background="green"
    b[i].style.background="yellow"
}

//document.getElementsByTagName
let c=document.getElementsByTagName('u')
for(let i=0;i<c.length;i++){
    c[i].style.textDecoration="none"
    c[i].style.background="pink"
}

//document.querySelector
let d=document.querySelector('.sp1')
d.style.fontSize='50px'

//document.querySelectorAll 
let e=document.querySelectorAll('.sp1') 
for(let i=0;i<e.length;i++){
    e[i].style.fontWeight="bold"
}

