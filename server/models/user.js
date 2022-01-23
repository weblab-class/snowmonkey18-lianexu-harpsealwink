const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  highestLevel: {type: Number, default: -1},
  ninjaPower: {type: String, default: "Update your ninja power"}
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
