const express = require('express');

const routes = require('./routes');

const cors = require('cors');

app.use(cors);
const app = express();

app.use(express.json());

app.use(routes)

/**
 * Métodos HTTP
 * 
 * GET: Buscar/listar uma informação do back-end
 * 
 * POST: Criar uma informção no back-end
 * 
 * PUT: Alterar uma informação no back-end
 * 
 * DELETE: Deletar uma informação no back-end
 */



/**
 * Tipos de Parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após '?' (Filtros, Paginação)
 * 
 * Route Params: Parâmetros para identificar recursos
 * 
 * Request Body: Corpo da requsição,usado para criar ou alterar recursos
 */

/**
 * 
 * SQL: MySql, SQlite, PostgreSQL, Oracle, Microsoft SQL Server
 * 
 * NoSQL: MongoDB, CouchDB, etc.
 */


/**
 * Driver: SELECT * FROM users
 * 
 * Query Builder: table('users).select('*).where()
 */


app.listen(3333);