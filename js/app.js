"use strict"




let container = document.querySelector("#container")

container.addEventListener("click", (e) => {
    if (e.target.className == "remove-btn") {
        e.target.closest(".block").style.display = "none"
    }
})