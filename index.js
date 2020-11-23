const express = require('express');
const cors = require('cors');

const { bddConexion } = require('./database/config.js');

//  Crear el servidor
const app = express();

// Configurar CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );

// Base de Datos
bddConexion();

app.use( '/api/usuarios', require('./routes/usuarios-routes') );


app.listen( 3000, () => {
    console.log('Servidor corriendo');
});