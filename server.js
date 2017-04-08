// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const expValidator = require('express-validator');
const session = require('express-session');
const fs = require('fs');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStratagy = require('passport-local');
const flash = require('connect-flash');
const multer = require('multer');

// Get our API routes
const api = require('./server/routes/api');

// create express app
const app = express();

// MongoDB connections
var con = require('./server/controllers/dbController');

// init Logger
app.use(logger('common', {
  stream: fs.createWriteStream('./access.log', {flags: 'a'})
}));
app.use(logger('dev')); // set logger level

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

// init Sessions
app.use(session({
  secret : 'secret',
  saveUninitialized : true,
  resave : true
}));

//Express validator Initialization
app.use(expValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

//Passport init
app.use(passport.initialize());
app.use(passport.session());

//Connect Flash
app.use(flash());

//Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', function(req, res) {
  if(process.argv[2] == 'api'){
    throw {message : 'Only api server is running'}
  }else{
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).send('SERVER - ' + err.message);
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function(){
  console.log('API running on localhost: ' + port);
});
