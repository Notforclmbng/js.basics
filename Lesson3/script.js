'use strict';
// let i = 0;
//
// while (i < 3) {
//     console.log(i);
//     i++;
// }

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 3);

// for (let i = 0; i < 3; i++) {
// for (let i = 0, b = 5; i < 3 && b > 0; i++, b--) {
//     console.log(i);
// }

// while (true) {
//     // some code
// }

// do {
//     // some code
// } while (true);

// for (;;) {
//
// }

// for (let i = 0;; i++) {
//     if (i > 10) break; // Выход из цикла
//     if (i % 2 === 1) continue; // завершение итерации
//     console.log(i);
// }

// outerLoop: for (let a = 0; a < 3; a++) {
//         console.log('Upper cycle is running');
//         for (let b = 0; b < 3; b++) {
//             console.log('Inner cycle is running');
//             if (b >= 1) {
//                 console.log('Breaking inner cycle');
//                 break outerLoop;
//             }
//         }
//     }

// let arr = new Array(5, 4, 7);
// let arr = [5, 4, 7];
// arr[7] = 10;
// arr.length = 100;
// arr[arr.length] = 101;
// delete arr[7];
// console.log(arr.length);
// console.log(arr);

// let arr = [
//     [1, 5, 'hi', false],          // 0
//     [55, true, 1, 100],           // 1
//     [true, 'string', NaN, 32],    // 2
// ];

// console.log(arr[2][1]);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (const index in arr) {
//     console.log(arr[index]);
// }

// for (const value of arr) {
//     console.log(value);
// }

// let arr = [true, 'string', NaN, 32];
// arr.forEach(function (item, index, array) {
//     console.log(item, index, array);
// });

// find(), some(), indexOf(), reduce(), map(), filter(), includes();

// let arr = [true, 'string', NaN, 32];

// console.log(arr.push('end'), arr);
// console.log(arr.unshift('begin'), arr);
//
// console.log(arr.pop(), arr);
// console.log(arr.shift(), arr);

// console.log(arr.splice(1, 11), arr);
// console.log(arr.splice(1, 1, 'qwerty'), arr);
// console.log(arr.splice(1, 0, 'qwerty'), arr);
// let arr = [true, 'string', NaN, 32];

// function find(value, arr) {
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         if (arr[i] === value) return true;
//     }
//     return false;
// }
//
// console.log(find('fwfffw', arr))

// const cart = [[], [], ..., []]; ['title', 100, 3]
// for(;;) {}
