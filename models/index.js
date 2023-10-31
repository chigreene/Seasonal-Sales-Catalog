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

Review.hasOne(Item, {
  foreignKey: "item_id",
  onDelete: "CASCADE",
});

Review.belongsTo(Item, {
  foreignKey: "item_id",
});

module.exports = { User, Item, Review };
