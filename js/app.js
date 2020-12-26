"use strict"




// let input = document.querySelector(".input");
// let inputValue = input.getAttribute("value")
// let button = document.querySelector("button");

    
// button.addEventListener("click", function () {
//     input.setAttribute("value", Number(input.getAttribute("value"))+1 )
// })

// // picture toggle
// let a = document.querySelector(".picture1");
// a.addEventListener("click",  ()=>a.classList.toggle("picture2"))




let a = document.querySelector("img");


function changeImg() {
    let imgSrc = a.getAttribute("src");
    if (imgSrc === "images/skype.png") {
        a.setAttribute("src", "images/telegram.png")
    } else {
        a.setAttribute("src","images/skype.png")
    }
}




a.addEventListener("click", changeImg)