/**
 * Created by malaka on 3/28/17.
 */

var router = require('express').Router();
var schCtrl = require('../controllers/schoolController');

// route for get all districts names from the database
router.get('/allDistricts', function (req, res) {
  schCtrl.getAllDistricts({}, function (val) {
    res.json({districts : val._getAllDistricts});
  });
});

// route for get all schools names from the database
router.get('/allSchools', function (req, res) {
  schCtrl.getAllSchools({}, function (val) {
    res.json({schools : val._getAllSchools});
  });
});

// route for get all school names by district from the database
router.get('/allSchoolsByDistricts', function (req, res) {
  schCtrl.getAllSchoolsByDistricts({getAllSchoolsByDistricts : {district : req.query.district}}, function (val) {
    res.json({schools : val._getAllSchoolsByDistrict});
  });
});

module.exports = router;
