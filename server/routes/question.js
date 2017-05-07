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

router.post('post_comment', function (req, res) {

});

module.exports = router;
