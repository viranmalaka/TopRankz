/**
 * Created by malaka on 2/16/17.
 */
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var autoInc = require('mongoose-auto-increment');
var con = require('../controllers/dbController').Connection;

autoInc.initialize(con);

var classGroup = new schema({
    id: {type: Number, required: true},
    name : {type: String, required: true},
    paper: [{type : schema.ObjectId,ref : 'Paper'}]
});

classGroup.plugin(autoInc.plugin, {
    model : 'Question',
    field : 'id',
    startAt : 1
});


module.exports = mongoose.model('ClassGroup', classGroup);
