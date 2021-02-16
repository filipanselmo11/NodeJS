const { requisicao } = require("express");

const knex = require('knex');

const config = require('../../knexfile');

const conexao = kenx(config.development);

module.exports = conexao;