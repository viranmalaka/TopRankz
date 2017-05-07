/**
 * Created by malaka on 5/2/17.
 */

const PaperAttempts = require('../models/paperAttempt');
const Temp = require('../models/temp');
const Paper = require('../models/paper');
const Question = require('../models/question');

module.exports.startAttempt = function (student, paper, next) {
  var attempt = new PaperAttempts();
  attempt.student = student._id;
  attempt.paper = paper;
  attempt.startingTime = new Date();
  attempt.save(function (err, savedAttempt) {
    if(err){
      console.log(err);
      throw err;
    }else{
      Temp.findOne({userId : student._id}, function (err, temps) {
        if(err){
          console.log(err);
          throw err;
        }else{
          var t = new Temp();
          if(temps){
            t = temps;
          }else{
            t.userId = student._id;
            t.data = savedAttempt._id;
          }
          t.save(function (err, temp) {
            if(err){
              console.log(err);
              throw err;
            }else{
              next(savedAttempt.startingTime, savedAttempt.id);
            }
          })
        }
      });
    }
  });
};

module.exports.saveAttemptTemp = function (data, next) {
  PaperAttempts.findOne({id : data.attemptID},function (err, attempt) {
    if(err){
      console.log(err);
      throw err;
    }else{
      if(attempt){
        attempt.answers = data.answersData;
        attempt.markModified('answers');
        attempt.save(function (err, savedAttempt) {
          next(true);
        });
      }else{
        next(false);
      }
    }
  });
};

module.exports.finishAttempt = function (data, next) {
  PaperAttempts.findOne({id : data.attemptID}, function (err, att) {
    if(err){
      console.log(err);
      throw err;
    }else{
      att.endingTime = new Date();
      att.save(function (err, saved) {
        if(err){
          console.log(err);
          throw err;
        }else{
          next();
        }
      })
    }
  })
};

module.exports.setTimer = function (data, next) {
  console.log(data);
  Paper.findById(data, function (err, paper) {
    if(err){
      console.log(err);
      throw err;
    }else{
      if(paper){
        setTimeout(next, paper.time_limit * 60000);
      }
    }
  });
};

module.exports.getReview = function (user, attemptId, next) {
  PaperAttempts.findOne({id : attemptId}).exec(function (err, attempt) {
    if(err){
      console.log(err);
      throw err;
    }else{
      if(attempt){
        // next(attempt);
        if(user._id + "" == attempt.student + ""){
          populateQuestions(attempt.answers, 0, function (attemptWithQBody) {
            attempt.answers = attemptWithQBody;
            next(attempt);
          })
        }else{
          next(false);
        }
      }else{
        next(false);
      }
    }
  })
};

function populateQuestions(arr, i, next) {
  if(arr.length == i){
    next(arr);
  }else{
    Question.findById(arr[i].qId).select('-id -_id -paper -checkBy -difficulty -comments -mixOrder')
      .exec(function (err, que) {
        arr[i].qId = que;
        if(arr.givenAnswer == 0){
          arr[i].correct = false;
        }else{
          arr[i].correct = que.correct.indexOf(arr[i].givenAnswer - 1) > -1;
        }
        populateQuestions(arr, i+1, next);
      });
  }
}


