const express = require("express");

const router = express.Router();

const {
  getAttendance,
  addAttendance,
  updateAttendance,
  deleteAttendance,
} = require("../controllers/attendanceController");

// Get all attendance
router.get("/", getAttendance);

// Add attendance
router.post("/", addAttendance);

// Update attendance
router.put("/:id", updateAttendance);

// Delete attendance
router.delete("/:id", deleteAttendance);

module.exports = router;