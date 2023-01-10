var express = require('express');
var router = express.Router();

/* GET home page. */
/*
프론트엔드 리액트에서 $.ajax{{url : "localhost:8080/contact", type:"POST"}}
*/ 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

module.exports = router;