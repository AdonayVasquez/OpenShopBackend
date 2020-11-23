const { Router } = require('express');
const { getUsuarios, postUsuarios } = require('../controllers/usuarios-controller');

const router = Router();

// Ruta: /api/usuarios 

router.get( '/', getUsuarios);

router.post( '/', postUsuarios);


module.exports = router;