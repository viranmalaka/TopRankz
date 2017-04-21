/**
 * Created by malaka on 3/26/17.
 */
var router = require('express').Router();
var pprCtrl = require('../controllers/paperController');
var validAuth = require('./user').validAuth;
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
  pprCtrl.createPaper(req.user, req.body, function (p, q) {
    res.jsonp({
      success : true,
      paper : p,
      questions : q
    });
  });
});


//not using now
router.post('/submit_one_question', function (req, res) {
  pprCtrl.submitQuestions(false, req.user, req.body, function (t) {
    res.jsonp({
      success : true,
      temp :t
    });
  })
});


router.post('/submit_all_questions', function (req, res) {
  pprCtrl.submitQuestions(true, req.user, req.body, function (t) {
    res.jsonp({
      success : true,
      temp : t
    })
  })
});

router.post('/finish_paper', function (req, res) {
  pprCtrl.finishPaper(true, req.user, req.body.paper, req.body.questions, function (success) {
    res.jsonp({
      success: success
    });
  })
});

router.post('/finish_paper_for_pr', function (req, res) {

});

router.post('/edit_one_question', function (req, res) {

});

router.post('/proof_read_ok', function (req, res) {

});

router.post('/set_description', validAuth, function (req, res) {
  pprCtrl.addDescription(req.body, function (paper) {
    res.jsonp(
      {success: true, paper: paper}
    );
  });
});

router.get('/edit_this_paper', validAuth, function (req, res) {
  pprCtrl.getEditThisPaper(req.user, req.query['paper_id'], function (possible, p, q) {
    console.log(q);
    res.jsonp({
      success : true,
      can : possible,
      paper : p,
      questions : q
    })
  });
});

router.get('/get_all_tags', function (req, res) {
  pprCtrl.getAllTags(function (tags) {
    res.jsonp({
      success : true,
      tags : tags
    })
  })
});

module.exports = router;

