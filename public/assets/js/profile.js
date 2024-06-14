//function to render profile data
const renderProfile = async (profile) => {

        fetch('/api/profiles/', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
        }) 

        .then(response => {
            if(response.ok){
              return response.json();
        } else {
            console.log('Error', error)
        }
        })
        .then(data => {
            //function or code here
        })
};