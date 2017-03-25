/**
 * Created by malaka on 2/16/17.
 */
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var autoInc = require('mongoose-auto-increment');
var con = require('../controller/dbController').Connection;

autoInc.initialize(con);


var subject = new schema({
    id: {type: Number, required: true},
    name : {type: String, required: true},
    topics : {type : [{}]}                  // {{id , name}}
});

subject.plugin(autoInc.plugin, {
    model : 'Subject',
    field : 'id',
    startAt : 1
});

module.exports = mongoose.model('Subject', subject);