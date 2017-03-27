const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', function (req, res) {
  res.json({title : 'Hello World..!'});
});

router.use('/paper', require('./paper'));
router.use('/user', require('./user'));

module.exports = router;
