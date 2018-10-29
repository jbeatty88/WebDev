var express = require('express');
var router = express.Router();
var fs = require("fs");
var request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('home.html', {root: 'public' });
//   res.render('index', { title: 'Express' });
});

module.exports = router;
