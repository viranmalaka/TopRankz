const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', function (req, res) {
  res.json({title : 'Hello World..!'});
});

router.get('/paper', require('./paper'));

module.exports = router;
