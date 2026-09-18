const express = require('express');
const path = require('path');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

// process.cwd() es más confiable que __dirname dentro de una función serverless en Vercel
app.use(express.static(process.cwd()));

// Rutas de la API
app.use('/api', userRoutes);

module.exports = app;