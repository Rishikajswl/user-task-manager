const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);
const { Model } = require('objection');
Model.knex(knex);

const hbs = require('express-handlebars');
app.engine('hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/index');
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
