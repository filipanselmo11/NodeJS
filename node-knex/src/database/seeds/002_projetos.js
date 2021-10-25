
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projetos').del()
    .then(function () {
      // Inserts seed entries
      return knex('projetos').insert([
        {
          usuario_id: 1,
          titulo: "Meu projeto"
        }
      ]);
    });
};
