/**
 * Created by malaka on 4/2/17.
 */

var Subject = require('../models/subject');

module.exports.getAllSubjectNames = function (next) {
  Subject.find().select('id name').exec(function (err, subs) {
    if(err){
        console.log(err);
        throw err;
    }else{
        next(subs);
    }
  })
};
