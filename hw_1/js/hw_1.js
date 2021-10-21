"use strict";

// Задание 1

let height = 4;
let width = 5;
let length = 6;
let sParal = 2 * (height * length + height * width + length * width);

console.log(sParal);

// Задание 2

let a = 98;
let summ = (a - (a % 10)) / 10 + (a % 10);

console.log(summ);

// Задание 3

let b = 7;
let c = 3;

b = c - b;
c = c - b;
b = c + b;

console.log(b, c);
