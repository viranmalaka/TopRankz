/**
 * Created by malaka on 5/6/17.
 */

var router = require('express').Router();
var timeout = require('connect-timeout');
var attmpCtrl = require('../controllers/attemptController');

router.get('/get_start_paper', function (req, res) {
  attmpCtrl.startAttempt(req.user, req.query['paper'], function (time, attemptID, finish, resume, ga) {
    console.log('time is', time);
    res.jsonp({
      success : true,
      time : time,
      attemptID : attemptID,
      finish : finish,
      resume : resume,
      givenAns : ga
    })
  });
});

router.post('/save_attempt_temp', function (req, res) {
  attmpCtrl.saveAttemptTemp(req.body, function (r) {
    res.jsonp({
      success : r
    })
  })
});

router.post('/save_attempt_final', function (req, res) {
  attmpCtrl.finishAttempt(req.user,req.body, function (r) {
    res.jsonp({
      success : r
    });
  });
});

router.get('/set_timer',timeout(10*1000), function (req, res) {
  attmpCtrl.setTimer(req.query['paper'], function () {
    res.jsonp({
      success : true
    });
  })
});

router.get('/check_any_attempting', function (req, res) {

});

router.get('/get_review', function (req, res) {
  var attemptID = req.query['attemptID'];
  if(attemptID){
    attmpCtrl.getReview(req.user, attemptID, function (result) {
      res.jsonp({
        success : true,
        res : result
      });
    })
  }
});

router.get('/attempt_history', function (req, res) {
  if(req.user){
    attmpCtrl.getAttemptHistory(req.user, function (data) {
      res.jsonp({success : true, data : data});
    });
  }else{
    res.jsonp({success : false});
  }
});

module.exports = router;

