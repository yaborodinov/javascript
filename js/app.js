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



// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("preparing Data....");
//         const backendData = {
//         server: "aws",
//         port: 2000,
//         status:"working",
//         }
//         resolve(backendData)

//     },2000)
// }).then((data)=> {
//  return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modifaied = true;
//             resolve(data)
//         },2000)
//     })   
    
    
// })
    
//     .then((clientData) => {
    
//     console.log("data received", clientData)
//     clientData.momsName = "Vasilisa";
//     return clientData
// }).then((someData) => {
//     console.log("modified", someData)
// }).catch(err => console.error("errorrr: ", err))
//     .finally(() => {
//     console.log("finally!!!")
// })

const sleep = (ms) => {
    return new Promise((resolve)=> {
    setTimeout(() => {
        resolve()
    }, ms)
    })

}

// sleep(2000).then(() => console.log("after 2 sec"))
// sleep(4000).then(()=>console.log("after 4 sec"))

// метод all()
Promise.all([sleep(2000), sleep(5000)])
    .then(() => {
    console.log("All prises")
    })

    // метод rece()
Promise.race([sleep(2000), sleep(5000)]).then(() => console.log("Race promises"))
    