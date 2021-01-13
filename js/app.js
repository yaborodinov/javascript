"use strict"




let li = document.querySelectorAll("li");
console.log(li)
for (let i = 0; i < li.length; i++){
    let span = document.createElement("span");
    li[i].prepend(span)
    span.append(span.nextSibling)

}


let tree = document.querySelector("#tree");
console.log(tree)

tree.addEventListener("click", (e) => {
    if (e.target.tagName != 'SPAN') {
        return;
    }
    let childrenContainer = e.target.parentNode.querySelector("ul")
    if (!childrenContainer) return;
    childrenContainer.hidden = !childrenContainer.hidden
    // if(e.target.tagName == "SPAN"){
        
    // }
})