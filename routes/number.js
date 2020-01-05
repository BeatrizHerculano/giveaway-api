const express = require('express');
const router = express.Router();

const NumbersController = require('../src/controllers/number');
router.get('/', function (req, res, next) {
  const min = req.query.min;
  const max = req.query.max;
  const numbercontroller = new NumbersController(min, max);
  res.send({ '1': numbercontroller.randomNumber() });
});
router.get('/:qtd', function (req, res, next) {
  const min = req.query.min;
  const max = req.query.max;
  const numbercontroller = new NumbersCxontroller(min, max);
  res.send(numbercontroller.randomNumbers(req.params.qtd));
});

module.exports = router;
