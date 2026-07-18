import api from "./api";

// Get all employees
export const getEmployees = () => {
  return api.get("/employees");
};

// Get one employee
export const getEmployeeById = (id) => {
  return api.get(`/employees/${id}`);
};

// Add employee
export const addEmployee = (employee) => {
  return api.post("/employees", employee);
};

// Update employee
export const updateEmployee = (id, employee) => {
  return api.put(`/employees/${id}`, employee);
};

// Delete employee
export const deleteEmployee = (id) => {
  return api.delete(`/employees/${id}`);
};