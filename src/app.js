const express = require('express');
const path = require('path');
const fs = require('fs');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

// Ruta temporal SOLO para diagnosticar qué archivos ve Vercel
app.get('/api/debug-files', (req, res) => {
  try {
    const root = process.cwd();
    const listar = (dir) =>
      fs.readdirSync(dir, { withFileTypes: true }).map((d) => (d.isDirectory() ? d.name + '/' : d.name));
    res.json({
      cwd: root,
      raiz: listar(root),
      src: fs.existsSync(path.join(root, 'src')) ? listar(path.join(root, 'src')) : 'NO EXISTE src en cwd'
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.use(express.static(process.cwd()));

app.use('/api', userRoutes);

module.exports = app;