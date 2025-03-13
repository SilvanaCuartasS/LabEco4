const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/app1', express.static(path.join(__dirname, 'app1')));
app.use('/app2', express.static(path.join(__dirname, 'app2')));

let users = [];

app.get("/users", (req, res) => {
  res.json(users);
});


app.post("/registro", (req, res) => {
  const { image,user, name, password } = req.body;

  if (!user || !name || !password) {
    return res.status(400).json({ message: "Ops, faltan datos" });
  }
  const newUser = { image,user, name, password };
  console.log("Super el registro:", newUser);

  users.push(newUser);
  res.json({ message: "Usuario registrado" });
});



//loguin
app.post("/user-login", (req, res) => {
  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(400).json({ message: "Ops, faltan datos", success: false });
  }

  const foundUser = users.find(u => u.user === user && u.password === password);

  if (!foundUser) {
    return res.status(401).json({ message: "Usuario no existe o contraseña incorrecta", success: false });
  }

  console.log("Inicio de sesión exitoso:", foundUser);
  res.json({ message: "Inicio de sesión exitoso", success: true });
});

app.get("/post", (req, res) => {
  res.json(post);
});

// crear post
let post = [];
app.post("/create-post", (req, res) => {
  const {title, image ,description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Ops, faltan datos" });
  }
  const newpost = { title, image, description };
  console.log("Super el registro:", newpost);

  post.push(newpost);
  res.json({ message: "post creado con exito" });

});

// Iniciar el servidor
app.listen(5051, () => console.log("Servidor corriendo en http://localhost:5051"));
