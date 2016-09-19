const router = require('express').Router();
const knex = require('../db/knex');
const queries = require('../db/queries');

router.get('/', function (req, res, next) {
  queries.getAllRestaurants(function(err, result) {
    let renderObject = {};
    if (err) {
      renderObject.message = err.message || 'Sorry, something went wrong!';
      res.render('error', renderObject);
    } else {
      renderObject.loggedIn = req.query.loggedIn;
      renderObject.title = 'fork.me - restaurants';
      renderObject.restaurants = result;
      res.render('archive', renderObject);
    }
  });
});

router.get('/:id', function (req, res, next) {
  let restaurantId = req.params.id;
  queries.getOneRestaurantWithComments(restaurantId, function (err, result) {
    if (err) {
      let returnObject = {};
      returnObject.message = err.message || 'Sorry, we were unable to find that restaurant';
      res.status(400).render('error', returnObject);
    } else {
      res.render('single', result);
    }
  });
});

router.post('/', function (req, res, next) {
  let newRestaurant = {
    name: req.body.name,
    type: req.body.type,
    pic_url: req.body.pic_url,
    description: req.body.description
  };
  queries.addNewRestaurant(newRestaurant, function(err, result) {
    if (err) {
      let returnObject = {};
      returnObject.message = err.message || `Sorry, ${newRestaurant.name} was not added.`;
      res.render('error', returnObject);
    } else {
      let returnObject = {};
      returnObject.message = `${newRestaurant.name} was successfully added`;
      res.redirect('/restaurants');
    }
  });
});

router.delete('/:id', function (req, res, next) {
  var restaurantId = req.params.id;
  queries.deleteOne('restaurants', restaurantId, function(err, result) {
    if (err) {
      let returnObject = {};
      returnObject.message = err.message || 'Sorry, there was an issue deleting that restaurant';
      res.render('error', returnObject);
    } else {
      res.render('archive');
    }
  });
});

router.put('/:id', function (req, res, next) {
  let restaurantId = req.params.id;
  let updateObject = {
    rating: req.body.rating,
    name: req.body.name,
    type: req.body.type,
    pic_url: req.body.pic_url,
    description: req.body.description
  };
  queries.updateRestaurant(restaurantId, updateObject, function(err, result) {
    if (err) {
      let returnObject = {};
      returnObject.message = err.message || 'Sorry, there was an issue updating that restaurant';
      res.render('error', returnObject);
    } else {
      res.status(200).json({
        message: 'success'
      });
    }
  });
});

module.exports = router;
