const conexao = require('../database/conexao');
const crypto = require('crypto');

module.exports = {

    async index(requisicao, resposta) {
        const ongs = await conexao('ongs').select('*');

        return resposta.json(ongs);
    },

    async criar(requisicao, resposta) {
        const { nome, email, whatssap, cidade, uf } = requisicao.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await conexao('ongs').insert({
            id,
            nome,
            email,
            whatssap,
            cidade,
            uf
        })
    }
}