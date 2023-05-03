const express = require("express");
const router = express.Router();
const {Trips, Location, Traveller} = require("../models/");
// api/trips

// Post new trip.
router.post("/", (req, res) => {
    Post.create({
        budget: req.body.budget,
        traveller_amount: req.body.traveller_amount
    })
    .then((newTrip) => {
        res.json(newTrip);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err });
      });
});

// Delete a location.
router.delete("/:id", (req, res) => {
    Location.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((delLoc) => {
        res.json(delLoc);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err });
      });
});

module.exports = router;