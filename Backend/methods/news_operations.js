const News = require('../model/NewsSchema');
const asyncHandler = require("express-async-handler");

exports.allNews = asyncHandler( async(req, res, next ) => {
    const news = await News.find();
    res.json(news);
})

exports.allNewsHome = asyncHandler( async(req, res, next ) => {
    const perPage = 6;
    const page = parseInt(req.query.page) || 1; // Get the page from the query parameters or default to 1

    try {
        const news = await News.find()
        .sort({ date: -1 })
        .skip((page - 1) * perPage)
        .limit(perPage);

        res.json(news);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

exports.getNews = asyncHandler ( async(req, res, next ) => {
    const news = await News.findById(req.params.id);
    if(!news){
        res.status(400).json({message: 'News not found'})
    }
    res.json(news)
})

exports.create_News = asyncHandler ( async(req, res, next ) => {
    const name = req.body
    console.log(name)
    res.json({
        message: "Route is working"
    })
})