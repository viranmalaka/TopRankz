/**
 * Created by malaka on 3/30/17.
 */
var schCtrl = require('../controllers/schoolController');
var mongoose = require('mongoose');
var expect = require('chai').expect;


describe('School', function() {
  it('get all district should return an array', function(done) {
    schCtrl.getAllDistricts(function (val) {
      expect(val).to.be.a('array');
      done();
    })
  });

  it('get all district should length of 25', function (done) {
    schCtrl.getAllDistricts(function (val) {
      expect(val).to.have.length.within(24, 26);
      done();
    })
  });

  it('get all school should return an array', function(done) {
    schCtrl.getAllSchools(function (val) {
      expect(val).to.be.a('array');
      done();
    })
  });

  it('get all school should be length of 25', function (done) {
    schCtrl.getAllSchools(function (val) {
      expect(val).to.have.length.above(2000);
      done();
    })
  });

  it('get schools by district', function () {
    schCtrl.getAllSchoolsByDistricts("Ampara", function (val) {
      expect(val).to.be.a('array');
    })
  })
});
