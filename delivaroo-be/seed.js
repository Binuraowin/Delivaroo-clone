const faker = require('faker');
const Restaurant = require('./models/restaurant');
const Dish = require('./models/dish');
const Menu = require('./models/menu');
const Rating = require('./models/rating');
const sequelize = require('./database/connection');

const seedDatabase = async () => {
  await sequelize.sync({ force: true }); // Drop existing tables and re-create

  // Seed Restaurants
  const restaurantData = [];
  for (let i = 0; i < 5; i++) {
    restaurantData.push({
      name: faker.company.companyName(),
      address: faker.address.streetAddress(),
    });
  }
  await Restaurant.bulkCreate(restaurantData);

  // Seed Dishes
  const dishData = [];
  for (let i = 0; i < 20; i++) {
    dishData.push({
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price(5, 100)),
    });
  }
  await Dish.bulkCreate(dishData);

  // Seed Menus
  const menuData = [];
  for (let i = 0; i < 3; i++) {
    menuData.push({
      name: faker.random.words(2),
    });
  }
  await Menu.bulkCreate(menuData);

  // Seed Ratings
  const ratingData = [];
  for (let i = 0; i < 10; i++) {
    ratingData.push({
      rating: faker.random.number({ min: 1, max: 5 }),
      comment: faker.lorem.sentence(),
    });
  }
  await Rating.bulkCreate(ratingData);

  // Associate Dishes with Menus
  const menus = await Menu.findAll();
  const dishes = await Dish.findAll();
  for (let i = 0; i < menus.length; i++) {
    const menu = menus[i];
    const startIndex = i * 5;
    const endIndex = startIndex + 5;
    const selectedDishes = dishes.slice(startIndex, endIndex);
    await menu.setDishes(selectedDishes);
  }

  // Associate Ratings with Dishes
  for (let i = 0; i < dishes.length; i++) {
    const dish = dishes[i];
    const startIndex = i * 2;
    const endIndex = startIndex + 2;
    const selectedRatings = ratingData.slice(startIndex, endIndex);
    await dish.setRatings(selectedRatings);
  }
};

seedDatabase().then(() => {
  console.log('Database seeded successfully!');
  process.exit();
});
