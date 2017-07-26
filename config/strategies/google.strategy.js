var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth2').Strategy;

module.exports = function () {
    passport.use(new GoogleStrategy({
        clientID: '718868787283-lii8rps05hkiqkc9c44ocds4ohoi3htv.apps.googleusercontent.com',
        clientSecret: 'LVEGdNri2H_aCHyMB7nUvEBo',
        callbackURL: 'http://localhost:3000/auth/google/callback',
        passReqToCallback: true
    },
        function (req, accessToken, refreshToken, profile, done) {
            var user = {};
        
            user.email = profile.emails[0].value;
            user.image = profile._json.image.url;
            user.displayName = profile.displayName;
        
            user.google = {};
            user.google.id = profile.id;
            user.google.token = accessToken;

            done(null, user);
        }
    ));
}