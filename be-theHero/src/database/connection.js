const { request } = require("express");

const knex = require('knex');
const config = require('../../knexfile');

const connection = knex(config.development);

module.exports = connection;