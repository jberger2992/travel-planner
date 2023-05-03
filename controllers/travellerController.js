const express = require("express");
const router = express.Router();
const {Traveller, Trips} = require("../models/");
// api/travellers

// Get all travellers.
router.get("/", (req, res) => {
    Traveller.findAll()
    .then((trav) => {
        res.json(trav);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err });
    });
});

// Get specific traveller with associated trips.
router.get("/:id", (req, res) => {
    Traveller.findByPk(req.params.id,{include:[Trips]})
      .then((travData) => {
        res.json(travData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err });
      });
  });

// Post new traveller.
router.post("/", (req, res) => {
    Traveller.create({
        name: req.body.name,
        email: req.body.email
    })
    .then((newTrav) => {
        res.json(newTrav);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err });
      });
});

// Delete a Traveller.
router.delete("/:id", (req, res) => {
    Traveller.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((delTrav) => {
        res.json(delTrav);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err });
      });
  });