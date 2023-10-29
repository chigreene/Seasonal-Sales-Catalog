const sequelize = require("../config/connection.js");
const { User, FallItem, FallReview } = require("../models");

const userSeeds = require("./userSeeds.json");
const fallItemSeeds = require("./fallItemSeeds.json");
const fallReviewSeeds = require('./fallReviewSeeds.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userSeeds, {
    individualHooks: true,
    returning: true,
  });
  await FallItem.bulkCreate(fallItemSeeds, {
    individualHooks: true,
    returning: true,
  });
  await FallReview.bulkCreate(fallReviewSeeds, {
    individualHooks: true,
    returning: true,
  })
  process.exit(0);
};

seedAll();
