// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let rectArea = (a, b) => a * b;

console.log(rectArea(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let circleArea = (r) => Math.PI * r ** 2;

console.log(circleArea(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylArea = (r, h) => 2 * Math.PI * r * h + 2 * Math.PI * r ** 2;

console.log(cylArea(10, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент

let printArr = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

const array1 = [1.2, 3, 5, 8, 10, 100500, 'string'];
printArr(array1);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let pCreator = (text) => {
    document.write(`<p>Some text: ${text}</p>`);
}

pCreator('This is text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let list3Creator = (text) => {
    document.write(`
        <ul>
            <li>1: ${text}</li>
            <li>2: ${text}</li>
            <li>3: ${text}</li>
        </ul>
    `)
}

list3Creator('Some text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let listCreator = (text, quantity) => {
    document.write(`<ul>`);
    for (let i = 1; i <= quantity; i++) {
        document.write(`<li>li - ${i}: ${text}</li>`);
    }
    document.write(`</ul>`);
}

listCreator('Some text', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrayToList = (arr) => {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ul>`);
}

arrayToList([1, true, 'string', 100500]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let objectsPrint = (arr) => {
    for (const arrElement of arr) {
        document.write(`
            <div>
                ID: ${arrElement.id}. Name: ${arrElement.name}. Age: ${arrElement.age}
            </div>
        `)
    }
}

const array2 = [
    {id: 111, name: 'vasya', age: 20},
    {id: 112, name: 'lena', age: 21},
    {id: 113, name: 'pol', age: 22},
];
objectsPrint(array2);

// - створити функцію яка повертає найменьше число з масиву

let minFind = (arr) => {
    let min = arr[0];
    for (const el of arr) {
        if (el < min) {
            min = el;
        }
    }
    return min;
}

const array3 = [22, 13, 5, 66, 0, -25, 333, 14, -75];
console.log('Min: ', minFind(array3));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

let sum = (arr) => {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}

console.log('Sum: ', sum([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr, index1, index2) => {
    let swapEl = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = swapEl;
    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const currencyValue of currencyValues) {
        if (exchangeCurrency === currencyValue.currency) {
            return sumUAH / currencyValue.value;
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR'));
