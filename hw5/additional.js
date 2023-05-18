// Всі функції повинні бути описані стрілочним типом!!!!

//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let findMin = (a, b, c) => {
    if (b < a) {
        a = b;
    }
    if (c < a) {
        a = c;
    }
    return a;
}

console.log('Min: ', findMin(7, 5, 6));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let findMax = (a, b, c) => {
    if (b > a) {
        a = b;
    }
    if (c > a) {
        a = c;
    }
    return a;
}

console.log('Max: ', findMax(7, 5, 6));

// - створити функцію яка повертає найбільше число з масиву

let findMaxFromArray = (arr) => {
    let max = arr[0];
    for (const arrElement of arr) {
        if (arrElement > max) {
            max = arrElement;
        }
    }
    return max;
}

console.log('Max from Array: ', findMaxFromArray([1, 11, 22, 3, 44, 5, 6]));

// - створити функцію яка повертає найменьше число з масиву

let findMinFromArray = (arr) => {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log('Min from Array: ', findMinFromArray([1, 11, 22, 3, 44, 5, 6]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13

let sumOfElements = (arr) => {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}
console.log("Sum of array's elements: ", sumOfElements([1, 2, 10]));

// - Дано натуральное число n. Выведите все числа от 1 до n.

let printN = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

printN(3);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае.

let printerAB = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    }
    if (a > b) {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    }
}
console.log('Print from A to B.');
printerAB(5, 9);
console.log('Print from A to B.');
printerAB(9, 5);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let objectsSwapper = (arr, i) => {
    if (i >= arr.length - 1) {
        return arr;
    }
    let swapEl = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = swapEl;
    return arr;
}

console.log(objectsSwapper([9, 8, 0, 4], 0));
console.log(objectsSwapper([9, 8, 0, 4], 1));
console.log(objectsSwapper([9, 8, 0, 4], 2));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let zeroMoverToEnd = (arr) => {
    let res = [];
    let zeroCount = 0;
    for (const arrElement of arr) {
        if(arrElement === 0){
            zeroCount++;
        } else {
            res.push(arrElement);
        }
    }
    for (let i = 0; i < zeroCount; i++) {
        res.push(0);
    }
    return res;
}

console.log(zeroMoverToEnd([1, 0, 6, 0, 3]));
console.log(zeroMoverToEnd([0, 1, 2, 3, 4]));
console.log(zeroMoverToEnd([0, 0, 1, 0]));
let zeroMuv = arr => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[count] = arr[i];
            count++;
        }
    }
    for (let i = count; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}
console.log(zeroMuv([1, 0, 6, 0, 3]));
console.log(zeroMuv([0, 1, 2, 3, 4]));
console.log(zeroMuv([0, 0, 1, 0]));