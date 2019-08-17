var express = require('express');
var router = express.Router();

/* GET palindrome */
router.get('/', function(req, res, next) {
  res.render('palindrome', { title: 'Palindrome' });
});

router.post('/', function (req, res, next) {
    console.log(req.body.title);
    console.log(req.body.word_from_input);
    console.log(req.body.description);
    res.send(`'Здесь должен быть ответ - является ли слово палиндромом', ${req.body.word_from_input}`);
});

module.exports = router;