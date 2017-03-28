/**
 * Created by malaka on 2/16/17.
 */
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var paperAttempt = new schema({
    student : {type: schema.ObjectId,ref : 'Student'},
    answers : {type : [{}]},                       // {qId, answer}
    statingTime : {type : Date},
    endingTime : {type :Date}
});

module.exports = mongoose.model('RandomAttempt', paperAttempt);