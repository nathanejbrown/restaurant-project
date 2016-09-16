const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
// const validations = require('./validations');

//display the html view on the page
router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'fork.me - signup';
  res.render('signup', renderObject);
});

// send a post request to the database
router.post('/', function (req, res, next) {
    //grab form values to add to database via req.body
    const firstName = req.body.preferredname;
    const lastName = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    //add values to the database
    knex('users').insert({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password
    })
    .then((results) => {
      //redirect the user to the login page
      res.redirect('/signin');
    })
    .catch((err) => {
      return next(err);
    });
  });

// router.post('/', function (req, res, next) {
//   //on click, you should be able to post the data to the database, and then apply separate validation for checking if the user already exists, and if so, redirect the user to the sign-in page with a message that the user already exists
// })

module.exports = router;
