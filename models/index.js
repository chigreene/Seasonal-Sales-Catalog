const FallItem = require('./fallItem');
const User = require('./user');
const FallReview = require('./fallReview')

User.hasMany(FallReview, {
  foreignKey: "UserReference_id",
  onDelete: "CASCADE",
});

FallReview.belongsTo(User, {
  foreignKey: "UserReference_id",
});


module.exports = { User, FallItem, FallReview };