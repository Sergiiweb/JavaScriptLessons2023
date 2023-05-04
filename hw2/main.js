// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, true, 'okten', -111.3, false, 122, 'hello, world!', 123, 0, '0'];
for (const i of arr) {
    console.log(i);
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'First Book',
    pageCount: 50,
    genre: 'action'
}
let book2 = {
    title: 'Second Book',
    pageCount: 150,
    genre: 'dram'
}
let book3 = {
    title: 'Third Book',
    pageCount: 250,
    genre: 'crime'
}
// console.log(book1);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'First Book',
    pageCount: 50,
    genre: 'action',
    authors: [
        {name: 'Maria', age: 28},
        {name: 'Ant', age: 54},
    ]
}
let book5 = {
    title: 'Second Book',
    pageCount: 150,
    genre: 'dram',
    authors: ['Ford', 18]
}
let book6 = {
    title: 'Third Book',
    pageCount: 250,
    genre: 'crime',
    authors: ['Anton', 48]
}
// console.log(book4);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Andrii', username: 'and', password: '123and'},
    {name: 'Sergii', username: 'serg', password: '232ff'},
    {name: 'name3', username: 'uname', password: '444ddd'},
    {name: 'name4', username: 'uname', password: 'ddd'},
    {name: 'name5', username: 'uname', password: 'vbfbb'},
    {name: 'name6', username: 'uname', password: 'fbddd'},
    {name: 'name7', username: 'uname', password: 'dbfee'},
    {name: 'name8', username: 'uname', password: 'bt5555'},
    {name: 'name9', username: 'uname', password: 'eeeebbfd'},
    {name: 'name10', username: 'uname', password: 'fffff'},
]
for (const i of users) {
    console.log(i.password);
}

// -----------------------------Логічні розгалуження:-----------------------------------------------------

//
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = 1;
// let x = 0;
let x = -3;

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}


// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 46;

if (time >= 0 && time < 15) {
    console.log('first part');
} else if (time >= 15 && time < 30) {
    console.log('second part');
} else if (time >= 30 && time < 45) {
    console.log('third part');
} else if (time >= 45 && time < 60) {
    console.log('fourth part');
} else {
    console.log('???????');
}


// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 26;

if (day > 0 && day < 11) {
    console.log('first part');
} else if (day > 10 && day < 21) {
    console.log('second part');
} else if (day > 20 && day <= 31) {
    console.log('third part');
} else {
    console.log('???????');
}


// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей
// день (можна замість плану на день, назву дня англійською).

let dayOfWeek = +prompt('enter day number');

switch (dayOfWeek) {
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log('Not a number of week`s day');
        break;
}


// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let firstNumber = +prompt('enter first number:');
let secondNumber = +prompt('enter second number:');

if (firstNumber > secondNumber) {
    console.log(firstNumber);
} else if (firstNumber < secondNumber) {
    console.log(secondNumber);
} else {
    console.log('equal');
}


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х
//     являється falsy (хибноподібні, тобто приводиться до false)
// Boolean('')           // false
// Boolean(0)            // false
// Boolean(-0)           // false
// Boolean(NaN)          // false
// Boolean(null)         // false
// Boolean(undefined)    // false
// Boolean(false)        // false
// Boolean({})             // true
// Boolean([])             // true
// Boolean(function() {})  // true

let x1 = undefined;

if (Boolean(x1) === false) {
    x1 = 'default';
}
console.log(x1);

// let x2 = '';
// if (!x2){
//     x2 = 'default';
// }
// console.log(x2);


//
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    if (coursesAndDurationArrayElement.monthDuration > 5) {
        console.log('Super!');
    }
    console.log('');
}

