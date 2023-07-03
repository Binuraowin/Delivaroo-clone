const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const Rating = require('./rating.model');

const Dish = sequelize.define('Dish', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

Dish.hasMany(Rating, { as: 'ratings' });
module.exports = Dish;
