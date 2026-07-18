const mongoose = require("mongoose");
require("dotenv").config();

const Employee = require("./models/Employee");
const employees = require("./employees.json");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB Connected");

    try {
      // Clear old data
      await Employee.deleteMany({});
      console.log("🗑 Old employees deleted");

      // Convert MockAPI data to MongoDB format
      const formattedEmployees = employees.map((emp, index) => ({
        employeeId: `EMP${String(index + 1).padStart(3, "0")}`,
        name: emp.name,
        email: emp.email,
        password: "123456",
        phone: "9876543210",
        gender: "Male",
        dob: new Date("2000-01-01"),
        department: emp.department,
        designation: "Employee",
        salary: 30000,
        joiningDate: new Date(),
        address: "Chennai",
        profileImage: "",
        status: "Active",
      }));

      await Employee.insertMany(formattedEmployees);

      console.log(
        `🎉 ${formattedEmployees.length} Employees Imported Successfully`
      );
    } catch (err) {
      console.log(err);
    }

    mongoose.connection.close();
  })
  .catch((err) => console.log(err));