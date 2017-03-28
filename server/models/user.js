/**
 * Created by malaka on 2/16/17.
 */
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bycrypt = require('bcryptjs');

var Student = require('./student');
var Teacher = require('./teacher');

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
    resetPasswordToken: {type : String},
    resetPasswordExpires: {type : Date}
});

module.exports = mongoose.model('User', user);

module.exports.createUser = function (newUser, cb) {
    bycrypt.genSalt(10, function (err, salt) {
        bycrypt.hash(newUser.password, salt, function (err, hash) {
            newUser.password = hash;
            newUser.save(function (err, user) {
                if(err){
                    console.log(err);
                    throw err;
                }else{
                    if(user.acc_type == 'S'){
                        var thisStudent = new Student();
                        thisStudent.save(function (err, std) {
                            if(err){
                                console.log(err);
                                throw err;
                            }else{
                                user.acc_id = std._id;
                                user.save(cb);
                            }
                        })
                    }else if(user.acc_type == 'T'){
                        var thisTeacher = new Teacher();
                        thisTeacher.save(function (err, tch) {
                            if(err){
                                console.log(err);
                                throw err;
                            }else{
                                user.acc_id = tch._id;
                                user.save(cb);
                            }
                        })

                    }
                }
            });
        })
    });
};

module.exports.comparePassword = function (candidatePassword, hash, cb) {
    bycrypt.compare(candidatePassword, hash, function (err, isMatch) {
        if(err){
            console.log(err);
        }else{
            cb(null, isMatch);
        }
    });
};
