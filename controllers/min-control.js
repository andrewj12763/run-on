const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/page2', (req, res) => {
  res.render('page2');
});



router.get('/page3', (req, res) => {
  res.render('page3');
});

module.exports = router