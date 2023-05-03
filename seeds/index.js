const sequelize = require("../config/connection");
const {Location, Traveller, Trips} = require("../models")

const locations = [
    {
        name:"Seattle"
    },
    {
        name:"Montreal"
    },
    {
        name:"Indianapolis"
    }
]

const travellers = [
    {
        name:"Josh",
        email:"josh@josh.com"
    },
    {
        name:"Not Josh",
        email:"not@josh.com"
    }
]

const trips = [
    {
        budget:"500",
        traveller_amount:"1",
        LocationId:"1",
        TravellerId:"1"
    },
    {
        budget:"700",
        traveller_amount:"2",
        LocationId:"2",
        TravellerId:"1"
    },
    {
        budget:"300",
        traveller_amount:"2",
        LocationId:"3",
        TravellerId:"1"
    },
    {
        budget:"1000",
        traveller_amount:"4",
        LocationId:"2",
        TravellerId:"2"
    },
    {
        budget:"800",
        traveller_amount:"4",
        LocationId:"3",
        TravellerId:"2"
    },
]

const startSeedin = async ()=>{
    try{
        await sequelize.sync({force:true});
        const locationData = await Location.bulkCreate(locations);
        const travellerData = await Traveller.bulkCreate(travellers);
        const tripsData = await Trips.bulkCreate(trips);
        console.log("all done!")
        process.exit(0);
    } catch (err){
        console.log(err)
    }
}

startSeedin()