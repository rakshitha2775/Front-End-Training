const Employee = require("../models/Employee");
const bcrypt = require("bcryptjs");
// =========================
// Get All Employees
// =========================
const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();

    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =========================
// Get Single Employee
// =========================
const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee Not Found",
      });
    }

    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =========================
// Add Employee
// =========================
const addEmployee = async (req, res) => {
  try {

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const employee = await Employee.create({
      ...req.body,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Employee Added Successfully",
      employee,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// =========================
// Update Employee
// =========================
const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!employee) {
      return res.status(404).json({
        message: "Employee Not Found",
      });
    }

    res.status(200).json({
      message: "Employee Updated Successfully",
      employee,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =========================
// Delete Employee
// =========================
const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee Not Found",
      });
    }

    res.status(200).json({
      message: "Employee Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};