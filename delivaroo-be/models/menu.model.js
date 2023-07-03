const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const Dish = require('./dish.model');

const Menu = sequelize.define('Menu', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Menu.hasMany(Dish, { as: 'dishes' });
module.exports = Menu;
