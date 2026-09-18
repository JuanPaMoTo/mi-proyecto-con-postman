const express = require('express');
const path = require('path');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

// Servir archivos estáticos (index.html, main.js, etc.) desde la raíz
app.use(express.static(path.join(process.cwd())));

// Rutas de la API
app.use('/api', userRoutes);

// Ruta principal para entregar index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'index.html'));
});

module.exports = app;