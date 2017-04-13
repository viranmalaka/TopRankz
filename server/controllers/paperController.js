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

module.exports.createPaper = function (user, data, next) {
  var paper = new Paper();
  paper.name = data.name;
  paper.medium = data.medium;
  paper.subject = data.subject;
  paper.time_limit = data.timeLimit;
  paper.questions = data.nQuestions;
  paper.unit_mark = data.unitMark;
  paper.numAnswer = data.nAnswers;
  paper.mixOrder = data.random;
  paper.addedBy = user._id;

  paper.save(function (err, p) {
    if(err){
      console.log(err);
      throw err;
    }else {
      var temp = new Temp();
      temp.userId = user._id;
      temp.data = {paper : p};
      temp.save(function (err, t) {
        require('../states').states[user._id] = p._id;
        next(p);
      });
    }
  });
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

module.exports.canEditThis = function (user, paper_id,next) {
  Paper.findOne({id : paper_id}, function (err, paper) {
    console.log('user', user._id);
    console.log('paper_id', paper_id);
    console.log('paper', paper);
    console.log('state', require('../states').states);
    next(paper.addedBy == user._id && paper._id == require('../states').states[user._id]);
  })
};
