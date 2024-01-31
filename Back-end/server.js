const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "040500",
    database: "signup"
});

app.post('/signup', (req, res) =>{
    const { name, email, password } = req.body;
    const sql = "INSERT INTO login (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, password], (err, results) => {
        if (err) {
            console.error("Error al realizar la consulta en la base de datos:", err);
            return res.status(1).json({ message: "Error al crear cuenta" });
        } else {
            console.log("Datos insertados correctamente en la base de datos:", results);
            return res.status(1).json({ message: "Cuenta creada exitosamente" });
        }
    });
});



db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

app.post('/login', (req, res) =>{
    const sql = "SELECT * FROM login WHERE `email` =? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, results) => {
        if (err) {
            console.error("Error al realizar la consulta en la base de datos:", err);
            return res.status(500).json({ message: "Error al iniciar sesión" });
        }

        if (results.length > 0) {
            return res.json({ message: "Success" }); // Usuario encontrado
        } else {
            return res.status(401).json({ message: "Se encontro el usuario" }); // Usuario no encontrado
        }
    });
});


app.listen(8081, ()=>{
    console.log("listening");
})