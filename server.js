const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const request = require('request');
const cheerio = require('cheerio');
const phantomjs = require('phantomjs');
var partials = require('express-partials');
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
// require('./controllers/routes.js')(app, cheerio, request);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});


// //start server
app.listen(PORT, function() {
	console.log('Listening on port : ' + PORT);
});