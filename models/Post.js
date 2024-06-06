const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
        post_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date_of_post: {
            type: DataTypes.DATE,
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
);


module.exports = Post;
