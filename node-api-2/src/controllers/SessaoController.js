const conexao = require('../database/conexao');

module.exports = {

    async criar(requisicao, resposta) {
        const { id } = requisicao.body;

        const ong = await conexao('ongs').where('id', id).select('nome').first();

        if (!ong) {
            return resposta.json(400).json({ error: 'Ong nao encontrada com esse id ' });
        }

        return resposta.json(ong);
    }
}