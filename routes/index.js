var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express', test1: 'test1' });
});

router.get('/cam', function(req, res) {
    res.render('cam-demo', { title: 'Express', test1: 'test1', camid: req.query.id });
});

module.exports = router;