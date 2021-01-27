"use strict"





let requestURL = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        

    const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        


        xhr.open(method, url);
        xhr.setRequestHeader("Content-Type", "application/json")

        
    xhr.addEventListener("load", () => {
        if (xhr.status >= 400) {
            resolve(xhr.response)
        } else {
            reject(xhr.response)
        }
    })
        xhr.onerror = () => {
            reject(xhr.response)
        }

    xhr.send(JSON.stringify(body)); 
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