const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
const Country = require("./Country");

const User = sequelize.define("user", {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.belongsTo(Country);
Country.hasMany(User);

module.exports = User;
