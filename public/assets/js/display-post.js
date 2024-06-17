const postInfo = document.getElementById('display-post-data');
const pageHeading = document.getElementById('page-heading');
const htmlPage = document.getElementById('html');
const cssPage = document.getElementById('css');
const jsPage = document.getElementById('js');
const apiPage = document.getElementById('api');
const nodePage = document.getElementById('node');
const expressPage = document.getElementById('express');
const sqlPage = document.getElementById('sql');
const nosqlPage = document.getElementById('nosql');
const reactPage = document.getElementById('react');
const mernPage = document.getElementById('mern');
const networkingPage = document.getElementById('networking');
const resourcesPage = document.getElementById('resources');


//GET request method for the posts
const getPosts = async () => {
    const response = await fetch('/api/posts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json();
    return data;
};

//Reorders the post data so the newest is displayed first
const reorderedData = async () => {
    const data = await getPosts()
    console.log(data);
    const reverseData = data.reverse()
    return reverseData;
};

//The markdown layout for the displayed posts
const postMarkdown = (data) => {
    const markdown = `
    <div class="display-post card border-light mb-3">
        <div class="card-header">
            <div>${data.Profile.username}</div>
            <div>${data.date_of_post}</div>
            <div>${data.topic}</div>
        </div>
        <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text">${data.message}</p>
        </div>
    </div> 
    `;
    return markdown;
};

//Displays all posts to the homepage
const postToHomepage = async () => {
    const data = await reorderedData();
    console.log(data)
    let homepage = '';
    await data.forEach((e) => {
        homepage += postMarkdown(e);
    });
    postInfo.innerHTML = homepage;
};

postToHomepage();

//Page is displayed with posts from the topic the user clicks on
window.onload = function() {
    htmlPage.onclick = async function() {communityData('HTML')};
    cssPage.onclick = async function() {communityData('CSS')};
    jsPage.onclick = async function() {communityData('JavaScipt')};
    apiPage.onclick = async function() {communityData('APIs')};
    nodePage.onclick = async function() {communityData('Node.js')};
    expressPage.onclick = async function() {communityData('Express')};
    sqlPage.onclick = async function() {communityData('SQL')};
    nosqlPage.onclick = async function() {communityData('NoSQL')};
    reactPage.onclick = async function() {communityData('React')};
    mernPage.onclick = async function() {communityData('MERN')};
    networkingPage.onclick = async function() {communityData('Networking')};
    resourcesPage.onclick = async function() {communityData('Resources')};
}

async function communityData(community) {
    const data = await reorderedData();
    pageHeading.innerText = `${community}`;
    data.forEach((e) => {
        if(community === e.topic) {
        postInfo.innerHTML += postMarkdown(e);
        } else {
            postInfo.innerHTML = '';
        }
    })
};