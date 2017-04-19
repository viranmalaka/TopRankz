/**
 * Created by malaka on 2/16/17.
 */
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var autoInc = require('mongoose-auto-increment');
var con = require('../controllers/dbController').Connection;

autoInc.initialize(con);


var paper = new schema({
  id: {type: Number, required: true},
  name : {type: String, required: true},
  medium : {type: String},                        // {'S','E','T'}
  subject: { type : schema.ObjectId,ref: 'Subject'},
  time_limit: {type : Number, required : true},   // in minutes
  unit_mark : {type : Number, default : 1},
  questions : {type : Number ,required : true},
  finished : {type : Boolean, default : false},
  numAnswer : {type : Number, required : true},
  mixOrder : {type : Boolean, default : true},
  addedBy: {type : schema.ObjectId, ref : 'User'},
  descriptionText : {type : String}
});

paper.plugin(autoInc.plugin, {
    model : 'Paper',
    field : 'id',
    startAt : 1
});

module.exports = mongoose.model('Paper', paper);
