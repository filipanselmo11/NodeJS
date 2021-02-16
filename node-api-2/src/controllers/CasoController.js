const conexao = require('../database/conexao');

module.exports = {

    async index(requisicao, reposta) {
        const { pagina = 1 } = requisicao.query;

        const [cont] = await conexao('casos').count();

        console.log(cont);

        const casos = conexao('casos')
            .join('ongs', 'ongs.id', '=', 'casos.ong_id')
            .limit(5)
            .offset((pagina - 1) * 5)
            .select(['casos.*',
                'ongs.nome',
                'ongs.email',
                'ongs.whatssap',
                'ongs.cidade',
                'ongs.uf'
            ]);

        resposta.header('X-Total-Count', cont['count(*)']);

        return resposta.json(casos);
    },

    async criar(requisicao, resposta) {
        const { titulo, descricao, valor } = requisicao.body;
        const ong_id = requisicao.headers.authorization;

        const [id] = await conexao('casos').insert({
            titulo,
            descricao,
            valor,
            ong_id
        });

        return resposta.json({ id })
    },

    async deletar(requisicao, resposta) {
        const { id } = requisicao.params;
        const ong_id = requisicao.headers.authorization;

        const caso = await conexao('casos').where('id', id).select('ong_id').first();

        if (caso.ong_id !== ong_id) {
            return resposta.status(401).json({ error: 'Operacao não permitida' });
        }

        await conexao('casos').where('id', id).delete();

        return resposta.status(204).send();
    }
}