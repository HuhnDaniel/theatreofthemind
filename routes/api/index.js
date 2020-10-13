const router = require('express').Router();
const entityRoutes = require('./encounters');
const userRoutes = require('./users');

router.use('/encounters', entityRoutes);
router.use('/users', userRoutes);

module.exports = router;