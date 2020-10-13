const router = require('express').Router();
const encountersController = require('../../controllers/encountersController');

router.route('/')
    .get(encountersController.findAll)
    .post(encountersController.create);

module.exports = router;