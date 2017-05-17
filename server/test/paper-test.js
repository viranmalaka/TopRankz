/**
 * Created by malaka on 5/16/17.
 */
var paperCtrl = require('../controllers/paperController');
var mongoose = require('mongoose');
var expect = require('chai').expect;

var user = {
  "_id" : "591902c405c02311c357abce",
  "username" : "viranmalaka",
  "password" : "$2a$10$qlD0NCxIFwBal1kzKCBPVuqO.B007EWErc8kJaWLRRuljFqxYOH0O",
  "email" : "sdf@sdf.com",
  "acc_type" : "S",
  "__v" : 0,
  "acc_id" : "591902c505c02311c357abcf",
  "address" : "asdfkasdfa\nsdf\nasdfasdf",
  "first_name" : "Viran",
  "last_name" : "Malaka",
  "telephone" : "0779988420",
  "profile_picture" : "viranmalaka.jpg"
};

var extendUser = {
  "_id" : "591902c505c02311c357abcf",
  "classGroup" : [
    "591994e9e4e2411ab1a299ee",
    "5919a41b8230512fb480240d"
  ],
  "enroll" : [
    ("591904639f17d41475172311"),
    ("591904639f17d41475172312"),
    ("591904639f17d41475172315")
  ],
  "__v" : 4,
  "birthday" : ("1994-08-24T18:30:00.000Z"),
  "school" : ("59190468a1af3514832c9d15")
};

describe('User', function () {

  describe('checkPaperName', function () {
    it('should test the paper name - 2010 A/L physics(exist)', function (done) {
      paperCtrl.checkPaperName('2010 A/L physics', function (val) {
        expect(val).to.equal(false);
        done();
      })
    });

    it('should test the username - test123(not)', function (done) {
      paperCtrl.checkPaperName('test123123', function (val) {
        expect(val).to.equal(false);
        done();
      })
    });
  });

  describe('getTempPaper', function () {
    it('should return something', function (done) {
      paperCtrl.tempGetPaper(user, function (data) {
        expect(data).to.equal(null);
        done();
      })
    });
  });


  describe('getAllTags', function () {
    it('should return an array', function (done) {
      paperCtrl.getAllTags(function (data) {
        expect(data).to.be.a('array');
        done();
      });
    });

    it('should return an array of length more than 10', function (done) {
      paperCtrl.getAllTags(function (data) {
        expect(data).to.have.length.above(10);
        done();
      });
    });
  });

  describe('getPaperIds', function () {
    it('should return an array', function (done) {
      paperCtrl.getPaperIds(1, 'pp', user, function (data) {
        expect(data).to.be.a('array');
        done();
      });
    });

    it('should return an array of length more than 10', function (done) {
      paperCtrl.getPaperIds(2, 'pp', user, function (data) {
        expect(data).to.have.length.above(2);
        done();
      });
    });

    it('should return an array - another input', function (done) {
      paperCtrl.getPaperIds(2, 'abc', user, function (data) {
        expect(data).to.be.a('array');
        done();
      });
    });
  });

  describe('getPaper', function () {
    it('should return an Object', function (done) {
      paperCtrl.getPaper('59190470669f07149138878b', function (data) {
        expect(data).to.be.a('Object');
        done();
      });
    });

    it('should return an object with addedBy populated', function (done) {
      paperCtrl.getPaper('59190470669f07149138878b', function (data) {
        expect(data._doc).have.any.keys('addedBy');
        expect(data._doc.addedBy._doc).have.any.keys('username');
        done();
      });
    });

    it('should not return an Object - wrong input', function (done) {
      paperCtrl.getPaper('59190470669f071491388', function (data) {
        expect(data).not.to.be.a('Object');
        done();
      });
    });
  });

  describe('getPaperById', function () {
    it('should return an Object', function (done) {
      paperCtrl.getPaperById(1, function (data) {
        expect(data).to.be.a('Object');
        done();
      });
    });

    it('should return an object that has key of name', function (done) {
      paperCtrl.getPaperById(2, function (data) {
        expect(data._doc).have.any.keys('name');
        done();
      });
    });

    it('should not return an object - for wrong input', function (done) {
      paperCtrl.getPaperById(500, function (data) {
        expect(data).not.to.be.a('Object');
        done();
      });
    });
  });


  describe('getQuestionInView', function () {
    it('should return one object', function (done) {
      paperCtrl.getQuestionInView('59190470669f07149138878b', 4, function (data) {
        expect(data).to.be.a('Object');
        done();
      })
    });

    it('should not return one object - wrong input', function (done) {
      paperCtrl.getQuestionInView('59190470669f07149138878b', 500, function (data) {
        expect(data).not.to.be.a('Object');
        done();
      })
    });

    it('should return one object with key of (body)', function (done) {
      paperCtrl.getQuestionInView('59190470669f07149138878b', 4, function (data) {
        expect(data._doc).have.any.keys('body');
        done();
      })
    });

  });
});
