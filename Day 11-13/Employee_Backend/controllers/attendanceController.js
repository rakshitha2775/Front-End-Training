const Attendance = require("../models/Attendance");

// Get all attendance
const getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find()
      .populate("employee")
      .sort({ date: -1 });

    res.json(attendance);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Add attendance
const addAttendance = async (req, res) => {
  try {
    const attendance = new Attendance(req.body);

    const savedAttendance = await attendance.save();

    res.status(201).json(savedAttendance);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Update attendance
const updateAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json(attendance);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Delete attendance
const deleteAttendance = async (req, res) => {
  try {
    await Attendance.findByIdAndDelete(req.params.id);

    res.json({
      message: "Attendance Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAttendance,
  addAttendance,
  updateAttendance,
  deleteAttendance,
};