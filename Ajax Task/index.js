function load(){
    let request=new XMLHttpRequest();
    request.open('GET','./index.txt')
    request.send()
    request.onload=function(){
        let p=document.getElementById('p1').innerHTML=request.responseText
    }
}