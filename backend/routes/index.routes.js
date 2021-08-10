const { Router } = require('express');
const router = Router();

const {
  articleGet,
  articlesFind,
  articlePost,
  articlePut,
  articlePatch,
  articleDelete,
} = require('../controllers/articles.controller');

router.get('/create', articleGet);

router.get('/articles', articlesFind);

router.post('/', articlePost);

router.put('/:id', articlePut);

router.patch('/', articlePatch);

router.delete('/', articleDelete);

module.exports = router;
