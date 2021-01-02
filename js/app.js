"use strict"


let downBtn = document.querySelector("#down");
let downBtn2 = document.querySelector("#down2");
let textH2 = document.querySelector("h2");
let textSecond = document.querySelector(".second")
console.log(textSecond)

function scrollDown(el) {
    el.scrollIntoView({block:"start", behavior:"smooth"})
}





downBtn.addEventListener("click", () => {
    scrollDown(textH2)
} )



downBtn2.addEventListener("click", () => {
    scrollDown(textSecond)
})





