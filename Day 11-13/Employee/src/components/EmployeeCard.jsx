function EmployeeCard({ employee, onDelete, onEdit }) {
  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.department}</td>
      <td>{employee.email}</td>
      <td className="action-buttons">
        <button
          className="edit-btn"
          onClick={() => onEdit(employee)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(employee.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default EmployeeCard;