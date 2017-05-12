/**
 * Created by malaka on 5/7/17.
 */

const PaperAttempts = require('../models/paperAttempt');
const Paper = require('../models/paper');
const Question = require('../models/question');
const User = require('../models/user');

module.exports.getComments = function (qID, next) {
  Question.findOne({id : qID}).select('comments').exec(function (err, que) {
    if(err){
      console.log(err);
      throw err;
    }else{
      if(que){
        populateUsers(que.comments, 0, function (arr) {
          next(true, arr);
        });
      }else{
        next(false);
      }
    }
  })
};

module.exports.postComment = function (user, data, next) {
  if(user){
    var com = {
      user : user._id,
      body : data.comment_body,
      likes : {}
    };
    Question.findOne({id : data.questionID}, function (err, que) {
      if(err){
        console.log(err);
        throw err;
      }else{
        if(que){
          que.comments.push(com);
          que.markModified('comments');
          que.save(function (err, saved) {
            if(err){
              console.log(err);
              throw err;
            }else{
              populateUsers(saved.comments, 0, function (arr) {
                next(true, arr);
              })
            }
          })
        }else{
          next(false)
        }
      }
    })
  }else{
    next(false);
  }
};

module.exports.postLikes = function (user, data, next) {
  if(user){
    Question.findOne({id : data.questionID}).select('comments').exec(function (err, que) {
      if (err) {
        console.log(err);
        throw err;
      } else {
        if(que){
          if(data.likes){
            que.comments[data.index].likes[user._id] = 1;
          }else{
            delete que.comments[data.index].likes[user._id];
          }
          que.markModified('comments');
          que.save(function (err, saved) {
            if(err){
              console.log(err);
              throw err;
            }else{
              next(true, Object.keys(saved.comments[data.index].likes).length,
                saved.comments[data.index].likes[user._id]);
            }
          })
        }else{
          next(false);
        }
      }
    });
  }else{
    next(false);
  }
};

module.exports.postDiff = function (user, data, next) {
  if(user){
    Question.findOne({id : data.questionID}).exec(function (err, que) {
      if (err) {
        console.log(err);
        throw err;
      } else {
        if (que) {
          console.log(data);
          if(!que.difficulty) que['difficulty'] = {};
          que.difficulty[user._id] = data.diff;
          que.markModified('difficulty');
          var diffSum = 0;
          que.save(function (err, saved) {
            for (var i = 0; i < Object.keys(saved.difficulty).length; i++) {
              var obj = Object.values(saved.difficulty)[i];
              diffSum += obj;
            }
            next(true, diffSum / Object.values(saved.difficulty).length);
          });
        }
      }
    });
  }else{
    next(false);
  }
};

function populateUsers(arr, index, next) {
  if(index == arr.length){
    next(arr);
  }else{
    User.findById(arr[index].user).select('username profile_picture').exec(function (err, user) {
      if(err){
        console.log(err);
        throw err;
      }else{
        arr[index].user = user;
        arr[index].yourLike = arr[index].likes[user._id];
        arr[index].likes = Object.keys(arr[index].likes).length;
        populateUsers(arr, index + 1, next);
      }
    })
  }
}
