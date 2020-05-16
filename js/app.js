let name = prompt("Введите свое имя");
alert(`Добрый день, ${name}!`); 


let year = "2020";
let birthday = prompt(name + ", Хотели бы узанть свой возраст? Напишите год своего рождения");
alert(`Сейчас вы узнаете свой возраст ! `);
alert(`${name} , вам ${year - birthday} лет, не правда ли?`);


let cityfrom = prompt(`${name} В каком городе вы сейчас находитесь?`);
let cityto = prompt("а куда хотели бы полететь?");
alert(`Авиабилеты из ${cityfrom}  в  ${cityto} сейчас есть в наличии. ${name}, желаете их приобрести?`);
