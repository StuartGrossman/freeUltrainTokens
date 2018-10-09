var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var uuid = require('uid');


app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').renderFile);
app.use(express.static(__dirname + '/node_modules'));

//we want to render html files
app.set('view engine', 'html');
app.set('view options', {
	layout: false
});

//middleware that allows for us to parse JSON and UTF-8 from the body of an HTTP request
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//on homepage load, render the index page
app.get('/', function(req, res) {
	res.render('index');
});

//
app.get('/', function(req, res){
	res.render('index')
})

/// resources

var freeTokens = require('./routes/freeTokens');

app.use('/freeTokens', freeTokens);


var server = app.listen(port, function() {
	var host = server.address().address;
	console.log('Server is listening at http://localhost:' + port);
});
