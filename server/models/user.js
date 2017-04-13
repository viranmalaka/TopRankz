/**
 * Created by malaka on 2/16/17.
 */
var mongoose = require('mongoose');
var schema = mongoose.Schema;


// Define mongoose Data model
var user = new schema({
    username: {type: String, required: true, unique : true},
    password : {type: String, required: true},
    acc_type : {type : String},                       // 'A', 'S', 'D', 'T'
    acc_id : {type : schema.ObjectId},
    email : {type : String, unique: true},
    first_name : {type :String},
    last_name : {type :String},
    address : {type : String},
    telephone : {type : String},
    profile_picture : {type : String},
    reset_password_token: {type : String},
    reset_password_expires: {type : Date}
});

module.exports = mongoose.model('User', user);




