const express = require("express");

const router = express.Router();

const Carousel = require("../models/carousel.model");

router.post("/", async (req, res) => {
  const carousel = await Carousel.create(req.body);
  res.send({ carousel });
});

router.get("/", async (req, res) => {
  const carousel = await Carousel.find({}).lean().exec();
  //   console.log(carousel);
  res.send(carousel);
});

module.exports = router;
