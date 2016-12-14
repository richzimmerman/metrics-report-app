'use strict';

var express = require('express');
var Feedback = require('../models/feedback.js');
var parser = require('body-parser');
var router = express.Router();

router.get('/feedback', function(req, res){
	Feedback.find(function(err, feedback) {
		if (err) {
			return res.status(500).json({message: err.message});
		}
		res.json({ feedback });
	});
});

router.put('/feedback/:id', parser.json(), function(req, res) {
  var id = req.params.id;
  var update = req.body;
  console.log(id);
  console.log(req.body);
  Feedback.findByIdAndUpdate(id, {$set: {feedback: req.body}}, {new: true}, function(err, feedback) {
    if (err) {
      return res.status(500).json({ err: err.message });
    } else {
      res.json({ 'feedback': req.body });
    }
  });
});

module.exports = router;