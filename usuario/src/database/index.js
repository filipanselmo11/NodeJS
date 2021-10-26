const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');

const conexao = new Sequelize(dbConfig);

Usuario.init(conexao);

module.exports = conexao;