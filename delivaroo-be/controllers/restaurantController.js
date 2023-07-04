const Restaurant = require('../models/restaurant.model');

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.status(200).json({data:restaurants});
  } catch (error) {
    res.status(500).json({ message: 'Error fetching restaurants' });
  }
};

const getRestaurantById = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = await Restaurant.findByPk(id);
    if (restaurant) {
      res.status(200).json({data:restaurant});
    } else {
      res.status(404).json({ message: 'Restaurant not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching restaurant' });
  }
};

const createRestaurant = async (req, res) => {
  const { name, address } = req.body;
  try {
    const newRestaurant = await Restaurant.create({ name, address });
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(500).json({ message: 'Error creating restaurant' });
  }
};

module.exports = {
  getAllRestaurants,
  getRestaurantById,
  createRestaurant,
};
