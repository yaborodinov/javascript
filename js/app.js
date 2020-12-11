"use strict"


function rangeNumbers(a, b) {
    if (a < b) {
        for (let i = a; i < b; i++){
        if (i % 2 != 0) {
            console.log(i)
            }
            
        }
        
    } else {
        console.log("число b должно быть больше")
    }
    
    
}
rangeNumbers(223, 1175)