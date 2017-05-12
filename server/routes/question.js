/**
 * Created by malaka on 5/7/17.
 */

var router = require('express').Router();
var queCtrl = require('../controllers/questionController');

router.get('/get_comment', function (req, res) {
  if(req.query['qid']){
    queCtrl.getComments(req.query['qid'], function (suc, result) {
      res.jsonp({
        success : suc,
        comments : result
      })
    })
  }
});

router.post('/post_comment', function (req, res) {
  queCtrl.postComment(req.user, req.body, function (success, data) {
    res.jsonp({
      success : success,
      comments : data
    })
  })
});

router.post('/post_like', function (req, res) {
  console.log(req.body);
  queCtrl.postLikes(req.user, req.body, function (success, likes, yl) {
    res.jsonp({
      success : success,
      likeCount : likes,
      yourLike : yl
    })
  })
});

router.post('/post_diff', function (req, res) {
  queCtrl.postDiff(req.user, req.body, function (succ, newDiff) {
    res.jsonp({
      success : succ,
      newDiff : newDiff
    });
  })
});

module.exports = router;
