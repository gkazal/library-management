const multer = require("multer");

const router = require("express").Router();

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

router.post("/file-uploader", upload.single("file"), function (req, res) {
  if (req.file) {
    let url =
      req.protocol + "://" + req.get("host") + "/images/" + req.file.filename;
    return res.json({
      message: "File Uplaod",
      data: url,
    });
  }
});

module.exports = router;
