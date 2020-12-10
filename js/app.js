"use strict"


let obj = {};

let num = +prompt("какое килличество категорий трат у вас за последний месяц,", "");
for (let i = 1; i <= num; i++){
    let y = prompt ("название траты","")
    obj[y]=+prompt("введите сумму траты","")

}

function calcSum(a) {
    let b = 0;
    for (let key in a) {
       b = b+ a[key]
    }
    return  b;
}


let resultObj = calcSum(obj);

console.log(resultObj)
console.log(obj)





