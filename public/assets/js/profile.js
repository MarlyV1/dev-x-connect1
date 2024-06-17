document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const first_name = document.querySelector("#firstName").value;
  const last_name = document.querySelector("#lastName").value;
  const username = document.querySelector("#userName").value;
  const password = document.querySelector("#password").value;
  const phases = document.querySelectorAll(".form-check-input");
  let phaseChoice;
  //iterates through elements,adding a click event listener to each that updates the phaseChoice variable to the value of the clicked and checked element.
  phases.forEach((phase) => {
    phase.addEventListener("click", function () {
      if (this.checked) {
        phaseChoice = this.value;
      }
    });
  });
  //This code sends a POST request to create a new user, redirects to the profile page on success, or shows an alert with the error status on failure.
  if (first_name && last_name && username && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        first_name,
        last_name,
        username,
        password,
        phaseChoice,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
      console.log(submitted);
    } else {
      alert(response.statusText);
    }
  }
});

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