const express = require('express');
const router = express.Router();

const locationRoutes = require("./locationController");
const travellerRoutes = require("./travellerController");
const tripsRoutes = require("./tripsController");

router.get("/",(req,res)=>{
    res.send("Travellers Welcome")
})

router.use("/api/locations",locationRoutes)
router.use("/api/travellers",travellerRoutes)
router.use("/api/trips",tripsRoutes)

module.exports = router;