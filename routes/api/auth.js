const router = require('express').Router();
const passport = require('passport');

const isAuthenticated = require('../../config/middleware/isAuthenticated');

router.post('/login', passport.authenticate('local'), (req, res) => {
//     passport.authenticate('local', function(err, user) {
//         console.log("user", err, user);
//         if (err) {
//             return res.status(400).json({ errors: err });
//         }
//         if (!user) {
//             return res.status(400).json({ errors: 'No user found' });
//         }
//         req.logIn(user, function(err) {
//             if (err) {
//                 return res.status(400).json({ errors: err });
//             }
//             return res.status(200).json({ success: `logged in ${user.id}` });
//         });
//     })(req, res);
    // console.log(res);
    res.end();
});

router.get('/checkAuth', isAuthenticated, (req, res) => {
    const user = req.user ? req.user : null;
    return res.status(200).json({
        user: user
    });
});

module.exports = router;