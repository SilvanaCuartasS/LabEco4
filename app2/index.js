//Botones
document.getElementById("usersList-btn").addEventListener("click", getUsers);
document.getElementById("postList-btn").addEventListener("click", getUsers);

//divs
const classList = document.getElementById("classList");
const postList = document.getElementById("postList");

function getUsers() {
  fetch("http://localhost:5051/users")
    .then((response) => response.json())
    .then((data) => console.log("get response", data))
    .catch((error) => console.error("Error:", error));
}
