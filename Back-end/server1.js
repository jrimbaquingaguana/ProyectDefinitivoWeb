const express = require('express');
const app = express();
const cors = require('cors');
const cursosRouter = require('./routes/cursos');

app.use(cors());
app.use(express.json());
app.use('/api/cursos', cursosRouter);
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
