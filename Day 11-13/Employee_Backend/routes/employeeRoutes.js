const express = require("express");

const router = express.Router();

const {
  getEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

// Get All Employees
router.get("/", getEmployees);

// Get Employee by ID
router.get("/:id", getEmployeeById);

// Add Employee
router.post("/", addEmployee);

// Update Employee
router.put("/:id", updateEmployee);

// Delete Employee
router.delete("/:id", deleteEmployee);

module.exports = router;