const sequelize = require("../config/connection.js");
const { User, FallItem } = require("../models");

const userSeeds = require("./userSeeds.json");
const fallItemSeeds = require("./fallItemSeeds.json");

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
  process.exit(0);
};

seedAll();
