"use strict"




let input = document.querySelector("#products-count");

let buttons = document.querySelectorAll(".add_to_cart");

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", () => {
        input.innerHTML = `${+input.innerHTML + 1}`

    })
}


// likes


let like = document.querySelectorAll(".wish");
like.forEach((el) => {
    el.addEventListener("click", () => {
        el.classList.toggle("wish_like")
    })
})




// modal window

let moreDetailsButtons = document.querySelectorAll(".more_details");
let closeButton = document.querySelector(".btn-close");
let modal = document.querySelector(".main_modal");

moreDetailsButtons.forEach((el) => {
    el.addEventListener("click", openModal)
})


function openModal() {
    modal.classList.remove("hide")
    modal.classList.add("show")
}
function closeModal() {
    modal.classList.add("hide")
    modal.classList.remove("show")
}

closeButton.addEventListener("click", closeModal)


modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal()
    }
})


// show modal by scroll
// console.log(window.pageYOffset)
// console.log(document.documentElement.scrollHeight)

function openModalByScroll() {
    if (window.pageYOffset >= document.documentElement.scrollHeight / 2) {
        openModal()
        // window.removeEventListener("scroll", openModalByScroll )
    }
}

window.addEventListener("scroll", openModalByScroll, { once: true })

// slider

$(document).ready(function () {
    $('.slider-block').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 6000,

    });
});


// quantity
let decrementBtn = document.querySelectorAll(".decrement_btn");
let incrementBTn = document.querySelectorAll(".increment_btn");
let inputs = document.querySelectorAll(".quantity input")

let minCount = 1;
let MaxCount = 13;




for (let i = 0; i < inputs.length; i++) {
    incrementBTn[i].addEventListener("click", () => {
        inputs[i].setAttribute("value", +inputs[i].getAttribute("value") + 1);
        if (+inputs[i].getAttribute("value") >= 10) {
            inputs[i].style.width = "35px"
        }
        if (+inputs[i].getAttribute("value") >= minCount) {
            decrementBtn[i].removeAttribute("disabled")
        }
        +inputs[i].getAttribute("value") >= MaxCount ? incrementBTn[i].setAttribute("disabled", "true") : ""



    })

}

for (let i = 0; i < inputs.length; i++) {
    decrementBtn[i].addEventListener("click", () => {
        inputs[i].setAttribute("value", +inputs[i].getAttribute("value") - 1)
        if (+inputs[i].getAttribute("value") < 10) {
            inputs[i].style.width = "25px"
        }
        if (+inputs[i].getAttribute("value") <= minCount) {
            decrementBtn[i].setAttribute("disabled", "true")
        }
        +inputs[i].getAttribute("value") < MaxCount ? incrementBTn[i].removeAttribute("disabled") : ""

    })
}





