const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/continent.controllers");
const express = require("express");

const routerContinent = express.Router();

routerContinent.route("/").get(getAll).post(create);

routerContinent.route("/:id").get(getOne).delete(remove).put(update);

module.exports = routerContinent;
