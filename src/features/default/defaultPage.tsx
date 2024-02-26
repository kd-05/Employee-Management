import { useNavigate } from "react-router-dom";
import styles from "./defaultPage.module.css";

export default function DefaultPage() {
  const navigate = useNavigate();

  /**
   * Method to navigate user to add employee page.
   */
  const handleAddEmployee = () => {
    navigate("/add");
  };

  /**
   * Method to navigate user to list employees page.
   */
  const handleListEmployee = () => {
    navigate("/list");
  };

  return (
    <div className={styles["container"]}>
      <button onClick={handleAddEmployee}>Add Employee</button>
      <button onClick={handleListEmployee}>List Employee</button>
    </div>
  );
}
