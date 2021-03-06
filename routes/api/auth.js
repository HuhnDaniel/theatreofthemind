const router = require('express').Router();
const passport = require('passport');

const isAuthenticated = require('../../config/middleware/isAuthenticated');

router.post('/loginRegister', (req, res) => {
    passport.authenticate('local', function(err, user) {
        if (err) {
            return res.status(400).json({ errors: err });
        }
        if (!user) {
            return res.status(400).json({ errors: 'No User Found' });
        }
        req.logIn(user, function(err) {
            if (err) {
                return res.status(400).json({ errors: err });
            }
            return res.status(200).json({ success: `Logged In ${user._id}` });
        });
    })(req, res);
});

router.get('/logout', (req, res) => {
    req.logOut();
    req.session.destroy(err => {
        if (err) {
            return next(err);
        }
        return res.send({ success: "Logged Out" });
    });
})

router.get('/checkAuth', isAuthenticated, (req, res) => {
    const user = req.user ? req.user : null;
    return res.status(200).json({
        user: user
    });
});

module.exports = router;