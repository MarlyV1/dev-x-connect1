let title = document.querySelector('.title');
let textarea = document.querySelector('.textarea');
const submitBtn = document.querySelector('.submit-post');

const dropdown = document.querySelector('.dropdown');
const twoPollChoices = document.querySelector('.two-poll-choices');
const pollChoiceThree = document.querySelector('.poll-choice-three');
const pollChoiceFour = document.querySelector('.poll-choice-four');


const pollTitle = document.querySelector('.poll-title-input');
const optOneInput = document.querySelector('.opt-one-text');
const optTwoInput = document.querySelector('.opt-two-text');
const optTheeInput = document.querySelector('.opt-three-text');
const optFourInput = document.querySelector('.opt-four-text');


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

//Event listener added to the submit button
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  handleNewPost();
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
}

//POST request method for the poll
const createPoll = (poll) => {
  fetch('/api/polls', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(poll)
  });
}

//Takes user's input to create the new post
const handleNewPost = async () => {
  const newPost = {
    post_name: title,
    message: textarea
  };
  const data = await makePost(newPost);
  return data;
}

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
}

dropdown.addEventListener('change', (e) => {
  e.preventDefault;
  dropdownOption(parseInt(dropdown.value));
})