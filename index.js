const express = require('express');
const cors = require('cors');
const { colors, gradients } = require('./data');

const app = express();
const port = process.env.PORT || 3000;

// Habilita CORS para permitir requisições de qualquer origem
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
  let { color } = req.query;

  // Remove o símbolo # se presente
  if (color && color.startsWith('#')) {
    color = color.slice(1);
  }

  // Valida se a cor é fornecida e está no formato HEX
  if (!color || !/^([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(color)) {
    return res.status(400).json({ error: 'Parâmetro de cor (color) é necessário no formato HEX.' });
  }

  // Filtra as cores para não incluir a cor base
  const suggestions = colors.filter(c => c.hex !== `#${color}`).slice(0, 3);
  
  res.json({
    baseColor: `#${color}`,
    suggestions
  });
});


 

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;
