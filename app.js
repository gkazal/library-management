// Include Dependency
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const { connectDB, sequelize } = require("./config/db");
const multer = require("multer");
const path = require("path");

// Import Routes
const librarianDepartmentRoutes = require("./routes/librarian/departmentRoutes");
const librarianStudentRoutes = require("./routes/librarian/studentRoutes");
const librarianBatchRoutes = require("./routes/librarian/batchRoutes");
const Student = require("./models/Student");

// Assign Express App
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("images"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // const nameSplited = file.originalname.split(".");
    // cb(null, uniqueSuffix + "." + nameSplited[nameSplited.length - 1]);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
const fileUploader = upload.single("file");

app.post("/file-uploader", upload.single("file"), function (req, res) {
  if (req.file) {
    let url =
      req.protocol + "://" + req.get("host") + "/images/" + req.file.filename;
    return res.json({
      message: "File Uplaod",
      data: url,
    });
  }
});

// App Routes
app.use("/librarian/departments", librarianDepartmentRoutes);
app.use("/librarian/students", librarianStudentRoutes);
app.use("/librarian/batches", librarianBatchRoutes);

// for create table only...
app.get("/db-migrate", async (req, res) => {
  await Student.drop();
  sequelize.sync();

  console.log("Table migrate to database");
  return res.json({
    status: "success",
    message: "Table migrate to database",
  });
});

// Port
const PORT = process.env.PORT || 5500;

// Server Listening
app.listen(PORT, function () {
  console.log("Server is running");
  connectDB();
});
