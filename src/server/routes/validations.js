const knex = require('../db/knex');

function verify (req, res, next) {
  //setup a container to store errors
  const errors = [];
  //grab values from req.body
  const firstName = req.body.preferredName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  //check if the fields are blank
  if (firstName === '') {
    errors.push('Please Input First Name! ');
  }
  if (lastName === '') {
    errors.push('Please Input Last Name! ');
  }
  if (email === '') {
    errors.push('Please Input an Email! ');
  }
  if (password === '' || password.length < 8) {
    errors.push('Please Input a Password at Least 8 characters long! ');
  }

  //does the username already exist??
  isUnique('email', email, (err, response) => {
    if (err) {
      return next(err);
    }
    if (!response) {
      errors.push('Login credentials already exist!');
    }
    if (errors.length) {
      const renderObject = {};
      renderObject.errors = errors;
      res.render('signup', renderObject);
    } else {
      return next();
    }
  });
}

//some helper function
function isUnique (column, value, callback) {
  // const mult = { error: 'already exists'};
  knex('users')
  .select()
  .where(column, value)
  .then((results) => {
    if (results.length) {
      callback(null, false);
    } else {
      callback(null, true);
    }
  })
  .catch((err) => {
    callback(err);
  });
}

module.exports = {
  verify
};
