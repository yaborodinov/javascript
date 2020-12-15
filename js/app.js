"use strict"



function is(num) {
    let message;
    if (num % 2 == 0) {
        message =`число ${num} парное`
    } else {
        message = `число ${num} не парное`
    }
    return message
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let a;
    return a=Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

console.log(is(getRandomInt(1,10)))


