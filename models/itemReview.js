const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class ItemReview extends Model {}

ItemReview.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    review_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "review",
        key: "id",
      },
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "item",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "review",
  }
);

module.exports = ItemReview;
