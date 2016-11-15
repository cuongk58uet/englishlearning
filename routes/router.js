var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/api/reading', function(req, res, next) {
  res.send('OK');
});

module.exports = router;
