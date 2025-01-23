const router = require("express").Router();
const controller = require("../controllers/professional-controller");

router.use("/", controller.getData);

module.exports = router;