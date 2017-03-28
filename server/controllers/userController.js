/**
 * Created by malaka on 3/27/17.
 */

const User = require('../models/user');

module.exports.checkUserName = function (val, next) {
  User.count({username : val.checkUserName.username}, function (err, result) {
    if(err){
      console.log(err);
      throw err;
    }else{
      val._checkUserName = result == 0;
      next(val);
    }
  })
};

module.exports.checkEmail = function (val, next) {
  User.count({email : val.checkEmail.email} , function (err, result) {
    if(err){
        console.log(err);
        throw err;
    }else{
        val._checkEmail = result == 0;
        next(val);
    }
  })
};
