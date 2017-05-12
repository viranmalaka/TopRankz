/**
 * Created by malaka on 3/30/17.
 */
var schCtrl = require('../controllers/schoolController');
var mongoose = require('mongoose');
var chai = require('chai');

describe('School', function() {
  it('get all district should return an array', function() {
    schCtrl.getAllDistricts(function (val) {
      chai.should(val).to.be.a('null');
    })
  });

  it('get all district not to be null', function () {
    schCtrl.getAllDistricts(function (val) {
      chai.expect(val).not.to.be(null);
    })
  });

  it('get all school should return an array', function() {
    schCtrl.getAllSchools(function (val) {
      chai.expect(val).to.be.a('array');
    })
  });

  it('get all school not to be null', function () {
    schCtrl.getAllSchools(function (val) {
      chai.expect(val).not.to.be.a('null');
    })
  });

  it('get schools by district', function () {
    schCtrl.getAllSchoolsByDistricts(1, function (val) {
      console.log(val);
      chai.expect(val).not.to.be(null);
    })
  })
});
