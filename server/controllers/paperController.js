/**
 * Created by malaka on 4/9/17.
 */
var mongoose = require('mongoose');
var schema = mongoose.Schema;
const Paper = require('../models/paper');
const Question = require('../models/question');
const Temp = require('../models/temp');
const Subject = require('../models/subject');

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
  paper.isPassPaper = data.isPassPaper;
  paper.descriptionText = '';

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
          ans.push({id : j + 1, body : ''});
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
      Temp.findOne({userId : user._id}, function (err, olderTemp) {
        if(err){
          console.log(err);
          throw err;
        }else{
          if(olderTemp){
            olderTemp.data = temp.data;
            olderTemp.markModified('data');
            olderTemp.save(function (err, newTemp) {
              next(p, newTemp['data'].questions);
            });
          } else{
            temp.save(function (err, newTemp) {
              next(p, newTemp['data'].questions);
            })
          }
        }
      });
      // Temp.update({userId : user._id}, temp, {upsert : true}).exec(function (err, res) {
      //   Temp.findOne({userId : user._id}, function (err, t) {
      //     console.log(p);
      //     console.log(t);
      //     next(p, t['data'].questions);
      //   })
      // })
    }
  });
};

module.exports.addDescription = function (data, next) {
  Paper.findById(data.paperId, function (err, paper) {
    if(err){
        console.log(err);
        throw err;
    }else{
        if(paper){
          paper.descriptionText = data.description;
          paper.save(function (err, p) {
            if(err){
              console.log(err);
              throw err;
            }else{
              next(p);
            }
          })
        }
    }
  })
};

module.exports.submitQuestions = function (all, user, data, next) {
  Temp.findOne({userId : user._id}, function (err, temp) {
    if(err){
      console.log(err);
      throw err;
    }else{
      if(temp){
        if(all){
          temp.data.questions = data;
        }else{
          temp.data.questions[data.questionNumber-1] = data;
        }
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

//not using
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

module.exports.finishPaper = function (finished, user, paper, questions, next) {
  Temp.findOne({userId : user._id}, function (err, temp) {
    if(err){
      console.log(err);
      throw err;
    }else{
      if(temp){
        Paper.findById(temp.data.paper, function (err, tempPaper) {
          if(err){
            console.log(err);
            throw err;
          }else{
            tempPaper.name = paper.name;
            tempPaper.medium = paper.medium;
            tempPaper.subject = paper.subject;
            tempPaper.time_limit = paper.time_limit;
            tempPaper.questions = paper.questions;
            tempPaper.unit_mark = paper.unit_mark;
            tempPaper.numAnswer = paper.numAnswer;
            tempPaper.mixOrder = paper.mixOrder;
            tempPaper.addedBy = user._id;
            tempPaper.isPassPaper = paper.isPassPaper;
            tempPaper.finished = finished;

            tempPaper.save(function (err, savedPaper) {
              if(err){
                console.log(err);
                throw err;
              }else{
                for(var i= 0; i < questions.length; i ++) {
                  questions[i].paper = savedPaper._id;
                  questions[i].checkedBy = finished ? user._id : null;
                  questions[i].difficulty = [];
                  questions[i].comments = [];
                }
                insertQuestionBatch(questions, 0, function (savedCount, err, errIndex) {
                  if(savedCount == questions.length){
                    Temp.remove({userId : user._id},function (err, t) {});
                    console.log('Done');
                    next(true);
                  }else{
                    Question.remove({paper : savedPaper._id}, function (removeError, count) {
                      console.log('remove ' + count);
                      next(false, err.message, errIndex);
                    });
                  }
                });
              }
            })
          }
        })
      }else{
        next(false);
      }
    }
  })
};

module.exports.getAllTags = function (next) {
  Question.distinct('tags', function (err, tags) {
    next(tags);
  });
};

module.exports.getPaperIds = function (sub, type, user, next) {
  var query;
  Subject.findOne({id : sub}).select('_id').exec(function (err, sub) {
    if (sub) {
      switch (type) {
        case 'pp':
          query = {subject: sub._id, finished: true, isPassPaper: true};
          break;
        case 'op':
          query = {subject: sub._id, finished: true, isPassPaper: false};
          break;
        case 'pr':
          query = {subject: sub._id, finished: false};
          break;
        case 'mp':
          query = {subject: sub._id, addedBy: user};
          break;
      }
      console.log(query);
      Paper.find(query).select('_id').exec(function (err, papers) {
        if (err) {
          console.log(err);
          throw err;
        } else {
          next(papers)
        }
      });
    }
  });
};

module.exports.getPaper = function (id, next) {
  Paper.findById(id).populate('addedBy','username').exec(function (err, paper) {
    next(paper);
  });
};

module.exports.getPaperById = function (id, next) {
  Paper.findOne({id : id}, function (err, paper) {
    if(err){
      console.log(err);
      throw err;
    }else{
      next(paper);
    }
  })
};

module.exports.getQuestion = function (p, q, next) {
  Question.findOne({paper: p, questionNumber: q}, function (err, que) {
    if(err){
      console.log(err);
      throw err;
    }else{
      next(que);
    }
  })
};

function insertQuestionBatch(docs, index, next) {
  if(docs.length == index){
    next(index);
  }else{
    var q = new Question(docs[index]);
    q.save(function (err, savedQuestions) {
      if(err){
        next(0, err, index);
      }else{
        insertQuestionBatch(docs, index + 1, next);
      }
    })
  }
}
