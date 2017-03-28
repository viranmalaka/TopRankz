/**
 * Created by malaka on 2/16/17.
 */
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var teacher = new schema({
    visibleName : {type : String},
    subject : [{type :schema.ObjectId, ref : 'Subject'}],
    classGroup : [{type : schema.ObjectId,ref : 'ClassGroup'}],
    confirmed : {type : Boolean, required : true, default : false}
});

module.exports = mongoose.model('Teacher', teacher);
