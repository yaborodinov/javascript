"use strict"

// scroll =====================================================
let downBtn = document.querySelector("#down");
let downBtn2 = document.querySelector("#down2");
let textH2 = document.querySelector("h2");
let textSecond = document.querySelector(".second")
// console.log(textSecond)

function scrollDown(el) {
    el.scrollIntoView({ display: "start", behavior:"smooth"})
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


// применение для fixed позиционирования

let c = document.querySelector("#header-message");

function createMessageUnder(elem,html) {
    let message = document.createElement("div");
    message.style.cssText = "position:fixed; color:red; z-index:10";
    let coords = elem.getBoundingClientRect();

    message.style.left = coords.left + "px";
    message.style.top = coords.bottom + "px";

    message.innerHTML = html;
    return message
}


let message = createMessageUnder(c, "hello, world")


c.addEventListener("click", () => {
    document.querySelector(".header").append(message)
})



setTimeout(() => message.remove(), 5000);

