/**
 * Created by malaka on 2/16/17.
 */
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var notification = new schema({
    users : [{type: schema.ObjectId, required: true}],
    body : {type :String}
});

module.exports = mongoose.model('Notification', notification);