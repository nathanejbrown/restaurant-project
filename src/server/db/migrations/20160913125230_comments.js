exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', ((table) => {
    table.increments();
    table.string('comment').defaultTo('');
    table.integer('rating').defaultTo(0);
    table.timestamp('date').defaultTo(knex.fn.now());
    table.integer('user_id').references('users.id').notNullable();
    table.integer('restaurant_id').references('restaurants.id').notNullable();
  }));
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
