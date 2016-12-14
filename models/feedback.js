'use strict';

var mongoose = require('mongoose');

var subScheme = {
		"item1": String,
		"item2": String,
		"item3": String,
		"item4": String,
		"item5": String,
		"item6": String,
		"item7": String,
		"item8": String,
		"item9": String,
		"item10": String,
		"item11": String,
		"item12": String,
		"item13": String,
		"item14": String,
		"item15": String,
		"item16": String,
		"item17": String
	}

var northeast = new mongoose.Schema({
	"_id": String,
	"site": String,
	"feedback": subScheme
}, {collection: 'northeast'});

var model = mongoose.model('Feedback', northeast);

module.exports = model;