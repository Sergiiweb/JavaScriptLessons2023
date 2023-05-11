// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    return min;
}

console.log(findMin(7, 5, 6));

// - створити функцію яка приймає три числа та виводить найбільше.(Без Math.max!)

function findMax(a, b, c) {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}

console.log(findMax(7, 5, 6));

// - створити функцію яка повертає найбільше число з масиву

function findMaxFromArray(arr) {
    let max = arr[0];
    for (const arrElement of arr) {
        if (arrElement > max) {
            max = arrElement;
        }
    }
    return max;
}

console.log(findMaxFromArray([1, 11, 22, 3, 44, 5, 6]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function mean(array) {
    let sum = 0;
    for (const arrayElement of array) {
        sum += arrayElement;
    }
    return sum / array.length;
}

console.log(mean([1, 11, 22, 3, 44, 5, 6]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

function minMax(...arg) {
    let min = arg[0];
    let max = arg[0];
    for (const argElement of arg) {
        if (argElement < min) {
            min = argElement;
        }
        if (argElement > max) {
            max = argElement;
        }
    }
    console.log(max);
    return min;
}

minMax(1, 11, 22, 3, 44, 5, 6);
console.log(minMax(1, 11, 22, 3, 44, 5, 6));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function random() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    return arr;
}

console.log(random());

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.

function randomLim(limit) {
    const arr = [];
    for (let i = 0; i < limit; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    return arr;
}

console.log(randomLim(15));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function reverseArray(arr) {
    const reverseArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    return reverseArr;
}

console.log(reverseArray([1, 2, 3]));

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
// якщо два аргументи - складає або конкатенує їх між собою.

function oneOrTwo(...arg) {
    if (arg[1]) {
        return arg[0] + arg[1];
    }
    return arg[0];
}

console.log(oneOrTwo(4, 5));
console.log(oneOrTwo('4', '5'));
console.log(oneOrTwo(8));

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

function sumTwoArrays(arr1, arr2){
    const res = [];
    for (let i = 0; i < arr1.length; i++) {
        res.push(arr1[i]+arr2[i]);
    }
    return res;
}

console.log(sumTwoArrays([1, 2, 3, 4], [2, 3, 4, 5]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function arrOfKeys(arr){
    const res = [];
    for (const arrElement of arr) {
        for (const arrElementKey in arrElement) {
            res.push(arrElementKey);
        }
    }
    return res;
}

console.log(arrOfKeys([{name: 'Dima', age: 13}, {model: 'Camry'}]));


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function arrOfValues(arr){
    const res = [];
    for (const arrElement of arr) {
        for (const arrElementKey in arrElement) {
            res.push(arrElement[arrElementKey]);
        }
    }
    return res;
}

console.log(arrOfValues([{name: 'Dima', age: 13}, {model: 'Camry'}]));