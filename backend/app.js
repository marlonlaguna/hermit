// app.js
const express = require('express');
const routes = require('./routes/apiRoutes'); // Importa el archivo de rutas
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Usa las rutas en tu aplicación
app.use('/', routes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});