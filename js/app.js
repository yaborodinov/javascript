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



// ООП программирование с помощбю функции -конструктора ==============================


// quantity
let decrementBtn = document.querySelectorAll(".decrement_btn");
let incrementBTn = document.querySelectorAll(".increment_btn");
let inputs = document.querySelectorAll(".quantity input")
// let minCount = 1;
// let MaxCount = 13;

function Counter(decrementBtn, incrementBTn, inputs, minCount, MaxCount  ) {
    this.obj = {
        decrementBtn,
        incrementBTn,
        inputs,
        minCount,
        MaxCount
    }


    this.toggleButtonState = function () {
        let count = this.obj.inputs.value;
        this.obj.decrementBtn.disabled = count <= this.obj.minCount
        this.obj.incrementBTn.disabled = count >= this.obj.MaxCount
    }

    this.toggleButtonState()


    this.incrementBtn = function() {
        let currentCount = +this.obj.inputs.value;
        let nextCount = currentCount + 1;
        this.obj.inputs.value = nextCount;
        this.toggleButtonState(nextCount)

    }
    
    this.decrementBtn = function () {
        let currentCount = +this.obj.inputs.value;
        let nextCount = currentCount - 1;
        this.obj.inputs.value = nextCount
        this.toggleButtonState(nextCount)
    }
        

    
    this.obj.incrementBTn.addEventListener("click", this.incrementBtn.bind(this))
    this.obj.decrementBtn.addEventListener("click", this.decrementBtn.bind(this) )
    
    
    
    
    
    // 2 вариант

    // this.increment = function () {


    //     this.obj.incrementBTn.addEventListener("click", () => {
    //         this.obj.inputs.setAttribute("value", +this.obj.inputs.getAttribute("value") + 1);
    //         if (+this.obj.inputs.getAttribute("value") >= 10) {
    //             this.obj.inputs.style.width = "35px"
    //             }
    //         if (+this.obj.inputs.getAttribute("value") >= minCount) {
    //             this.obj.decrementBtn.removeAttribute("disabled")
    //             }
    //         +this.obj.inputs.getAttribute("value") >= MaxCount ? this.obj.incrementBTn.setAttribute("disabled", "true") : ""

    //         }

    //         )
    // }
    // this.increment()


    // this.decrementBtn = function () {
    //     this.obj.decrementBtn.addEventListener("click", () => {
    //         this.obj.inputs.setAttribute("value", +this.obj.inputs.getAttribute("value") - 1)
    //         if (+this.obj.inputs.getAttribute("value") < 10) {
    //             this.obj.inputs.style.width = "25px"
    //         }
    //         if (+this.obj.inputs.getAttribute("value") <= minCount) {
    //             this.obj.decrementBtn.setAttribute("disabled", "true")
    //         }
    //         +this.obj.inputs.getAttribute("value") < MaxCount ? this.obj.incrementBTn.removeAttribute("disabled") : ""
    //     })
    // }
    // this.decrementBtn()

}
let a = new Counter(decrementBtn[0], incrementBTn[0], inputs[0], 1, 4)
let b = new Counter(decrementBtn[1], incrementBTn[1], inputs[1], 1, 3)
let c = new Counter(decrementBtn[2], incrementBTn[2], inputs[2], 1, 12)

// функциональное програмирование =========================================================================================================

// for (let i = 0; i < inputs.length; i++) {
//     incrementBTn[i].addEventListener("click", () => {
//         inputs[i].setAttribute("value", +inputs[i].getAttribute("value") + 1);
//         if (+inputs[i].getAttribute("value") >= 10) {
//             inputs[i].style.width = "35px"
//         }
//         if (+inputs[i].getAttribute("value") >= minCount) {
//             decrementBtn[i].removeAttribute("disabled")
//         }
//         +inputs[i].getAttribute("value") >= MaxCount ? incrementBTn[i].setAttribute("disabled", "true") : ""



//     })

// }

// for (let i = 0; i < inputs.length; i++) {
//     decrementBtn[i].addEventListener("click", () => {
//         inputs[i].setAttribute("value", +inputs[i].getAttribute("value") - 1)
//         if (+inputs[i].getAttribute("value") < 10) {
//             inputs[i].style.width = "25px"
//         }
//         if (+inputs[i].getAttribute("value") <= minCount) {
//             decrementBtn[i].setAttribute("disabled", "true")
//         }
//         +inputs[i].getAttribute("value") < MaxCount ? incrementBTn[i].removeAttribute("disabled") : ""

//     })
// }




