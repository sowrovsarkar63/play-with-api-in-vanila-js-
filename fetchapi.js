// load fake data using fetch
function loadData() {
  const showTitle = document.getElementById("title");
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => (showTitle.innerText = json.title));
}
