const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', function (req, res) {
  res.json({title : 'Hello World..!'});
});

router.get('/paper/get_all_paper_names', function(req, res){
  res.json({get_all_paper_name: ['paper1', 'al physics 2002', 'chemestry 3003']});
});

module.exports = router;
