var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Vocabulary = require('../models/Vocabulary.js');

/* GET all words. */
router.get('/vocabulary', function(req, res, next) {
  Vocabulary.find(function(err, words){
  	if(err){
  		console.log(err);
  	} else{
  		res.json(words);
  	}
  });
});

/*GET single word*/
router.get('/vocabulary/:id', function(req, res, next){
	Vocabulary.findById(req.params.id, function(err, word){
		if(err){
			return next(new Error('Error: ' + err));
		} else{
			res.json(word);
		}
	});
});

/*Create new word*/
router.post('/vocabulary/create', function(req, res, next){
	var newVoca = new Vocabulary(req.body);
	newVoca.save(function(err, word){
		if(err){
			return next( new Error('Error: ' + err));
		} else{
			res.json(word);
		}
	});
})

/*DELETE a word*/
router.delete('/vocabulary/:id', function(req, res, next){
	Vocabulary.findByIdAndRemove(req.params.id, req.body, function(err){
		if(err){
			return next(new Error('Error: ' + err));
		} else{
			res.send('Delete success');
		}
	});
})
module.exports = router;
