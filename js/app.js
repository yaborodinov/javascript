"use strict"


let obj = {
    name: "Ivan",
    lastName: "Ivanov",
    skills: {
        js: 5,
        css: 3,
        html: 5,
        
    }
}



for (let a in obj) {
    if (typeof (obj[a]) ===  'object') {
        for (let b in obj[a]) {
            console.log(b+ " : "+obj[a][b])
        }
    } else {
        console.log(a + " : "+ obj[a])
    }
    
}