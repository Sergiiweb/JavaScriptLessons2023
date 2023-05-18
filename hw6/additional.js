// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
document.writeln(cutString('наслаждение', 3)); // [нас,лаж,ден,ие]

function cutString(str, n) {
    let res = [];
    for (let i = 0; i < str.length; i += n) {
        res.push(str.substring(i, i + n));
    }
    return res;
}

document.write(`<br />`);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної
// кількості символів.
let str = 'Каждый охотник желает знать';
let delete_characters = (str, length) => str.substring(0, length);
document.writeln(delete_characters(str, 7)); // Каждый
document.write(`<br />`);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
let str1 = "HTML JavaScript PHP";
let insert_dash = (str) => str.toUpperCase().replaceAll(' ', '-');
document.writeln(insert_dash(str1)); // 'HTML-JAVASCRIPT-PHP'
document.write(`<br />`);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка
// з нижнього регістру у верхній.

let firstLetterToUp = (str) => str[0].toUpperCase() + str.slice(1);
document.writeln(firstLetterToUp('наслаждение'));
document.write(`<br />`);

// - Дано список імен.
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let nameImprover = (name) => name.replaceAll('..', ' ').replaceAll('---', ' ').replaceAll('__', ' ');

document.write(nameImprover(n1));// let n1 = 'Harry Potter'
document.write(`<br />`);
document.write(nameImprover(n2));// let n2 = 'Ron Whisley'
document.write(`<br />`);
document.write(nameImprover(n3));// let n3 = 'Hermione Granger'
document.write(`<br />`);

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomArrayOfNumbers = (n) => {
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(Math.floor(Math.random() * 100));
    }
    return res;
}

document.write(randomArrayOfNumbers(10));
document.write(`<br />`);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

let genArray = randomArrayOfNumbers(20).sort((a, b) => a - b);
document.write(genArray);
document.write(`<br />`);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

let genArray1 = randomArrayOfNumbers(20).filter(value => value % 2 === 0 && value !== 0);
document.write(genArray1);
document.write(`<br />`);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

function capitalize(str) {
    const tempArr = str.split(' ');
    const res = [];
    for (let i = 0; i < tempArr.length; i++) {
        res.push(tempArr[i][0].toUpperCase() + tempArr[i].slice(1));
    }
    return res.join(' ');
}

document.write(str);
document.write(`<br />`);
document.write(capitalize(str));
document.write(`<br />`);

// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до
// регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)

// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

function validator(email) {
    email = email.toLowerCase();
    if (twoLetterBeforeRavlyk(email) && haveRavlyk(email) && pointAfterRavlyk(email)) {
        document.write(`Your email: <b>${email}</b> is correct!`);
        return true;
    }
    document.write(`Incorrect email: <b>${email}</b>`);
}

let twoLetterBeforeRavlyk = (email) => email.indexOf(`@`) > 1;
let haveRavlyk = (email) => email.indexOf(`@`) !== -1;
let pointAfterRavlyk = (email) => email.lastIndexOf('.') - email.indexOf('@') > 2;

validator('someemail@gmail.com');
document.write(`<br />`);
validator('someeMAIL@gmail.com');
document.write(`<br />`);
validator('someeMAIL@i.ua');
document.write(`<br />`);
validator('some.email@gmail.com');
document.write(`<br />`);

// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let sortByModules = coursesArray.sort((a, b) => b.modules.length - a.modules.length);
console.log(sortByModules);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.

function count(str, stringSearch) {
    let count = 0;
    for (const item of str) {
        if(item === stringSearch){
            count++;
        }
    }
    return count;
}

let symb = "о", str2 = "Астрономия это наука о небесных объектах";
document.write(count(str2, symb)) // 5
document.write(`<br />`);

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let cutString2 = (str, n) => str.split(' ').slice(0,n).join(' ');

let str3 = "Сила тяжести приложена к центру масс тела";
document.writeln(cutString2(str3, 5)) // 'Сила тяжести приложена к центру'
document.write(`<br />`);
//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню