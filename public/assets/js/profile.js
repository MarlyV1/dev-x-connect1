window.addEventListener('DOMContentLoaded', (event) => {
  const data = JSON.parse(window.localStorage.getItem('data'));
  console.log(data);
  profileData(data)
});

function profileData(data) {
  const container = document.querySelector('.card-body');

  const username = document.createElement('h1');
  username.textContent = data.user.username;

  const breakline = document.createElement('hr');


  const name = document.createElement('h2');
  name.textContent = data.user.first_name + ' ' + data.user.last_name;

  const createDate = document.createElement('p');
  const date = new Date(data.user.createdAt);
  createDate.textContent = 'Member since' + ' ' + date.toLocaleDateString();

  container.append(username);
  container.append(breakline);
  container.append(name);
  container.append(createDate);
};

// Add event listener to handle form submission
document.getElementById('searchForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission
    await searchUserName(); // Call the search function
});

// Function to search user by username
async function searchUserName() {
    const username = document.getElementById("searchInput").value; // username from input
    const response = await fetch(`/api/users/search?username=${username}`); // Make GET request to backend
    const data = await response.json(); // Parse response
    document.getElementById('result').innerText = JSON.stringify(data, null, 2); // Display result
}