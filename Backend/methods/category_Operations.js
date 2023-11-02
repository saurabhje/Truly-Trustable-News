const News = require('../model/NewsSchema');
const Category = require('../model/categoryschema');

const asyncHandler = require("express-async-handler");

exports.category_news_list = asyncHandler( async (req,res,next)=>{
    const [ category, categoryNews ] = await Promise.all([
        Category.findById(req.params.id).exec(),
        News.find({ category: req.params.id },"title,author,").exec()
    ]);
    res.json(category,categoryNews);
} )

exports.allCategories = asyncHandler( async(req, res, next ) => {
    const allCategories = await Category.find().sort({ date: -1 });
    res.json(allCategories);
})