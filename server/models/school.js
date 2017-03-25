/**
 * Created by malaka on 2/16/17.
 */
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var autoInc = require('mongoose-auto-increment');
var con = require('../controller/dbController').Connection;

autoInc.initialize(con);

var school = new schema({
    id: {type: Number, required: true},
    name : {type: String, required: true},
    district : {type : String}
});

school.plugin(autoInc.plugin, {
    model : 'School',
    field : 'id',
    startAt : 1
});

module.exports = mongoose.model('School', school);