"use strict"

let arr = [
    "kyiv",
    "Lviv",
    "Oslo",
    "Madrid"
],
    arrOfNumbers = [
        1, 4653, -3, 4, 5,34, 6, 7, 8, 9, 10,
    ];
    

let min = arrOfNumbers[0];
let max = min;
for (let i = 1; i < arrOfNumbers.length; ++i) {
    if (arrOfNumbers[i] > max) max = arrOfNumbers[i];
    if (arrOfNumbers[i] < min) min = arrOfNumbers[i];
}

console.log(min)
console.log(max)








