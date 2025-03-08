//divs

document.getElementById("registro-button").addEventListener("click", registroUsuario);

const userInput = document.getElementById("registro-user");
const nombreInput = document.getElementById("registro-nombre");
const passwordInput = document.getElementById("registro-password");

document.getElementById("inicio-buttons").style.display = "none";
document.getElementById("pantalla-registro").style.display = "none";
document.getElementById("pantalla-login").style.display = "none";
document.getElementById("create-post").style.display = "none";

function registroUsuario() {
  //Envío de datos al servidor
fetch("http://localhost:5051/registro", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    user: userInput.value,
    nombre: nombreInput.value,
    password: passwordInput.value,
  }),
})
.then((response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  // Si la respuesta está ok, procesa los datos como JSON
  return response.json();
})
.then((data) => {
  console.log("Success:", data);
})
.catch((error) => {
  console.error("Error:", error);
});
}



// function getUsers() {
//   fetch("http://localhost:5051/users")
//     .then((response) => response.json())
//     .then((data) => console.log("get response", data))
//     .catch((error) => console.error("Error:", error));
// }
