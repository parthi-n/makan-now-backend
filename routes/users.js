const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verify-token");
const usersCtrl = require("../controllers/users");

router.get("/", verifyToken, usersCtrl.index);
router.get("/:userId", usersCtrl.get);

module.exports = router;
