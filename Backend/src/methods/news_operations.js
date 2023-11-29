const News = require('../model/NewsSchema');
const Category = require('../model/categoryschema');
const asyncHandler = require("express-async-handler");

exports.allNews = asyncHandler( async(req, res, next ) => {
    const news = await News.find().sort({ date: -1 });
    res.json(news);
})

exports.allNewsHome = asyncHandler( async(req, res, next ) => {
    const perPage = 6;
    const page = parseInt(req.query.page) || 1; // Get the page from the query parameters or default to 1
    const cat = req.query.cat
    const findcat = cat ? {title: cat}: {}
    const category = cat? await Category.find(findcat).exec(): undefined
    const find = cat ? {category: category[0]._id}: {}
    try {
        const news = await News.find(find)
        .sort({ date: -1 })
        .populate("category")
        .skip((page - 1) * perPage)
        .limit(perPage);
        res.json(news);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

exports.getSidebarNews = asyncHandler ( async(req, res, next) => {
    const news = await News.aggregate(
      [ { $sample: { size: 6 } } ]
    );
    if(!news){
      res.status(400).json({message: 'News not found'})
    }
    res.json(news)
})

exports.getNews = asyncHandler ( async(req, res, next ) => {
    const news = await News.find({slug: req.params.id}).populate("category").exec();
    if(!news){
        res.status(400).json({message: 'News not found'})
    }
    res.json(news)
})

exports.create_News_post = [
  (req, res, next) => {
    if (!(req.body.category instanceof Array)) {
      if (typeof req.body.category === "undefined") req.body.category = [];
      else req.body.category = new Array(req.body.category);
    }
    next();
  },
  asyncHandler(async (req, res, next) => {
    try {
      const news = News({
        heading: req.body.heading,
        subheading: req.body.subheading,
        slug: req.body.slug,
        article: req.body.article,
        author: req.body.author,
        date: new Date(),
        img: {
          src: req.body.img_url,
          position: req.body.img_pos,
        },
        category: req.body.category
      });
      console.log(req.body);
      const result = await news.save();
      console.log(result);
      res.status(200).json({
        message: 'New record is saved',
        data: result,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }),
];
exports.edit_news_get = asyncHandler( async(req,res,next)=>{
  const news = await News.findById(req.params.id);
  res.json(news)
})

exports.edit_News_post = [
  (req, res, next) => {
    if (!(req.body.category instanceof Array)) {
      if (typeof req.body.category === "undefined") req.body.category = [];
      else req.body.category = new Array(req.body.category);
    }
    next();
  },

  asyncHandler(async (req, res, next) => {
    try {
      const news = News({
        heading: req.body.heading,
        subheading: req.body.subheading,
        article: req.body.article,
        slug: req.body.slug,
        author: req.body.author,
        date: req.params.date,
        img: {
          src: req.body.img_url,
          position: req.body.img_pos,
        },
        category: req.body.category,
        _id: req.params.id
      });
  
      const result = await News.findByIdAndUpdate(req.params.id, news) ;
      console.log('result')
      res.status(200).json({
        message: 'News is edited',
        data: result,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }),
];

exports.delete_news = asyncHandler (async (req, res, next) => {
  const delete_news = await News.findByIdAndDelete(req.params.id)
})