let re=new XMLHttpRequest();
re.open('GET','https://fakestoreapi.com/products');
re.send();
re.onload=function(){
    console.log(JSON.parse(re.response));  
}