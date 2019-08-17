var express = require('express');
var router = express.Router();

const getNthFibNum = (number) => 
    number < 2 ? number : getNthFibNum(number - 1) + getNthFibNum(number - 2);

/* GET fibonacci */
router.get('/', function(req, res, next) {
  res.render('fibonacci', { title: 'Fibonacci' });
});

router.post('/', function (req, res, next) {
    res.send(`${req.body.num_from_input}-e число из последовательности Фибоначчи: ${getNthFibNum(req.body.num_from_input)}`);
});

module.exports = router;