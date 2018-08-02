const express = require('express');
const router = express.Router({ mergeParams: true });
// gives access to the post id

/* GET posts index /posts/:id/reviews */
router.get('/', (req, res, next) => {
  res.send('INDEX /posts/:id/reviews');
});

// /* GET posts new page index /posts/:id/reviews/new */
// router.get('/new', (req, res, next) => {
//   res.send('NEW /reviews/new');
// });

/* POST reviews create page index /posts/:id/reviews */
router.post('/', (req, res, next) => {
  res.send('CREATE /posts/:id/reviews');
});

// /* GET reviews show page index /posts/:id/reviews/:review_id */
// router.get('/:review_id', (req, res, next) => {
//   res.send('SHOW /posts/:id/reviews/:review_id');
// });

/* GET reviews edit page index /reviews/:review_id/edit */
router.get('/:review_id/edit', (req, res, next) => {
  res.send('EDIT /posts/:id/reviews/:review_id/edit');
});

/* PUT reviews update page index /reviews/:review_id */
router.put('/:review_id', (req, res, next) => {
  res.send('UPDATE /posts/:id/reviews/:review_id');
});


/* DELETE reviews destroy page index /reviews/:review_id */
router.delete('/:review_id', (req, res, next) => {
  res.send('DELETE /posts/:id/reviews/:review_id');
});

module.exports = router;

/*
GET index 		/reviews
GET new   		/reviews/new
POST create		/reviews
GET show 		/reviews/:review_id
GET edit			/reviews/:review_id/edit
PUT update		/reviews/:review_id
DELETE destroy   /reviews/:review_id
*/