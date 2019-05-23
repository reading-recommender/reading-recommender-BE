exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'guest', password: '$2a$10$Pqd8pbKTysrRsjrfwPKBCeguM6CEwWhaopOe19ailL2SETs1ay2Fm        '},
      ]);
    });
};
