// Sample data
let users = ['user1', 'user2', 'user3'];  // List of users to follow (not necessary for global posts)
let posts = [];  // All posts will be stored here

// DOM elements
const postContentInput = document.getElementById('post-content');
const postButton = document.getElementById('post-button');
const postsContainer = document.getElementById('posts');

// Event listeners
postButton.addEventListener('click', postContent);

// Function to create a post
function postContent() {
    const content = postContentInput.value.trim();
    if (content !== '') {
        const post = {
            user: 'user1', // Logged-in user (for simplicity, using 'user1' here)
            content: content
        };
        posts.push(post);
        displayPosts();
        postContentInput.value = '';  // Clear input
    }
}

// Function to display all posts (global feed)
function displayPosts() {
    postsContainer.innerHTML = '';  // Clear the current feed

    if (posts.length === 0) {
        postsContainer.innerHTML = '<p>No posts yet.</p>';
        return;
    }

    // Display all posts
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `<strong>${post.user}</strong>: ${post.content}`;
        postsContainer.appendChild(postElement);
    });
}
