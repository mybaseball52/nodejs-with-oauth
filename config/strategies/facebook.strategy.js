var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;


module.exports = function () {
    passport.use(new FacebookStrategy({
            clientID: '229052417605223',
            clientSecret: 'a489e01906c2b92de7e31ce87ef307e7',
            callbackURL: 'http://localhost:3000/auth/facebook/callback',
            profileFields: ['displayName', 'email'],
            passReqToCallback: true
        },
        function (req, accessToken, refreshToken, profile, done) {

            var user = {};

            user.email = profile.emails[0].value;
            //user.image = profile._json.image.url;
            user.displayName = profile.displayName;

            user.facebook = {};
            user.facebook.id = profile.id;
            user.facebook.token = accessToken;
           
            done(null, user);
        }));

}