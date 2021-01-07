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

let c = document.querySelector("#coordinat");

// function createMessageUnder(elem,html) {
//     let message = document.createElement("div");
//     message.style.cssText = "position:fixed; color:red; z-index:10";
//     let coords = elem.getBoundingClientRect();

//     message.style.left = coords.left + "px";
//     message.style.top = coords.bottom + "px";

//     message.innerHTML = html;
//     return message
// }


// let message = createMessageUnder(c, "hello, world")


// c.addEventListener("click", () => {
//     document.querySelector(".header").append(message)
// })


// setTimeout(() => message.remove(), 5000);

// координаты относительно документа

function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left:box.left+pageXOffset
    }
}


function createMessageUnder(elem, html) {
    let message = document.createElement("div");
    message.style.cssText = "position:absolute; color:red";

    let coords = getCoords(elem);
    message.style.left = coords.left + "px";
    message.style.top = coords.bottom + "px";
    message.textContent = html;
    return message;
}
let message = createMessageUnder(c, "hello, boy");

c.addEventListener("click", () => {
    document.querySelector(".header").append(message)
})


// объект события

let btnEvent = document.querySelector("#btn-event");

btnEvent.addEventListener("click", (event) => {
    console.log(event.type + " на " + event.currentTarget)
    console.log("координаты " + event.clientX + " : " + event.clientY)
})

let textRemove = document.querySelector(".side-bar");
let btnRemoveText = document.querySelector(".btn-text-remove");
function textDel(text) {
    text.style.display = "none";
}

btnRemoveText.addEventListener("click", () => {
    textDel(textRemove)
})

let buttonDelItself = document.querySelectorAll(".btn-text-remove")[1];

buttonDelItself.addEventListener("click", () => {
    textDel(buttonDelItself)
})


// football field

let ball = document.querySelector("#ball");
let field = document.querySelector("#field");

field.style.position="relative"
ball.style.position = "absolute"



getCoords(ball)

field.addEventListener("click", (e) => {
    let fieldCoords = field.getBoundingClientRect()

    let ballCoords = {
        top: e.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
        left:e.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth/2,
    }

    ball.style.left = ballCoords.left + "px"
    ball.style.top = ballCoords.top+"px"

})

