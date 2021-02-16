exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table) {
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('whatssap').notNullable();
        table.string('cidade').notNullable();
        table.string('uf').notNullable();

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};