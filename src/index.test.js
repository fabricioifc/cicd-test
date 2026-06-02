const request = require('supertest');
const app = require('./index');

// npm install --save-dev supertest

test('GET / retorna mensagem correta', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.mensagem).toBe('CI/CD funcionando!');
});

test('GET /soma/3/4 retorna 7', async () => {
    const res = await request(app).get('/soma/3/4');
    expect(res.body.resultado).toBe(7);
});