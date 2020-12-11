"use strict"





function howMany(selectObj) {
    let numberSelected = 0;
    for (let i = 0; i < selectObj.options.length; i++){
        if (selectObj.options[i].selected) {
            numberSelected++;
        }
        
    }
    return numberSelected;
}

let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    console.log("выбрано элементов : " + howMany(document.selectForm.musicTypes))
})

