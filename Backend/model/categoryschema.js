const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    title: { type: String, required: true },
});




// Export model
module.exports = mongoose.model("categorySchema", categorySchema);
