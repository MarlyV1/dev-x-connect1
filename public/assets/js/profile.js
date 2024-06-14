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
  //sends a POST request to create a new user, redirects to the profile page on success, or shows an alert with the error status on failure.
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
//capture the input and make an API call to your backend.
async function searchUserName() {
  const username = document.getElementById("seachInput").value;
  const response = await fetch(`api/users/search?username=${username}`);
  const data = await response.json();
}
