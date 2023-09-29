const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000;

// Configura la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost', // Cambia esto según la configuración de tu servidor MySQL
  user: 'root',
  password: '1234',
  database: 'biblioteca',
});

// Conecta a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

// Rutas para interactuar con la base de datos
app.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, result) => {
    if (err) {
      console.error('Error al obtener usuarios:', err);
      res.status(500).json({ error: 'Error al obtener usuarios' });
    } else {
      res.json(result);
    }
  });
});

// Escucha en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
