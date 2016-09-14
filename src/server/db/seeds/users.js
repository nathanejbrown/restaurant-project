
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({first_name: 'Tommy', last_name: 'Gaessler', email: 'tommy@tommy.com', password: 'tommy1', permissions: 'admin'}),
        knex('users').insert({first_name: 'Nathan', last_name: 'Dennis', email: 'nathan@nathan.com', password: 'nathan1', permissions: 'admin'}),
        knex('users').insert({first_name: 'George', last_name: 'Vickstrom', email: 'george@george.com', password: 'george1', permissions: 'admin'}),
        knex('users').insert({first_name: 'Ryan', last_name: 'Harings', email: 'ryan@ryan.com', password: 'ryan1', permissions: 'admin'}),
        knex('users').insert({first_name: 'Harry', last_name: 'Potter', email: 'harry@harry.com', password: 'harry1', permissions: 'guest'})
      ]);
    }); 
};
