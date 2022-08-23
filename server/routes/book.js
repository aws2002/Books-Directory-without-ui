const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

// Routes
router.get("/", bookController.getAll);
router.get("/:id", bookController.getByID);
router.post("/", bookController.creat);
router.put("/:id", bookController.update);
router.delete("/:id", bookController.delete);

module.exports = router;
