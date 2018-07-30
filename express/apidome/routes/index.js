var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
  let arr = [
    {"name":"小明"}
  ];
  res.send(arr);
});

module.exports = router;
