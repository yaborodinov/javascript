"use strict"





let requestURL = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url) {
    return fetch(url).then(response => {
       return response.json()
   })
   
}

sendRequest("GET", requestURL)
    .then(data => console.log(data))
    .catch(error=>console.log(error))

let body = {
    name: "Andrey",
    age: 33,
}


// sendRequest("POST", requestURL, body)
//     .then(data => console.log(data))
//     .catch(error=>console.log(error))