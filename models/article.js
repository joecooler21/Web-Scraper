const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    text: {
        type: String,
        trim: true,
        unique: true
    },
    link: {
        type: String,
        trim: true,
        unique: true
    },
    comments:[ {
        type: String,
        trim: true
    }]
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;