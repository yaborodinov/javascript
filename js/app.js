"use strict"





let requestURL = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url, body = null) {
    
    const headers = {
        "Content-Type":"application/json"
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers,
    }).then(response => {
       return response.json()
   })
   
}

// sendRequest("GET", requestURL)
//     .then(data => console.log(data))
//     .catch(error=>console.log(error))

let body = {
    name: "Andrey",
    age: 33,
}


sendRequest("POST", requestURL, body)
    .then(data => console.log(data))
    .catch(error=>console.log(error))