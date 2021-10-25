
exports.up = async knex => knex.schema.createTable('projetos', table => {
    table.increments('id')
    table.text('titulo').unique().notNullable()

    //relacionamento com tabela usuário
    //1-n
    table.integer('usuario_id')
        .references('usuarios.id')
        .notNullable()
        .onDelete('CASCADE')
    table.timestamp(true, true)
})

exports.down = async knex => knex.schema.dropTable('projetos')
