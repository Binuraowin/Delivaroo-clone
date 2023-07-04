const Rating = require('../models/rating.model');

// Define your rating controller functions
const getAllRatings = async (req, res) => {
  try {
    const ratings = await Rating.findAll();
    res.status(200).json(ratings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching ratings' });
  }
};

const getRatingById = async (req, res) => {
  const { id } = req.params;
  try {
    const rating = await Rating.findByPk(id);
    if (rating) {
      res.status(200).json(rating);
    } else {
      res.status(404).json({ message: 'Rating not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching rating' });
  }
};

const createRating = async (req, res) => {
  const { rating, comment } = req.body;
  try {
    const newRating = await Rating.create({ rating, comment });
    res.status(201).json(newRating);
  } catch (error) {
    res.status(500).json({ message: 'Error creating rating' });
  }
};

module.exports = {
  getAllRatings,
  getRatingById,
  createRating,
};
