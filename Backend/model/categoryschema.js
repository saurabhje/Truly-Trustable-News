const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: { type: String, required: true },
});




// Export model
module.exports = mongoose.model("CategorySchema", CategorySchema);
