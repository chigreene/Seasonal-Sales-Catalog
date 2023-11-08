const Item = require("./item");
const User = require("./user");
const Review = require("./review");
const Favorite = require("./favorite");

User.hasMany(Review, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Review.belongsTo(User, {
  foreignKey: "user_id",
});

Item.hasMany(Review, {
  foreignKey: "item_id",
  onDelete: "CASCADE",
});

Review.belongsTo(Item, {
  foreignKey: "item_id",
  onDelete: "CASCADE",
});

// Review.hasOne(Item, {
//   foreignKey: "review_id",
//   onDelete: "CASCADE",
// });

// Review.belongsTo(Item, {
//   foreignKey: "review_id",
// });

User.hasMany(Favorite, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
})

Item.hasMany(Favorite, {
  foreignKey: "item_id",
  onDelete: "CASCADE",
})

Favorite.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
})

Favorite.belongsTo(Item, {
  foreignKey: "item_id",
  onDelete: "CASCADE",
})

module.exports = { User, Item, Review, Favorite };
