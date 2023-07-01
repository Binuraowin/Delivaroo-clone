const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Menu = sequelize.define('Menu', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Menu;
