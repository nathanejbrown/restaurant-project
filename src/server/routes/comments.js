const router = require('express').Router();
const knex = require('../db/knex');
const queries = require('../db/queries');

router.post('/:id', (req, res, next) => {
  const restaurantId = req.params.id;
  const review = req.body.review;
  const rating = req.body.rating;

  knex('comments').insert({
    comment: review,
    rating: rating,
    user_id: knex('users').select('id').where('first_name', 'Tommy'),
    restaurant_id: restaurantId
  })
  .then((review) => {
    res.redirect(`/restaurants/${restaurantId}`);
  })
  .catch((error) => {
    console.log(error);
  });
});

router.delete('/:id', function (req, res, next) {
  var renderObject = {};
  const commentId = req.params.id;
  queries.deleteOne('comments', commentId, function(err, result) {
    if (err) {
      renderObject.message = err.message || 'Sorry, there was an issue deleting that comment';
      res.render('error', renderObject);
    } else {
      res.status(200).json({
        message: 'success'
      });
    }
  });
});

router.put('/:id', function (req, res, next) {
  var renderObject = {};
  const commentId = req.params.id;
  var newComment = req.body.comment;
  queries.updateComment(commentId, newComment, function(err, result) {
    if (err) {
      renderObject.message = 'Sorry, that comment was not successfully changed';
      res.render('error', renderObject);
    } else {
      res.status(200).json({
        message: 'success'
      });
    }
  });
});

module.exports = router;
