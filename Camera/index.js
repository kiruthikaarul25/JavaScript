function cam(){
    let video=document.querySelector('video')
    let cond={video:true,audio:true}
    window.navigator.mediaDevices.getUserMedia(cond) 
    .then((res)=>video.srcObject=res)
    .catch((err)=>console.log(err));
}

function ss(){
    let video=document.querySelector('video')
    let cond={video:true,audio:true}
    window.navigator.mediaDevices.getDisplayMedia(cond) 
    .then((res)=>video.srcObject=res)
    .catch((err)=>console.log(err));
}


