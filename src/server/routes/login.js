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
    if (!user || !loginPass) {
      msg = {message: 'Email or password is the wrongest!'};
      result = JSON.stringify(msg);
      res.render('login', {title: 'fork.me - login', msg: result});
    } else {
      // if (bcrypt.compareSync())
      if (loginPass === user.password) {
        res.redirect(302, '/restaurants');
      } else {
        msg = {message: 'Email or password is the wrongest!'};
        result = JSON.stringify(msg);
        res.render('login', {title: 'fork.me - login', msg: result});
      }
    }
  })
  .catch((err) => {
    throw err;
  });
});

module.exports = router;
