"use strict"



let form = document.forms.searcher;
console.log(form);

form.method = "GET";
form.action = "https://google.com/search";
