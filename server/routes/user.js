/**
 * Created by malaka on 3/26/17.
 */
var User = require('../models/user');
var router = require('express').Router();
var passport = require('passport');
var LocalStrategy = require('passport-local');
var jwt = require('jsonwebtoken');

router.post('/login',
  passport.authenticate('local', {
    session : false
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
      acc_type : (req.body.acc_type == 'student' ? 'S' : 'T')
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
            res.json(user);
          }
        });
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

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});


module.exports = router;
