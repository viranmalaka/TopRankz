/**
 * Created by malaka on 4/2/17.
 */

var Subject = require('../models/subject');
var Teacher = require('../models/teacher');
var Students = require('../models/student');


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

module.exports.getAllTopics = function (sub, next) {
  Subject.findById(sub).select('topics').exec(function (err, tops) {
    if(err){
      console.log(err);
      throw err;
    }else{
      next(tops.topics);
    }
  })
};

module.exports.getUsersSubject = function(user, next){
  if(user){
    if(user.acc_type == 'T'){
      Teacher.findById(user.acc_id).populate('subject', 'name id').select('subject').exec(function (err, teacher) {
        if(err){
          console.log(err);
          throw err;
        }else{
          next(teacher);
        }
      })
    }else if (user.acc_type == 'S'){
      Students.findById(user.acc_id).populate('enroll').select('enroll.id enroll.name').exec(function (err, enrol) {
        if(err){
          console.log(err);
          throw err;
        }else{
          console.log(enrol);
          next(enrol);
        }
      })
    }else if (user.acc_type == 'D'){
      console.log('dataentry');
      Subject.find().select('id name -_id').exec(function (err, allsubjects) {
        if(err){
          console.log(err);
          throw err;
        }else{
          next(allsubjects);
        }
      });
    }
  }else{
    console.log('guest');
    Subject.find().select('id name -_id').exec(function (err, allsubjects) {
      if(err){
        console.log(err);
        throw err;
      }else{
        next(allsubjects);
      }
    });
  }
};

function subjectFilter(err, index, next) {
  if(index == err.length){

  }else{

  }
}
