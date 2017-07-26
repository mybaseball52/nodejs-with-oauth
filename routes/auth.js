var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/google/callback', passport.authenticate('google',{
        successRedirect: '/users/',
        failureRedirect: '/'
}));

router.get('/google', passport.authenticate('google', {
        scope: [ 'email', 'profile' ] 
}));

router.get('/twitter/callback', passport.authenticate('twitter',{
        successRedirect: '/users/',
        failureRedirect: '/'
}));

router.get('/twitter', passport.authenticate('twitter'));

router.get('/facebook/callback', passport.authenticate('facebook',{
        successRedirect: '/users/',
        failureRedirect: '/'
}));

router.get('/facebook', passport.authenticate('facebook', {
        scope: ['email'] 
}));

module.exports = router;