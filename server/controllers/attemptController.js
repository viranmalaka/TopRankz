/**
 * Created by malaka on 5/2/17.
 */

const PaperAttempts = require('../models/paperAttempt');
const Temp = require('../models/temp');
const Paper = require('../models/paper');
const Question = require('../models/question');
const Subject = require('../models/subject');

module.exports.startAttempt = function (student, paper, next) {
  Temp.findOne({userId : student._id}, function (err, temps) {
    if(err){
      console.log(err);
      throw err;
    }else{
      if(temps){
        PaperAttempts.findById(temps.data).populate({path :'paper', select:'time_limit'}).exec(function (err, attempt) {
          if(err){
            console.log(err);
            throw err;
          }else{
            if(attempt.startingTime.getTime() + attempt.paper.time_limit*60000 < (new Date()).getTime()){
              console.log('finish the paper');
              finishAttemptFunction(student, {attemptID : attempt.id}, function () {
                next(false, attempt.id, true);
              });
            }else{
              next(attempt.startingTime, attempt.id, false, true, attempt.answers);
            }
          }
        })
      }else{
        var attempt = new PaperAttempts();
        attempt.student = student._id;
        attempt.paper = paper;
        attempt.startingTime = new Date();
        attempt.save(function (err, savedAttempt) {
          if(err){
            console.log(err);
            throw err;
          }else{
            var t = new Temp();
            t.userId = student._id;
            t.data = savedAttempt._id;
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

var finishAttemptFunction = function (user, data, next) {
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
          console.log(user._id);
          Temp.remove({userId : user._id}, function (e, x) {
            next(true);
          });
        }
      })
    }
  })
};

module.exports.finishAttempt = finishAttemptFunction;

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
          populateQuestions(attempt.answers, user._id, 0, function (attemptWithQBody) {
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

function populateQuestions(arr, userID, i, next) {
  if(arr.length == i){
    next(arr);
  }else{
    Question.findById(arr[i].qId).select(' -_id -checkBy -comments -mixOrder')
      .exec(function (err, que) {
        if(arr.givenAnswer == 0){
          arr[i].correct = false;
        }else{
          arr[i].correct = que.correct.indexOf(arr[i].givenAnswer - 1) > -1;
        }
        var diffSum = 0;
        if(que.difficulty){
          for (var j = 0; j < Object.keys(que.difficulty).length; j++) {
            diffSum += Object.values(que.difficulty)[j];
          }
          que.yourDiff = que.difficulty[userID];
          var yd = que.difficulty[userID];
          que.difficulty = {avg : diffSum / Object.keys(que.difficulty).length, yourDiff : yd};
        }
        arr[i].qId = que;
        populateQuestions(arr, userID, i+1, next);
      });
  }
}


