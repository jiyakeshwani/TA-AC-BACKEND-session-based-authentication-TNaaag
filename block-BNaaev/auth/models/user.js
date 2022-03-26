var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    age: Number,
    Phone: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
