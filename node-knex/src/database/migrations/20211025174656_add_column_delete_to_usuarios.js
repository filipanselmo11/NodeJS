
exports.up = knex => knex.schema.alterTable('usuarios', table => {
    table.timestamp('deleted_at')
});

exports.down = knex => knex.schema.alterTable('usuarios', table => {
    table.dropColumn('deleted_at')
});
