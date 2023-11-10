const sequelize = require("../config/connection.js");
const { User, Item, Review, Favorite } = require("../models");

const userSeeds = require("./userSeeds.json");
const itemSeeds = require("./itemSeeds.json");
const reviewSeeds = require("./reviewSeeds.json");
const favoriteSeeds = require("./favoriteSeeds.json");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  for (const user of userSeeds) {
    await User.create(user);
  }

  for (const item of itemSeeds) {
    await Item.create(item);
  }

  for (const review of reviewSeeds) {
    await Review.create(review);
  }

  process.exit(0);
};

seedAll();
