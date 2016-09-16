exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurants', ((table) => {
    table.increments();
    table.integer('rating').defaultTo(0);
    table.string('name').notNullable().defaultTo('');
    table.string('type').notNullable().defaultTo('');
    table.string('pic_url').defaultTo('http://placehold.it/250x250');
    table.text('description').defaultTo('This restaurant has not yet provided a description.');
    table.boolean('active').defaultTo(true);
  }));
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('restaurants');
};
