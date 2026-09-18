const express = require('express');
const path = require('path');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

// Sirve index.html, src/main.js, etc. desde la raíz del proyecto
app.use(express.static(path.join(__dirname, '..')));

// Rutas de la API
app.use('/api', userRoutes);

module.exports = app;