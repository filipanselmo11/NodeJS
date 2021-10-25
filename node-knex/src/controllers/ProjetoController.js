const knex = require('../database');

module.exports = {
    async index(req, res, next) {
        try {
            const { usuario_id, page = 1 } = req.query;

            const query = knex('projetos')
                .limit(5)
                .offset((page - 1) * 5)

            const countObj = await knex('projetos').count()

            if (usuario_id) {
                query
                    .where({ usuario_id })
                    .join('usuarios', 'usuario_id', '=', 'projetos.usuario_id')
                    .select('projetos.*', 'usuarios.nome')
                    .where('usuarios.deleted_at', null)

                countObj.where({ usuario_id })    
            }


            const [count] = await countObj;
            res.header('x-Total-Count', count["count"])

            const results = await query

            return res.json(results)
        } catch (error) {
            next(error)
        }
    },

    async create(req, res, next) {
        try {
            const { titulo, usuario_id } = req.body
            await knex('projetos').insert({
                titulo, usuario_id
            })

            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    }
}