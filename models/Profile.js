const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

//creating and initializing Profile(table in db) from Model class
class Profile extends Model {
async validatePassword(password){
return await bcrypt.compare(password,this.password)
}};

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
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
             len: [8],
            },
        },
        community_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Community',
                key: 'id',
                unique: false,
            },
        },
    },
    {
        //add hooks and encryption for password 
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            },
        },
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'Profile',
    }
);

module.exports = Profile;