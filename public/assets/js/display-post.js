const homepage = document.getElementById('display-post-data');

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
            <div>${data.profile_id}</div>
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
    const data = reorderedData();
    await data.forEach((e) => {
        homepage.innerHTML += postMarkdown(e);
    });
};

//Displays posts to a specific community
const postToCommunities = (data, topic, insert) => {
    if(data.topic === topic) {
        data.forEach((e) => {
        insert.innerHTML += postMarkdown(e);
        })
    }
};

//Display the data to a certain page 
function specificCommunities() {
    const data = reorderedData();
    let pageInsert = '';
    let topic = '';

    if (data.topic === "HTM") {
        pageInsert = document.getElementById('display-post-data'); //page to insert the data
        topic = "HTML";
    } else if (data.topic === "CS") {
        pageInsert = document.getElementById('display-post-data');
        topic = "CSS";
    } else if (data.topic === "JavaScript") {
        pageInsert = document.getElementById('.display-post-data');
        topic = "JavaScript";
    } else if (data.topic === "APIs") {
        pageInsert = document.getElementById('.display-post-data');
        topic = "APIs";
    } else if (data.topic === "Node.") {
        pageInsert = document.getElementById('.display-post-data');
        topic = "Node";
    } else if (data.topic === "Express.") {
        pageInsert = document.getElementById('display-post-data');
        topic = "Express";
    } else if (data.topic === "SQL.") {
        pageInsert = document.getElementById('display-post-data');
        topic = "SQL";
    } else if (data.topic === "NoSQL.") {
        pageInsert = document.getElementById('display-post-data');
        topic = "NoSQL";
    } else if (data.topic === "React.") {
        pageInsert = document.getElementById('display-post-data');
        topic = "React";
    } else {
        pageInsert = document.getElementById('display-post-data');
        topic = "MERN";
    }
    postToCommunities(data, topic, pageInsert);
};

module.exports = {
    postToHomepage,
    specificCommunities
};