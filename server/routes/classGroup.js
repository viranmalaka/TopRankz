/**
 * Created by malaka on 5/13/17.
 */

var router = require('express').Router();
var ClassGroup = require('../models/classGroup');
var Teacher = require('../models/teacher');
var Student = require('../models/student');
var Paper = require('../models/paper');

router.get('/get_all_cg_teacher', function (req, res) {
  if(req.user){
    if(req.user.acc_type == 'T'){
      Teacher.findById(req.user.acc_id).populate({
        path : 'classGroup',
        populate : { path : 'paper', select : "name"}
      }).exec(function (err, tchrs) {
        if(err){
          console.log(err);
          throw err;
        }else{
          res.jsonp({success : true, cgs : tchrs.classGroup });
        }
      });
    }else{
      res.jsonp({success : false});
    }
  }else{
    res.jsonp({success : false});
  }
});

router.post('/add_class_group', function (req, res) {
  if(req.user){
    if(req.user.acc_type == 'T'){
      var cg = new ClassGroup();
      cg.name = req.body.name;

      cg.save(function (err, saved) {
        if(err){
          console.log(err);
          throw err;
        }else{
          Teacher.findById(req.user.acc_id, function (err, tchrs) {
            if(err){
              console.log(err);
              throw err;
            }else{
              tchrs.classGroup.push(saved._id);
              tchrs.save(function (err, savedT) {
                res.jsonp({success : true, newOne : saved});
              })
            }
          })
        }
      })
    }else{
      res.jsonp({success : false});
    }
  }else{
    res.jsonp({success : false});
  }
});

router.get('/get_all_paper_of_teacher', function (req, res) {
  if(req.user){
    if(req.user.acc_type == 'T'){
      Paper.find({addedBy : req.user._id}).select('name').exec(function (err, papers) {
        if(err){
          console.log(err);
          throw err;
        }else{
          res.jsonp({success : true, papers : papers});
        }
      })
    }else{
      res.jsonp({success : false});
    }
  }else{
    res.jsonp({success : false});
  }
});

router.post('/allocate_papers', function (req, res) {
  var data = req.body.data;
  saveClassGroups(data, 0, function (arr) {
    res.jsonp({success : true});
  })
});


router.get('/drop_class_group', function (req, res) {
  console.log(req.user._id, req.query['id']);
  if(req.user){
    if(req.user.acc_type == 'T'){
      ClassGroup.remove({_id : req.query['id']}).exec(function (err, x) {
        if(x > 0){
          res.jsonp({success : true});
        }
      })
    }else{
      res.jsonp({success : false, msg : 'Not allowed'});
    }
  }else{
    res.jsonp({success : false, msg : 'Not allowed'});
  }
});

router.get('/get_class_groups', function (req, res) {
  if(req.user){
    Student.findById(req.user.acc_id).exec(function (err, std) {
      if(err){
        console.log(err);
        throw err;
      }else{
        res.jsonp({success : true, cg : std.classGroup});
      }
    })
  }else{
    res.jsonp({success : false});
  }
});

router.get('/get_enroll', function (req, res) {
  if(req.user){
    Student.findById(req.user.acc_id).exec(function (err, std) {
      if(err){
        console.log(err);
        throw err;
      }else{
        var x = std.classGroup.indexOf(req.query['id']);
        if(x > -1){
          std.classGroup.splice(x, 1);
        }else{
          std.classGroup.push(req.query['id']);
        }
        std.save(function (err, saved) {
          if(err){
            console.log(err);
            throw err;
          }else{
            res.jsonp({
              success : true,
              newList : saved.classGroup
            })
          }
        })
      }
    })
  }else{
    res.jsonp({success : false});
  }
});


function saveClassGroups(arr, index, next){
  if(arr.length == index){
    next(arr);
  }else{
    ClassGroup.findById(arr[index]).exec(function (err, cg) {
      for (var i = 0; i < arr[index].paper.length; i++) {
        var obj = arr[index].paper[i];
        cg.paper.push(obj);
      }
      cg.save(function (err, saved) {
        saveClassGroups(arr, index + 1, next);
      });
    })
  }
}

module.exports = router;

