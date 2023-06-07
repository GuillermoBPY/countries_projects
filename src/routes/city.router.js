const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/city.controllers");
const express = require("express");

const routerCity = express.Router();

routerCity.route("/").get(getAll).post(create);

routerCity.route("/:id").get(getOne).delete(remove).put(update);

module.exports = routerCity;
