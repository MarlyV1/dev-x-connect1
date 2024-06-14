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


//Formatting for the Quill text editor
const toolbarOptions = [
  [{ 'header': [1, 2, false] }],
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  ['link', 'image'],
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'color': [] }, { 'background': [] }],
  ['clean']
];

const quill = new Quill('#editor', {
  modules: {
    toolbar: toolbarOptions
  },
  theme: 'snow'
});


//POST request method 
const makePost = (newPost) => {
  fetch('/api/posts', {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  });
};

//GET request method for the poll
const getPolls = async () => {
  const response = await fetch('/api/polls', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json();
  return data;
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

//Takes user's input to create the new post
const handleNewPost = async () => {
  const newPost = {
    post_name: title,
    message: textarea
  };
  const data = await makePost(newPost);
  return data;
};

//Takes user's input and creates a new poll 
const handleNewPoll = async () => {
  const newPoll = {
    poll_title: pollTitle.value,
    poll_option_one: optTwoInput.value,
    poll_option_two: optTwoInput.value,
    poll_option_three: optThreeInput.value,
    poll_option_four: optFourInput.value,
  }
  const data = await createPoll(newPoll);
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
   }
   return radioSelected;
 };


//Event listener for the post submit button
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  handleNewPost();
});

//Event listener for the poll dropdown button
dropdown.addEventListener('change', (e) => {
  e.preventDefault;
  dropdownOption(parseInt(dropdown.value));
});

//Event listener for the poll submit button
pollBtn.addEventListener('click', (e) => {
  e.preventDefault;
  handleNewPoll();
});