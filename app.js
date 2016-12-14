'use strict';

var express = require('express');
var app = express();
var path = require('path');
var router = require('./api');

require('./database');

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.use(express.static('public'));

app.use('/api', router);

app.listen(8080, function() {
	console.log('Listening on port 8080!');
});
