/**
 * Created by malaka on 3/26/17.
 */
var User = require('../models/user');
var router = require('express').Router();
var passport = require('passport');
var LocalStrategy = require('passport-local');
var jwt = require('jsonwebtoken');

var usrCntl = require('../controllers/userController');

router.post('/login',
  passport.authenticate('local', {
    session : true
  }),
  generateToken,
  function(req, res) {
    res.json({
      success : true,
      user : req.user,
      toke : req.token
      });
  });

router.post('/signup', function (req, res) {
  req.checkBody('acc_type', "no account type is given").notEmpty();
  req.checkBody('email', 'Email cannot be empty').notEmpty();
  req.checkBody('email', 'Not a valid email').isEmail();
  req.checkBody('username', "username cannot be empty").notEmpty();
  req.checkBody('password', "password is not given").notEmpty();
  req.checkBody('password2', 'Password is not confirmed').notEmpty();
  req.checkBody('password2', 'Password is not match').equals(req.body.password);

  var valErrors = req.validationErrors();
  if (valErrors){
    // TODO handle
  }else{
    var newUser = new User({
      username : req.body.username,
      password : req.body.password,
      email : req.body.email,
      acc_type : (req.body.acc_type == 'Student' ? 'S' : 'T')
    });

    User.createUser(newUser, function (err, user) {
      if(err){
        console.log(err);
        throw  err;
      }else{
        req.login(user, function (err) {
          if(err){
            console.log(err);
            throw err;
          }else{
            console.log(user);
            generateToken(req, res, function () {
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

router.get('/who', function (req, res) {
  console.log(req.token);
  console.log(req.validToken);
  res.json(req.user);
});

router.get('/check', validAuth, function (req, res) {
  res.send(req.validToken);
});

router.get('/checkUserName', function (req, res) {
  usrCntl.checkUserName({checkUserName : {username : req.query.username}}, function (val) {
    res.json({exist : !val._checkUserName});
  });
});

router.get('/checkEmail', function (req, res) {
  usrCntl.checkEmail({checkEmail : {email : req.query.email}}, function (val) {
    res.json({exist : !val._checkEmail});
  });
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
      User.comparePassword(password, user.password, function (err, isMatch) {
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
  try{
    var genID = jwt.verify((req.method =='GET' ? req.query.token : req.body.token), 'secret');
    req.validToken = genID.id == req.user._id;
  }catch (err){
    req.validToken = false;
  }
  next();
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
