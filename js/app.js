"use strict"





let requestURL = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        

    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";

        xhr.open(method, url);
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

    xhr.send(); 
    })
   
}

sendRequest("GET", requestURL)
    .then(data => console.log(data))
    .catch(error=>console.log(error))