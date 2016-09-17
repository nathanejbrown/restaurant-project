const knex = require('./knex');

exports.getAllRestaurants = function(callback) {
  knex('restaurants')
    .then(restaurants => {
      callback(null, restaurants);
    }).catch(err => {
      callback(err);
    });
};

exports.getOneRestaurantWithComments = function(restaurantId, callback) {
  knex('restaurants')
    .where('restaurants.id', restaurantId)
    .then(restaurant => {
      if (restaurant.length) {
        restaurant = restaurant[0];
        knex('comments')
          .select('comment', 'first_name', 'last_name', 'comments.rating', 'users.id', 'comments.id')
          .join('users', 'comments.user_id', 'users.id')
          .where('comments.restaurant_id', restaurantId)
          .then(comments => {
            let average = getAverage(comments);
            restaurant.comments = comments;
            restaurant.average = average;
            callback(null, restaurant);
          });
      } else throw new Error();
    }).catch(err => {
      callback(err);
    });
};

function getAverage(array) {
  let average = 0;
  let divisor = array.length;
  array.forEach(function(comment) {
    average += comment.rating;
  });
  average = (average / divisor);
  return average;
}
