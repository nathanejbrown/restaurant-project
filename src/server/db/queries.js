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
        return knex('comments')
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

exports.addNewRestaurant = function(object, callback) {
  knex('restaurants')
    .insert(object)
    .then(function() {
      callback(null, object.name);
    }).catch(err => {
      callback(err);
    });
};

exports.deleteRestaurant = function(id, callback) {
  knex('restaurants')
    .del()
    .where('id', id)
    .then(result => {
      callback(null, result);
    }).catch(err => {
      callback(err);
    });
};

exports.updateRestaurant = function(id, object, callback) {
  knex('restaurants')
    .where('id', id)
    .update({
      name: object.name,
      type: object.type,
      pic_url: object.pic_url,
      description: object.description
    })
    .then(restaurant => {
      callback(null, restaurant);
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
