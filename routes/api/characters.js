const router = require("express").Router();
const charactersController = require("../../controllers/charactersController");

router.route("/")
    .get(charactersController.findAll);

module.exports = router;