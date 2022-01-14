const mongoose = require("mongoose");

//define a story schema for the database
const InfoSchema = new mongoose.Schema({
  creator_id: String,
  creator_name: String,
  content: String,
});

// compile model from schema
module.exports = mongoose.model("info", InfoSchema);