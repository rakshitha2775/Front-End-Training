import api from "./api";

// Get all attendance
export const getAttendance = () => {
  return api.get("/attendance");
};

// Add attendance
export const addAttendance = (attendance) => {
  return api.post("/attendance", attendance);
};

// Update attendance
export const updateAttendance = (id, attendance) => {
  return api.put(`/attendance/${id}`, attendance);
};

// Delete attendance
export const deleteAttendance = (id) => {
  return api.delete(`/attendance/${id}`);
};