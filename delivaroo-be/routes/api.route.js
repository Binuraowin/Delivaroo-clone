const express = require("express");
const RestaurantRouter = require("./restaurant.route");
const RatingRouter = require("./rating.route")
const MenuRouter = require("./menu.route");
const DishRouter = require("./dish.route");
const APIRouter = express.Router();


APIRouter.use("/restaurant", RestaurantRouter);
APIRouter.use("/rating", RatingRouter);
APIRouter.use("/menu", MenuRouter);
APIRouter.use("/dish", DishRouter);


module.exports = APIRouter;
