// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів

let url = new URL('https://jsonplaceholder.typicode.com/users');
fetch(url)
    .then(response => response.json())
    .then(users => console.log(users));

// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)

fetch(url)
    .then(response => response.json())
    .then(users => {
        const usersDiv = document.createElement('div');
        usersDiv.innerText = 'Users:';
        usersDiv.classList.add('users-div');
        document.body.appendChild(usersDiv);

        for (const user of users) {
            const userDiv = document.createElement('div');
            userDiv.innerText = 'User:';
            userDiv.classList.add('user-div');
            usersDiv.appendChild(userDiv);

            let a = document.createElement('a');
            a.innerText = '   ID - ' + user.id + ' with name - ' + user.name;
            a.href = 'user-details.html?id=' + JSON.stringify(user.id);
            userDiv.appendChild(a);
        }
    });

// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
