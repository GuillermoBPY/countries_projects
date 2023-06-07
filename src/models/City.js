const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
const Country = require("./Country");

const City = sequelize.define("city", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  area: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isCapital: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

City.belongsTo(Country);
Country.hasMany(City);

module.exports = City;
