const zoomIn = document.querySelector(".zoomIn")      
const zoomOut = document.querySelector(".zoomOut")        
const para = document.querySelector(".para")
let currentFontSize = 16;
let fontsize  = 0;
const increaseFontSize = ()=>{
    fontsize+=10

     let newFontSize = currentFontSize + fontsize
     para.style.fontSize = `${newFontSize}px`
}
const decreaseFontSize = ()=>{
    fontsize-=10
    let newFontsize = currentFontSize + fontsize
    para.style.fontSize = `${newFontsize}px`
}
zoomIn.addEventListener("click",increaseFontSize)
zoomOut.addEventListener("click",decreaseFontSize)
