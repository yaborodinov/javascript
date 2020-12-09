"use strict"


let user = {
    name: "ivan",
    age: 34,
    family: {
        dad: {
            name: "Nickolay",
            age: 50,
        },
        mam: "Elena"
    }
}

let clone = _.cloneDeep(user);

user["family"]["dad"]["age"]++


console.log(clone)
console.log(user)
