// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

let url = new URL('https://jsonplaceholder.typicode.com/users');

fetch(url)
    .then(response => response.json())
    .then((users) => {
        const usersDiv = document.createElement('div');
        document.body.appendChild(usersDiv);

        for (const user of users) {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user');
            usersDiv.appendChild(userDiv);

            let iterUser = function (user) {

                for (const key in user) {
                    if (typeof user[key] === 'object') {
                        iterUser(user[key]);
                    } else {
                        const userItem = document.createElement('div');
                        userItem.innerText = key + ' ' + user[key];
                        userDiv.appendChild(userItem);
                    }

                }
            }
            iterUser(user);
        }
    })

// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
//
//
// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар