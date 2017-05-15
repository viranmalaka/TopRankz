/**
 * Created by malaka on 3/26/17.
 */
var User = require('../models/user');
var router = require('express').Router();
var passport = require('passport');
var LocalStrategy = require('passport-local');
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');
var bycript = require('bcryptjs');
var nodemailer = require('nodemailer');
var async = require('async');
var crypto = require('crypto');

var storage = multer.diskStorage({
  destination : function (req, file, cb) {
    cb(null, "src/assets/prof-pic");
  },
  filename: function (req, file, cb) {
    cb(null, req.user.username + path.extname(file.originalname));
  }
});

var upload = multer({
  storage : storage
});

// import user controller
var usrCntl = require('../controllers/userController');

/**
 * Creating Login post
 * p - username, password
 */
router.post('/login',
  passport.authenticate('local', {        // passport auth
    session : true
  }),
  generateToken,                          // generate token
  function(req, res) {
    res.json({                            // send the user with the token
      user: {
        acc_id: req.user.acc_id,
        username: req.user.username,
        email: req.user.email,
        acc_type: req.user.acc_type,
        profile_picture : req.user.profile_picture
      },
      token : req.token,
      success : true
    });
  });


router.get('/logout', function (req, res) {
  req.logout();
  res.jsonp({success : true});
});

/**
 * SignUp post router
 *
 * p - acc_type, email, username, password, password2
 */
router.post('/signup', function (req, res) {

  // express validator
  req.checkBody('acc_type', "no account type is given").notEmpty();
  req.checkBody('email', 'Email cannot be empty').notEmpty();
  req.checkBody('email', 'Not a valid email').isEmail();
  req.checkBody('username', "username cannot be empty").notEmpty();
  req.checkBody('password', "password is not given").notEmpty();
  req.checkBody('password2', 'Password is not confirmed').notEmpty();
  req.checkBody('password2', 'Password is not match').equals(req.body.password);

  var valErrors = req.validationErrors();
  if (valErrors){                           // check for any validation errors
    throw valErrors;
  }else{
    var newUser = new User({                // create new user
      username : req.body.username,
      password : req.body.password,
      email : req.body.email,
      acc_type : req.body.acc_type
    });

    usrCntl.createUser(newUser, function (err, user) {   // call user create method
      if(err){
        console.log(err);
        throw err;
      }else{
        req.login(user, function (err) {              // after signup automatic login
          if(err){
            console.log(err);
            throw err;
          }else{
            console.log(user);
            generateToken(req, res, function () {     // generate token
              res.json({
                user: {
                  acc_id: user.acc_id,
                  username: user.username,
                  email: user.email,
                  acc_type: user.acc_type
                },
                token : req.token,
                success : true
              });
            });
          }
        });
      }
    });
  }
});




router.post('/reset_password', function (req, res) {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      User.findOne({ email: req.body.email }, function(err, user) {
        if (!user) {
          return res.jsonp({success : false, msg : 'No such email found'});
        }

        user.reset_password_token = token;
        user.reset_password_expires = Date.now() + 3600000; // 1 hour

        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {
      var smtpTransport = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: 'viran',
          pass: 'sendgrid1'
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'toprankz123@gmail.com',
        subject: 'TopRankz Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
        'http://' + req.headers.host + '/login/reset/' + token + '\n\n' +
        'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        res.jsonp({success : true, msg : 'An e-mail has been sent to ' + user.email + ' with further instructions.'});
        done(err, 'done');
      });
    }
  ], function(err) {
    if (err) return next(err);
    res.jsonp({success : false, msg : 'error'});
  });
});

router.get('/check_password_token', function (req, res) {
  User.findOne({
    reset_password_token: req.query['token'],
    reset_password_expires: { $gt: Date.now() }
  }, function(err, user) {
    if (!user) {
      return res.jsonp({success :false, msg : 'Password reset token is invalid or has expired'})
    }
    res.jsonp({success : true});
  });
});

router.post('/update_password', function (req, res) {
  async.waterfall([
    function(done) {
      User.findOne({ reset_password_token: req.body.token, reset_password_expires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
          return res.jsonp({success : false});
        }

        user.password = req.body.password;
        user.reset_password_expires = undefined;
        user.reset_password_token = undefined;

        user.save(function(err, savedUser) {
          usrCntl.updatePasswords(savedUser, function () {
            res.jsonp({success : true});
          })
        });
      });
    }
  ], function(err) {
    res.redirect('/');
  });
});


/**
 * check a user toke whether a valid token or not
 * q - token
 */
router.get('/check', validAuth, function (req, res) {
  res.jsonp({success : true, validity: req.validToken});
});

/**
 * find a username is exist or not
 * q - username
 */
router.get('/check_username', function (req, res) {
  usrCntl.checkUserName({checkUserName : {username : req.query.username}}, function (val) {
    res.jsonp({success : true, exist : !val._checkUserName});
  });
});

/**
 * find a email address is exist or not
 * q - email
 */
router.get('/check_email', function (req, res) {
  usrCntl.checkEmail({checkEmail : {email : req.query.email}}, function (val) {
    res.jsonp({success : true, exist : !val._checkEmail});
  });
});

/**
 * get full user account (user + teacher or student)
 * p - token
 */
router.get('/full_user_account', validAuth, function (req, res) {
  if(req.validToken){
    usrCntl.getExtendedAccount(req.user, function (user, acc){
      res.jsonp({success : true, eUser: acc, user : user});
    });
  }
});

/**
 * Save details of the user
 * p - token, address, email, fName, lName, telephone
 */
router.post('/post_details', validAuth, function (req, res) {
  if(req.validToken){
    usrCntl.saveDetails(req.user, req.body, function (val) {
      res.jsonp({success : true, data : val});
    })
  }
});

/**
 * Get enrollments of a student
 * q - token
 */
router.get('/get_enrollments', validAuth, function (req, res) {
  if(req.user.acc_type == 'S'){
    usrCntl.getEnrollments(req.user, function (enrolls) {
      res.jsonp({success : true, enrollments : enrolls});
    })
  }else{
    throw {message : 'user must be a student'};
  }
});

/**
 * save enrollments
 * p - token, enroll
 */
router.post('/post_enrollments', validAuth, function (req, res) {
  if(req.user.acc_type == 'S'){
    usrCntl.setEnrollments(req.user, req.body, function (enrl) {
      res.jsonp({success : enrl.ok})
    });
  }else{
    throw {message : 'user must be a student'};
  }
});

/**
 * Save profile picture
 */
router.post('/post_profile_picture', upload.single('profImg'), function (req, res) {
  var u = req.user;
  u.profile_picture = req.file.filename;

  u.save(function (err, user) {
    if(err){
      console.log(err);
      throw err;
    }else{
      res.jsonp({
        success : true,
        filename : req.file.filename
      });
    }
  });
});

router.get('/search_teachers', function (req, res) {
  if(req.query['q']){
    usrCntl.searchTeachers(req.query['q'], function (suc, results) {
      res.jsonp({
        success : suc,
        teachers : results
      });
    })
  }else{
    res.jsonp({success : false});
  }
});

//<editor-fold desc="Passport Things">
passport.use(new LocalStrategy(function (username, password, done) {
  User.findOne({username : username}, function (err, user) {
    if(err){
      console.log(err);
    }else{
      if (!user){
        return done(null, false, {message: 'Unknown user'});
      }
      usrCntl.comparePassword(password, user.password, function (err, isMatch) {
        if (err){
          console.log(err);
        } else{
          if (isMatch){
            return done(null, user);
          }else{
            return done(null, false, {message: 'Invalid Password'});
          }
        }
      });
    }
  });
}));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

//</editor-fold>

function generateToken(req, res, next) {
  req.token = jwt.sign({
    id: req.user.id
  }, 'secret', {
    expiresIn: '10h'
  });
  next();
}

function validAuth(req, res, next) {
  console.log('valid auth', req.get('token'));
  console.log(req.user);
  if (req.user){
    var genID = jwt.verify(req.get('token'), 'secret');
    req.validToken = (genID.id == req.user._id);
    if(req.validToken){
      next();
    }else{
      res.jsonp({
        success : false,
        msg : 'invalid token'
        })
    }
  }else{
    req.validToken = false;
    res.jsonp({
      success : false,
      msg : 'required login'
    })
  }
}

function identifyUser(req, res, next) {
  if(req.get('token')){
    var genID = jwt.verify(req.get('token'), 'secret');
    req.userID = genID.id;
  }else{
    req.userID = null;
  }
  next();
}

module.exports = router;
module.exports.validAuth = validAuth;
module.exports.identfyUser = identifyUser;
