const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController');
const validateRequest = require('../middlewares/validateRequest');
const ratingSchema = require('../schemas/ratingSchema');

router.get('/', ratingController.getAllRatings);
router.get('/:id', ratingController.getRatingById);
router.post('/',validateRequest(ratingSchema), ratingController.createRating);

module.exports = router;