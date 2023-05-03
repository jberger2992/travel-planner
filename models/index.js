const Location = require("./Location");
const Traveller = require("./Traveller");
const Trips = require("./Trips");

//Traveller to many Trips
Trips.belongsTo(Traveller,{
    onDelete:"CASCADE"
});
Traveller.hasMany(Trips);

//Location to many Trips
Trips.belongsTo(Location,{
    onDelete:"CASCADE"
});
Location.hasMany(Trips);

module.exports = {
    Traveller:Traveller,
    Location:Location,
    Trips:Trips
}