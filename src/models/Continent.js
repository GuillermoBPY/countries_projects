const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
const Country = require("./Country");

const Continent = sequelize.define("continent", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Continent.belongsTo(Country);
Country.hasMany(Continent);

module.exports = Continent;
