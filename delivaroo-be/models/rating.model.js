const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Rating = sequelize.define('Rating', {
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Rating;
