const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  heading: { type: String, required: true },
  subheading: {type: String, required: true},
  author: { type: String, required: true },
  article: { type: String, required: true },
  date : { type: Date, required: true },
  img: {type:String, required: true },
  // category: {type:Array, required: true },
});




// Export model
module.exports = mongoose.model("NewsSchema", NewsSchema);
