/**
 * Created by malaka on 5/16/17.
 */

var usrCtrl = require('../controllers/userController');
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

  describe('checkUserName', function () {
    it('should test the username - viranmalaka(exist)', function (done) {
      usrCtrl.checkUserName({checkUserName : {username : 'viranmalaka'}}, function (val) {
        expect(val._checkUserName).to.equal(false);
        done();
      })
    });

    it('should test the username - test(not)', function (done) {
      usrCtrl.checkUserName({checkUserName : { username :'testtest'}}, function (val) {
        expect(val._checkUserName).to.equal(true);
        done();
      })
    });
  });

  describe('checkEmail', function (){
    it('should be true in test@test.com', function (done) {
      usrCtrl.checkEmail({checkEmail: {email: 'test@test.com'}}, function (val) {
        expect(val._checkEmail).to.equal(true);
        done();
      })
    });

    it('should be false in sdf@sdf.com', function (done) {
      usrCtrl.checkEmail({checkEmail : {email : 'sdf@sdf.com'}}, function (val) {
        expect(val._checkEmail).to.equal(false);
        done();
      })
    });
  });

  describe("getExtendedAccount", function () {
    it('should return two objects', function (done) {
      usrCtrl.getExtendedAccount(user, function (a, b) {
        expect(a).not.to.a('null');
        expect(b).not.to.a('null');
        done();
      })
    });
  });

  describe("getEnrollment", function () {
    it('should return an array', function (done) {
      usrCtrl.getEnrollments(user, function (enrol) {
        expect(enrol).to.be.a('array');
        done();
      })
    });
  });

});
