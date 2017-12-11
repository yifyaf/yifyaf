const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const partials = require('express-partials');
const db = require('./models');
const request = require('request');
const PORT = process.env.PORT || 3000;

// INIT EXPRESS
const app = express();

// //Look for static files
// app.use('/static', express.static('./server/static'));
app.use(express.static('public'));
// app.use(express.static(__dirname + '/public'));
// app.use(morgan('dev'));
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// app.use(methodOverride("_method"));


//Routes
require('./controllers/routes.js')(app, request);

// //start server
// db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function(){
        console.log('Server successfully connected on PORT %s', PORT);
    });
// });