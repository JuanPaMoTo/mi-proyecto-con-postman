const express = require('express');
const path = require('path');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

// Servir la carpeta raíz para que reconozca /src/main.js
app.use(express.static(process.cwd()));

// Rutas de la API
app.use('/api', userRoutes);

// Ruta para entregar el index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'index.html'));
});

module.exports = app;