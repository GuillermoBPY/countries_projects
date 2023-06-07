const {
  getAll,
  createCountry,
  getOneCountry,
  updateCountry,
  deleteCountry,
} = require("../controllers/country.controllers");
const express = require("express");

const routerCountry = express.Router();

routerCountry.route("/").get(getAll).post(createCountry);

routerCountry
  .route("/:id")
  .get(getOneCountry)
  .put(updateCountry)
  .delete(deleteCountry);

module.exports = routerCountry;
