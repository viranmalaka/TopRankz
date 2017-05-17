/**
 * Created by malaka on 4/22/17.
 */
var coonnections = require('../controllers/dbController').Connection;
var Subject = require('../models/subject');
var User = require('../models/user');
var Question = require('../models/question');
var Paper = require('../models/paper');

function random(start, end) {
  var range = end - start;
  var r = (Math.random() * 1000).toFixed();
  return (r % range + start);
}



var paperNames = [
  '2010 - A/L physics',
  '2034 - O/L history',
  '2343 - A/L science',
  '2012 - A/L chemistry',
  '2342 - O/L buddhism',
  '2342 - A/L physics 01',
  '2323 - O/L history 02',
  '2323 - O/L history 03',
  '2323 - O/L history 04',
  '2323 - O/L history 05',
  '2323 - O/L history 06',
  '2323 - O/L history 07',
  '2323 - O/L history 08',
  '2323 - O/L history 09',
  '2323 - O/L history 10',
  '2323 - Theory Of Com',
  '2323 - Programming Language',
  '2323 - Artificial Intelligent',
  'Test 1',
  'Test 2',
  'Test 3',
  'Test 4'
];

function setSubject(next) {
  Subject.find().select('_id').exec(function (err, subs){
    next(subs);
  });
}

function createPaper(names, subjects, user,  index, next) {
  if(names.length == index){
    next(names);
  }else{
    var x = random(0,5);
    var p = new Paper({
      name : names[index],
      medium : 'E',                        // {'S','E','T'}
      subject: subjects[x]._id,
      time_limit: 40,   // in minutes
      unit_mark : 1,
      questions : 20,
      finished : true,
      numAnswer : 4,
      mixOrder : true,
      addedBy: user[index % user.length]._id,
      descriptionText : "this is the description",
      isPassPaper : true
    });

    p.save(function (err, newPaper) {
      createPaper(names, subjects, user,  index + 1, next);
    });
  }
}

setSubject(function (subjects) {
  User.find({acc_type : {$ne :'S'}}).select('_id').exec(function (err, users) {
    createPaper(paperNames, subjects, users, 0, function (papers) {
      papers.forEach(function (e) {
        console.log('done');
      })
    })
  });
});
