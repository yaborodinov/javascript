"use strict"



let div = document.createElement("div")
div.className="alert";
div.innerHTML = "<strong>Всем привет!!!</strong> Вы прочитали не менее важное сообщение"

let main = document.querySelector("main");
main.append(div)

let a = document.createElement("h1");
a.className = "alert"
a.textContent="hello niggers"
main.prepend(a)
setTimeout(() => a.remove(), 2000)

main.append(a.cloneNode(true))

// DocumentFragment

function getListContent() {
    let fragment = new DocumentFragment();
    for (let i = 1; i <= 3; i++){
        let li = document.createElement("li");
        li.append(i);
        fragment.append(li)
    }
    return fragment;
}


ul.append(getListContent())

