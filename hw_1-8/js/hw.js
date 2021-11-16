"use strict";

console.log(`Задание 1.1`);

let height = 4;
let width = 5;
let length = 6;
let sParal = 2 * (height * length + height * width + length * width);

console.log(sParal);


console.log(`Задание 1.2`);

let a = 98;
let summ = (a - (a % 10)) / 10 + (a % 10);

console.log(summ);


console.log(`Задание 1.3`);

let b = 7;
let c = 3;
b = c - b;
c = c - b;
b = c + b;

console.log(b, c);


console.log(`Задание 2.1 на if`);

let count = 77;
    if (count <= 100 && count >= 90) console.log("Отлично!");
else if (count <= 89 && count >= 60) console.log("Хорошо.");
else if (count <= 59 && count >= 40) console.log("Удовлетворительно.");
else if (count <= 39 && count >= 0) console.log("Попробуйте еще раз!");




console.log(`Задание 2.2 на switch`);

let num1 = parseInt(prompt("Введите первое число"));
let num2 = parseInt(prompt("Введите второе число"));
let operator = prompt("Укажите один из указанных операторов: +  -  *  /  ");

switch(operator)
{
    case "+": 
        console.log(`Сумма введенных значений: ${num1}+${num2}=`+ (num1+num2)); 
        break;
    case "-": 
        console.log(`Разность введенных значений: ${num1}-${num2}=`+ (num1-num2)); 
        break;
    case "*": 
        console.log(`Произведение введенных значений: ${num1}*${num2}=`+ (num1*num2)); 
        break;
    case "/": 
        console.log(`Результат деления введенных значений: ${num1}/${num2}=`+ (num1/num2)); 
        break;
}



console.log(`Задание 2.3 на while`);

let plates = parseInt(prompt("Количество тарелок"));
let fairy = parseInt(prompt("Количество средства"));

while(plates >= 0)
{
    if (plates > 0 && fairy == 0)
    {
        console.log(`Моющее средство закончилось! Осталось [${plates}] тарелок`);
        break;
    }
    if (plates == 0)
    {
        console.log(`Все тарелки вымыты! Осталось средства - [${fairy}]`);
        break;
    }    
        plates--;
        fairy -= 0.5;
console.log(`Средства: ${fairy}; Тарелок:  ${plates}`);
}




console.log(`Задание 2.4 Программа загадывает число в диапазоне [1;9] (задать через Math.random())`);

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
let randomNumb = getRandom(1,9);
let userNum;
while( userNum != randomNumb )
{
    userNum = parseInt(prompt(`Введите число от 1 до 9. (загадано ${randomNumb})`));
    if( userNum == 0){
        console.log("Выход из программы!");
        break;
    }
    if( userNum == randomNumb) {
        console.log(`Вы угадали! (${randomNumb})`);
        break;
    }
    if( randomNumb < userNum)
    console.log("Загаданное число меньше!");
    else if( randomNumb > userNum)
    console.log("Загаданное число больше!");
}



console.log(`Задание 2.5 Задача на Math.random() и if`);

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
let randomInt = getRandom(10,500);

if(randomInt >= 25 && randomInt <= 200)
    console.log(`Число ${randomInt} содержится в диапазоне чисел (25;200)`);
else
    console.log(`Число ${randomInt} не содержится в диапазоне чисел (25;200)`);




console.log(`Задание 3.1 Увеличить значение каждого элемента массива на 10 и найти среднее арифметическое.`);

let nums = [
    [23, 56, 75, -90, 123],
    [17, 0, -6429, -122],
    [19, 86, 55, -3, 900, 0, 0],
    [4, 9, -2]
 ];
let sum = 0;
let index = 0;
for (let arr of nums) {
     for (let num of arr) {
        num += 10;
        sum += num;
        index += 1;
     }
}
let srArifm = sum / index;
console.log(srArifm);


console.log(`Задание 3.2 Создать массив из целых чисел, заполнить массив семью рандомными значениями`);

let min = 5;
let max = 300;
function getRandom(min,max) {
    return Math.round(Math.random() * (max - min + 1) + min);
}
let randomNum;
let arr = [];
let indMin = 0, indMax = 0;
for (let i = 0; i < 7; i++) {
    randomNum = getRandom(min,max);
    arr.push(randomNum);
    if (randomNum < arr[indMin]) {
        indMin = i;
    }
    if (randomNum > arr[indMax]) {
        indMax = i;
    }
}
console.log(arr);
console.log(`Min значение в масиве - ${arr[indMin]}`);
console.log(`Max значение в массиве - ${arr[indMax]}`);
let mix = arr[indMin];
arr[indMin] = arr[indMax];
arr[indMax] = mix;
console.log(arr);


console.log(`Задание 3.3 Создать массив из целых чисел. Отрицательные элементы массива перенести в новый массив`);

let numsS = [23, 56, 75, -90, 123];
console.log(`Дан массив: [${numsS}]`);
let newArr = [];
for (let i = 0; i < numsS.length; i++) {
    if (numsS[i] < 0) {
        newArr.push(numsS[i]);
        numsS.splice(i, 1);
        i--;
    }
}
console.log(`Массив с отрицательными числами: [${newArr}]`);
console.log(`Последствия обработки исходного массива: [${numsS}]`);


console.log(`Задание 3.4 Написать программу, на совпадение вводимого логина с логином из массива`);

let logins = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];
let userLogin = prompt("Ваш логин");
while (!logins.includes(userLogin)){
    userLogin = prompt("Что-то пошло не так, давай повторим");
}
console.log("Точно в цель!!!");



console.log(`Задание 3.5 Написать программу, на запрос нового логина при совпадении вводимого с массивом`);

let logIns = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];
let userLogIn = prompt("Ваш логин");
while (logIns.includes(userLogin)) {
    userLogin = prompt("Такой логин уже существует. Поридумайте другой!");
}
logIns.push(userLogin);
console.log(`Логин ${userLogin} записан в массив`);
console.log(logIns);



console.log(`Задание 4.1 Напишите функцию, возвращающую слово "товар" в правильной форме`);

function product(count) {
    if (count >= 11 && count <= 14) return `${count} товаров`;
    if (count % 10 >= 2 && count % 10 <= 4) return `${count} товара`;
    if (count % 10 == 1) return `${count} товар`;
    return `${count} товаров`
}
let good = parseInt(prompt("Введите количество товаров."))
console.log(product(good));


console.log(`Задание 4.2 Вызов функции range(1, 10, 2) должен будет вернуть массив [1, 3, 5, 7, 9]`);
function range(a, b, step = 1) {
    let arr = [];
    for (; a < b; a += step) arr.push(a);
    return arr;
}
console.log(range(1, 10, 2));



console.log(`Задание 5.1 Отсортировать массив чисел по возрастанию [3, 90, 5, -100, 50, 0, 560, 1]. 
Использовать метод массивов "sort"`);
let arrSort = [3, 90, 5, -100, 50, 0, 560, 1];
arr.sort((a, b) => a - b);
console.log(arrSort);


console.log(`Задание 5.2 Написать функцию проверки на спам.`);
console.log(`Вырви мозг, не могу понять как решить задачу`);


console.log(`Задание 7.1 Написать функцию, которая принимает на вход объект obj (например, goods), 
число from и число to. Если значение from и to не числа, а obj не объект, функция прерывает 
свою работу и возвращает false. Если данные валидны, функция формирует и возвращает новый ОБЪЕКТ с объектами, 
значения свойств price которых лежат в диапазоне от значения from до значения to, не включая to.`);

let goods = { 
    piano: { 
       title: "Пианино", 
       price: 3000, 
       count: 25 
    }, 
    guitar: { 
       title: "Гитара", 
       price: 1200, 
       count: 40 
    },
    drum: { 
       title: "Барабаны", 
       price: 2700, 
       count: 12 
    }, 
    flute: { 
       title: "Флейта", 
       price: 900, 
       count: 50 }, 
    harp: { 
       title: "Арфа", 
       price: 3400, 
       count: 5 
    } 
 };
 function getObj(obj, from, to) {
    if (typeof obj !== 'object' || isNaN(from) || isNaN(to)) return false;
    let newObj = {};
    for (let elem in obj) {
        if (obj[elem].price >= from && obj[elem].price < to) {
            newObj[elem] = obj[elem];
            }
        }
    return newObj
}
 console.log(getObj(goods, 2500, 3500));


console.log(`Задание 7.2 Написать функцию, которая принимает на вход объект obj (например, goods), 
название (title) и количество (countToCart). Если значение title не строка, obj не объект, а count не число, 
функция прерывает свою работу и возвращает false. Функция должна найти товар с указанным названием (title): 
если количество позволяет, то уменьшить значение свойства count в переданном объекте на countToCart вернуть true,
если не позволяет, то вывести информацию об этом в консоль и вернуть false.`);

function getCount(obj, title, countToCart) {
    if (typeof obj !== 'object' || typeof title !== "string" || typeof countToCart !== "number") return false;
    if (obj[title]['count'] - countToCart < 0) return false;
    obj[title]['count'] -= countToCart;
    return true;
};

console.log(getCount(goods, "flute", 20));


console.log(`Задание 7.3 Написать функцию, которая принимает на вход объект obj (например, books) и автора (author). 
Создает и возвращает новый массив, в который войдут все книги указанного автора, 
если такого автора нет, возвращает пустой массив.`);
 let books = [
    { author: 'Пушкин', title: 'Пир во время чумы'}, 
    { author: 'Толстой', title: 'Война и мир'}, 
    { author: 'Лермонтов', title: 'Тамань'}, 
    { author: 'Гончаров', title: 'Обломов'}, 
    { author: 'Лермонтов', title: 'Герой Нашего Времени'}, 
    { author: 'Пушкин', title: 'Руслан и Людмила'}, 
    { author: 'Лермонтов', title: 'И скучно, и грустно'},
];

function getBook(obj, author) {
   let bookAuthors = [];
   for (let book of obj) {
      if (book.author === author) bookAuthors.push(book.title);
   }
   return bookAuthors;
}
console.log(getBook(books, 'Толстой'));


console.log(`Задание 8.1`);
console.log(`1) Создать Map`);

let userData = new Map();
console.log(userData);

console.log(`2) Добавить в Map несколько пар, где ключ - логин пользователя, 
значение - название города, в котором живет пользователь`);
userData.set(`Андрей`, `Санкт-Петербург`)
    .set(`Сергей`, `Москва`)
    .set(`Владимир`, `Выборг`)
    .set(`Виктор`, `Воронеж`);
console.log(userData);

console.log(`3) Написать функцию, которая принимает на вход Map и название города. 
Функция должна создать и вернуть массив логинов, которые соответствуют переданному городу`);
function getLogins(map, city) {
    let logins = [];
    for (let pair of map) {
        if (pair[1] ===city) logins.push(pair[0]);
    }
    return logins;
}
console.log(getLogins(userData, `Москва`));



console.log(`Задание 8.2 Написать функцию, которая принимает на вход массив слов и возвращает количество одинаковых слов 
из массива в виде Map (ключ - слово, значение - количество повторений слова)`);

let months = ["may", "june", "april", "may", "june"];
function getMap(arr) {
    let newMap = new Map();
    for (let item of arr) {
        if (newMap.has(item)) {
            newMap.set(item, newMap.get(item) + 1);
           } else {
            newMap.set(item, 1);
        }
    }
    return newMap;
}
console.log(getMap(months));


console.log(`Задание 8.3 Написать функцию, которая принимает на вход Map, ageFrom и ageTo. Функция должна создать и вернуть новую Map,
в которую войдут все покупатели, возраст которых находится в диапазоне от from до to (не включая to)`);

let customerMap = new Map();
         customerMap.set(45, {name: "Павел", id: 45, age: 23});
         customerMap.set(87, {name: "Олег", id: 87, age: 45});
         customerMap.set(91, {name: "Максим", id: 91, age: 18});
         customerMap.set(99, {name: "Евгения", id: 99, age: 66});
         customerMap.set(101, {name: "Алексей", id: 101, age: 34});
         customerMap.set(112, {name: "Клара", id: 112, age: 39});

function getSorted(map, from, to) {
    let newMap = new Map();
    for (let pair of map.entries()) {
        if (pair[1].age >= from && pair[1].age < to) newMap.set(pair[0], pair[1]);
    }
    return newMap;
}

console.log(getSorted(customerMap,20,35));

console.log(`Задание 9.1 Вывести в html информацию о животных. В html вместо значений true / false выводить: Есть / Нет`);

let animals = [
    {
       "name": "Люся",
       "age": "1 год",
       "color": "трехцветная",
       "additional_info": {"vaccinations": true, "passport": true}
    },
    {
       "name": "Том",
       "age": "3 месяца",
       "color": "белый",
       "additional_info": {"vaccinations": false, "passport": false}
    },
    {
       "name": "Макс",
       "age": 2,
       "color": "серый",
       "additional_info": {"vaccinations": false, "passport": true}
    },
    {
       "name": "Василий",
       "age": 3,
       "color": "черный",
       "additional_info": {"vaccinations": true, "passport": true}
    }
 ];         






console.log(`Задание 9.2 Написать функцию generateTable, которая принимает на вход массив объектов и создает таблицу. 
Функция не должна быть привязана к конкретным названиям свойств. Заголовки ячеек - названия свойств в верхнем регистре.`);
