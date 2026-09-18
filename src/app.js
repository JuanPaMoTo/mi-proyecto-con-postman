const express = require('express');
const path = require('path');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

// Servir archivos estáticos (index.html, main.js, etc.)
app.use(express.static(path.join(__dirname, '../')));

// Rutas de la API
app.use('/api', userRoutes);

// Ruta de respaldo para entregar index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

module.exports = app;