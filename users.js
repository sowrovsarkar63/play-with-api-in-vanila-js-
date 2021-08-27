// load user from api
function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}

function displayUsers(data) {
  const ul = document.getElementById("users");
  for (const users of data) {
    const li = document.createElement("li");
    li.innerHTML = `User name is ${users.name} and user email is ${users.email}`;
    ul.appendChild(li);
  }
}
