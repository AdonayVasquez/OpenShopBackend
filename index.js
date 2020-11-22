const express = require('express');
const cors = require('cors');

const { bddConexion } = require('./database/config.js');

//  Crear el servidor
const app = express();

// Configurar CORS
app.use( cors() );

// Base de Datos
bddConexion();

//  Credenciales de BDD: 
//  Usuario: bdd_usuario
//  Password: admin123

app.get( '/', (req, res) =>{
    res.json({
        ok: true,
        msg: 'Hola mundo'
    });
});

app.listen( 3000, () => {
    console.log('Servidor corriendo');
});