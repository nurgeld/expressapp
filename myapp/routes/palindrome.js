var express = require('express');
var router = express.Router();

// import isPalindrome from './public/javascripts/isPalindrome';

const isPalindrome = (string) => {
    if (string.length <= 1) {
      return true;
    }
    if (string[0] !== string[string.length - 1]) {
      return false;
    }
  
    return isPalindrome(string.substring(1, string.length - 2));
};

/* GET palindrome */
router.get('/', function(req, res, next) {
  res.render('palindrome', { title: 'Palindrome' });
});

router.post('/', function (req, res, next) {
    console.log(req.body.title);
    console.log(req.body.word_from_input);
    console.log(req.body.description);
    res.send(`является ли слово палиндромом: ${isPalindrome(req.body.word_from_input)}`);
});

module.exports = router;