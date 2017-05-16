/**
 * Created by malaka on 4/2/17.
 */

var schCtrl = require('./server/controllers/schoolController');
var mongoose = require('mongoose');

schCtrl.getAllSchoolsByDistricts('Ampara', function (val) {
  console.log(val);
});
