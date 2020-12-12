"use strict"

let arr = [
    "kyiv",
    "Lviv",
    "Oslo",
    "Madrid"
],
    arrOfNumbers = [
        1, -4653, -3, 4, 5,34, 684, 7, 8, 9, 10,
    ];
    

let maxNumber = (accumulator, curentValue) => {
    return accumulator > curentValue ? accumulator : curentValue;
},
    minNumder = (a, b) => {
        return a < b ? a : b
    };

console.log(arrOfNumbers.reduce(maxNumber))
console.log(arrOfNumbers.reduceRight(minNumder))







