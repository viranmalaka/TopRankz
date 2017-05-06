/**
 * Created by malaka on 4/10/17.
 */

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var temp = new schema({
  userId : {type: schema.ObjectId, required: true},
  data : {type : {}}
});

module.exports = mongoose.model('Temp', temp);
