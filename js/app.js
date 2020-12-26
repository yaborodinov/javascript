"use strict"




let input = document.querySelector("#products-count");

let buttons = document.querySelectorAll(".add_to_cart");

for (let i = 0; i < buttons.length; i++){
    
    buttons[i].addEventListener("click", () => {
        let prevInput = +input.innerHTML;
         input.innerHTML = `${prevInput+1}`
        
    })
}
