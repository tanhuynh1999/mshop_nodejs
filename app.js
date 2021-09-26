const express = require('express');
const path = require('path');
const exphbs  = require('express-handlebars');
// * link router
const homeRoute = require('./servers/routers/homeRouter');

const app = express();
const port = 3000;

// * express-handlebars
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
// * path
app.set('views', path.join(__dirname, '/clients/views'));
app.use(express.static(path.join(__dirname, '/clients/public')));
// * connect database

// * connect router
app.use('', homeRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})