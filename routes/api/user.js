const router = require('express').Router();
const db = require('../../models');

const isAuthenticated = require('../../config/middleware/isAuthenticated');

router.put('/addEncounter', isAuthenticated, (req, res) => {
    console.log(req.body);
    res.end();
});

module.exports = router;