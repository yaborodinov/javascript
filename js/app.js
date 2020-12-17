"use strict"


let salaries = {
    "john": 100,
    "pete": 300,
    "mary":250,
}


function topSalary(salaries) {
    let max = 0;
    let maxName = null;
    let arr = Object.entries(salaries)

    for (let [name, salary] of arr) {
        if (max < salary) {
            max = salary
            maxName = name;
        }
    }
    return maxName
}


console.log(topSalary(salaries))