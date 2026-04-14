// Store posts (no localStorage)
let posts = [];

// Add Post
function addPost() {
  let input = document.getElementById("postInput").value;

  if (input === "") return;

  let post = {
    text: input,
    likes: 0,
    comments: []
  };

  posts.unshift(post); // add at top
  displayPosts();
}

// Display Posts
function displayPosts() {
  let feed = document.getElementById("feed");
  feed.innerHTML = "";

  posts.forEach((post, index) => {
    feed.innerHTML += `
      <div class="post">
        <p>${post.text}</p>
        
        ❤️ ${post.likes}
        <button onclick="likePost(${index})">Like</button>
        <button onclick="deletePost(${index})">Delete</button>

        <br><br>
        <input type="text" id="comment-${index}" placeholder="Add comment">
        <button onclick="addComment(${index})">Comment</button>

        <div>
          ${post.comments.map(c => `<p class="comment">💬 ${c}</p>`).join("")}
        </div>
      </div>
    `;
  });
}

// Like Post
function likePost(index) {
  posts[index].likes++;
  displayPosts();
}

// Delete Post
function deletePost(index) {
  posts.splice(index, 1);
  displayPosts();
}

// Add Comment
function addComment(index) {
  let commentInput = document.getElementById(`comment-${index}`);
  let comment = commentInput.value;

  if (comment === "") return;

  posts[index].comments.push(comment);
  displayPosts();
}