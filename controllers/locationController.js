const express = require("express");
const router = express.Router();
const {Location, Trips} = require("../models/");
// api/locations

// Get all locations.
router.get("/", (req, res) => {
    Location.findAll()
    .then((loc) => {
        res.json(loc);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err });
    });
});

// Get specific location with associated trips.
router.get("/:id", (req, res) => {
    Location.findByPk(req.params.id,{include:[Trips]})
      .then((locData) => {
        res.json(locData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err });
      });
  });

// Post new location.
router.post("/", (req, res) => {
    Location.create({
        name: req.body.name
    })
    .then((newLoc) => {
        res.json(newLoc);
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