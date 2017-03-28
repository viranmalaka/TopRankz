/**
 * Created by malaka on 2/16/17.
 */
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var student = new schema({
    school : {type: schema.ObjectId, ref : 'School'},
    enroll : [{type :schema.ObjectId, ref : 'Subject'}],
    classGroup : [{type : schema.ObjectId,ref : 'ClassGroup'}],
    birthday : {type :Date}
});

module.exports = mongoose.model('Student', student);