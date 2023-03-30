const {Sequelize, DataTypes} = require('sequelize'); 
const databaseConnectionString = include('/databaseConnectionSequelize');
const sequelize = new Sequelize(databaseConnectionString);
const userModel = include('models/web_user');

const petTypeModel = sequelize.define('web_user',
    {pet_type_id: {type: Sequelize.INTEGER, autoIncrement: true, 
primaryKey: true}, 
    type: {type: Sequelize.STRING, allowNull: false}, 
    name: {type: Sequelize.STRING, allowNull: false} 
    },
    {tableName: 'pet_type',
    timestamps: false, 
    singular: 'pet_type', 
    plural: 'pet_types'} 
);

module.exports = petTypeModel; 