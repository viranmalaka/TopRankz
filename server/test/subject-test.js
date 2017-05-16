/**
 * Created by malaka on 5/16/17.
 */

var subjectCtrl = require('../controllers/subjectController');
var mongoose = require('mongoose');
var expect = require('chai').expect;

describe('Subject Controller', function () {

  describe('getAllSubjectNames', function () {
    it('should return an array', function (done) {
      subjectCtrl.getAllSubjectNames(function (data) {
        expect(data).to.be.a('array');
        done();
      })
    });

    it('should return an array with id and name', function (done) {
      subjectCtrl.getAllSubjectNames(function (data) {
        expect(data[0]._doc).have.any.keys('id', 'name');
        done();
      })
    });

    it('should return an array with out test', function (done) {
      subjectCtrl.getAllSubjectNames(function (data) {
        expect(data[0]._doc).not.have.any.keys('test');
        done();
      })
    });
  });

  describe('getAllTopics', function () {
    it('should return an array', function (done) {
      subjectCtrl.getAllTopics('591904639f17d41475172314', function (data) {
        expect(data).to.be.a('array');
        done();
      });
    });

    it('should return an array - only have english and id', function (done) {
      subjectCtrl.getAllTopics('591904639f17d41475172314', function (data) {
        expect(data[0]).have.any.keys('english', 'id');
        done();
      });
    });

    it('should return an array - not sinhala', function (done) {
      subjectCtrl.getAllTopics('591904639f17d41475172314', function (data) {
        expect(data[0]).not.have.any.keys('sinhala');
        done();
      });
    });
  })

});
