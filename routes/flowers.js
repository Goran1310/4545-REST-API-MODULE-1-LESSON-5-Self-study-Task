var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var textParser = bodyParser.text();

// GET home page. 
router.get('/', function (req, res, next) {
    res.send('Welcome to the flowers page');
});
module.exports = router;
