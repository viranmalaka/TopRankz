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
  if(user && (user.acc_type != 'D')){
    if(user.acc_type == 'T'){
      Teacher.findById(user.acc_id).populate('subject').select('subject').exec(function (err, teacher) {
        if(err){
          console.log(err);
          throw err;
        }else{
          subjectFilter(teacher.subject, 0, function (arr) {
            next(arr);
          });
        }
      })
    }else{
      Students.findById(user.acc_id).populate('enroll').select('enroll').exec(function (err, students) {
        if(err){
          console.log(err);
          throw err;
        }else{
          subjectFilter(students.enroll, 0, function (arr) {
            next(arr);
          });
        }
      })
    }
  }else{
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


function subjectFilter(arr, index, next) {
  if(index == arr.length){
    next(arr);
  }else{
    var c = arr[index];
    arr[index] = {
      id : c.id,
      name : c.name
    };
    subjectFilter(arr, index + 1, next);
  }
}
