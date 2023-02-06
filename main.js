// 1 ukol 

let Jmeno = prompt("Jake je vase jmeno");
let Primeni = prompt("Jake je vase primeni?");
let rok = Number(prompt("V jakém roce jste se narodili?"));

let vek = 2023 - rok;

let vysledek = document.querySelector('p');
// vysledek.innerHTML = Jmeno + " "+ Primeni + " "+ vek + " "+ barva;
vysledek.innerHTML =  Jmeno + " "+ Primeni + " "+ vek;

//2 ukol

let vysledek2 = document.querySelector('.vystupProgramuBarva');
let Barva = prompt("Jake je vase oblíbena barva (anglicky)");
vysledek2.style.backgroundColor = Barva;
vysledek2.innerHTML = Barva;






