const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },
  stock: {
    type: String,
    required: true,
    default: 0,
  },
});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
