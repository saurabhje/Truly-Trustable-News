const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  heading: { type: String, required: true },
  author: { type: String, required: true },
  article: { type: String, required: true },
  data : { type: Date, required: true },
  heroNews: { type: Boolean, required: true}
});


// Export model
module.exports = mongoose.model("NewsSchema", NewsSchema);