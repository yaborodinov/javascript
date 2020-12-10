"use strict"

let obj = {
    name: "Ivan",
    secondName: "Ivanov",
    hi: function () {
        console.log(`hi ${this.name}`)
    },
    skills: {
        css: 3,
        js: 5,
        html:3,
    }
}
obj.hi()


let obj2 = {
    name:"Kirill",
}

obj2.hi = obj.hi;
obj2.hi()

// Вывести ключ\значение объекта
for (let k in obj) {
    console.log(k +" : "+ obj[k])
}
for (let k in obj.skills) {
    console.log(k+" : "+ obj.skills[k])
}


