const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.post('/cifrar', (req, res) => {
    const mensaje = req.body.mensaje;
    const mensajeCifrado = cifrarMensaje(mensaje); 

    res.json({ mensajeCifrado });
});


function cifrarMensaje(mensaje) {
    return mensaje.split('').reverse().join('');
}


app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});