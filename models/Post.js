const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const dayJS = require('dayjs');

//creating instance of Post from Model class
class Post extends Model {}

//setting columns + datatypes & rules
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        topic: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date_of_post: {
            type: DataTypes.DATE, defaultValue: DataTypes.NOW, get(){const rawValue = this.getDataValue('date_of_post')
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
        modelName: 'Post',
    }
);


module.exports = Post;
