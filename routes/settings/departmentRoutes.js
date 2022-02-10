const router = require("express").Router();
const {
  index,
  store,
  update,
  destroy,
  show,
} = require("../../controllers/settings/departmentController");

router.route("/").get(index).post(store);
router.route("/:id").get(show).patch(update).delete(destroy);

// router.get("/", index);
// router.post("/", store);
// router.get("/:id", show);
// router.patch("/:id", update);
// router.delete("/:id", destroy);

module.exports = router;
