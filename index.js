const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use("/app1", express.static(path.join(__dirname, "app1")));
app.use("/app2", express.static(path.join(__dirname, "app2")));

let users = [];

app.post("/registro", (req, res) => {
  const { user, nombre, password } = req.body;
});

app.get("/users", (req, res) => {
  res.send(users);
});

if (!user || !nombre || !password) {
  return res.status(400).send("Faltan datos requeridos");
}


app.listen(5051);
