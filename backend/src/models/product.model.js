const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  listOfImages: [{ type: String, required: true }],
  options: [{ type: String, required: false }],
  name: { type: String, required: true },
  description: { type: String, required: true },
  Productid: { type: Number, required: true },
  Quantity: { type: Number, required: true },
  Rating: { type: Number, required: true },
  brandName: { type: String, required: true },
});

module.exports = mongoose.model("product", productSchema);
