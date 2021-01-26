"use strict"


let form = document.createElement("form");
form.action = "https://google.com/search";
form.method = "GET"

form.innerHTML = `<input name="q" value="test">`;
document.body.append(form)


let btn = document.querySelector("button")

btn.addEventListener("click", () => {
    form.submit()
})
