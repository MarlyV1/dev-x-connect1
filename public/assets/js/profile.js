window.addEventListener('DOMContentLoaded', (event) => {
    const data = JSON.parse(window.localStorage.getItem('data'));
    console.log(data);
    profileData(data)
});

function profileData(data) {
    const container = document.querySelector('.card-body');

    const username = document.createElement('h1');
    username.textContent = data.user.username;

    const firstName = document.createElement('h4');
    firstName.textContent = data.user.first_name;
    firstName.style.display = 'inline';

    const lastName = document.createElement('h4');
    lastName.textContent = data.user.last_name;
    lastName.style.display = 'inline';

    const createDate = document.createElement('p');
    createDate.textContent = data.user.createdAt;

    container.append(username);
    container.append(firstName);
    container.append(lastName);
    container.append(createDate);
};