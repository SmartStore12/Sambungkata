document.addEventListener("contextmenu",e=>e.preventDefault())

document.onkeydown=function(e){

if(e.keyCode==123) return false

if(e.ctrlKey && e.shiftKey && e.keyCode==73) return false

if(e.ctrlKey && e.shiftKey && e.keyCode==74) return false

if(e.ctrlKey && e.keyCode==85) return false

}

setInterval(function(){

if(window.outerWidth - window.innerWidth > 160){

document.body.innerHTML="Access Denied"

}

},1000)