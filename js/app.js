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
console.log(like)
like.forEach((el) => {
    el.addEventListener("click", () => {
        el.classList.toggle("wish_like")
    })
})
