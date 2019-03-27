//однострочный комментарий//

/*
*многострочный
*комментарий
*/

//Вывод информации в консоль(для отладки)
console.log("Выводимая информация") ;

//обьявленные переменные (область памяти которому дается имя)
var login;
let pwd;
//константы
const CONST_VALUE = 123;

//присвоение переменным значения
login - "qwe";
pwd - "1234";

//присвоение другого значения переменным
login = "asd";
pwd = "56ad56";

console.log(login, pwd) ;

// let height, width;

let height = 123;
let width = 346;

// в переменных можно хранить числа, тип number
height = 234;
width = 789;

// строки - тип string
let str = "Строка";
let str2 = 'Строка';
str = '"Строка"';
console.log(str);
str = '\'Строка\'';
console.log(str);


//логический - тип boolean
let active = true;
let stopped = false;

console.log (active, stopped);


//null - значение не известно
let unknownValue = null;
console.log(unknownValue);
//undefined - значение не присвоено
let undefinedVal;
console.log(undefinedVal);
//определить тип данных
console.log(typeof active);

let age = '13 лет';
height = '300.67px';
// преобразование строки в целое число
age = parseInt(age);
//преобразование дробного числа
height = parseFloat(height);
console.log(age);
console.log(typeof age);
console.log(height);
console.log(typeof height);

//арифметические операторы + - * . %(взятие остатка от деления)
height = 45;
height = height * 2;
console.log (height);

console.log (3 + 5); // 8
console.log ('3' + 5); // 35 склейка
console.log (+'3' + 5); // 35 число
console.log ("строка " + "еще строка"); // строка еще строка

console.log (34 / '2'); // 17
console.log (34 * '2'); // 68
console.log (34 - '2'); // 32

console.log (34 / "str");

console.log (isNaN ("str")); // true
console.log (isNaN ("23")); // false
console.log (isNaN ("23er"));// true
console.log (isNaN (45)); // false
console.log (isNaN (false)); // false
console.log (isNaN (false)); //false


console.log (34 / 0); // infinity
console.log (-34 / 0); // infinity

//взятие остатка
console.log (9 % 2);// 1
console.log (8 % 2); // 0
console.log (348 % 10); // 8
//64-bit
console.log (Number.MAX_VALUE);
console.log (Number.MIN_VALUE);
console.log (Number.MAX_SAFE_INTEGER);
console.log (Number.MIN_SAFE_INTEGER);

//операторы присваивания
// = += -= *= /= %=
let a = 12;
a = a + 10;//одно
a += 10;// и тоже
console.log(a);
a = a * 10; // a *= 10;
console.log(a);
a = a / 10; // a /= 10;
console.log(a);
a = a - 10; // a -= 10;
console.log(a);
a = a % 10; // a %= 10;
console.log(a);

//Операторы сравнения
// > < >= <= ==(равенство) !=(неравенство) ===(строгое равно) !==(строго неравно) использовать предпочтительнее

height = 123;
width = '123';
let num = 500;
login = "asd";
login2 = "fre";
console.log(height > width); // false
console.log(height >= width); // true

console.log(login > login2); // false

console.log(height == width); // true
console.log(height === width); // false т.к. разные типы


// инкримент и декримент
// инкримент (увеличивает значение на 1) ++
// декримент (уменьшает значение на 1) --
// префиксная форма ++i
num = 2;
console.log(++num);
console.log(num);
// постфиксная форма
num = 2;
console.log(num++);
console.log(num);

num = 7;

let res = num++ - num++ + num++ - --num;
console.log(res);

// тернарный оператор
height = 23;
width = '65px';

// (условие) ? значение1 : значение2;
// 1. проверка условия, если условтие true, оператор вернет значение 1, если условие false - значение2
// (условие) ? значение1 : (условие) ? значение1 : значение2;
res = (height >= parseInt(width)) ? "высота больше или равна" : "ширина больше"

console.log(res);


let data = prompt ("Введите данные");
console.log(data);
