/**
 * Created by malaka on 3/27/17.
 */

const User = require('../models/user');
const Teacher = require('../models/teacher');
const Student = require('../models/student');
const Subject = require('../models/subject');
const School = require('../models/school');

var bycrypt = require('bcryptjs');

module.exports.checkUserName = function (val, next) {
  User.count({username : val.checkUserName.username}, function (err, result) {
    if(err){
      console.log(err);
      throw err;
    }else{
      val._checkUserName = result == 0;
      next(val);
    }
  })
};

module.exports.checkEmail = function (val, next) {
  User.count({email : val.checkEmail.email} , function (err, result) {
    if(err){
        console.log(err);
        throw err;
    }else{
        val._checkEmail = result == 0;
        next(val);
    }
  })
};

module.exports.getExtendedAccount = function (account, next) {

  User.findById(account._id, function (err, user) {
    if(account.type == 'S'){
      console.log(account.acc_id);
      Student.findById(account.acc_id, function (err, student) {
        if(err){
          console.log(err);
          throw err;
        }else{
          next(user,student);
        }
      })
    }else{
      Teacher.findById(account.acc_id, function (err, teacher) {
        if(err){
          console.log(err);
          throw err;
        }else{
          next(user, teacher);
        }
      })
    }
  });

};

// create new user
module.exports.createUser = function (newUser, cb) {
  bycrypt.genSalt(10, function (err, salt) {                          // generate salt to encrypt
    bycrypt.hash(newUser.password, salt, function (err, hash) {     // generate has with salt
      newUser.password = hash;                                    // replace hash with password
      newUser.save(function (err, user) {                         // save the user
        if(err){
          console.log(err);                                   // log errors
          throw err;
        }else{
          if(user.acc_type == 'S'){
            var thisStudent = new Student();
            thisStudent.save(function (err, std) {
              if(err){
                console.log(err);
                throw err;
              }else{
                user.acc_id = std._id;
                user.save(cb);
              }
            })
          }else if(user.acc_type == 'T'){
            var thisTeacher = new Teacher();
            thisTeacher.save(function (err, tch) {
              if(err){
                console.log(err);
                throw err;
              }else{
                user.acc_id = tch._id;
                user.save(cb);
              }
            })

          }
        }
      });
    })
  });
};


// compare password
module.exports.comparePassword = function (candidatePassword, hash, cb) {
  bycrypt.compare(candidatePassword, hash, function (err, isMatch) {
    if(err){
      console.log(err);
    }else{
      cb(null, isMatch);
    }
  });
};

module.exports.saveDetails = function (user, body, next) {
  user.address = body.address;
  user.email = body.email;
  user.first_name = body.fName;
  user.last_name = body.lName;
  user.telephone = body.telephone;

  console.log(body);
  user.save(function (err, user) {
    if(err){
      console.log(err);
      throw err;
    }else{
      console.log('save user');
        if(user.acc_type == 'T'){
          Teacher.findById(user.acc_id, function (err, teacher) {
            if(err){
              console.log(err);
              throw err;
            }else{
              teacher.school = body.school;
              teacher.visibleName = body.vName;

              Subject.findOne({id : body.subject}, function (err, subject) {
                teacher.subject.push(subject._id);
                teacher.save(function (err, teacher) {
                  if(err){
                    console.log(err);
                    throw err;
                  }else{
                    next(teacher);
                  }
                });
              });
            }
          })
        }else{
          Student.findById(user.acc_id, function (err, student) {
            if(err){
              console.log(err);
              throw err;
            }else{
              School.findOne({id : body.school}, function (err, school) {
                student.school = school._id;
                student.birthday = new Date(body.birthday);
                console.log(student.birthday);
                student.save(function (err, student) {
                  if(err){
                    console.log(err);
                    throw err;
                  }else{
                    next(student);
                  }
                })

              });
            }
          })
        }
    }
  });

};
