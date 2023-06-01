// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати
// данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку,
// під формою з'явився блок з вашим об'єктом
let f1Div = document.getElementById('f1Div');

let f1 = document.forms.f1;

f1.onsubmit = function (ev) {
    ev.preventDefault();
    let user = {
        name: this.username.value,
        surname: this.usersurname.value,
        age: this.userage.value
    };
    f1Div.innerText = `Name: ${user.name}, Surname: ${user.surname}, Age: ${user.age}`;
}

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені
// сторінки буде додавати до неї +1
let reloadCount = document.getElementById('counter');
// let count = 0;
window.onload = function () {
    let count = localStorage.getItem('count') || 1;
    reloadCount.innerHTML = count;
    count = +count + 1;
    localStorage.setItem('count', `${count}`);
}
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions
// зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
window.addEventListener('load', function () {
    let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
    sessions.push(new Date());
    localStorage.setItem('sessions', JSON.stringify(sessions));
});
console.log(JSON.parse(localStorage.getItem('sessions')));
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
const array100 = [];
for (let i = 1; i < 101; i++) {
    let obj = {name: `Name${i}`, surname: `Surname${i}`, age: Math.ceil(Math.random() * 100)};
    array100.push(obj);
}

let pagOutput = document.getElementById('pagOutput');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let j = 10;

for (let i = j - 10; i < j; i++) {
    let item = document.createElement('div');
    item.classList.add('pag-item');
    item.innerText = `Name: ${array100[i].name}, Surname: ${array100[i].surname}, Age: ${array100[i].age}`;
    pagOutput.appendChild(item);
    prev.style.visibility = 'hidden';
}
next.onclick = function () {
    j += 10;
    pagOutput.innerHTML = '';
    for (let i = j - 10; i < j; i++) {
        let item = document.createElement('div');
        item.classList.add('pag-item');
        item.innerText = `Name: ${array100[i].name}, Surname: ${array100[i].surname}, Age: ${array100[i].age}`;
        pagOutput.appendChild(item);
        if (j === 100) {
            next.style.visibility = 'hidden';
        }
        if (j > 10) {
            prev.style.visibility = 'unset';
        }
    }
}
prev.onclick = function () {
    j -= 10;
    pagOutput.innerHTML = '';
    for (let i = j - 10; i < j; i++) {
        let item = document.createElement('div');
        item.classList.add('pag-item');
        item.innerText = `Name: ${array100[i].name}, Surname: ${array100[i].surname}, Age: ${array100[i].age}`;
        pagOutput.appendChild(item);
        if (j === 10) {
            prev.style.visibility = 'hidden';
        }
        if (j < 100) {
            next.style.visibility = 'unset';
        }
    }
}
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id="text".
const hideDiv1 = document.getElementById('text');
const hideButton1 = document.getElementById('hide-button');

hideButton1.onclick = function () {
    hideDiv1.classList.toggle('hide-it');
}
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку
//     зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let isAdult = document.getElementById('adult');
const inputAge = document.createElement('input');
inputAge.placeholder = 'your age';
isAdult.appendChild(inputAge);

const ageButton = document.createElement('button');
ageButton.innerText = 'send';
ageButton.id = 'age-button';
isAdult.appendChild(ageButton);
const h1Age = document.createElement('h1');
h1Age.innerText = 'Are You adult?';
isAdult.appendChild(h1Age);

ageButton.onclick = function () {
    if (inputAge.value < 18) {
        h1Age.innerText = 'You are not adult. Go away!!!!';
    } else {
        h1Age.innerText = 'Wellcome!!!!';
    }
    // inputAge.classList.add('hide-it');
    // ageButton.classList.add('hide-it');
}
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let f2 = document.getElementById('f2');
let table = document.getElementById('table');

f2.onsubmit = function (ev) {
    ev.preventDefault();
    let tableRows = this.rows.value;
    let tableCells = this.cells.value;
    let tableText = this.text2.value;
    table.innerHTML = '';

    for (let i = 0; i < tableRows; i++) {
        let row = document.createElement('tr');
        table.appendChild(row);
        for (let k = 0; k < tableCells; k++) {
            let cell = document.createElement('td');
            cell.innerText = tableText;
            row.appendChild(cell);
        }
    }
}
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком,
// в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після
//     попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
let uah = document.getElementById('uah');
// localStorage.clear();
window.addEventListener('load', function () {
    let uahCounter = localStorage.getItem('uahCounter') || 100;
    let sessions2 = JSON.parse(localStorage.getItem('sessions2')) || [];
    sessions2.push(new Date().getTime());
    localStorage.setItem('sessions2', JSON.stringify(sessions2));
    if (sessions2[sessions2.length - 1] - sessions2[sessions2.length - 2] > 10000) {
        uahCounter = +uahCounter + 10;
        localStorage.setItem('uahCounter', uahCounter);
    }
    uah.innerText = uahCounter;
})