// 'use strict';
// let goodsCount = 10;

// if (goodsCount > 0) {
//     console.log('Количество товара ', goodsCount);
// } else {
//     console.log('Корзина пуста');
// }
// if (goodsCount > 0) console.log('Количество товара ', goodsCount);
// else console.log('Корзина пуста');

// goodsCount > 0
//     ? console.log('Количество товара ', goodsCount)
//     : console.log('Корзина пуста');

// const cartInfo = goodsCount > 0
//     ? 'Количество товара ' + goodsCount
//     : 'Корзина пуста';
//
// console.log(cartInfo);

// const good = 'Яблоки';

// if (good === 'Бананы') {
//     console.log('Стоимость бананов 50р.');
// } else {
//     if (good === 'Манго') {
//         console.log('Стоимость манго 80р.');
//     } else {
//         if (good === 'Яблоки' || good === 'Груши') {
//             console.log('Стоимость яблок и груш 40р.');
//         } else {
//             console.log('Неизвестный фрукт');
//         }
//     }
// }

// if (good === 'Бананы') {
//     console.log('Стоимость бананов 50р.');
// } else if (good === 'Манго') {
//     console.log('Стоимость манго 80р.');
// } else if (good === 'Яблоки' || good === 'Груши') {
//     console.log('Стоимость яблок и груш 40р.');
// } else {
//     console.log('Неизвестный фрукт');
// }
// const good = 'Яблоки';
//
// switch (good) {
//     case 'Бананы': console.log('Стоимость бананов 50р.'); break;
//     case 'Манго': console.log('Стоимость манго 80р.'); break;
//     case 'Яблоки': console.log('Стоимость яблок и груш 40р.'); break;
//     case 'Груши': console.log('Стоимость яблок и груш 40р.'); break;
//     default: console.log('Неизвестный фрукт');
// }
// const good = 'Яблоки';

// function sayPrice(good) {
//     switch (good) {
//         case 'Бананы': console.log('Стоимость бананов 50р.'); break;
//         case 'Манго': console.log('Стоимость манго 80р.'); break;
//         case 'Яблоки':
//         case 'Груши': console.log('Стоимость яблок и груш 40р.'); break;
//         default: console.log('Неизвестный фрукт');
//     }
// }

// sayPrice();
// sayPrice('Бананы');
// sayPrice(good);

// function getPrice(good) {
//     switch (good) {
//         case 'Бананы': return 50;
//         case 'Манго': return 80;
//         case 'Яблоки':
//         case 'Груши': return 40;
//         default: return null;
//     }
// }

// console.log(getPrice('Манго') + getPrice(good));

// if (getPrice('Манго') != null) console.log('=)');
// else console.log('=(')
// const good = 'Яблоки';
// function getPriceByCount(good, count = 1) {
//     const price = getPrice(good);
//
//     if (price == null) return null;
//
//     return price * count;
// }

// console.log(getPriceByCount(good, 10));
// console.log(getPriceByCount('Манго', 5));
// console.log(getPriceByCount('fsffw', 5));
// console.log(getPriceByCount('Манго'));

// const basket = [{}] // n elems
// function calcBasket(goods) {
//     let result = 0;
//     for (let i = 0; i < goods.length; i++) {
//         // result += basket[i].price * basket[i].count;
//         result += getPriceByCount(basket[i].title, basket[i].count);
//     }
//     return result;
// }
//
// console.log(calcBasket(basket));
// function myFunc() {
//
// }
// myFunc();
// // function myFunc() {
// //
// // }
// myFunc();
// foo();
// const foo = function () {
//     console.log(1243)
// }

// foo();

// function foo() {
//     console.log(arguments[1]);
// }
//
// foo(1, 6, 9);

// function recursion(x) {
//     if (x <= 0 || !Number.isInteger(x)) return 'Задайте целое число больше 0';
//     if (x === 1) return '1';
//     return recursion(x - 1) + ' ' + x;
// }
//
// console.log(recursion(10));

// let number;
// let attempts;

// function resetGame() {
//     attempts = 0;
//     number = Math.floor(Math.random() * 100);
//     console.log(number);
// }

// function tryGuessNumber() {
//     const useAnswer = parseInt(prompt('Введите число от 0 до 100, для выхода наберите -1'));

//     if (useAnswer === -1) return alert('Game Over!');

//     if (isNaN(useAnswer)) {
//         alert('Необходимо ввести целое число от 0 до 100.');
//         tryGuessNumber();
//         return;
//     }

//     attempts++;

//     if (useAnswer > number) {
//         alert('Попробуйте число меньше.');
//     } else if (useAnswer < number) {
//         alert('Попробуйте число больше.');
//     } else {
//         alert('Поздравляем! Вы угадали число! Количество попыток: ' + attempts);

//         if (!confirm('Хотите сыграть еще?')) return alert('Game Over!');

//         resetGame();
//     }

//     tryGuessNumber();
// }

// resetGame();
// tryGuessNumber();
