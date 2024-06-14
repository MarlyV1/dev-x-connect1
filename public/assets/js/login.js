// fetch API for login
const userLogin = async (event) => {
    event.preventDefault();
    
    //getting input from login form
    const username = document.querySelector('#userName').value.trim();
    const password = document.querySelector('#password').value.trim();

    //send a request to the API routes
    if(username && password){
        try {
            const response = await fetch('/api/profiles/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json'},
            });
        
    //take the response, get data from local storage, and apply it to the homepage
        if(response.ok) {
            localStorage.setItem('userData', JSON.stringify(data));
            document.location.replace('homepage.html')
            const data = await response.json();
            const dataContainer = document.querySelector('.container');
            dataContainer.textContent = JSON.stringify(data, null, 2);
        } else {
            alert(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
}
};


