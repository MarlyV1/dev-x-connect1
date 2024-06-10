const userLogin = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#userName').value.trim();
    const password = document.querySelector('#password').value.trim();

    if(username && password){
        const response = await fetch('/api/profile/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        if(response.ok) {
            document.location.replace('homepage.html')
            const data = await response.json();
            const dataContainer = document.querySelector('.container');
            dataContainer.textContent = JSON.stringify(data, null, 2);
        } else {
            alert(response.statusText);
        }
    }
}