const express = require('express');
const cors = require('cors');
const path = require('path');

const userRouter = require('./server/routes/users.routes.js');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/app1', express.static(path.join(__dirname, 'app1')));
app.use('/app2', express.static(path.join(__dirname, 'app2')));


app.use("/", userRouter)

// Iniciar el servidor
app.listen(5051, () => console.log("Servidor corriendo en http://localhost:5051"));
