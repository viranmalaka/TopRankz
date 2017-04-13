/**
 * Created by malaka on 3/26/17.
 */
var router = require('express').Router();
var pprCtrl = require('../controllers/paperController');

router.get('/check_paper_name', function (req, res) {
  pprCtrl.checkPaperName(req.query.name, function (exist) {
    res.jsonp({
      success : true,
      exist : exist
    })
  });
});

router.post('/new_paper', function (req, res) {
  // server side validation should be done
  pprCtrl.createPaper(req.user, req.body, function (t) {
    // console.log(err,t);
    res.jsonp({
      success : true,
      paper : t
    });
  });
});

router.post('/new_question', function (req, res) {
  pprCtrl.tempAddQuestions(req.user, req.body, function (t) {
    // console.log(err, t);
    res.jsonp({
      success : true,
      temp :t
    });
  })
});

router.get('/can_edit_this', require('./user').validAuth, function (req, res) {
  pprCtrl.canEditThis(req.user, req.query['paper_id'], function (possible) {
    res.jsonp({
      success : true,
      can : possible
    })
  });
});

module.exports = router;
