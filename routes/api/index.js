const router = require('express').Router();
const auth = require('./auth');
const entityRoutes = require('./encounters');
const userRoutes = require('./users');

router.use('/auth', auth);
router.use('/encounters', entityRoutes);
router.use('/users', userRoutes);

module.exports = router;