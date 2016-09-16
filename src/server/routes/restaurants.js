const router = require('express').Router();
const knex = require('../db/knex');

router.get('/', function (req, res, next) {
  knex('restaurants')
  .then(restaurants => {
    const renderObject = {};
    renderObject.title = 'fork.me - restaurants';
    renderObject.restaurants = restaurants;
    res.render('archive', renderObject);
  });
});

router.get('/:id', function (req, res, next) {
  let restaurantId = req.params.id;
  knex('restaurants')
    .where('restaurants.id', restaurantId)
    .then(restaurant => {
      if (restaurant.length && restaurant.active) {
        restaurant = restaurant[0];
        knex('comments')
          .select('comment')
          .where('comments.restaurant_id', restaurantId)
          .then(comments => {
            restaurant.comments = comments;
          }).catch(err => {
            console.log(err);
          });
        res.render('single', restaurant);
      } else throw new Error();
    }).catch(err => {
      let returnObject = {};
      returnObject.message = err.message || 'Sorry, we couldn\'t find that page!';
      res.status(404).render('error', returnObject);
    });
});

router.post('/', function (req, res, next) {
  let newRestaurant = {
    rating: req.body.rating,
    name: req.body.name,
    type: req.body.type,
    pic_url: req.body.pic_url,
    description: req.body.description
  };
  knex('restaurants')
    .insert(newRestaurant)
    .then(function() {
      let returnObject = {};
      returnObject.message = `${newRestaurant.name} was successfully added`;
      res.redirect('/restaurants');
    }).catch(err => {
      let returnObject = {};
      returnObject.message = err.message || `Sorry, ${newRestaurant.name} was not added.`;
      res.render('error', returnObject);
    });
});

router.delete('/:id', function (req, res, next) {
  var restaurantId = req.params.id;
  knex('restaurants')
    .where('id', restaurantId)
    .update({
      active: false
    })
    .then(function() {
      res.status(200).json({
        message: 'success'
      });
    }).catch(err => {
      let returnObject = {};
      returnObject.message = err.message || `Sorry, something went wrong.`;
      res.render('error', returnObject);
    });
});

module.exports = router;
