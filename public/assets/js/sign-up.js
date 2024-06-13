//fetch API for sign up
document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  // get input from input fields
  const first_name = document.querySelector("#firstName").value;
  const last_name = document.querySelector("#lastName").value;
  const username = document.querySelector("#userName").value;
  const password = document.querySelector("#password").value;
  const phases = document.querySelectorAll(".form-check-input");

  // detecting which box was checked
  let phaseChoice;
  phases.forEach((phase) => {
    phase.addEventListener("click", function () {
      if (this.checked) {
        phaseChoice = this.value;
      }
    });
  }); 

   //Once fields are filled out, send a request to API routes
  if (first_name && last_name && username && password) {
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
      console.log(submitted);
    } else {
      alert(response.statusText);
    }
  }
});
