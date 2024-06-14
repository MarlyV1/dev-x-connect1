const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const dayJS = require('dayjs');

class Poll extends Model { }

Poll.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        poll_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        poll_option_one: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        poll_option_two: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        poll_option_three: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        poll_option_four: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        topic: {
            type: DataTypes.TEXT
        },
        date_of_post: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            get() {const rawValue = this.getDataValue('data_of_post')
                return rawValue ? dayJS(rawValue).format('MM/DD/YYYY') : null
            }
        },
        profile_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Profile',
                key: 'id',
                unique: false,
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Poll',
    }
);

module.exports = Poll;