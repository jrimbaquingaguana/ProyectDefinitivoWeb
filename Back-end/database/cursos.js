const fs = require('fs');
const path = require('path');

const cursosFilePath = path.join(__dirname, 'cursos.json');

function getCursos() {
    try {
        const data = fs.readFileSync(cursosFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error al leer el archivo de cursos:', error);
        return [];
    }
}

function addCurso(nuevoCurso) {
    try {
        const cursos = getCursos();
        nuevoCurso.id = cursos.length + 1;
        cursos.push(nuevoCurso);
        fs.writeFileSync(cursosFilePath, JSON.stringify(cursos, null, 2));
        console.log('Curso agregado correctamente.');
    } catch (error) {
        console.error('Error al agregar el curso:', error);
    }
}

module.exports = { getCursos, addCurso };
