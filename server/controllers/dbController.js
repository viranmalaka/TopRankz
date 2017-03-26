/**
 * Created by malaka on 2/16/17.
 */

/**
 * this files contains all database connections stuff.
 */
var mongoose = require('mongoose');
var config = require('../config').config.development;

mongoose.Promise = global.Promise;
var connection = mongoose.connect('mongodb://' + config.db.host + '/'+ config.db.name);

module.exports.Connection = connection;