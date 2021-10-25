const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UsuarioController');
const ProjetoController = require('./controllers/ProjetoController');

routes
    //Usuários
    .get('/usuarios', UserController.index)
    .post('/usuarios', UserController.create)
    .put('/usuarios/:id', UserController.update)
    .delete ('/usuarios/:id', UserController.delete)
    //Projetos
    .get('/projetos', ProjetoController.index)
    .post('/projetos', ProjetoController.create)

module.exports = routes;