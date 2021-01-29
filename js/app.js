"use strict"




console.log("request Data ...")

// setTimeout(() => {
//     console.log("preparing Data...");
//     const backendData = {
//         server: "aws",
//         port: 2000,
//         status:"working",
//     }

//     setTimeout(() => {
//         backendData.modifaied = true;
//         console.log("Data resived", backendData)
//     },2000)    
// }, 2000)



const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("preparing Data....");
        const backendData = {
        server: "aws",
        port: 2000,
        status:"working",
        }
        resolve(backendData)

    },2000)
})


p.then((data)=> {
 return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modifaied = true;
            resolve(data)
        },2000)
    })   
    
    
}).then((clientData) => {
    console.log("data received", clientData)
    clientData.momsName = "Vasilisa";
    return clientData
}).then((someData) => {
    console.log("modified", someData)
})