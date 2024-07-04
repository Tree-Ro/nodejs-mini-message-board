const express = require('express');
const { format } = require('date-fns');
const router = express.Router();

const messages = [
  {
    text: 'hi',
    user: 'David',
    added: format(new Date(), 'MM/dd/yyyy'),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form');
});

router.post('/new', (req, res, next) => {
  console.log(req.body);
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
  });
  res.redirect('/');
});

module.exports = router;
