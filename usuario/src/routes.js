const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');

const routes = express.Router();

routes.get('/usuarios', UsuarioController.index);

routes.post('/usuarios', UsuarioController.criar);

routes.get('/usuarios/:id', UsuarioController.findUm);

routes.put('/usuarios/:id', UsuarioController.atualizar);

routes.delete('/usuarios/:id', UsuarioController.deletar);

routes.delete('/usuarios', UsuarioController.deletarTudo);


module.exports = routes;