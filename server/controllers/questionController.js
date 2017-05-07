/**
 * Created by malaka on 5/7/17.
 */

const PaperAttempts = require('../models/paperAttempt');
const Paper = require('../models/paper');
const Question = require('../models/question');

module.exports.getComments = function (qID, next) {
  Question.findOne({id : qID}).select('comments').exec(function (err, que) {
    if(err){
      console.log(err);
      throw err;
    }else{
      if(que){
        next(true, que.comments);
      }else{
        next(false);
      }
    }
  })
};

