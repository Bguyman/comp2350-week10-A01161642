const {Sequelize, DataTypes} = require('sequelize'); 
const databaseConnectionString = include('/databaseConnectionSequelize');
const sequelize = new Sequelize(databaseConnectionString);
const userModel = include('models/web_user');
const petTypeModel = include('models/pet_type');

const petModel = sequelize.define('web_user',
    {pet_id: {type: Sequelize.INTEGER, autoIncrement: true, 
primaryKey: true}, 
    web_user_id: {type: Sequelize.STRING, allowNull: false, references: "web_user", referencesKey: 'web_user_id'}, 
    name: {type: Sequelize.STRING, allowNull: false}, 
    pet_type_id: {type: Sequelize.STRING, allowNull: false, references: 'pet_type', referencesKey: 'pet_type_id'} 
    },
    {tableName: 'pet',
    timestamps: false, 
    singular: 'pet', 
    plural: 'pet'} 
);

petModel.belongsTo(userModel , { as: 'owner', timestamps: false, foreignKey: 'web_user_id'});

userModel.hasMany(petModel , { as: 'pets', timestamps: false, foreignKey: 'web_user_id'});

module.exports = petModel; 