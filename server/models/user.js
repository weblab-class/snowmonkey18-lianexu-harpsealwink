const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  highestLevel: {type: Number, default: 0},
  favFunction: {type: String, default: "y=x"},
  ninjaPower: {type: String, default: "Update your ninja power!"},
  graphNinja: {type: String, default: "Graph Ninja is the coolest website and I just love it so much!"},
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
