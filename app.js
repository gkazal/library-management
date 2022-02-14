// Include Dependency
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const { connectDB } = require("./config/db");

// Import Routes
const departmentRoutes = require("./routes/settings/departmentRoutes");
const batchRoutes = require("./routes/settings/batchRoutes");
const systemRoutes = require("./routes/systemRoutes");
const studentRoutes = require("./routes/librarian/studentRoutes");
const bookRoutes = require("./routes/librarian/bookRoutes");
const authorRoutes = require("./routes/librarian/authorRoutes");
const siteRoutes = require("./routes/siteRoutes");

// Assign Express App
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("static"));

// App Routes
app.use("/system", systemRoutes);
app.use("/settings/departments", departmentRoutes);
app.use("/settings/batches", batchRoutes);
app.use("/librarian/students", studentRoutes);
app.use("/librarian/authors", authorRoutes);
app.use("/librarian/books", bookRoutes);

app.use("/site", siteRoutes);

// Port
const PORT = process.env.PORT || 5500;

// Server Listening
app.listen(PORT, function () {
  console.log("Server is running");
  connectDB();
});
