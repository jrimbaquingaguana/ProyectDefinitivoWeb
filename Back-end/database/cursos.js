const fs = require('fs');
const path = require('path');

const cursosFilePath = path.join(__dirname, 'cursos.json');

function getCursos() {
    const data = fs.readFileSync(cursosFilePath, 'utf-8');
    return JSON.parse(data);
}

function addCurso(nuevoCurso) {
    const cursos = getCursos();
    nuevoCurso.id = cursos.length + 1;
    cursos.push(nuevoCurso);
    fs.writeFileSync(cursosFilePath, JSON.stringify(cursos, null, 2));
}

module.exports = { getCursos, addCurso };
