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
      acc_type : (req.body.acc_type == 'Student' ? 'S' : 'T')
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
  if (req.user){
    var genID = jwt.verify(req.get('token'), 'secret');
    req.validToken = (genID.id == req.user._id);
  }else{
    req.validToken = false;
  }
  next();
}

module.exports = router;
