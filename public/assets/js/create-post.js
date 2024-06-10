let title = document.querySelector('.title');
let textarea = document.querySelector('.textarea');
const submitBtn = document.querySelector('.submit-post');

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

//Takes user's input to create the new post
const handleNewPost = async () => {
  const newPost = {
    post_name: title,
    message: textarea
  };
  const data = await makePost(newPost);
  return data;
}