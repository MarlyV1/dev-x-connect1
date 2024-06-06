const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//creating and initializing Profile(table in db) from Model class
class Profile extends Model {}

//setting columns + datatypes & rules
Profile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }, 
        program: { //work on this
            type: DataTypes.STRING,
            validate: {
                isIn: cohortDb,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
             len: [8],
            },
        },
    },
    {
        //add hooks and encryption for password above
        hooks: {

        },
            sequelize,
            timestamps: true,
            freezeTableName: true,
            underscored: true,
            modelName: 'post',
    }
);

module.exports = Profile;