const router = require('express').Router();

const indexController = require('../controllers/index');
const knex = require('../db/knex');

router.get('/', function (req, res, next) {
  knex('restaurants')
  .select('*')
  .limit(3)
  .then(restaurants => {
    const renderObject = {};
    renderObject.title = 'Home';
    renderObject.featured = restaurants;
    res.render('index', renderObject);
  });
});

module.exports = router;
