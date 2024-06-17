// window.addEventListener('DOMContentLoaded', (event) => {
//     const data = JSON.parse(window.localStorage.getItem('data'));
//     displayData(data)
// });

// function displayData(data) {
//     const container = document.querySelector('.container');

//     const username = document.createElement('h1');
//     username.textContent = data.user.username;

//     const message = document.createElement('p');
//     message.textContent = "What's on your mind?";
//     message.className = 'msg';

//     const link = document.createElement('button');
//     link.textContent = "+ Share a Post"
//     link.className = 'postBtn'
//     link.addEventListener('click', function() {
//         window.location.href = 'create-post.html';
//     });

//     container.append(username);
//     container.append(message);
//     container.append(link);
// }