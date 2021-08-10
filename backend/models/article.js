const { Schema, model } = require('mongoose');

const ArticleSchema = Schema({
  title: String,
});

module.exports = model('Role', ArticleSchema);
