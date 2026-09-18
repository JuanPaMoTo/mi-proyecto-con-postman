const express = require('express');
const path = require('path');
const fs = require('fs');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

app.use(express.static(process.cwd()));

app.use('/api', userRoutes);

module.exports = app;