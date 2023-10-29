const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class FallItem extends Model { };

FallItem.init(
    {
        item_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        filename: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'fall_item'
    }

);

module.exports = FallItem;