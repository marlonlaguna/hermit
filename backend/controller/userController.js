const db = require('../dbconfig'); // Importa la configuración de la conexión

async function getAllItems(req, res) {
  try {
    const [rows, fields] = await db.execute('SELECT * FROM Usuarios');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener elementos:', error);
    res.status(500).json({ error: 'Error al obtener elementos.' });
  }
}

module.exports = { getAllItems };