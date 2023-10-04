const News = require('../model/NewsSchema');
const asyncHandler = require("express-async-handler");

exports.allNews = asyncHandler( async(req, res, next ) => {
    const news = await News.find();
    res.json(news);
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