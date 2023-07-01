const express = require("express");
const RestaurantChainRouter = require("./restaurant.route");
const APIRouter = express.Router();


APIRouter.use("/restaurant", RestaurantChainRouter);


module.exports = APIRouter;
