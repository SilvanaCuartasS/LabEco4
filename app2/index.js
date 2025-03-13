document.getElementById("usersList-btn").addEventListener("click", getUsers);
document.getElementById("postList-btn").addEventListener("click",getPost);
const userList_div = document.getElementById("usersList");
const postList_div = document.getElementById("postList");

function getUsers() {
  fetch("http://localhost:5051/users")
    .then((response) => response.json())
    .then((data) => {
      console.log("get response", data)
      renderUsers(data);
    })
    .catch((error) => console.error("Error:", error));
}

function getPost() {
  fetch("http://localhost:5051/post")
    .then((response) => response.json())
    .then((data) => {
      console.log("get response", data)
      renderPost(data);
    })
    .catch((error) => console.error("Error:", error));
}

const renderUsers = (data) => {
  userList_div.innerHTML = "";

  data.forEach((user) => {
      const cardUser = document.createElement("div");
      cardUser.innerHTML = `
      <img src="${user.image}" alt="${user.name}">
        <h3>${user.user}</h3>
        <p>${user.name}</p>
      `;
      userList_div.appendChild(cardUser);
  });
}

const renderPost = (data) => {
  postList_div.innerHTML = "";

  data.forEach((post) => {
      const cardUser = document.createElement("div");
      cardUser.innerHTML = `
      <div>
      <img src="${post.image}" alt="${post.title}">
      </div>
        <h3>${post.title}</h3>
        <p>${post.description}</p>
      `;
      postList_div.appendChild(cardUser);
  });
}