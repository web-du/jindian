var scw=document.documentElement.clientWidth;
if(scw==0){
    scw=document.body.clientWidth;
}
if(scw==0){
    scw=window.screen.width;
}
document.documentElement.style.fontSize=scw/7.5+'px';