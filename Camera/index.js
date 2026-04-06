function cam(){
    let video=document.querySelector('video')
    let cond={video:true,audio:true}
    window.navigator.mediaDevices.getUserMedia(cond) //getUserMedia to use video and audio
    .then((res)=>video.srcObject=res)
    .catch((err)=>console.log(err));
}

function ss(){
    let video=document.querySelector('video')
    let cond={video:true,audio:true}
    window.navigator.mediaDevices.getDisplayMedia(cond) //getDisplayMedia to use share the screen
    .then((res)=>video.srcObject=res)
    .catch((err)=>console.log(err));
}


