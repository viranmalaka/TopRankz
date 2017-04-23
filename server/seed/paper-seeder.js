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
  '2342 - A/L physics',
  '2323 - O/L history'
];


function setSubject(next) {
  Subject.find().select('_id').exec(function (err, subs){
    next(subs);
  });
}

function createPaper(names, subjects, index, next) {
  if(names.length == index){
    next(names);
  }else{
    var x = random(0,2);
    var p = new Paper({
      name : names[index],
      medium : 'E',                        // {'S','E','T'}
      subject: subjects[x]._id,
      time_limit: 80,   // in minutes
      unit_mark : 1,
      questions : 20,
      finished : true,
      numAnswer : 4,
      mixOrder : true,
      addedBy: '58ef03f7d4aa602f58b5626e',
      descriptionText : "this is the description",
      isPassPaper : true
    });

    p.save(function (err, newPaper) {
      names[index] = newPaper;
      createPaper(names, subjects, index + 1, next);
    });
  }
}

setSubject(function (subjects) {
  console.log(subjects);
  createPaper(paperNames, subjects, 0, function (papers) {
    papers.forEach(function (e) {
      console.log(e._id);
    })
  })
});
