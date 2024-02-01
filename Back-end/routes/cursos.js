const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const db = require('../database/cursos');

// Configuración de multer para almacenar archivos con extensión original
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.get('/', (req, res) => {
    const cursos = db.getCursos();
    res.json(cursos);
});

router.post('/', upload.single('imagen'), (req, res) => {
    const newCurso = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        imagen: req.file ? req.file.path : ''
    };
    db.addCurso(newCurso);
    res.json(db.getCursos());
});

module.exports = router;
