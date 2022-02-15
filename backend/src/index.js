const productController = require("./controllers/product.controller.js");
const carouselController = require("./controllers/carousel.controller.js");

const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/products", productController);
app.use("/carousel", carouselController);

module.exports = app;
