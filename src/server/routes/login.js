const router = require('express').Router();

// const indexController = require('../controllers/index');
const knex = require('../db/knex');

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync('B4c0/\/', salt);

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'fork.me - login';
  res.render('login', renderObject);
});

router.post('/', function (req, res, next) {
  const loginEmail = req.body.loginEmail;
  const loginPass = req.body.loginPassword;

  knex('users')
  .select('*')
  .then(users => {
    let [user] = users.filter(user => user.email === loginEmail);
    let msg;
    var result;
    //logic to compare unhashed password against user password
    if (!user || !loginPass) {
      msg = 'Please enter a username and password!';
      res.render('login', { title: 'fork.me - login', msg});
    } else {
      // if (bcrypt.compareSync())
      if (bcrypt.compareSync(loginPass, user.password) === true) {
        res.redirect(302, '/restaurants');
      } else {
        msg = 'Incorrect email and/or password!';
        res.render('login', {title: 'fork.me - login', msg});
      }
    }
  })
  .catch((err) => {
    throw err;
  });
});

module.exports = router;
