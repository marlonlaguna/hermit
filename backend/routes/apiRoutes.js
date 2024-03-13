// routes.js
// routes.js
const express = require('express');
const router = express.Router();
const itemController = require('../controller/userController'); // Importa el controlador

// Ruta de ejemplo
router.get('/', (req, res) => {
  res.json({ message: '¡Hola, esta es tu API!' });
});

// Ruta para obtener la lista de elementos utilizando el controlador
router.get('/api/items', itemController.getAllItems);

module.exports = router;