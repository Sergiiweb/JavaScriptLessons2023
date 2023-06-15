//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const url = new URL(location.href);
const postId = url.searchParams.get('postId');

const userPost = document.getElementById('user-post');
const postComments = document.getElementById('post-comments');

const postUrl = 'https://jsonplaceholder.typicode.com/posts/' + postId;
const postCommentsUrl = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;


fetch(postUrl)
    .then((response) => response.json())
    .then((post) => {
        for (const key in post) {
            const postItem = document.createElement('div');
            postItem.innerHTML = `<b>${key}</b>: ${post[key]}`;
            userPost.appendChild(postItem);
        }
    });

fetch(postCommentsUrl)
    .then((response) => response.json())
    .then((comments) => {
        let count = 1;
        for (const comment of comments) {

            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment-div');
            const countDiv = document.createElement('div');
            countDiv.classList.add('count-div');
            countDiv.innerText = `Comment #${count}`;
            commentDiv.appendChild(countDiv);
            count++;

            for (const key in comment) {
                const div = document.createElement('div');
                div.innerHTML = `<b>${key}</b>: ${comment[key]}`;
                commentDiv.appendChild(div);
            }

            postComments.appendChild(commentDiv);
        }
    });

