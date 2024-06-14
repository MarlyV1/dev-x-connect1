window.addEventListener('DOMContentLoaded', (event) => {
    const data = JSON.parse(window.localStorage.getItem('data'));
    displayData(data)
});

function displayData(data) {
    const container = document.querySelector('.container');

    const username = document.createElement('h1');
    username.textContent = data.user.username;

    container.append(username);
}