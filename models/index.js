const FallItem = require('./fallItem');
const User = require('./user');
const FallReview = require('./fallReview')
const Reeses = require('./reeses')

User.hasMany(FallReview, {
  foreignKey: "UserReference_id",
  onDelete: "CASCADE",
});

FallReview.belongsTo(User, {
  foreignKey: "UserReference_id",
});

User.hasMany(Reeses, {
  foreignKey: "UserReference_id",
  onDelete: "CASCADE",
});

Reeses.belongsTo(User, {
  foreignKey: "UserReference_id",
});


module.exports = { User, FallItem, FallReview, Reeses };