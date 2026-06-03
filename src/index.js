const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ mensagem: 'CI/CD funcionando!', versao: '1.0.0' });
});

app.get('/soma/:a/:b', (req, res) => {
    // const resultado = Number(req.params.a) + Number(req.params.b);
    const resultado = Number(req.params.a) - Number(req.params.b);
    res.json({ resultado });
});

module.exports = app; // exporta para os testes