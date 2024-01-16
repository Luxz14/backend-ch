const express = require("express");

const app = express();


//Endpoint
app.get('/bienvenida', (req, res) => {
    const htmlRespuesta = `<p style="color: blue">Bienvenido!</p>`

    res.send(htmlRespuesta);
})

//Obtener un usuario
app.get('/usuarios', (req, res) => {
    const usuario = {
        nombre: 'Valentin',
        apellido: 'Lucero',
        correo: 'ValenLucero@email.com' 
    };


    res.json(usuario);
})

//Obtener el nombre y el ID
app.get("/parametro/:nombre", (req, res) => {
    console.log(req.params.nombre);

    res.send(`Bienvenido usuario ${req.params.nombre}`)
})


//Obtener los usuarios
const usuarios = [
    {id: 1, nombre: "Juan", apellido:"Carlos"},
    {id: 2, nombre: "Valentin", apellido:"Lucero"},
    {id: 3, nombre: "Sara", apellido: "Lucero"}
]

app.get("/", (req, res) => {
    res.send(usuarios);
})

app.get("/:userId", (req, res) => {
    const idUsuario = req.params.userId;
    let usuario = usuarios.find((usuario) => usuario.id === idUsuario);

    if(!usuario) return res.send({error: "Usuario no encontrado"});

    res.send(usuario)
})



app.listen(8080, () => console.log("Servidor con Express"));