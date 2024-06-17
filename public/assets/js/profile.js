window.addEventListener('DOMContentLoaded', (event) => {
    const data = JSON.parse(window.localStorage.getItem('data'));
    console.log(data);
    profileData(data)
});

function profileData(data) {
    const container = document.querySelector('.profile-card-body');

    const username = document.createElement('h1');
    username.textContent = data.user.username;

    const name = document.createElement('h3');
    name.textContent = data.user.first_name + ' ' + data.user.last_name;

    const createDate = document.createElement('p');
    const date = new Date(data.user.createdAt);
    createDate.textContent = 'Member since' + ' ' + date.toLocaleDateString();

    container.append(username);
    container.append(name);
    container.append(createDate);
};