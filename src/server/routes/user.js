const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const validations = require('./validations');

//display the html view on the page
router.get('/', function (req, res, next) {
  knex('comments')
  .join('restaurants', 'restaurants.id', 'comments.restaurant_id')
  .select('restaurants.name', 'comments.comment', 'comments.rating', 'comments.user_id')
  .then((comment) => {
    const renderObject = {};
    renderObject.title = 'fork.me - profile';
    renderObject.comments = comment;
    console.log(renderObject);
    res.render('user', renderObject);
  })
  .catch(err => {
    return next(err);
  });
});

router.get('/logout', function(req,res,next) {

});

// send a post request to the database
router.post('/', validations.verify, function (req, res, next) {
  //grab form values to add to database via req.body

});

// router.post('/', function (req, res, next) {
//   //on click, you should be able to post the data to the database, and then apply separate validation for checking if the user already exists, and if so, redirect the user to the sign-in page with a message that the user already exists
// })

module.exports = router;
