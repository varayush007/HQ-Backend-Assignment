const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
  updateStatus,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, allUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);
router.post("updateStatus", protect, updateStatus);
router.get("/status", protect, getStatus);
// Add route?

module.exports = router;
