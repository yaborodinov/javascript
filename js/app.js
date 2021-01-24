"use strict"







let ul = document.querySelector("ul");

ul.addEventListener("click", e => {
    if (e.target.tagName != "LI") return;

    if (e.ctrlKey || e.metaKey) {
        toggleSelect(e.target)
    } else {
        singleSelect(e.target)
    }
})

ul.addEventListener("mousedown", e => {
    e.preventDefault()
})

function toggleSelect(element) {
    element.classList.toggle("active")
}


function singleSelect(element) {
    let selected = document.querySelectorAll(".active");
    for (let element of selected) {
        element.classList.remove("active")
    }element.classList.add("active")
}