const express = require("express");

const router = express.Router();

const Product = require("../models/product.model");

// router.get("/products", async (req, res) => {

// })

router.post("/", async (req, res) => {
  const prod = await Product.create(req.body);
  res.send({ prod });
});
// {
//   $or: [{ gender: "Male" }, { age: 42 }];
// }
router.get("/", async (req, res) => {
  const prod = await Product.find({
    $or: [
      { name: req.query.q },
      { brandName: req.query.q },
      { description: req.query.name },
    ],
  })
    .lean()
    .exec();
  res.send(prod);
});

module.exports = router;
