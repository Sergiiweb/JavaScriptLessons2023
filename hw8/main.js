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

let filteredUsers = users.filter((value, index) => (users[index].id % 2) === 0);
console.log(filteredUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedUsers = users.sort((a, b) => a.id - b.id);
console.log(sortedUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
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