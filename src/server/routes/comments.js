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

module.exports = router;
