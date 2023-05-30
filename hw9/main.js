//
// - створити блок,
let divElement = document.createElement('div');
divElement.innerText = 'First Div';
//     - додати йому класи wrap, collapse, alpha, beta
divElement.classList.add('wrap');
divElement.classList.add('collapse');
divElement.classList.add('alpha');
divElement.classList.add('beta');
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
divElement.style.background = 'silver';
divElement.style.color = 'red';
divElement.style.fontSize = '32px';
divElement.style.textAlign = 'center';
// - додати цей блок в body.
document.body.appendChild(divElement);
// - клонувати його повністю, та додати клон в body.
let divElement1 = divElement.cloneNode(true);
divElement1.innerText = 'Second Div';
document.body.appendChild(divElement1);
document.write(`<hr>`);
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const menuArray = ['Main', 'Products', 'About us', 'Contacts'];
let menuList = document.createElement('ul');
document.body.appendChild(menuList);
for (const item of menuArray) {
    let menuItem = document.createElement('li');
    menuItem.classList.add('menu-item');
    menuItem.innerText = item;
    menuList.appendChild(menuItem);
}
document.write(`<hr>`);
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesListDiv = document.createElement('div');
document.body.appendChild(coursesListDiv);
for (const coursesElement of coursesAndDurationArray) {
    let coursesInfoDiv = document.createElement('div');
    coursesInfoDiv.innerHTML = `<div>title: ${coursesElement.title}, <br/> monthDuration: ${coursesElement.monthDuration}</div>`;
    coursesListDiv.appendChild(coursesInfoDiv);
}
document.write(`<hr>`);
// =========================
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
let coursesListDiv2 = document.createElement('div');
document.body.appendChild(coursesListDiv2);
for (const coursesElement of coursesAndDurationArray) {
    let coursesTitleH1 = document.createElement('h1');
    coursesTitleH1.classList.add('heading');
    coursesTitleH1.innerText = coursesElement.title;
    let coursesDescriptionP = document.createElement('p');
    coursesDescriptionP.classList.add('description');
    coursesDescriptionP.innerText = 'monthDuration: ' + coursesElement.monthDuration;
    coursesListDiv2.append(coursesTitleH1, coursesDescriptionP);
}
document.write(`<hr>`);
// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'>
// та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його
//     інформацією з цього об'єкту
let simpsonsDiv = document.createElement('div');
document.body.appendChild(simpsonsDiv);
for (const simpson of simpsons) {
    let simpsonsInfoDiv = document.createElement('div');
    simpsonsInfoDiv.classList.add('simp-div');
    simpsonsInfoDiv.innerHTML = `<div class="descr"><b>Name:</b> ${simpson.name} <br />
                                <b>Surname:</b> ${simpson.surname} <br />
                                <b>Age:</b> ${simpson.age} <br />
                                <b>Info:</b> ${simpson.info} </div> 
                                <div class="pict"><img src="${simpson.photo}" alt="${simpson.name}"></div>
                                `;
    simpsonsDiv.appendChild(simpsonsInfoDiv);
}

document.write(`<hr>`);
// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
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
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись
// значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
let coursesMainDiv = document.createElement('div');
coursesMainDiv.classList.add('courses-main-div');
document.body.appendChild(coursesMainDiv);

for (const coursesArrayElement of coursesArray) {
    let coursersContainer = document.createElement('div');
    coursersContainer.classList.add('coursers-container');

    let titleDiv = document.createElement('div');
    titleDiv.classList.add('title-div');
    titleDiv.innerHTML = `<h1>${coursesArrayElement.title}</h1>`;

    let durationDiv = document.createElement('div');
    durationDiv.classList.add('duration-div');
    durationDiv.innerHTML = `<div class="month">Month Duration: ${coursesArrayElement.monthDuration}</div>
                             <div class="hour">Hour Duration: ${coursesArrayElement.hourDuration}</div>`;

    let modulesDiv = document.createElement('div');
    modulesDiv.innerHTML = '<h2>Modules:</h2>';
    modulesDiv.classList.add('modules-div');

    coursersContainer.append(titleDiv, durationDiv, modulesDiv);

    let modulesList = document.createElement('ul');
    modulesList.classList.add('modules-list');
    modulesDiv.appendChild(modulesList);

    for (const modulesElement of coursesArrayElement.modules) {
        let modulesEl = document.createElement('li');
        modulesEl.innerText = modulesElement;
        modulesList.appendChild(modulesEl);
    }

    coursesMainDiv.appendChild(coursersContainer);
}
document.write(`<hr>`);
// ------------------
//
//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
//     щоб при натисканні на кнопку зникав елемент з id="text".
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
