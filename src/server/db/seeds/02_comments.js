exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
  .then(function () {
    return Promise.all([
      // Inserts seed entries
      knex('comments').insert({comment: 'Snackwave jianbing before they sold out, hexagon lomo master cleanse enamel pin brunch twee air plant PBR&B fingerstache bitters chillwave.', rating: 4, user_id: (knex('users').select('id').where('first_name', 'Tommy')), restaurant_id: (knex('restaurants').select('id').where('name', 'Gaessler\'s Gazpacho'))})
    ]);
  });
};
