/**
 * Created by malaka on 4/2/17.
 */
var router = require('express').Router();
var subCtrl = require('../controllers/subjectController');

router.get('/allSubjectNames', function (req, res) {
  subCtrl.getAllSubjectNames(function (subs) {
    res.json({subjects : subs});
  })
});

module.exports = router;