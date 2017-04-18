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
      var questionArray = [];
      for (var i = 0; i < p.questions; i++) {
        var ans = [];
        for (var j = 0; j < p.numAnswer; j++) {
          ans.push({id : j + 1, body : 'test'});
        }
        questionArray.push({
          body : "",
          answers : ans,
          correct : [],
          tags : [],
          topics : [],
          questionNumber : i + 1,
          mixOrder : true
        });
      }
      temp.data = {paper : p._id, questions : questionArray};
      Temp.update({userId : user._id}, temp, {upsert : true}).exec(function (err, res) {
        Temp.findOne({userId : user._id}, function (err, t) {
          console.log(p);
          console.log(t);
          next(p, t['data'].questions);
        })
      })
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

module.exports.getEditThisPaper = function (user, paper_id, next) {
  Paper.findOne({id : paper_id}, function (err, paper) {
    if(paper){
      Temp.findOne({userId : user._id}, function (err, temp) {
        if(temp){
          if(temp.data.paper.equals(paper._id)){
            next(true, paper, temp.data.questions);
          }else{
            next(false);
          }
        }else{
          next(false);
        }
      })
    }else{
      next(false);
    }
  })
};


module.exports.getAllTags = function (next) {
  Question.distinct('tags', function (err, tags) {
    next(tags);
  });
};
