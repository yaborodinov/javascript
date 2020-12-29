"use strict"




let input = document.querySelector("#products-count");

let buttons = document.querySelectorAll(".add_to_cart");

for (let i = 0; i < buttons.length; i++){
    
    buttons[i].addEventListener("click", () => {
        input.innerHTML = `${+input.innerHTML+1}`
        
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
console.log(closeButton)

moreDetailsButtons.forEach((el) =>{
    el.addEventListener("click", () => {
        modal.classList.remove("hide")
        modal.classList.add("show")

    })
})

function closeModal() {
    modal.classList.toggle("show")
}

closeButton.addEventListener("click", closeModal)


modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal()
    }
})


