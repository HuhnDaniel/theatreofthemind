const router = require('express').Router();
const usersController = require('../../controllers/usersController');

router.route('/')
    .get(usersController.userData)
    .post(usersController.signUp);

module.exports = router;
