const express = require("express");
const app = express.Router();

const product = require("../models/Product");

app.get("/findall", async (req, res) => {
  try {
    const products = await product.find();
    res.status(201).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/:id", async (req, res) => {
  try {
    const products = await product.findById(req.params.id);
    res.status(201).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/post", async (req, res) => {
  const { name, description, price, category, stock } = req.body;

  try {
    const products = await product.create({
      name,
      description,
      price,
      category,
      stock,
    });

    res.status(201).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/:id", async (req, res) => {
  try {
    const updProduct = await product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(201).json(updProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.patch("/:id", async (req, res) => {
  try {
    const updProduct = await product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    re.status(201).json(updProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const product = await product.findByIdAndDelete(req.params.id);

    re.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = app;
