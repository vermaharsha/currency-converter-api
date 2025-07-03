// currencyRoutes.js
const express = require("express");
const router = express.Router();
const { convert } = require("../controllers/currencyController");
const { protect } = require("../middlewares/authMiddleware");

router.get("/convert", protect, convert);

module.exports = router;
