const sequelize = require("../config/connection.js");
const { User, Item, Review, Favorite } = require("../models");

const userSeeds = require("./userSeeds.json");
const itemSeeds = require("./itemSeeds.json");
const reviewSeeds = require("./reviewSeeds.json");
const favoriteSeeds = require("./favoriteSeeds.json");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userSeeds, {
    individualHooks: true,
    returning: true,
  });
  await Item.bulkCreate(itemSeeds, {
    individualHooks: true,
    returning: true,
  });
  await Review.bulkCreate(reviewSeeds, {
    individualHooks: true,
    returning: true,
  });
  await Favorite.bulkCreate(favoriteSeeds, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedAll();
