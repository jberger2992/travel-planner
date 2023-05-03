const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model {}

Trips.init({
    budget: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    traveller_amount: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
},{
    sequelize
});

module.exports=Trips