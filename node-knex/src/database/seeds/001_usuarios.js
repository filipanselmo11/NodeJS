
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('usuarios').del()
    .then(function () {
      // Inserts seed entries
      return knex('usuarios').insert([
        { nome: 'Fílip Anselmo'},
        { nome: 'Madara Uchiha'},
      ]);
    });
};
