"use strict"


let downBtn = document.querySelector("#down");
let downBtn2 = document.querySelector("#down2");
let textH2 = document.querySelector("h2");
let textSecond = document.querySelector(".second")
// console.log(textSecond)

function scrollDown(el) {
    el.scrollIntoView(false)
}





downBtn.addEventListener("click", () => {
    scrollDown(textH2)
} )



downBtn2.addEventListener("click", () => {
    scrollDown(textSecond)
})


coordinat.addEventListener("click", () => {
    console.log(coordinat.getBoundingClientRect().top)
})

let x = document.documentElement.clientHeight / 2;
let y = document.documentElement.clientWidth / 2;
console.log(document.documentElement.clientWidth)
console.log(y)



let elem = document.elementFromPoint(11, 11);

elem.style.background="red"
console.log(elem.tagName)





