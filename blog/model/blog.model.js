const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  tags: {
    type: [String],
    default: [],
  },
}, {
  versionKey:false,
  timestamps: true,
});

const blogModel = mongoose.model("BlogPost", blogPostSchema);

module.exports = {blogModel};
