const express = require('express');
const cors = require('cors');
const { colors, gradients } = require('./data');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Endpoint para a raiz da API
app.get('/', (req, res) => {
  res.send('Bem-vindo à API de Cores e Gradientes! Use os endpoints /api/colors ou /api/gradients.');
});

// Endpoint para listar todas as cores
app.get('/api/colors', (req, res) => {
  res.json(colors);
});

// Endpoint para listar todos os gradientes
app.get('/api/gradients', (req, res) => {
  res.json(gradients);
});

// Endpoint para sugerir combinações de cores
app.get('/api/combinations', (req, res) => {
  const { color } = req.query;
  if (!color) {
    return res.status(400).json({ error: 'Parâmetro de cor (color) é necessário no formato HEX.' });
  }

  const suggestions = colors.filter(c => c.hex !== color).slice(0, 3);
  
  res.json({
    baseColor: color,
    suggestions
  });
});

module.exports = app;