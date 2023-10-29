const sequelize = require('../config/connection.js');
const { User } = require('../models');

const userSeeds=require('./userSeeds.json')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await User.bulkCreate(userSeeds, {
        individualHooks: true,
        returning: true,
    });
    process.exit(0);
};

seedAll();
