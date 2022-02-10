const router = require("express").Router();
const {
  index,
  store,
  show,
  update,
  destroy,
} = require("../../controllers/settings/batchController");

router.route("/").get(index).post(store);
router.route("/:id").get(show).patch(update).delete(destroy);

// router.get("/", index);
// router.post("/", store);
// router.get("/:id", show);
// router.patch("/:id", update);
// router.delete("/:id", destroy);

module.exports = router;
