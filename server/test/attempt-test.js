/**
 * Created by malaka on 5/16/17.
 */

var attemptCtrl = require('../controllers/attemptController');
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


describe('Attempt Controller', function () {
  describe('getReview', function () {

    it('should return an object', function (done) {
      attemptCtrl.getReview(user, 5, function (data) {
        expect(data).to.be.a('Object');
        done();
      })
    });

    it('should contain keys of (papers, answers, endingTime', function (done) {
      attemptCtrl.getReview(user, 5, function (data) {
        expect(data._doc).have.any.keys('papers', 'answers', 'endingTime');
        done();
      })
    });
    it('should not contain keys of (test)', function (done) {
      attemptCtrl.getReview(user, 5, function (data) {
        expect(data._doc).not.have.any.keys('test');
        done();
      })
    });
    it('should be an array the answer', function (done) {
      attemptCtrl.getReview(user, 5, function (data) {
        expect(data._doc.answers).to.be.a('array');
        done();
      })
    });

    it('should be a value of correct in answer array', function (done) {
      attemptCtrl.getReview(user, 5, function (data) {
        expect(data._doc.answers[0]).have.any.keys('correct');
        done();
      })
    });
  });


  describe('getAttemptHistory', function () {
    it('should return an array', function (done) {
      attemptCtrl.getAttemptHistory(user, function (data) {
        expect(data).to.be.a('array');
        done();
      })
    });

    it('should return an array of length above 5 for viranmalaka', function (done) {
      attemptCtrl.getAttemptHistory(user, function (data) {
        expect(data).to.have.length.above(5);
        done();
      })
    });

    it('should return an array of length blow 0 for test user', function (done) {
      attemptCtrl.getAttemptHistory({_id: '5919031d05c02311c357abd0'}, function (data) {
        expect(data).to.have.length.below(1);
        done();
      })
    });

    it('should contain keys of (papers, answers, endingTime)', function (done) {
      attemptCtrl.getAttemptHistory(user, function (data) {
        expect(data[0]._doc).have.any.keys('answers');
        done();
      })
    });
    it('should contain keys of in the paper (name) - test paper populate', function (done) {
      attemptCtrl.getAttemptHistory(user, function (data) {
        expect(data[0]._doc.paper._doc).have.any.keys('name');
        done();
      })
    });


    it('should be true in the answer of attempt 7', function (done) {
      attemptCtrl.getAttemptHistory(user, function (data) {
        expect(data[6]._doc.answers[0]).to.be.equal(true);
        expect(data[6]._doc.answers[2]).to.be.equal(true);
        expect(data[6]._doc.answers[5]).to.be.equal(true);
        expect(data[6]._doc.answers[7]).to.be.equal(true);
        expect(data[6]._doc.answers[9]).to.be.equal(true);
        done();
      })
    });




  });
});
