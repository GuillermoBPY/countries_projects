const express = require("express");
const routerCountry = require("./country.router");
const routerCity = require("./city.router");
const routerUser = require("./user.router");
const routerContinent = require("./continent.router");

const router = express.Router();

// colocar las rutas aquí

router.use("/countries", routerCountry);
router.use("/cities", routerCity);
router.use("/users", routerUser);
router.use("/continents", routerContinent);

module.exports = router;
