/**
 * Created by malaka on 5/13/17.
 */

var router = require('express').Router();
var ClassGroup = require('../models/classGroup');
var Teacher = require('../models/teacher');

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

module.exports = router;

