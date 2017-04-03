/**
 * Created by malaka on 3/26/17.
 */
var User = require('../models/user');
var router = require('express').Router();
var passport = require('passport');
var LocalStrategy = require('passport-local');
var jwt = require('jsonwebtoken');

// import user controller
var usrCntl = require('../controllers/userController');

// create post route for login form
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
        acc_type: req.user.acc_type
      }, token : req.token
    });
  });


// post route to signup
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
    // TODO handle
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
        throw  err;
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
                }, token : req.token
              });
            });
          }
        });
      }
    });
  }
});


// check a user toke whether a valid token or not
router.get('/check', validAuth, function (req, res) {
  res.json({validity: req.validToken});
});

// find a username is exist or not
router.get('/checkUserName', function (req, res) {
  usrCntl.checkUserName({checkUserName : {username : req.query.username}}, function (val) {
    res.json({exist : !val._checkUserName});
  });
});

// find a email address is exist or not
router.get('/checkEmail', function (req, res) {
  usrCntl.checkEmail({checkEmail : {email : req.query.email}}, function (val) {
    res.json({exist : !val._checkEmail});
  });
});


router.get('/extended', validAuth, function (req, res) {
  if(req.validToken){
    usrCntl.getExtendedAccount(req.user, function (user, acc){
      res.json({eUser: acc, user : user});
    });
  }else{
    res.json({success : 'false'})
  }

});

router.post('/details', validAuth, function (req, res) {
  if(req.validToken){
    usrCntl.saveDetails(req.user, req.body, function (val) {
      res.json({success : val});
    })
  }
});

router.get('/Enrollments', validAuth, function (req, res) {
  if(req.validToken && req.user.acc_type == 'S'){
    usrCntl.getEnrollments(req.user, function (enrolls) {
      res.json({enrollments : enrolls});
    })
  }else{
    res.json({success : false});
  }
});

router.post('/Enrollments', validAuth, function (req, res) {
  if(req.validToken && req.user.acc_type == 'S'){
    usrCntl.setEnrollments(req.user, req.body, function (enrl) {
      if(enrl.ok){
        res.json({success : true})
      }
    });
  }
});

/**
 * Passport things
 * */
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

function generateToken(req, res, next) {
  req.token = jwt.sign({
    id: req.user.id
  }, 'secret', {
    expiresIn: '10h'
  });
  next();
}

function validAuth(req, res, next) {
  console.log('validating the token');
  if (req.user){
    var genID = jwt.verify((req.method =='GET' ? req.query.token : req.body.token), 'secret');
    req.validToken = genID.id == req.user._id;
    next();
  }else{
    req.validToken = false;
    res.json({auth : false});
  }
}

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});


module.exports = router;
