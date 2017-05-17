/**
 * Created by malaka on 3/27/17.
 */

const User = require('../models/user');
const Teacher = require('../models/teacher');
const Student = require('../models/student');
const DataEntry = require('../models/dataentry');
const Subject = require('../models/subject');
const School = require('../models/school');

var bycrypt = require('bcryptjs');

/**
 * this will check the username is exist or not.
 * @param val
 * @param next
 */
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


/**
 * this will check the email is exist or not
 * @param val
 * @param next
 */
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


/**
 * this will return the extended account such as Student, Teacher, Dataentry
 * @param account
 * @param next
 */
module.exports.getExtendedAccount = function (account, next) {
  User.findById(account._id).select('-password').exec(function (err, user) {
    if(account.acc_type == 'S'){
      Student.findById(account.acc_id).populate('school').exec(function (err, student) {
        if(err){
          console.log(err);
          throw err;
        }else{
          if(student.school){
            student.school = {id : student.school.id, district : student.school.district};
          }
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

/**
 * this will return the all enroll subject of a user
 * @param user
 * @param next
 */
module.exports.getEnrollments = function (user, next) {
  Student.findById(user.acc_id, function (err, e) {
    if(err){
        console.log(err);
        throw err;
    }else{
        next(e.enroll);
    }
  })
};

/**
 * this will update the enrollment array of a student
 * @param user
 * @param data
 * @param next
 */
module.exports.setEnrollments = function (user, data, next) {
  Student.update({_id : user.acc_id}, {$set : {enroll : data.enroll}}, function (err, std) {
    next(std);
  })
};

/**
 * return the set of teachers by given text
 * @param txt
 * @param next
 */
module.exports.searchTeachers = function (txt, next) {
  Teacher.find({visibleName : {$regex : new RegExp(txt, 'ig')}}).select('visibleName classGroup')
    .populate('classGroup')
    .exec(function (err, teachers) {
      if(err){
        console.log(err);
        throw err;
      }else{
        next(true, teachers);
      }
  });
};

/**
 * password reset function
 * @param user
 * @param cb
 */
module.exports.updatePasswords = function (user, cb) {
  bycrypt.genSalt(10, function (err, salt) {
    bycrypt.hash(user.password, salt, function (err, hash) {
      user.password = hash;
      user.save(function (err, saved) {
        if(err){
          console.log(err);
          throw err;
        }else{
          cb();
        }
      });
    });
  });
};

/**
 * create new user function
 * @param newUser
 * @param cb
 */
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
          }else if(user.acc_type == "D"){
            var thisDataEntry = new DataEntry();
            thisDataEntry.save(function (err, de) {
              if(err){
                console.log(err);
                throw err;
              }else{
                user.acc_id = de._id;
                user.save(cb);
              }
            })
          }
        }
      });
    })
  });
};

/**
 * compaier password in passport
 * @param candidatePassword
 * @param hash
 * @param cb
 */
module.exports.comparePassword = function (candidatePassword, hash, cb) {
  bycrypt.compare(candidatePassword, hash, function (err, isMatch) {
    if(err){
      console.log(err);
    }else{
      cb(null, isMatch);
    }
  });
};

/**
 * Save the extended account details
 * @param user
 * @param body
 * @param next
 */
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
