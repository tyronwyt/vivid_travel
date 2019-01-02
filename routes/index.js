var express = require('express');
var router = express.Router();

var moment = require('moment');

// get temp data for user
var data = require('../public/javascripts/data.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { data : data.users[0], moment: moment});
});

module.exports = router;
