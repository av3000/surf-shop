const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware');
const { 
	postIndex, 
	postNew, 
	postCreate,
	postShow,
	postEdit,
	postUpdate
} = require('../controllers/posts');

/* GET posts index /posts */
router.get('/', asyncErrorHandler(postIndex));

/* GET posts new page index /posts/new */
router.get('/new', postNew);

/* POST posts create page index /posts */
router.post('/', asyncErrorHandler(postCreate));

/* GET posts show page index /posts/:id */
router.get('/:id', asyncErrorHandler(postShow));

/* GET posts edit page index /posts/:id/edit */
router.get('/:id/edit', asyncErrorHandler(postEdit));

/* PUT posts update page index /posts/:id */
router.put('/:id', asyncErrorHandler(postUpdate));


/* DELETE posts destroy page index /posts/:id */
router.delete('/:id', (req, res, next) => {
  res.send('DELETE /posts/:id');
});

module.exports = router;

/*
GET index 		/posts
GET new   		/posts/new
POST create		/posts
GET show 		/posts/:id
GET edit			/posts/:id/edit
PUT update		/posts/:id
DELETE destroy   /posts/:id
*/