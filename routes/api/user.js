const router = require('express').Router();
const db = require('../../models');

const isAuthenticated = require('../../config/middleware/isAuthenticated');

router.put('/addEncounter', isAuthenticated, (req, res) => {
    console.log(req.body, '---------------------', req.user);
    db.User.updateOne(
        { _id: req.user._id },
        { $push: { encounters: req.body }}
    ).then(_ => {
        return res.status(200).json({ success: 'Encounter Added' });
    }).catch(err => {
        return res.status(422).json(err);
    });
});

module.exports = router;