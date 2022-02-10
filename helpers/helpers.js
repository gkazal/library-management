const serverError = (res, e) => {
  return res.status(500).json({
    status: "server_error",
    message: e.message,
  });
};

const itemNotFound = (res, code = 404, message = "Item not found") => {
  return res.status(code).json({
    status: "error",
    message: message,
  });
};

module.exports = { serverError, itemNotFound };
