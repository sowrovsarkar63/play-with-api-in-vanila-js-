function getPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => loadPost(data));
}

function loadPost(data) {
  const postContainer = document.getElementById("posts");
  for (const posts of data) {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
    <h1>${posts.title}</h1>
    <p>${posts.body}</p>
    `;
    postContainer.appendChild(div);
  }
}
getPost();
