const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', function (req, res) {
  res.json({title : 'Hello World..!'});
});

// Define api routes
router.use('/paper', require('./paper'));
router.use('/user', require('./user'));
router.use('/school', require('./school'));
router.use('/subject', require('./subject'));

module.exports = router;
