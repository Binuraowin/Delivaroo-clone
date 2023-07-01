const Dish = require('../models/dish.model');

const getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.findAll();
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dishes' });
  }
};

const getDishById = async (req, res) => {
  const { id } = req.params;
  try {
    const dish = await Dish.findByPk(id);
    if (dish) {
      res.status(200).json(dish);
    } else {
      res.status(404).json({ message: 'Dish not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dish' });
  }
};

const createDish = async (req, res) => {
  const { name, price } = req.body;
  try {
    const newDish = await Dish.create({ name, price });
    res.status(201).json(newDish);
  } catch (error) {
    res.status(500).json({ message: 'Error creating dish' });
  }
};

module.exports = {
  getAllDishes,
  getDishById,
  createDish,
};
