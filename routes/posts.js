const express = require('express');
const router = express.Router();

/* GET posts index /posts */
router.get('/', (req, res, next) => {
  res.send('INDEX /posts');
});

/* GET posts new page index /posts/new */
router.get('/new', (req, res, next) => {
  res.send('NEW /posts/new');
});

/* POST posts create page index /posts */
router.post('/', (req, res, next) => {
  res.send('CREATE /posts');
});

/* GET posts show page index /posts/:id */
router.get('/:id', (req, res, next) => {
  res.send('SHOW /posts/:id');
});

/* GET posts edit page index /posts/:id/edit */
router.get('/:id/edit', (req, res, next) => {
  res.send('EDIT /posts/:id/edit');
});

/* PUT posts update page index /posts/:id */
router.put('/:id', (req, res, next) => {
  res.send('UPDATE /posts/:id');
});


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