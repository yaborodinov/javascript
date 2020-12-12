"use strict"

let arr = [
    "kyiv",
    "Lviv",
    "Oslo",
    "Madrid"
],
    arrOfNumbers = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ];
    

let maxNumber = arrOfNumbers[0];
let minNumber = maxNumber;
for (let i = 0; i < arrOfNumbers.length; i++){
    if (arrOfNumbers[i] > maxNumber) {
        maxNumber=arrOfNumbers[i]
    }
    if (arrOfNumbers[i] < minNumber) {
        minNumber = arrOfNumbers
    }
}

console.log(minNumber)
console.log(maxNumber)








