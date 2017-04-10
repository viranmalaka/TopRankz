/**
 * Created by malaka on 2/16/17.
 */
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var autoInc = require('mongoose-auto-increment');
var con = require('../controllers/dbController').Connection;

autoInc.initialize(con);


var question = new schema({
    id: {type: Number, required: true},
    body: {type: String, required: true},
    answers: {type: {}},                          // {id : body}
    correct: { type : [String], required: true},    // array of corrected answers ids
    tags: {type : [String]},                        // array of tags
    topics: {type : [String]},                      // array of if of topics from Subject table
    paper: {type : schema.ObjectId,ref : 'Paper'},
    proofBy: {type : schema.ObjectId, ref : 'User'},
    addedBy: {type : schema.ObjectId, ref : 'User'},
    difficulty : {type : [{}]},                     //{studentId, difficultyRate}
    comments: {type : [{}]},                         //{username, body, likes[], dislikes[]}
    mixOrder : {type : Boolean, default : true},
    questionNumber : {type : Number, required : true}
});

question.plugin(autoInc.plugin, {
    model : 'Question',
    field : 'id',
    startAt : 1
});


module.exports = mongoose.model('Question', question);
