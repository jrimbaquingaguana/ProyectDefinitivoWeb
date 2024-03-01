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
    const sql = "INSERT INTO login (`name`, `email`,`password`,`rol`) VALUES (?, ?, ? , 'estudiante')";
    db.query(sql, [name, email, password], (err, results) => {
        if (err) {
            console.error("Error al realizar la consulta en la base de datos:", err);
            return res.status(500).json({ message: "Error al crear cuenta" });
        } else {
            console.log("Datos insertados correctamente en la base de datos:", results);
            return res.status(200).json({ message: "Cuenta creada exitosamente" });
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

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` =? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, results) => {
        if (err) {
            console.error("Error al realizar la consulta en la base de datos:", err);
            return res.status(500).json({ message: "Error al iniciar sesión" });
        }

        if (results.length > 0) {
            // Si el usuario inicia sesión correctamente, se envía el rol del usuario en la respuesta
            const user = results[0];
            res.status(200).json({
                message: 'Success',
                user: {
                    email: user.email,
                    rol: user.rol // Aquí se incluye el rol del usuario en la respuesta
                }
            });
        } else {
            // Si el inicio de sesión falla, se envía un mensaje de error
            return res.status(401).json({ message: "Credenciales incorrectas" });
        }
    });
});



app.listen(8081, ()=>{
    console.log("listening");
})
