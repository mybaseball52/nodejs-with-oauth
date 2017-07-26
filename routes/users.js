var express = require('express');
var router = express.Router();

//middleware for log in securtiy.
router.use('/', function(req,res,next){
  if(!req.user){
    res.redirect('/');
  }
  next();
});


/* GET users listing. */
router.get('/', function(req, res) {
  // console.log(req.user);
  res.render('users', {user: req.user});
});

module.exports = router;
