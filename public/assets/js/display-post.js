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

const htmlSm = document.getElementById('s-html');
const cssSm = document.getElementById('s-css');
const jsSm = document.getElementById('s-js');
const apiSm = document.getElementById('s-api');
const nodeSm = document.getElementById('s-node');
const expressSm = document.getElementById('s-express');
const sqlSm = document.getElementById('s-sql');
const nosqlSm = document.getElementById('s-nosql');
const reactSm = document.getElementById('s-react');
const mernSm = document.getElementById('s-mern');
const networkingSm = document.getElementById('s-networking');
const resourcesSm = document.getElementById('s-resources');

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
    let username ='';
    if(data.Profile === null){
        username = 'BTCMP1212'
    } else {
        username = data.Profile.username
    }
    const markdown = `
    <div class="display-post card border-light mb-3">
        <div class="card-header">
            <div>${username}</div>
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
    jsPage.onclick = async function() {communityData('JavaScript')};
    apiPage.onclick = async function() {communityData('APIs')};
    nodePage.onclick = async function() {communityData('Node.js')};
    expressPage.onclick = async function() {communityData('Express')};
    sqlPage.onclick = async function() {communityData('SQL')};
    nosqlPage.onclick = async function() {communityData('NoSQL')};
    reactPage.onclick = async function() {communityData('React')};
    mernPage.onclick = async function() {communityData('MERN')};
    networkingPage.onclick = function() {sources('Networking')};
    resourcesPage.onclick = function() {sources('Resources')};

    htmlSm.onclick = async function() {communityData('HTML')};
    cssSm.onclick = async function() {communityData('CSS')};
    jsSm.onclick = async function() {communityData('JavaScript')};
    apiSm.onclick = async function() {communityData('APIs')};
    nodeSm.onclick = async function() {communityData('Node.js')};
    expressSm.onclick = async function() {communityData('Express')};
    sqlSm.onclick = async function() {communityData('SQL')};
    nosqlSm.onclick = async function() {communityData('NoSQL')};
    reactSm.onclick = async function() {communityData('React')};
    mernSm.onclick = async function() {communityData('MERN')};
    networkingSm.onclick = function() {sources('Networking')};
    resourcesSm.onclick = function() {sources('Resources')};
}

async function communityData(community) {
    postInfo.innerHTML = '';
    const data = await reorderedData();
    console.log(data)
    pageHeading.innerText = `${community}`;
    let html = '';
    data.forEach((e) => {
        if(community === e.topic) {
            console.log(true);
            html += postMarkdown(e);
        }
    });
    postInfo.innerHTML = html;
};

// Displays info for the networking and resources page
function sources(page) {
    //Makes sure the page is cleared of data relating to another page before new data is added
    postInfo.innerHTML = '';
    pageHeading.innerText = `${page}`;
    // postInfo.innerHTML =
}