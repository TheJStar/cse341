const routes = require("express").Router();
const controller = require("../controllers/index-controller");

routes.get("/", controller.helloWorld);
routes.get("/connection", controller.databaseList);

module.exports = routes;