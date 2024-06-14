const loginButton = document.querySelector('.sign-in-btn')

// fetch API for login
const userLogin = async (event) => {
    event.preventDefault();

    //getting input from login form
    const username = document.querySelector('#userName').value.trim();
    const password = document.querySelector('#password').value.trim();

    //send a request to the API routes
    if(username && password){
         fetch('/api/profiles/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json'},
            })

            .then(response => {
                if(response.ok){
                    console.log('Status:', response.status)
                    return response.json();
                } else {
                    console.log('Error during login');
                }
            })
            .then(data => {
                console.log("Data:", data)
                window.localStorage.setItem('data', JSON.stringify(data))
                document.location.replace('/homepage.html')
            });
    }};
        
  


loginButton.addEventListener('click', userLogin);