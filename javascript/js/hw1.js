console.log("Задание 1");
let a =  4;
let b = 5;
let c = 8;
console.log('Площадь параллелипипеда', a * b * c);
ex1 = (a >= parseInt(c)) ? "ширина больше или равна" : "высота больше";
console.log(ex1);

console.log("Задание 2");

let sotka = 1000;
let gryadka = 15 * 25;

console.log ('Не занято', sotka % gryadka);

console.log("Задание 3");

let oval = 15 * 100;
let kolbco = 600;

console.log('Площадь кольца = ', oval - kolbco);

console.log("Задание 4");
let X = 7;
let Y = 3;

X > Y ? (N = X, X = Y, Y = N) : (X = X, Y = Y);
console.log('X = ',X,'Y = ',Y);
