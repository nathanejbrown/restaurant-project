const router = require('express').Router();

const indexController = require('../controllers/index');
const knex = require('../db/knex');

router.get('/', function (req, res, next) {
  knex('restaurants')
  .select('*')
  .limit(3)
  .then(restaurants => {
    const renderObject = {};
    renderObject.title = 'fork.me';
    renderObject.featured = restaurants;
    res.render('index', renderObject);
  });
});

router.put('/:id', function (req, res, next) {
  var userId = req.params.id;
  var newComment = req.body.comment;
  knex('comments')
    .update({
      comment: newComment
    })
    .where('user_id', userId)
    .then(() => {
      knex('comments')
        .then(results => {
          console.log(results);
        });
    });
});

module.exports = router;
