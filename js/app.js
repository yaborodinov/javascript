"use strict"



function readNumber() {
    let a;
    do {
        a = prompt("введите число", "");
    } while (isNaN(a)===true||a===null||a === undefined|| a === "")
    console.log(a)
    
}
readNumber()