document.querySelector("form").addEventListener("submit",async e=>{
const first_name=document.querySelector("#firstName").value
const last_name=document.querySelector("#lastName").value
const username=document.querySelector("#userName").value
const password=document.querySelector("#password").value
if (first_name&&last_name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ first_name,last_name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
})