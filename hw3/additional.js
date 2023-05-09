// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

const array = [];
for (let i = 0; i <= 100; i += 25) {
    array[array.length] = i;
}
for (let i = 1; i <= 5; i++) {
    array[array.length] = `String ${i}`;
}
array[array.length] = `String`;
array[array.length] = true;
array[array.length] = 100500;
array[array.length] = `Hello, World!`;
array[array.length] = false;

console.log(array);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль

const arr = [];
arr[0] = '10 strings';
arr[1] = 10;
arr[2] = true;
arr[3] = NaN;

console.log(arr);
console.log('-------------------');

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let arr2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
let i = 0;
while (i < arr2.length) {
    console.log(arr2[i]);
    i++;
}
console.log('-------------------');
// 2. перебрати його циклом for
for (const number of arr2) {
    console.log(number);
}
console.log('-------------------');
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0;
while (i < arr2.length) {
    if (i % 2 !== 0) {
        console.log(arr2[i]);
    }
    i++;
}
console.log('-------------------');
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < arr2.length; i++) {
    if (i % 2 !== 0) {
        console.log(arr2[i]);
    }
}
console.log('-------------------');
// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0;
while (i < arr2.length) {
    if (arr2[i] % 2 === 0) {
        console.log(arr2[i]);
    }
    i++;
}
console.log('-------------------');
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (const number of arr2) {
    if (number % 2 === 0) {
        console.log(number);
    }
}
console.log('-------------------');
// 7. замінити кожне число кратне 3 на слово "okten"
console.log(arr2);
i = 0;
while (i < arr2.length) {
    if (arr2[i] % 3 === 0) {
        arr2[i] = 'okten';
    }
    i++;
}
console.log(arr2);
console.log('-------------------');
// 8. вивести масив в зворотньому порядку.
const reverseArr2 = [];
for (let j = arr2.length - 1; j >= 0; j--) {
    reverseArr2[reverseArr2.length] = arr2[j];
}
console.log(reverseArr2);
console.log('-------------------');
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let arr3 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

i = arr3.length - 1;
while (i >= 0) {
    console.log(arr3[i]);
    i--;
}
console.log('-------------------');

for (let i = arr3.length - 1; i >= 0; i--) {
    console.log(arr3[i]);
}
console.log('-------------------');

i = arr3.length - 1;
while (i >= 0) {
    if (i % 2 !== 0) {
        console.log(arr3[i]);
    }
    i--;
}
console.log('-------------------');

for (let i = arr3.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(arr3[i]);
    }
}
console.log('-------------------');

i = arr3.length - 1;
while (i >= 0) {
    if (arr3[i] % 2 === 0) {
        console.log(arr3[i]);
    }
    i--;
}
console.log('-------------------');

for (let i = arr3.length - 1; i >= 0; i--) {
    if (arr3[i] % 2 === 0) {
        console.log(arr3[i]);
    }
}
console.log('-------------------');

console.log(arr3);
i = arr3.length - 1;
while (i >= 0) {
    if (arr3[i] % 3 === 0) {
        arr3[i] = 'okten';
    }
    i--;
}
console.log(arr3);
console.log('-------------------');

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const number of arr4) {
    console.log(number);
}
console.log('-------------------');

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

const arr5 = ['String1', 'String2', 'String3', 'String4', 'String5', 'String6', 'String7', 'String8', 'String9', 'String10'];

for (const number of arr5) {
    console.log(number);
}
console.log('-------------------');

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

const arr6 = ['String1', '2', 'true', true, 5, {first: 'String6'}, 'String7', false, 'String9', 10];

for (const number of arr6) {
    console.log(number);
}
console.log('-------------------');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if
// та typeof вивести тільки булеві елементи

const arr7 = ['String1', '2', 'true', true, 5, {first: 'String6'}, 'String7', false, 'String9', 10];

for (const number of arr7) {
    if (typeof number === "boolean") {
        console.log(number);
    }
}
console.log('-------------------');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if
// та typeof вивести тільки числові елементи

for (const number of arr7) {
    if (typeof number === 'number') {
        console.log(number);
    }
}
console.log('-------------------');

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if
// та typeof вивести тільки рядкові елементи

for (const number of arr7) {
    if (typeof number === 'string') {
        console.log(number);
    }
}
console.log('-------------------');

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення
// до конкретних індексів. Вивести в консоль всі його елементи в циклі.

const arr8 = [];

arr8[0] = true;
arr8[1] = false;
arr8[arr8.length] = NaN;
arr8[arr8.length] = undefined;
arr8[arr8.length] = 100500;
arr8[arr8.length] = 'true';
arr8[arr8.length] = 'String';
arr8[arr8.length] = null;
arr8[arr8.length] = 'okten';
arr8[arr8.length] = 'end';

for (const arr8Element of arr8) {
    console.log(arr8Element);
}

console.log('-------------------');

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log
// та document.write

for (let j = 1; j <= 10; j++) {
    console.log(j);
    document.write(`<div>Step ${j}</div>`);
}

console.log('-------------------');

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log
// та document.write

for (let j = 1; j <= 100; j++) {
    console.log(j);
    document.write(`<div>Step ${j}</div>`);
}

console.log('-------------------');

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log
// та document.write

for (let j = 1; j <= 200; j += 2) {
    console.log(j);
    document.write(`<div>Step ${j}</div>`);
}

console.log('-------------------');

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let j = 1; j <= 100; j++) {
    if (j % 2 === 0) {
        console.log(j);
        document.write(`<div>Step ${j}</div>`);
    }
}

console.log('-------------------');

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let j = 1; j <= 100; j++) {
    if (j % 2 !== 0) {
        console.log(j);
        document.write(`<div>Step ${j}</div>`);
    }
}

console.log('-------------------');

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

const books = [
    {title: 'Title1', pages: 100, authors: [{name: 'Name1', age: 25}, {name: 'Name2', age: 30}], genre: ['action']},
    {title: 'Title2444', pages: 170, authors: [{name: 'Name1', age: 25}], genre: ['action']},
    {
        title: 'Title3ggggggfgd LONG',
        pages: 80,
        authors: [{name: 'Name1', age: 25}, {name: 'Name2', age: 30}, {name: 'Name3', age: 30}],
        genre: ['action', 'love']
    },
    {
        title: 'Title4232311',
        pages: 1010,
        authors: [{name: 'Name1', age: 25}, {name: 'Name2', age: 30}],
        genre: ['action', 'love']
    },
    {
        title: 'Title5!!!!',
        pages: 10,
        authors: [{name: 'Name1', age: 25}, {name: 'Name2', age: 30}, {name: 'Name3', age: 30}, {
            name: 'Name4',
            age: 30
        }],
        genre: ['action', 'love', 'drama']
    },
]

let biggestBook = books[0];
let biggestGenre = books[0];
let longestTitle = books[0];
let twoAuthors = [];
let oneAuthors = [];
for (const book of books) {
// -знайти наібльшу книжку.
    if (book.pages > biggestBook.pages){
        biggestBook = book;
    }
// - знайти книжку/ки з найбільшою кількістю жанрів
    if(book.genre.length > biggestGenre.genre.length){
        biggestGenre = book;
    }
// - знайти книжку/ки з найдовшою назвою
    if(book.title.length > longestTitle.title.length){
        longestTitle = book;
    }
// - знайти книжку/ки які писали 2 автори
    if(book.authors.length === 2){
        twoAuthors[twoAuthors.length] = book;
    }
// - знайти книжку/ки які писав 1 автор
    if(book.authors.length === 1){
        oneAuthors[oneAuthors.length] = book;
    }
}

console.log(biggestBook);
console.log(biggestGenre);
console.log(longestTitle);
console.log(twoAuthors);
console.log(oneAuthors);