"use strict"
let name = prompt("Введите свое имя");
alert(`Добрый день, ${name}!`); 


let year = "2020";
let birthday = prompt(name + ", Хотели бы узнать свой возраст? Напишите год своего рождения");
alert(`Сейчас Вы узнаете свой возраст! `);
alert(`${name} , Вам ${year - birthday} лет, не правда ли?`);


let cityfrom = prompt(`${name} В каком городе Вы сейчас находитесь?`);
let cityto = prompt("А куда хотели бы полететь?");
alert(`Авиабилеты из ${cityfrom}  в  ${cityto} сейчас есть в наличии. ${name}, желаете их приобрести?`);
