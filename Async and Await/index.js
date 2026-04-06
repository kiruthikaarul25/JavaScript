//async nu kudutha function automatic promise return pannum.
//fetch → HTTP request send pannum.
//await → pause the function until the Promise resolve aagum.

async function x(){ 
    let data= await fetch('https://fakestoreapi.com/products')
    let finalData=await data.json()
    let body =document.body
    let div=document.createElement('div')
    div.id="container"
    finalData.map((item,index)=>{
        div.innerHTML +=`
        <div class="card">
        <img src="${item.image}"/>
        <p>${item.title}</p>
        <p>${item.price}</p>
        <p>${item.rating.rate}⭐</p>
        <button>Add Cart<button>
        </div>`
    })
    body.appendChild(div)
}
x()