const express = require('express');
const news_operations = require('./methods/news_operations');
const category_Operations = require('./methods/category_Operations');

const router = express.Router({ mergeParams: true });

router.get('/admin', news_operations.allNews);
router.get('/', news_operations.allNewsHome);
router.get('/news/:id', news_operations.getNews);
router.post('/create-news',news_operations.create_News_post);
router.post('/delete/:id',news_operations.delete_news);
router.get('/edit/:id', news_operations.edit_news_get);
router.post('/edit/:id', news_operations.edit_News_post);

router.get('/categories',category_Operations.allCategories);
router.get('/category/:id', category_Operations.category_news_list);

router.post('/login', (req, res, next) => {
    if(req.body.password === process.env.PASSWORD){
      res.status(200).json({ message: 'Login successful' });
    } else {
      console.log(req.body.password)
      res.status(401).json({ message: 'Login failed: Incorrect password' });
    }
  })

module.exports = router;