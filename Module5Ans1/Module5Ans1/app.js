const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();

const app = express();
app.use(express.json());

const dburl = process.env.dburl;

// to establish a connection to the MongoDB database
mongoose.connect(dburl).then(() => {
  console.log("DB Connected");
});

// Use Routes
app.use("/api", taskRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
