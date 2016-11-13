var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vocabularySchema = new Schema({
	en: {type: String, required: [true, 'This field cannot be blank']},
	type: String,
	vi: {type: String, required: [true, 'This field cannot be blank']}
});

module.exports = mongoose.model('Vocabulary', vocabularySchema);