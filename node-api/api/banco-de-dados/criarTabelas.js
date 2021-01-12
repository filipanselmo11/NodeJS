const ModeloTabela = require('../rotas/fornecedores/ModeloTabelaFornecedor');


ModeloTabela
    .sync()
    .then(() => console.log('Tabela criad com sucesso'))
    .catch(() => console.log(''))