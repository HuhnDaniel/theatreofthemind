const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../models');

passport.use(new LocalStrategy({
    usernameField: 'email',
}, (email, password, done) => {
    // console.log(email, password);
    // db.User.findOne({ email: email })
    //     .then((user) => {
    //         // console.log(user);
    //         if(!user) {
    //             return done(null, false, { message: "Incorrect Username or Password" });
    //         } else {
    //             // console.log("user", user);
    //             // bcrypt.compare(password, user.password, (err, isMatch) => {
    //             password === user.password ? isMatch = true : isMatch = false;
    //             // console.log("isMatch", isMatch);
    //                 // if (err) throw err;
    //                 if (isMatch) {
    //                     // console.log(user);
    //                     return done(null, user);
    //                 } else {
    //                     // console.log("hi");
    //                     return done(null, false, { message: "Incorrect Username or Password" });
    //                 }
                
    //         }
    //     }).catch(err => {
    //         return done(null, false, { message: err });
    //     });
    db.User.findOne({ email: email })
        .then(user => {
            if (!user) {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(password, salt, (err, hash) => {
                        if (err) throw err;
                        password = hash;
                        db.User.insertMany([{ email: email, password: password }])
                            .then(user => {
                                return done(null, user);
                            })
                            .catch(err => {
                                return done(null, false, { message: err });
                            });
                    });
                });
            } else {
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: "Incorrect Username or Password" });
                    }
                });
            }
        })
        .catch(err => {
            return done(null, false, { message: err });
        });
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((id, done) => {
    db.User.findById(id, (err, user) => {
        done(err, user);
    });
});

module.exports = passport;