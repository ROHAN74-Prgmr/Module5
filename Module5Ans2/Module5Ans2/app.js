const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const productRoutes = require("./routes/productRoute");

dotenv.config();

const router = express();

router.use(express.json());

const Url = process.env.dbUrl;

mongoose.connect(Url).then(() => {
  console.log("db connected");
});

router.use("/product", productRoutes);

router.listen(process.env.PORT, () => {
  console.log("Server is running ");
});


//localhost:3000/product/post 