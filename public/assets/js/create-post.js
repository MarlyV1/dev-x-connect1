let title = document.querySelector('.title');
let textarea = document.querySelector('.textarea');
let radioSelected = '';
const submitBtn = document.querySelector('.submit-post');

const dropdown = document.querySelector('.dropdown');
const twoPollChoices = document.querySelector('.two-poll-choices');
const pollChoiceThree = document.querySelector('.poll-choice-three');
const pollChoiceFour = document.querySelector('.poll-choice-four');


const pollTitle = document.querySelector('.poll-title-input');
const optOneInput = document.querySelector('.opt-one-text');
const optTwoInput = document.querySelector('.opt-two-text');
const optThreeInput = document.querySelector('.opt-three-text');
const optFourInput = document.querySelector('.opt-four-text');
const pollBtn = document.querySelector('.submit-poll');


//POST request method for the posts 
const makePost = (newPost) => {
  fetch('/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  });
};

//Delete request method for a post
const deletePost = async (id) => {
  const response = await fetch(`/api/posts/${id}`, { 
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json();
  return data;
}

//GET request method for the poll
const getPolls = async () => {
  const response = await fetch('/api/polls', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json();
  dataStringify = JSON.stringify(data)
  return dataStringify;
};

//POST request method for the poll
const createPoll = (poll) => {
  fetch('/api/polls', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(poll)
  });
};

//Delete request method for a poll
const deletePoll = async (id) => {
  const response = await fetch(`/api/polls/${id}`, { 
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json();
  return data;
}

//Takes user's input to create a new post
const handleNewPost = async () => {
  const newPost = {
    title: title.value,
    message: textarea.value,
    topic: radioSelected
  };
  const data = await makePost(newPost);
  return data;
};

//Takes user's input and creates a new poll 
const handleNewPoll = async () => {
  const newPoll = {
    poll_title: pollTitle.value,
    poll_option_one: optOneInput.value,
    poll_option_two: optTwoInput.value,
    poll_option_three: optThreeInput.value,
    poll_option_four: optFourInput.value,
    topic: radioSelected
  }
  const data = await createPoll(newPoll);
  return data;
};

//Displays the posts
const displayPosts = async() => {
  const data = await getPost();
  console.log(data);
  return data;
};

//Dropdown that will display the amount of poll options
const dropdownOption = (value) => {
  if(value === 2) {
    twoPollChoices.style.display ='block';
    pollChoiceThree.style.display ='none';
    pollChoiceFour.style.display ='none';
  } else if(value === 3) {
    twoPollChoices.style.display ='block';
    pollChoiceThree.style.display ='block';
    pollChoiceFour.style.display ='none';
  } else if(value === 4) {
    twoPollChoices.style.display ='block';
    pollChoiceThree.style.display ='block';
    pollChoiceFour.style.display ='block';
  } else {
    twoPollChoices.style.display ='none';
    pollChoiceThree.style.display ='none';
    pollChoiceFour.style.display ='none';
  }
};

//Get the value of the selected community radio button
const radioValue = () => {
  if(document.getElementById('HTML').checked || document.getElementById('poll-HTML').checked) {
     console.log('html')
     radioSelected = 'HTML';
   }else if(document.getElementById('CSS').checked || document.getElementById('poll-CSS').checked) {
     console.log('CSS')
     radioSelected = 'CSS';
   }else if(document.getElementById('JavaScript').checked || document.getElementById('poll-JavaScript').checked) {
     console.log('JavaScript')
     radioSelected = 'JavaScript';
   }else if(document.getElementById('APIs').checked || document.getElementById('poll-APIs').checked) {
     console.log('APIs')
     radioSelected = 'APIs';
   }else if(document.getElementById('Node').checked || document.getElementById('poll-Node').checked) {
     console.log('Node')
     radioSelected = 'Node';
   }else if(document.getElementById('Express').checked || document.getElementById('poll-Express').checked) {
     console.log('Express')
     radioSelected = 'Express';
   }else if(document.getElementById('SQL').checked || document.getElementById('poll-SQL').checked) {
     console.log('SQL')
     radioSelected = 'SQL';
   }else if(document.getElementById('NoSQL').checked || document.getElementById('poll-NoSQL').checked) {
     console.log('NoSQL')
     radioSelected = 'NoSQL';
   }else if(document.getElementById('React').checked || document.getElementById('poll-React').checked) {
     console.log('React')
     radioSelected = 'React';
   }else if(document.getElementById('MERN').checked || document.getElementById('poll-MERN').checked) {
     console.log('MERN')
     radioSelected = 'MERN';
   }else if(document.getElementById('Resources').checked || document.getElementById('poll-Resources').checked) {
    console.log('Resources')
    radioSelected = 'Resources';
   }else if(document.getElementById('Networking').checked || document.getElementById('poll-Networking').checked) {
    console.log('Networking')
    radioSelected = 'Networking';
   }
   return radioSelected;
 };


//Event listener for the post submit button
submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const data = await radioValue();
  handleNewPost();
  console.log(data)
  document.location.href = 'homepage.html';
});

//Event listener for the poll dropdown button
dropdown.addEventListener('change', (e) => {
  e.preventDefault;
  dropdownOption(parseInt(dropdown.value));
});

//Event listener for the poll submit button
pollBtn.addEventListener('click', (e) => {
  e.preventDefault;
  radioValue();
  handleNewPoll();
  document.location.href = 'homepage.html';
});