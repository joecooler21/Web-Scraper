const express = require('express');
const exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var Article = require('./models/article');
const app = express();

const PORT = process.env.PORT || 3000;
const router = require('./routes');

app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use('/', router);

mongoose.connect("mongodb://localhost/articles", { useNewUrlParser: true });



app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});