const knex = require('../db/knex');

function verify (req, res, next) {
  //setup a container to store errors
  const errors = [];
  //grab values from req.body
  const firstName = req.body.preferredname;
  const lastName = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;
}
