const catchError = require("../utils/catchError");
const Country = require("../models/Country");
const getAll = catchError(async (req, res) => {
  const country = await Country.findAll();
  return res.json(country);
});

const createCountry = catchError(async (req, res) => {
  const country = req.body;
  const countryCreated = await Country.create(country);
  return res.status(201).json(countryCreated);
});

const getOneCountry = catchError(async (req, res) => {
  const { id } = req.params;
  const countryOne = await Country.findByPk(id);
  if (!countryOne) return res.sendStatus(404);
  return res.json(countryOne);
});

const deleteCountry = catchError(async (req, res) => {
  const { id } = req.params;
  const deleteCountry = await Country.destroy({ where: { id } });
  if (!deleteCountry) return res.sendStatus(404);
  return res.sendStatus(204);
});

const updateCountry = catchError(async (req, res) => {
  const { id } = req.params;
  const country = req.body;
  const countryUpdated = await Country.update(country, {
    where: { id },
    returning: true,
  });
  if (!countryUpdated[0]) return res.sendStatus(404);
  return res.json(countryUpdated[1][0]);
});

module.exports = {
  getAll,
  createCountry,
  getOneCountry,
  deleteCountry,
  updateCountry,
};
