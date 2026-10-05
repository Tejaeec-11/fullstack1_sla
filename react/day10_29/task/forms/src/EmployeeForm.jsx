import { useState } from "react";

const initialEmployee = {
  employeeName: "",
  employeeId: "",
  department: "",
  role: "",
  salary: "",
};

function EmployeeForm() {
  const [employee, setEmployee] = useState(initialEmployee);
  const [submittedEmployee, setSubmittedEmployee] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedEmployee(employee); // show details on screen
    setEmployee(initialEmployee);   // clear all input fields
  };

  return (
    <div>
      <h2>Employee Details Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="employeeName"
          placeholder="Employee Name"
          value={employee.employeeName}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={employee.employeeId}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={employee.department}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="role"
          placeholder="Role"
          value={employee.role}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={employee.salary}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {submittedEmployee && (
        <div>
          <h3>Employee Details</h3>
          <p><strong>Name:</strong> {submittedEmployee.employeeName}</p>
          <p><strong>ID:</strong> {submittedEmployee.employeeId}</p>
          <p><strong>Department:</strong> {submittedEmployee.department}</p>
          <p><strong>Role:</strong> {submittedEmployee.role}</p>
          <p><strong>Salary:</strong> {submittedEmployee.salary}</p>
        </div>
      )}
    </div>
  );
}

export default EmployeeForm;