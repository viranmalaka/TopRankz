/**
 * Created by malaka on 4/2/17.
 */
var router = require('express').Router();
var subCtrl = require('../controllers/subjectController');

router.get('/all_subject_names', function (req, res) {
  subCtrl.getAllSubjectNames(function (subs) {
    res.json({subjects : subs});
  })
});

router.get('/all_subject_of_user', function (req, res) {
  subCtrl.getUsersSubject(req.user, function (subs) {
    res.jsonp({
      success : true,
      subjects : subs
    })
  })
});

router.get('/all_topics', function (req, res) {
  subCtrl.getAllTopics(req.query['subject'], function (topics) {
    res.jsonp({
      success : true,
      topics : topics
    });
  })
});


module.exports = router;
