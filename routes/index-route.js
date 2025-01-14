const routes = require("express").Router();
const controller = require("../controllers/index-controller");

routes.get('/', controller.helloWorld);

module.exports = routes;