'use strict';


// //  Задание 1.


// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2

// //  Благодаря префиксному инкременту "а" увеличивается на 1. "с" = 1 + 1, "с" = 2.

// d = b++; alert(d);           // 1

// /*  В данном случае к "b" применен постфиксный инкремент. 
//     Т.е. текущее значение "b" = 2,
//     но значение "d" будет равно первоначальному значению "b". */

// c = (2 + ++a); alert(c);      // 5

// /*  В первом примере значение переменной "a" уже было увеличено на 1.
//     В данной примере мы еще раз увеличиваем значение переменной "a" с помощью префиксного инкремента (a = 3).
//     Затем складываем 2 c текущим значением переменной "a". */

// d = (2 + b++); alert(d);      // 4

// /*  Во втором примере значение "b" было увеличено с помощью постфиксного инкремента ("b" = 2).
//     В данном примере происходит аналогичная ситуация: "b" увеличивается (3), но в расчет берется её предыдущее значение (2).
//     Затем складываем 2 с предыдущим значением "b". */

// alert(a);                    // 3

// //  В третьем примере значение "a" было увеличено до значения "3".

// alert(b);                    // 3

// //  В четвертом примере значение "b" также было увеличено до значения "3".




// //  Задание 2.


// var a = 2;
// var x = 1 + (a *= 2);

// /*  Шаг 1. Значение "a2" умножается на 2 и записывается в переменную "а2". Т.е. "a" = 4.
//     Шаг 2. "x2" = 1 + 4. "x2" = 5. */




//  Задание 3.

// let a, b, result;

// a = +prompt('Введите целое значение переменной "a" ');
// b = +prompt('Введите целое значение переменной "b" ');

// console.log("a = " + a);
// console.log("b = " + b);

// if (a >= 0 && b >= 0) {
//     result = a - b;
//     console.log('Оба числа положительные. Производится вычитание.');
// } else if (a < 0 && b < 0) {
//     result = a * b;
//     console.log('Оба числа отрицательные. Производится умножение.');
// } else {
//     result = a + b;
//     console.log('Одно из чисел положительное, второе - отрицательное. Производится сложение.');
// }

// console.log('Результат выражения: ' + result);




// Задание 4.

// let a = +prompt('Введите целое значение от 0 до 15 включительно');

// function recursion(x) {
//     if (x === a) return a;
//     return recursion(x - 1) + ' ' + x;
// }

// switch (a) {
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//     case 11:
//     case 12:
//     case 13:
//     case 14:
//     case 15: console.log(recursion(15)); break;
//     default: console.log('Число не соответствует условию');
// }




// Задание 5.

let a = +prompt('Введите значение переменной "a"');
let b = +prompt('Введите значение переменной "b"');

console.log(a);
console.log(b);

function sum(a, b) {
    return a + b;
}

// console.log('Сумма: ' + sum(a, b));


function substr(a, b) {
    return a - b;
}

// console.log('Разность: ' + substr(a, b));

function mult(a, b) {
    return a * b;
}

// console.log('Умножение: ' + mult(a, b));

function divs(a, b) {
    return a / b;
}

// console.log('Деление: ' + divs(a, b));




// Задание 6.

let operation = prompt('Введите название операции: "сумма", "разность", "умножение" или "деление"');

console.log(operation);

function mathOperation(a, b, operation) {

    // switch (operation) {
    //     case 'сумма': return console.log(sum(a, b)); break;
    //     case 'разность': console.log(substr(a, b)); break;
    //     case 'умножение': console.log(mult(a, b)); break;
    //     case 'деление': console.log(divs(a, b)); break;
    //     default: console.log('Операции не существует');
    // }
    switch (operation) {
        case 'сумма': return (sum(a, b)); break;
        case 'разность': return (substr(a, b)); break;
        case 'умножение': return (mult(a, b)); break;
        case 'деление': return (divs(a, b)); break;
        default: return ('Операции не существует');
    }
}

console.log(mathOperation(a, b, operation));


