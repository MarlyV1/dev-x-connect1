//fetch API for sign up
document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("hit")
  // get input from input fields
  const first_name = document.querySelector("#firstName").value;
  const last_name = document.querySelector("#lastName").value;
  const username = document.querySelector("#userName").value;
  const password = document.querySelector("#password").value;
  const phases = document.querySelectorAll(".form-check-input");

  // detecting which box was checked
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
    console.log("hit")
    const response = await fetch("/api/profiles/signup", {
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
    
    // response
    if (response.ok) {
      document.location.replace("/homepage.html");
      console.log("submitted");
    } else {
      alert(response.statusText);
    }
  }
});
