const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/:query', function(req, res){
  res.send('api works : ' + req.params.query);
});

module.exports = router;
