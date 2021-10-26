const Usuario = require('../models/Usuario');

module.exports = {
    async index(req, res) {
        const usuarios = await Usuario.findAll();

        return res.json(usuarios);
    },

    async criar(req, res) {
        const { nome, email } = req.body;

        const usuario = await Usuario.create({ nome, email });

        return res.status(200).json({ message: 'Usuário(a) criado com sucesso' });
    },

    async findUm(req, res) {
        const id = req.params.id;

        const usuario = await Usuario.findOne(id);

        if(!usuario) {
            return res.status(400).json({ error: "Usuário(a) não encontrado "});
        } else {
            return res.json(usuario);
        }
    },

    async atualizar(req, res) {
        const id = req.params.id;

        const usuario = await Usuario.update(req.body, { where: { id: id}});

        if(!usuario) {
            return res.status(400).json({ error: "Usuário(a) não encontrado"})
        } else {
            return res.status(200).json({ message: "Usuário(a) atualizado com sucesso"});
        }
    },

    async deletar(req, res) {
        const id = req.params.id;

        const usuario = await Usuario.findByPk(id);

        if(!usuario) {
            return res.status(400).json({ error: "Usuário(a) não encontrado"});
        } else {
            usuario.destroy();
        }

        return res.status(200).json({ message: "Usuário(a) deletado com sucesso"});
    },

    async deletarTudo(req, res) {

        const usuarios = await Usuario.destroy({ where: {}, truncate: false });

        return res.status(200).json({ message: "Usuários deletedos com sucesso "});
    }
}