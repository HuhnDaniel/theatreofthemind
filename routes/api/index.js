const router = require("express").Router();
const entityRoutes = require("./encounters");

router.use("/encounters", entityRoutes);

module.exports = router;