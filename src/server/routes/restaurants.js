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
      console.log(restaurant);
    });
});

module.exports = router;
