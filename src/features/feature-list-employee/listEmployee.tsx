import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee } from "../employeeSlice";
import { RootState } from "../../app/store";
import { Link, useNavigate } from "react-router-dom";
import styles from "./listEmployee.module.css";

export default function ListEmployee() {
  const employees = useSelector((state: RootState) => state.employee);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * Method to edit details of employee.
   * @param employeeId Employee ID of employee clicked.
   */
  const handleEdit = (employeeId: string) => {
    navigate(`/edit/${employeeId}`);
  };

  /**
   * Method to delete employee from list.
   * @param employeeId Employee ID of employee clicked.
   */
  const handleDelete = (employeeId: string) => {
    dispatch(deleteEmployee(employeeId));
  };

  return (
    <>
      <div className={styles["container"]}>
        <h2>Employee List</h2>

        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Birth Date</th>
              <th>Department</th>
              <th>Experience (in years)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.fullName}</td>
                <td>{employee.birthDate}</td>
                <td>{employee.department}</td>
                <td>{employee.experience}</td>
                <td>
                  <button onClick={() => handleEdit(employee.id)}>Edit</button>
                  <button onClick={() => handleDelete(employee.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/add">Go to Add Employee Page</Link>
      </div>
    </>
  );
}
