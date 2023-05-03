const express = require('express');
const router = express.Router();

const locationRoutes = require("./locationController");
const travellerRoutes = require("./travellerController");
const tripsRoutes = require("./tripsController");

router.get("/",(req,res)=>{
    res.send("this is the homepage!")
})

router.use("/api/locations",locationRoutes)
router.use("/api/travellers",travellerRoutes)
router.use("/api/tripss",tripsRoutes)

module.exports = router;