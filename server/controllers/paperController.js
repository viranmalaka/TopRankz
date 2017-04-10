/**
 * Created by malaka on 4/9/17.
 */

const Paper = require('../models/paper');
const Question = require('../models/question');
const Temp = require('../models/temp');

module.exports.checkPaperName = function (name, next) {
  Paper.find({name : name}, function (err, papers) {
    next(papers.length > 0);
  })
};

module.exports.tempAddPaper = function (user, data, next) {
  var t = new Temp();
  t.userId = user._id;
  t.data = {paper : data, questions : {}};
  t.save(function (err, t) {
    if(err){
      console.log(err);
      throw err;
    }else{
      next(t);
    }
  })
};

module.exports.tempAddQuestions = function (user, data, next) {
  Temp.findOne({userId : user._id}, function (err, temp) {
    if(err){
      console.log(err);
      throw err;
    }else{
      if(temp){
        temp.data.questions[data.questionNumber] = data;
        temp.markModified('data');
        temp.save(function (err, t) {
          if(err){
            console.log(err);
            throw err;
          }else{
            next(t);
          }
        })
      }
    }
  })
};

module.exports.tempGetPaper = function (user, next) {
  Temp.findOne({userId : user._id}, function (err, temp) {
    if(err){
      console.log(err);
      throw err;
    }else{
      next(temp);
    }
  })
};
