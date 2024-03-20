const express = require('express');
const app = express();


// Importar el pool de conexiones
const pool = require('../backend/dbconfig'); //  donde se tiene configurado el pool de conexiones

// Manejar la solicitud POST para verificar la existencia de datos en la base de datos
app.post('envio.js', (req, res) => {
  // Recibir los datos del formulario desde la solicitud
  const { NumCuenta, Contraseña } = req.body;

  // Ejecutar una consulta SQL para insertar los datos en la base de datos
  pool.query('SELECT * FROM usuarios WHERE NumCuenta = ? AND Contraseña = ?', [NumCuenta, Contraseña], (error, results, fields) => {
    if (error) {
      console.error('Error al verificar los datos en la base de datos:', error);
      res.status(500).send('Error interno del servidor');
      return;
    }

    // Verificar si se encontraron resultados en la consulta
    if (results.length > 0) {
      res.redirect('/otra-pagina');
    } else {
      // Si no se encontraron resultados, el nombre no existe en la base de datos
      res.redirect('index.html');
    }
  });
});
