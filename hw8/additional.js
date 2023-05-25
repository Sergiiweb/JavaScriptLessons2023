//
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//          street: 'Kulas Light',
//          suite: 'Apt. 556',
//          city: 'Gwenborough',
//          zipcode: '92998-3874',
//          geo: {
//              lat: '-37.3159',
//              lng: '81.1496'
//              }
//              },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//          name: 'Romaguera-Crona',
//          catchPhrase: 'Multi-layered client-server neural-net',
//          bs: 'harness real-time e-markets'
//          }
// }
class Person {

    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address =
            {
                street: street,
                suite: suite,
                city: city,
                zipcode: zipcode,
                geo:
                    {
                        lat: lat,
                        lng: lng
                    }
            };
        this.phone = phone;
        this.website = website;
        this.company = {
            name: companyName,
            catchPhrase: catchPhrase,
            bs: bs
        }
    }
}

let user1 = new Person(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz',
    'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874',
    '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org',
    'Romaguera-Crona', 'Multi-layered client-server neural-net',
    'harness real-time e-markets');
console.log(user1);
//
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }
class Tag {
    constructor(titleOfTag, action, titleOfAttr1, actionOfAttr1, titleOfAttr2, actionOfAttr2, titleOfAttr3, actionOfAttr3) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs =
            [
                {
                    titleOfAttr1: titleOfAttr1,
                    actionOfAttr1: actionOfAttr1
                },
                {
                    titleOfAttr2: titleOfAttr2,
                    actionOfAttr2: actionOfAttr2
                },
                {
                    titleOfAttr3: titleOfAttr3,
                    actionOfAttr3: actionOfAttr3
                }
            ]
    }
}
// -a
let tagA = new Tag(
    'a',
    `HTML теґ <a> створює посилання на іншу сторіку(Зовнішне посилання) або на певний елемент цієї сторінки(Внутрішне посилання).`,
    'download',
    'Пропонує завантажити вказаний за посиланням файл.',
    'href',
    'Задає адресу документа, на який слід перейти.',
    'rel',
    'Відношення між документом за посиланням та поточним документам.'
    );
console.log(tagA);

// document.write(`
// <div> tag: ${tagA.titleOfTag} </div>
// <div> action: ${tagA.action} </div>
// <div> attrs:
//     <ul>
//         <li>${tagA.attrs[0].titleOfAttr1} - ${tagA.attrs[0].actionOfAttr1}</li>
//         <li>${tagA.attrs[1].titleOfAttr2} - ${tagA.attrs[1].actionOfAttr2}</li>
//         <li>${tagA.attrs[2].titleOfAttr3} - ${tagA.attrs[2].actionOfAttr3}</li>
//     </ul>
// </div>
// `);

// -div
let tagDiv = new Tag(
    'div',
    `Тег <div> використовується, щоб групувати блоки інформації та форматувати її за допомогою CSS.`,
    'align',
    `Визначає вирівнювання вмісту всередині <div> елемента.`,
    'class',
    'Визначає один або кілька класів, щоб зв’язати елемент з таблицею стилів (CSS).',
    'accesskey',
    'Дозволяє активувати або сфокусуватись на елементі за допомогою заданого сполучення клавіш.'
);
console.log(tagDiv);
// -h1
let tagH1 = new Tag(
    'h1',
    `<H1> визначає найбільш важливі заголовки`,
    'align',
    'Вирівнювання заголовку.',
    'class',
    'Визначає один або кілька класів, щоб зв’язати елемент з таблицею стилів (CSS).',
    'accesskey',
    'Дозволяє активувати або сфокусуватись на елементі за допомогою заданого сполучення клавіш.'
);
console.log(tagH1);
// -span
let tagSpan = new Tag(
    'span',
    `Тег <span> являє собою універсальний порожній контейнер, який необхідно заповнити будь-яким вмістом.`,
    'lang',
    'Визначає основну мову вмісту елемента',
    'class',
    'Визначає один або кілька класів, щоб зв’язати елемент з таблицею стилів (CSS).',
    'title',
    'Вказує додаткову текстову підказку'
);
console.log(tagSpan);
// -input
let tagInput = new Tag(
    'input',
    `HTML теґ <input> є одним з різнобічних елементів форми і дозволяє створювати різні елементи інтерфейсу і забезпечити взаємодію з користувачем.`,
    'type',
    'Повідомляє браузеру, до якого типу належить елемент форми.',
    'value',
    'Задає значення елемента.',
    'form',
    "Пов'язує поле з формою по її ідентифікатору."
);
console.log(tagInput);
// -form
let tagForm = new Tag(
    'form',
    `HTML теґ <form> використовується для створення HTML форми на сторінці.`,
    'action',
    'Вказує URL адресу обробника форми.',
    'method',
    'HTTP-метод відправки даних.',
    'name',
    'Вказує унікальне імʼя форми.'
);
console.log(tagForm);
// -option
let tagOption = new Tag(
    'option',
    `HTML тег option призначений для створення пункту списку для тега select чи datalist.`,
    'label',
    'Вказує короткий опис для пункту списку.',
    'selected',
    'Задає пункт списку, який буде обраний за дефолтом.',
    'value',
    'Задає значення елементу `select`, яке буде обробляти скрипт.'
);
console.log(tagOption);
// -select
let tagSelect = new Tag(
    'select',
    `Тег <select> дозволяє створити елемент інтерфейсу у вигляді списку, що розкривається, а також список з одним або множинним вибором.`,
    'multiple',
    'Множинний вибір',
    'name',
    'Імʼя випадаючого списка',
    'size',
    'Кількість видимих елементів спску.'
);
console.log(tagSelect);