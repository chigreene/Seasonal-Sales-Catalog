const Item = require("./item");
const User = require("./user");
const Review = require("./review");

User.hasMany(Review, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Review.belongsTo(User, {
  foreignKey: "user_id",
});

Item.hasMany(Review, {
  foreignKey: "review_id",
  onDelete: "CASCADE",
});

Review.belongsTo(Item, {
  foreignKey: "review_id",
  onDelete: "CASCADE",
});

// Item.hasMany(Review, {
//   foreignKey: "review_id",
//   onDelete: "CASCADE",
// });

// Item.belongsTo(Review, {
//   foreignKey: "review_id",
// });

module.exports = { User, Item, Review };
