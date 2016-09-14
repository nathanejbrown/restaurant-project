exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('restaurants').insert({name: 'Nathan\'s Nerd Food', type: 'American', pic_url: 'https://static.pexels.com/photos/5317/food-salad-restaurant-person-medium.jpg'}),
        knex('restaurants').insert({name: 'RestauRyanT', type: 'Steakhouse', pic_url: 'https://static.pexels.com/photos/65175/pexels-photo-65175-medium.jpeg'}),
        knex('restaurants').insert({name: 'Tommy\'s Tapas', type: 'Tapas', pic_url: 'https://static.pexels.com/photos/5929/food-salad-dinner-eating-medium.jpg'}),
        knex('restaurants').insert({name: 'Goergies Gyro\'s', type: 'Greek', pic_url: 'https://static.pexels.com/photos/5931/food-salad-healthy-black-medium.jpg'}),
        knex('restaurants').insert({name: 'Ice-Soup House', type: 'Ramen', pic_url: 'https://static.pexels.com/photos/8717/food-pot-kitchen-cooking-medium.jpg'}),
        knex('restaurants').insert({name: 'Dennis\' Homestyle Cooking', type: 'American', pic_url: 'https://static.pexels.com/photos/70497/pexels-photo-70497-medium.jpeg'}),
        knex('restaurants').insert({name: 'Vickstrom Vino', type: 'Italian', pic_url: 'https://static.pexels.com/photos/5249/bread-food-restaurant-people-medium.jpg'}),
        knex('restaurants').insert({name: 'Harings the Ham', type: 'BBQ', pic_url: 'https://static.pexels.com/photos/111131/meat-vegetables-gemuesepiess-mushrooms-111131-medium.jpeg'}),
        knex('restaurants').insert({name: 'Gaessler\'s Gazpacho', type: 'Tapas', pic_url: 'https://static.pexels.com/photos/66639/pexels-photo-66639-medium.jpeg'}),
        knex('restaurants').insert({name: 'Fabulous Fourth-Meal', type: 'Steakhouse', pic_url: 'https://static.pexels.com/photos/109395/pexels-photo-109395-medium.jpeg'})
      ]);
    });
};
