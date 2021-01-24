"use strict"

let thumbs = document.querySelector("#thumbs");

thumbs.addEventListener("click", (e) => {
    let thumbnail = e.target.closest("a");

    if (!thumbnail) return;

    showThumbnail(thumbnail.href, thumbnail.title)
    e.preventDefault();
})

function showThumbnail(href, title) {
    largeImg.src = href;
    largeImg.alt = title;
}