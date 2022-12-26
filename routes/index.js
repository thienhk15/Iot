var express = require('express');
var router = express.Router();
var service = require('./service')
var admin = require("firebase-admin");





/* GET home page. */
router.get('/', function (req, res) {
 
  //throw new Error('Unknown error!');
  res.render('index', { gas: "ppm"});
  
});

module.exports = router;
