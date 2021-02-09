"use strict"




const person = Object.create({
    calculateAge() {
        console.log("Age ", new Date().getFullYear() - this.birthYear )
    }
}, {
    name: {
        value: "Ivan",
        enumerable: true,
        configurable: true,
    },
    birthYear:{
        value: 1990,
        enumerable: true,
        writable:true,
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {
            document.body.style.background = "green"
            console.log("set age", value)
        }
    }
})




for (let key in person) {
    if (
        person.hasOwnProperty(key)
    ) {
        console.log("KEY ", key)
    }
    
}