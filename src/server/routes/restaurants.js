const router = require('express').Router();
const knex = require('../db/knex');

router.get('/', function (req, res, next) {
  knex('restaurants')
  .then(restaurants => {
    const renderObject = {};
    renderObject.title = 'Restaurants';
    renderObject.restaurants = restaurants;
    res.render('archive', renderObject);
  });
});

router.get('/:id', function (req, res, next) {
  let restaurantId = req.params.id;
  knex('restaurants')
    .where('id', restaurantId)
    .then(restaurant => {
      if (restaurant.length) {
        restaurant = restaurant[0];
        res.render('single', restaurant);
      } else throw new Error();
    }).catch(err => {
      let returnObject = {};
      returnObject.message = err.message || 'Sorry, we couldn\'t find that page!';
      res.status(404).render('error', returnObject);
    });
});

module.exports = router;
