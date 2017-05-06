/**
 * Created by malaka on 5/2/17.
 */

const PaperAttempts = require('../models/paperAttempt');
const Temp = require('../models/temp');

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
      // Temp.findOne({userId})
      console.log('student ' , student);
      var t = new Temp();
      t.userId = student._id;
      t.data = savedAttempt._id;
      t.save(function (err, temp) {
        if(err){
          console.log(err);
          throw err;
        }else{
          next(savedAttempt.startingTime);
        }
      })
    }
  });
};

module.exports.saveAttemptTemp = function (user, data, next) {
  Temp.find({userId : user}, function (err, temp) {
    if(err){
      console.log(err);
      throw err;
    }else{
      PaperAttempts.findById(temp[0].data, function (err, attempt) {
        if(err){
          console.log(err);
          throw err;
        }else{
          attempt.answers = data;
          attempt.markModified('answers');
          attempt.save(function (err, savedAttempt) {
            next();
          });
        }
      })
    }
  })
};

module.exports.finishAttempt = function (user) {
  Temp.find({userId : user}, function (err, temp) {
    if(err){
      console.log(err);
      throw err;
    }else{
      PaperAttempts.findById(temp[0].data, function (err, attempt) {
        if(err){
          console.log(err);
          throw err;
        }else{
          attempt.endingTime = new Date();
          attempt.save(function (err, savedAttempt) {
            if(err){
              console.log(err);
              throw err;
            }else{

            }
          })
        }
      })
    }
  })
};
