const { Schema, model } = require('mongoose');

const ArticleSchema = Schema({
  title: String,
  description: String,
  imageUrl: String,
});

module.exports = model('Article', ArticleSchema);
