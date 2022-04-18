var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    likes: { type: Number, default: 0 },
    author: String,
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    slug: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", articleSchema);
