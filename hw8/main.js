// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [
    new User(1, 'Kokos', 'Kokosov', 'kokos@gmail.com', '+380501111111'),
    new User(2, 'Abrikos', 'Abrikosov', 'abr@gmail.com', '+380501111112'),
    new User(3, 'Kokos2', 'Kokosov2', 'kokos2@gmail.com', '+380501111113'),
    new User(4, 'Abrikos2', 'Abrikosov2', 'abr2@gmail.com', '+380501111114'),
    new User(5, 'Abrikos3', 'Abrikosov3', 'abr3@gmail.com', '+380501111115'),
    new User(6, 'Abrikos4', 'Abrikosov4', 'abr4@gmail.com', '+380501111116'),
    new User(7, 'Abrikos5', 'Abrikosov5', 'abr5@gmail.com', '+380501111117'),
    new User(10, 'Abrikos6', 'Abrikosov6', 'abr6@gmail.com', '+380501111118'),
    new User(9, 'Abrikos7', 'Abrikosov7', 'abr7@gmail.com', '+380501111119'),
    new User(8, 'Abrikos8', 'Abrikosov8', 'abr8@gmail.com', '+380501111110')
];
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)

let filteredUsers = users.filter(value => value.id % 2 === 0);
console.log(filteredUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedUsers = users.sort((a, b) => a.id - b.id);
console.log(sortedUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order(поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

const clients = [
    new Client(1, 'Kokos', 'Kokosov1', 'kokos1@gmail.com', '+380501111111', ['prod1', 'prod2', 'prod3']),
    new Client(2, 'Kokos11', 'Kokosov2', 'kokos2@gmail.com', '+380508111111', ['prod7', 'prod2']),
    new Client(3, 'Kokos222', 'Kokosov3', 'kokos3@gmail.com', '+380501121111', ['prod55', 'prod3']),
    new Client(4, 'Kokos3333', 'Kokosov4', 'kokos4@gmail.com', '+380501191111', ['prod15', 'prod2', 'prod3', 'prod4']),
    new Client(5, 'Kokos55555', 'Kokosov5', 'kokos5@gmail.com', '+380504111111', ['prod111', 'prod2', 'prod3', 'prod10', 'prod444']),
    new Client(6, 'Kokos1', 'Kokosov6', 'kokos6@gmail.com', '+380501115111', ['prod5', 'prod2', 'prod3']),
    new Client(7, 'Kokos2', 'Kokosov7', 'kokos7@gmail.com', '+380501155111', ['prod3', 'prod3']),
    new Client(8, 'Kokos18', 'Kokosov8', 'kokos8@gmail.com', '+380501177111', ['prod44', 'prod2', 'prod3', 'prod111', 'prod2', 'prod3', 'prod10', 'prod444']),
    new Client(9, 'Kokos12', 'Kokosov9', 'kokos9@gmail.com', '+380501999111', ['prod1222', 'prod2', 'prod3444']),
    new Client(10, 'Kokos111', 'Kokosov10', 'kokos10@gmail.com', '+380501444411', ['prod3', 'prod2', 'prod3', 'prod55'])
]
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості
// товарів в полі order по зростанню. (sort)

let sortedClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний
// об'єкт car
function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function (){
        console.log(`модель ${this.model}, виробник ${this.manufacturer}, рік випуску ${this.year}, максимальна швидкість ${this.maxSpeed}, об'єм двигуна ${this.engineVolume}`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (...driver){
        this.driver = driver;
    }
}
let car1 = new Car('z350', 'Nissan', 2010, 250, 3.5);
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(50);
car1.info();
car1.changeYear(2015);
car1.info();
car1.addDriver('kokos', 31, 'pro');
console.log(car1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку