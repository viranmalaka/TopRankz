/**
 * Created by malaka on 2/16/17.
 */
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var autoInc = require('mongoose-auto-increment');
var con = require('../controllers/dbController').Connection;

autoInc.initialize(con);

var paperAttempt = new schema({
    student : {type: schema.ObjectId,ref : 'Student'},
    paper : {type: schema.ObjectId, ref : 'Paper'},
    answers : {type : [{}]},                       // {qId, answer, viewAt, lastEdit}
    startingTime  : {type : Date},
    endingTime : {type :Date}
});

paperAttempt.plugin(autoInc.plugin, {
  model : 'PaperAttempt',
  field : 'id',
  startAt : 1
});


module.exports = mongoose.model('PaperAttempt', paperAttempt);
