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
                    return response.json();
                } else {
                    console.log('Error during login');
                }
            })
            .then(data => {
                renderData(data);
            })
            .catch(error => console.error('Error:', error));
    }};
        
  
//separate function to render data
function renderData(data) {
    const container = document.querySelector('.container');
    const username = data.username.createElement('h1');
    username.textContent = data.username;
    const phaseGroup = data.community.createElement('h3');
    phaseGroup.textContent = data.phaseGroup;

    container.append(username);
    container.append(phaseGroup);
}