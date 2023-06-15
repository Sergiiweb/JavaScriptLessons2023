// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.

const url = new URL(location.href);
const userId = url.searchParams.get('userId');

const userBlock = document.getElementById('user-block');

const userUrl = 'https://jsonplaceholder.typicode.com/users/' + userId;

fetch(userUrl)
    .then((response) => response.json())
    .then((user) => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user-div');
        userBlock.appendChild(userDiv);

        const userInfoList = document.createElement('ul');
        userInfoList.classList.add('user-info-list');
        listCreator(user, userInfoList);
        userDiv.appendChild(userInfoList);

        const userButton = document.createElement('button');
        userButton.classList.add('user-posts-button');
        userButton.innerText = 'posts of current user';
        userBlock.appendChild(userButton);

        userButton.onclick = () => {
            fetch(userUrl + '/posts')
                .then((response) => response.json())
                .then((posts) => {
                    const userPosts = document.getElementById('posts');
                    userPosts.classList.toggle('hide');
                    userPosts.innerHTML = '';

                    for (const post of posts) {
                        const postsDiv = document.createElement('div');
                        postsDiv.classList.add('posts-div');
                        userPosts.appendChild(postsDiv);

                        const postDiv = document.createElement('div');
                        postDiv.classList.add('post-div');
                        postDiv.innerText = post.title;
                        postsDiv.appendChild(postDiv);

                        const postInfoButton = document.createElement('button');
                        postInfoButton.classList.add('post-info-button');
                        postInfoButton.innerText = 'more...';
                        postsDiv.appendChild(postInfoButton);

                        postInfoButton.onclick = () => {
                            location.href = `post-details.html?postId=${post.id}`;
                        }
                    }

                })
        }

    });

function liCreator(key, value, parent) {
    const li = document.createElement('li');
    li.innerHTML = `<b>${key}:</b> ${value}`;
    parent.appendChild(li);
}

function ulCreator(key, object, parent) {
    const li = document.createElement('li');
    const ul = document.createElement('ul');
    li.innerHTML = `<b>${key}:</b> `;
    parent.appendChild(li);
    li.appendChild(ul);

    listCreator(object, ul);
}

function listCreator(object, parent) {
    for (const key in object) {
        typeof object[key] === 'object'
            ? ulCreator(key, object[key], parent)
            : liCreator(key, object[key], parent);
    }
}