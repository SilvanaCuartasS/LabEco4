
let users = [];

const getUser = (req, res) => {
res.json(users);
}

const createUser = (req, res) => {
    const { image,user, name, password } = req.body;
  
    if (!user || !name || !password) {
      return res.status(400).json({ message: "Ops, faltan datos" });
    }
    const newUser = { image,user, name, password };
    console.log("Super el registro:", newUser);
  
    users.push(newUser);
    res.json({ message: "Usuario registrado" });
}

const loginUser = (req, res) => {
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
}

const getPostUser = (req, res) => {
    res.json(post);
}


let post = [];

const createPost = (req, res) => {
    const {title, image ,description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Ops, faltan datos" });
  }
  const newpost = { title, image, description };
  console.log("Super el registro:", newpost);

  post.push(newpost);
  res.json({ message: "post creado con exito" });
}

module.exports = {
    getUser,
    createUser,
    loginUser,
    getPostUser,
    createPost
}