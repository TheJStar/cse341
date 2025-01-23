const router = require("express").Router();
const controller = require("../controllers/index-controller");

router.use("/", controller.helloWorld);

module.exports = router;