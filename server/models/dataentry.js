/**
 * Created by malaka on 4/13/17.
 */

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var dataEntry= new schema({
  papers : {type: schema.ObjectId, ref : 'Paper'}
});

module.exports = mongoose.model('DataEntry', dataEntry);
