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

module.exports = router;
