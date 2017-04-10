/**
 * Created by malaka on 3/26/17.
 */
var router = require('express').Router();
var Paper = require('../models/paper');
var pprCtrl = require('../controllers/paperController');
var subjCtrl = require('../controllers/subjectController');

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
  pprCtrl.tempAddPaper(req.user, req.body, function (t) {
    // console.log(err,t);
    res.jsonp({temp : t});
  });
});

router.post('/new_question', function (req, res) {
  pprCtrl.tempAddQuestions(req.user, req.body, function (t) {
    // console.log(err, t);
    res.jsonp({temp :t});
  })
});

module.exports = router;
