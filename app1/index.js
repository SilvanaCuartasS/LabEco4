const secciones = ["inicio", "pantalla-registro", "pantalla-login", "create-post"];
    function mostrarPantalla(idPantalla) {
        secciones.forEach(id => {
            document.getElementById(id).style.display = (id === idPantalla) ? "block" : "none";
        });
    }

document.addEventListener("DOMContentLoaded", function () {
    mostrarPantalla("inicio"); // Mostrar solo la pantalla de inicio al cargar la página
    // Botones de navegación
    document.getElementById("inicio-registro").addEventListener("click", () => mostrarPantalla("pantalla-registro"));
    document.getElementById("inicio-login").addEventListener("click", () => mostrarPantalla("pantalla-login"));
    // Volver a la pantalla de inicio desde cualquier pantalla
    document.getElementById("volver-inicio-registro").addEventListener("click", () => mostrarPantalla("inicio"));
    document.getElementById("volver-inicio-login").addEventListener("click", () => mostrarPantalla("inicio"));
    document.getElementById("volver-inicio-post").addEventListener("click", () => mostrarPantalla("inicio"));
});


//registro
const imageRegistroInput = document.getElementById("image-registro")
const userInput = document.getElementById("user-registro")
const nameInput = document.getElementById("name-registro")
const passwordInput = document.getElementById("password-registro")
document.getElementById("registrar").addEventListener("click",registroUsuarios);


function registroUsuarios () 
{
    fetch ("http://localhost:5051/registro/" ,{
        method: "POST",
        headers: {  "Content-Type": "application/json"},
        body: JSON.stringify({
            image:imageRegistroInput.value,
          user: userInput.value,
          name: nameInput.value,
          password: passwordInput.value })
        })
         .then((response)=> response.json())
         .then((data) => {
            alert(data.message);
            mostrarPantalla("inicio");
          })
          .catch((error) => console.error("Error:", error));

}



// login usuarios
document.getElementById("enviar").addEventListener("click",loginUsuarios);
function loginUsuarios()
{
    fetch("http://localhost:5051/user-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: userInput.value,
          password: passwordInput.value,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Respuesta del servidor:", data); // Para depuración
    
          if (data.success) {
            alert(data.message);
            mostrarPantalla("create-post"); // Luego redirige
          } else {
            alert(data.message); // Si falla el login, muestra error
          }
        })
        .catch((error) => console.error("Error:", error));
}
const titleInput = document.getElementById("title")
const imageInput = document.getElementById("image")
const descriptionInput = document.getElementById("description")

//crear post
document.getElementById("create").addEventListener("click",Crearpost);

function Crearpost(){
fetch("http://localhost:5051/create-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title:titleInput.value,
          image: imageInput.value,
          description: descriptionInput.value
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Respuesta del servidor:", data);
        })


}