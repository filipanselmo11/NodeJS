const Sequelize = require('sequelize');
const instancia = require('../../banco-de-dados/index');

const colunas = {
    empresa: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false
    },

    categoria: {
        type: Sequelize.ENUM('ração', 'brinquedo'),
        allowNull: false
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'fornecedores',
    timestamps: true,
    createdAt: 'dataCriação',
    updatedAt: 'dataAtualização',
    version: 'versao'
}

module.exports = instancia.define('fornecedor', colunas, opcoes)