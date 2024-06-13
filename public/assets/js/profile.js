const renderProfile = async (profile) => {

        const profileData = await fetch('/api/profiles/', {
            method: 'GET',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json'},
        }); 

        if(response.ok){
            localStorage.getItem
        }
}