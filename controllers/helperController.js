const multer = require("multer");

const uploadFile = () => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "static/images");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });

  const upload = multer({ storage: storage }).single("file");
  return upload;
};

const fileUploader = (req, res) => {
  let uploadedFile = uploadFile();
  uploadedFile(req, res, function (err) {
    if (err) {
      return res.status(400).json({ error_code: 1, err_desc: err });
    }

    let url =
      req.protocol +
      "://" +
      req.get("host") +
      "/static/images/" +
      req.file.filename;

    return res.json({
      message: "File uploaded successfully",
      data: url,
    });
  });
};

module.exports = {
  fileUploader,
};
