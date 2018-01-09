
'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Blog = new mongoose.Schema({
    title: { type: String },
    author: { type: String },
    createDate: { type: Date },
    comments: { type: String },
    tags: { type: String },
    content: { type: String },
  });
  return mongoose.model('Blog', Blog);
};