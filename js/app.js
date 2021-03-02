"use strict"

function myAlert(a, c, d) {

    let b = `<p class="${c}">${a}</p>`;
    document.querySelector(d).innerHTML = b
}


myAlert("hi", "red", ".test");
myAlert("Goodbay", "orange", ".test2")









let m = new Alert("my message", "orange", ".test");

m.showAlert()

let m2 = new Alert2("my message", "orange", ".test", "check_circle_outline");
m2.showIconAlert()



let m3 = new Alert2("приветствую", "red", ".icon", "alarm_on");
m3.showIconAlert()