var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

module.exports = router;
