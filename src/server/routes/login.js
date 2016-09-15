const router = require('express').Router();

// const indexController = require('../controllers/index');
const knex = require('../db/knex');

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Login Page';
  res.render('login', renderObject);
});

module.exports = router;
