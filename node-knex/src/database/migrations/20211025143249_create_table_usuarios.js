exports.up = async knex => knex.schema.createTable('usuarios', table => {
    table.increments('id')
    table.text('nome').unique().notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTable('usuarios')
